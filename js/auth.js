// ============================================
// AKADEMIA AI — Auth
// Demo accounts zawsze przez mock.
// Pozostałe konta: Supabase gdy skonfigurowany.
// Single-session enforcement per account.
// ============================================

const _SB_URL = (window.SUPABASE_URL  || '').trim();
const _SB_KEY = (window.SUPABASE_ANON_KEY || '').trim();
const USE_SUPABASE = _SB_URL.startsWith('https://') && _SB_KEY.length > 20;

let sb = null;
if (USE_SUPABASE && window.supabase) {
  try {
    sb = window.supabase.createClient(_SB_URL, _SB_KEY, {
      auth: { persistSession: true, autoRefreshToken: true }
    });
  } catch(e) { console.warn('Supabase init failed:', e); }
}

// ── TOKEN UTILS ───────────────────────────────
function genToken() {
  const a = new Uint8Array(32); crypto.getRandomValues(a);
  return Array.from(a, b => b.toString(16).padStart(2, '0')).join('');
}
function getStoredToken() { return localStorage.getItem('ak_token'); }
function storeSession(user, token) {
  localStorage.setItem('ak_token', token);
  localStorage.setItem('ak_user', JSON.stringify({ ...user, token }));
}
function clearSession() {
  ['ak_token', 'ak_user'].forEach(k => localStorage.removeItem(k));
}

// ── DEMO / MOCK ACCOUNTS ──────────────────────
// Te konta zawsze działają — niezależnie od Supabase.
// Wystarczą do prezentacji i testów.
const DEMO_ACCOUNTS = {
  'demo@akademia.ai': { password:'demo123', name:'Demo User', plan:'free', id:'demo-002' },
};
const _demoTokens = {};

function isDemoAccount(email) {
  return email in DEMO_ACCOUNTS;
}

async function demoLogin(email, password) {
  const u = DEMO_ACCOUNTS[email];
  if (!u || u.password !== password) throw new Error('Nieprawidłowy email lub hasło');
  const token = genToken();
  _demoTokens[u.id] = token;
  const user = { id:u.id, name:u.name, email, plan:u.plan, isDemo:true };
  storeSession(user, token);
  return { user, token };
}

async function demoVerify() {
  const token = getStoredToken();
  const raw   = localStorage.getItem('ak_user');
  if (!token || !raw) return null;
  try {
    const user = JSON.parse(raw);
    if (!user.isDemo) return null;
    const valid = _demoTokens[user.id];
    // Jeśli token nie jest w pamięci (page refresh) — akceptujemy z localStorage
    if (valid && valid !== token) { clearSession(); return null; }
    return user;
  } catch { clearSession(); return null; }
}

// ── SUPABASE AUTH ─────────────────────────────
async function sbLogin(email, password) {
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);

  const token = genToken();
  // Zapisz token sesji w user_metadata (single-session enforcement)
  await sb.auth.updateUser({ data: { session_token: token } }).catch(() => {});

  const meta = data.user.user_metadata || {};
  const user = {
    id: data.user.id,
    name: meta.name || email.split('@')[0],
    email: data.user.email,
    plan: meta.plan || 'free'
  };
  storeSession(user, token);
  return { user, token };
}

async function sbRegister(name, email, password) {
  const { data, error } = await sb.auth.signUp({
    email, password,
    options: { data: { name, plan: 'free', session_token: '' } }
  });
  if (error) throw new Error(error.message);
  // Jeśli email confirmation wyłączone — od razu zalogowany
  if (data.session) return sbLogin(email, password);
  // Email confirmation włączone
  return { user: null, needsConfirmation: true };
}

async function sbVerify() {
  try {
    const { data: { session } } = await sb.auth.getSession();
    if (!session) { clearSession(); return null; }

    const localToken = getStoredToken();
    if (!localToken) { clearSession(); return null; }

    const { data: { user: sbUser } } = await sb.auth.getUser();
    const serverToken = sbUser?.user_metadata?.session_token;
    // Jeśli server token ustawiony i różny od lokalnego — ktoś inny się zalogował
    if (serverToken && serverToken !== localToken) {
      clearSession();
      return null;
    }

    return JSON.parse(localStorage.getItem('ak_user'));
  } catch {
    return null;
  }
}

// ── PUBLIC API ────────────────────────────────

async function login(email, password) {
  // Demo accounts zawsze mock, reszta przez Supabase (lub mock fallback)
  if (isDemoAccount(email)) return demoLogin(email, password);
  if (USE_SUPABASE && sb)   return sbLogin(email, password);
  throw new Error('Demo: użyj konta demo@akademia.ai');
}

async function register(name, email, password) {
  if (!name || name.trim().length < 2)      throw new Error('Podaj imię i nazwisko');
  if (!email || !email.includes('@'))        throw new Error('Nieprawidłowy email');
  if (!password || password.length < 8)     throw new Error('Hasło musi mieć min. 8 znaków');
  if (isDemoAccount(email))                  throw new Error('Ten email jest już zajęty');
  if (USE_SUPABASE && sb) return sbRegister(name, email, password);
  // Mock fallback — nie wymaga Supabase
  const id = 'u' + Date.now();
  DEMO_ACCOUNTS[email] = { password, name, plan: 'free', id };
  return demoLogin(email, password);
}

async function verifySession() {
  // Najpierw sprawdź czy to demo sesja
  const raw = localStorage.getItem('ak_user');
  if (raw) {
    try {
      const u = JSON.parse(raw);
      if (u.isDemo) return demoVerify();
    } catch {}
  }
  if (USE_SUPABASE && sb) return sbVerify();
  return demoVerify();
}

async function logout() {
  if (USE_SUPABASE && sb) {
    try { await sb.auth.signOut(); } catch {}
  }
  clearSession();
  window.location.href = 'login.html';
}

async function requireAuth() {
  const user = await verifySession();
  if (!user) { window.location.href = 'login.html?reason=auth'; return null; }
  return user;
}

async function redirectIfLoggedIn() {
  const user = await verifySession();
  if (user) window.location.href = 'dashboard.html';
}

function showToast(msg, type = 'ok') {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  stack.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; }, 2700);
  setTimeout(() => t.remove(), 3000);
}

window.AkademiaAuth = {
  login, register, logout,
  verifySession, requireAuth, redirectIfLoggedIn,
  showToast,
  isSupabase: USE_SUPABASE,
  isDemoAccount
};
