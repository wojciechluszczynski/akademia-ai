// ============================================
// AKADEMIA AI — App v2
// Quiz + Progress + Certificate + Kinetic Typography + Real Audio
// ============================================

// ── DATA ─────────────────────────────────────
const EPISODES = [
  { id:1,  serie:1, num:'01', emoji:'⚔',  title_pl:'ChatGPT vs Claude vs Gemini vs Grok: mój werdykt po 20 latach',        title_en:'The LLM Battle: A 20-Year Marketer\'s Verdict',              desc_pl:'Testuję te same 12 zadań marketingowych w ChatGPT, Claude, Gemini i Grok. Daję konkretny werdykt: który model do czego i dlaczego.',        desc_en:'I run 12 identical marketing tasks through ChatGPT, Claude, Gemini and Grok. My honest verdict on what to use and when.',        duration:'11:24', tools:['ChatGPT','Claude','Gemini','Grok'], locked:false, hasQuiz:true  },
  { id:2,  serie:1, num:'02', emoji:'◎',  title_pl:'Perplexity zjadło Google\'a. Ale nie do końca.',                        title_en:'Perplexity Killed Google. Almost.',                          desc_pl:'Research ICP który zajmował mi 45 minut — robię w 8. Pokazuję gdzie Perplexity wygrywa z Google i gdzie odpada.',                         desc_en:'ICP research that used to take 45 minutes now takes 8. Where Perplexity wins and where it falls flat.',   duration:'09:47', tools:['Perplexity','NotebookLM'],         locked:false, hasQuiz:true  },
  { id:3,  serie:1, num:'03', emoji:'◈',  title_pl:'NotebookLM: ignorowałem go przez 3 miesiące. Błąd.',                  title_en:'NotebookLM: I Ignored It for 3 Months. Big Mistake.',        desc_pl:'Wrzucam 40-stronnicowy raport branżowy do NotebookLM i wyciągam kluczowe insights w 15 minut. Błąd który kosztował mnie 3 miesiące.',                        desc_en:'I feed a 40-page industry report into NotebookLM and extract key insights in 15 minutes. The mistake that cost me 3 months.',    duration:'10:12', tools:['NotebookLM','Gemini'],              locked:true,  hasQuiz:true  },
  { id:4,  serie:1, num:'04', emoji:'▣',  title_pl:'Claude Code vs Cursor: który wygrał moje projekty?',                  title_en:'Claude Code vs Cursor: My 6-Month Non-Dev Review',           desc_pl:'Marketer bez tła programistycznego testuje Claude Code i Cursor przez 6 miesięcy. Który z nich faktycznie działa dla nie-developerów.',                           desc_en:'A non-developer tests Claude Code and Cursor for 6 months. Which one actually works when you can\'t code.',        duration:'12:03', tools:['Claude Code','Cursor','GitHub'],    locked:true,  hasQuiz:false },
  { id:5,  serie:2, num:'01', emoji:'▶',  title_pl:'Apollo vs Clay vs Hunter: gdzie szukam leadów w 2026',                title_en:'Apollo vs Clay vs Hunter: Where I Find Leads',               desc_pl:'500 kontaktów ICP dla B2B SaaS przez Apollo, Clay i Hunter. Porównam koszt, jakość danych i czas pracy przy tym samym briefie.',                    desc_en:'500 ICP contacts for B2B SaaS via Apollo, Clay and Hunter. Same brief, real cost and quality comparison.', duration:'10:55', tools:['Apollo','Clay','Hunter'],        locked:true,  hasQuiz:true  },
  { id:6,  serie:2, num:'02', emoji:'◫',  title_pl:'Clay + Claude = personalizacja której nie odróżnisz od ręcznej',      title_en:'Clay + Claude: Personalization at Scale That Feels Human',   desc_pl:'1000 kontaktów, 6 źródeł danych, każdy opening line przez Claude API. Pokaże jak zbudować to od zera bez kodowania.',                     desc_en:'1k contacts, 6 data sources, Claude API writing every opening line. How to build this from scratch without coding.', duration:'11:38', tools:['Clay','Claude API'],             locked:true,  hasQuiz:false },
];

const MATERIALS = [
  { id:1, title:'LLM Comparison Matrix 2026',   file:'llm-comparison-matrix.md',       desc:'Pełna tabela 6 modeli AI',            type:'md',   icon:'vi-md',   locked:false, serie:1 },
  { id:2, title:'Perplexity Research SOP',       file:'perplexity-research-sop.md',     desc:'Gotowy SOP do researchu',             type:'md',   icon:'vi-md',   locked:false, serie:1 },
  { id:3, title:'Clay Enrichment Flow',          file:'clay-enrichment-flow.json',      desc:'Blueprint do importu w Clay',         type:'json', icon:'vi-json', locked:false, serie:1 },
  { id:4, title:'Marketing Stack 2026',          file:'marketing-stack-2026.json',      desc:'Pełny stack w formacie JSON',         type:'json', icon:'vi-json', locked:true,  serie:1 },
  { id:5, title:'Outbound Machine Complete',     file:'outbound-machine-complete.json', desc:'End-to-end: ICP → signed deal',       type:'json', icon:'vi-json', locked:true,  serie:2 },
  { id:6, title:'Cold Email Framework 2026',     file:'cold-email-framework-2026.md',   desc:'Co działa, co spamuje',               type:'md',   icon:'vi-md',   locked:true,  serie:2 },
  { id:7, title:'Series 1 Complete Vault',       file:'series-1-vault.zip',             desc:'Wszystkie materiały Serii 1',         type:'zip',  icon:'vi-zip',  locked:true,  serie:1 },
  { id:8, title:'ElevenLabs Full Guide',         file:'elevenlabs-full-guide.md',       desc:'Voices, Clones, Agents, Sound FX',   type:'md',   icon:'vi-md',   locked:true,  serie:3 },
];

