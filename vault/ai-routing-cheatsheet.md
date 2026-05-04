# AI Routing Cheatsheet 2026

## 1. Najpierw rozpoznaj typ zadania

| Dominujące ograniczenie | Wybierz |
|---|---|
| Muszę podjąć decyzję strategiczną | GPT-5.5 Thinking |
| Muszę napisać naturalny, dobry tekst | Claude Sonnet 4.6 |
| Muszę zrobić trudny kod/refaktor | Claude Opus 4.7 / Claude Code |
| Mam PDF/audio/video/duży plik | Gemini 3.1 Pro |
| Muszę szybko sprawdzić aktualny temat | Perplexity |
| Potrzebuję X / real-time sentiment | Grok 4.3 |
| Mam własne źródła i chcę grounded QA | NotebookLM |
| Chcę gotowy skill do Claude Code / Cowork | [Skillta](https://skillta.com/) |
| Chcę zbudować outbound workflow | Clay |
| Chcę wygenerować głos | Eleven v3 |
| Chcę avatar video | HeyGen Avatar V |
| Chcę cinematic video | Runway Gen-4.5 / Veo 3.1 |

## 2. Prompt routing

Zamiast: „napisz mi strategię”

Użyj:

```text
Zadanie: [strategia / analiza / copy / research / kod / enrichment]
Cel biznesowy: [SQL, konwersja, koszt, czas zespołu, jakość procesu]
Źródła: [linki / pliki / dane / założenia]
Ograniczenia: [czas, budżet, ryzyko, brand voice, rynek]
Format wyniku: [tabela / rekomendacja / SOP / JSON / mail / brief]
Wymagany poziom pewności: [niski/średni/wysoki]
Co ma być oznaczone jako hipoteza: [lista]
```

## 3. Quality gate

Każdy wynik AI oceń przez:

- Czy rozwiązuje właściwy problem?
- Czy oddziela fakty od interpretacji?
- Czy ma konsekwencje biznesowe?
- Czy wskazuje trade-offy?
- Czy da się to wdrożyć bez kolejnego spotkania?
- Czy nie ma AI slopu, banałów i pozornej pewności?
