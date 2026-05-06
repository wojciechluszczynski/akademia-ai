# Źródła i lektury: AI Stack 2026

Seria 1 · ChatGPT · Claude · Gemini · Grok · Perplexity · NotebookLM

---

## Oficjalne dokumentacje i changelogi

| Narzędzie | Główne zasoby |
|-----------|--------------|
| **Claude (Anthropic)** | [docs.anthropic.com](https://docs.anthropic.com) · [Anthropic News](https://www.anthropic.com/news) |
| **ChatGPT / GPT-5** | [platform.openai.com/docs](https://platform.openai.com/docs) · [OpenAI Blog](https://openai.com/blog) |
| **Gemini** | [ai.google.dev](https://ai.google.dev) · [Google DeepMind Blog](https://deepmind.google/discover/blog/) |
| **Grok / xAI** | [docs.x.ai](https://docs.x.ai) · [xAI Blog](https://x.ai/blog) |
| **Perplexity** | [docs.perplexity.ai](https://docs.perplexity.ai) |
| **NotebookLM** | [notebooklm.google.com](https://notebooklm.google.com) · [NotebookLM Blog](https://blog.google/technology/ai/notebooklm-new-features/) |
| **Cursor / Claude Code** | [cursor.com/docs](https://cursor.com/docs) · [Claude Code docs](https://docs.anthropic.com/en/docs/claude-code) |
| **Google ADK** | [google.github.io/adk-docs](https://google.github.io/adk-docs/) · [ADK GitHub](https://github.com/google/adk-python) |

---

## Protokoły agentyczne (2026: must-know)

W 2026 wyłoniły się dwa standardy które będą definiować jak agenci AI komunikują się z narzędziami i ze sobą nawzajem. Marketer nie musi ich implementować, ale powinien wiedzieć że istnieją.

| Protokół | Twórca | Co robi |
|----------|--------|---------|
| **[MCP — Model Context Protocol](https://modelcontextprotocol.io/)** | Anthropic (open) | Standard jak LLM/agent uzyskuje dostęp do narzędzi, danych i kontekstu; obsługiwany przez Claude, GPT, Gemini, wszystkie główne frameworki |
| **[A2A — Agent-to-Agent Protocol](https://google.github.io/A2A/)** | Google (open) | Standard komunikacji między agentami zbudowanymi w różnych frameworkach; komplementarny do MCP |

**Dlaczego to ważne dla marketera:** narzędzia GTM (Clay, n8n, HubSpot) będą coraz częściej oferować integracje "MCP-native", co oznacza że podłączenie dowolnego narzędzia do agenta AI stanie się tak proste jak instalacja wtyczki.

---

## Newslettery obowiązkowe

- **[The Batch](https://www.deeplearning.ai/the-batch/)** — Andrew Ng, tygodniowy przegląd AI, praktyczny i bez hype'u
- **[Import AI](https://jack-clark.net/)** — Jack Clark (co-founder Anthropic), techniczne i strategiczne trendy
- **[Stratechery](https://stratechery.com/)** — Ben Thompson, biznesowy i strategiczny wymiar AI (płatny, warty każdej złotówki)
- **[One Useful Thing](https://www.oneusefulthing.org/)** — Ethan Mollick, Wharton prof., praktyczne zastosowania AI w pracy
- **[Every.to](https://every.to/)** — Dan Shipper i team, AI w codziennej pracy knowledge workerów
- **[There's An AI For That](https://theresanaiforthat.com/)** — 2,5M subskrybentów, największy newsletter kuratujący nowe narzędzia AI; idealne do śledzenia co pojawia się w ekosystemie
- **[AI Supremacy](https://aisupremacy.substack.com/)** — tygodniowy przegląd modeli i narzędzi
- **[The Neuron](https://www.theneurondaily.com/)** — codzienne AI news w 5 minut

---

## Podcasty

- **[The Artificial Intelligence Show](https://www.marketingaiinstitute.com/podcast)** — Marketing AI Institute, Paul Roetzer; najczęściej rekomendowany podcast o AI w marketingu dla business leaders
- **[Latent Space](https://www.latent.space/podcast)** — najlepsza techniczna rozmowa o modelach i infrastrukturze AI
- **[Lex Fridman Podcast](https://lexfridman.com/podcast/)** — długie rozmowy z założycielami OpenAI, Anthropic, Google DeepMind
- **[No Priors](https://www.nopriorisvscode.com/)** — Sarah Guo i Elad Gil, inwestorzy AI, perspektywa produktowa
- **[The TWIML AI Podcast](https://twimlai.com/)** — This Week in Machine Learning, techniczna głębokość
- **[Hard Fork](https://www.nytimes.com/column/hard-fork)** — NYT, Kevin Roose + Casey Newton, kulturowy i biznesowy wymiar

---

## Kluczowe raporty i artykuły (2025-2026)

- [Anthropic Model Card — Claude 3.7 Sonnet](https://www.anthropic.com/model-card) — jak Anthropic myśli o bezpieczeństwie i możliwościach
- [GPT-4o System Card](https://openai.com/index/gpt-4o-system-card/) — pełna dokumentacja możliwości i ograniczeń
- [Gemini 1.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf) — jak działa 1M context
- [State of AI Report 2025](https://www.stateof.ai/) — Nathan Benaich, coroczny przegląd całej branży
- [AI Index 2025 — Stanford HAI](https://aiindex.stanford.edu/report/) — dane, trendy, benchmarki

---

## Osoby warte śledzenia (LinkedIn / X)

| Osoba | Dlaczego warto |
|-------|----------------|
| **Simon Willison** | Najlepsze praktyczne testy modeli, [simonwillison.net](https://simonwillison.net) |
| **Ethan Mollick** | Wharton, jak AI zmienia pracę knowledge workerów |
| **Andrej Karpathy** | były Tesla/OpenAI, najlepsza edukacja o LLM od środka |
| **Amanda Askell** | Anthropic, jak myślą o charakterze i wartościach Claude |
| **Sam Altman** | CEO OpenAI, roadmapa i kierunek GPT |
| **Dario Amodei** | CEO Anthropic, długoterminowe myślenie o AI |

---

## Benchmarki i porównania modeli

- **[LMSYS Chatbot Arena](https://chat.lmsys.org/)** — ranking modeli oparty o ludzkie preferencje (Elo)
- **[Scale AI Leaderboard](https://scale.com/leaderboard)** — enterprise evaluation
- **[Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)** — open-source modele
- **[ArtificialAnalysis.ai](https://artificialanalysis.ai/)** — speed, cost, quality comparison

---

*Vault · Akademia AI · Seria 1: AI Stack 2026*