const QUIZZES = {
  1: {
    title: 'Sprawdź wiedzę: LLM Battle',
    questions: [
      { q: 'Który model AI najlepiej sprawdza się do analizy długich dokumentów prawnych i naukowych?',
        options: ['ChatGPT-4o','Claude Opus','Gemini 2.5 Pro','Grok 3'], correct: 1,
        explanation: 'Claude ma największe okno kontekstowe i najwyższą precyzję przy dokumentach wymagających dokładności.' },
      { q: 'Czym wyróżnia się Perplexity na tle innych modeli AI?',
        options: ['Generowaniem kodu','Weryfikowalnymi źródłami w czasie rzeczywistym','Najszybszym działaniem','Klonowaniem głosu'], correct: 1,
        explanation: 'Perplexity specjalizuje się w wyszukiwaniu z cytowalnymi, weryfikowalnymi źródłami.' },
      { q: 'Który model wygrywa przy analizie sentymentu rynku i breaking news w czasie rzeczywistym?',
        options: ['Claude','DeepSeek','Grok','ChatGPT'], correct: 2,
        explanation: 'Grok ma bezpośredni dostęp do X (Twitter) i najszybszy dostęp do live data.' },
    ]
  },
  2: {
    title: 'Sprawdź wiedzę: Perplexity',
    questions: [
      { q: 'Jaka jest główna przewaga Perplexity nad Google w B2B research?',
        options: ['Jest darmowy','Podaje bezpośrednie odpowiedzi z cytowanymi źródłami','Ma lepszy UI','Działa offline'], correct: 1,
        explanation: 'Perplexity syntetyzuje informacje i podaje skąd pochodzi każda odpowiedź — Google daje tylko linki.' },
      { q: 'Do czego NIE powinieneś używać Perplexity?',
        options: ['Research konkurencji','SEO lokalne i intencja zakupowa','Academic literature','Monitoring trendów'], correct: 1,
        explanation: 'Perplexity słabo radzi sobie z intencją zakupową i lokalnymi wynikami — tu Google nadal wygrywa.' },
    ]
  },
  5: {
    title: 'Sprawdź wiedzę: Lead Generation',
    questions: [
      { q: 'Czym głównie różni się Clay od Apollo w kontekście lead gen?',
        options: ['Clay jest darmowy','Clay to silnik enrichmentu, Apollo to baza leadów','Apollo ma lepszy UI','Clay nie integruje się z CRM'], correct: 1,
        explanation: 'Clay jest narzędziem do enrichmentu i budowania workflow, Apollo to przede wszystkim baza kontaktów.' },
    ]
  },
};

// ── AUDIO FILES ───────────────────────────────
const AUDIO_FILES = {
  1: '/audio/s1e01.mp3',
};

// ── KINETIC SCRIPTS ───────────────────────────
const KINETIC_SCRIPTS = {
  1: 'Przez sześć miesięcy testowałem ChatGPT Claude Gemini i Grok na prawdziwych projektach klientów Nie na benchmarkach nie na demo Prawdziwy research ICP prawdziwe cold emaile prawdziwe propozycje handlowe Wyniki są inne niż myślisz ChatGPT jest najlepiej znany ale to nie znaczy że jest najlepszy Claude bije go w analizie długich dokumentów o kilka długości Gemini ma dostęp do Google ale w B2B research przegrywa z Perplexity Grok jest zaskakująco dobry przy analizie sentymentu i live data Oto mój werdykt po dwudziestu latach w marketingu i sześciu miesiącach obsesji na punkcie AI Każdy model ma swoją niszę Używanie jednego do wszystkiego to błąd który kosztuje cię godziny tygodniowo Pokażę wam dokładnie kiedy używać którego i dlaczego to zmieni sposób w jaki pracujesz Na początku byłem sceptyczny Myślałem że to kolejny hype że za rok wszyscy zapomną Myliłem się Fundamentalnie zmieniły sposób mojej pracy i moich klientów Zaoszczędzamy godziny każdego dnia Ale kluczem jest wiedza które narzędzie do czego Zacznijmy od ChatGPT Wszyscy go znają wszyscy używają Ale większość używa go źle Najlepsza funkcja to Advanced Data Analysis i generowanie kodu Przy analizie dokumentów traci z Claude Przy web research traci z Perplexity Claude to mój domyślny model do pracy z tekstem Długie dokumenty analizy prawne propozycje handlowe Tutaj nie ma konkurencji Gemini 2.5 Pro zaskakuje przy zadaniach multimodalnych ale w czystym B2B text work przegrywa I wreszcie Grok Niedoceniany przez większość marketerów Ale jeśli pracujesz z danymi z X albo potrzebujesz live market sentiment to jest twój model',
};

