// ============================================
// AKADEMIA AI — App v2
// Quiz engine + Progress + Certificate
// ============================================

// ── DATA ─────────────────────────────────────
const EPISODES = [
  { id:1,  serie:1, num:'01', emoji:'⚔️',  title_pl:'ChatGPT vs Claude vs Gemini vs Grok: mój werdykt po 20 latach',        title_en:'The LLM Battle: A 20-Year Marketer\'s Verdict',             desc_pl:'Testuję te same zadania w 5 modelach jednocześnie. Bez PR-u, bez hype\'u.',      desc_en:'Same tasks, 5 models, one verdict. No hype.',       duration:'11:24', tools:['ChatGPT','Claude','Gemini','Grok'], locked:false,  progress:65, hasQuiz:true  },
  { id:2,  serie:1, num:'02', emoji:'🔍',  title_pl:'Perplexity zjadło Google\'a. Ale nie do końca.',                        title_en:'Perplexity Killed Google. Almost.',                         desc_pl:'Research ICP: 8 min vs 45 min. Gdzie Perplexity odpada.',                       desc_en:'ICP research: 8 vs 45 min. Where it falls short.',  duration:'09:47', tools:['Perplexity','NotebookLM'],         locked:false,  progress:0,  hasQuiz:true  },
  { id:3,  serie:1, num:'03', emoji:'📓',  title_pl:'NotebookLM: ignorowałem go przez 3 miesiące. Błąd.',                  title_en:'NotebookLM: I Ignored It for 3 Months. Big Mistake.',       desc_pl:'40 stron research → NotebookLM → due diligence w 15 min.',                      desc_en:'40-page dump → NotebookLM → insights in 15 min.',   duration:'10:12', tools:['NotebookLM','Gemini'],              locked:true,   progress:0,  hasQuiz:true  },
  { id:4,  serie:1, num:'04', emoji:'💻',  title_pl:'Claude Code vs Cursor: który wygrał moje projekty?',                  title_en:'Claude Code vs Cursor: My 6-Month Non-Dev Review',          desc_pl:'Marketer bez tła dev buduje appki w obu środowiskach.',                         desc_en:'A non-dev builds apps in both. Real results.',      duration:'12:03', tools:['Claude Code','Cursor','GitHub'],    locked:true,   progress:0,  hasQuiz:false },
  { id:5,  serie:2, num:'01', emoji:'🎯',  title_pl:'Apollo vs Clay vs Hunter: gdzie szukam leadów w 2026',                title_en:'Apollo vs Clay vs Hunter: Where I Find Leads',              desc_pl:'500 ICP leads dla B2B SaaS — każde narzędzie, ten sam brief.',                  desc_en:'500 ICP leads, 3 tools, same brief. Brutal comparison.',duration:'10:55',tools:['Apollo','Clay','Hunter'],         locked:true,   progress:0,  hasQuiz:true  },
  { id:6,  serie:2, num:'02', emoji:'🤖',  title_pl:'Clay + Claude = personalizacja której nie odróżnisz od ręcznej',      title_en:'Clay + Claude: Personalization at Scale That Feels Human', desc_pl:'1000 kontaktów, 6 źródeł danych, opening line przez Claude.',                  desc_en:'1k contacts, 6 sources, Claude-powered opening lines.', duration:'11:38',tools:['Clay','Claude API'],               locked:true,   progress:0,  hasQuiz:false },
];

const MATERIALS = [
  { id:1, title:'LLM Comparison Matrix 2026',   desc:'Pełna tabela 6 modeli AI',            type:'md',   icon:'vi-md',   locked:false, serie:1 },
  { id:2, title:'Perplexity Research SOP',       desc:'Gotowy SOP do researchu',             type:'md',   icon:'vi-md',   locked:false, serie:1 },
  { id:3, title:'Clay Enrichment Flow',          desc:'Blueprint do importu w Clay',         type:'json', icon:'vi-json', locked:false, serie:1 },
  { id:4, title:'Marketing Stack 2026',          desc:'Pełny stack w formacie JSON',         type:'json', icon:'vi-json', locked:true,  serie:1 },
  { id:5, title:'Outbound Machine Complete',     desc:'End-to-end: ICP → signed deal',       type:'json', icon:'vi-json', locked:true,  serie:2 },
  { id:6, title:'Cold Email Framework 2026',     desc:'Co działa, co spamuje',               type:'md',   icon:'vi-md',   locked:true,  serie:2 },
  { id:7, title:'Series 1 Complete Vault',       desc:'Wszystkie materiały Serii 1',         type:'zip',  icon:'vi-zip',  locked:true,  serie:1 },
  { id:8, title:'ElevenLabs Full Guide',         desc:'Voices, Clones, Agents, Sound FX',   type:'md',   icon:'vi-md',   locked:true,  serie:3 },
];

