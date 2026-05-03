// POST /api/create-checkout
// Body: { plan: 'serie1' | 'serie2' | 'all', userId: string, email: string }
// Redirects to Stripe Checkout

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PRICES = {
  serie1: 'price_1TT5atIyEDJsP5xxupzUGnda',
  serie2: 'price_1TT5cZIyEDJsP5xxm1XPvS8B',
  serie3: process.env.STRIPE_PRICE_SERIE3 || '', // dodaj w Vercel env po utworzeniu produktu
  all:    'price_1TT5dCIyEDJsP5xxqjcBMjlW',
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://academy.wojciech.io';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const plan   = req.method === 'POST' ? req.body?.plan   : req.query.plan;
  const userId = req.method === 'POST' ? req.body?.userId : req.query.userId;
  const email  = req.method === 'POST' ? req.body?.email  : req.query.email;

  const priceId = PRICES[plan];
  if (!priceId) {
    return res.status(400).json({ error: `Nieznany plan: ${plan}` });
  }

  const planNames = {
    serie1: 'Akademia AI — Seria 1 (AI Stack 2026)',
    serie2: 'Akademia AI — Seria 2 (Outbound Machine)',
    serie3: 'Akademia AI — Seria 3 (Voice, Video, Brand)',
    all:    'Akademia AI — Wszystkie serie',
  };

  try {
    const sessionParams = {
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${BASE_URL}/dashboard.html?payment=success&plan=${plan}`,
      cancel_url:  `${BASE_URL}/dashboard.html?payment=cancelled`,
      metadata: {
        userId: userId || '',
        plan,
        planName: planNames[plan],
      },
      payment_intent_data: {
        metadata: { userId: userId || '', plan },
      },
      // Automatyczna faktura PDF wysyłana na email kupującego przez Stripe
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: `${planNames[plan]} — dożywotni dostęp`,
          footer: 'Akademia AI · Wojciech Łuszczyński · wojciech.io · Zwolnienie z VAT art. 113 ustawy o VAT',
          rendering_options: { amount_tax_display: 'exclude_tax' },
        },
      },
      allow_promotion_codes: true,
    };

    // Pre-fill email if user is logged in
    if (email) sessionParams.customer_email = email;

    const session = await stripe.checkout.sessions.create(sessionParams);
    res.redirect(303, session.url);
  } catch (err) {
    console.error('Stripe create-checkout error:', err);
    res.status(500).json({ error: err.message });
  }
};