// ── STATE ─────────────────────────────────────
let currentUser     = null;
let currentEpisode  = null;
let audioEl         = null;
let isPlaying       = false;
let currentProgress = 0;
let progressInterval = null;
let currentLang     = 'pl';
let speedIndex      = 0;
const speeds        = [1, 1.25, 1.5, 1.75, 2];

let quizEpId    = null;
let quizQ       = 0;
let quizAnswered = false;
let quizScore   = 0;

// ── PERSISTENCE ──────────────────────────────
function getProgress()    { try { return JSON.parse(localStorage.getItem('ep_progress') || '{}'); } catch { return {}; } }
function getCompleted()   { try { return JSON.parse(localStorage.getItem('ep_completed') || '[]'); } catch { return []; } }
function getQuizResults() { try { return JSON.parse(localStorage.getItem('quiz_results') || '{}'); } catch { return {}; } }

function saveProgress(epId, pct) {
  const p = getProgress(); p[epId] = pct;
  localStorage.setItem('ep_progress', JSON.stringify(p));
}
function markCompleted(epId) {
  const c = getCompleted(); if (!c.includes(epId)) c.push(epId);
  localStorage.setItem('ep_completed', JSON.stringify(c));
  updateSidebarProgress();
}
function saveQuizResult(epId, score, total) {
  const r = getQuizResults();
  r[epId] = { score, total, passed: score >= Math.ceil(total * 0.6), date: new Date().toISOString() };
  localStorage.setItem('quiz_results', JSON.stringify(r));
}

// ── INIT ─────────────────────────────────────
function initApp(user) {
  currentUser = user;

  audioEl = document.getElementById('audio-player');
  if (audioEl) {
    audioEl.ontimeupdate = onAudioTimeUpdate;
    audioEl.onended      = onAudioEnded;
  }

  // Check if returning from Stripe
  const params = new URLSearchParams(window.location.search);
  if (params.get('payment') === 'success') {
    // Clean URL
    window.history.replaceState({}, '', window.location.pathname);
    // Re-fetch fresh plan from Supabase after webhook has fired
    setTimeout(async () => {
      try {
        const freshUser = await window.AkademiaAuth.verifySession();
        if (freshUser) {
          currentUser = freshUser;
          // Update sidebar plan badge
          const planEl = document.getElementById('user-plan');
          if (planEl) {
            planEl.textContent = freshUser.plan === 'pro' ? 'Pro' : freshUser.plan || 'Pro';
            planEl.classList.remove('free');
          }
          renderAll(true); // treat as pro regardless — webhook may be slightly delayed
        }
      } catch (e) { /* ignore */ }
      toast('Dostęp aktywowany! Odśwież stronę jeśli odcinki są nadal zablokowane.', 'ok');
    }, 1800);
  } else if (params.get('payment') === 'cancelled') {
    window.history.replaceState({}, '', window.location.pathname);
    toast('Płatność anulowana.', 'err');
  }

  const isPro = user.plan === 'pro' || user.plan === 'serie1' || user.plan === 'serie2';
  renderAll(isPro);
  updateSidebarProgress();
}

// ── AUDIO HANDLERS ────────────────────────────
function hasRealAudio() {
  return audioEl && currentEpisode && AUDIO_FILES[currentEpisode.id];
}

function onAudioTimeUpdate() {
  if (!audioEl || !currentEpisode || !audioEl.duration) return;
  currentProgress = (audioEl.currentTime / audioEl.duration) * 100;
  saveProgress(currentEpisode.id, currentProgress);
  updatePlayerUI();
  if (currentProgress >= 95 && currentEpisode.hasQuiz && !getQuizResults()[currentEpisode.id]) {
    audioEl.pause(); isPlaying = false;
    const btn = document.getElementById('pb-play');
    if (btn) btn.textContent = '▶';
    setTimeout(() => openQuiz(currentEpisode.id), 800);
  }
}

function onAudioEnded() {
  isPlaying = false;
  const btn = document.getElementById('pb-play');
  if (btn) btn.textContent = '▶';
  markCompleted(currentEpisode.id);
  renderAll(currentUser?.plan === 'pro');
  toast('Odcinek ukończony!');
}

// ── SIDEBAR PROGRESS ─────────────────────────
function updateSidebarProgress() {
  const pct   = EPISODES.length ? Math.round(getCompleted().length / EPISODES.length * 100) : 0;
  const fill  = document.getElementById('overall-fill');
  const label = document.getElementById('overall-pct');
  if (fill)  fill.style.width = pct + '%';
  if (label) label.textContent = pct + '%';
}

