// ============================================
// AKADEMIA AI — App v2
// Quiz + Progress + Certificate + Kinetic Typography + Real Audio
// ============================================

// ── ICONS ─────────────────────────────────────
const IC = {
  play:  `<svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M0 0l10 6-10 6z"/></svg>`,
  pause: `<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="0" y="0" width="3.5" height="10" rx="1"/><rect x="6.5" y="0" width="3.5" height="10" rx="1"/></svg>`,
  lock:  `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="1" y="6" width="10" height="7" rx="2"/><path d="M3 6V4a3 3 0 0 1 6 0v2"/></svg>`,
  check: `<svg width="11" height="9" viewBox="0 0 11 9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4.5l3.5 3L10 1"/></svg>`,
};

// ── DATA ─────────────────────────────────────
// AKADEMIA AI — UPDATED DATA SNIPPET · 2026-05-04
// Podmień w platform/js/app.js stałe: EPISODES, MATERIALS, QUIZZES.

const EPISODES = [
  {
    "id": 1,
    "serie": 1,
    "num": "01",
    "emoji": "⚔️",
    "title_pl": "GPT-5.5 vs Claude Opus 4.7 vs Gemini 3.1 vs Grok 4.3: routing modeli zamiast jednego zwycięzcy",
    "title_en": "GPT-5.5 vs Claude Opus 4.7 vs Gemini 3.1 vs Grok 4.3: Model Routing Beats One Winner",
    "desc_pl": "Aktualny werdykt: nie ma jednego najlepszego modelu. Pokazuję, jak routować zadania między GPT-5.5, Claude, Gemini i Grok w realnej pracy growth/marketing/founder.",
    "desc_en": "GPT-5.5 vs Claude Opus 4.7 vs Gemini 3.1 vs Grok 4.3: Model Routing Beats One Winner",
    "duration": "13:40",
    "tools": [
      "GPT-5.5",
      "Claude Opus 4.7",
      "Claude Sonnet 4.6",
      "Gemini 3.1 Pro",
      "Grok 4.3"
    ],
    "locked": false,
    "hasQuiz": true
  },
  {
    "id": 2,
    "serie": 1,
    "num": "02",
    "emoji": "🔎",
    "title_pl": "Perplexity w 2026: research layer, nie zamiennik Google’a",
    "title_en": "Perplexity in 2026: Research Layer, Not a Google Replacement",
    "desc_pl": "ICP research, competitive intelligence, monitoring rynku i szybkie briefingi. Pokazuję, gdzie Perplexity skraca pracę, a gdzie nadal trzeba wrócić do Google, SERP i źródeł pierwotnych.",
    "desc_en": "Perplexity in 2026: Research Layer, Not a Google Replacement",
    "duration": "11:10",
    "tools": [
      "Perplexity",
      "Perplexity Computer",
      "Google",
      "Grok"
    ],
    "locked": true,
    "hasQuiz": true
  },
  {
    "id": 3,
    "serie": 1,
    "num": "03",
    "emoji": "📚",
    "title_pl": "NotebookLM: prywatny research room dla własnych źródeł",
    "title_en": "NotebookLM: A Private Research Room for Your Own Sources",
    "desc_pl": "NotebookLM jako system pracy na PDF-ach, transkryptach, notatkach, raportach i materiałach kursowych. Audio Overviews, Mind Maps, Reports i source-grounded QA.",
    "desc_en": "NotebookLM: A Private Research Room for Your Own Sources",
    "duration": "12:20",
    "tools": [
      "NotebookLM",
      "Gemini",
      "Google Workspace"
    ],
    "locked": true,
    "hasQuiz": true
  },
  {
    "id": 4,
    "serie": 1,
    "num": "04",
    "emoji": "💻",
    "title_pl": "Claude Code, Cursor i GPT Codex: vibe coding po stronie marketera",
    "title_en": "Claude Code, Cursor and GPT Codex: Vibe Coding for Marketers",
    "desc_pl": "Jak marketer/founder może sensownie budować, poprawiać i wdrażać małe aplikacje bez udawania senior developera. Granice, workflow, testy i ryzyka.",
    "desc_en": "Claude Code, Cursor and GPT Codex: Vibe Coding for Marketers",
    "duration": "14:05",
    "tools": [
      "Claude Code",
      "Cursor",
      "GitHub",
      "GPT-5.5",
      "Skillta"
    ],
    "locked": true,
    "hasQuiz": false
  },
  {
    "id": 5,
    "serie": 2,
    "num": "01",
    "emoji": "🎯",
    "title_pl": "Clay, Apollo, Hunter i źródła danych: gdzie naprawdę zaczyna się outbound",
    "title_en": "Clay, Apollo, Hunter and Data Sources: Where Outbound Really Starts",
    "desc_pl": "Outbound nie zaczyna się od sekwencji maili. Zaczyna się od ICP, danych, sygnałów i jakości listy. Porównuję rolę Apollo, Clay i Hunter bez magicznego myślenia.",
    "desc_en": "Clay, Apollo, Hunter and Data Sources: Where Outbound Really Starts",
    "duration": "12:30",
    "tools": [
      "Clay",
      "Apollo",
      "Hunter",
      "LinkedIn",
      "CRM"
    ],
    "locked": true,
    "hasQuiz": true
  },
  {
    "id": 6,
    "serie": 2,
    "num": "02",
    "emoji": "🧱",
    "title_pl": "Clay jako GTM workflow layer: enrichment, sygnały i personalizacja",
    "title_en": "Clay as a GTM Workflow Layer: Enrichment, Signals and Personalization",
    "desc_pl": "Buduję workflow: firma → enrichment → sygnały → scoring → personalizacja → SDR handoff. Clay nie jest tylko narzędziem do maili, ale warstwą operacyjną GTM.",
    "desc_en": "Clay as a GTM Workflow Layer: Enrichment, Signals and Personalization",
    "duration": "13:15",
    "tools": [
      "Clay",
      "Claygent",
      "Claude API",
      "GPT-5.5",
      "CRM"
    ],
    "locked": true,
    "hasQuiz": true
  },
  {
    "id": 7,
    "serie": 2,
    "num": "03",
    "emoji": "✉️",
    "title_pl": "Cold email 2026: deliverability, reputacja i personalizacja bez spamu",
    "title_en": "Cold Email 2026: Deliverability, Reputation and Personalization Without Spam",
    "desc_pl": "Co działa w cold mailu, co niszczy domenę i gdzie AI pomaga, a gdzie szkodzi. Krótkie wiadomości, sygnał, kontekst, deliverability i follow-up bez slopu.",
    "desc_en": "Cold Email 2026: Deliverability, Reputation and Personalization Without Spam",
    "duration": "12:55",
    "tools": [
      "Smartlead",
      "Instantly",
      "Clay",
      "Google Workspace",
      "SPF/DKIM/DMARC"
    ],
    "locked": true,
    "hasQuiz": false
  },
  {
    "id": 8,
    "serie": 2,
    "num": "04",
    "emoji": "📈",
    "title_pl": "Inbound enrichment i lead scoring: jak AI skraca drogę do SQL",
    "title_en": "Inbound Enrichment and Lead Scoring: How AI Shortens the Path to SQL",
    "desc_pl": "AI w sprzedaży nie musi zaczynać się od outboundu. Pokazuję enrichment inboundów, score fitu, routing i lepsze przygotowanie SDR-a przed pierwszym kontaktem.",
    "desc_en": "Inbound Enrichment and Lead Scoring: How AI Shortens the Path to SQL",
    "duration": "13:00",
    "tools": [
      "Clay",
      "HubSpot",
      "Pipedrive",
      "n8n",
      "GPT-5.5"
    ],
    "locked": true,
    "hasQuiz": false
  },
  {
    "id": 9,
    "serie": 3,
    "num": "01",
    "emoji": "🎙️",
    "title_pl": "Eleven v3 i klon głosu: produkcja audio bez utraty wiarygodności",
    "title_en": "Eleven v3 and Voice Cloning: Audio Production Without Losing Trust",
    "desc_pl": "Głos AI jako produkcyjny workflow: skrypt, tagi audio, emocje, wielojęzyczność, kontrola jakości, disclosure i granice etyczne.",
    "desc_en": "Eleven v3 and Voice Cloning: Audio Production Without Losing Trust",
    "duration": "12:25",
    "tools": [
      "ElevenLabs",
      "Eleven v3",
      "Descript",
      "NotebookLM"
    ],
    "locked": true,
    "hasQuiz": true
  },
  {
    "id": 10,
    "serie": 3,
    "num": "02",
    "emoji": "🧑‍💼",
    "title_pl": "HeyGen Avatar V: avatar jako format, nie sztuczka",
    "title_en": "HeyGen Avatar V: Avatar as a Format, Not a Gimmick",
    "desc_pl": "Avatar ma sens tylko wtedy, gdy rozwiązuje problem skali, lokalizacji albo repurposingu. Pokazuję workflow i ryzyka wiarygodności.",
    "desc_en": "HeyGen Avatar V: Avatar as a Format, Not a Gimmick",
    "duration": "11:50",
    "tools": [
      "HeyGen Avatar V",
      "ElevenLabs",
      "Canva",
      "CapCut"
    ],
    "locked": true,
    "hasQuiz": false
  },
  {
    "id": 11,
    "serie": 3,
    "num": "03",
    "emoji": "🎬",
    "title_pl": "Runway Gen-4.5, Veo 3.1 i AI video: od efektu wow do pipeline’u",
    "title_en": "Runway Gen-4.5, Veo 3.1 and AI Video: From Wow Effect to Pipeline",
    "desc_pl": "AI video jako system: brief, storyboard, obraz referencyjny, klip, warianty, montaż i dystrybucja. Nie demo, tylko powtarzalny proces.",
    "desc_en": "Runway Gen-4.5, Veo 3.1 and AI Video: From Wow Effect to Pipeline",
    "duration": "13:35",
    "tools": [
      "Runway Gen-4.5",
      "Veo 3.1",
      "Gemini",
      "Midjourney",
      "Nano Banana Pro"
    ],
    "locked": true,
    "hasQuiz": false
  },
  {
    "id": 12,
    "serie": 3,
    "num": "04",
    "emoji": "🧩",
    "title_pl": "Repurposing contentu z AI: jeden materiał, dziesięć formatów",
    "title_en": "AI Content Repurposing: One Asset, Ten Formats",
    "desc_pl": "Jak z jednego odcinka zrobić newsletter, LinkedIn post, short video, checklistę, lead magnet i materiał sprzedażowy bez produkowania generycznego slopu.",
    "desc_en": "AI Content Repurposing: One Asset, Ten Formats",
    "duration": "12:40",
    "tools": [
      "GPT-5.5",
      "Claude",
      "NotebookLM",
      "Descript",
      "Canva",
      "n8n"
    ],
    "locked": true,
    "hasQuiz": false
  },
  {
    "id": 13,
    "serie": 4,
    "num": "01",
    "emoji": "🧭",
    "title_pl": "AI w strategii B2B: od hype’u do revenue architecture",
    "title_en": "AI in B2B Strategy: From Hype to Revenue Architecture",
    "desc_pl": "Jak wybierać use case’y AI przez wpływ na przychód, koszt i czas zespołu, a nie przez atrakcyjność narzędzia.",
    "desc_en": "AI in B2B Strategy: From Hype to Revenue Architecture",
    "duration": "14:10",
    "tools": [
      "GPT-5.5",
      "Claude",
      "Perplexity",
      "CRM",
      "BI"
    ],
    "locked": true,
    "hasQuiz": true
  },
  {
    "id": 14,
    "serie": 4,
    "num": "02",
    "emoji": "📊",
    "title_pl": "AI Visibility, SEO i content 2026: jak być cytowanym przez modele",
    "title_en": "AI Visibility, SEO and Content 2026: How to Be Cited by Models",
    "desc_pl": "SEO nie umarło, ale zmienił się układ gry. Pokazuję content, który buduje entity, citations, topical authority i widoczność w AI answers.",
    "desc_en": "AI Visibility, SEO and Content 2026: How to Be Cited by Models",
    "duration": "13:50",
    "tools": [
      "GSC",
      "GA4",
      "Perplexity",
      "ChatGPT",
      "Gemini",
      "Ahrefs/Semrush"
    ],
    "locked": true,
    "hasQuiz": true
  },
  {
    "id": 15,
    "serie": 4,
    "num": "03",
    "emoji": "⚙️",
    "title_pl": "Marketing automation z AI: n8n, CRM i agentic workflows",
    "title_en": "AI Marketing Automation: n8n, CRM and Agentic Workflows",
    "desc_pl": "Automatyzacja, która realnie oszczędza czas i poprawia jakość procesu. Trigger, dane, decyzja, akcja, log, alert i człowiek w pętli.",
    "desc_en": "AI Marketing Automation: n8n, CRM and Agentic Workflows",
    "duration": "14:00",
    "tools": [
      "n8n",
      "Make",
      "Zapier",
      "HubSpot",
      "Pipedrive",
      "GPT-5.5",
      "Claude"
    ],
    "locked": true,
    "hasQuiz": false
  },
  {
    "id": 16,
    "serie": 4,
    "num": "04",
    "emoji": "🏗️",
    "title_pl": "AI operating system dla marketingu: governance, jakość i skalowanie",
    "title_en": "AI Operating System for Marketing: Governance, Quality and Scale",
    "desc_pl": "Jak zbudować system AI w zespole: use case backlog, prompt library, SOP, QA, permissions, source policy, koszty i odpowiedzialność.",
    "desc_en": "AI Operating System for Marketing: Governance, Quality and Scale",
    "duration": "13:30",
    "tools": [
      "Notion",
      "Airtable",
      "Slack",
      "CRM",
      "LLMs",
      "BI"
    ],
    "locked": true,
    "hasQuiz": false
  }
];

