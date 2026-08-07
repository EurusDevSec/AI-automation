# 💬 Buổi 6: Workflow Chatbot Messenger n8n Auto Chốt Đơn & Báo Giá

## 📋 Các Bước Thực Hành Chi Tiết (Dưới 10 từ/dòng)

- 🔹 **Bước 1**: Import `workflow_buoi_6_chatbot_messenger.json` vào n8n.
- 🔹 **Bước 2**: Copy Webhook URL từ Node **Facebook Messenger Webhook**.
- 🔹 **Bước 3**: Cấu hình Webhook Callback URL trên Meta Developer Dashboard.
- 🔹 **Bước 4**: Nạp System Prompt kịch bản tư vấn bán hàng vào Node OpenAI.
- 🔹 **Bước 5**: Thử gửi tin nhắn cho Fanpage để AI tự trả lời & báo giá.

---

## 🛠️ Lỗi Thường Gặp (Troubleshooting)

| Lỗi | Nguyên nhân | Cách sửa |
| :--- | :--- | :--- |
| ⚠️ Webhook không phản hồi | Chưa xác minh Verify Token | Điền đúng Verify Token trong n8n Node Webhook và Meta Settings. |
| ⚠️ Facebook không nhận tin nhắn reply | ID người nhận (PSID) bị sai | Đảm bảo chuyển đúng field `sender.id` từ Webhook payload. |
