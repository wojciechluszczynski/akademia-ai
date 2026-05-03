-- ============================================================
-- AKADEMIA AI — Supabase Setup
-- Uruchom w: supabase.com → SQL Editor → New Query
-- ============================================================

-- 1. PROFILE TABLE (rozszerzenie Supabase Auth)
-- Tworzone automatycznie po rejestracji przez trigger
CREATE TABLE IF NOT EXISTS profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  plan        TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free','single','full','pro')),
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: tylko właściciel widzi swój profil
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users see own profile"   ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- 2. PROGRESS TABLE
CREATE TABLE IF NOT EXISTS progress (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  episode_id   INT NOT NULL,
  pct          NUMERIC(5,2) DEFAULT 0,
  completed    BOOLEAN DEFAULT FALSE,
  updated_at   TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, episode_id)
);

ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own progress" ON progress FOR ALL USING (auth.uid() = user_id);

-- 3. QUIZ RESULTS TABLE
CREATE TABLE IF NOT EXISTS quiz_results (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  episode_id   INT NOT NULL,
  score        NUMERIC(5,2) NOT NULL,
  passed       BOOLEAN NOT NULL,
  answers      JSONB,
  taken_at     TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, episode_id)
);

ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own quiz results" ON quiz_results FOR ALL USING (auth.uid() = user_id);

-- 4. TRIGGER: auto-create profile po rejestracji
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, plan)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    'free'
  );
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 5. WAŻNE: w Supabase Dashboard wyłącz email confirmation
-- Authentication → Settings → Email → "Confirm email" → OFF
-- (dla MVP — włącz gdy będziesz gotowy na produkcję)

-- ============================================================
-- GOTOWE. Po uruchomieniu tego SQL platforma jest w pełni
-- gotowa do obsługi rejestracji i logowania przez Supabase.
-- ============================================================
