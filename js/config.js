// Akademia AI — Supabase config loader
// Klucze pobierane z /api/config (env vars Vercel). NIE umieszczaj tu prawdziwych wartości.
(function () {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/config', false); // synchronous — musi się wykonać zanim auth.js się zainicjuje
    xhr.send();
    if (xhr.status === 200) {
      var cfg = JSON.parse(xhr.responseText);
      window.SUPABASE_URL      = cfg.supabaseUrl      || '';
      window.SUPABASE_ANON_KEY = cfg.supabaseAnonKey  || '';
    }
  } catch (e) {
    console.warn('Config load failed — Supabase disabled:', e.message);
    window.SUPABASE_URL      = '';
    window.SUPABASE_ANON_KEY = '';
  }
})();
