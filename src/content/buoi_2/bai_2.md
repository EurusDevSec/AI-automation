# 📊 Bài 2: Gemini Sheets (Phân Tích Tài Chính 30 Dòng)

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
