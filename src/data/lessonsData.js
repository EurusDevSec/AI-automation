import buoi1Md from '../content/buoi_1.md?raw';
import buoi2Md from '../content/buoi_2.md?raw';
import buoi3Md from '../content/buoi_3.md?raw';
import buoi4Md from '../content/buoi_4.md?raw';
import buoi5Md from '../content/buoi_5.md?raw';
import buoi6Md from '../content/buoi_6.md?raw';
import buoi7Md from '../content/buoi_7.md?raw';
import buoi8Md from '../content/buoi_8.md?raw';
import { getLessonMarkdown } from '../lib/resolveMarkdown';

export const initialLessonsData = [
  {
    session_number: 1,
    title: "Buổi 1: Case Study - Lập Kế Hoạch & Bộ Truyền Thông Du Lịch / Team Building",
    module_name: "Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu",
    time_minutes: 90,
    description: "Case Study thực chiến 90 phút: Tự động hóa từ tìm địa điểm, lên lịch trình Canvas, tạo Poster/Video Veo/Music đến gom bill Gmail về Google Sheets 24/7.",
    image_url: "/session_1_real.png",
    raw_markdown_file: "src/content/buoi_1.md",
    case_study: {
      title: "Case Study Thực Chiến: Lập Kế Hoạch & Bộ Truyền Thông Cho Chuyến Du Lịch / Team Building Nhóm",
      target_audience: "Dân văn phòng, Freelancer, Leader nhóm & Người lập kế hoạch sự kiện",
      goal: "Trong 90 phút, tự động hóa từ tìm địa điểm, lên lịch trình Canvas, tạo Poster/Video Veo/Music đến gom bill Gmail về Google Sheets."
    },
    theory: {
      overview: "Bạn (dân văn phòng hay tự do) được giao lên kế hoạch chuyến đi 3N2Đ cho 10-15 người (ngân sách 3-5 triệu/người). Vận dụng 8 công cụ AI tạo thành hệ thống làm việc hoàn chỉnh.",
      learning_outcomes: [
        "Làm chủ 8 công cụ AI: Personal Intelligence, Deep Research, Guided Learning, Canvas, Spark Auto Browse, Image Gen, Veo Video, Audio Music & Custom Gems.",
        "Xây dựng trọn bộ kịch bản và truyền thông (Poster + Video Trailer 5s + Nhạc nền Tropical).",
        "Cài đặt Standing Instruction 24/7 tự động gom bill thu chi từ Gmail về Google Sheets."
      ],
      core_concept: "Tự động hóa toàn bộ quy trình lập kế hoạch sự kiện nhóm: Từ nghiên cứu -> kịch bản Canvas -> sản xuất Media -> quản lý tài chính ngầm."
    },
    steps: [
      "MẮT XÍCH 1 (15p): Deep Research cào top 3 địa điểm 3N2Đ & Guided Learning chốt Concept chuyến đi.",
      "MẮT XÍCH 2 (25p): Dàn lịch trình chi tiết & Kịch bản Trailer trên Canvas + Spark Auto Browse cào giá phòng Homestay.",
      "MẮT XÍCH 3 (25p): Tạo Poster du lịch Cinematic -> Tạo Clip Veo 5s camera Tilt up -> Tạo Nhạc nền Tropical House.",
      "MẮT XÍCH 4 (25p): Cài Standing Instruction 24/7 gom bill Gmail sang Google Sheets & Đóng gói Custom Gem."
    ],
    troubleshooting: [
      { issue: "Veo render Video mất 1-2 phút", cause: "AI đang dựng hiệu ứng chuyển động camera 3D", fix: "Chạy Prompt tạo Nhạc nền Tropical House song song trong lúc chờ Veo render." },
      { issue: "Auto Browse không cào được giá Agoda/Booking", cause: "Trang web yêu cầu CAPTCHA", fix: "Yêu cầu Spark cào thông tin giá trung bình từ các bài review blog travel." }
    ],
    prompts_with_placeholders: {
      step1_1: `[BỐI CẢNH & NHIỆM VỤ]
Tôi cần lên kế hoạch cho chuyến du lịch / team building 3 ngày 2 đêm cho nhóm khoảng 10-15 người (nam và nữ, độ tuổi 22-35). Chi phí dự kiến: 3 - 5 triệu VNĐ / người.

[YÊU CẦU ĐẦU RA]
Dùng công cụ Deep Research cào và phân tích top 3 địa điểm nổi bật năm 2026 phù hợp (ví dụ: Đà Lạt, Phan Thiết, Măng Đen). Đưa ra ưu/nhược điểm từng nơi về chi phí, phương tiện di chuyển và không gian hoạt động nhóm.`
    },
    mega_prompt: getLessonMarkdown(1, buoi1Md),
    n8n_json: "",
    sql_template: "",
    spec_text: "",
    raw_markdown: getLessonMarkdown(1, buoi1Md)
  },
  {
    session_number: 2,
    title: "Buổi 2: Trợ Lý Bộ Công Cụ Văn Phòng AI (Google Docs, Sheets & Slides)",
    module_name: "Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu",
    time_minutes: 90,
    description: "Ứng dụng Gemini AI toàn diện vào Bộ công cụ Google Docs (xử lý báo cáo thô), Google Sheets (phân tích bảng tính & hàm) và Google Slides (tự động tạo slide thuyết trình).",
    image_url: "/session_2.jpg",
    raw_markdown_file: "src/content/buoi_2.md",
    theory: {
      overview: "Học viên sẽ biến AI thành chuyên viên phân tích dữ liệu Senior, tự động hóa xử lý bảng tính Excel mà không cần ghi nhớ hàng trăm công thức phức tạp.",
      learning_outcomes: [
        "Cách tạo dữ liệu giả lập chuẩn để nhờ ChatGPT viết công thức chính xác.",
        "Làm chủ các hàm tìm kiếm & tổng hợp nâng cao: VLOOKUP, INDEX-MATCH, XLOOKUP, SUMIFS.",
        "Kỹ thuật Prompting ép AI dọn dẹp khoảng trắng, định dạng ngày tháng và phát hiện lỗi dữ liệu."
      ],
      core_concept: "Mô tả tên các Cột (Columns) và kiểu dữ liệu rõ ràng cho AI giúp ChatGPT sinh ra công thức chuẩn xác 100%."
    },
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
    mega_prompt: getLessonMarkdown(2, buoi2Md),
    n8n_json: "",
    sql_template: "",
    spec_text: "",
    raw_markdown: getLessonMarkdown(2, buoi2Md)
  },
  {
    session_number: 3,
    title: "Buổi 3: Auto Cào Ý Tưởng RSS Sang Google Sheets (n8n)",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Cài đặt n8n tự động săn tin tức & bài viết hot nhất từ RSS VNExpress lưu về Google Sheets.",
    image_url: "/session_3.jpg",
    raw_markdown_file: "src/content/buoi_3.md",
    theory: {
      overview: "Bắt đầu bước chân vào thế giới Tự Động Hóa Workflow không code với n8n. Tạo hệ thống tự động 'cào' bài viết từ báo chí/đối thủ về Google Sheets mỗi ngày.",
      learning_outcomes: [
        "Hiểu tư duy kiến trúc Workflow: Triggers (Kích hoạt) -> Nodes (Xử lý) -> Actions (Hành động).",
        "Cách kết nối OAuth2 an toàn giữa n8n và Google Sheets.",
        "Cấu hình Schedule Trigger chạy ngầm tự động theo chu kỳ mỗi 24 giờ."
      ],
      core_concept: "Tự động hóa giúp giải phóng hoàn toàn các công việc lặp đi lặp lại hàng ngày mà không tốn chi phí nhân sự."
    },
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
    spec_text: "",
    raw_markdown: getLessonMarkdown(3, buoi3Md)
  },
  {
    session_number: 4,
    title: "Buổi 4: Máy Sản Xuất Content Auto Đăng Bài Facebook Page",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Kết nối AI OpenAI vào n8n đọc ý tưởng từ Google Sheets, sinh bài đăng AIDA và đăng lên Fanpage.",
    image_url: "/session_4.jpg",
    raw_markdown_file: "src/content/buoi_4.md",
    theory: {
      overview: "Xây dựng 'Nhà máy sản xuất nội dung' hoàn toàn tự động. Nối kết Google Sheets -> OpenAI GPT-4o -> Facebook Graph API để tạo và đăng bài tự động đa kênh.",
      learning_outcomes: [
        "Cấu hình HTTP Request Node gọi API OpenAI GPT-4o.",
        "Thiết lập Facebook Graph API kết nối Fanpage tự động.",
        "Kỹ thuật phân luồng xử lý và hẹn giờ đăng bài (Scheduled Post)."
      ],
      core_concept: "Tạo luồng tự động từ khâu lên ý tưởng đến xuất bản bài đăng không cần sự can thiệp của con người."
    },
    steps: [
      "Import file workflow_buoi_4_fb_content.json.",
      "Nhập OpenAI API Key trong Node OpenAI.",
      "Cấu hình Facebook Page Access Token.",
      "Chạy thử nghiệm và kiểm tra bài đăng trên Fanpage."
    ],
    troubleshooting: [
      { issue: "Lỗi Facebook Graph API", cause: "Token hết hạn", fix: "Lấy lại Page Access Token trong Facebook Developer Console." }
    ],
    mega_prompt: "",
    n8n_json: "",
    sql_template: "",
    spec_text: "",
    raw_markdown: getLessonMarkdown(4, buoi4Md)
  },
  {
    session_number: 5,
    title: "Buổi 5: Tự Động Viết Kịch Bản Video Ngắn TikTok/Reels",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Tự động hóa luồng biến ý tưởng thô thành Kịch bản Video ngắn 3s Hook - Body - Call to Action.",
    image_url: "/session_5.jpg",
    raw_markdown_file: "src/content/buoi_5.md",
    theory: {
      overview: "Xây dựng luồng n8n biến ý tưởng tin tức thành kịch bản Video ngắn 3s Hook thu hút, có phân cảnh chi tiết cho TikTok / Reels / Shorts.",
      learning_outcomes: [
        "Cấu trúc Prompt kịch bản Video ngắn: 3s Hook -> 15s Value -> Call to Action.",
        "Tự động xuất file kịch bản dạng Bảng chia cột (Thoại vs Hình ảnh).",
        "Kết nối lưu trữ Kịch bản tự động vào Google Drive / Notion."
      ],
      core_concept: "Kịch bản chuẩn là yếu tố quyết định 80% thành công của Video ngắn Viral."
    },
    steps: [
      "Import file workflow_buoi_5_video_script.json.",
      "Thiết lập Prompts tạo kịch bản trong Node OpenAI.",
      "Chọn thư mục lưu trữ Google Drive.",
      "Chạy thử nghiệm xuất kịch bản."
    ],
    troubleshooting: [
      { issue: "Kịch bản quá dài", cause: "Thiếu giới hạn từ", fix: "Thêm ràng buộc tối đa 150 từ trong Prompt." }
    ],
    mega_prompt: "",
    n8n_json: "",
    sql_template: "",
    spec_text: "",
    raw_markdown: getLessonMarkdown(5, buoi5Md)
  },
  {
    session_number: 6,
    title: "Buổi 6: Auto Chatbot Trả Lời Tin Nhắn Messenger",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Dựng Chatbot AI tự động tư vấn khách hàng qua Facebook Messenger với bộ nhớ ngữ cảnh.",
    image_url: "/session_6.jpg",
    raw_markdown_file: "src/content/buoi_6.md",
    theory: {
      overview: "Thiết lập Trợ lý AI trả lời tin nhắn Facebook Messenger tự động 24/7, có khả năng tra cứu thông tin sản phẩm và chốt đơn tự động.",
      learning_outcomes: [
        "Cách cấu hình Webhook nhận tin nhắn từ Facebook Messenger.",
        "Cấu hình AI Agent với bộ nhớ hội thoại (Conversation Memory).",
        "Tích hợp tra cứu dữ liệu giá & tồn kho từ Google Sheets."
      ],
      core_concept: "Chatbot AI phản hồi tức thì giúp tăng 300% tỷ lệ chuyển đổi khách hàng tiềm năng."
    },
    steps: [
      "Import file workflow_buoi_6_chatbot.json.",
      "Cấu hình Facebook Webhook verification token.",
      "Kết nối Google Sheet làm cơ sở dữ liệu sản phẩm.",
      "Gửi tin nhắn thử trên Fanpage."
    ],
    troubleshooting: [
      { issue: "Chatbot trả lời lặp", cause: "Lỗi loop Webhook", fix: "Kiểm tra điều kiện ngắt trong Node Switch." }
    ],
    mega_prompt: "",
    n8n_json: "",
    sql_template: "",
    spec_text: "",
    raw_markdown: getLessonMarkdown(6, buoi6Md)
  },
  {
    session_number: 7,
    title: "Buổi 7: Dùng AI Tạo Website Landing Page Siêu Tốc",
    module_name: "Chặng 3: Lập Trình Website Bằng AI",
    time_minutes: 90,
    description: "Sử dụng AI Web Builders tạo trang Landing Page giới thiệu sản phẩm đầy đủ hiệu ứng modern.",
    image_url: "/session_7.jpg",
    raw_markdown_file: "src/content/buoi_7.md",
    theory: {
      overview: "Tạo trang Web Landing Page giới thiệu dịch vụ/sản phẩm hoàn chỉnh bằng công cụ AI Web Builder chỉ trong 90 phút mà không cần viết code thủ công.",
      learning_outcomes: [
        "Viết Bản Đặc Tả Kỹ Thuật (PRD) chuẩn cho AI Web Builder.",
        "Tối ưu UX/UI: Hero Section, Feature Grid, Pricing & Lead Form.",
        "Tùy chỉnh giao diện Responsive trên Mobile & Desktop."
      ],
      core_concept: "AI Web Builder giúp rút ngắn thời gian phát triển trang web từ 2 tuần xuống còn 90 phút."
    },
    steps: [
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
- Layout: Top Navigation, Hero Section, Curriculum Grid, Lead Capture Form, Footer.`,
    raw_markdown: getLessonMarkdown(7, buoi7Md)
  },
  {
    session_number: 8,
    title: "Buổi 8: Đưa Web Lên Internet Vercel & Quản Lý Supabase",
    module_name: "Chặng 3: Lập Trình Website Bằng AI",
    time_minutes: 90,
    description: "Kết nối GitHub Repo với Vercel để chạy live trang web công khai và quản lý dữ liệu Supabase DB.",
    image_url: "/session_8.jpg",
    raw_markdown_file: "src/content/buoi_8.md",
    theory: {
      overview: "Hoàn thiện case study cuối khóa: Đẩy toàn bộ mã nguồn lên GitHub, kết nối Vercel để xuất bản trang web live công khai và thiết lập cơ sở dữ liệu Supabase.",
      learning_outcomes: [
        "Quy trình 3 bước đẩy code lên GitHub và CI/CD tự động của Vercel.",
        "Cấu hình biến môi trường Environment Variables an toàn trên Cloud.",
        "Khởi tạo bảng Supabase Database và kết nối Form thu thập Lead từ Website."
      ],
      core_concept: "Đưa sản phẩm lên Internet công khai là bằng chứng thực tế nhất cho thấy sức mạnh của việc học AI & Automation."
    },
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
    spec_text: "",
    raw_markdown: getLessonMarkdown(8, buoi8Md)
  }
];