const QUIZZES = {
  1: {
    title: 'Sprawdź wiedzę: LLM Battle',
    questions: [
      {
        q: 'Który model AI najlepiej sprawdza się do analizy długich dokumentów prawnych i naukowych?',
        options: ['ChatGPT-4o','Claude Opus','Gemini 2.5 Pro','Grok 3'],
        correct: 1,
        explanation: 'Claude ma największe okno kontekstowe i najwyższą precyzję przy dokumentach wymagających dokładności.'
      },
      {
        q: 'Czym wyróżnia się Perplexity na tle innych modeli AI?',
        options: ['Generowaniem kodu','Weryfikowalnymi źródłami w czasie rzeczywistym','Najszybszym działaniem','Klonowaniem głosu'],
        correct: 1,
        explanation: 'Perplexity specjalizuje się w wyszukiwaniu z cytowalnymi, weryfikowalnymi źródłami.'
      },
      {
        q: 'Który model wygrywa przy analizie sentymentu rynku i breaking news w czasie rzeczywistym?',
        options: ['Claude','DeepSeek','Grok','ChatGPT'],
        correct: 2,
        explanation: 'Grok ma bezpośredni dostęp do X (Twitter) i najszybszy dostęp do live data.'
      },
    ]
  },
  2: {
    title: 'Sprawdź wiedzę: Perplexity',
    questions: [
      {
        q: 'Jaka jest główna przewaga Perplexity nad Google w B2B research?',
        options: ['Jest darmowy','Podaje bezpośrednie odpowiedzi z cytowanymi źródłami','Ma lepszy UI','Działa offline'],
        correct: 1,
        explanation: 'Perplexity syntetyzuje informacje i podaje skąd pochodzi każda odpowiedź — Google daje tylko linki.'
      },
      {
        q: 'Do czego NIE powinieneś używać Perplexity?',
        options: ['Research konkurencji','SEO lokalne i intencja zakupowa','Academic literature','Monitoring trendów'],
        correct: 1,
        explanation: 'Perplexity słabo radzi sobie z intencją zakupową i lokalnymi wynikami — tu Google nadal wygrywa.'
      },
    ]
  },
  5: {
    title: 'Sprawdź wiedzę: Lead Generation',
    questions: [
      {
        q: 'Czym głównie różni się Clay od Apollo w kontekście lead gen?',
        options: ['Clay jest darmowy','Clay to silnik enrichmentu, Apollo to baza leadów','Apollo ma lepszy UI','Clay nie integruje się z CRM'],
        correct: 1,
        explanation: 'Clay jest narzędziem do enrichmentu i budowania workflow, Apollo to przede wszystkim baza kontaktów.'
      },
    ]
  },
};

// ── STATE ────────────────────────────────────
let currentUser = null;
let currentEpisode = null;
let isPlaying = false;
let currentProgress = 0;
let progressInterval = null;
let currentLang = 'pl';
let speedIndex = 0;
const speeds = [1, 1.25, 1.5, 1.75, 2];

// Quiz state
let quizEpId = null;
let quizQ = 0;
let quizAnswered = false;
let quizScore = 0;

