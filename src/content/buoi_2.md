# Buổi 2: Trợ Lý Bộ Công Cụ Văn Phòng AI (Google Docs, Sheets & Slides)

---

## 📖 TỔNG QUAN BUỔI HỌC

Học viên biến AI thành Chuyên viên Kiểm toán & Phân tích Dữ liệu Quản trị Cấp cao: Tự động hóa toàn diện Bộ công cụ Văn phòng Google Docs (làm sạch báo cáo thô), Google Sheets (phân tích bảng tính & viết hàm AI) và Google Slides (tự động dàn ý & thiết kế Slide thuyết trình).

---

=== SUBTAB: 📄 Bài 1: Gemini Docs (Văn Bản & Báo Cáo) ===

### PHẦN I: TẢI FILE DỮ LIỆU THÔ (THỰC HÀNH TRÊN GOOGLE DOCS)

> 💡 **Hướng dẫn cho Học viên:** Bấm nút **Tải xuống** ở Thao tác 1 để lấy file `.docx` mẫu về máy, sau đó tải file lên tài khoản Google Docs cá nhân của bạn để bắt đầu thực hành chuỗi Prompt chuẩn hóa ở Phần II.

* **Thao tác 1 (Tải File Mẫu):** [📥 Tải Xuống File Mẫu Dự Thảo Quý 2 (.DOCX)](/Du_Thao_Quy_2_Mau_Thuc_Hanh.docx)
* **Thao tác 2 (Mở Google Docs):** [📝 Mở Trang Web Google Docs Mới (docs.new)](https://docs.new)

*(Tài liệu thô gồm 5 nhóm lỗi: chính tả/Telex, từ lóng Ads, mâu thuẫn số liệu Kế toán - MKT 445 triệu, điểm nghẽn kho vận và đề xuất ngân sách CapEx/OpEx Q3).*

---

### PHẦN II: BỘ PROMPT CHUẨN HÓA & TÁCH NHỎ MÔ-ĐUN (1-CLICK COPY TỪNG MỤC)

* **Prompt 1.1: Thiết Lập Vai Trò & Soát Lỗi Chính Tả / Từ Lóng**

```prompt
[VAI TRÒ & BỐI CẢNH]
Bạn là Trưởng phòng Thư ký HĐQT kiêm Chuyên gia Kiểm toán Báo cáo Quản trị Cấp cao.

[NHIỆM VỤ 1.1]
Soát và sửa toàn bộ lỗi chính tả, lỗi gõ Telex (ctyy, r bách, k, rủn rẩy, ngai và luôn...). Xóa bỏ 100% các từ ngữ suồng sã, từ lóng (slang) và ngôn ngữ cảm xúc tiêu cực (cày muốn trĩ, hên xui vãi chưởng, ăn đậm, trẻ trâu, gánh team gãy lưng, ngáo giá, bóc phốt, đốt tiền âm phủ, lỗ chát lè, chùa abandoned rác rưởi, xu cà cà, mấy ông cu ly, tiền ngu, phế vật, xoay mòng mòng, nát như tương tươm, ôm đồm chạy mất dép...).
```

* **Prompt 1.2: Chuẩn Hóa Thuật Ngữ Kinh Doanh Doanh Nghiệp**

```prompt
[NHIỆM VỤ 1.2]
Chuyển đổi toàn bộ các từ lóng kỹ thuật & bán hàng sang thuật ngữ Quản trị Doanh nghiệp chuẩn mực:
- "Vít camp/Chết nick/Mua VIA/BM bọc vách/Meta quét" -> "Tài khoản quảng cáo bị vô hiệu hóa liên tục do thuật toán Meta, dẫn đến phát sinh chi phí hạ tầng tài khoản dự phòng".
- "Book KOC bị lố tay/Drama bóc phốt" -> "Chi phí tài trợ KOC vượt định mức ngân sách và phát sinh rủi ro truyền thông do quản lý hợp đồng thiếu chặt chẽ".
- "Mấy ông cu ly dưới kho làm ăn ẩu tả" -> "Khâu vận hành kho vận và quy cách đóng gói sản phẩm chưa đạt chuẩn chất lượng".
- "Bị trừ điểm Shop Yêu Thích Plus/phạt tiền ngu" -> "Bị chế tài giảm chỉ số vận hành trên sàn thương mại điện tử và phát sinh chi phí phạt vi phạm cam kết".
- "Giao diện thời đồ đá/xoay mòng mòng/lỗi API VNPay" -> "Hạ tầng kỹ thuật Website cũ kỹ, tỷ lệ thoát trang cao (>82%) và sự cố gián đoạn cổng thanh toán".
- "Kế toán bắt làm thủ tục rườm rà/MKT cãi nhau CSKH" -> "Sự thiếu đồng bộ trong quy trình quy chuẩn hoàn ứng và luồng phối hợp liên phòng ban".
```

* **Prompt 1.3: Trung Hòa Tông Giọng Quản Trị & Xử Lý Mâu Thuẫn Số Liệu**

```prompt
[NHIỆM VỤ 1.3]
1. Loại bỏ hoàn toàn thái độ đổ lỗi giữa các phòng ban (MKT, Sales, Kho, Kế toán, CSKH).
2. Biến toàn bộ các lời than phiền về cơ sở vật chất (máy tính lag, ghế hỏng, máy lạnh chảy nước) thành mục "Đánh giá Thực trạng Hạ tầng Thiết bị & Năng suất Lao động" dưới góc nhìn chi phí - hiệu quả kinh doanh.
3. Xử lý mâu thuẫn số liệu: Ghi nhận trung thực sự chênh lệch giữa Doanh thu do MKT ghi nhận (1,865 tỷ VNĐ) và Doanh thu Kế toán xác nhận (1,420 tỷ VNĐ) thành mục "Rủi ro Đối soát & Quản trị Dòng tiền" cần kiểm toán lại.
```

* **Prompt 2.1: Dựng Phần I (Tổng Quan) & Phần II (Audit Hiệu Quả 6 Kênh Bán Hàng)**

```prompt
[NHIỆM VỤ 2.1]
Dựa trên văn bản đã chuẩn hóa ở Bước 1, hãy cấu trúc 2 Phần đầu của Báo cáo Quản trị Doanh nghiệp:
- PHẦN I: TỔNG QUAN KẾT QUẢ KINH DOANH QUÝ 2 (Đánh giá mức độ hoàn thành chỉ tiêu; Phân tích doanh thu thực nhận vs ghi nhận, chi phí MKT tổng thể và tỷ lệ chi phí/doanh thu).
- PHẦN II: PHÂN TÍCH HIỆU QUẢ KÊNH BÁN HÀNG CHI TIẾT (Audit 6 kênh: TikTok Shop, Facebook Ads, Shopee Mall, Website TMĐT, Lazada/Tiki, B2B/Sỉ - Phân tích đủ 3 khía cạnh: Doanh Thu - Chi Phí Marketing & Vận Hành - Đánh Giá Tỷ Suất ROI & Rủi Ro).
```

* **Prompt 2.2: Dựng Phần III (Kiểm Toán Điểm Nghẽn) & Phần IV (Đối Soát Tài Chính)**

```prompt
[NHIỆM VỤ 2.2]
Tiếp tục cấu trúc Phần III & IV của Báo cáo:
- PHẦN III: KIỂM TOÁN NGHỄN VẬN HÀNH & RỦI RO CHI PHÍ (Phân tích 4 điểm nghẽn: Kiểm soát KOC/Agency, Vận hành Kho & Hàng hoàn, Hạ tầng Kỹ thuật số Website/VNPay, Xung đột Quy trình Tài chính - Nhân sự).
- PHẦN IV: ĐỐI SOÁT TÀI CHÍNH & PHÂN TÍCH LỆCH DỮ LIỆU (Phân tích chi tiết nguyên nhân lệch 445 triệu VNĐ giữa Kinh doanh & Kế toán; Đánh giá chi phí MKT vượt định mức 25.6% vs 15%).
```

* **Prompt 2.3: Dựng Phần V (Đề Xuất Chiến Lược Q3) & Phần VI (Tờ Trình CapEx/OpEx)**

```prompt
[NHIỆM VỤ 2.3]
Tiếp tục cấu trúc Phần V & VI của Báo cáo:
- PHẦN V: ĐỀ XUẤT CHIẾN LƯỢC & TÁI CẤU TRÚC QUÝ 3 (Tái phân bổ ngân sách MKT cắt 70% FB Ads dồn TikTok/Shopee, Nâng cấp UX/UI Website 50M, Tuyển dụng Senior Performance & Quản lý Kho, Chuẩn hóa quy trình hoàn ứng Kế toán).
- PHẦN VI: TỔNG HỢP KIẾN NGHỊ ĐẦU TƯ CỐ ĐỊNH & CAM KẾT HIỆU QUẢ (Bảng tổng hợp CapEx/OpEx, Cam kết KPI Q3: Doanh thu 2.5B, Tỷ suất lợi nhuận gộp >25%).
```

---

=== SUBTAB: 📊 Bài 2: Gemini Sheets (Bảng Tính & Hàm AI) ===

### PHẦN I: TẢI BẢNG TÍNH MẪU & TẠO GOOGLE SHEETS

> 💡 **Hướng dẫn cho Học viên:** Bấm nút **Tải xuống** ở Thao tác 1 để lấy file `.xlsx` dữ liệu doanh thu 6 kênh bán hàng Quý 2 về máy, sau đó tải file lên Google Sheets cá nhân của bạn để thực hành các Prompt xử lý hàm & phân tích tự động bên dưới.

* **Thao tác 1 (Tải File Mẫu):** [📥 Tải Xuống File Mẫu Doanh Thu Quý 2 (.XLSX)](/Bang_Mau_Doanh_Thu_Q2.xlsx)
* **Thao tác 2 (Mở Google Sheets):** [📊 Mở Trang Web Google Sheets Mới (sheets.new)](https://sheets.new)

---

### PHẦN II: BỘ PROMPT PHÂN TÍCH BẢNG TÍNH & VIẾT HÀM AI (1-CLICK COPY)

* **Prompt 2.1: Sửa & Viết Hàm Phức Tạp (XLOOKUP, SUMIFS, INDEX-MATCH)**

```prompt
[VAI TRÒ & BỐI CẢNH]
Bạn là Chuyên gia Kỹ thuật Bảng tính Google Sheets & Excel Senior.

[NHIỆM VỤ 2.1]
Dựa trên Bảng Doanh Thu Quý 2 có các cột: [Mã Đơn, Kênh Bán Hàng, Ngày Tạo, Doanh Thu, Chi Phí MKT, Trạng Thái, Ghi Chú]:
1. Viết công thức tính Tỷ Lệ Chi Phí MKT/Doanh Thu (%) cho từng kênh bán hàng.
2. Viết hàm SUMIFS tính Tổng Doanh Thu riêng cho các kênh có Trạng Thái 'Hoàn thành' hoặc 'Cảnh báo'.
3. Viết công thức XLOOKUP/INDEX-MATCH tra cứu tự động Chi phí MKT dựa trên Mã Đơn Hàng mà không lo bị lỗi #N/A khi cột bị chèn thêm.
```

* **Prompt 2.2: Phân Tích Cohort Retention & Tỷ Lệ Chuyển Đổi Đơn Hàng**

```prompt
[NHIỆM VỤ 2.2]
Hãy đóng vai Chuyên viên Data Analyst:
1. Viết công thức tính Tỷ lệ Hoàn hàng (Return Rate) và Chi phí Lợi nhuận Ròng (Net Profit) cho kênh Shopee Mall và TikTok Shop.
2. Ép AI dọn dẹp 100% khoảng trắng thừa (TRIM), sửa định dạng ngày tháng dính lỗi (DATEVALUE) và xuất công thức cảnh báo ô có doanh thu < chi phí MKT.
```

* **Prompt 2.3: Viết Google Apps Script Cảnh Báo Tồn Kho & Báo Cáo Tự Động**

```prompt
[NHIỆM VỤ 2.3]
Hãy viết một đoạn mã Google Apps Script (JavaScript) hoàn chỉnh để dán vào Google Sheets (Extensions -> Apps Script):
1. Tự động quét toàn bộ bảng tính Doanh Thu Quý 2.
2. Nếu dòng nào có Chi Phí MKT / Doanh Thu > 20%, tự động tô màu nền đỏ nhạt (Red Highlight).
3. Tự động gửi Email báo cáo tóm tắt về địa chỉ Email cá nhân mỗi khi ngân sách MKT của một kênh vượt quá định mức.
```

* **Prompt 2.4: Trích Xuất Ma Trận Pivot Table & Đề Xuất Biểu Đồ Dashboard**

```prompt
[NHIỆM VỤ 2.4]
1. Trình bày hướng dẫn từng bước cấu hình Pivot Table 3 chiều: [Hàng: Kênh Bán Hàng | Cột: Trạng Thái | Giá Trị: SUM Doanh Thu & SUM Chi Phí MKT].
2. Đề xuất 4 loại Biểu đồ Dashboard trực quan tốt nhất (Biểu đồ Cột Chồng, Biểu đồ Tròn Tỷ Trọng, Biểu đồ Đường Xu Hướng) giúp Ban Giám Đốc nhìn vào hiểu ngay bức tranh tài chính Quý 2.
```

---

=== SUBTAB: 🎨 Bài 3: Gemini Slides (Tự Động Tạo Slide) ===

### PHẦN I: TẠO TÀI LIỆU GOOGLE SLIDES MỚI

> 💡 **Hướng dẫn cho Học viên:** Bấm nút mở trang bên dưới để tạo 01 file Google Slides mới trên tài khoản Google cá nhân, sau đó dán chuỗi Prompt dàn ý & mã Apps Script ở Phần II để Gemini tự động dựng 10 trang slide thuyết trình chuyên nghiệp.

* **Thao tác 1 (Mở Google Slides):** [🎨 Mở Trang Web Google Slides Mới (slides.new)](https://slides.new)

---

### PHẦN II: BỘ PROMPT TỰ ĐỘNG THIẾT KẾ SLIDE & KỊCH BẢN THUYẾT MINH (1-CLICK COPY)

* **Prompt 3.1: Chuyển Báo Cáo 6 Phần Thành Dàn Ý Pitch Deck 10 Slide**

```prompt
[VAI TRÒ & BỐI CẢNH]
Bạn là Chuyên gia Thiết kế Slide Thuyết minh & Cố vấn Truyền thông Cấp cao.

[NHIỆM VỤ 3.1]
Dựa trên Báo cáo Quản trị Doanh nghiệp Quý 2, hãy cấu trúc lại toàn bộ nội dung thành Dàn ý 10 Trang Slide Thuyết trình (Pitch Deck Layout 16:9):
- Slide 1: Bìa Báo Cáo Quản Trị Quý 2 & Định Hướng Quý 3.
- Slide 2: Tóm Tắt Điều Hành (Executive Summary - 5 con số sinh tử).
- Slide 3: Audit Kênh TikTok Shop & Livestream (Kênh gánh team).
- Slide 4: Audit Kênh Facebook Ads & Rủi Ro Thuật Toán Meta.
- Slide 5: Audit Kênh Shopee Mall & Nghẽn Đóng Gói Kho Vận.
- Slide 6: Kiểm Toán Hạ Tầng Website & Cổng Thanh Toán VNPay.
- Slide 7: Giải Trình Mâu Thuẫn Số Liệu Lệch 445M Kế Toán vs MKT.
- Slide 8: Kế Hoạch Tái Phân Bổ Ngân Sách Marketing Quý 3.
- Slide 9: Danh Mục Tờ Trình CapEx/OpEx Nâng Cấp Thiết Bị & Nhân Sự.
- Slide 10: Cam Kết Chỉ Số KPI Doanh Thu 2.5B & Lời Cảm Ơn.
```

* **Prompt 3.2: Viết Kịch Bản Thuyết Minh (Presenter Notes / Speaking Script)**

```prompt
[NHIỆM VỤ 3.2]
Hãy viết Kịch bản Thuyết minh (Presenter Speaking Notes) chi tiết cho Trưởng phòng MKT khi đứng trước Ban Giám Đốc trình bày 10 slide trên:
- Thời lượng thuyết trình: 15-20 phút.
- Tông giọng: Tự tin, chuyên nghiệp, đi thẳng vào số liệu tài chính sinh tử và giải pháp khắc phục rủi ro.
- Yêu cầu: Với mỗi Slide xuất rõ [Nội dung hiển thị trên Slide] + [Lời thoại Trưởng phòng phát biểu].
```

* **Prompt 3.3: Bộ Prompt Tả Ảnh Minh Họa Slide Tỷ Lệ 16:9 (Imagen 3 / Midjourney v6)**

```prompt
[NHIỆM VỤ 3.3]
Viết 5 Prompt Tiếng Anh chuẩn kỹ thuật (Imagen 3 / Midjourney v6) tạo ảnh minh họa 16:9 đặt ở background slide:
1. Slide Bìa: Modern corporate 3D financial analytics dashboard layout, widescreen 16:9 presentation slide background, sleek dark indigo tone, gold charts.
2. Slide TikTok/Livestream: High-tech e-commerce livestreaming studio set, ring lights, smartphone tripod, vibrant modern workplace, 16:9 render.
3. Slide Kho Vận: Automated e-commerce distribution warehouse logistics, smart sorting line, neat isometric packaging layout, 16:9.
4. Slide Hạ Tầng Kỹ Thuật: Minimalist website UX UI redesign wireframe on curved ultra-wide monitor, professional tech office lighting, 16:9.
5. Slide Kết Luận: Corporate executive boardroom handshake, financial growth chart rising upward, cinematic lighting, 16:9.
```

* **Prompt 3.4: Mã Google Apps Script Tự Động Tạo 10 Slide Trong Google Slides**

```prompt
[NHIỆM VỤ 3.4]
Hãy viết một đoạn mã Google Apps Script (Apps Script API) hoàn chỉnh:
- Tạo tự động 10 trang Slide trong Google Slides với đầy đủ Tiêu đề (Title Header), Khung nội dung (Body Bullets) và Màu nền Gradient Indigo sang trọng.
- Người dùng chỉ cần dán mã vào Google Slides (Extensions -> Apps Script) và bấm Run là toàn bộ 10 Slide báo cáo Quý 2 được tự động dựng sẵn trong 5 giây!
```

---

## III. CHECKLIST NGHIỆM THU BÀI NỘP (DoD)

- [ ] **Gemini Docs:** Làm sạch 100% từ lóng, loại bỏ telex, cấu trúc báo cáo 6 phần, trích xuất 4 bảng biểu và đoạn Executive Summary.
- [ ] **Gemini Sheets:** Tải thành công file `.xlsx` mẫu, thực hành viết hàm XLOOKUP/SUMIFS, viết Google Apps Script cảnh báo đỏ và trích xuất ma trận Pivot Table.
- [ ] **Gemini Slides:** Dàn ý 10 slide Pitch Deck, viết kịch bản thuyết minh Speaker Notes, bộ Prompt 16:9 tả ảnh và xuất mã Apps Script tạo 10 slide tự động.
