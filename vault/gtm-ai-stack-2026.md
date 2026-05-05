# GTM AI Tech Stack 2026 — Bad → Okay → Best

**Źródło inspiracji:** Vlad Oleksiienko / Jason AI  
**Powiązane odcinki:** S1E01 (routing modeli), S2E01-E04 (outbound, Clay, cold email), S4E01 (AI w strategii B2B), S4E03 (marketing automation)  
**Powiązane materiały:** AI Routing Cheatsheet, LLM Comparison Matrix, Marketing Stack 2026, AI Marketing OS Template

---

## Zasada nadrzędna

> Adding AI tools used to be the flex. In 2026, it's the red flag.

10+ narzędzi w stacku i nadal wolno = problem nie narzędziowy, lecz architektoniczny.  
**Nowy flex: jeden tool per job. Zero duplikatów.**

---

## Stack według kategorii

### 🎙️ Meeting Intelligence

| ✗ Bad | ✓ Okay | ★ Best |
|---|---|---|
| Ręczne notatki | Otter.ai | **Granola** |

**Granola** — działa w tle, bez bota w calli. Transkrypt + notatki generowane lokalnie, nie przez zewnętrznego bota, który dołącza do meetingu jako uczestnik. Dla B2B to ważne — klient nie widzi bota, kultura spotkania nie zmienia się.

**Kiedy Otter.ai wystarczy:** Wewnętrzne spotkania, gdzie bot w calli jest akceptowalny.  
**Kiedy warto Granolę:** Sprzedaż, spotkania z klientami, boardy, gdzie dyskrecja liczy się bardziej.

⚠️ **Uwaga na polskim rynku:** Granola działa świetnie po angielsku; jakość transkrypcji po polsku sprawdź przed wdrożeniem produkcyjnym.

---

### 🔎 Competitor Intelligence

| ✗ Bad | ✓ Okay | ★ Best |
|---|---|---|
| Google Search | Perplexity | **Klue** |

**Perplexity** — doskonały do jednorazowego researchu i szybkich briefingów (→ S1E02).  
**Klue** — dedykowana platforma CI: monitoruje konkurencję w czasie rzeczywistym, organizuje battlecardy, integruje się z CRM i sales enablement. To nie research, to system.

**Kiedy Perplexity wystarczy:** Jednorazowy brief, szybka weryfikacja.  
**Kiedy Klue:** Masz team sprzedażowy, który regularnie potrzebuje aktualnych battlekardów i Perplexity to za mało do skali.

---

### 📤 Outbound Prospecting

| ✗ Bad | ✓ Okay | ★ Best |
|---|---|---|
| Ręczny LinkedIn | LinkedIn Sales Navigator | **Clay** |

→ **Szczegółowo omówione w S2E01 i S2E02.**  
Clay to nie lista kontaktów — to warstwa workflow GTM: firma → enrichment → sygnały → scoring → personalizacja → SDR handoff.

**Kiedy Sales Navigator wystarczy:** Małe wolumeny, ręczna praca 1:1.  
**Kiedy Clay:** Chcesz skalować outbound bez mnożenia narzędzi i ludzi.

---

### 📊 Pipeline Management / CRM

| ✗ Bad | ✓ Okay | ★ Best |
|---|---|---|
| Excel | HubSpot | **Attio** |

**Attio** — CRM zbudowany natywnie dla ery AI: elastyczny data model, workflows bez kodu, integracja z API, wbudowane raporty. Brak legacy UX z lat 2010.  
**HubSpot** — nadal standard enterprise i mid-market, ogromny ekosystem integracji.

**Kiedy HubSpot:** Duże team, istniejący ekosystem, compliance, enterprise.  
**Kiedy Attio:** Startup/scale-up, chcesz elastyczność i szybkie wdrożenie bez konsultanta.

---

### 🤖 AI Workspace

| ✗ Bad | ✓ Okay | ★ Best |
|---|---|---|
| Blank Doc | ChatGPT | **Claude** |

