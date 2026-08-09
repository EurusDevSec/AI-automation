# Buổi 2: Trợ Lý Bộ Công Cụ Văn Phòng AI (Google Docs, Sheets & Slides)

---

## 📖 TỔNG QUAN BUỔI HỌC

Học viên biến AI thành Chuyên viên Kiểm toán & Phân tích Dữ liệu Quản trị Cấp cao: Tự động hóa toàn diện Bộ công cụ Văn phòng Google Docs (làm sạch báo cáo thô), Google Sheets (chuỗi 4 bước phân tích tài chính 30 dòng) và Google Slides (dựng bộ slide chiến lược 5 trang & Infographic AI Native).

---

=== SUBTAB: 📄 Bài 1: Gemini Docs (Văn Bản & Báo Cáo Quản Trị) ===

### PHẦN I: TẢI FILE DỮ LIỆU THÔ (THỰC HÀNH TRÊN GOOGLE DOCS)

> 💡 **Hướng dẫn cho Học viên:** Bấm nút **Tải xuống** ở Thao tác 1 để lấy file `.docx` mẫu về máy, sau đó tải file lên tài khoản Google Docs cá nhân của bạn để bắt đầu thực hành chuỗi Prompt chuẩn hóa ở Phần II.

* **Thao tác 1 (Tải File Mẫu):** [📥 Tải Xuống File Mẫu Dự Thảo Quý 2 (.DOCX)](/Du_Thao_Quy_2_Mau_Thuc_Hanh.docx)
* **Thao tác 2 (Mở Google Docs):** [📝 Mở Trang Web Google Docs Mới (docs.new)](https://docs.new)

*(Tài liệu thô gồm 5 nhóm lỗi: chính tả/Telex, từ lóng Ads, mâu thuẫn số liệu Kế toán - MKT 445 triệu, điểm nghẽn kho vận và đề xuất ngân sách CapEx/OpEx Q3).*

---

### PHẦN II: BỘ PROMPT CHUẨN HÓA & TÁCH NHỎ MÔ-ĐUN (1-CLICK COPY TỪNG MỤC)

* **Prompt 1.1: Thiết Lập Vai Trò & Soát Lỗi Chính Tả / Từ Lóng**

```text
[VAI TRÒ & BỐI CẢNH]
Bạn là Trưởng phòng Thư ký HĐQT kiêm Chuyên gia Kiểm toán Báo cáo Quản trị Cấp cao.

[NHIỆM VỤ 1.1]
Soát và sửa toàn bộ lỗi chính tả, lỗi gõ Telex (ctyy, r bách, k, rủn rẩy, ngai và luôn...). Xóa bỏ 100% các từ ngữ suồng sã, từ lóng (slang) và ngôn ngữ cảm xúc tiêu cực (cày muốn trĩ, hên xui vãi chưởng, ăn đậm, trẻ trâu, gánh team gãy lưng, ngáo giá, bóc phốt, đốt tiền âm phủ, lỗ chát lè, chùa abandoned rác rưởi, xu cà cà, mấy ông cu ly, tiền ngu, phế vật, xoay mòng mòng, nát như tương tươm, ôm đồm chạy mất dép...).
```

* **Prompt 1.2: Chuẩn Hóa Thuật Ngữ Kinh Doanh Doanh Nghiệp**

```text
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

```text
[NHIỆM VỤ 1.3]
1. Loại bỏ hoàn toàn thái độ đổ lỗi giữa các phòng ban (MKT, Sales, Kho, Kế toán, CSKH).
2. Biến toàn bộ các lời than phiền về cơ sở vật chất (máy tính lag, ghế hỏng, máy lạnh chảy nước) thành mục "Đánh giá Thực trạng Hạ tầng Thiết bị & Năng suất Lao động" dưới góc nhìn chi phí - hiệu quả kinh doanh.
3. Xử lý mâu thuẫn số liệu: Ghi nhận trung thực sự chênh lệch giữa Doanh thu do MKT ghi nhận (1,865 tỷ VNĐ) và Doanh thu Kế toán xác nhận (1,420 tỷ VNĐ) thành mục "Rủi ro Đối soát & Quản trị Dòng tiền" cần kiểm toán lại.
```

* **Prompt 2.1: Dựng Phần I (Tổng Quan) & Phần II (Audit Hiệu Quả 6 Kênh Bán Hàng)**

```text
[NHIỆM VỤ 2.1]
Dựa trên văn bản đã chuẩn hóa ở Bước 1, hãy cấu trúc 2 Phần đầu của Báo cáo Quản trị Doanh nghiệp:
- PHẦN I: TỔNG QUAN KẾT QUẢ KINH DOANH QUÝ 2 (Đánh giá mức độ hoàn thành chỉ tiêu; Phân tích doanh thu thực nhận vs ghi nhận, chi phí MKT tổng thể và tỷ lệ chi phí/doanh thu).
- PHẦN II: PHÂN TÍCH HIỆU QUẢ KÊNH BÁN HÀNG CHI TIẾT (Audit 6 kênh: TikTok Shop, Facebook Ads, Shopee Mall, Website TMĐT, Lazada/Tiki, B2B/Sỉ - Phân tích đủ 3 khía cạnh: Doanh Thu - Chi Phí Marketing & Vận Hành - Đánh Giá Tỷ Suất ROI & Rủi Ro).
```

* **Prompt 2.2: Dựng Phần III (Kiểm Toán Điểm Nghẽn) & Phần IV (Đối Soát Tài Chính)**

```text
[NHIỆM VỤ 2.2]
Tiếp tục cấu trúc Phần III & IV của Báo cáo:
- PHẦN III: KIỂM TOÁN NGHỄN VẬN HÀNH & RỦI RO CHI PHÍ (Phân tích 4 điểm nghẽn: Kiểm soát KOC/Agency, Vận hành Kho & Hàng hoàn, Hạ tầng Kỹ thuật số Website/VNPay, Xung đột Quy trình Tài chính - Nhân sự).
- PHẦN IV: ĐỐI SOÁT TÀI CHÍNH & PHÂN TÍCH LỆCH DỮ LIỆU (Phân tích chi tiết nguyên nhân lệch 445 triệu VNĐ giữa Kinh doanh & Kế toán; Đánh giá chi phí MKT vượt định mức 25.6% vs 15%).
```

* **Prompt 2.3: Dựng Phần V (Đề Xuất Chiến Lược Q3) & Phần VI (Tờ Trình CapEx/OpEx)**

```text
[NHIỆM VỤ 2.3]
Tiếp tục cấu trúc Phần V & VI của Báo cáo:
- PHẦN V: ĐỀ XUẤT CHIẾN LƯỢC & TÁI CẤU TRÚC QUÝ 3 (Tái phân bổ ngân sách MKT cắt 70% FB Ads dồn TikTok/Shopee, Nâng cấp UX/UI Website 50M, Tuyển dụng Senior Performance & Quản lý Kho, Chuẩn hóa quy trình hoàn ứng Kế toán).
- PHẦN VI: TỔNG HỢP KIẾN NGHỊ ĐẦU TƯ CỐ ĐỊNH & CAM KẾT HIỆU QUẢ (Bảng tổng hợp CapEx/OpEx, Cam kết KPI Q3: Doanh thu 2.5B, Tỷ suất lợi nhuận gộp >25%).
```

---

=== SUBTAB: 📊 Bài 2: Gemini Sheets (Phân Tích Tài Chính 30 Dòng) ===

### I. TẢI FILE BẢNG TÍNH MẪU & TẠO GOOGLE SHEETS

> 💡 **Hướng dẫn cho Học viên:** Bấm nút **Tải xuống** ở Thao tác 1 để lấy file `.xlsx` dữ liệu bán hàng 30 dòng Quý 2 về máy, sau đó tải file lên Google Sheets cá nhân của bạn để mở thanh Gemini Side Panel thực thi chuỗi 4 Prompt dưới đây.

* **Thao tác 1 (Tải File Mẫu):** [📥 Tải Xuống File Bảng Tính Doanh Thu Q2 (.XLSX)](/B%E1%BA%A3ng%20m%E1%BA%ABu%20Doanh%20thu%20Q2.xlsx)
* **Thao tác 2 (Mở Google Sheets):** [📊 Mở Trang Web Google Sheets Mới (sheets.new)](https://sheets.new)

---

### II. BỘ PROMPT CHUỖI NHIỆM VỤ PHÂN TÍCH TÀI CHÍNH ĐA CHIỀU (TÁCH 4 BƯỚC)

Học viên sẽ mở thanh Gemini Side Panel trong Google Sheets (hoặc Gemini Chat cá nhân) và thực thi chuỗi 4 Prompt độc lập theo đúng quy trình phân tích dữ liệu chuyên nghiệp.

---

#### 🟢 BƯỚC 1: LÀM SẠCH, CHUẨN HÓA DỮ LIỆU THÔ & ÉP KIỂU SỐ NGUYÊN

*Bấm nút **1-Click Copy Bước 1** dán vào Gemini trong Sheets:*

```text
[VAI TRÒ & BỐI CẢNH]
Bạn là Chuyên viên Kiểm toán Dữ liệu (Data Auditor). Bạn được giao một bảng theo dõi 30 dòng dữ liệu bán hàng đa kênh Quý 2 chứa rất nhiều lỗi định dạng.

[NHIỆM VỤ 1 - LÀM SẠCH & CHUẨN HÓA]
Hãy viết và thực thi code Python/Hàm Google Sheets nội bộ để xử lý toàn bộ bảng dữ liệu từ A1 đến G31 theo đúng các quy tắc sau:

1. CHUẨN HÓA CỘT B (Kenh Ban Hang Va Chien Dich):
   - Xóa bỏ toàn bộ khoảng trắng thừa ở đầu và cuối chuỗi (dùng hàm TRIM).
   - Chuẩn hóa chữ cái đầu của tên kênh và chiến dịch (ví dụ: "tiktok shop" -> "TikTok Shop", "facebook ads" -> "Facebook Ads").

2. LÀM SẠCH CÁC CỘT SỐ LIỆU TÀI CHÍNH (Cột C: Doanh Thu, Cột D: Chi Phi Ads, Cột E: Chi Phi KOC):
   - Xóa bỏ tất cả các ký tự chuỗi không phải số: "VNĐ", "VND", "vnđ", "dong", "VND", khoảng trắng.
   - Xóa bỏ các dấu chấm/dấu phẩy phân cách sai quy chuẩn.
   - Chuyển đổi toàn bộ dữ liệu ở 3 cột này về định dạng Số Nguyên (Integer/Currency) chuẩn Việt Nam có dấu phân cách hàng nghìn.

3. CHUẨN HÓA CỘT G (Trang Thai Kenh):
   - Viết hoa chữ cái đầu, sửa các chữ viết không dấu thành có dấu chuẩn mực (ví dụ: "tang truong manh" -> "Tăng trưởng mạnh", "LO NANG" -> "Lỗ nặng").
```

---

#### 🟢 BƯỚC 2: TÍNH TOÁN CÁC CHỈ SỐ TÀI CHÍNH & MKT NÂNG CAO

*Bấm nút **1-Click Copy Bước 2** dán tiếp vào Gemini trong Sheets:*

```text
[NHIỆM VỤ 2 - TÍNH TOÁN KPI VÀ TỶ SUẤT TÀI CHÍNH]
Dựa trên bảng dữ liệu đã được làm sạch ở Bước 1, hãy chèn thêm các cột tính toán tài chính nâng cao từ Cột H đến Cột M theo công thức chi tiết sau:

1. Cột H [Tong Chi Phi MKT] = Chi Phi Ads (Cột D) + Chi Phi KOC (Cột E).
2. Cột I [Loi Nhuan Gop MKT] = Doanh Thu (Cột C) - Tong Chi Phi MKT (Cột H).
3. Cột J [Chi So ROAS] = Doanh Thu (Cột C) / Tong Chi Phi MKT (Cột H). 
   - Quy tắc: Làm tròn 2 chữ số thập phân (Ví dụ: 4.25). Nếu Tong Chi Phi MKT = 0, ghi nhận là "N/A (Organic)".
4. Cột K [Gia Tri Trung Binh Don - AOV] = Doanh Thu (Cột C) / So Don Hang (Cột F).
   - Định dạng về số nguyên đồng (VNĐ/Đơn).
5. Cột L [Chi Phi MKT Trên 1 Đơn - CPA] = Tong Chi Phi MKT (Cột H) / So Don Hang (Cột F).
   - Định dạng về số nguyên đồng (VNĐ/Đơn).
6. Cột M [Ty Trong Doanh Thu (%)] = (Doanh Thu Kênh / Tổng Doanh Thu Toàn Bảng) * 100.
   - Định dạng phần trăm (Ví dụ: 12.5%).
```

---

#### 🟢 BƯỚC 3: PHÂN LOẠI CẢNH BÁO RỦI RO & TẠO MA TRẬN PHÂN TÍCH NHÓM KÊNH

*Bấm nút **1-Click Copy Bước 3** dán tiếp vào Gemini trong Sheets:*

```text
[NHIỆM VỤ 3 - CẢNH BÁO RỦI RO & MA TRẬN PIVOT]
Hãy thực hiện phân loại cảnh báo tự động và tổng hợp dữ liệu quản trị:

1. THÊM CỘT N [Phan Loai Hieu Qua MKT] dựa trên Chỉ số ROAS (Cột J):
   - ROAS >= 4.0: Ghi nhận "Kênh Trụ Cột (Siêu Lợi Nhuận)"
   - ROAS từ 2.0 đến dưới 4.0: Ghi nhận "Kênh Tiềm Năng (Ổn Định)"
   - ROAS từ 1.0 đến dưới 2.0: Ghi nhận "Kênh Cần Tối Ưu Chi Phi"
   - ROAS < 1.0: Cảnh báo đỏ "Kênh Lỗ Nặng (Cắt Giảm Ngay)"
   - ROAS = "N/A": Ghi nhận "Kênh Organic (Chi Phí 0Đ)"

2. THÊM DÒNG TỔNG CỘNG VÀ TRUNG BÌNH Ở CUỐI BẢNG (Dòng 32):
   - Tính TỔNG: Doanh Thu, Chi Phí Ads, Chi Phí KOC, Số Đơn Hàng, Tổng Chi Phí MKT, Lợi Nhận Gộp MKT.
   - Tính TRUNG BÌNH TOÀN MẠNG: ROAS Trung Bình, AOV Trung Bình, CPA Trung Bình.

3. TẠO BẢNG TÓM TẮT THỦ CÔNG / PIVOT TABLE TÓM TẮT THEO 5 KÊNH CHÍNH:
   Gom nhóm 30 chiến dịch nhỏ thành 5 Nhóm Kênh Lớn: [TikTok, Shopee, Facebook, Website, Khác] và tính: Tổng Doanh Thu, Tổng Chi Phí MKT, ROAS Nhóm và Tỷ Trọng Doanh Thu.
```

---

#### 🟢 BƯỚC 4: XUẤT DASHBOARD TÓM TẮT & ĐỀ XUẤT MÔ HÌNH BIỂU ĐỒ QUẢN TRỊ

*Bấm nút **1-Click Copy Bước 4** dán tiếp vào Gemini trong Sheets:*

```text
[NHIỆM VỤ 4 - DASHBOARD TRỰC QUAN HÓA & EXECUTIVE REPORT]
Dựa trên toàn bộ kết quả phân tích tài chính 30 dòng ở trên, hãy thực hiện 2 yêu cầu quản trị cấp cao:

1. ĐỀ XUẤT BỘ BIỂU ĐỒ TRỰC QUAN HÓA (EXECUTIVE CHARTS):
   - Biểu đồ 1 (Biểu đồ Cột Kép): So sánh [Doanh Thu] vs [Tong Chi Phi MKT] của 5 Nhóm Kênh Lớn để chỉ ra lệch chi phí.
   - Biểu đồ 2 (Biểu đồ Tròn / Donut Chart): Trực quan hóa [Ty Trong Doanh Thu (%)] để Sếp thấy rõ kênh nào đang gánh tỷ trọng doanh số chính.
   - Biểu đồ 3 (Biểu đồ Đường Combo Line Chart): Trực quan hóa [Chỉ số ROAS] của 30 chiến dịch để làm nổi bật các điểm xả tiền lỗ (ROAS < 1.0).

2. XUẤT EXECUTIVE BRIEF CHO C-LEVEL (300 TỪ):
   Tóm tắt 3 phát hiện sinh tử cho Giám đốc Tài chính (CFO):
   - Chỉ ra 3 chiến dịch ngốn chi phí lỗ nặng nhất cần cắt hợp đồng ngay.
   - Chỉ ra 2 chiến dịch có chỉ số ROAS cao nhất cần dồn 80% ngân sách Quý 3.
   - Đánh giá chỉ số CPA trung bình toàn hệ thống và đề xuất mức trần chi phí MKT/Đơn cho Quý 3.
```

---

### III. CHECKLIST NGHIỆM THU BÀI NỘP (OKR SHEETS 30 DÒNG)

Sau 25 phút thực hành chuỗi 4 bước trên, học viên kiểm tra Google Sheets đạt các tiêu chuẩn sau:

* [ ] **Data Cleaned:** 30 dòng dữ liệu không còn khoảng trắng rác, không dính chữ "VNĐ/VND/dong", số nguyên đồng nhất.
* [ ] **Công thức chuẩn:** Có đủ 6 cột tính toán nâng cao (Tổng Chi Phí MKT, Lợi Nhuận Gộp, ROAS, AOV, CPA, Tỷ Trọng %).
* [ ] **Ma trận Cảnh báo:** Phân loại đúng 5 cấp độ hiệu quả dựa trên ROAS + Có dòng TỔNG CỘNG/TRUNG BÌNH ở dòng cuối.
* [ ] **Gom nhóm Pivot:** Có bảng tóm tắt gom 30 dòng thô thành 5 Nhóm Kênh Lớn.
* [ ] **Trực quan hóa:** Xuất được đề xuất bộ 3 Biểu đồ Quản trị + Đoạn Executive Brief cho CFO.

---

=== SUBTAB: 🎨 Bài 3: Gemini Slides (Dựng Bộ Slide Chiến Lược 5 Trang) ===

### 🖥️ PHẦN I: BỐI CẢNH & TẠO FILE GOOGLE SLIDES

> 💡 **Bối cảnh:** Chuyển toàn bộ dữ liệu báo cáo chuyên sâu từ Docs và Sheets thành bộ Slide thuyết trình Chiến lược 5 trang trình Ban Giám đốc duyệt ngân sách Quý 3 trong 10 phút.

* **Thao tác 1 (Mở Google Slides):** [🎨 Mở Trang Web Google Slides Mới (slides.new)](https://slides.new)

---

### PHẦN II: BỘ NÚT 1-CLICK COPY PROMPT MÔ-ĐUN (NÂNG CAO)

---

* **Prompt 3.1: Dựng Cấu Trúc Slide Chiến Lược 5 Trang**

```text
[NHIỆM VỤ DÀN TRANG CHIẾN LƯỢC]
Dựa trên Báo cáo Docs và Bảng chỉ số Sheets đã hoàn thiện, hãy lập cấu trúc chi tiết cho bộ Slide 5 trang:

- Slide 1: Tiêu đề "Báo Cáo Hiệu Quả Kinh Doanh Q2 & Đề Xuất Tối Ưu Ngân Sách Q3" + Thông tin Trình bày.
- Slide 2: Bảng Tổng Hợp Chỉ Số Kinh Doanh Q2 (Đưa các chỉ số Doanh thu, ROAS, AOV nổi bật từ Sheets lên slide dưới dạng Bảng).
- Slide 3: Phân Tích Ma Trận SWOT Kênh Bán Hàng (Tóm tắt Điểm mạnh/Điểm yếu của TikTok, Shopee so với Facebook Ads, Website).
- Slide 4: Đề Xuất Phân Bổ Ngân Sách Q3 & Tỷ Suất ROI Dự Kiến (Bảng so sánh % ngân sách Q2 vs Q3).
- Slide 5: Kế Hoạch Quản Trị Rủi Ro Vận Hành & Lời Kêu Gọi Phê Duyệt.
```

* **Prompt 3.2: Viết Kịch Bản Thuyết Minh Chi Tiết Cho 5 Trang Slide (Speaker Notes)**

```text
[NHIỆM VỤ SOẠN LỜI THOẠI SPEAKER NOTES]
Dựa trên dàn trang 5 Slide ở trên, hãy viết Kịch bản Thuyết minh (Presenter Notes) từng slide cho Trưởng phòng MKT trình bày trước HĐQT trong 10 phút:
- Tông giọng: Tự tin, súc tích, nhấn mạnh vào bài toán tối ưu chi phí MKT và cơ hội tăng trưởng Q3.
- Với mỗi Slide, xuất rõ: [Slide X Header] + [3 gạch đầu dòng nội dung chính] + [Lời thoại Speaker Notes 1-2 phút].
```

* **Prompt 3.3: Tạo Infographic Ma Trận AI Native (Imagen 3 / Midjourney v6)**

```text
A professional business infographic slide template showing a 4-quadrant SWOT matrix layout, clean modern corporate design, blue and teal color scheme, isometric style, high resolution.
```

---

### III. CHECKLIST NGHIỆM THU BÀI NỘP (OKR SLIDES 5 TRANG)

* [ ] **Đủ 5 Trang:** Bộ Slide 5 trang chuẩn cấu trúc chiến lược kinh doanh.
* [ ] **Tích hợp Chỉ số Sheets:** Slide 2 tích hợp đủ các chỉ số tài chính (ROAS, AOV, CPA) trích xuất từ Sheets.
* [ ] **Ma trận SWOT:** Slide 3 có Ma trận SWOT phân tích ưu/nhược điểm các kênh bán hàng.
* [ ] **Infographic AI Native:** Có 01 hình ảnh Infographic Ma trận/Background tạo bằng AI Native.