const MATERIALS = [
  {
    "id": 1,
    "title": "LLM Comparison Matrix 2026",
    "file": "llm-comparison-matrix-2026.md",
    "desc": "Porównanie modeli: Claude, GPT-5, Gemini, Grok pod kątem tasków marketingowych",
    "type": "md",
    "icon": "vi-md",
    "locked": false,
    "serie": 1
  },
  {
    "id": 2,
    "title": "AI Routing Cheatsheet",
    "file": "ai-routing-cheatsheet.md",
    "desc": "Który model do jakiego zadania: szybka ściąga decyzyjna",
    "type": "md",
    "icon": "vi-md",
    "locked": false,
    "serie": 1
  },
  {
    "id": 3,
    "title": "Perplexity Research SOP 2026",
    "file": "perplexity-research-sop-2026.md",
    "desc": "Standard operating procedure: jak prowadzić research z Perplexity krok po kroku",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 1
  },
  {
    "id": 4,
    "title": "Source Verification Checklist",
    "file": "source-verification-checklist.md",
    "desc": "Jak weryfikować źródła AI zanim użyjesz ich w materiałach biznesowych",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 1
  },
  {
    "id": 5,
    "title": "NotebookLM Source Workflow",
    "file": "notebooklm-source-workflow.md",
    "desc": "Jak zbudować prywatny research room z własnych dokumentów w NotebookLM",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 1
  },
  {
    "id": 6,
    "title": "Source Pack Template",
    "file": "source-pack-template.md",
    "desc": "Szablon paczki źródeł do każdego projektu badawczego",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 1
  },
  {
    "id": 7,
    "title": "Vibe Coding Playbook",
    "file": "vibe-coding-playbook.md",
    "desc": "Jak kodować z AI bez znajomości programowania: workflow krok po kroku",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 1
  },
  {
    "id": 8,
    "title": "Claude Code Update Manifest",
    "file": "claude-code-update-manifest.json",
    "desc": "Najważniejsze funkcje Claude Code i kiedy ich używać",
    "type": "json",
    "icon": "vi-json",
    "locked": true,
    "serie": 1
  },
  {
    "id": 9,
    "title": "GTM Data Source Scorecard",
    "file": "gtm-data-source-scorecard.md",
    "desc": "Ocena źródeł danych GTM: Apollo, Clay, LinkedIn, intent providers",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 2
  },
  {
    "id": 10,
    "title": "Outbound Data Quality Checklist",
    "file": "outbound-data-quality-checklist.md",
    "desc": "Jak sprawdzić jakość danych kontaktowych przed kampanią outbound",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 2
  },
  {
    "id": 11,
    "title": "Clay Enrichment Flow 2026",
    "file": "clay-enrichment-flow-2026.json",
    "desc": "Gotowy blueprint enrichmentu w Clay: ICP scoring, intent, personalizacja",
    "type": "json",
    "icon": "vi-json",
    "locked": true,
    "serie": 2
  },
  {
    "id": 12,
    "title": "Clay Personalization Prompts",
    "file": "clay-personalization-prompts.md",
    "desc": "Gotowe prompty do hiperpersonalizacji cold email przez Clay + Claude",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 2
  },
  {
    "id": 13,
    "title": "Cold Email Framework 2026",
    "file": "cold-email-framework-2026.md",
    "desc": "Struktura cold maila który działa: temat, pierwsze zdanie, CTA, follow-up",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 2
  },
  {
    "id": 14,
    "title": "Deliverability Checklist 2026",
    "file": "deliverability-checklist-2026.md",
    "desc": "SPF, DKIM, DMARC, warming: kompletny setup domeny wysyłkowej",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 2
  },
  {
    "id": 15,
    "title": "Inbound Enrichment Blueprint",
    "file": "inbound-enrichment-blueprint.json",
    "desc": "Automatyzacja enrichmentu leadów inbound: n8n + Clay + CRM",
    "type": "json",
    "icon": "vi-json",
    "locked": true,
    "serie": 2
  },
  {
    "id": 16,
    "title": "SQL Scoring Model",
    "file": "sql-scoring-model.md",
    "desc": "Jak zbudować model scoringu SQL który naprawdę przewiduje konwersję",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 2
  },
  {
    "id": 17,
    "title": "ElevenLabs v3 Production Guide",
    "file": "elevenlabs-v3-production-guide.md",
    "desc": "Jak nagrać, sklonować i wdrożyć głos AI w ElevenLabs v3",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 3
  },
  {
    "id": 18,
    "title": "Voice Disclosure Policy",
    "file": "voice-disclosure-policy.md",
    "desc": "Prawne i etyczne standardy disclosure przy AI voice i voice cloningu",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 3
  },
  {
    "id": 19,
    "title": "Avatar Video Production Checklist",
    "file": "avatar-video-production-checklist.md",
    "desc": "Krok po kroku: jak nagrać source video i wygenerować avatar w HeyGen",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 3
  },
  {
    "id": 20,
    "title": "Avatar Script Template",
    "file": "avatar-script-template.md",
    "desc": "Gotowy szablon skryptu do nagrania avatara: struktura, tempo, wskazówki",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 3
  },
  {
    "id": 21,
    "title": "AI Video Pipeline Checklist",
    "file": "ai-video-pipeline-checklist.md",
    "desc": "End-to-end checklist produkcji video AI: od promptu do dystrybucji",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 3
  },
  {
    "id": 22,
    "title": "Video Prompt Templates",
    "file": "video-prompt-templates.md",
    "desc": "Gotowe prompty do Runway Gen-4 i Veo 3 dla różnych formatów video",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 3
  },
  {
    "id": 23,
    "title": "Content Repurposing System",
    "file": "content-repurposing-system.md",
    "desc": "Jak jeden odcinek podcastu zamienić w 12 formatów treści z AI",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 3
  },
  {
    "id": 24,
    "title": "Distribution Checklist",
    "file": "distribution-checklist.md",
    "desc": "Lista kanałów i kroków dystrybucji contentu audio/video",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 3
  },
  {
    "id": 25,
    "title": "AI Growth Operating Model",
    "file": "ai-growth-operating-model.md",
    "desc": "Jak zbudować AI-native operating model dla zespołu growth/marketing",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 4
  },
  {
    "id": 26,
    "title": "Revenue AI Use Case Map",
    "file": "revenue-ai-use-case-map.md",
    "desc": "Mapa zastosowań AI w całym lejku revenue: od awareness po retention",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 4
  },
  {
    "id": 27,
    "title": "AI Visibility SEO Playbook",
    "file": "ai-visibility-seo-playbook.md",
    "desc": "Jak sprawić żeby Claude, ChatGPT i Perplexity polecały Twój brand",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 4
  },
  {
    "id": 28,
    "title": "Content Entity Checklist",
    "file": "content-entity-checklist.md",
    "desc": "Jak budować entity presence w LLM przez content i strukturę danych",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 4
  },
  {
    "id": 29,
    "title": "n8n Growth Automation Blueprint",
    "file": "n8n-growth-automation-blueprint.json",
    "desc": "Gotowy blueprint automatyzacji growth w n8n: lead scoring, nurturing, reporting",
    "type": "json",
    "icon": "vi-json",
    "locked": true,
    "serie": 4
  },
  {
    "id": 30,
    "title": "Automation Risk Register",
    "file": "automation-risk-register.md",
    "desc": "Rejestr ryzyk przy automatyzacji AI: co monitorować, jak reagować",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 4
  },
  {
    "id": 31,
    "title": "AI Marketing OS Template",
    "file": "ai-marketing-os-template.md",
    "desc": "Kompletny system operacyjny marketingu opartego o AI: role, narzędzia, procesy",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 4
  },
  {
    "id": 32,
    "title": "Governance i QA Checklist",
    "file": "governance-and-qa-checklist.md",
    "desc": "Jak wdrożyć AI governance w firmie: polityki, review, audit trail",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 4
  },
  {
    "id": 33,
    "title": "Skillta: Katalog skilli dla Claude Code",
    "file": "skillta-skills-directory.md",
    "desc": "Jak znaleźć, zainstalować i ocenić gotowe skille z Skillta.com · S1E04",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 1
  },
  {
    "id": 34,
    "title": "GTM AI Tech Stack 2026: Bad, Okay, Best",
    "file": "gtm-ai-stack-2026.md",
    "desc": "Granola, Klue, Attio, Lovable, Seam AI, Jason AI, Amplitude, jeden tool per job · S2+S4",
    "type": "md",
    "icon": "vi-md",
    "locked": true,
    "serie": 2
  },
  {
    "id": 35,
    "title": "Źródła i lektury: AI Stack 2026",
    "file": "zrodla-seria-1-ai-stack.md",
    "desc": "Dokumentacje, newslettery, podcasty, benchmarki i osoby warte śledzenia · Seria 1",
    "type": "md",
    "icon": "vi-md",
    "locked": false,
    "serie": 1
  },
  {
    "id": 36,
    "title": "Źródła i lektury: Outbound Machine",
    "file": "zrodla-seria-2-outbound.md",
    "desc": "Clay, Apollo, n8n, deliverability, społeczności i osoby warte śledzenia · Seria 2",
    "type": "md",
    "icon": "vi-md",
    "locked": false,
    "serie": 2
  },
  {
    "id": 37,
    "title": "Źródła i lektury: Voice, Video & Brand",
    "file": "zrodla-seria-3-voice-video.md",
    "desc": "ElevenLabs, HeyGen, Runway, Midjourney, standardy disclosure i narzędzia · Seria 3",
    "type": "md",
    "icon": "vi-md",
    "locked": false,
    "serie": 3
  },
  {
    "id": 38,
    "title": "Źródła i lektury: AI w Strategii B2B",
    "file": "zrodla-seria-4-ai-strategia.md",
    "desc": "Revenue architecture, AI visibility, governance, raporty i osoby warte śledzenia · Seria 4",
    "type": "md",
    "icon": "vi-md",
    "locked": false,
    "serie": 4
  }
];

