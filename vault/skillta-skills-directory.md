# Skillta — Katalog Skilli dla Claude Code i Cowork

**Źródło:** https://skillta.com/  
**Powiązane odcinki:** S1E04 (Claude Code, Cursor, GPT Codex)  
**Powiązane materiały:** AI Routing Cheatsheet, AI Marketing OS Template

---

## Co to jest Skillta

Skillta to darmowy marketplace z ponad 1200 gotowymi skillami i dodatkami do popularnych narzędzi AI: Claude Code, Claude Cowork, OpenClaw i GitHub Copilot. Skille zawsze pobierane są w najnowszej wersji bezpośrednio z GitHub — nie ma stałych paczek, które się starzeją.

Platforma ma też sekcję **Use Cases** (1689 zastosowań), która pozwala szukać skilli przez pryzmat tego, co chcesz zrobić — zamiast przeglądać niezrozumiałe nazwy.

---

## Jak znaleźć i zainstalować skill

### 1. Znajdź skill

- Przejdź na https://skillta.com/
- Wyszukaj po kategorii (marketing, dev, SEO, sprzedaż, obsługa klienta) lub przez **Use Cases** → znajdź zastosowanie, które Cię interesuje
- Sprawdź gwiazdki GitHub, liczbę pobrań i oceny

### 2. Zainstaluj do Claude Code

Większość skilli instaluje się przez jeden z tych sposobów:

**a) Claude Code CLI (najprostszy)**
```bash
# W terminalu, z aktywnym projektem:
claude skills add <url-do-skillu>
```

**b) Ręczne wgranie pliku `.md`**
```bash
# Skopiuj plik .md do:
~/.claude/skills/
# lub do katalogu projektu:
.claude/skills/
```

**c) Przez Claude Cowork**  
Skill pojawi się automatycznie w menu `/` po dodaniu do katalogu.

### 3. Zweryfikuj instalację
```
/skills list
```
Skill powinien pojawić się na liście z opisem i przykładem użycia.

---

## Polecane skille dla marketerów i founderów

| Skill | Kategoria | Do czego |
|---|---|---|
| Value Auditor | Marketing | Ocenia czy content daje realną wartość czytelnikowi (od CEO Brand24) |
| ICP Research Assistant | Marketing | Research persony i ICP na podstawie źródeł |
| Cold Email Critic | Sprzedaż | Ocenia zimny mail przez pryzmat deliverability i personalizacji |
| SEO Content Auditor | SEO | Sprawdza content pod kątem topical authority i AI citations |
| Meeting Summarizer | Produktywność | Transkrypt → action items + decision log |
| LinkedIn Post Generator | Content | Posty z własnego głosu, nie AI slopu |

Pełna lista: https://skillta.com/skills  
Skill Value Auditor (case study): https://skillta.com/skill/marketing/value-auditor

---

## Jak Skillta wpisuje się w AI Marketing OS

Skille to **Workflow/SOP Library w praktyce** — zamiast opisywać proces w Notion, wpisujesz go bezpośrednio w narzędzie, które go wykonuje.

Dobry workflow z Skillta wygląda tak:

```
Potrzeba biznesowa
  → Szukaj w Skillta (Use Cases)
  → Zainstaluj skill
  → Przetestuj na 3 realnych przypadkach
  → Oceń przez quality gate (czy rozwiązuje właściwy problem?)
  → Jeśli tak: wpisz do AI Use Case Backlog jako "live"
  → Jeśli nie: modyfikuj lub odrzuć
```

---

## Jak udostępnić własny skill

Jeśli zbudowałeś skill, który mógłby się przydać innym:

1. Opublikuj go na GitHub (public repo, plik `.md` z frontmatter)
2. Wejdź na https://skillta.com/ i kliknij "Share your skill"
3. Podaj URL repo — platforma pobiera najnowszą wersję automatycznie

**Przykład dobrego skilla:** Value Auditor od Michała Sadowskiego (CEO Brand24). Reguły oceny wartości treści, które przez lata stosował wewnętrznie, zamienił w skill gotowy do wdrożenia w jeden klik.

---

## Quality gate przed instalacją skilla

Nie każdy skill jest wart instalacji. Sprawdź:

- [ ] Opis jest konkretny — wiadomo co skill robi, a czego nie
- [ ] Repo na GitHub ma gwiazdki i aktywne commity
- [ ] Instrukcja instalacji jest jasna
- [ ] Działa na Twoich realnych danych (przetestuj zanim wdrożysz w workflow)
- [ ] Nie wymaga uprawnień, których nie rozumiesz

---

*Skillta jest w 100% darmowa. Platforma nie wymaga rejestracji do przeglądania skilli.*