// Progress store (persisted)
function getProgress() {
  try { return JSON.parse(localStorage.getItem('ep_progress') || '{}'); } catch { return {}; }
}
function saveProgress(epId, pct) {
  const p = getProgress(); p[epId] = pct;
  localStorage.setItem('ep_progress', JSON.stringify(p));
}
function getCompleted() {
  try { return JSON.parse(localStorage.getItem('ep_completed') || '[]'); } catch { return []; }
}
function markCompleted(epId) {
  const c = getCompleted(); if (!c.includes(epId)) c.push(epId);
  localStorage.setItem('ep_completed', JSON.stringify(c));
  updateSidebarProgress();
}
function getQuizResults() {
  try { return JSON.parse(localStorage.getItem('quiz_results') || '{}'); } catch { return {}; }
}
function saveQuizResult(epId, score, total) {
  const r = getQuizResults(); r[epId] = { score, total, passed: score >= Math.ceil(total * 0.6), date: new Date().toISOString() };
  localStorage.setItem('quiz_results', JSON.stringify(r));
}

// ── INIT ─────────────────────────────────────
async function initDashboard() {
  currentUser = await window.AkademiaAuth.requireAuth();
  if (!currentUser) return;

  const isPro = currentUser.plan === 'pro';

  document.getElementById('user-name').textContent = currentUser.name;
  document.getElementById('user-tier').textContent = isPro ? '⭐ Pro' : '⚪ Free';
  document.getElementById('user-tier').className = 'user-tier' + (isPro ? '' : ' free');
  document.getElementById('user-avatar').textContent = currentUser.name.charAt(0);

  // Nav
  document.querySelectorAll('.nav-item[data-section]').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      showSection(item.dataset.section);
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });

  document.getElementById('logout-btn')?.addEventListener('click', () => window.AkademiaAuth.logout());

  renderAll(isPro);
  updateSidebarProgress();
  showSection('home');
}

function renderAll(isPro) {
  renderHome(isPro);
  renderEpisodes(isPro);
  renderVault(isPro);
}

// ── SIDEBAR PROGRESS ──────────────────────────
function updateSidebarProgress() {
  const completed = getCompleted().length;
  const total = EPISODES.filter(e => !e.locked || (currentUser && currentUser.plan === 'pro')).length;
  const pct = total ? Math.round(completed / total * 100) : 0;
  const el = document.getElementById('sidebar-progress-fill');
  const lbl = document.getElementById('sidebar-progress-pct');
  if (el) el.style.width = pct + '%';
  if (lbl) lbl.textContent = pct + '%';
}

// ── SECTIONS ─────────────────────────────────
function showSection(name) {
  document.querySelectorAll('.section-content').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const el = document.getElementById('section-' + name);
  if (el) { el.style.display = 'block'; el.classList.add('active'); }
}

// ── HOME ──────────────────────────────────────
function renderHome(isPro) {
  const progress = getProgress();
  const completed = getCompleted();
  const inProgress = EPISODES.filter(e => (progress[e.id] || 0) > 0 && !completed.includes(e.id)).length;

  document.getElementById('stat-total').textContent = EPISODES.length;
  document.getElementById('stat-done').textContent  = completed.length;
  document.getElementById('stat-wip').textContent   = inProgress;
  document.getElementById('stat-files').textContent = MATERIALS.filter(m => !m.locked || isPro).length;

  // Continue card
  const inProg = EPISODES.find(e => (progress[e.id] || 0) > 0 && !getCompleted().includes(e.id));
  const continueEl = document.getElementById('continue-card');
  if (inProg && continueEl) {
    continueEl.style.display = 'block';
    continueEl.innerHTML = renderEpCard(inProg, isPro, progress[inProg.id] || 0);
  }

  // Recent
  const grid = document.getElementById('recent-grid');
  if (grid) grid.innerHTML = EPISODES.slice(0,4).map(ep => renderEpCard(ep, isPro, progress[ep.id] || 0)).join('');
}

// ── EPISODES ──────────────────────────────────
function renderEpisodes(isPro) {
  const grid = document.getElementById('ep-grid');
  const progress = getProgress();
  if (grid) grid.innerHTML = EPISODES.map(ep => renderEpCard(ep, isPro, progress[ep.id] || 0)).join('');
}

