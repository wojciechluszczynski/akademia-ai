// POST /api/webhook
// Receives Stripe events, updates Supabase user plan, sends Resend email

const stripe   = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

// Raw body needed for Stripe signature verification
module.exports.config = { api: { bodyParser: false } };

const SUPABASE_URL      = 'https://SUPABASE_URL_REMOVED';
const SUPABASE_SRV_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY;
const WEBHOOK_SECRET    = process.env.STRIPE_WEBHOOK_SECRET;
const RESEND_KEY        = process.env.RESEND_API_KEY;

// plan metadata → supabase plan value
const PLAN_MAP = {
  serie1: 'serie1',
  serie2: 'serie2',
  all:    'pro',      // full access
};

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const rawBody = await getRawBody(req);
  const sig     = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ── Handle checkout.session.completed ─────────────────
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    const userId    = session.metadata?.userId;
    const plan      = session.metadata?.plan;
    const planName  = session.metadata?.planName;
    const email     = session.customer_email || session.customer_details?.email;
    const supabase  = createClient(SUPABASE_URL, SUPABASE_SRV_KEY);

    console.log(`Payment OK — user: ${userId || email}, plan: ${plan}`);

    // ── Update Supabase user plan ─────────────────────
    if (userId && userId.startsWith('demo-')) {
      // Demo accounts — skip Supabase update
      console.log('Demo account purchase — skipping Supabase update');
    } else if (userId) {
      try {
        // Get current metadata to merge (not overwrite)
        const { data: { user }, error: getErr } = await supabase.auth.admin.getUserById(userId);
        if (getErr) throw getErr;

        const newPlan     = PLAN_MAP[plan] || 'pro';
        const oldPurchased = user.user_metadata?.purchased_plans || [];

        await supabase.auth.admin.updateUserById(userId, {
          user_metadata: {
            ...user.user_metadata,
            plan: newPlan,
            purchased_plans: [...oldPurchased, plan],
            purchased_at: new Date().toISOString(),
            stripe_session: session.id,
          }
        });
        console.log(`Supabase plan updated → ${newPlan} for user ${userId}`);
      } catch (err) {
        console.error('Supabase update error:', err);
        // Don't fail — log and continue so Stripe doesn't retry
      }
    } else if (email) {
      // Fallback: find user by email
      try {
        const { data: { users } } = await supabase.auth.admin.listUsers({ perPage: 1000 });
        const user = users?.find(u => u.email?.toLowerCase() === email.toLowerCase());
        if (user) {
          const newPlan = PLAN_MAP[plan] || 'pro';
          await supabase.auth.admin.updateUserById(user.id, {
            user_metadata: {
              ...user.user_metadata,
              plan: newPlan,
              purchased_plans: [...(user.user_metadata?.purchased_plans || []), plan],
              purchased_at: new Date().toISOString(),
              stripe_session: session.id,
            }
          });
          console.log(`Supabase plan updated (by email) → ${newPlan} for ${email}`);
        }
      } catch (err) {
        console.error('Supabase email-lookup error:', err);
      }
    }

    // ── Send confirmation email via Resend ────────────
    if (RESEND_KEY && email) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Akademia AI <hello@wojciech.io>',
            to: email,
            subject: `✅ Dostęp aktywowany — ${planName}`,
            html: buildEmailHtml(email, planName, plan),
          }),
        });
        console.log(`Confirmation email sent to ${email}`);
      } catch (err) {
        console.error('Resend error:', err);
      }
    }
  }

  res.json({ received: true });
};

function buildEmailHtml(email, planName, plan) {
  const dashboardUrl = 'https://academy.wojciech.io/dashboard.html';
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0f0e0d;font-family:Inter,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="margin-bottom:32px;">
      <span style="font-size:1.1rem;font-weight:900;letter-spacing:-0.02em;color:#fff;">AA</span>
      <span style="font-size:1.1rem;font-weight:900;letter-spacing:-0.02em;color:#f97316;margin-left:6px;">Akademia AI</span>
    </div>
    <h1 style="font-size:1.75rem;font-weight:900;letter-spacing:-0.04em;color:#fff;margin:0 0 8px;">
      Dostęp aktywowany ✅
    </h1>
    <p style="color:#8c8279;font-size:1rem;margin:0 0 32px;">
      Zakup zakończony. Twoje konto ma teraz pełny dostęp do:
    </p>
    <div style="background:#1a1714;border:1px solid #2a2520;border-radius:12px;padding:20px 24px;margin-bottom:32px;">
      <div style="font-size:0.75rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#f97316;margin-bottom:8px;">Zakupiony plan</div>
      <div style="font-size:1.125rem;font-weight:700;color:#fff;">${planName}</div>
    </div>
    <a href="${dashboardUrl}" style="display:block;background:#f97316;color:#fff;text-align:center;padding:14px 24px;border-radius:8px;font-weight:700;font-size:1rem;text-decoration:none;margin-bottom:32px;">
      Przejdź do kursu →
    </a>
    <p style="color:#5c5450;font-size:0.8125rem;line-height:1.6;margin:0;">
      Masz pytania? Odpisz na tego emaila lub napisz na <a href="mailto:hello@wojciech.io" style="color:#f97316;">hello@wojciech.io</a><br>
      Wojciech Łuszczyński · Akademia AI
    </p>
  </div>
</body>
</html>`;
}