const QUIZZES = {
  "1": {
    "title": "Sprawdź wiedzę: Model routing 2026",
    "questions": [
      {
        "q": "Jaki jest najważniejszy wniosek z porównania modeli w 2026?",
        "options": [
          "Zawsze używaj jednego najlepszego modelu",
          "Claude 3.7 nadal jest głównym punktem odniesienia",
          "Wygrywa routing modeli do zadań",
          "Benchmark MMLU wystarczy do decyzji"
        ],
        "correct": 2,
        "explanation": "Największą przewagą jest dobór modelu do typu zadania: strategia, copy, kod, research, multimodalność, real-time."
      },
      {
        "q": "Który model jest najlepszym defaultem do złożonej pracy strategicznej i analitycznej?",
        "options": [
          "GPT-5.5 Thinking",
          "Grok 3",
          "Gemini 2.5",
          "Eleven v3"
        ],
        "correct": 0,
        "explanation": "GPT-5.5 Thinking jest rekomendowany jako default do strategii, analizy, researchu i dokumentów."
      },
      {
        "q": "Do czego najbezpieczniej pozycjonować Gemini 3.1 Pro?",
        "options": [
          "Tylko cold email",
          "Voice cloning",
          "Multimodalność, Google Workspace i duży kontekst",
          "Wyłącznie X/Twitter"
        ],
        "correct": 2,
        "explanation": "Gemini 3.1 Pro ma największy sens przy PDF, audio, video, obrazach, repozytoriach i pracy w ekosystemie Google."
      }
    ]
  },
  "2": {
    "title": "Sprawdź wiedzę: Perplexity",
    "questions": [
      {
        "q": "Jak najlepiej opisać Perplexity w 2026?",
        "options": [
          "Pełny zamiennik Google",
          "Research layer i narzędzie do syntezy źródeł",
          "Narzędzie wyłącznie do kodowania",
          "CRM"
        ],
        "correct": 1,
        "explanation": "Perplexity skraca research i pomaga w syntezie, ale źródła nadal trzeba weryfikować."
      }
    ]
  },
  "3": {
    "title": "Sprawdź wiedzę: NotebookLM",
    "questions": [
      {
        "q": "Największą siłą NotebookLM jest:",
        "options": [
          "Praca na własnych źródłach",
          "Real-time X search",
          "Wysyłka cold maili",
          "Generowanie kinowego video"
        ],
        "correct": 0,
        "explanation": "NotebookLM jest prywatnym research roomem opartym o załączone, zaufane źródła."
      }
    ]
  }
};

