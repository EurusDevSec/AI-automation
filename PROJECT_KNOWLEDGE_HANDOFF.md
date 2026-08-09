# 🧠 PROJECT KNOWLEDGE & MEMORY HANDOFF (AI-AUTOMATION MASTERCLASS)

> **Document Purpose**: This file serves as the single source of truth, technical memory, design guidelines, and architectural blueprint for future AI agents working on the `AI-automation` project.

---

## 📌 1. EXECUTIVE SUMMARY & CORE OBJECTIVES
- **Project**: AI & Automation Masterclass 2026 (Lộ Trình Đào Tạo AI 2026).
- **Goal**: Provide an ultra-premium, interactive student portal featuring real-world n8n automation workflows, Google Gemini AI integrations, and full step-by-step technical guides.
- **Location**: `R:\_Projects\Eurus_Workspace\AI-automation\`
- **Design System**: Official AWS Cloudscape Design System (`@cloudscape-design/components`) + Tailwind CSS.

---

## 📐 2. CORE ARCHITECTURE & FILE MAP

### Key Components & Libraries:
- **`src/pages/StudentPortal.jsx`**: Main lesson view page. Handles the 3-Tier Navigation, Dynamic TOC, ScrollSpy, and Markdown Rendering.
- **`src/lib/resolveMarkdown.js`**: Dynamic markdown loader using Vite's `import.meta.glob('../content/**/*.md', { eager: true, query: '?raw' })`. Parses multi-file folders (`src/content/buoi_X/`) into structured exercises and methods.
- **`src/data/lessonsData.js`**: Core metadata registry for all 8 sessions (titles, descriptions, modules, troubleshooting guides).
- **`src/lib/resolveImage.js`**: Dynamically maps markdown image paths (`image-1.png`) to imported assets.

### Content Structure (`src/content/`):
```
src/content/
├── buoi_1/ (index.md, bai_1.md, bai_2.md, bai_3.md)
├── buoi_2/ (index.md, bai_1.md, bai_2.md, bai_3.md)
├── buoi_3/ (index.md, bai_1.md, bai_2.md, bai_3.md, bai_4.md, 29 images, public/workflow_buoi_3_*.json)
└── buoi_X.md (Fallback single-file mode)
```

---

## 🎨 3. STRICT UI/UX DESIGN SYSTEM & PATTERNS

Future agents **MUST ADHERE STRICTLY** to the following 3 UI/UX principles:

### Rule 1: The 3-Tier Navigation Pattern ("Don't Make Me Think")
1. **Tier 1 (Primary Exercises Bar)**: Top horizontal tabs for switching between Exercises (`📘 Bài 1`, `🤖 Bài 2`, `🗂️ Bài 3`, `⚡ Bài 4`). Never dump multiple exercises into a single flat tab bar!
2. **Tier 2 (Secondary Method Switch)**: Segmented pill switch inside the active exercise view for toggling methods:
   - `[ 🛠️ Cách 1: Hướng Dẫn Dựng Thủ Công (10 Bước UI) ]` (Always First!)
   - `[ ⚡ Cách 2: Import Nhanh Bằng n8n JSON (1-Click Copy) ]` (Always Second!)
3. **Tier 3 (Focused Dynamic TOC)**: The right-sidebar Table of Contents filters and renders **ONLY** headings belonging to the currently selected Exercise and active Method.

### Rule 2: Table of Contents (TOC) Visual Tree Hierarchy
- **Level 1 (Session Title)**: `ml-0 bg-indigo-900 text-white font-extrabold text-xs p-2.5`
- **Level 2 (Major Sections / SubTabs)**: `ml-2.5 border-l-4 border-indigo-500 bg-indigo-50 text-indigo-950 font-bold text-xs`
- **Level 3 (Process / Pipeline)**: `ml-5 border-l-2 border-slate-300 bg-slate-50 text-slate-800 font-semibold text-xs`
- **Level 4 (Steps 1, 2, 3...)**: `ml-8 border-l-2 border-emerald-400 bg-emerald-50/40 text-emerald-950 text-[11px]`
- **Dual View Mode**: Provides a toggle between `🌳 Cây Phân Cấp` and `⚓ AnchorNav` (AWS Cloudscape native component).

### Rule 3: Floating Restore Button
- If the student clicks `Thu gọn ✕` to collapse the TOC sidebar, a floating purple button (`📌 Mục Lục (N)`) **MUST ALWAYS** stay fixed at the bottom right corner so the user can restore it in 1-click.

---

## 🛡️ 4. SECURITY AUDIT & PRIVACY PROTOCOLS

When working with n8n JSON files or markdown content, **NEVER** expose real credentials or private keys:
- **Google Sheets Document ID**: Replace with `"NHAP_ID_GOOGLE_SHEET_CUA_BAN_VAO_DAY"`.
- **Telegram Chat ID**: Replace with `"NHAP_TELEGRAM_CHAT_ID_CUA_BAN_VAO_DAY"`.
- **Email Addresses**: Replace with `"NHAP_EMAIL_CA_NHAN_CUA_BAN_VAO_DAY"`.
- **Credential Internal IDs**: Set `id: ""` in JSON for `googlePalmApi`, `googleSheetsOAuth2Api`, `telegramApi`, `gmailOAuth2`.
- **Placeholder Guide Requirement**: Under `Cách 2: Import Nhanh n8n JSON`, always provide explicit 5-point instructions telling students exactly where and how to retrieve these 5 placeholder values.

---

## 🚀 5. LESSON STATUS & NEXT STEPS

- **Buổi 1**: Completed & Modularized (`src/content/buoi_1/`).
- **Buổi 2**: Completed & Modularized (`src/content/buoi_2/`).
- **Buổi 3**: 
  - `bai_1.md`: Completed (Auto RSS Feed sang Google Sheets).
  - `bai_2.md`: Completed (n8n AI Summarizer sang Telegram/Slack with 29 images & sanitized `workflow_buoi_3_bai_2.json`).
  - `bai_3.md` & `bai_4.md`: Pending detailed step-by-step content.
- **Buổi 4 - Buổi 8**: Pending full modularization into `src/content/buoi_X/` sub-folders.

---

## 🛠️ 6. VERIFICATION COMMANDS
Before ending any turn, future agents must run:
```powershell
& C:\Users\ACER\AppData\Roaming\npm\yarn.cmd build
```
Ensure build exits with code 0 and zero compilation errors.
