# 🏛️ System Architecture: AI Automation LMS

## 1. Stack Specifications
- **Frontend Engine**: React 18 (Vite SPA)
- **Design System**: AWS Cloudscape Design System (`@cloudscape-design/components`, `@cloudscape-design/global-styles`)
- **State & Backend**: Supabase JS Client (`@supabase/supabase-js`) + Fallback Memory Engine
- **Deployment Platform**: Vercel (Edge static delivery with SPA rewrites)
- **Agentic Engine**: Eurus Agent v2.3 SDD 2.0 Framework

## 2. Directory Matrix
```text
AI-automation/
├── AGENTS.md                          # Eurus Agent Constitution Header
├── .agent/                            # Agentic Specs, Rules & Roadmaps
├── buoi-1/ to buoi-8/                 # Physical Repository Raw Resource Assets
├── supabase/schema.sql                # Database Schema Definition
├── src/                               # Cloudscape React App Source
│   ├── components/Navigation.jsx      # TopNavigation
│   ├── pages/LandingPage.jsx          # Public Landing Page + Lead Form
│   ├── pages/StudentPortal.jsx        # AppLayout Learning Portal
│   └── pages/AdminDashboard.jsx       # CMS Online Lesson & Lead Editor
├── vercel.json                        # Vercel SPA Config
└── index.html                         # SEO & Entry Head
```
