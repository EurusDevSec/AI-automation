# CASE STUDY THỰC CHIẾN: LẬP KẾ HOẠCH & BỘ TRUYỀN THÔNG CHO CHUYẾN DU LỊCH / TEAM BUILDING NHÓM

---

## BỐI CẢNH DỰ ÁN

* **Tình huống:** Bạn (bất kể nam hay nữ, dân văn phòng hay tự do) được giao hoặc tự mình đứng ra lên kế hoạch cho chuyến đi du lịch / team building 3 ngày 2 đêm cho nhóm bạn hoặc công ty.
* **Mục tiêu:** Trong 90 phút, tự động hóa từ khâu tìm địa điểm, chuyển báo cáo Canvas thành Web App 1-Click, thiết kế bộ truyền thông (Poster, Video Trailer, Nhạc nền), đến tự động gom các hóa đơn/chuyển khoản từ Gmail về file Google Sheets quản lý thu chi.

![poster du lich team building](image.png)

---

## MẮT XÍCH 1: DEEP RESEARCH & GUIDED LEARNING (15 PHÚT)

### 📌 Thao tác 1.1: Tìm địa điểm & ý tưởng bằng Deep Research

Copy lệnh dưới đây dán vào Gemini Chat:

```prompt
[BỐI CẢNH & NHIỆM VỤ]
Tôi cần lên kế hoạch cho chuyến du lịch / team building 3 ngày 2 đêm cho nhóm khoảng 10-15 người (nam và nữ, độ tuổi 22-35). Chi phí dự kiến: 3 - 5 triệu VNĐ / người.

[YÊU CẦU THỰC THI]
Hãy kích hoạt Deep Research để thực hiện các bước sau:
1. Quét các địa điểm du lịch hot nhất năm 2026 phù hợp cho nhóm đi 3 ngày 2 đêm (ưu tiên di chuyển thuận tiện từ Hà Nội / TP.HCM).
2. Phân tích ưu/nhược điểm và mức chi phí trung bình của 3 địa điểm hàng đầu.
3. Trích xuất 3 hoạt động gắn kết nhóm (team building) thú vị, hiện đại, không bị sến.
4. Tổng hợp thành báo cáo ngắn gọn có dẫn nguồn cụ thể.
```

![ảnh mẫu deepresearch](image-1.png)

![deepresearch detail](image-2.png)

### 📌 Thao tác 1.2: Chốt địa điểm & Concept bằng Guided Learning

Dán tiếp lệnh sau khi Gemini trả báo cáo:

```prompt
Dựa trên báo cáo trên, hãy bật tính năng Guided Learning (Học có hướng dẫn) và đưa ra 3 câu hỏi trắc nghiệm tương tác để giúp tôi chọn ra 1 Địa điểm & Concept chuyến đi (Nghỉ dưỡng Chill hay Trải nghiệm Năng động) phù hợp nhất với nhóm.
```

---

## MẮT XÍCH 2: CANVAS BUILT-IN WEB APP & SPARK AUTO BROWSE (25 PHÚT)

> 💡 **Tính Năng Đột Phá Gemini Canvas:** Không cần gõ prompt dàn kịch bản thủ công! Gemini sau khi tạo báo cáo Deep Research xong sẽ có sẵn nút **Tạo -> Trang web** ở góc trên bên phải trang Canvas để tự sinh Web App 1-Click.

### 📌 Thao tác 2.1: Biến Báo Cáo Thành Web App Trực Quan (Built-in Canvas "Tạo -> Trang web")

1. Sau khi Gemini hoàn tất báo cáo Deep Research trên trang Canvas, nhìn lên góc trên bên phải nhấn nút **Tạo ∨**.
2. Chọn mục **Trang web**.
3. Gemini Canvas sẽ tự động sinh ra một **Interactive Web App "Kế Hoạch Team Building 2026"** trực quan với bảng tổng hợp chi phí, điểm đến và lịch trình 3N2Đ.

![Menu Tạo -> Trang web tích hợp sẵn trên Canvas](canvas-create-web.png)

![Giao diện Web App Team Building được sinh ra tự động từ Canvas](canvas-web-app.png)

### 📌 Thao tác 2.2: Sửa trực tiếp trên Canvas & Auto Browse Cào Giá Phòng

1. **Chỉnh sửa qua Comment:** Bôi đen đoạn văn bản bất kỳ trên Canvas, bấm **Add Comment** ở lề trang và gõ: *"Spark ơi, viết lại câu này hài hước hơn để kích thích mọi người rủ nhau đi đông đủ."*
2. **Cào dữ liệu bằng Auto Browse:** Dán lệnh tiếp theo vào khung chat để bổ sung giá phòng thực tế:

```prompt
Hãy dùng Chrome Auto Browse truy cập vào trang web đặt phòng (như Agoda, Traveloka hoặc Booking), cào bảng giá phòng thực tế của 1 Homestay/Resort phù hợp tại địa điểm đã chọn và chèn thêm 1 Bảng tổng hợp chi phí lưu trú vào cuối trang Canvas cho tôi.
```

