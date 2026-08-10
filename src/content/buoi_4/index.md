# Buổi 4: Máy Sản Xuất Content Auto Đăng Bài Facebook Page (Kiểm Duyệt Telegram)

![Giao diện Facebook Auto Content n8n](image.png)

![Kết quả sản phẩm](image-1.png)

## 📖 Tổng Quan Buổi Học (Thời lượng: 90 phút)

Xây dựng **"Nhà máy sản xuất nội dung"** hoàn toàn tự động cho Facebook Fanpage kết hợp kiểm duyệt con người (Human-In-The-Loop) chuẩn kiến trúc Kỹ sư AI / Cloud & DevOps:

- **Phần 1 (Kiến trúc Nền tảng - 20 phút)**: Webhook Event-Driven Architecture, HMAC SHA256 Verification, OAuth 2.0 Token Lifecycle & Meta Graph API Quotas.
- **Phần 2 (Nhánh 1 - 35 phút)**: Quét tin tức hot từ Google Trends → AI Gemini chọn từ khóa & viết bài → Sinh ảnh AI tự động → Lưu Google Sheets → Bắn bản nháp sang Telegram cho quản trị viên duyệt.
- **Phần 3 (Nhánh 2 - 25 phút)**: Bấm nút **✅ DUYỆT & ĐĂNG BÀI** trên Telegram → Webhook n8n kích hoạt → Đăng bài viết + Ảnh AI trực tiếp lên Facebook Fanpage qua Meta Graph API.
- **Phần 4 (Tổng kết & Troubleshooting - 10 phút)**: Checklist 5 tiêu chuẩn vận hành Production & Bản đồ xử lý bẫy lỗi.

---

## 🎯 Mục Tiêu Đạt Được (OKRs)

- [x] Làm chủ kiến trúc **Event-Driven Webhook Security** & OAuth 2.0 Token Lifecycle trên Meta Developer Platform.
- [x] Làm chủ tư duy tự động hóa bài viết kết hợp kiểm duyệt con người **Human-In-The-Loop**.
- [x] Kết nối thành công **Google Trends RSS**, **Gemini AI**, **Pollinations AI Image Generator**, **Google Sheets**, **Telegram Bot** và **Facebook Graph API**.
- [x] Xử lý bẫy lỗi bọc chuỗi tiếng Việt `encodeURIComponent` và làm sạch chuỗi JSON `JSON.parse`.