function renderEpCard(ep, isPro, prog) {
  const isLocked = ep.locked && !isPro;
  const completed = getCompleted().includes(ep.id);
  const quizResult = getQuizResults()[ep.id];
  const hasProg = prog > 0 && !completed;

  const progressBar = hasProg ? `
    <div class="ep-progress-wrap">
      <div class="ep-progress-label"><span>Postęp</span><span>${Math.round(prog)}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${prog}%"></div></div>
    </div>` : '';

  const quizBadge = quizResult ? `<span class="badge ${quizResult.passed ? 'badge-green' : 'badge-red'}" style="font-size:0.6rem">
    ${quizResult.passed ? '✓ Quiz' : '✗ Quiz'} ${quizResult.score}/${quizResult.total}
  </span>` : '';

  return `
    <div class="ep-card ${isLocked ? 'locked' : ''} ${completed ? 'completed' : ''}"
         onclick="${isLocked ? 'showUpgrade()' : `playEpisode(${ep.id})`}">
      <div class="ep-thumb" style="background:linear-gradient(135deg,var(--bg-3),var(--bg-4))">
        <span>${ep.emoji}</span>
        ${isLocked ? '<div class="ep-lock">🔒</div>' : ''}
      </div>
      <div class="ep-body">
        <div class="ep-meta">
          <span class="ep-serie-tag">SERIA ${ep.serie}</span>
          <span class="ep-num">· E${ep.num}</span>
          ${ep.tools.slice(0,2).map(t => `<span class="badge badge-orange" style="font-size:0.6rem">${t}</span>`).join('')}
          ${quizBadge}
        </div>
        <h3>${currentLang === 'pl' ? ep.title_pl : ep.title_en}</h3>
        <p>${currentLang === 'pl' ? ep.desc_pl : ep.desc_en}</p>
        ${progressBar}
        <div class="ep-footer">
          <span class="ep-dur">⏱ ${ep.duration}</span>
          <button class="btn btn-sm ${isLocked ? 'btn-secondary' : completed ? 'btn-ghost' : 'btn-primary'}">
            ${isLocked ? '🔒 Pro' : completed ? '✓ Ukończone' : prog > 0 ? '▶ Wznów' : '▶ Odtwórz'}
          </button>
        </div>
      </div>
    </div>`;
}

// ── VAULT ─────────────────────────────────────
function renderVault(isPro) {
  const grid = document.getElementById('vault-grid');
  if (!grid) return;
  const typeIcon = { md:'📄', json:'⚙️', pdf:'📋', zip:'📦' };
  grid.innerHTML = MATERIALS.map(m => {
    const isLocked = m.locked && !isPro;
    return `
      <div class="vault-card ${isLocked ? 'locked' : ''}" data-type="${m.type}"
           onclick="${isLocked ? 'showUpgrade()' : `downloadFile('${m.title}.${m.type}')`}">
        <div class="vault-icon ${m.icon}">${typeIcon[m.type]}</div>
        <div class="vault-info">
          <div class="flex items-center gap-8">
            <h4>${m.title}</h4>
            ${isLocked ? '<span style="color:var(--text-4);font-size:0.75rem">🔒</span>' : ''}
          </div>
          <p>${m.desc}</p>
          <span class="vault-ext ext-${m.type}">.${m.type}</span>
        </div>
      </div>`;
  }).join('');
}

function filterVault(type) {
  document.querySelectorAll('.vault-card').forEach(c => {
    c.style.display = (type === 'all' || c.dataset.type === type) ? '' : 'none';
  });
  document.querySelectorAll('.vault-filter-btn').forEach(b => {
    b.classList.toggle('btn-primary', b.dataset.filter === type);
    b.classList.toggle('btn-secondary', b.dataset.filter !== type);
  });
}

// ── PLAYER ────────────────────────────────────
function playEpisode(id) {
  const ep = EPISODES.find(e => e.id === id);
  if (!ep) return;
  currentEpisode = ep;
  const progress = getProgress();
  currentProgress = progress[ep.id] || 0;

  const bar = document.getElementById('player-bar');
  if (bar) {
    bar.style.display = 'flex';
    document.getElementById('pb-ep').textContent   = `Seria ${ep.serie} · Odcinek ${ep.num}`;
    document.getElementById('pb-title').textContent = currentLang === 'pl' ? ep.title_pl : ep.title_en;
    updatePlayerUI();
  }
  if (!isPlaying) togglePlay();
  toast(`▶ ${(currentLang === 'pl' ? ep.title_pl : ep.title_en).substring(0,42)}...`, 'ok');
}