const KINETIC_SCRIPTS = {
  1: `W 2026 przestałem pytać, który model AI jest najlepszy. To pytanie ma coraz mniej sensu. GPT-5.5 jest moim defaultem do złożonej pracy biznesowej, strategii, analizy danych i syntezy. Claude Opus i Sonnet biorę tam, gdzie liczy się kod, jakość tekstu, długi dokument i naturalny styl. Gemini ma największy sens przy Google Workspace, multimodalności, PDF-ach, audio, video i dużym kontekście. Grok ma sens wtedy, gdy potrzebuję real-time web, X i szybkiego kontekstu z tego, co dzieje się teraz. Perplexity zostaje narzędziem do researchu, ale nie jako zamiennik myślenia. NotebookLM jest prywatnym research roomem dla własnych źródeł. Clay jest GTM workflow layerem, a nie tylko narzędziem do szukania maili. Największy błąd zespołów w 2026 to używanie jednego modelu do wszystkiego. Największa przewaga to routing zadań do właściwego narzędzia.`,

  2: `Perplexity to nie zamiennik Google'a. To research layer, który przyspiesza pierwsze 30 minut pracy nad każdym projektem. Używam go do ICP research, competitive intelligence, monitoringu rynku i szybkich briefingów przed spotkaniami. Kluczowa różnica: Perplexity cytuje źródła i aktualizuje się w czasie rzeczywistym. Google nadal wygrywa przy SEO, długim ogonie i indeksowaniu. Tam gdzie liczą się świeże dane rynkowe, zmiany produktowe u konkurencji albo szybki brief o firmie przed rozmową sprzedażową, Perplexity jest szybszy i lepszy. Ale nie rozumuje. Nie planuje. Nie generuje. Jest narzędziem do zbierania informacji, a nie do ich syntezy. To ważna różnica, którą większość zespołów pomija przy wdrożeniu.`,

  3: `NotebookLM przez trzy miesiące ignorowałem. Uważałem, że to kolejny chatbot do PDF-ów. Myliłem się. NotebookLM to prywatny research room, który działa wyłącznie na twoich źródłach. Wrzucam raporty, transkrypty, notatki, materiały kursowe i briefy. Zadaję pytania. Dostaję odpowiedzi zakorzenione w moich dokumentach, nie w internecie. Audio Overviews to podcast z twoich materiałów. Mind Maps to mapa powiązań. Source-grounded QA to weryfikacja przy każdej odpowiedzi. W praktyce używam go do: onboardingu nowych klientów, przygotowania do wywiadów, syntezy raportów branżowych i budowania bazy wiedzy o rynku. Gemini 2.0 pod spodem daje kontekst 1 miliona tokenów. To oznacza, że możesz wrzucić całą bibliotekę dokumentów i rozmawiać z nimi jak z ekspertem.`,

  4: `Vibe coding to nie jest programowanie. To nowy workflow, który marketerzy i founderzy mogą sensownie używać bez zostania developerami. Claude Code i Cursor pozwalają mi budować małe narzędzia: skrypty, automaty, dashboardy, scrappery, mini-aplikacje. Nie piszę kodu. Opisuję co chcę. Iteruję. Sprawdzam. Wdrażam. Kluczowe: musisz rozumieć co budujesz, nawet jeśli nie rozumiesz każdej linii. Musisz testować na danych testowych zanim wdrożysz. Musisz wiedzieć gdzie jest granica między prostym skryptem a systemem, który wymaga prawdziwego dewelopera. Największy błąd to budowanie zbyt dużo naraz. Zacznij od jednego konkretnego problemu. Jeden output. Jeden workflow. I dopiero gdy działa, dodawaj kolejne elementy.`,

  5: `Outbound nie zaczyna się od maili. Zaczyna się od danych. Clay, Apollo i Hunter to trzy różne warstwy tej samej układanki. Apollo to baza kontaktów i firmografii. Hunter to weryfikacja i znajdowanie maili. Clay to warstwa operacyjna, która łączy dane z wielu źródeł i pozwala budować workflow wzbogacania bez developera. Największy błąd w outboundzie w 2026 to zły ICP. Jeśli strzelasz do złych firm, żadna personalizacja nie pomoże. Najpierw zdefiniuj kto ma ten problem, który rozwiązujesz. Jakie sygnały zakupowe szukasz. Jakie firmowe wydarzenie jest triggerem. Dopiero potem zacznij budować listę. Clay pozwala walidować każdy kontakt w czasie rzeczywistym, zanim mail trafi na serwer Smartleada.`,

  6: `Clay to nie narzędzie do cold emaili. Clay to GTM workflow layer. Pozwala mi budować pipeline od zera: firma wchodzi do tabeli, Clay wzbogaca dane z kilkudziesięciu źródeł, Claygent przegląda stronę i LinkedIn, Claude API pisze opening line, scoring nadaje priorytet, a SDR dostaje gotowy brief zamiast surowy kontakt. Cały proces trwa kilka sekund na kontakt i jest w pełni powtarzalny. Nie ma magii w personalizacji na scale. Jest dobry brief, dobry prompt i dobra weryfikacja. Kluczowe: nie próbuj personalizować wszystkiego. Personalizuj to, co zmienia wskaźnik odpowiedzi. Opening line, wzmianka o sygnale, dostosowanie do roli. Reszta to szablon.`,

  7: `Cold email w 2026 to nie masowość. To sygnał, kontekst i reputacja domeny. Większość kampanii outbound ląduje w spamie nie dlatego, że maile są złe. Ląduje tam, bo domena jest młoda, nie ma historii wysyłkowej, SPF i DKIM są skonfigurowane byle jak, a lista nie była weryfikowana. Techniczne podstawy muszą być na miejscu zanim napiszesz pierwszego maila. Potem liczy się krótko, konkretnie i z kontekstem. Najlepsze cold maile które widziałem w 2026 mają jedną myśl, jedną przyczynę wysyłki i jedno jasne co chcę żebyś zrobił. AI może pisać te maile, ale nie może zastąpić zrozumienia problemu odbiorcy. Jeśli nie wiesz czego ta osoba potrzebuje, żaden prompt nie pomoże.`,

  8: `Inbound enrichment to obszar, który większość firm całkowicie ignoruje. Ktoś wypełnił formularz. Zostawił email i imię. I to wszystko. W 2026 to za mało. Clay może w 30 sekund wzbogacić każdy inbound o firmografię, technologię w stacku, liczbę pracowników, sygnały wzrostu i historię finansowania. HubSpot lub Pipedrive może automatycznie nadać priorytet i przypisać do właściwego SDR-a. Zanim SDR oddzwoni, ma pełny brief. To skraca czas pierwszego kontaktu i poprawia jakość rozmowy. Lead scoring oparty na AI uwzględnia nie tylko dane demograficzne, ale też zachowanie na stronie, timing i dopasowanie produktowe. Efekt: mniej czasu na niskiej jakości leady, więcej na tych, którzy są gotowi do rozmowy.`,

  9: `Klonowanie głosu to nie gimmick. To produkcyjny workflow, który pozwala mi nagrywać odcinki szybciej, tworzyć wersje językowe bez studia i produkować audio bez każdorazowego nagrywania. ElevenLabs v3 to największy skok jakościowy w TTS od lat. Emocje, intonacja, pauzy, wzdychanie, nacisk. Skrypt z tagami audio daje pełną kontrolę nad tym jak głos brzmi. Kluczowe w klonowaniu: jakość próbki wejściowej, brak szumu tła, naturalna mowa, minimum 5-10 minut materiału. Disclosure: zawsze informuję słuchaczy, że dany format używa klonu głosu. To kwestia zaufania. AI voice jako produkcja to narzędzie. Jako zamiennik autentyczności to błąd. Granica jest cienka i świadome jej przekraczanie zawsze kosztuje wiarygodność.`,

  10: `Avatar AI ma sens tylko wtedy, gdy rozwiązuje konkretny problem skali albo lokalizacji. HeyGen Avatar V to najlepsza opcja którą testowałem do tworzenia wideo bez studia. Ale sam avatar to nie treść. Najczęstszy błąd: firma tworzy avatar, bo to fajne, a nie dlatego że ma problem do rozwiązania. Właściwe przypadki użycia: treningi onboardingowe w kilku językach, aktualizacje produktowe dla klientów, personalizowane wideo w outboundzie, lokalizacja contentu bez ponownego nagrywania. Kluczowe dla jakości: dobra oświetlona próbka wideo, naturalny skrypt bez listy punktorów, krótkie zdania i właściwy mikrofon przy nagraniu próbki głosu. Wiarygodność avatara spada przy emotionalnie intensywnych treściach. Trzymaj go od sprzedaży i relacji. Używaj do informacji i procesu.`,

  11: `AI video w 2026 to nie efekt wow. To pipeline. Runway Gen-4.5 i Veo 3.1 to dwa różne narzędzia do różnych zadań. Runway wygrywa przy precyzyjnej kontroli ruchu kamery, długich ujęciach i spójności stylistycznej. Veo 3.1 wygrywa przy realistycznym ruchu, fizyce i szczegółach. Żadne z nich nie zastępuje kamerzysta i montażysty. Ale oba pozwalają tworzyć materia visual na potrzeby reklam, social mediów i prezentacji bez studia. Mój workflow: brief tekstowy, storyboard w Gemini, obraz referencyjny w Midjourney, klip w Runway lub Veo, montaż w Descript lub CapCut. Kluczowe: zawsze zacznij od dobrego promptu z opisem ruchu kamery, oświetlenia i nastroju. Generyczny prompt daje generyczny wynik.`,

  12: `Repurposing contentu z AI to jeden z niewielu obszarów, gdzie AI realnie oszczędza dziesiątki godzin tygodniowo. Z jednego odcinka audio robię: transkrypt w Descript, streszczenie w NotebookLM, newsletter w Claude, trzy posty LinkedIn w GPT-5.5, short video w Runway, checklistę do pobrania, fragment do lead magneta i cytat na grafikę. Brzmi jak dużo. Zajmuje półtorej godziny. Kluczowe: nie każ AI przepisywać contentu. Każ mu go formatować na nowy kanał. Różnica jest fundamentalna. Przepisanie to kopiowanie z innymi słowami. Formatowanie to zmiana struktury, celu i kontekstu. Dobry prompt repurpingowy zawiera: cel kanału, typ odbiorcy, ograniczenia formatu i ton głosu. Bez tego dostajesz slop.`,

  13: `Strategia AI w B2B to nie lista narzędzi do wdrożenia. To architektura decyzji o tym, gdzie AI wpływa na przychód, koszt i czas zespołu. Zaczynam od revenue map: gdzie tracisz deale, gdzie pipeline stoi, gdzie sprzedaż jest zbyt wolna, gdzie marketing nie konwertuje. Potem patrzę, gdzie AI może skrócić ten cykl lub poprawić współczynnik. Nie zaczynam od narzędzia. Zaczynam od problemu. Większość firm robi odwrotnie. Kupują narzędzie, szukają problemu. Stąd niska adopcja, brak ROI i rozczarowanie. Use case AI musi być właścicielem. Musi mieć metrykę sukcesu. Musi mieć datę weryfikacji. Bez tego to projekt pilotażowy, który nigdy nie wychodzi z pilotażu.`,

  14: `SEO nie umarło. Ale zmienił się układ sił. W 2026 optymalizujesz nie tylko dla Google, ale dla odpowiedzi AI w Perplexity, ChatGPT, Gemini i Grok. Bycie cytowanym przez modele wymaga entity, autorytetu tematycznego i unikalnych danych. Treść oparta na cudzych danych i ogólnych spostrzeżeniach nie jest cytowana. Treść oparta na własnych obserwacjach, danych z klientów i specyficznym punkcie widzenia jest. Zmieniają się formaty. Długie artykuły nadal mają sens w kontekście topical authority. Ale krótkie, precyzyjne odpowiedzi na jedno pytanie to format, który AI preferuje jako źródło. Techniczne SEO nadal obowiązuje. Szybkość strony, indeksowalność, struktura nagłówków. Ale fundamentem jest teraz wiarygodność źródła, a nie liczba linków.`,

  15: `Automatyzacja marketingu z AI to nie wymiana człowieka na maszynę. To zwolnienie człowieka od powtarzalnych decyzji niskiej wartości. N8n jest moim narzędziem do budowania agentów workflow. Trigger, dane, decyzja, akcja, log, alert i człowiek w pętli przy wyjątkach. Przykładowy workflow który zbudowałem: inbound lead wchodzi do HubSpot, n8n wzbogaca przez Clay, Claude ocenia fit, jeśli wysoki fit tworzy brief dla SDR i wysyła notyfikację, jeśli niski fit wysyła sekwencję nurturingową i taguje do dalszego monitoringu. Całość działa bez udziału człowieka do momentu, gdy SDR powinien się odezwać. Kluczowe: każda automatyzacja musi mieć fallback gdy coś pójdzie nie tak. Logowanie błędów. Alert na Slacku. I zawsze człowiek w pętli przy decyzjach wysokiej stawki.`,

  16: `AI operating system dla marketingu to nie jedno narzędzie. To system zasad, procesów i governance, który sprawia, że cały zespół używa AI spójnie i bezpiecznie. Składa się z: use case backlogu, gdzie zbierasz i priorytetyzujesz przypadki użycia według wpływu. Prompt library, gdzie przechowujesz przetestowane prompty według tasków. SOP per workflow, żeby każdy wiedział jak używać AI w powtarzalnym procesie. QA checklist, bo AI halucynuje i każdy output wymaga weryfikacji. Source policy, która określa jakich danych AI może używać. I polityki kosztowej, bo bez kontroli wydatki na API rosną szybko. Bez tego systemu AI w zespole to chaos. Z nim to dźwignia.`
};

