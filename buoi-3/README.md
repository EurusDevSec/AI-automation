# 🤖 Buổi 3: Workflow n8n Auto "Cào" Ý Tưởng RSS Về Google Sheets

## 📋 Các Bước Thực Hành Chi Tiết (Dưới 10 từ/dòng)

- 🔹 **Bước 1**: Mở n8n Dashboard -> Chọn **Workflows** -> Nhấn **Import from File**.
- 🔹 **Bước 2**: Tải file `workflow_buoi_3_rss_to_sheet.json` và import vào n8n.
- 🔹 **Bước 3**: Click đúp vào Node **Google Sheets** -> Kết nối Google Account.
- 🔹 **Bước 4**: Nhập `Document ID` của Google Sheet cá nhân.
- 🔹 **Bước 5**: Nhấn nút **Execute Workflow** để kiểm tra dữ liệu chảy tự động.

---

## 🛠️ Lỗi Thường Gặp (Troubleshooting)

| Lỗi | Nguyên nhân | Cách sửa |
| :--- | :--- | :--- |
| ⚠️ `401 Unauthorized` | Chuyển credentials Google Sheets chưa nạp | Chọn Google Account trong dropdown Node credentials. |
| ⚠️ `Resource not found` | URL RSS VNExpress sai hoặc bận | Dùng URL RSS mặc định: `https://vnexpress.net/rss/so-hoa.rss`. |