function togglePlay() {
  if (!currentEpisode) return;
  isPlaying = !isPlaying;
  const btn = document.getElementById('pb-play');
  if (btn) btn.textContent = isPlaying ? '⏸' : '▶';

  if (isPlaying) {
    progressInterval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 0.3;
        saveProgress(currentEpisode.id, currentProgress);
        updatePlayerUI();

        // Auto-open quiz at 95%
        if (currentProgress >= 95 && currentEpisode.hasQuiz && !getQuizResults()[currentEpisode.id]) {
          clearInterval(progressInterval); isPlaying = false;
          if (btn) btn.textContent = '▶';
          setTimeout(() => openQuiz(currentEpisode.id), 800);
        }
      } else {
        clearInterval(progressInterval); isPlaying = false;
        if (btn) btn.textContent = '▶';
        markCompleted(currentEpisode.id);
        renderAll(currentUser?.plan === 'pro');
        toast('🎉 Odcinek ukończony!', 'ok');
      }
    }, 250);
  } else {
    clearInterval(progressInterval);
  }
}

function skipTime(secs) {
  if (!currentEpisode) return;
  const parts = currentEpisode.duration.split(':');
  const total = parseInt(parts[0]) * 60 + parseInt(parts[1]);
  const delta = (secs / total) * 100;
  currentProgress = Math.max(0, Math.min(100, currentProgress + delta));
  saveProgress(currentEpisode.id, currentProgress);
  updatePlayerUI();
}

function cycleSpeed() {
  speedIndex = (speedIndex + 1) % speeds.length;
  const btn = document.getElementById('pb-speed');
  if (btn) btn.textContent = speeds[speedIndex] + 'x';
}

function updatePlayerUI() {
  const fill = document.getElementById('pb-fill');
  const time = document.getElementById('pb-time');
  if (fill) fill.style.width = currentProgress + '%';
  if (time && currentEpisode) {
    const parts = currentEpisode.duration.split(':');
    const total = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    const elapsed = Math.floor(total * currentProgress / 100);
    const m = Math.floor(elapsed / 60), s = elapsed % 60;
    time.textContent = `${m}:${s.toString().padStart(2,'0')} / ${currentEpisode.duration}`;
  }
}

function seekPlayer(e) {
  const track = e.currentTarget;
  const rect = track.getBoundingClientRect();
  currentProgress = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
  if (currentEpisode) saveProgress(currentEpisode.id, currentProgress);
  updatePlayerUI();
}

// ── QUIZ ENGINE ───────────────────────────────
function openQuiz(epId) {
  const quiz = QUIZZES[epId];
  if (!quiz) return;
  quizEpId = epId; quizQ = 0; quizScore = 0; quizAnswered = false;
  renderQuiz();
  document.getElementById('quiz-modal').classList.add('open');
}

function closeQuiz() {
  document.getElementById('quiz-modal').classList.remove('open');
}