// ── AUDIO FILES ───────────────────────────────
const AUDIO_FILES = {
  1: '/audio/s1e01.mp3',
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
  } else if (params.get('upgrade') === '1') {
    window.history.replaceState({}, '', window.location.pathname);
    setTimeout(() => showUpgrade(), 600);
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
    if (btn) btn.innerHTML = IC.play;
    setTimeout(() => openQuiz(currentEpisode.id), 800);
  }
}

function onAudioEnded() {
  isPlaying = false;
  const btn = document.getElementById('pb-play');
  if (btn) btn.innerHTML = IC.play;
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
  // Update mobile topbar user info
  const mPlan = document.getElementById('mobile-user-plan');
  if (mPlan && currentUser) {
    mPlan.textContent = isPro ? 'PRO' : 'FREE';
    mPlan.style.color = isPro ? 'var(--orange)' : 'var(--text-4)';
  }
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
  [1, 2, 3, 4].forEach(s => {
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
  const title     = currentLang === 'pl' ? ep.title_pl : ep.title_en;
  const desc      = currentLang === 'pl' ? ep.desc_pl  : ep.desc_en;

  const statusDot = completed
    ? `<span style="color:var(--green);font-size:.65rem;">✓ Ukończono</span>`
    : hasProg
    ? `<span style="color:var(--orange);font-size:.65rem;">▶ ${Math.round(prog)}%</span>`
    : '';

  const quizDot = quizRes
    ? `<span style="color:${quizRes.passed ? 'var(--green)' : 'var(--red)'};font-size:.65rem;">${quizRes.passed ? '✓' : '✗'} Quiz</span>`
    : '';

  const audioDot = hasAudio && !isLocked
    ? `<span style="color:var(--blue);font-size:.65rem;">● Audio</span>`
    : '';

  const progressBar = hasProg ? `
    <div class="ep-progress-wrap">
      <div class="ep-progress-labels"><span>Postęp</span><span>${Math.round(prog)}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${prog}%"></div></div>
    </div>` : '';

  const actionBtn = isLocked
    ? `<button class="btn btn-sm" onclick="event.stopPropagation();showUpgrade()" style="font-size:.75rem;padding:6px 14px;">Odblokuj Pro</button>`
    : `<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();playEpisode(${ep.id})" style="font-size:.75rem;padding:6px 14px;">${completed ? '↺ Odtwórz' : hasProg ? '▶ Wznów' : '▶ Odtwórz'}</button>`;

  return `
    <div class="ep-card ${isLocked ? 'locked' : ''}" id="ep-card-${ep.id}" onclick="toggleEpDetail(${ep.id},${isLocked})">
      <div class="ep-row">
        <div class="ep-num-badge" data-serie="${ep.serie}">S${ep.serie}·${ep.num}</div>
        <div class="ep-row-main">
          <div class="ep-row-title">${ep.emoji} ${title}</div>
          <div class="ep-row-sub">
            ${ep.tools.slice(0,3).map(t => `<span>${t}</span>`).join('<span style="color:var(--line-2)">·</span>')}
            ${statusDot}${quizDot}${audioDot}
          </div>
        </div>
        <div class="ep-row-right">
          <span class="ep-duration">${ep.duration}</span>
          ${isLocked
            ? `<div class="ep-lock-icon">${IC.lock}</div>`
            : `<div class="ep-play-btn">${IC.play}</div>`}
        </div>
      </div>
      <div class="ep-detail">
        <p class="ep-detail-desc">${desc}</p>
        <div class="ep-detail-tools">
          ${ep.tools.map(t => `<span class="tag" style="font-size:.7rem;padding:3px 9px">${t}</span>`).join('')}
        </div>
        ${progressBar}
        <div class="ep-detail-footer">
          ${actionBtn}
          ${ep.hasQuiz && !isLocked ? `<button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openQuiz(${ep.id})" style="font-size:.75rem;">Quiz →</button>` : ''}
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
  toast(`Odtwarzam: ${(currentLang === 'pl' ? ep.title_pl : ep.title_en).substring(0, 48)}...`);
}

function togglePlay() {
  if (!currentEpisode) return;
  isPlaying = !isPlaying;
  const btn = document.getElementById('pb-play');
  if (btn) btn.innerHTML = isPlaying ? IC.pause : IC.play;

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
            if (btn) btn.innerHTML = IC.play;
            setTimeout(() => openQuiz(currentEpisode.id), 800);
          }
        } else {
          clearInterval(progressInterval); isPlaying = false;
          if (btn) btn.innerHTML = IC.play;
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

function genCertToken(userId, serie) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 8; i++) rand += chars[Math.floor(Math.random() * chars.length)];
  const prefix = serie === 'all' ? 'PRO' : `S${serie}`;
  return `AA-${prefix}-2026-${rand}`;
}