---

## MẮT XÍCH 3: XƯỞNG SẢN XUẤT ĐA PHƯƠNG TIỆN (25 PHÚT)

> 💡 **Mẹo Render Song Song:** Tạo Nhạc nền Music ngay khi Veo đang xử lý render Video (mất ~1-2 phút) để không lãng phí thời gian trên lớp!

### 📌 Thao tác 3.1: Tạo Poster chuyến đi (Image Generation)

Copy lệnh dán vào Gemini để xuất Visual:

```prompt
Tạo cho tôi một bức ảnh Poster du lịch chuẩn Cinematic, phong cách hiện đại:
- Bối cảnh: Phong cảnh thiên nhiên hùng vĩ tươi đẹp (núi rừng hoặc bãi biển ngập nắng buổi sáng).
- Đối tượng: Một nhóm bạn trẻ nam và nữ mặc trang phục du lịch năng động, đứng cười đùa tự nhiên bên chiếc xe Jeep/camping.
- Phong cách: Ánh sáng mặt trời rực rỡ, màu sắc tươi sáng, sắc nét chuẩn ảnh tạp chí du lịch.
```

### 📌 Thao tác 3.2: Biến ảnh thành Video Trailer (Veo Integration)

Tải ảnh vừa tạo về, đính kèm lại vào khung chat Gemini và dán lệnh:

```prompt
Tạo một video ngắn 5 giây từ bức ảnh này với yêu cầu:
- Chuyển động Camera: Góc quay Cinematic lướt chậm từ dưới lên cao (Tilt up) mở ra toàn cảnh thiên nhiên.
- Hiệu ứng: Ánh nắng chiếu xuyên qua kẽ lá, mây nhẹ nhàng trôi trên bầu trời, không khí chuyến đi tràn đầy năng lượng.
```

![📸 Ảnh Mẫu Bài Làm Thực Tế Mắt Xích 3](/hero_ai_automation_light.jpg)

### 📌 Thao tác 3.3: Tạo Nhạc nền Video (Audio/Music Generation)

Dán lệnh tạo đoạn âm thanh chèn vào clip:

```prompt
Tạo một đoạn nhạc nền Audio thời lượng 15 giây phong cách Tropical House / Indie Pop tươi vui, nhịp điệu rộn ràng, mang lại cảm giác hào hứng, tự do cho chuyến đi du lịch mùa hè.
```

---

## MẮT XÍCH 4: STANDING INSTRUCTION 24/7 & CUSTOM GEM (25 PHÚT)

### 📌 Thao tác 4.1: Cài đặt Tự động hóa ghi nhận Thu - Chi chuyến đi

Truy cập **Spark Settings -> Standing Instructions** và dán câu lệnh:

```prompt
[STANDING INSTRUCTION - CHẠY NGẦM 24/7]
Nhiệm vụ: Tự động ghi nhận các email xác nhận đặt vé/khách sạn hoặc bill chuyển khoản của thành viên vào Google Sheets.

Điều kiện kích hoạt: Mỗi khi nhận được Gmail chứa từ khóa ["Xác nhận đặt phòng", "Vé máy bay", "Vé xe", "Chuyển khoản du lịch"].

Hành động tự động:
1. Trích xuất thông tin: Ngày giao dịch, Người gửi/Tên thành viên, Nội dung chi tiêu, Số tiền.
2. Tự động mở file Google Sheets tên 'Quản Lý Thu Chi Du Lịch 2026' trong thư mục 'Spark OS' trên Google Drive.
3. Chèn thông tin vừa trích xuất thành 1 dòng mới trong bảng.
```

![📸 Ảnh Mẫu Bài Làm Thực Tế Mắt Xích 4](/session_1.jpg)

### 📌 Thao tác 4.2: Đóng gói thành Custom Gem dùng lâu dài

Vào **Gems -> Create New Gem**, đặt tên `Trợ Lý Lập Kế Hoạch Sự Kiện & Du Lịch` và dán vào mục **Instructions**:

```prompt
[VAI TRÒ]
Bạn là Chuyên gia Lập Kế Hoạch Du Lịch & Tổ Chức Sự Kiện Nhóm.

[QUY TRÌNH TỰ ĐỘNG]
Mỗi khi tôi nhập tên một địa điểm hoặc ý tưởng chuyến đi mới, bạn phải tự động xuất ra:
1. LỊCH TRÌNH 3N2Đ: Lịch trình ăn chơi theo từng khung giờ + Dự toán ngân sách per head.
2. PROMPT ẢNH (Tiếng Anh): Tạo ảnh Poster/Banner truyền thông chuyến đi.
3. PROMPT VIDEO 5S (Tiếng Anh): Dành cho Veo tạo video trailer ngắn kích thích tinh thần nhóm.

[ĐẦU RA]
Trình bày dạng Bảng Markdown rõ ràng. Văn phong hào hứng, hiện đại, dễ hiểu cho tất cả mọi người.
```
