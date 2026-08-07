export const initialLessonsData = [
  {
    session_number: 1,
    title: "Buổi 1: Case Study - Lập Kế Hoạch & Bộ Truyền Thông Du Lịch / Team Building",
    module_name: "Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu",
    time_minutes: 90,
    description: "Case Study thực chiến 90 phút: Tự động hóa từ tìm địa điểm, lên lịch trình Canvas, tạo Poster/Video Veo/Music đến gom bill Gmail về Google Sheets 24/7.",
    image_url: "/session_1.jpg",
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
      core_concept: "Tự động hóa toàn bộ quy trình lập kế hoạch sự kiện nhóm: Từ nghiên cứu $\\rightarrow$ kịch bản Canvas $\rightarrow$ sản xuất Media $\rightarrow$ quản lý tài chính ngầm."
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

[YÊU CẦU THỰC THI]
Hãy kích hoạt Deep Research để thực hiện các bước sau:
1. Quét các địa điểm du lịch hot nhất năm 2026 phù hợp cho nhóm đi 3 ngày 2 đêm (ưu tiên di chuyển thuận tiện từ Hà Nội / TP.HCM).
2. Phân tích ưu/nhược điểm và mức chi phí trung bình của 3 địa điểm hàng đầu.
3. Trích xuất 3 hoạt động gắn kết nhóm (team building) thú vị, hiện đại, không bị sến.
4. Tổng hợp thành báo cáo ngắn gọn có dẫn nguồn cụ thể.`,
      step1_2: `Dựa trên báo cáo trên, hãy bật tính năng Guided Learning (Học có hướng dẫn) và đưa ra 3 câu hỏi trắc nghiệm tương tác để giúp tôi chọn ra 1 Địa điểm & Concept chuyến đi (Nghỉ dưỡng Chill hay Trải nghiệm Năng động) phù hợp nhất với nhóm.`,
      step2_1: `[BỐI CẢNH]
Địa điểm và Concept đã chọn: "Chuyến đi Ninh Bình / Đà Lạt 3N2Đ - Phong cách Chill kết hợp trải nghiệm thiên nhiên, ăn uống địa phương".

[YÊU CẦU THỰC THI]
Hãy mở giao diện CANVAS và soạn thảo 2 phần nội dung sau:
1. BẢNG LỊCH TRÌNH CHI TIẾT 3 NGÀY 2 ĐÊM: Chia theo từng khung giờ (Sáng - Trưa - Chiều - Tối) bao gồm: Địa điểm ăn uống, chỗ chơi, phương tiện di chuyển và dự tính chi phí từng mục.
2. KỊCH BẢN VIDEO TRAILER 15 GIÂY: Bảng 3 cột (Thời lượng - Hình ảnh góc quay - Lời thoại/Voiceover) để gửi vào nhóm kêu gọi mọi người chốt đăng ký tham gia.`,
      step2_2: `Hãy dùng Chrome Auto Browse truy cập vào trang web đặt phòng (như Agoda, Traveloka hoặc Booking), cào bảng giá phòng thực tế của 1 Homestay/Resort phù hợp tại địa điểm đã chọn và chèn thêm 1 Bảng tổng hợp chi phí lưu trú vào cuối trang Canvas cho tôi.`,
      step3_1: `Tạo cho tôi một bức ảnh Poster du lịch chuẩn Cinematic, phong cách hiện đại:
- Bối cảnh: Phong cảnh thiên nhiên hùng vĩ tươi đẹp (núi rừng hoặc bãi biển ngập nắng buổi sáng).
- Đối tượng: Một nhóm bạn trẻ nam và nữ mặc trang phục du lịch năng động, đứng cười đùa tự nhiên bên chiếc xe Jeep/camping.
- Phong cách: Ánh sáng mặt trời rực rỡ, màu sắc tươi sáng, sắc nét chuẩn ảnh tạp chí du lịch.`,
      step3_2: `Tạo một video ngắn 5 giây từ bức ảnh này với yêu cầu:
- Chuyển động Camera: Góc quay Cinematic lướt chậm từ dưới lên cao (Tilt up) mở ra toàn cảnh thiên nhiên.
- Hiệu ứng: Ánh nắng chiếu xuyên qua kẽ lá, mây nhẹ nhàng trôi trên bầu trời, không khí chuyến đi tràn đầy năng lượng.`,
      step3_3: `Tạo một đoạn nhạc nền Audio thời lượng 15 giây phong cách Tropical House / Indie Pop tươi vui, nhịp điệu rộn ràng, mang lại cảm giác hào hứng, tự do cho chuyến đi du lịch mùa hè.`,
      step4_1: `[STANDING INSTRUCTION - CHẠY NGẦM 24/7]
Nhiệm vụ: Tự động ghi nhận các email xác nhận đặt vé/khách sạn hoặc bill chuyển khoản của thành viên vào Google Sheets.

Điều kiện kích hoạt: Mỗi khi nhận được Gmail chứa từ khóa ["Xác nhận đặt phòng", "Vé máy bay", "Vé xe", "Chuyển khoản du lịch"].

Hành động tự động:
1. Trích xuất thông tin: Ngày giao dịch, Người gửi/Tên thành viên, Nội dung chi tiêu, Số tiền.
2. Tự động mở file Google Sheets tên 'Quản Lý Thu Chi Du Lịch 2026' trong thư mục 'Spark OS' trên Google Drive.
3. Chèn thông tin vừa trích xuất thành 1 dòng mới trong bảng.`,
      step4_2: `[VAI TRÒ]
Bạn là Chuyên gia Lập Kế Hoạch Du Lịch & Tổ Chức Sự Kiện Nhóm.

[QUY TRÌNH TỰ ĐỘNG]
Mỗi khi tôi nhập tên một địa điểm hoặc ý tưởng chuyến đi mới, bạn phải tự động xuất ra:
1. LỊCH TRÌNH 3N2Đ: Lịch trình ăn chơi theo từng khung giờ + Dự toán ngân sách per head.
2. PROMPT ẢNH (Tiếng Anh): Tạo ảnh Poster/Banner truyền thông chuyến đi.
3. PROMPT VIDEO 5S (Tiếng Anh): Dành cho Veo tạo video trailer ngắn kích thích tinh thần nhóm.

[ĐẦU RA]
Trình bày dạng Bảng Markdown rõ ràng. Văn phong hào hứng, hiện đại, dễ hiểu cho tất cả mọi người.`
    },
    mega_prompt: `[FULL CASE STUDY PROMPT]
Hãy kích hoạt Deep Research quét các địa điểm du lịch 3N2Đ hot năm 2026 cho nhóm 10-15 người (ngân sách 3-5tr/người) và đề xuất 3 hoạt động team building hấp dẫn.`,
    n8n_json: "",
    sql_template: "",
    spec_text: "",
    raw_markdown: `# CASE STUDY THỰC CHIẾN: LẬP KẾ HOẠCH & BỘ TRUYỀN THÔNG CHO CHUYẾN DU LỊCH / TEAM BUILDING NHÓM

---

## BỐI CẢNH DỰ ÁN

* **Tình huống:** Bạn (bất kể nam hay nữ, dân văn phòng hay tự do) được giao hoặc tự mình đứng ra lên kế hoạch cho chuyến đi du lịch / team building 3 ngày 2 đêm cho nhóm bạn hoặc công ty.
* **Mục tiêu:** Trong 90 phút, tự động hóa từ khâu tìm địa điểm, lên lịch trình chi tiết, thiết kế bộ truyền thông (Poster, Video Trailer, Nhạc nền), đến tự động gom các hóa đơn/chuyển khoản từ Gmail về file Google Sheets quản lý thu chi.

![Poster Du Lịch Team Building Cinematic](/session_1.jpg)

---

## MẮT XÍCH 1: DEEP RESEARCH & GUIDED LEARNING (15 PHÚT)

### 📌 Thao tác 1.1: Tìm địa điểm & ý tưởng bằng Deep Research
Copy lệnh dưới đây dán vào Gemini Chat:

\`\`\`text
[BỐI CẢNH & NHIỆM VỤ]
Tôi cần lên kế hoạch cho chuyến du lịch / team building 3 ngày 2 đêm cho nhóm khoảng 10-15 người (nam và nữ, độ tuổi 22-35). Chi phí dự kiến: 3 - 5 triệu VNĐ / người.

[YÊU CẦU THỰC THI]
Hãy kích hoạt Deep Research để thực hiện các bước sau:
1. Quét các địa điểm du lịch hot nhất năm 2026 phù hợp cho nhóm đi 3 ngày 2 đêm (ưu tiên di chuyển thuận tiện từ Hà Nội / TP.HCM).
2. Phân tích ưu/nhược điểm và mức chi phí trung bình của 3 địa điểm hàng đầu.
3. Trích xuất 3 hoạt động gắn kết nhóm (team building) thú vị, hiện đại, không bị sến.
4. Tổng hợp thành báo cáo ngắn gọn có dẫn nguồn cụ thể.
\`\`\`

![📸 Ảnh Mẫu Bài Làm Mắt Xích 1](/session_1.jpg)

### 📌 Thao tác 1.2: Chốt địa điểm & Concept bằng Guided Learning
Dán tiếp lệnh sau khi Gemini trả báo cáo:

\`\`\`text
Dựa trên báo cáo trên, hãy bật tính năng Guided Learning (Học có hướng dẫn) và đưa ra 3 câu hỏi trắc nghiệm tương tác để giúp tôi chọn ra 1 Địa điểm & Concept chuyến đi (Nghỉ dưỡng Chill hay Trải nghiệm Năng động) phù hợp nhất với nhóm.
\`\`\`

---

## MẮT XÍCH 2: CANVAS & SPARK AUTO BROWSE (25 PHÚT)

### 📌 Thao tác 2.1: Dàn lịch trình chi tiết lên Canvas
Copy lệnh dưới đây dán vào Gemini:

\`\`\`text
[BỐI CẢNH]
Địa điểm và Concept đã chọn: "Chuyến đi Ninh Bình / Đà Lạt 3N2Đ - Phong cách Chill kết hợp trải nghiệm thiên nhiên, ăn uống địa phương".

[YÊU CẦU THỰC THI]
Hãy mở giao diện CANVAS và soạn thảo 2 phần nội dung sau:
1. BẢNG LỊCH TRÌNH CHI TIẾT 3 NGÀY 2 ĐÊM: Chia theo từng khung giờ (Sáng - Trưa - Chiều - Tối) bao gồm: Địa điểm ăn uống, chỗ chơi, phương tiện di chuyển và dự tính chi phí từng mục.
2. KỊCH BẢN VIDEO TRAILER 15 GIÂY: Bảng 3 cột (Thời lượng - Hình ảnh góc quay - Lời thoại/Voiceover) để gửi vào nhóm kêu gọi mọi người chốt đăng ký tham gia.
\`\`\`

![📸 Ảnh Mẫu Bài Làm Mắt Xích 2](/workflow_n8n_preview.jpg)

### 📌 Thao tác 2.2: Sửa trực tiếp trên Canvas & Auto Browse
1. **Chỉnh sửa qua Comment:** Bôi đen đoạn *Lời thoại 3 giây đầu* trên Canvas, bấm **Add Comment** ở lề trang và gõ: *"Spark ơi, viết lại câu này hài hước hơn để kích thích mọi người rủ nhau đi đông đủ."*
2. **Cào dữ liệu bằng Auto Browse:** Dán lệnh tiếp theo vào khung chat:

\`\`\`text
Hãy dùng Chrome Auto Browse truy cập vào trang web đặt phòng (như Agoda, Traveloka hoặc Booking), cào bảng giá phòng thực tế của 1 Homestay/Resort phù hợp tại địa điểm đã chọn và chèn thêm 1 Bảng tổng hợp chi phí lưu trú vào cuối trang Canvas cho tôi.
\`\`\`

---

## MẮT XÍCH 3: XƯỞNG SẢN XUẤT ĐA PHƯƠNG TIỆN (25 PHÚT)

> 💡 **Mẹo Render Song Song:** Tạo Nhạc nền Music ngay khi Veo đang xử lý render Video (mất ~1-2 phút) để không lãng phí thời gian trên lớp!

### 📌 Thao tác 3.1: Tạo Poster chuyến đi (Image Generation)
Copy lệnh dán vào Gemini để xuất Visual:

\`\`\`text
Tạo cho tôi một bức ảnh Poster du lịch chuẩn Cinematic, phong cách hiện đại:
- Bối cảnh: Phong cảnh thiên nhiên hùng vĩ tươi đẹp (núi rừng hoặc bãi biển ngập nắng buổi sáng).
- Đối tượng: Một nhóm bạn trẻ nam và nữ mặc trang phục du lịch năng động, đứng cười đùa tự nhiên bên chiếc xe Jeep/camping.
- Phong cách: Ánh sáng mặt trời rực rỡ, màu sắc tươi sáng, sắc nét chuẩn ảnh tạp chí du lịch.
\`\`\`

![📸 Ảnh Mẫu Bài Làm Mắt Xích 3](/hero_ai_automation_light.jpg)

### 📌 Thao tác 3.2: Biến ảnh thành Video Trailer (Veo Integration)
Tải ảnh vừa tạo về, đính kèm lại vào khung chat Gemini và dán lệnh:

\`\`\`text
Tạo một video ngắn 5 giây từ bức ảnh này với yêu cầu:
- Chuyển động Camera: Góc quay Cinematic lướt chậm từ dưới lên cao (Tilt up) mở ra toàn cảnh thiên nhiên.
- Hiệu ứng: Ánh nắng chiếu xuyên qua kẽ lá, mây nhẹ nhàng trôi trên bầu trời, không khí chuyến đi tràn đầy năng lượng.
\`\`\`

### 📌 Thao tác 3.3: Tạo Nhạc nền Video (Audio/Music Generation)
Dán lệnh tạo đoạn âm thanh chèn vào clip:

\`\`\`text
Tạo một đoạn nhạc nền Audio thời lượng 15 giây phong cách Tropical House / Indie Pop tươi vui, nhịp điệu rộn ràng, mang lại cảm giác hào hứng, tự do cho chuyến đi du lịch mùa hè.
\`\`\`

---

## MẮT XÍCH 4: STANDING INSTRUCTION 24/7 & CUSTOM GEM (25 PHÚT)

### 📌 Thao tác 4.1: Cài đặt Tự động hóa ghi nhận Thu - Chi chuyến đi
Truy cập **Spark Settings -> Standing Instructions** và dán câu lệnh:

\`\`\`text
[STANDING INSTRUCTION - CHẠY NGẦM 24/7]
Nhiệm vụ: Tự động ghi nhận các email xác nhận đặt vé/khách sạn hoặc bill chuyển khoản của thành viên vào Google Sheets.

Điều kiện kích hoạt: Mỗi khi nhận được Gmail chứa từ khóa ["Xác nhận đặt phòng", "Vé máy bay", "Vé xe", "Chuyển khoản du lịch"].

Hành động tự động:
1. Trích xuất thông tin: Ngày giao dịch, Người gửi/Tên thành viên, Nội dung chi tiêu, Số tiền.
2. Tự động mở file Google Sheets tên 'Quản Lý Thu Chi Du Lịch 2026' trong thư mục 'Spark OS' trên Google Drive.
3. Chèn thông tin vừa trích xuất thành 1 dòng mới trong bảng.
\`\`\`

![📸 Ảnh Mẫu Bài Làm Mắt Xích 4](/session_1.jpg)

### 📌 Thao tác 4.2: Đóng gói thành Custom Gem dùng lâu dài
Vào **Gems -> Create New Gem**, đặt tên \`Trợ Lý Lập Kế Hoạch Sự Kiện & Du Lịch\` và dán vào mục **Instructions**:

\`\`\`text
[VAI TRÒ]
Bạn là Chuyên gia Lập Kế Hoạch Du Lịch & Tổ Chức Sự Kiện Nhóm.

[QUY TRÌNH TỰ ĐỘNG]
Mỗi khi tôi nhập tên một địa điểm hoặc ý tưởng chuyến đi mới, bạn phải tự động xuất ra:
1. LỊCH TRÌNH 3N2Đ: Lịch trình ăn chơi theo từng khung giờ + Dự toán ngân sách per head.
2. PROMPT ẢNH (Tiếng Anh): Tạo ảnh Poster/Banner truyền thông chuyến đi.
3. PROMPT VIDEO 5S (Tiếng Anh): Dành cho Veo tạo video trailer ngắn kích thích tinh thần nhóm.

[ĐẦU RA]
Trình bày dạng Bảng Markdown rõ ràng. Văn phong hào hứng, hiện đại, dễ hiểu cho tất cả mọi người.
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