function openCert(serie) {
  if (!currentUser?.id) return;
  const name  = currentUser.name || currentUser.email?.split('@')[0] || 'Uczestnik';
  const token = genCertToken(currentUser.id, serie);
  const date  = new Date().toISOString();
  const params = new URLSearchParams({ local: '1', name, serie, token, date });
  // Try API first, fallback to local cert
  const apiUrl   = `/api/cert?userId=${encodeURIComponent(currentUser.id)}&serie=${serie}`;
  const localUrl = `/cert-view.html?${params}`;
  fetch(apiUrl, { method: 'HEAD' })
    .then(r => { window.open(r.ok || r.redirected ? apiUrl : localUrl, '_blank'); })
    .catch(() => { window.open(localUrl, '_blank'); });
}

function renderCertificate() {
  const el = document.getElementById('cert-container');
  if (!el) return;
  if (!currentUser?.id) {
    el.innerHTML = `<p style="color:var(--text-3);text-align:center;padding:32px 0;">Zaloguj się aby pobrać certyfikat.</p>`;
    return;
  }
  const accessible = EPISODES.filter(e => !e.locked || currentUser?.plan === 'pro');
  const completed  = getCompleted();
  const quizResults = getQuizResults();
  const doneCount  = accessible.filter(e => completed.includes(e.id)).length;
  const totalCount = accessible.length;
  const allDone    = doneCount >= totalCount;
  const allPassed  = accessible.filter(e => e.hasQuiz).every(e => quizResults[e.id]?.passed);
  const unlocked   = allDone && allPassed;

  el.innerHTML = `
    <div style="text-align:center;padding:32px 0;">
      <div style="font-size:0.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--orange);margin-bottom:12px;">Certyfikat ukończenia</div>
      ${unlocked ? `
        <p style="color:var(--text-3);font-size:.875rem;line-height:1.6;margin-bottom:24px;max-width:360px;margin-inline:auto;">
          Ukończyłeś program. Twój certyfikat jest gotowy — otwiera się w nowej karcie.
        </p>
        <div style="display:flex;flex-direction:column;gap:10px;max-width:280px;margin:0 auto;">
          <button onclick="openCert('1')" class="btn btn-primary" style="justify-content:center;">
            Pobierz certyfikat — Seria 1
          </button>
          ${currentUser?.plan === 'pro' ? `
          <button onclick="openCert('all')" class="btn btn-secondary" style="justify-content:center;">
            Certyfikat pełny (wszystkie serie)
          </button>` : ''}
          <a href="/verify.html" target="_blank" class="btn btn-ghost btn-sm" style="justify-content:center;margin-top:4px;">
            Weryfikator tokenów →
          </a>
        </div>
      ` : `
        <p style="color:var(--text-3);font-size:.875rem;line-height:1.6;margin-bottom:24px;max-width:360px;margin-inline:auto;">
          Certyfikat odblokowuje się po ukończeniu wszystkich odcinków i zaliczeniu quizów.
        </p>
        <div style="background:var(--bg-input);border:1px solid var(--line-1);border-radius:12px;padding:20px;max-width:320px;margin:0 auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:.8125rem;color:var(--text-3);">Odcinki ukończone</span>
            <span style="font-size:.8125rem;font-weight:700;color:var(--text-1);">${doneCount} / ${totalCount}</span>
          </div>
          <div style="height:6px;background:var(--line-1);border-radius:99px;overflow:hidden;">
            <div style="height:100%;width:${Math.round(doneCount/totalCount*100)}%;background:var(--orange);border-radius:99px;transition:.3s;"></div>
          </div>
        </div>
      `}
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
  if (btn)    btn.innerHTML = IC.play;
};

// ── EXPORTS ───────────────────────────────────
window.initApp           = initApp;
window.playEpisode       = playEpisode;
window.openQuiz          = openQuiz;
window.toggleEpDetail    = function(id, isLocked) {
  if (isLocked) { showUpgrade(); return; }
  const card = document.getElementById('ep-card-' + id);
  if (!card) return;
  const wasOpen = card.classList.contains('expanded');
  // Close all
  document.querySelectorAll('.ep-card.expanded').forEach(c => c.classList.remove('expanded'));
  if (!wasOpen) card.classList.add('expanded');
};
window.closeQuiz         = closeQuiz;
window.answerQuiz        = answerQuiz;
window.retryQuiz         = retryQuiz;
window.checkCertificate  = checkCertificate;
window.renderCertificate = renderCertificate;
window.openCert          = openCert;
window.switchLang        = switchLang;
window.filterVault       = filterVault;
window.showUpgrade       = showUpgrade;
window.downloadFile      = downloadFile;
window.toast             = toast;