// ── RENDER ────────────────────────────────────
function renderAll(isPro) {
  renderHome(isPro);
  renderEpisodes(isPro);
  renderVault(isPro);
}

function renderHome(isPro) {
  const completed = getCompleted();
  const quizRes   = getQuizResults();
  const passedQ   = Object.values(quizRes).filter(r => r.passed).length;
  const files     = MATERIALS.filter(m => !m.locked || isPro).length;
  const progress  = getProgress();

  const $ = id => document.getElementById(id);
  if ($('stat-completed')) $('stat-completed').textContent = completed.length;
  if ($('stat-quizzes'))   $('stat-quizzes').textContent   = passedQ;
  if ($('stat-vault'))     $('stat-vault').textContent     = files;
  if ($('stat-streak'))    $('stat-streak').textContent    = 0;

  const grid = $('ep-grid');
  if (grid) grid.innerHTML = EPISODES.map(ep => renderEpCard(ep, isPro, progress[ep.id] || 0)).join('');
}

function renderEpisodes(isPro) {
  const progress = getProgress();
  const $ = id => document.getElementById(id);
  const all = EPISODES.map(ep => renderEpCard(ep, isPro, progress[ep.id] || 0)).join('');
  if ($('ep-grid-all')) $('ep-grid-all').innerHTML = all;
  [1, 2, 3].forEach(s => {
    const g = $('ep-grid-s' + s);
    if (g) g.innerHTML = EPISODES.filter(e => e.serie === s)
      .map(ep => renderEpCard(ep, isPro, progress[ep.id] || 0)).join('');
  });
}

function renderEpCard(ep, isPro, prog) {
  const isLocked  = ep.locked && !isPro;
  const completed = getCompleted().includes(ep.id);
  const quizRes   = getQuizResults()[ep.id];
  const hasProg   = prog > 0 && !completed;
  const hasAudio  = !!AUDIO_FILES[ep.id];

  const progressBar = hasProg ? `
    <div class="ep-progress-wrap">
      <div class="ep-progress-labels"><span>Postęp</span><span>${Math.round(prog)}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${prog}%"></div></div>
    </div>` : '';

  const quizBadge = quizRes ? `<span class="tag" style="font-size:.55rem;padding:2px 7px;background:${quizRes.passed ? 'rgba(74,222,128,.1)' : 'rgba(248,113,113,.1)'};color:${quizRes.passed ? 'var(--green)' : 'var(--red)'};border-color:${quizRes.passed ? 'rgba(74,222,128,.2)' : 'rgba(248,113,113,.2)'}">${quizRes.passed ? '✓' : '✗'} Quiz</span>` : '';

  const audioBadge = hasAudio && !isLocked ? `<span class="tag" style="font-size:.55rem;padding:2px 7px;background:rgba(96,165,250,.08);color:var(--blue);border-color:rgba(96,165,250,.18)">▶ Audio</span>` : '';

  const actionLabel = isLocked ? '● Pro' : completed ? '✓ Done' : prog > 0 ? '▶ Wznów' : '▶ Odtwórz';
  const actionStyle = isLocked ? '' : completed ? 'background:rgba(74,222,128,.1);color:var(--green);border-color:rgba(74,222,128,.2)' : 'background:var(--orange-soft);color:var(--orange);border-color:var(--orange-line)';

  return `
    <div class="ep-card ${isLocked ? 'locked' : ''}" onclick="${isLocked ? 'showUpgrade()' : `playEpisode(${ep.id})`}" style="cursor:pointer">
      <div class="ep-thumb">
        <span style="font-size:1.75rem">${ep.emoji}</span>
        ${isLocked ? '<div class="ep-thumb-lock">●</div>' : ''}
      </div>
      <div class="ep-body">
        <div class="ep-meta">
          <span class="ep-serie-label">Seria ${ep.serie}</span>
          <span class="ep-num">· E${ep.num}</span>
          ${ep.tools.slice(0,2).map(t => `<span class="tag" style="font-size:.55rem;padding:2px 7px">${t}</span>`).join('')}
          ${audioBadge}${quizBadge}
        </div>
        <h3>${currentLang === 'pl' ? ep.title_pl : ep.title_en}</h3>
        <p>${currentLang === 'pl' ? ep.desc_pl : ep.desc_en}</p>
        ${progressBar}
        <div class="ep-card-footer">
          <span class="ep-duration">${ep.duration}</span>
          <span class="tag" style="${actionStyle}">${actionLabel}</span>
        </div>
      </div>
    </div>`;
}

// ── VAULT ─────────────────────────────────────
function renderVault(isPro) {
  const grid = document.getElementById('vault-grid');
  if (!grid) return;
  const sym = { md:'◈', json:'⚙', pdf:'◉', zip:'◫' };
  grid.innerHTML = MATERIALS.map(m => {
    const isLocked = m.locked && !isPro;
    return `
      <div class="vault-card ${isLocked ? 'locked' : ''}" data-type="${m.type}"
           onclick="${isLocked ? 'showUpgrade()' : `downloadFile('${m.file}','${m.title}')`}">
        <div class="vault-icon ${m.icon}"><span style="font-size:1rem">${sym[m.type] || '◈'}</span></div>
        <div class="vault-info">
          <h4>${m.title}${isLocked ? ' <span style="color:var(--text-4);font-size:.7rem">●</span>' : ''}</h4>
          <p>${m.desc}</p>
          <span class="vault-ext ext-${m.type}">.${m.type}</span>
        </div>
      </div>`;
  }).join('');
  const cnt = document.getElementById('vault-count');
  if (cnt) cnt.textContent = MATERIALS.filter(m => !m.locked || isPro).length;
}

