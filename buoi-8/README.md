# 🚀 Buổi 8: Hướng Dẫn Đưa Web Lên Internet Vercel & Quản Lý Supabase

## 📋 Các Bước Triển Khai Thực Tế 3 Bước (Dưới 10 từ/dòng)

- 🔹 **Bước 1**: Đẩy toàn bộ mã nguồn dự án lên GitHub Remote.
- 🔹 **Bước 2**: Mở Vercel.com -> Nhấn **Add New Project** -> Chọn GitHub Repo `AI-automation`.
- 🔹 **Bước 3**: Nhấn nút **Deploy** và nhận ngay URL Live Web chạy trên Internet!
- 🔹 **Bước 4**: Tạo project mới trên Supabase.com -> Chạy file SQL `lead_capture_db.sql`.
- 🔹 **Bước 5**: Dán `VITE_SUPABASE_URL` và `VITE_SUPABASE_ANON_KEY` vào Vercel Environment Variables.

---

## 🛠️ Lỗi Thường Gặp (Troubleshooting)

| Lỗi | Nguyên nhân | Cách sửa |
| :--- | :--- | :--- |
| ⚠️ Vercel `404 Not Found` khi reload page | Thiếu routing SPA rewrites | Thêm file `vercel.json` định tuyến rewrites về `index.html`. |
| ⚠️ Supabase `CORS error` | Chưa cấu hình Allowed Origin | Thêm Vercel Domain vào Supabase API Settings -> CORS Origins. |
