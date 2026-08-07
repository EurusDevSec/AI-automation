# Buổi 6: Auto Chatbot Messenger Facebook n8n

![Giao diện AI Chatbot Messenger](/session_6.jpg)

## 📖 Tổng Quan Buổi Học
Xây dựng Chatbot tư vấn bán hàng & báo giá thông minh kết nối trực tiếp Facebook Messenger Webhook với OpenAI API qua n8n.

---

## 📦 Mã Workflow n8n JSON Chatbot
```json
{
  "name": "Buổi 6 - Auto Chatbot Messenger Facebook n8n",
  "nodes": [
    {
      "parameters": {
        "path": "fb-messenger-webhook"
      },
      "id": "node-webhook",
      "name": "Facebook Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "model": "gpt-4o-mini"
      },
      "id": "node-openai-bot",
      "name": "OpenAI Sales Bot",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1.3,
      "position": [480, 300]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://graph.facebook.com/v19.0/me/messages"
      },
      "id": "node-fb-reply",
      "name": "FB Send Messenger Reply",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [700, 300]
    }
  ]
}
```
