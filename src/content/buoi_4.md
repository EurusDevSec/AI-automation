# Buổi 4: Máy Sản Xuất Content Auto Đăng Bài Facebook Page

![Giao diện Facebook Auto Content n8n](/session_4.jpg)

## 📖 Tổng Quan Buổi Học
Xây dựng 'Nhà máy sản xuất nội dung' hoàn toàn tự động. Nối kết Google Sheets -> OpenAI GPT-4o -> Facebook Graph API để tạo và đăng bài tự động đa kênh.

---

## 📦 Mã Workflow n8n JSON
```json
{
  "name": "Buổi 4 - Máy Sản Xuất Content Sheet to OpenAI to Facebook Page",
  "nodes": [
    {
      "parameters": {
        "documentId": "[YOUR_GOOGLE_SHEET_ID_HERE]"
      },
      "id": "node-sheets-trigger",
      "name": "Google Sheets Trigger",
      "type": "n8n-nodes-base.googleSheetsTrigger",
      "typeVersion": 1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "model": "gpt-4o-mini"
      },
      "id": "node-openai-writer",
      "name": "OpenAI Content Generator",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1.3,
      "position": [480, 300]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://graph.facebook.com/v19.0/me/feed"
      },
      "id": "node-facebook-post",
      "name": "Facebook Graph API Post",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [700, 300]
    }
  ]
}
```