function filterVault(type) {
  document.querySelectorAll('.vault-card').forEach(c => {
    c.style.display = (type === 'all' || c.dataset.type === type) ? '' : 'none';
  });
}

// ── PLAYER ────────────────────────────────────
function playEpisode(id) {
  const ep = EPISODES.find(e => e.id === id);
  if (!ep) return;

  // Stop whatever is playing
  if (audioEl) { audioEl.pause(); audioEl.removeAttribute('src'); }
  clearInterval(progressInterval); isPlaying = false;

  currentEpisode  = ep;
  currentProgress = getProgress()[ep.id] || 0;

  // Load real audio if available
  if (audioEl && AUDIO_FILES[ep.id]) {
    audioEl.src = AUDIO_FILES[ep.id];
    audioEl.load();
    audioEl.oncanplay = () => {
      if (audioEl.duration) audioEl.currentTime = audioEl.duration * currentProgress / 100;
    };
  }

  // Show bar + kinetic panel
  const bar    = document.getElementById('player-bar');
  const kPanel = document.getElementById('kinetic-panel');
  if (bar) {
    bar.style.display = 'flex';
    const serie = document.getElementById('pb-serie');
    const title = document.getElementById('pb-title');
    if (serie) serie.textContent = `Seria ${ep.serie} · Odcinek ${ep.num}`;
    if (title) title.textContent = currentLang === 'pl' ? ep.title_pl : ep.title_en;
    updatePlayerUI();
  }
  if (kPanel) {
    kPanel.style.display = KINETIC_SCRIPTS[ep.id] ? 'flex' : 'none';
    updateKineticText();
  }

  togglePlay();
  toast(`▶ ${(currentLang === 'pl' ? ep.title_pl : ep.title_en).substring(0, 50)}...`);
}

function togglePlay() {
  if (!currentEpisode) return;
  isPlaying = !isPlaying;
  const btn = document.getElementById('pb-play');
  if (btn) btn.textContent = isPlaying ? '❚❚' : '▶';

  if (hasRealAudio()) {
    if (isPlaying) audioEl.play().catch(() => {});
    else audioEl.pause();
  } else {
    // Simulated playback for episodes without real audio
    if (isPlaying) {
      progressInterval = setInterval(() => {
        if (currentProgress < 100) {
          currentProgress += 0.3;
          saveProgress(currentEpisode.id, currentProgress);
          updatePlayerUI();
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
          toast('Odcinek ukończony!');
        }
      }, 250);
    } else {
      clearInterval(progressInterval);
    }
  }
}

function skipTime(secs) {
  if (!currentEpisode) return;
  if (hasRealAudio()) {
    audioEl.currentTime = Math.max(0, Math.min(audioEl.duration || 0, (audioEl.currentTime || 0) + secs));
  } else {
    const [m, s] = currentEpisode.duration.split(':').map(Number);
    currentProgress = Math.max(0, Math.min(100, currentProgress + (secs / (m * 60 + s)) * 100));
    saveProgress(currentEpisode.id, currentProgress);
    updatePlayerUI();
  }
}

function cycleSpeed() {
  speedIndex = (speedIndex + 1) % speeds.length;
  const btn = document.getElementById('pb-speed');
  if (btn) btn.textContent = speeds[speedIndex] + '×';
  if (audioEl) audioEl.playbackRate = speeds[speedIndex];
}

function updatePlayerUI() {
  const fill    = document.getElementById('pb-fill');
  const timeNow = document.getElementById('pb-time-now');
  const timeAll = document.getElementById('pb-time-total');

  let pct = currentProgress;
  let elapsed = 0;
  let totalSecs = 0;

  if (hasRealAudio() && audioEl.duration) {
    pct      = (audioEl.currentTime / audioEl.duration) * 100;
    elapsed  = Math.floor(audioEl.currentTime);
    totalSecs = Math.floor(audioEl.duration);
  } else if (currentEpisode) {
    const [m, s] = currentEpisode.duration.split(':').map(Number);
    totalSecs = m * 60 + s;
    elapsed   = Math.floor(totalSecs * pct / 100);
  }

  if (fill) fill.style.width = pct + '%';
  if (timeNow) { const em = Math.floor(elapsed / 60), es = elapsed % 60; timeNow.textContent = `${em}:${es.toString().padStart(2, '0')}`; }
  if (timeAll && totalSecs) { const tm = Math.floor(totalSecs / 60), ts = totalSecs % 60; timeAll.textContent = `${tm}:${ts.toString().padStart(2, '0')}`; }

  updateKineticText();
}

