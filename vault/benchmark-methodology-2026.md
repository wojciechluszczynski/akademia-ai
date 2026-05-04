# Benchmark Methodology 2026

## Dlaczego nie opierać Akademii tylko na MMLU/HumanEval

Benchmarki są użyteczne, ale nie tłumaczą wprost wartości dla marketera, foundera lub growth lidera.

Problemy:

1. Modele mają różne tryby reasoning.
2. Wyniki zależą od wersji modelu i konfiguracji.
3. Benchmarki szybko się dezaktualizują.
4. MMLU/HumanEval słabo pokazują jakość pracy na CRM, copy, researchu, content ops czy GTM.
5. Ranking może się zmienić szybciej niż kurs.

## Benchmark Akademii: task-based scorecard

Testuj modele na zadaniach:

| Zadanie | Miara jakości |
|---|---|
| GTM strategy brief | jasność decyzji, trade-offy, ryzyka, kompletność |
| Copy landing page | naturalność, ostrość, brak AI slopu, zgodność z ICP |
| Research ICP | jakość źródeł, aktualność, luki, weryfikowalność |
| Kod / appka | działa lokalnie, przechodzi test, minimalny diff, brak regresji |
| Clay personalization | trafność sygnału, brak creepy vibe, reply quality |
| NotebookLM | grounded answers, cytowanie źródeł, wykrywanie sprzeczności |
| AI video | prompt adherence, spójność, motion, brand fit, koszt per usable output |

## Skala

- 5 — produkcyjne bez większych zmian
- 4 — wymaga redakcji, ale oszczędza dużo czasu
- 3 — użyteczne jako draft
- 2 — wymaga ręcznej przebudowy
- 1 — ryzykowne albo błędne
