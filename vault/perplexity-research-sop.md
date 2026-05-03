# Perplexity Research SOP — B2B ICP & Competitive Intelligence
> Akademia AI · Seria 1 — AI Stack 2026 · Odcinek 02
> Wojciech Łuszczyński · akademia.wojciech.io

---

## Kiedy używać tego SOP

- Research nowego ICP/segmentu (nowy rynek, nowa branża)
- Due diligence przed cold outboundem
- Analiza konkurencji potencjalnego klienta przed demo
- Monitoring trendów w niszy klienta

**Czas wykonania:** 15–25 min zamiast 3–5h z Google

---

## Prompt 1 — ICP Deep Dive

```
Przeanalizuj firmę [NAZWA FIRMY] z perspektywy potencjalnego klienta B2B SaaS.

Potrzebuję:
1. Core business model (jak zarabiają)
2. Stack technologiczny widoczny publicznie (job offers, LinkedIn, BuiltWith)
3. Aktualne pain points (ostatnie 6 miesięcy — funding rounds, layoffs, pivots, nowe produkty)
4. Decision makers w obszarze [marketing/sprzedaż/operacje]
5. Czy i jak używają AI w procesach

Podaj źródła do każdego punktu.
```

---

## Prompt 2 — Competitive Landscape (przed demo)

```
Firma [NAZWA] operuje w branży [BRANŻA].
Zidentyfikuj:
1. Top 3 bezpośrednich konkurentów (podobny ICP, podobna cena)
2. Gdzie ta firma jest lepsza niż konkurencja (ich USP z ich własnej komunikacji)
3. Gdzie ma słabości (negatywne recenzje G2/Capterra/Reddit, Glassdoor)
4. Czy aktualnie szukają rozwiązań podobnych do [NASZ PRODUKT] — job offers, LinkedIn posts, community

Format: Tabela porównawcza + 3 bullet points do cold emaila
```

---

## Prompt 3 — Trigger Events (sygnały zakupowe)

```
Firma [NAZWA FIRMY]:
- Przeszukaj ostatnie 90 dni pod kątem trigger events
- Interesują mnie: nowe rundy finansowania, zmiany C-suite, ekspansja na nowe rynki, nowe produkty, ogłoszenia o zatrudnieniu w obszarach [sprzedaż/marketing/ops]
- Dla każdego eventu: data + źródło + dlaczego może to oznaczać otwartość na naszą rozmowę
```

---

## Prompt 4 — LinkedIn Intel (przygotowanie do cold call)

```
Osoba: [IMIĘ NAZWISKO], [STANOWISKO] w [FIRMA]
Przeszukaj publicznie dostępne informacje:
1. Ostatnie posty/komentarze na LinkedIn (tematy, ton, co ich angażuje)
2. Kariera — jak długo na obecnym stanowisku, poprzednie role
3. Edukacja + certyfikaty
4. Technologie/narzędzia wymieniane w kontekście tej osoby

Opening line suggestion na podstawie powyższego: [podaj 3 warianty]
```

---

## Workflow integracji z Apollo/Clay

```
1. Apollo: wyeksportuj listę kontaktów (company name, first name, last name, title)
2. Clay: waterfall enrichment (LinkedIn, Clearbit, Apollo)
3. Perplexity (przez API lub ręcznie dla top 20%): Prompt 1 + Prompt 3
4. Claude API: napisz personalizowany opening line na bazie Perplexity output
5. Smartlead/Instantly: import do sekwencji
```

---

## Gdzie Perplexity odpada (i co zamiast)

| Scenariusz | Problem | Alternatywa |
|---|---|---|
| Local SEO intent | Nie rozumie geografii zakupowej | Google |
| Pricing research | Często nieaktualne | G2, vendor site |
| Real-time social monitoring | Delay w indexowaniu | Grok (Twitter), Brand24 |
| Academic / papers | Halucynuje cytaty | Google Scholar, Consensus |
| Dane historyczne >3 lata | Słabe pokrycie | Statista, McKinsey reports |

---

## Koszty (maj 2026)

- **Perplexity Free:** 5 pro searches/dzień
- **Perplexity Pro ($20/mo):** nieograniczone, Claude/GPT-4o jako backend
- **Perplexity API:** $5/1000 requests (sonar-pro), opłaca się przy >200 wyszukiwań/mo

**ROI:** Przy 10 badaniach firm/tydzień = 20h → 3h. Oszczędność: $150 w czasie konsultanta tygodniowo.

---

*Akademia AI © 2026 Wojciech Łuszczyński — akademia.wojciech.io*
