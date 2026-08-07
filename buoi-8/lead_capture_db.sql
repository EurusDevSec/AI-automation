-- ====================================================================
-- SUPABASE / POSTGRESQL DATABASE SCHEMA: LEADS & LESSONS
-- ====================================================================

-- 1. BẢNG LEADS HỌC VIÊN ĐĂNG KÝ
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

-- 2. BẢNG LESSONS BÀI HỌC CÓ THỂ SỬA ONLINE TRÊN WEB CMS
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

-- BẬT ROW LEVEL SECURITY (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

-- POLICY CHO PHÉP PUBLIC INSERT VÀO LEADS (FORM DANG KY)
CREATE POLICY "Allow public insert leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select leads" ON public.leads FOR SELECT USING (true);
CREATE POLICY "Allow public select lessons" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Allow public update lessons" ON public.lessons FOR UPDATE USING (true);
