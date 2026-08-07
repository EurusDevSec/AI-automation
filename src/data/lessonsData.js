export const initialLessonsData = [
  {
    session_number: 1,
    title: "Buổi 1: Case Study - Tự Động Hóa Ra Mắt Sản Phẩm Mới (Spark OS)",
    module_name: "Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu",
    time_minutes: 90,
    description: "Case Study thực chiến cho Dân Văn Phòng & Chủ Shop: Tự động hóa ra mắt sản phẩm mới qua 4 Mắt xích Vercel 1-Click Copy.",
    image_url: "/session_1.jpg",
    case_study: {
      title: "Case Study Thực Tế: Ra Mắt Sản Phẩm / Dịch Vụ Mới 360°",
      target_audience: "Dân văn phòng, Marketer, Chủ shop online & Người khởi nghiệp không biết code",
      goal: "Tự động nghiên cứu thị trường -> Dàn kịch bản Canvas -> Tạo Bộ Media (Ảnh + Clip Veo + Nhạc) -> Cài bot ngầm Gmail 24/7."
    },
    theory: {
      overview: "Học viên nhập vai chủ dự án ra mắt sản phẩm mới. Vận dụng 8 công cụ AI tạo thành dây chuyền làm việc tự động khép kín.",
      learning_outcomes: [
        "Nắm vững 8 công cụ AI theo ma trận nhiệm vụ chuyên biệt.",
        "Thực thi 4 Mắt xích Vercel theo Case Study thực tế.",
        "Đóng gói Custom Gem Bot cá nhân hóa mang về dùng hằng ngày."
      ],
      core_concept: "Thay vì làm thủ công từng bước, hãy kết nối 8 công cụ AI thành dây chuyền ra mắt sản phẩm tự động 24/7."
    },
    steps: [
      "MẮT XÍCH 1 (15p): Bật Personal Intelligence, chạy Deep Research cào thị trường & chọn góc đánh tiếp thị.",
      "MẮT XÍCH 2 (25p): Dàn kịch bản trên Canvas & chạy Spark Chrome Auto Browse cào giá đối thủ.",
      "MẮT XÍCH 3 (25p): Tạo Ảnh Studio -> Tạo Clip Veo 5s -> Tạo Nhạc nền Music (Chạy song song).",
      "MẮT XÍCH 4 (25p): Cài Standing Instruction 24/7 (Gmail sang Sheets) & Đóng gói Custom Gem Bot."
    ],
    troubleshooting: [
      { issue: "Veo render Video mất 1-2 phút", cause: "AI dựng hình ảnh chuyển động 3D", fix: "Tạo Nhạc nền Music song song trong lúc chờ Veo render." },
      { issue: "Spark Chrome Auto Browse không tải web", cause: "Nhập sai cấu trúc URL", fix: "Nhập đầy đủ https:// ở đầu link web." }
    ],
    prompts_with_placeholders: {
      step1: `[STEP 1 - DEEP RESEARCH & GUIDED LEARNING]
Kích hoạt Deep Research quét xu hướng thị trường và 3 đối thủ lớn nhất của [TÊN_SẢN_PHẨM_DỊCH_VỤ] trong ngành [NGÀNH_HÀNG] tại Việt Nam. Xuất báo cáo và dùng Guided Learning đưa 3 câu hỏi chọn góc đánh tiếp thị cho [KHÁCH_HÀNG_MỤC_TIÊU].`,
      step2: `[STEP 2 - CANVAS KỊCH BẢN & AUTO BROWSE]
Dàn Kế hoạch truyền thông & Kịch bản Video chi tiết trên giao diện Canvas cho [TÊN_SẢN_PHẨM_DỊCH_VỤ]. Sau đó dùng Chrome Auto Browse cào thêm bảng giá đối thủ từ web [URL_WEB_ĐỐI_THỦ] lưu vào folder Spark OS trên Drive.`,
      step3: `[STEP 3 - MEDIA PIPELINE END-TO-END]
Tạo hình ảnh Banner chuẩn Studio cho [TÊN_SẢN_PHẨM_DỊCH_VỤ], biến ảnh thành Clip Video Veo 5s với hiệu ứng camera lượn ngang, và tạo đoạn nhạc nền Audio Music khớp phong cách truyền thông.`,
      step4: `[STEP 4 - STANDING INSTRUCTION 24/7 & CUSTOM GEM]
Standing Instruction 24/7: Mỗi khi có Gmail mới chứa tiêu đề '[TÊN_SẢN_PHẨM_DỊCH_VỤ]', tự động trích xuất thông tin khách hàng và ghi 1 dòng mới vào Google Sheets trong folder Spark OS. Gom toàn bộ logic thành Gem 'Trợ Lý Sales 360'.`
    },
    mega_prompt: `[STEP 1 - DEEP RESEARCH & GUIDED LEARNING]
Kích hoạt Deep Research quét xu hướng thị trường và 3 đối thủ lớn nhất của [TÊN_SẢN_PHẨM_DỊCH_VỤ] trong ngành [NGÀNH_HÀNG] tại Việt Nam. Xuất báo cáo và dùng Guided Learning đưa 3 câu hỏi chọn góc đánh tiếp thị cho [KHÁCH_HÀNG_MỤC_TIÊU].`,
    n8n_json: "",
    sql_template: "",
    spec_text: "",
    raw_markdown: `# BUỔI 1: CASE STUDY - TỰ ĐỘNG HÓA RA MẮT SẢN PHẨM MỚI (SPARK OS)

**Đối tượng thực hành:** Dân văn phòng, Marketer, Chủ shop online & Người khởi nghiệp không biết code.

![Case Study Ra Mắt Sản Phẩm Mới](/session_1.jpg)

---

## 🎯 CASE STUDY THỰC TẾ: RA MẮT SẢN PHẨM / DỊCH VỤ MỚI 360°

- **Mục tiêu:** Tự động nghiên cứu thị trường -> Dàn kịch bản Canvas -> Sản xuất Bộ Media (Ảnh + Clip Veo + Nhạc) -> Cài Bot ngầm 24/7.
- **Biến số Placeholder:** Học viên thay thế \`[TÊN_SẢN_PHẨM_DỊCH_VỤ]\`, \`[NGÀNH_HÀNG]\`, \`[KHÁCH_HÀNG_MỤC_TIÊU]\` vào Prompt.

---

## 🔗 QUY TRÌNH 4 MẮT XÍCH THỰC THI 90 PHÚT

### 1️⃣ MẮT XÍCH 1: Khởi Tạo Bộ Não AI & Research Thị Trường (15 Phút)
- **Bước 1:** Bật \`Personal Intelligence\` trong Cài đặt Gemini & tạo thư mục \`Spark OS\` trên Google Drive.
- **Bước 2:** Nhấn **1-Click Copy Step 1 Prompt** dán vào Gemini.
- **Bước 3:** Bật \`Guided Learning\` chốt góc tiếp thị sản phẩm.

![📸 Ảnh Bài Làm Thực Tế Mắt Xích 1](/session_1.jpg)

\`\`\`prompt
[STEP 1 - DEEP RESEARCH & GUIDED LEARNING]
Kích hoạt Deep Research quét xu hướng thị trường và 3 đối thủ lớn nhất của [TÊN_SẢN_PHẨM_DỊCH_VỤ] trong ngành [NGÀNH_HÀNG] tại Việt Nam. Xuất báo cáo và dùng Guided Learning đưa 3 câu hỏi chọn góc đánh tiếp thị cho [KHÁCH_HÀNG_MỤC_TIÊU].
\`\`\`

---

### 2️⃣ MẮT XÍCH 2: Dàn Kịch Bản Canvas & Chrome Auto Browse (25 Phút)
- **Bước 1:** Nhấn **1-Click Copy Step 2 Prompt** dán vào giao diện Canvas.
- **Bước 2:** Gõ comment lề trang Canvas để Spark tự sửa nội dung.
- **Bước 3:** Ra lệnh cho Spark Chrome Auto Browse cào dữ liệu web đối thủ lưu về Drive.

![📸 Ảnh Bài Làm Thực Tế Mắt Xích 2](/workflow_n8n_preview.jpg)

\`\`\`prompt
[STEP 2 - CANVAS KỊCH BẢN & AUTO BROWSE]
Dàn Kế hoạch truyền thông & Kịch bản Video chi tiết trên giao diện Canvas cho [TÊN_SẢN_PHẨM_DỊCH_VỤ]. Sau đó dùng Chrome Auto Browse cào thêm bảng giá đối thủ từ web [URL_WEB_ĐỐI_THỦ] lưu vào folder Spark OS trên Drive.
\`\`\`

---

### 3️⃣ MẮT XÍCH 3: Xưởng Sản Xuất Đa Phương Tiện End-to-End (25 Phút)
- **Bước 1:** Tạo ảnh Banner/Product Visual chuẩn Studio từ kịch bản Canvas.
- **Bước 2:** Nhập Prompt tả camera 3D biến ảnh thành Clip Video Veo 5s.
- **Bước 3:** Lấy Prompt tạo Audio Music chạy song song trong lúc đợi Veo render.

> 💡 **Mẹo Render Song Song:** Tạo Nhạc nền Music ngay khi Veo đang xử lý render Video để tối ưu thời gian trên lớp!

![📸 Ảnh Bài Làm Thực Tế Mắt Xích 3](/hero_ai_automation_light.jpg)

\`\`\`prompt
[STEP 3 - MEDIA PIPELINE END-TO-END]
Tạo hình ảnh Banner chuẩn Studio cho [TÊN_SẢN_PHẨM_DỊCH_VỤ], biến ảnh thành Clip Video Veo 5s với hiệu ứng camera lượn ngang, và tạo đoạn nhạc nền Audio Music khớp phong cách truyền thông.
\`\`\`

---

### 4️⃣ MẮT XÍCH 4: Standing Instructions 24/7 & Đóng Gói Gem Bot (25 Phút)
- **Bước 1:** Dán lệnh Standing Instruction 24/7 (Gmail tự động điền Google Sheets).
- **Bước 2:** Tự gửi 1 Gmail test để kiểm tra dữ liệu nhảy vào Sheets.
- **Bước 3:** Lưu System Instruction đóng gói thành Custom Gem Bot.

![📸 Ảnh Bài Làm Thực Tế Mắt Xích 4](/session_1.jpg)

\`\`\`prompt
[STEP 4 - STANDING INSTRUCTION 24/7 & CUSTOM GEM]
Standing Instruction 24/7: Mỗi khi có Gmail mới chứa tiêu đề '[TÊN_SẢN_PHẨM_DỊCH_VỤ]', tự động trích xuất thông tin khách hàng và ghi 1 dòng mới vào Google Sheets trong folder Spark OS. Gom toàn bộ logic thành Gem 'Trợ Lý Sales 360'.
\`\`\`
`
  },
  {
    session_number: 2,
    title: "Buổi 2: Trợ Lý Excel & Phân Tích Dữ Liệu Thông Minh",
    module_name: "Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu",
    time_minutes: 90,
    description: "Dùng AI tự động viết hàm Excel/Google Sheets, dọn dẹp dữ liệu thô và xuất công thức chính xác.",
    image_url: "/session_2.jpg",
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
    mega_prompt: `[ROLE]
Bạn là Chuyên gia Đào tạo Microsoft Excel & Google Sheets Senior Analyst.

[CONTEXT]
Tôi có bảng tính các cột: A(Mã_KH), B(Tên_KH), C(Sản_Phẩm), D(Số_Lượng), E(Đơn_Giá), F(Ngày_Mua), G(Khu_Vực).

[YÊU CẦU]
Hãy viết công thức Excel/Google Sheets chính xác 100% cho yêu cầu:
"[NHẬP CÂU HỎI Excel CỦA BẠN VÀO ĐÂY]"`,
    n8n_json: "",
    sql_template: "",
    spec_text: "",
    raw_markdown: `# Buổi 2: Trợ Lý Excel & Phân Tích Dữ Liệu Thông Minh

![Giao diện Phân Tích Dữ Liệu Excel AI](/session_2.jpg)

## 📖 Tổng Quan Buổi Học
Học viên sẽ biến AI thành chuyên viên phân tích dữ liệu Senior, tự động hóa xử lý bảng tính Excel mà không cần ghi nhớ hàng trăm công thức phức tạp.

---

## 📦 Kho Tài Nguyên Mega-Prompt Excel
\`\`\`prompt
[ROLE]
Bạn là Chuyên gia Đào tạo Microsoft Excel & Google Sheets Senior Analyst.

[CONTEXT]
Tôi có bảng tính các cột: A(Mã_KH), B(Tên_KH), C(Sản_Phẩm), D(Số_Lượng), E(Đơn_Giá), F(Ngày_Mua), G(Khu_Vực).

[YÊU CẦU]
Hãy viết công thức Excel/Google Sheets chính xác 100% cho yêu cầu:
"[NHẬP CÂU HỎI Excel CỦA BẠN VÀO ĐÂY]"
\`\`\`
`
  },
  {
    session_number: 3,
    title: "Buổi 3: Auto Cào Ý Tưởng RSS Sang Google Sheets (n8n)",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Cài đặt n8n tự động săn tin tức & bài viết hot nhất từ RSS VNExpress lưu về Google Sheets.",
    image_url: "/session_3.jpg",
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
    raw_markdown: `# Buổi 3: Auto Cào Ý Tưởng RSS Sang Google Sheets (n8n)

![Giao diện n8n RSS Automation](/session_3.jpg)

## 📖 Tổng Quan Buổi Học
Bắt đầu bước chân vào thế giới Tự Động Hóa Workflow không code với n8n. Tạo hệ thống tự động 'cào' bài viết từ báo chí/đối thủ về Google Sheets mỗi ngày.

---

## 📦 Mã Workflow n8n JSON
\`\`\`n8n
{
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
}
\`\`\`
`
  },
  {
    session_number: 4,
    title: "Buổi 4: Máy Sản Xuất Content Auto Đăng Bài Facebook Page",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Kết nối AI OpenAI vào n8n đọc ý tưởng từ Google Sheets, sinh bài đăng AIDA và đăng lên Fanpage.",
    image_url: "/session_4.jpg",
    theory: {
      overview: "Xây dựng 'Nhà máy sản xuất nội dung' hoàn toàn tự động. Nối kết Google Sheets -> OpenAI GPT-4o -> Facebook Graph API để tạo và đăng bài tự động đa kênh.",
      learning_outcomes: [
        "Cách tạo và sử dụng OpenAI API Key trong n8n.",
        "Cấu hình System Prompt chuẩn công thức Marketing AIDA (Attention - Interest - Desire - Action).",
        "Cách lấy Facebook Page Access Token và sử dụng Graph API v19.0 để đăng bài tự động."
      ],
      core_concept: "Kết nối AI với các API mạng xã hội biến n8n thành một Marketer tự động làm việc 24/7."
    },
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
    spec_text: "",
    raw_markdown: `# Buổi 4: Máy Sản Xuất Content Auto Đăng Bài Facebook Page

![Giao diện Facebook Auto Content n8n](/session_4.jpg)

## 📖 Tổng Quan Buổi Học
Xây dựng 'Nhà máy sản xuất nội dung' hoàn toàn tự động. Nối kết Google Sheets -> OpenAI GPT-4o -> Facebook Graph API để tạo và đăng bài tự động đa kênh.

---

## 📦 Mã Workflow n8n JSON
\`\`\`n8n
{
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
}
\`\`\`
`
  },
  {
    session_number: 5,
    title: "Buổi 5: Xưởng Kịch Bản Video Ngắn (Shorts/Reels/TikTok)",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Cấu hình chuỗi prompt liên hoàn chuyển đổi ý tưởng thô thành bảng kịch bản video chi tiết phân cảnh.",
    image_url: "/session_5.jpg",
    theory: {
      overview: "Quy trình 2 giai đoạn biến một ý tưởng thô thành bảng kịch bản phân cảnh chi tiết cho TikTok, Facebook Reels và YouTube Shorts.",
      learning_outcomes: [
        "Kỹ thuật Chained Prompting (Prompt liên hoàn) để AI suy luận từng bước.",
        "Cách tạo 3 giây đầu tiên (Hook) giữ chân người xem tỷ lệ giữ chân cao.",
        "Xây dựng Bảng kịch bản 4 cột chuyên nghiệp: Thời gian - Visual Cue - Voiceover - Text Overlay."
      ],
      core_concept: "Kịch bản video ngắn thành bại ở 3 giây đầu tiên (Hook). AI giúp bạn thử nghiệm hàng chục câu Hook triệu view trong vài giây."
    },
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
    spec_text: "",
    raw_markdown: `# Buổi 5: Xưởng Kịch Bản Video Ngắn (Shorts/Reels/TikTok)

![Giao diện Kịch Bản Video AI](/session_5.jpg)

## 📖 Tổng Quan Buổi Học
Quy trình 2 giai đoạn biến một ý tưởng thô thành bảng kịch bản phân cảnh chi tiết cho TikTok, Facebook Reels và YouTube Shorts.

---

## 📦 Mega-Prompt Kịch Bản Video
\`\`\`prompt
[ROLE]
Bạn là Đạo diễn Video Ngắn TikTok/Facebook Reels triệu view.

[NHIỆM VỤ]
Hãy biên soạn Kịch bản chi tiết dưới dạng BẢNG MARKDOWN 4 cột:
| Thời Gian | Hình Ảnh & Góc Quay | Lời Thoại (Voiceover) | Text Overlay & SFX |
\`\`\`
`
  },
  {
    session_number: 6,
    title: "Buổi 6: Auto Chatbot Messenger Facebook n8n",
    module_name: "Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội",
    time_minutes: 90,
    description: "Quy trình Webhook n8n tự động nhận tin nhắn khách hàng trên Fanpage, xử lý AI và reply Messenger.",
    image_url: "/session_6.jpg",
    theory: {
      overview: "Xây dựng Chatbot tư vấn bán hàng & báo giá thông minh kết nối trực tiếp Facebook Messenger Webhook với OpenAI API qua n8n.",
      learning_outcomes: [
        "Hiểu nguyên lý Webhook: Sự kiện khách gửi tin nhắn -> Trigger n8n tức thì.",
        "Cấu hình Verify Token và Messenger Graph API Send Message.",
        "Kỹ thuật ép AI trả lời ngắn gọn, thân thiện và định hướng thu thập SĐT tư vấn."
      ],
      core_concept: "Webhook giúp hệ thống phản hồi tức thì dưới 1 giây ngay khi khách hàng tương tác trên Fanpage."
    },
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
    spec_text: "",
    raw_markdown: `# Buổi 6: Auto Chatbot Messenger Facebook n8n

![Giao diện AI Chatbot Messenger](/session_6.jpg)

## 📖 Tổng Quan Buổi Học
Xây dựng Chatbot tư vấn bán hàng & báo giá thông minh kết nối trực tiếp Facebook Messenger Webhook với OpenAI API qua n8n.

---

## 📦 Mã Workflow n8n JSON Chatbot
\`\`\`n8n
{
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
}
\`\`\`
`
  },
  {
    session_number: 7,
    title: "Buổi 7: Ra Lệnh Cho AI Agent Tự Tạo Website (Bolt.new / Lovable)",
    module_name: "Chặng 3: Lập Trình Website Bằng AI",
    time_minutes: 90,
    description: "Sử dụng bản đặc tả PRD kỹ thuật ra lệnh cho AI Agent tự sinh mã nguồn React + Tailwind CSS.",
    image_url: "/session_7.jpg",
    theory: {
      overview: "Ứng dụng sức mạnh của các AI Code Generator (Bolt.new, Lovable) để xây dựng một Landing Page bán hàng hoàn chỉnh bằng ngôn ngữ tự nhiên.",
      learning_outcomes: [
        "Cách viết Bản đặc tả kỹ thuật PRD (Product Requirement Document) cho AI Code Agent.",
        "Hiểu cấu trúc trang web hiện đại: Hero Section, Feature Cards, Form Lead Capture, Footer.",
        "Kỹ thuật tinh chỉnh màu sắc, layout và giao diện thông qua câu lệnh hội thoại."
      ],
      core_concept: "Bản đặc tả kỹ thuật (PRD) chi tiết là chìa khóa giúp AI Code Agent tạo ra website chính xác 100% mong muốn."
    },
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
- Layout: Top Navigation, Hero Section, Curriculum Grid, Lead Capture Form, Footer.`,
    raw_markdown: `# Buổi 7: Ra Lệnh Cho AI Agent Tự Tạo Website (Bolt.new / Lovable)

![Giao diện AI Web Builder](/session_7.jpg)

## 📖 Tổng Quan Buổi Học
Ứng dụng sức mạnh của các AI Code Generator (Bolt.new, Lovable) để xây dựng một Landing Page bán hàng hoàn chỉnh bằng ngôn ngữ tự nhiên.

---

## 📦 Web PRD Specification
\`\`\`text
[TEHNOLOGY STACK]
- Framework: React 18 (Vite)
- Styling: Tailwind CSS Modern Dark Mode
- Layout: Top Navigation, Hero Section, Curriculum Grid, Lead Capture Form, Footer.
\`\`\`
`
  },
  {
    session_number: 8,
    title: "Buổi 8: Đưa Web Lên Internet Vercel & Quản Lý Supabase",
    module_name: "Chặng 3: Lập Trình Website Bằng AI",
    time_minutes: 90,
    description: "Kết nối GitHub Repo với Vercel để chạy live trang web công khai và quản lý dữ liệu Supabase DB.",
    image_url: "/session_8.jpg",
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
    raw_markdown: `# Buổi 8: Đưa Web Lên Internet Vercel & Quản Lý Supabase

![Giao diện Vercel & Supabase Live Deployment](/session_8.jpg)

## 📖 Tổng Quan Buổi Học
Hoàn thiện case study cuối khóa: Đẩy toàn bộ mã nguồn lên GitHub, kết nối Vercel để xuất bản trang web live công khai và thiết lập cơ sở dữ liệu Supabase.

---

## 📦 Supabase SQL Schema
\`\`\`sql
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    occupation TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
\`\`\`
`
  }
];
