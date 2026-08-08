# Buổi 2: Trợ Lý Excel, Google Docs & Phân Tích Dữ Liệu Báo Cáo Quản Trị

---

## 📖 TỔNG QUAN BUỔI HỌC

Học viên biến AI thành Chuyên viên Kiểm toán & Phân tích Dữ liệu Quản trị Cấp cao: Tự động làm sạch dữ liệu thô, loại bỏ từ lóng, đối soát chênh lệch tài chính và tái cấu trúc báo cáo chiến lược chuẩn doanh nghiệp.

---

## PHẦN I: TẢI FILE DỮ LIỆU THÔ (THỰC HÀNH TRÊN GOOGLE DOCS)

> 💡 **Hướng dẫn cho Học viên:** Bấm nút **Tải xuống** ở Thao tác 1 để lấy file `.docx` mẫu về máy, sau đó tải file lên tài khoản Google Docs của bạn để bắt đầu thực hành chuỗi Prompt chuẩn hóa ở Phần II.

* **Thao tác 1 (Tải File Mẫu):** [📥 Tải Xuống File Mẫu Dự Thảo Quý 2 (.DOCX)](/Du_Thao_Quy_2_Mau_Thuc_Hanh.docx)
* **Thao tác 2 (Mở Google Docs):** [📝 Mở Trang Web Google Docs Mới (docs.new)](https://docs.new)

*(Tài liệu thô gồm 5 nhóm lỗi: chính tả/Telex, từ lóng Ads, mâu thuẫn số liệu Kế toán - MKT 445 triệu, điểm nghẽn kho vận và đề xuất ngân sách CapEx/OpEx Q3).*

---

## PHẦN II: BỘ PROMPT CHUẨN HÓA & TÁCH NHỎ MÔ-ĐUN (1-CLICK COPY TỪNG MỤC)

Để xử lý triệt để bộ dữ liệu thô phức tạp dài 4 trang ở Phần I, học viên dán lần lượt từng **Prompt mô-đun siêu ngắn** dưới đây vào Gemini Docs.

---

### 🟢 BƯỚC 1: LÀM SẠCH VĂN BẢN & CHUẨN HÓA THUẬT NGỮ

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

---

### 🔵 BƯỚC 2: CẤU TRÚC BÁO CÁO CHIẾN LƯỢC 6 PHẦN

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

### 🟡 BƯỚC 3: TRÍCH XUẤT BẢNG BIỂU & EXECUTIVE SUMMARY

* **Prompt 3.1: Soạn Đoạn Tóm Tắt Điều Hành (Executive Summary)**

```prompt
[NHIỆM VỤ 3.1]
Viết 1 đoạn Executive Summary (Tóm tắt Điều hành 5-6 dòng) đặt ngay dưới Tiêu đề báo cáo, tóm gọn các con số sinh tử: Doanh thu MKT ghi nhận (1.865B) vs Kế toán ghi nhận (1.420B), Chi phí MKT đã đốt (364M - chiếm 25.6%), Kênh hiệu quả nhất (TikTok), Kênh lỗ nặng nhất (Facebook Ads) và Mục tiêu Doanh thu Quý 3 (2.5B).
```

* **Prompt 3.2: Lập Bảng 1 (Audit Đa Kênh) & Bảng 2 (Ma Trận Rủi Ro Vận Hành)**

```prompt
[NHIỆM VỤ 3.2]
Trích xuất dữ liệu thành 2 Bảng Markdown chi tiết:
- BẢNG 1: AUDIT HIỆU QUẢ BÁN HÀNG ĐA KÊNH QUÝ 2 (7 cột: Kênh Bán Hàng | Doanh Thu | Chi Phí MKT | Số Đơn Hàng | Tỷ Lệ Chi Phí/Doanh Thu | Trạng Thái Hiệu Quả | Hướng Xử Lý Q3).
- BẢNG 2: MA TRẬN RỦI RO VẬN HÀNH & NGHỄN LIÊN PHÒNG BAN (5 cột: Mảng Vận Hành | Hiện Trạng Điểm Nghẽn | Hậu Quả Tài Chính | Nguyên Nhân Cốt Lõi | Giải Pháp Khắc Phục Q3).
```

* **Prompt 3.3: Lập Bảng 3 (Tái Phân Bổ Ngân Sách) & Bảng 4 (Danh Mục CapEx/OpEx)**

```prompt
[NHIỆM VỤ 3.3]
Trích xuất tiếp 2 Bảng Markdown chi tiết:
- BẢNG 3: SO SÁNH TÁI PHÂN BỔ NGÂN SÁCH MARKETING QUÝ 2 VS QUÝ 3 (5 cột: Kênh Marketing | Ngân Sách Q2 | % Tỷ Trọng Q2 | Ngân Sách Đề Xuất Q3 | % Tỷ Trọng Q3 | Định Hướng Chiến Lược).
- BẢNG 4: DANH MỤC TỜ TRÌNH ĐẦU TƯ TÀI SẢN & HẠ TẦNG (6 cột: STT | Hạng Mục Đầu Tư | Số Lượng | Đơn Giá Dự Kiến | Tổng Chi Phí | Mục Tiêu Tăng Năng Suất).
```

---

### 🟣 BƯỚC 4: ASSET ĐA PHƯƠNG TIỆN & MEMO GỬI BAN GIÁM ĐỐC

* **Prompt 4.1: Bộ Prompt Tiếng Anh Tả Ảnh AI Native (Imagen 3 / Midjourney)**

```prompt
[NHIỆM VỤ 4.1]
Viết 3 Prompt Tiếng Anh chuẩn kỹ thuật đặt ở cuối tài liệu Docs để dùng công cụ tạo ảnh tích hợp của Gemini:
1. Ảnh Bìa Báo Cáo: Minimalist corporate executive report cover design, financial growth charts, modern office aesthetic, 3D render style, professional blue and gold lighting.
2. Ảnh Vận Hành Kho: Modern automated e-commerce warehouse logistics operation, neat packaging line, high efficiency, clean isometric view.
3. Ảnh Không Gian MKT: High-tech digital marketing agency command center, dual monitors showing analytics dashboards, ergonomic workspace, bright natural lighting.
```

* **Prompt 4.2: Soạn Email Memo Ngắn Gọn Gửi Ban Giám Đốc**

```prompt
[NHIỆM VỤ 4.2]
Soạn 1 bản Memo ngắn gọn (khoảng 200 từ) có định dạng chuẩn mực (Kính gửi BGD, Nội dung chính, Các con số trọng yếu, Đường link đính kèm file Docs đầy đủ và Lời đề nghị phê duyệt) để Trưởng phòng MKT gửi nhanh qua Email/Slack cho Ban Giám đốc trước cuộc họp.
```

---

## III. CHECKLIST NGHIỆM THU BÀI NỘP (DoD)

- [ ] **Độ sạch dữ liệu:** Loại bỏ 100% các từ lóng (`cày muốn trĩ`, `đốt tiền âm phủ`, `phế vật`, `nát như tương tươm`...), lỗi telex và toàn bộ câu từ mang tính tranh cãi cá nhân.
- [ ] **Tính chính xác về quản trị:** Biến các vấn đề kỹ thuật (`chết VIA`, `khóc dở mếu dở`, `máy lag`) thành thuật ngữ quản trị rủi ro doanh nghiệp chuẩn mực.
- [ ] **Cấu trúc hoàn chỉnh:** Đủ 6 Phần Báo cáo chiến lược + 01 Đoạn Executive Summary tổng hợp các chỉ số tài chính sinh tử ở đầu trang.
- [ ] **Hệ thống Bảng biểu:** Có đủ 04 Bảng Markdown chi tiết (Audit đa kênh, Ma trận rủi ro vận hành, So sánh tái phân bổ ngân sách Q2 vs Q3, Danh mục tờ trình đầu tư CapEx/OpEx).
- [ ] **Tài chính minh bạch:** Có mục riêng đối soát & giải trình nguyên nhân chênh lệch 445 triệu VNĐ giữa báo cáo Kinh doanh và dữ liệu Kế toán.
- [ ] **Đa phương tiện & Xuất bản:** Chèn thành công ít nhất 01 hình ảnh AI Native tạo trực tiếp từ Gemini Docs + Có bộ Prompt Tiếng Anh + Có bản Memo gửi nhanh qua Email/Slack ở cuối trang.
