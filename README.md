# 🚀 AI & Automation Masterclass Platform (Lộ Trình 8 Buổi Thực Chiến)

Hệ thống Học tập & Quản lý Đào tạo AI Thực Chiến (AI LMS Platform) thiết kế dành riêng cho người không biết code, dân văn phòng, kinh doanh online & marketer. Nền tảng được xây dựng dựa trên **React 18**, **Cloudscape Design System (AWS)**, **Tailwind CSS v4**, **Supabase Database**, triển khai qua **Vercel** và tích hợp **Eurus Agent Framework v2.3**.

---

## ⚡ Hướng Dẫn Chạy Dự Án Cục Bộ (Quick Start Guide)

### 📋 Yêu Cầu Tiền Đề
- **Node.js**: Phiên bản `v18.0.0` trở lên.
- **Trình Quản Lý Gói**: `Yarn` hoặc `NPM`.

---

### 🏃‍♂️ Các Bước Khởi Chạy (Local Development)

#### 1. Di chuyển vào thư mục dự án
```bash
cd "R:\_Projects\Eurus_Workspace\AI-automation"
```

#### 2. Cài đặt các gói phụ thuộc (Dependencies)
Nếu sử dụng **Yarn** (Khuyên dùng):
```bash
yarn install
```
Hoặc nếu sử dụng **NPM**:
```bash
npm install
```

#### 3. Khởi chạy Server Phát Triển Cục Bộ (Dev Server)
Nếu sử dụng **Yarn**:
```bash
yarn dev
```
Hoặc nếu sử dụng **NPM**:
```bash
npm run dev
```

👉 Mở trình duyệt và truy cập: **`http://localhost:3000`**

---

### 📦 Đóng Gói Sản Phẩm (Production Build)

Đóng gói dự án tối ưu hóa thành bản build sẵn sàng đưa lên hosting:
```bash
yarn build
# Hoặc: npm run build
```

Xem trước kết quả build cục bộ:
```bash
yarn preview
# Hoặc: npm run preview
```

---

## 🛠️ Cấu Hướng Biến Môi Trường (Cấu Hình Supabase DB)

Dự án có sẵn cơ chế **Fallback Storage** (tự động chạy chế độ Demo bằng Local Storage nếu chưa nạp Key Supabase). 

Khi bạn muốn kết nối với cơ sở dữ liệu Supabase thực tế, hãy tạo file `.env` tại thư mục gốc dự án:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-actual-anon-key
```

Chạy file SQL khởi tạo cơ sở dữ liệu tại file [`supabase/schema.sql`](file:///R:/_Projects/Eurus_Workspace/AI-automation/supabase/schema.sql) trên Supabase SQL Editor.

---

## 📁 Cấu Trúc Thư Mục Dự Án (Repository Structure)

```text
AI-automation/
├── AGENTS.md                          # Eurus Agent v2.3 Constitution Header
├── .agent/                            # Eurus Agent Specs, Rules & Master Roadmap
│   ├── docs/                          # ROADMAP.md & ARCHITECTURE.md
│   ├── specs/                         # SPEC-1.0_lms_platform.md (SDD 2.0)
│   └── rules/                         # 02-security.md Guardrails
├── buoi-1/ đến buoi-8/                # Kho tài nguyên thô 8 buổi học thực chiến
│   ├── README.md                      # Hướng dẫn từng bước (<10 từ/dòng) + Troubleshooting
│   ├── mega_prompt_*.txt              # Mega-Prompt chuẩn doanh nghiệp
│   ├── workflow_buoi_*.json           # Mã n8n Workflow JSON (Valid 100%)
│   └── landing_page_spec.txt          # Bản đặc tả kỹ thuật PRD
├── src/                               # Mã nguồn giao diện Cloudscape React
│   ├── components/Navigation.jsx      # TopNavigation bar
│   ├── pages/LandingPage.jsx          # Public Landing Page (Light Mode + Tailwind)
│   ├── pages/StudentPortal.jsx        # Student Portal (AppLayout + Prompt Sandbox)
│   ├── pages/AdminDashboard.jsx       # CMS Online Lesson Editor & Lead Manager
│   ├── lib/supabase.js                # Kết nối Supabase & Fallback Storage
│   └── data/lessonsData.js            # Dữ liệu hạt giống (Seed data 8 buổi học)
├── public/                            # Hình ảnh minh họa & file SEO (robots.txt, sitemap.xml)
├── supabase/schema.sql                # DDL SQL Script khởi tạo bảng Supabase
├── vercel.json                        # Cấu hình Single Page Application Vercel Deploy
├── package.json
└── vite.config.js
```

---

## 🌐 Triển Khai Lên Vercel (Vercel Deployment)

1. Đẩy mã nguồn lên GitHub Remote:
```bash
git add .
git commit -m "feat: complete AI LMS platform with Eurus Agent v2.3"
git branch -M main
git push -u origin main
```

2. Đăng nhập [Vercel.com](https://vercel.com) -> Chọn **Add New Project** -> Import repo `AI-automation`.
3. Bấm **Deploy** và nhận ngay URL Live Web công khai trên Internet!

---

## 👨‍🏫 Tác Giả & Bản Quyền
- **Giảng Viên**: EurusDevSec
- **Khóa Học**: AI & Automation Masterclass 2026
- **Triết Lý Thiết Kế**: Golden Path (Con Đường Hoàng Kim) - Zero Error Tolerance.
