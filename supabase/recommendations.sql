-- Run this in Supabase SQL Editor after creating a project.
-- Enable LinkedIn (OIDC) under Authentication > Providers and add redirect URLs:
--   http://localhost:5173/Alaa-portfolio/
--   https://<your-github-pages-domain>/Alaa-portfolio/

create table if not exists public.recommendations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  author_name text not null,
  author_headline text,
  author_avatar text,
  linkedin_url text,
  message text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create index if not exists recommendations_status_created_at_idx
  on public.recommendations (status, created_at desc);

alter table public.recommendations enable row level security;

create policy "Anyone can read approved recommendations"
  on public.recommendations for select
  using (status = 'approved');

create policy "Users can read own recommendations"
  on public.recommendations for select
  using (auth.uid() = user_id);

create policy "Authenticated users can insert own recommendation"
  on public.recommendations for insert
  with check (auth.uid() = user_id);
