export const initialLessonsData = [
  {
    session_number: 1,
    title: "Buổi 1: Khởi Tạo Spark OS & Chuỗi Sản Xuất Đa Phương Tiện End-to-End",
    module_name: "Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu",
    time_minutes: 90,
    description: "Khởi tạo Hệ điều hành Trợ lý Tự động hóa Spark OS & Chuỗi sản xuất Đa phương tiện qua 4 Mắt xích Vercel 1-Click Copy.",
    image_url: "/session_1.jpg",
    theory: {
      overview: "Trong buổi này, học viên sẽ thiết lập Hệ điều hành Trợ lý Tự động hóa (Spark OS) và thực thi chuỗi sản xuất nội dung đa phương tiện (Văn bản -> Ảnh Studio -> Video Veo -> Audio Music -> Custom Gem).",
      learning_outcomes: [
        "Nắm vững Ma trận phân công 8 công cụ AI: Personal Intelligence, Deep Research, Guided Learning, Canvas, Spark Auto Browse, Veo Video, Music & Custom Gems.",
        "Làm chủ Quy trình 4 Mắt xích thực thi trên Vercel không sợ quá tải nhận thức.",
        "Tự tay tạo ra sản phẩm đa phương tiện hoàn chỉnh và đóng gói Custom Gem mang về nhà sử dụng hằng ngày."
      ],
      core_concept: "Tự động hóa không phải là dùng 1 công cụ riêng lẻ, mà là kết nối các mắt xích công cụ chuyên biệt thành một dây chuyền làm việc 24/7."
    },
    steps: [
      "MẮT XÍCH 1 (00:00 - 00:15): Bật Personal Intelligence, chạy Deep Research quét thị trường & chọn góc đánh qua Guided Learning.",
      "MẮT XÍCH 2 (00:15 - 00:40): Dàn kịch bản trên Canvas, dùng Spark Deep Control chỉnh sửa & chạy Spark Chrome Auto Browse cào dữ liệu đối thủ.",
      "MẮT XÍCH 3 (00:40 - 01:05): Xưởng sản xuất Đa phương tiện - Tạo Ảnh Studio -> Tạo Video Veo 5s -> Tạo Nhạc nền Music.",
      "MẮT XÍCH 4 (01:05 - 01:30): Cài đặt Standing Instructions tự động hóa 24/7 (Gmail sang Google Sheets) & Đóng gói Custom Gem."
    ],
    troubleshooting: [
      { issue: "Veo render Video bị lâu (1-2 phút)", cause: "Hệ thống AI xử lý hiệu ứng chuyển động camera 3D", fix: "Trong lúc đợi Veo render, hãy chuyển sang chạy Prompt tạo Audio Music ngay để tối ưu thời gian." },
      { issue: "Spark Chrome Auto Browse không truy cập web", cause: "URL web đối thủ thiếu https://", fix: "Nhập đầy đủ URL có https:// và thử lại." }
    ],
    mega_prompt: `[STEP 1 - DEEP RESEARCH & GUIDED LEARNING]
Kích hoạt Deep Research quét toàn bộ xu hướng thị trường và 3 đối thủ lớn nhất ngành [X] tại Việt Nam tháng 8/2026. Xuất báo cáo tổng hợp và đưa 3 câu hỏi trắc nghiệm qua Guided Learning để chốt góc tiếp thị.`,
    n8n_json: "",
    sql_template: "",
    spec_text: "",
    raw_markdown: `# TOÀN BỘ QUY TRÌNH & HỆ THỐNG CÔNG CỤ BUỔI 1 (MASTER BLUEPRINT)

**Chủ đề:** Khởi tạo "Hệ điều hành Trợ lý Tự động hóa" (Spark OS) & Chuỗi sản xuất Đa phương tiện End-to-End.

![Spark OS & Master Blueprint Buổi 1](/session_1.jpg)

---

## I. MA TRẬN PHÂN CÔNG CÔNG CỤ (TOOL STACK MATRIX)

Sắp xếp 8 công cụ vào đúng vị trí trong chuỗi để tránh bị chồng chéo tính năng:

| Công cụ | Phân nhóm | Nhiệm vụ kỹ thuật chính trong chuỗi |
| --- | --- | --- |
| **Personal Intelligence** | Bộ nhớ & Hạ tầng | Bật \`Memory\` lưu ngữ cảnh công ty & Kích hoạt kết nối Google Workspace (Gmail, Drive, Docs, Sheets). |
| **Deep Research** | Thu thập dữ liệu | Quét sâu đa nguồn trên Internet để cào dữ liệu thị trường và đối thủ. |
| **Guided Learning** | Lọc & Tiêu hóa | Đặt câu hỏi tương tác (Quiz/Q&A) giúp học viên chốt hướng đi mà không cần đọc báo cáo dài. |
| **Canvas** | Thao tác trực quan | Mở giao diện soạn thảo trực tiếp để làm mịn Kế hoạch & Kịch bản truyền thông. |
| **Gemini Spark** | Agent Tự động hóa | Chạy ngầm 24/7, dùng **Chrome Auto Browse** cào dữ liệu web và thực thi **Standing Instructions** tự điền Google Sheets/Gmail. |
| **Image Generation** | Sản xuất Visual | Tạo hình ảnh Banner/Sản phẩm chuẩn Studio dựa trên kịch bản từ Canvas. |
| **Video (Veo)** | Sản xuất Motion | Biến ảnh tĩnh thành Clip 5 giây tả chuyển động camera chuyên nghiệp. |
| **Audio (Music)** | Sản xuất Âm thanh | Tạo đoạn nhạc nền khớp phong cách kịch bản. |
| **Custom Gems** | Đóng gói Sản phẩm | Gom toàn bộ logic workflow thành 1 con Bot tùy chỉnh để học viên mang về dùng hằng ngày. |

---

## II. QUY TRÌNH THỰC THI 90 PHÚT (THE GOLDEN PATH)

Toàn bộ quy trình chạy theo đúng **4 Mắt xích bấm nút trên Vercel**, không lý thuyết rời rạc.

---

### 🔗 MẮT XÍCH 1: KHỞI TẠO BỘ NÃO AI & CÀO DỮ LIỆU (15 PHÚT | 00:00 - 00:15)

![Mắt xích 1 - Khởi tạo bộ não AI](/session_1.jpg)

1. **Thiết lập hạ tầng (5 phút):**
   - Học viên vào Cài đặt Gemini -> Bật \`Personal Intelligence\` (Memory & Workspace Connections).
   - Mở Google Drive -> Tạo thư mục tên \`Spark OS\`.

2. **Cào dữ liệu thị trường (5 phút):**
   - Học viên bấm **Quick-Copy Step 1** trên Vercel:
   \`\`\`prompt
   Kích hoạt Deep Research quét toàn bộ xu hướng thị trường và 3 đối thủ lớn nhất ngành [X] tại Việt Nam tháng 8/2026. Xuất báo cáo tổng hợp.
   \`\`\`

3. **Chốt góc đánh tiếp thị (5 phút):**
   - Chọn báo cáo vừa tạo -> Bật \`Guided Learning\`: Gemini đưa 3 câu hỏi trắc nghiệm để học viên chọn ra 1 ý tưởng tiếp thị (Angle) tối ưu nhất.

---

### 🔗 MẮT XÍCH 2: DÀN KỊCH BẢN CANVAS & TỰ ĐỘNG BROWSE (25 PHÚT | 00:15 - 00:40)

![Mắt xích 2 - Canvas & Chrome Auto Browse](/workflow_n8n_preview.jpg)

1. **Dàn kịch bản trên Canvas (10 phút):**
   - Bấm **Quick-Copy Step 2** trên Vercel -> Dán góc đánh vừa chọn vào giao diện **Canvas** để Gemini xuất Kế hoạch nội dung & Kịch bản Video chi tiết.
   \`\`\`prompt
   [STEP 2 - CANVAS & BROWSE]
   Dàn Kế hoạch nội dung truyền thông và Kịch bản Video chi tiết trên giao diện Canvas dựa trên góc đánh vừa chọn.
   \`\`\`

2. **Spark Workspace Deep Control (10 phút):**
   - Học viên gõ 1 đoạn Comment ở lề trang Canvas -> Spark tự đọc comment và sửa trực tiếp văn bản/bảng biểu trong Canvas.

3. **Spark Chrome Auto Browse (5 phút):**
   - Ra lệnh cho Spark: *"Dùng Chrome Auto Browse truy cập vào trang [Web đối thủ] lấy thêm bảng giá/hình ảnh thực tế lưu thẳng vào thư mục Spark OS trên Drive."*

---

### 🔗 MẮT XÍCH 3: XƯỞNG SẢN XUẤT ĐA PHƯƠNG TIỆN (25 PHÚT | 00:40 - 01:05)

![Mắt xích 3 - Xưởng sản xuất Đa phương tiện](/hero_ai_automation_light.jpg)

> 💡 **Mẹo Tối Ưu Thời Gian chờ Render**: Trong lúc Veo đang xử lý render Video (mất ~1-2 phút), học viên lập tức lấy Prompt Audio Music chạy song song để không tốn 2 phút chờ trên lớp!

Học viên bấm **Quick-Copy Step 3** trên Vercel để lấy bộ Prompt kỹ thuật tạo Asset theo kịch bản ở Canvas:

1. **Tạo Hình ảnh (8 phút):** Ném mô tả từ Canvas vào ô Chat -> Tạo ảnh Banner/Product Visual chuẩn Cinematic.
2. **Tạo Video Veo (10 phút):** Đưa bức ảnh vừa tạo vào công cụ Video -> Nhập Prompt tả chuyển động: *"Góc quay camera lượn từ trái sang phải, hiệu ứng ánh sáng lung linh, 5 giây."*
3. **Tạo Nhạc nền (7 phút):** Yêu cầu Gemini xuất 1 đoạn Audio ngắn (15-30s) hợp mood kịch bản -> Tải trọn bộ (Ảnh + Video + Nhạc).

\`\`\`prompt
[STEP 3 - MEDIA PIPELINE]
Tạo hình ảnh Banner chuẩn Studio, chuyển thể thành Clip Video Veo 5s với hiệu ứng camera lượn ngang, và tạo đoạn nhạc nền Audio Music khớp mood kịch bản.
\`\`\`

---

### 🔗 MẮT XÍCH 4: CÀI ĐẶT TỰ ĐỘNG HÓA 24/7 & ĐÓNG GÓI GEM (25 PHÚT | 01:05 - 01:30)

![Mắt xích 4 - Standing Instructions & Custom Gem](/session_1.jpg)

1. **Cài đặt Standing Instructions (15 phút):**
   - Học viên bấm **Quick-Copy Step 4** -> Dán vào mục Standing Instructions của Spark:
   \`\`\`prompt
   Standing Instruction 24/7: Mỗi khi có Gmail mới chứa tiêu đề 'Nội dung/Báo cáo', hãy tự động trích xuất ý chính và cập nhật thành 1 dòng mới vào file Google Sheets 'Theo dõi Campaign' trong folder Spark OS.
   \`\`\`
   - **Test trực tiếp:** Học viên tự gửi 1 Gmail test -> Mở Sheets kiểm tra dữ liệu tự nhảy vào.

2. **Đóng gói Custom Gem (5 phút):**
   - Mở mục Custom Gems -> Dán khung System Instruction từ Vercel -> Lưu thành Gem \`Trợ Lý Tự Động Hóa Truyền Thông 360\`.

3. **Kích hoạt Family Pro (5 phút):**
   - Add 2 học viên vào gói Family Pro của bạn, hoàn tất cam kết quyền lợi tài khoản Pro.

---

## III. TÀI NGUYÊN CHUẨN BỊ TRÊN GITHUB / VERCEL

Trang Vercel chỉ cần **4 Nút Quick-Copy** duy nhất:

- **Button 1 (\`Step1_Research.txt\`):** Prompt gọi Deep Research + Framework Guided Learning.
- **Button 2 (\`Step2_Canvas_Browse.txt\`):** Prompt cấu trúc Kế hoạch Content trên Canvas + Lệnh Auto Browse.
- **Button 3 (\`Step3_Media_Pipeline.txt\`):** Cú pháp chuẩn tả Ảnh, Video (Veo), Âm thanh.
- **Button 4 (\`Step4_Spark_Gem.txt\`):** Khung lệnh Standing Instructions 24/7 + System Instruction đóng gói Gem.
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

> 💡 **Khái Niệm Cốt Lõi (Core Concept)**: Mô tả tên các Cột (Columns) và kiểu dữ liệu rõ ràng cho AI giúp ChatGPT sinh ra công thức chuẩn xác 100%.

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