function renderQuiz() {
  const quiz = QUIZZES[quizEpId];
  const modal = document.getElementById('quiz-modal');
  if (!quiz || quizQ >= quiz.questions.length) {
    renderQuizResult(); return;
  }
  const q = quiz.questions[quizQ];
  const pct = Math.round((quizQ / quiz.questions.length) * 100);
  quizAnswered = false;
  modal.querySelector('.quiz-card').innerHTML = `
    <div class="quiz-header">
      <div class="quiz-tag">📝 ${quiz.title}</div>
      <div class="quiz-progress mb-16">
        <span class="quiz-step">${quizQ + 1} / ${quiz.questions.length}</span>
        <div class="progress-track" style="flex:1"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="quiz-question">${q.q}</div>
    </div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <div class="quiz-option" onclick="answerQuiz(${i})" data-idx="${i}">
          <span class="quiz-opt-key">${String.fromCharCode(65+i)}</span>
          <span>${opt}</span>
        </div>`).join('')}
    </div>
    <div class="quiz-footer">
      <span class="quiz-feedback" id="quiz-fb"></span>
      <button class="btn btn-secondary btn-sm" onclick="closeQuiz()">Zamknij</button>
    </div>`;
}

function answerQuiz(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const quiz = QUIZZES[quizEpId];
  const q = quiz.questions[quizQ];
  const correct = idx === q.correct;
  if (correct) quizScore++;

  // Visual feedback
  document.querySelectorAll('.quiz-option').forEach((el, i) => {
    if (i === q.correct) el.classList.add('correct');
    else if (i === idx && !correct) el.classList.add('wrong');
    el.style.pointerEvents = 'none';
  });

  const fb = document.getElementById('quiz-fb');
  fb.className = 'quiz-feedback ' + (correct ? 'ok' : 'err');
  fb.textContent = correct ? '✓ Poprawnie! ' + q.explanation : '✗ ' + q.explanation;

  // Auto-advance
  setTimeout(() => {
    quizQ++;
    if (quizQ >= quiz.questions.length) renderQuizResult();
    else renderQuiz();
  }, 2200);
}

function renderQuizResult() {
  const quiz = QUIZZES[quizEpId];
  const total = quiz.questions.length;
  const passed = quizScore >= Math.ceil(total * 0.6);
  saveQuizResult(quizEpId, quizScore, total);
  renderAll(currentUser?.plan === 'pro');

  document.querySelector('.quiz-card').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-icon">${passed ? '🏆' : '📚'}</div>
      <h3>${passed ? 'Brawo! Quiz zaliczony.' : 'Prawie! Spróbuj jeszcze raz.'}</h3>
      <div class="quiz-score">${quizScore}/${total}</div>
      <p>${passed
        ? 'Rozumiesz kluczowe koncepty tego odcinka. Możesz przejść dalej.'
        : 'Wróć do odcinka i posłuchaj jeszcze raz — focus na kluczowych narzędziach.'}</p>
      <div class="flex gap-12 justify-center" style="flex-wrap:wrap">
        ${passed
          ? `<button class="btn btn-primary" onclick="closeQuiz();checkCertificate()">Sprawdź certyfikat →</button>`
          : `<button class="btn btn-secondary" onclick="retryQuiz()">Spróbuj ponownie</button>`}
        <button class="btn btn-ghost btn-sm" onclick="closeQuiz()">Zamknij</button>
      </div>
    </div>`;
}

function retryQuiz() {
  quizQ = 0; quizScore = 0; quizAnswered = false;
  renderQuiz();
}

// ── CERTIFICATE ───────────────────────────────
function checkCertificate() {
  const completed = getCompleted();
  const quizResults = getQuizResults();
  const allEps = EPISODES.filter(e => !e.locked || currentUser?.plan === 'pro');
  const allDone = allEps.every(e => completed.includes(e.id));
  const quizzedEps = allEps.filter(e => e.hasQuiz);
  const allPassed = quizzedEps.every(e => quizResults[e.id]?.passed);

  if (allDone && allPassed) {
    showSection('certificate');
    renderCertificate();
    toast('🎓 Certyfikat odblokowany!', 'ok');
  } else {
    const remaining = allEps.filter(e => !completed.includes(e.id)).length;
    toast(`Jeszcze ${remaining} odcinek(ów) do ukończenia przed certyfikatem.`, 'err');
  }
}

