// GET  /api/cert?userId=X&serie=1   → generate (or return existing) cert, redirect to /cert-view.html?token=X
// GET  /api/cert/verify?token=X     → JSON { valid, name, serie, issued_at }

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL     = process.env.SUPABASE_URL;
const SUPABASE_SRV_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const SERIE_NAMES = {
  '1':   'AI Stack 2026',
  '2':   'Outbound Machine',
  '3':   'Voice, Video & Brand',
  '4':   'B2B Marketing AI',
  'all': 'Wszystkie serie',
};

function genToken(userId, serie) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 8; i++) rand += chars[Math.floor(Math.random() * chars.length)];
  const prefix = serie === 'all' ? 'PRO' : `S${serie}`;
  return `AA-${prefix}-2026-${rand}`;
}

module.exports = async function handler(req, res) {
  const sb = createClient(SUPABASE_URL, SUPABASE_SRV_KEY);

  // ── Verify endpoint ────────────────────────
  if (req.url?.includes('/verify') || req.query.verify) {
    const token = req.query.token;
    if (!token) return res.status(400).json({ valid: false, error: 'No token' });

    const { data, error } = await sb
      .from('certificates')
      .select('token, name, email, serie, issued_at')
      .eq('token', token)
      .single();

    if (error || !data) return res.json({ valid: false });
    return res.json({
      valid: true,
      token: data.token,
      name: data.name,
      serie: data.serie,
      serie_name: SERIE_NAMES[data.serie] || data.serie,
      issued_at: data.issued_at,
    });
  }

  // ── Generate / fetch cert ──────────────────
  const { userId, serie = '1' } = req.query;
  if (!userId) return res.status(400).json({ error: 'userId required' });

  // Check if cert already exists for this user+serie
  const { data: existing } = await sb
    .from('certificates')
    .select('token')
    .eq('user_id', userId)
    .eq('serie', serie)
    .single();

  if (existing?.token) {
    return res.redirect(302, `/cert-view.html?token=${existing.token}`);
  }

  // Fetch user info
  const { data: { user }, error: userErr } = await sb.auth.admin.getUserById(userId);
  if (userErr || !user) return res.status(404).json({ error: 'User not found' });

  const name  = user.user_metadata?.name || user.email.split('@')[0];
  const email = user.email;
  const token = genToken(userId, serie);

  // Insert certificate
  const { error: insertErr } = await sb.from('certificates').insert({
    token,
    user_id: userId,
    name,
    email,
    serie,
    issued_at: new Date().toISOString(),
  });

  if (insertErr) {
    console.error('cert insert error:', insertErr);
    return res.status(500).json({ error: insertErr.message });
  }

  return res.redirect(302, `/cert-view.html?token=${token}`);
};
