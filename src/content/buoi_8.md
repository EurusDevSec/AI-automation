# Buổi 8: Đưa Web Lên Internet Vercel & Quản Lý Supabase

![Giao diện Vercel & Supabase Live Deployment](/session_8.jpg)

## 📖 Tổng Quan Buổi Học
Hoàn thiện case study cuối khóa: Đẩy toàn bộ mã nguồn lên GitHub, kết nối Vercel để xuất bản trang web live công khai và thiết lập cơ sở dữ liệu Supabase.

---

## 📦 Supabase SQL Schema
```sql
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    occupation TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```
