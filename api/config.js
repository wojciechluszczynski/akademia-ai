// GET /api/config — returns public Supabase config from environment variables
module.exports = function handler(req, res) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    return res.status(503).json({ error: 'Supabase not configured' });
  }

  res.setHeader('Cache-Control', 'no-store');
  res.json({ supabaseUrl: url, supabaseAnonKey: key });
};
