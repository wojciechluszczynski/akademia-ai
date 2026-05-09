# Akademia AI

Platforma audio-kursowa z certyfikacją. 36 odcinków o narzędziach AI, automatyzacji i pracy z modelami językowymi — dla marketerów, twórców i operatorów biznesowych.

**Live:** [academy.wojciech.io](https://academy.wojciech.io)

---

## Co to jest

Zamknięta platforma kursowa zbudowana bez zewnętrznych CMS-ów ani gotowych narzędzi e-learningowych. Użytkownik kupuje dostęp przez Stripe, trafia do dashboardu, słucha odcinków w przeglądarce i odbiera certyfikat po ukończeniu kursu.

Platforma działa bez frameworka frontendowego — vanilla HTML/CSS/JS i Supabase jako backend.

---

## Funkcje

- Rejestracja i logowanie (Supabase Auth, magic link)
- Płatność przez Stripe Checkout + webhook do aktywacji konta
- Vault — zamknięta strefa z odcinkami audio i materiałami
- Dashboard użytkownika z postępem kursu
- Certyfikat ukończenia z unikalnym ID
- Strona weryfikacji certyfikatu (publiczna, bez logowania)

---

## Stack

| Warstwa | Technologia |
|---|---|
| Frontend | HTML, CSS, vanilla JavaScript |
| Auth | Supabase Auth (magic link) |
| Baza danych | Supabase (PostgreSQL) |
| Płatności | Stripe Checkout + Webhooks |
| Hosting | Vercel (serverless API routes) |

---

## Struktura

```
/api          Serverless functions — checkout, webhook, weryfikacja
/js           Logika frontendowa — auth, dashboard, vault
/css          Style
/audio        Pliki audio odcinków
/vault        Zamknięta strefa dla zalogowanych
index.html    Landing page
dashboard.html Panel użytkownika
cert-view.html Weryfikacja certyfikatu
```

---

## Lokalne uruchomienie

```bash
npm install
```

Ustaw zmienne środowiskowe (patrz `.env.example`):

```
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

```bash
vercel dev
```