function renderCertificate() {
  const el = document.getElementById('cert-container');
  if (!el) return;
  const certId = 'AKAI-' + (currentUser?.id || 'demo').toUpperCase().substring(0,8) + '-2026';
  const date = new Date().toLocaleDateString('pl-PL', { year:'numeric', month:'long', day:'numeric' });
  const linkedInUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Akademia+AI+%E2%80%93+AI+Stack+Wars&organizationId=wojciech-luszczynski&issueYear=2026&certUrl=https://akademia-ai.vercel.app/certificate/${certId}`;

  el.innerHTML = `
    <div class="certificate" id="cert-print">
      <div class="cert-border-accent"></div>
      <div class="cert-logo">🎓</div>
      <div class="cert-subtitle">Akademia AI — Certyfikat Ukończenia</div>
      <p class="cert-main">Niniejszym zaświadcza się, że</p>
      <div class="cert-name">${currentUser?.name || 'Wojciech Łuszczyński'}</div>
      <div class="cert-series">ukończył/a Serię 1:<br>„AI Stack Wars: Kto Naprawdę Wygrywa w 2026"</div>
      <div class="cert-divider"></div>
      <div class="cert-meta">
        <div class="cert-meta-item">
          <div class="cert-meta-label">Data ukończenia</div>
          <div class="cert-meta-val">${date}</div>
        </div>
        <div class="cert-meta-item">
          <div class="cert-meta-label">Odcinki</div>
          <div class="cert-meta-val">12 / 12</div>
        </div>
        <div class="cert-meta-item">
          <div class="cert-meta-label">Język</div>
          <div class="cert-meta-val">PL + EN</div>
        </div>
      </div>
      <div class="cert-stamp">
        <div class="cert-stamp-text">AKADEMIA</div>
        <div class="cert-stamp-year">AI</div>
        <div class="cert-stamp-text">2026</div>
      </div>
      <div class="cert-sig">
        <div class="cert-sig-line">Wojciech Łuszczyński</div>
        <div class="cert-sig-name">Growth Marketer · 20 lat doświadczenia · wojciech.io</div>
      </div>
      <div class="cert-actions">
        <a href="${linkedInUrl}" target="_blank" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          Dodaj do LinkedIn
        </a>
        <button class="btn btn-secondary" onclick="downloadCertPDF()">
          📄 Pobierz PDF
        </button>
        <button class="btn btn-ghost btn-sm" onclick="copyCertLink('${certId}')">
          🔗 Skopiuj link
        </button>
      </div>
      <div class="cert-id">ID: ${certId} · Weryfikacja: akademia-ai.vercel.app/verify/${certId}</div>
    </div>`;
}

function downloadCertPDF() {
  toast('📄 Generowanie PDF...', 'ok');
  setTimeout(() => window.print(), 500);
}

function copyCertLink(id) {
  navigator.clipboard.writeText(`https://akademia-ai.vercel.app/certificate/${id}`);
  toast('🔗 Link skopiowany!', 'ok');
}

// ── LANGUAGE ──────────────────────────────────
function switchLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const isPro = currentUser?.plan === 'pro';
  renderEpisodes(isPro);
  if (currentEpisode) {
    document.getElementById('pb-title').textContent = lang === 'pl' ? currentEpisode.title_pl : currentEpisode.title_en;
  }
}

// ── UTILITIES ─────────────────────────────────
function showUpgrade() { toast('🔒 Ten content wymaga planu Pro. Sprawdź sekcję Dostęp.', 'err'); }
function downloadFile(name) { toast(`📥 Pobieranie: ${name}`, 'ok'); }

function toast(msg, type = 'ok') {
  let wrap = document.getElementById('toast-wrap');
  if (!wrap) { wrap = document.createElement('div'); wrap.id = 'toast-wrap'; wrap.className = 'toast-wrap'; document.body.appendChild(wrap); }
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${type === 'ok' ? '✓' : '✗'}</span> ${msg}`;
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; }, 2700);
  setTimeout(() => t.remove(), 3000);
}

// Export
window.initDashboard = initDashboard;
window.showSection   = showSection;
window.switchLang    = switchLang;
window.playEpisode   = playEpisode;
window.togglePlay    = togglePlay;
window.skipTime      = skipTime;
window.cycleSpeed    = cycleSpeed;
window.seekPlayer    = seekPlayer;
window.openQuiz      = openQuiz;
window.closeQuiz     = closeQuiz;
window.answerQuiz    = answerQuiz;
window.retryQuiz     = retryQuiz;
window.checkCertificate = checkCertificate;
window.downloadCertPDF  = downloadCertPDF;
window.copyCertLink     = copyCertLink;
window.filterVault      = filterVault;
window.showUpgrade      = showUpgrade;
window.downloadFile     = downloadFile;
window.toast            = toast;