→ **Omówione w S1E01 — routing modeli.**  
Claude jako default do codziennej pracy copy/analitycznej. ChatGPT nadal mocny w narzędziach i pluginach.

---

### 🏗️ Landing Pages

| ✗ Bad | ✓ Okay | ★ Best |
|---|---|---|
| Manual Coding | Webflow | **Lovable** |

**Lovable** — builder AI-native: opisujesz stronę w języku naturalnym, dostajesz działający kod (React). Nie potrzebujesz developera do LP testowej, kampanijnej, waitlisty.  
**Webflow** — nadal mocny dla złożonych stron z CMS i animacjami.

**Kiedy Webflow:** Długoterminowe strony produktowe, CMS-driven content, full brand control.  
**Kiedy Lovable:** Szybkie LP do kampanii, A/B test, MVP, landing pod event.

→ Powiązane z S1E04 (vibe coding) — Lovable to wejście w vibe building bez terminala.

---

### 🎯 ABM Marketing

| ✗ Bad | ✓ Okay | ★ Best |
|---|---|---|
| Mass Email Blasts | 6sense | **Seam AI** |

**Seam AI** — identyfikuje konta, które realnie kupują (nie tylko pasują do ICP). Intent-based, AI-driven account prioritization.  
**6sense** — lider enterprise ABM; potężny ale drogi i złożony we wdrożeniu.

**Kiedy 6sense:** Enterprise z dużym budżetem i dedykowanym RevOps.  
**Kiedy Seam AI:** Zależy Ci na szybkim wdrożeniu i nie masz RevOps team.

---

### ✉️ Cold Outreach

| ✗ Bad | ✓ Okay | ★ Best |
|---|---|---|
| Ręczne DM-y i maile | Reply | **Jason AI (by Reply)** |

→ **Deliverability i cold outreach omówione w S2E03.**  
**Jason AI** — AI agent do cold outreach: generuje, wysyła, odpowiada i kwalifikuje leady. Rep skupia się na rozmowach, agent na sekwencjach.  
**Reply** — solidna platforma sequencer z dobrym deliverability layer.

**Kiedy Reply:** Kontrola nad sekwencjami, własne szablony, mid-market outbound.  
**Kiedy Jason AI:** Chcesz agent-driven outreach gdzie AI przejmuje follow-upy.

---

### 📈 Data Analytics

| ✗ Bad | ✓ Okay | ★ Best |
|---|---|---|
| Excel | Rows | **Amplitude** |

**Amplitude** — analityka produktowa i growth: funnele, retencja, cohorts, A/B testy, journey maps. Nie potrzebujesz data engineera do podstawowych pytań.  
**Rows** — spreadsheet z wbudowanymi źródłami danych i AI; dobry most między Excelem a BI.

**Kiedy Rows:** Masz Excela-heavy team, chcesz AI w spreadsheetach bez migracji.  
**Kiedy Amplitude:** Masz produkt digital, chcesz rozumieć zachowanie użytkowników i optymalizować funnel.

---

## Zalecany minimalny GTM stack dla B2B scale-up (2026)

```
Meeting notes:     Granola
CI:                Klue (lub Perplexity dla SMB)
Prospecting:       Clay
CRM:               Attio (lub HubSpot jeśli enterprise)
AI workspace:      Claude (Sonnet 4.6 jako default)
Landing pages:     Lovable (szybkie) + Webflow (produkcyjne)
ABM:               Seam AI (lub ręczne ICP scoring w Clay)
Cold outreach:     Jason AI / Reply + własna domena wysyłkowa
Analytics:         Amplitude (lub GA4 + Rows dla SMB)
Automation layer:  n8n + Clay + CRM
```

---

## Red flagi w stacku GTM

- Więcej niż 2 narzędzia do tego samego zadania
- Narzędzie bez właściciela w zespole
- Narzędzie, którego nikt nie umie obsługiwać
- Narzędzie kupione „bo wszyscy mają"
- Stack, który wymaga konsultanta do każdej zmiany

→ Oceniaj narzędzia przez **AI Growth Operating Model** (Vault): revenue impact × time saving × risk.
