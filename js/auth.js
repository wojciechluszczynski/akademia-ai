// ============================================
// AKADEMIA AI — Auth
// Supabase gdy skonfigurowany, mock fallback
// Single-session enforcement per account
// ============================================

const _SB_URL = (window.SUPABASE_URL  || '').trim();
const _SB_KEY = (window.SUPABASE_ANON_KEY || '').trim();
const USE_SUPABASE = _SB_URL.startsWith('https://') && _SB_KEY.length > 20;

let sb = null;
if (USE_SUPABASE && window.supabase) {
  sb = window.supabase.createClient(_SB_URL, _SB_KEY, {
    auth: { persistSession: true, autoRefreshToken: true }
  });
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

// ── MOCK (bez Supabase) ───────────────────────
const MOCK_USERS = {
  'DEMO_EMAIL_REMOVED': { password:'demo123', name:'Wojciech Łuszczyński', plan:'pro',  id:'u001' },
  'demo@akademia.ai':     { password:'demo123', name:'Demo User',           plan:'free', id:'u002' },
};
const _mockTokens = {};

async function mockLogin(email, password) {
  const u = MOCK_USERS[email];
  if (!u || u.password !== password) throw new Error('Nieprawidłowy email lub hasło');
  const token = genToken();
  _mockTokens[u.id] = token;
  const user = { id:u.id, name:u.name, email, plan:u.plan };
  storeSession(user, token);
  return { user, token };
}

async function mockRegister(name, email, password) {
  if (MOCK_USERS[email]) throw new Error('Ten email jest już zarejestrowany');
  const id = 'u' + Date.now();
  MOCK_USERS[email] = { password, name, plan:'free', id };
  return mockLogin(email, password);
}

async function mockVerify() {
  const token = getStoredToken();
  const raw   = localStorage.getItem('ak_user');
  if (!token || !raw) return null;
  try {
    const user = JSON.parse(raw);
    const valid = _mockTokens[user.id];
    if (valid && valid !== token) { clearSession(); return null; }
    return user;
  } catch { clearSession(); return null; }
}

// ── SUPABASE AUTH ─────────────────────────────
async function sbLogin(email, password) {
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);

  const token = genToken();
  await sb.auth.updateUser({ data: { session_token: token } });

  const meta = data.user.user_metadata || {};
  const user = { id:data.user.id, name:meta.name || email.split('@')[0], email:data.user.email, plan:meta.plan || 'free' };
  storeSession(user, token);
  return { user, token };
}

async function sbRegister(name, email, password) {
  const { data, error } = await sb.auth.signUp({
    email, password,
    options: { data: { name, plan:'free', session_token:'' } }
  });
  if (error) throw new Error(error.message);
  if (data.user && !data.session) return { user:null, needsConfirmation:true };
  return sbLogin(email, password);
}

async function sbVerify() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) { clearSession(); return null; }

  const localToken = getStoredToken();
  if (!localToken) { clearSession(); return null; }

  // Single-session: compare local token vs server token
  const { data: { user: sbUser } } = await sb.auth.getUser();
  const serverToken = sbUser?.user_metadata?.session_token;
  if (serverToken && serverToken !== localToken) { clearSession(); return null; }

  try { return JSON.parse(localStorage.getItem('ak_user')); } catch { return null; }
}

// ── PUBLIC API ────────────────────────────────
async function register(name, email, password) {
  if (!name || name.length < 2)    throw new Error('Podaj imię i nazwisko');
  if (!email || !email.includes('@')) throw new Error('Nieprawidłowy email');
  if (!password || password.length < 8) throw new Error('Hasło musi mieć min. 8 znaków');
  return USE_SUPABASE ? sbRegister(name, email, password) : mockRegister(name, email, password);
}

async function login(email, password) {
  return USE_SUPABASE ? sbLogin(email, password) : mockLogin(email, password);
}

async function verifySession() {
  return USE_SUPABASE ? sbVerify() : mockVerify();
}

async function logout() {
  if (USE_SUPABASE && sb) await sb.auth.signOut();
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

function showToast(msg, type = 'success') {
  let c = document.getElementById('toast-container');
  if (!c) { c = document.createElement('div'); c.id = 'toast-container'; c.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px'; document.body.appendChild(c); }
  const t = document.createElement('div');
  t.style.cssText = 'background:var(--bg-hover,#211e1a);border:1px solid var(--line-2,rgba(255,255,255,.1));border-radius:10px;padding:10px 14px;font-size:.875rem;color:var(--text-1,#fff);max-width:300px';
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; }, 2700);
  setTimeout(() => t.remove(), 3000);
}

window.AkademiaAuth = { register, login, logout, verifySession, requireAuth, redirectIfLoggedIn, showToast, isSupabase: USE_SUPABASE };