function seekPlayer(e) {
  const pct = Math.max(0, Math.min(100, ((e.clientX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.getBoundingClientRect().width) * 100));
  if (hasRealAudio() && audioEl.duration) {
    audioEl.currentTime = (pct / 100) * audioEl.duration;
  } else {
    currentProgress = pct;
    if (currentEpisode) saveProgress(currentEpisode.id, pct);
    updatePlayerUI();
  }
}

// ── KINETIC TYPOGRAPHY ────────────────────────
function updateKineticText() {
  const panel = document.getElementById('kinetic-panel');
  if (!panel || !currentEpisode) return;
  const script = KINETIC_SCRIPTS[currentEpisode.id];
  if (!script) return;

  const words = script.trim().split(/\s+/);
  const pct   = hasRealAudio() && audioEl.duration
    ? (audioEl.currentTime / audioEl.duration) * 100
    : currentProgress;
  const idx   = Math.min(words.length - 1, Math.floor((pct / 100) * words.length));
  const start = Math.max(0, idx - 7);
  const end   = Math.min(words.length, idx + 13);

  panel.innerHTML = words.slice(start, end).map((w, i) => {
    const pos = start + i;
    if (pos === idx) return `<span class="kw kw-active">${w}</span>`;
    if (pos < idx)   return `<span class="kw kw-past">${w}</span>`;
    return `<span class="kw">${w}</span>`;
  }).join(' ');
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
  if (!quiz || quizQ >= quiz.questions.length) { renderQuizResult(); return; }
  const q   = quiz.questions[quizQ];
  const pct = Math.round((quizQ / quiz.questions.length) * 100);
  quizAnswered = false;

  document.getElementById('quiz-panel').innerHTML = `
    <div class="quiz-label">${quiz.title}</div>
    <div class="quiz-progress-row">
      <span class="quiz-step">${quizQ + 1} / ${quiz.questions.length}</span>
      <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="quiz-q-text">${q.q}</div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <div class="quiz-option" onclick="answerQuiz(${i})" data-idx="${i}">
          <span class="quiz-key">${String.fromCharCode(65 + i)}</span>
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
  const q    = quiz.questions[quizQ];
  const ok   = idx === q.correct;
  if (ok) quizScore++;

  document.querySelectorAll('.quiz-option').forEach((el, i) => {
    if (i === q.correct)       el.classList.add('correct');
    else if (i === idx && !ok) el.classList.add('wrong');
    el.style.pointerEvents = 'none';
  });

  const fb = document.getElementById('quiz-fb');
  if (fb) { fb.className = 'quiz-feedback ' + (ok ? 'ok' : 'err'); fb.textContent = (ok ? '✓ Poprawnie! ' : '✗ ') + q.explanation; }

  setTimeout(() => { quizQ++; (quizQ >= quiz.questions.length) ? renderQuizResult() : renderQuiz(); }, 2200);
}

function renderQuizResult() {
  const quiz   = QUIZZES[quizEpId];
  const total  = quiz.questions.length;
  const passed = quizScore >= Math.ceil(total * 0.6);
  saveQuizResult(quizEpId, quizScore, total);
  renderAll(currentUser?.plan === 'pro');

  document.getElementById('quiz-panel').innerHTML = `
    <div class="quiz-result-view">
      <div class="quiz-result-icon">${passed ? '★' : '◎'}</div>
      <h3>${passed ? 'Brawo! Quiz zaliczony.' : 'Prawie! Spróbuj jeszcze raz.'}</h3>
      <div class="quiz-score">${quizScore}/${total}</div>
      <p>${passed ? 'Rozumiesz kluczowe koncepty tego odcinka. Możesz przejść dalej.' : 'Wróć do odcinka i posłuchaj jeszcze raz — focus na kluczowych narzędziach.'}</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:20px">
        ${passed
          ? `<button class="btn btn-primary" onclick="closeQuiz();checkCertificate()">Sprawdź certyfikat →</button>`
          : `<button class="btn btn-secondary" onclick="retryQuiz()">Spróbuj ponownie</button>`}
        <button class="btn btn-ghost btn-sm" onclick="closeQuiz()">Zamknij</button>
      </div>
    </div>`;
}

function retryQuiz() { quizQ = 0; quizScore = 0; quizAnswered = false; renderQuiz(); }

// ── CERTIFICATE ───────────────────────────────
function checkCertificate() {
  const completed   = getCompleted();
  const quizResults = getQuizResults();
  const accessible  = EPISODES.filter(e => !e.locked || currentUser?.plan === 'pro');
  const allDone     = accessible.every(e => completed.includes(e.id));
  const allPassed   = accessible.filter(e => e.hasQuiz).every(e => quizResults[e.id]?.passed);

  if (allDone && allPassed) {
    if (typeof showSection === 'function') showSection('certificate');
    toast('Certyfikat odblokowany!');
  } else {
    toast(`Jeszcze ${accessible.filter(e => !completed.includes(e.id)).length} odcinek(ów) do ukończenia.`, 'err');
  }
}

function renderCertificate() {
  const el = document.getElementById('cert-container');
  if (!el) return;
  const certId = 'AKAI-' + (currentUser?.id || 'DEMO').toUpperCase().substring(0, 8) + '-2026';
  const date   = new Date().toLocaleDateString('pl-PL', { year:'numeric', month:'long', day:'numeric' });
  const liUrl  = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Akademia+AI+%E2%80%93+AI+Stack+Wars&organizationId=wojciech-luszczynski&issueYear=2026&certUrl=https://akademia-ai.vercel.app/certificate/${certId}`;

  el.innerHTML = `
    <div class="certificate" id="cert-print">
      <div class="cert-inner-border"></div>
      <div class="cert-logo-text">Akademia AI · Certyfikat Ukończenia</div>
      <div class="cert-verbiage">Niniejszym zaświadcza się, że</div>
      <div class="cert-name">${currentUser?.name || 'Wojciech Łuszczyński'}</div>
      <div class="cert-series-name">ukończył/a Serię 1 — AI Stack Wars 2026</div>
      <div class="cert-rule"></div>
      <div class="cert-facts">
        <div><div class="cert-fact-label">Data ukończenia</div><div class="cert-fact-val">${date}</div></div>
        <div><div class="cert-fact-label">Odcinki</div><div class="cert-fact-val">12 / 12</div></div>
        <div><div class="cert-fact-label">Język</div><div class="cert-fact-val">PL + EN</div></div>
      </div>
      <div class="cert-stamp-ring">
        <span class="stamp-top">Akademia</span>
        <span class="stamp-middle">AI</span>
        <span class="stamp-bottom">2026</span>
      </div>
      <div class="cert-signature">
        <div class="sig-name">Wojciech Łuszczyński</div>
        <div class="sig-title">Growth Marketer · 20 lat doświadczenia · wojciech.io</div>
      </div>
      <div class="cert-actions">
        <a href="${liUrl}" target="_blank" class="btn btn-primary">Dodaj do LinkedIn</a>
        <button class="btn btn-secondary" onclick="window.print()">Pobierz PDF</button>
        <button class="btn btn-ghost btn-sm" onclick="navigator.clipboard.writeText('https://akademia-ai.vercel.app/certificate/${certId}').then(()=>toast('Link skopiowany!'))">Skopiuj link</button>
      </div>
      <div class="cert-id">ID: ${certId}</div>
    </div>`;
}

// ── LANGUAGE ──────────────────────────────────
function switchLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  renderEpisodes(currentUser?.plan === 'pro');
  const title = document.getElementById('pb-title');
  if (title && currentEpisode) title.textContent = lang === 'pl' ? currentEpisode.title_pl : currentEpisode.title_en;
}

