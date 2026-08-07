# 📢 Buổi 4: Máy Sản Xuất Content Auto Đăng Bài Facebook

## 📋 Các Bước Thực Hành Chi Tiết (Dưới 10 từ/dòng)

- 🔹 **Bước 1**: Import file `workflow_buoi_4_sheet_to_facebook.json` vào n8n.
- 🔹 **Bước 2**: Kết nối OpenAI Credential (nhập OpenAI API Key).
- 🔹 **Bước 3**: Kết nối Facebook Graph API Credential (nhập Page Access Token).
- 🔹 **Bước 4**: Chọn Google Sheet chứa chủ đề bài viết cần viết.
- 🔹 **Bước 5**: Kích hoạt Workflow để AI viết bài & tự động đăng lên Fanpage.

---

## 🛠️ Lỗi Thường Gặp (Troubleshooting)

| Lỗi | Nguyên nhân | Cách sửa |
| :--- | :--- | :--- |
| ⚠️ `GraphMethodException 100` | Facebook Token hết hạn / thiếu quyền | Cấp quyền `pages_manage_posts` & `pages_read_engagement` trên Meta Developer. |
| ⚠️ `429 Insufficient Quotient` | OpenAI hết credit khả dụng | Kiểm tra Billing Balance trên platform.openai.com. |
