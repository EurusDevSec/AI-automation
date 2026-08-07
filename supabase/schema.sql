-- SUPABASE SCHEMA INIT
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    occupation TEXT,
    note TEXT,
    status TEXT DEFAULT 'Pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_number INT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    module_name TEXT NOT NULL,
    description TEXT,
    steps JSONB DEFAULT '[]'::jsonb,
    troubleshooting JSONB DEFAULT '[]'::jsonb,
    mega_prompt TEXT,
    n8n_json TEXT,
    sql_template TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public leads insert" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Public leads select" ON public.leads FOR SELECT USING (true);
CREATE POLICY "Public lessons select" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Public lessons update" ON public.lessons FOR UPDATE USING (true);