// ── TOAST ─────────────────────────────────────
function toast(msg, type = 'ok') {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${type === 'ok' ? '✓' : '✗'}</span> ${msg}`;
  stack.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; }, 2700);
  setTimeout(() => t.remove(), 3000);
}

// ── UTILITIES ─────────────────────────────────
function showUpgrade() {
  // Build paywall modal
  const existing = document.getElementById('upgrade-modal');
  if (existing) { existing.style.display = 'flex'; return; }

  const modal = document.createElement('div');
  modal.id = 'upgrade-modal';
  modal.style.cssText = `
    position:fixed;inset:0;z-index:9999;
    background:rgba(10,9,8,0.88);backdrop-filter:blur(12px);
    display:flex;align-items:center;justify-content:center;padding:24px;
  `;

  const user = currentUser || {};
  const userId = user.id || '';
  const email  = encodeURIComponent(user.email || '');

  modal.innerHTML = `
    <div style="
      background:var(--bg-card);border:1px solid var(--line-1);
      border-radius:20px;padding:40px 36px;max-width:480px;width:100%;
      position:relative;
      box-shadow:0 0 0 1px rgba(249,115,22,0.15), 0 32px 64px rgba(0,0,0,0.6);
    ">
      <button onclick="document.getElementById('upgrade-modal').style.display='none'"
        style="position:absolute;top:16px;right:16px;background:none;border:1px solid var(--line-1);
        color:var(--text-3);width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:0.9rem;
        display:flex;align-items:center;justify-content:center;">×</button>

      <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--orange);margin-bottom:12px;">
        Odblokuj dostęp
      </div>
      <h2 style="font-size:1.5rem;font-weight:900;letter-spacing:-0.04em;color:var(--text-1);margin:0 0 8px;">
        Ten odcinek wymaga planu Pro
      </h2>
      <p style="color:var(--text-3);font-size:0.9rem;line-height:1.6;margin:0 0 28px;">
        Kup dostęp do jednej serii lub do całości. Płacisz raz — masz dożywotnio.
      </p>

      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
        <a href="/api/create-checkout?plan=serie1&userId=${userId}&email=${email}"
          style="display:flex;align-items:center;justify-content:space-between;
          background:var(--bg-input);border:1px solid var(--line-1);border-radius:10px;
          padding:14px 18px;text-decoration:none;transition:border-color .15s;"
          onmouseover="this.style.borderColor='var(--orange-line)'"
          onmouseout="this.style.borderColor='var(--line-1)'">
          <div>
            <div style="font-size:0.875rem;font-weight:700;color:var(--text-1);">Seria 1 — AI Stack 2026</div>
            <div style="font-size:0.75rem;color:var(--text-3);">12 odcinków · ChatGPT, Claude, Gemini, Cursor...</div>
          </div>
          <div style="font-size:1rem;font-weight:900;color:var(--orange);flex-shrink:0;margin-left:16px;">97 PLN</div>
        </a>

        <a href="/api/create-checkout?plan=serie2&userId=${userId}&email=${email}"
          style="display:flex;align-items:center;justify-content:space-between;
          background:var(--bg-input);border:1px solid var(--line-1);border-radius:10px;
          padding:14px 18px;text-decoration:none;transition:border-color .15s;"
          onmouseover="this.style.borderColor='var(--orange-line)'"
          onmouseout="this.style.borderColor='var(--line-1)'">
          <div>
            <div style="font-size:0.875rem;font-weight:700;color:var(--text-1);">Seria 2 — Outbound Machine</div>
            <div style="font-size:0.75rem;color:var(--text-3);">12 odcinków · Apollo, Clay, n8n, Smartlead...</div>
          </div>
          <div style="font-size:1rem;font-weight:900;color:var(--orange);flex-shrink:0;margin-left:16px;">97 PLN</div>
        </a>

        <a href="/api/create-checkout?plan=serie3&userId=${userId}&email=${email}"
          style="display:flex;align-items:center;justify-content:space-between;
          background:var(--bg-input);border:1px solid var(--line-1);border-radius:10px;
          padding:14px 18px;text-decoration:none;transition:border-color .15s;"
          onmouseover="this.style.borderColor='var(--orange-line)'"
          onmouseout="this.style.borderColor='var(--line-1)'">
          <div>
            <div style="font-size:0.875rem;font-weight:700;color:var(--text-1);">Seria 3 — Voice, Video, Brand</div>
            <div style="font-size:0.75rem;color:var(--text-3);">12 odcinków · ElevenLabs, HeyGen, Midjourney, Runway...</div>
          </div>
          <div style="font-size:1rem;font-weight:900;color:var(--orange);flex-shrink:0;margin-left:16px;">97 PLN</div>
        </a>

        <a href="/api/create-checkout?plan=all&userId=${userId}&email=${email}"
          style="display:flex;align-items:center;justify-content:space-between;
          background:linear-gradient(135deg,rgba(249,115,22,0.12),rgba(249,115,22,0.04));
          border:1px solid var(--orange-line);border-radius:10px;
          padding:14px 18px;text-decoration:none;position:relative;overflow:hidden;">
          <div style="position:absolute;top:6px;right:56px;
            background:var(--orange);color:#fff;font-size:0.6rem;font-weight:800;
            letter-spacing:0.06em;text-transform:uppercase;padding:2px 8px;border-radius:99px;">
            Najlepszy wybór
          </div>
          <div>
            <div style="font-size:0.875rem;font-weight:700;color:var(--text-1);">Wszystkie serie — pełny dostęp</div>
            <div style="font-size:0.75rem;color:var(--text-3);">36 odcinków · Vault · Certyfikaty · ok. 7 PLN/odcinek</div>
          </div>
          <div style="font-size:1rem;font-weight:900;color:var(--orange);flex-shrink:0;margin-left:16px;">249 PLN</div>
        </a>
      </div>

      <div style="font-size:0.75rem;color:var(--text-4);text-align:center;line-height:1.5;">
        Płatność przez Stripe · Karta lub BLIK · Faktura na żądanie
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
}

