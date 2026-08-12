# Buổi 5: Máy Sản Xuất Video YouTube Shorts Tự Động (Gemini AI, Edge-TTS, FFmpeg & Telegram Bot)

![Giao diện n8n YouTube Shorts Automation](/session_5.jpg)

## 📖 Tổng Quan Buổi Học (Thời lượng: 120 phút)

Xây dựng **"Nhà máy sản xuất Video YouTube Shorts"** hoàn toàn tự động từ tin tức xu hướng Google Trends, kết hợp tuân thủ **Luật Trí tuệ Nhân tạo 2026** và kiểm duyệt 2 bước **Human-In-The-Loop** qua Telegram Bot:

- **Phần 1 (Kiến trúc Nền tảng & Khung Pháp Lý An Toàn AI - 25 phút)**: Tìm hiểu Luật AI 2026 (Nghĩa vụ gắn nhãn nhận biết nội dung AI `#AIContent`), Luật An ninh mạng (Cấm Deepfake & Giả mạo) và bản chất kĩ thuật của Docker, FFmpeg, Edge-TTS, Pollinations AI, Gemini LLM, YouTube OAuth2 API.
- **Phần 2 (Chuẩn bị Môi trường & Credentials Upfront - 25 phút)**: Khởi chạy Docker n8n + FFmpeg + Python3 + Edge-TTS. Cấu hình tập trung Gemini API Key, Telegram Bot & Chat ID, và Google Cloud OAuth2 Client ID/Secret.
- **Phần 3 (Thực hành Kéo-thả 16 Nodes & 1-Click Import - 50 phút)**: Xây dựng trọn gói 4 Chặng tự động hóa. Hướng dẫn chi tiết 2 Phương pháp (Phương pháp 1: Kéo-thả thủ công giải thích lý do; Phương pháp 2: Import file JSON 1-Click có gắn Sticky Notes).
- **Phần 4 (Tổng kết & Bản đồ Troubleshooting - 20 phút)**: Xử lý triệt để bẫy lỗi HTTP 429, `NoAudioReceived`, `amix unconnected` và n8n Task Runner timeout.

---

## 🎯 Mục Tiêu Đạt Được (OKRs)

- [x] Khởi chạy và vận hành hệ thống n8n đóng gói Docker tích hợp FFmpeg, Edge-TTS, Python3.
- [x] Làm chủ kiến thức hành lang pháp lý: Luật Trí tuệ Nhân tạo 2026 (Nghĩa vụ gắn nhãn AI Content) và Luật An ninh mạng (Phòng chống lừa đảo Deepfake).
- [x] Thiết lập thành công Google Gemini API, Telegram Bot API và Google Cloud OAuth2 Client ID/Secret cho YouTube Data API v3.
- [x] Làm chủ tư duy xây dựng hệ thống tự động hóa nội dung đa phương tiện (Video + Audio + Text + Image) kết hợp kiểm duyệt con người **Human-In-The-Loop**.
- [x] Xử lý thành thạo các kỹ thuật lập trình nâng cao: Duyệt mảng bất đồng bộ `$input.all()`, hòa âm FFmpeg `-map 0:v -map "[a]"`, và giả lập Header `User-Agent: Mozilla/5.0`.

---

## 📦 Mã Workflow n8n JSON Mẫu

Tải file mẫu công khai đã khử thông tin bảo mật tại đây: [youtube-automation-public.json](file:///r:/_Projects/Eurus_Workspace/AI-automation/n8n-youtube-automation/youtube-automation-public.json)
