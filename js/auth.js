// ============================================
// AKADEMIA AI — Auth & Token Security
// Single-session enforcement per user
// ============================================

const SUPABASE_URL = window.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// Init Supabase (loaded via CDN in HTML)
const supabase = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// ── SESSION TOKEN UTILS ──────────────────────
function generateSessionToken() {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
}

function getStoredToken() {
  return localStorage.getItem('akademia_session_token');
}

function storeToken(token) {
  localStorage.setItem('akademia_session_token', token);
}

function clearToken() {
  localStorage.removeItem('akademia_session_token');
  localStorage.removeItem('akademia_user');
}

// ── MOCK AUTH (działa bez Supabase do prezentacji) ──
const MOCK_USERS = {
  'DEMO_EMAIL_REMOVED': {
    password: 'demo123',
    name: 'Wojciech Łuszczyński',
    plan: 'pro',
    id: 'user-001'
  },
  'demo@akademia.ai': {
    password: 'demo123',
    name: 'Demo User',
    plan: 'free',
    id: 'user-002'
  }
};

let mockSessions = {}; // userId → sessionToken (single session enforcement)

// ── REGISTER ────────────────────────────────
async function register(name, email, password) {
  // Validation
  if (!name || name.length < 2) throw new Error('Podaj imię i nazwisko');
  if (!email || !email.includes('@')) throw new Error('Nieprawidłowy adres email');
  if (!password || password.length < 8) throw new Error('Hasło musi mieć min. 8 znaków');

  if (MOCK_USERS[email]) throw new Error('Ten email jest już zarejestrowany');

  // Mock register
  const userId = 'user-' + Date.now();
  MOCK_USERS[email] = { password, name, plan: 'free', id: userId };

  // Auto-login after register
  return await login(email, password);
}

// ── LOGIN ────────────────────────────────────
async function login(email, password) {
  const user = MOCK_USERS[email];
  if (!user || user.password !== password) {
    throw new Error('Nieprawidłowy email lub hasło');
  }

  // Generate new session token → invalidates all previous sessions
  const sessionToken = generateSessionToken();
  mockSessions[user.id] = sessionToken;

  // Store locally
  storeToken(sessionToken);
  localStorage.setItem('akademia_user', JSON.stringify({
    id: user.id,
    name: user.name,
    email: email,
    plan: user.plan,
    sessionToken
  }));

  return { user: { ...user, email }, sessionToken };
}

// ── VERIFY SESSION ───────────────────────────
async function verifySession() {
  const token = getStoredToken();
  const userStr = localStorage.getItem('akademia_user');

  if (!token || !userStr) return null;

  try {
    const user = JSON.parse(userStr);

    // Check if this session is still valid (not replaced by another login)
    const validToken = mockSessions[user.id];
    if (validToken && validToken !== token) {
      // Session was invalidated — someone else logged in
      clearToken();
      return null;
    }

    return user;
  } catch {
    clearToken();
    return null;
  }
}

// ── LOGOUT ──────────────────────────────────
async function logout() {
  const userStr = localStorage.getItem('akademia_user');
  if (userStr) {
    const user = JSON.parse(userStr);
    delete mockSessions[user.id];
  }
  clearToken();
  window.location.href = 'login.html';
}

// ── GUARD (run on protected pages) ──────────
async function requireAuth() {
  const user = await verifySession();
  if (!user) {
    window.location.href = 'login.html?reason=auth';
    return null;
  }
  return user;
}

// ── REDIRECT IF LOGGED IN ────────────────────
async function redirectIfLoggedIn() {
  const user = await verifySession();
  if (user) {
    window.location.href = 'dashboard.html';
  }
}

// ── TOAST NOTIFICATIONS ──────────────────────
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container') ||
    (() => {
      const el = document.createElement('div');
      el.id = 'toast-container';
      el.className = 'toast-container';
      document.body.appendChild(el);
      return el;
    })();

  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || '📢'}</span> ${message}`;
  container.appendChild(toast);

  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; }, 2700);
  setTimeout(() => toast.remove(), 3000);
}

// ── EXPORT ──────────────────────────────────
window.AkademiaAuth = { register, login, logout, verifySession, requireAuth, redirectIfLoggedIn, showToast };