function downloadFile(file, title) {
  const a = document.createElement('a');
  a.href = 'vault/' + file;
  a.download = file;
  a.click();
  toast('Pobieranie: ' + (title || file));
}

// ── PLAYER ALIASES ────────────────────────────
window.playerToggle = () => togglePlay();
window.playerSkip   = s  => skipTime(s);
window.playerSeek   = e  => seekPlayer(e);
window.playerSpeed  = () => cycleSpeed();
window.playerClose  = () => {
  isPlaying = false; clearInterval(progressInterval);
  if (audioEl) { audioEl.pause(); audioEl.removeAttribute('src'); }
  const bar = document.getElementById('player-bar'), kPanel = document.getElementById('kinetic-panel'), btn = document.getElementById('pb-play');
  if (bar)    bar.style.display = 'none';
  if (kPanel) kPanel.style.display = 'none';
  if (btn)    btn.textContent = '▶';
};

// ── EXPORTS ───────────────────────────────────
window.initApp           = initApp;
window.playEpisode       = playEpisode;
window.openQuiz          = openQuiz;
window.closeQuiz         = closeQuiz;
window.answerQuiz        = answerQuiz;
window.retryQuiz         = retryQuiz;
window.checkCertificate  = checkCertificate;
window.renderCertificate = renderCertificate;
window.switchLang        = switchLang;
window.filterVault       = filterVault;
window.showUpgrade       = showUpgrade;
window.downloadFile      = downloadFile;
window.toast             = toast;
