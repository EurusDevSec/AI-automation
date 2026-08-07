export const initialLessonsData = [
  {
    session_number: 1,
    title: "Buổi 1: Chuẩn Hóa Văn Bản Doanh Nghiệp Bằng AI",
    module_name: "Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu",
    time_minutes: 90,
    description: "Làm chủ ChatGPT/Claude để soạn thảo email, tờ trình, báo cáo đúng chuẩn doanh nghiệp.",
    steps: [
      "Mở ChatGPT (chatgpt.com) hoặc Claude (claude.ai).",
      "Nhấn 1-Click Copy file mega_prompt_van_ban.txt.",
      "Dán Mega-Prompt vào ô chat với AI.",
      "Thay văn bản thô vào phần [DÁN VĂN BẢN THÔ].",
      "Nhấn Send và nhận kết quả chuẩn doanh nghiệp."
    ],
    troubleshooting: [
      { issue: "AI trả lời chung chung", cause: "Quên giữ phần Role & Constraints", fix: "Giữ nguyên phần [ROLE] trong Mega-Prompt." },
      { issue: "Văn bản quá dài", cause: "AI chưa nhận giới hạn độ dài", fix: "Thêm câu: Tóm tắt trong 300 từ." }
    ],
    mega_prompt: `[ROLE]
Bạn là Chuyên gia Biên soạn Văn bản & Trợ lý Giám đốc Chuyên nghiệp có 15 năm kinh nghiệm.

[CONTEXT]
Tôi cần bạn giúp chuẩn hóa, biên tập và nâng cấp bản thảo văn bản thô thành văn bản chuẩn doanh nghiệp, trang trọng, logic.

[CONSTRAINTS]
1. Không dùng từ ngữ cảm xúc thái quá.
2. Cấu trúc: Tiêu đề -> Tóm tắt điều hành -> Nội dung chi tiết -> Kế hoạch hành động.
3. Sử dụng định dạng Markdown chuẩn.

[INPUT DATA]
---
[DÁN VĂN BẢN THÔ CỦA BẠN VÀO ĐÂY]
---`,
    n8n_json: "",
    sql_template: "",
    spec_text: ""
  },
  {
    session_number: 2,
    title: "Buổi 2: Trợ Lý Excel & Phân Tích Dữ Liệu Thông Minh",
    module_name: "Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu",
    time_minutes: 90,
    description: "Dùng AI tự động viết hàm Excel/Google Sheets, dọn dẹp dữ liệu thô và xuất công thức chính xác.",
    steps: [
      "Copy bảng dữ liệu thô từ file raw_data_excel.md.",
      "Dán dữ liệu vào Google Sheets hoặc Excel.",
      "Copy prompt từ file prompt_excel_formula.txt.",
      "Thay thế câu hỏi dữ liệu của bạn vào prompt.",
      "Dán công thức AI xuất ra vào Excel."
    ],
    troubleshooting: [
      { issue: "Lỗi #N/A trong Excel", cause: "Khoảng trắng thừa dữ liệu", fix: "Dùng hàm TRIM() dọn dẹp khoảng trắng." },
      { issue: "Sai dấu phẩy , và ;", cause: "Cài đặt vùng Excel (Region)", fix: "Thay dấu phẩy , thành dấu ;" }
    ],
    mega_prompt: `[ROLE]
Bạn là Chuyên gia Đào tạo Microsoft Excel & Google Sheets Senior Analyst.

[CONTEXT]
Tôi có bảng tính các cột: A(Mã_KH), B(Tên_KH), C(Sản_Phẩm), D(Số_Lượng), E(Đơn_Giá), F(Ngày_Mua), G(Khu_Vực).

[YÊU CẦU]
Hãy viết công thức Excel/Google Sheets chính xác 100% cho yêu cầu:
"[NHẬP CÂU HỎI Excel CỦA BẠN VÀO ĐÂY]"`,
    n8n_json: "",
    sql_template: "",
    spec_text: ""
  },
  {
    session_number: 3,
    title: "Buổi 3: Auto Cào Ý Tưởng RSS Sang Google Sheets (n8n)",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Cài đặt n8n tự động săn tin tức & bài viết hot nhất từ RSS VNExpress lưu về Google Sheets.",
    steps: [
      "Mở n8n Dashboard -> Select Workflows -> Import.",
      "Tải file workflow_buoi_3_rss_to_sheet.json và import.",
      "Click đúp Node Google Sheets -> Kết nối Google Account.",
      "Nhập Document ID Google Sheet cá nhân.",
      "Nhấn Execute Workflow thử nghiệm."
    ],
    troubleshooting: [
      { issue: "401 Unauthorized", cause: "Chưa nạp Google Credentials", fix: "Chọn Google Account trong dropdown Node credentials." },
      { issue: "Resource not found", cause: "URL RSS sai", fix: "Dùng URL mặc định: https://vnexpress.net/rss/so-hoa.rss" }
    ],
    mega_prompt: "",
    n8n_json: `{
  "name": "Buổi 3 - Auto Cào Ý Tưởng RSS sang Google Sheets",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "hours",
              "hoursInterval": 24
            }
          ]
        }
      },
      "id": "node-schedule-trigger",
      "name": "Schedule Trigger (Mỗi 24h)",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "url": "https://vnexpress.net/rss/so-hoa.rss"
      },
      "id": "node-rss-feed",
      "name": "HTTP RSS Request",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [480, 300]
    },
    {
      "parameters": {
        "operation": "append",
        "documentId": {
          "__rl": true,
          "value": "[YOUR_GOOGLE_SHEET_ID_HERE]",
          "mode": "list"
        }
      },
      "id": "node-google-sheets",
      "name": "Google Sheets Append Node",
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.5,
      "position": [700, 300]
    }
  ]
}`,
    sql_template: "",
    spec_text: ""
  },
  {
    session_number: 4,
    title: "Buổi 4: Máy Sản Xuất Content Auto Đăng Bài Facebook Page",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Kết nối AI OpenAI vào n8n đọc ý tưởng từ Google Sheets, sinh bài đăng AIDA và đăng lên Fanpage.",
    steps: [
      "Import file workflow_buoi_4_sheet_to_facebook.json vào n8n.",
      "Kết nối OpenAI Credential (nhập API Key).",
      "Kết nối Facebook Graph API Credential (nhập Page Token).",
      "Chọn Google Sheet chứa chủ đề bài viết.",
      "Kích hoạt Workflow để AI đăng bài tự động."
    ],
    troubleshooting: [
      { issue: "GraphMethodException 100", cause: "Page Token hết hạn", fix: "Cấp lại Token có quyền pages_manage_posts." },
      { issue: "429 Insufficient Quotient", cause: "OpenAI hết credit", fix: "Kiểm tra Billing Balance trên platform.openai.com." }
    ],
    mega_prompt: "",
    n8n_json: `{
  "name": "Buổi 4 - Máy Sản Xuất Content Sheet to OpenAI to Facebook Page",
  "nodes": [
    {
      "parameters": {
        "documentId": "[YOUR_GOOGLE_SHEET_ID_HERE]"
      },
      "id": "node-sheets-trigger",
      "name": "Google Sheets Trigger",
      "type": "n8n-nodes-base.googleSheetsTrigger",
      "typeVersion": 1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "model": "gpt-4o-mini"
      },
      "id": "node-openai-writer",
      "name": "OpenAI Content Generator",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1.3,
      "position": [480, 300]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://graph.facebook.com/v19.0/me/feed"
      },
      "id": "node-facebook-post",
      "name": "Facebook Graph API Post",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [700, 300]
    }
  ]
}`,
    sql_template: "",
    spec_text: ""
  },
  {
    session_number: 5,
    title: "Buổi 5: Xưởng Kịch Bản Video Ngắn (Shorts/Reels/TikTok)",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Cấu hình chuỗi prompt liên hoàn chuyển đổi ý tưởng thô thành bảng kịch bản video chi tiết phân cảnh.",
    steps: [
      "Mở ChatGPT hoặc Claude.",
      "Copy Prompt Giai Đoạn 1 (Xác định góc nhìn & Hook).",
      "Nhập chủ đề video của bạn và chạy Giai đoạn 1.",
      "Copy Prompt Giai Đoạn 2 (Bảng phân cảnh chi tiết).",
      "Nhận kịch bản bảng 4 cột: Giây - Visual - Voiceover - Text."
    ],
    troubleshooting: [
      { issue: "Kịch bản video quá dài", cause: "AI viết nhiều lời thoại", fix: "Giới hạn thời lượng dưới 60 giây (tối đa 150 từ voiceover)." }
    ],
    mega_prompt: `[ROLE]
Bạn là Đạo diễn Video Ngắn TikTok/Facebook Reels triệu view.

[NHIỆM VỤ]
Hãy biên soạn Kịch bản chi tiết dưới dạng BẢNG MARKDOWN 4 cột:
| Thời Gian | Hình Ảnh & Góc Quay | Lời Thoại (Voiceover) | Text Overlay & SFX |`,
    n8n_json: "",
    sql_template: "",
    spec_text: ""
  },
  {
    session_number: 6,
    title: "Buổi 6: Auto Chatbot Messenger Facebook n8n",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Quy trình Webhook n8n tự động nhận tin nhắn khách hàng trên Fanpage, xử lý AI và reply Messenger.",
    steps: [
      "Import workflow_buoi_6_chatbot_messenger.json vào n8n.",
      "Copy Webhook URL từ Node Facebook Webhook.",
      "Dán Webhook Callback URL lên Meta Developer Dashboard.",
      "Nạp System Prompt tư vấn bán hàng vào Node OpenAI.",
      "Thử gửi tin nhắn cho Fanpage để kiểm tra tự động trả lời."
    ],
    troubleshooting: [
      { issue: "Webhook không phản hồi", cause: "Chưa nạp Verify Token", fix: "Cấu hình Verify Token trùng khớp ở n8n và Meta." }
    ],
    mega_prompt: "",
    n8n_json: `{
  "name": "Buổi 6 - Auto Chatbot Messenger Facebook n8n",
  "nodes": [
    {
      "parameters": {
        "path": "fb-messenger-webhook"
      },
      "id": "node-webhook",
      "name": "Facebook Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "model": "gpt-4o-mini"
      },
      "id": "node-openai-bot",
      "name": "OpenAI Sales Bot",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1.3,
      "position": [480, 300]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://graph.facebook.com/v19.0/me/messages"
      },
      "id": "node-fb-reply",
      "name": "FB Send Messenger Reply",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [700, 300]
    }
  ]
}`,
    sql_template: "",
    spec_text: ""
  },
  {
    session_number: 7,
    title: "Buổi 7: Ra Lệnh Cho AI Agent Tự Tạo Website (Bolt.new / Lovable)",
    module_name: "Chặng 3: Lập Trình Website Bằng AI",
    time_minutes: 90,
    description: "Sử dụng bản đặc tả PRD kỹ thuật ra lệnh cho AI Agent tự sinh mã nguồn React + Tailwind CSS.",
    steps: [
      "Truy cập Bolt.new hoặc Lovable.dev.",
      "Copy bản đặc tả kỹ thuật từ file landing_page_spec.txt.",
      "Dán toàn bộ PRD vào khung chat AI Web Builder.",
      "Quan sát AI Agent gõ code React + Tailwind CSS.",
      "Thử chỉnh sửa giao diện bằng câu lệnh tự nhiên."
    ],
    troubleshooting: [
      { issue: "Giao diện bị vỡ", cause: "Prompt quá chung chung", fix: "Dùng bản PRD cấu trúc rõ ràng trong landing_page_spec.txt." }
    ],
    mega_prompt: "",
    n8n_json: "",
    sql_template: "",
    spec_text: `[TEHNOLOGY STACK]
- Framework: React 18 (Vite)
- Styling: Tailwind CSS Modern Dark Mode
- Layout: Top Navigation, Hero Section, Curriculum Grid, Lead Capture Form, Footer.`
  },
  {
    session_number: 8,
    title: "Buổi 8: Đưa Web Lên Internet Vercel & Quản Lý Supabase",
    module_name: "Chặng 3: Lập Trình Website Bằng AI",
    time_minutes: 90,
    description: "Kết nối GitHub Repo với Vercel để chạy live trang web công khai và quản lý dữ liệu Supabase DB.",
    steps: [
      "Đẩy toàn bộ mã nguồn lên GitHub Remote.",
      "Mở Vercel.com -> Add New Project -> Chọn GitHub Repo.",
      "Bấm Deploy và nhận ngay URL Live Web công khai.",
      "Tạo project mới trên Supabase.com -> Chạy file SQL.",
      "Dán VITE_SUPABASE_URL và ANON_KEY vào Vercel."
    ],
    troubleshooting: [
      { issue: "Vercel 404 reload page", cause: "Thiếu SPA rewrites", fix: "Thêm file vercel.json rewrites về index.html." }
    ],
    mega_prompt: "",
    n8n_json: "",
    sql_template: `CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    occupation TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`,
    spec_text: ""
  }
];
