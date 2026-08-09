# 🤖 Bài 2: n8n AI Summarizer sang Telegram / Slack

### 📖 TỔNG QUAN BÀI TẬP 2

Học viên kết nối **n8n với Gemini AI (Google AI / OpenAI)** để tự động cào tin tức từ RSS, ép AI tóm tắt nội dung bài viết thành 3 gạch đầu dòng ngắn gọn và tự động bắn thông báo tin tức quan trọng vào **Nhóm Telegram / Slack** của công ty mỗi sáng lúc 8:00 AM.

---

### 📌 QUY TRÌNH THỰC HÀNH 4 BƯỚC

#### 1. BƯỚC 1: TẠO TELEGRAM BOT & LẤY BOT TOKEN
- Mở Telegram, tìm kiếm `@BotFather` và gửi lệnh `/newbot`.
- Đặt tên cho Bot (VD: `AI_News_Summary_Bot`).
- Copy đoạn mã **HTTP API Bot Token** (VD: `7123456789:AAFxxx...`).
- Thêm Bot vừa tạo vào Nhóm Telegram làm Quản trị viên (Admin) và lấy **Chat ID** của nhóm.

---

#### 2. BƯỚC 2: COPY/PASTE MÃ WORKFLOW N8N JSON BÀI 2
- Bấm nút **1-Click Copy Prompt** ở khung bên dưới → Mở n8n Canvas → Nhấn **Ctrl + V**.

```json
{
  "name": "n8n AI Summarizer to Telegram",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "hours",
              "hoursInterval": 24
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.1,
      "position": [-480, 0],
      "id": "trigger-8am",
      "name": "Schedule Trigger 8 AM"
    },
    {
      "parameters": {
        "url": "https://vnexpress.net/rss/so-hoa.rss"
      },
      "type": "n8n-nodes-base.rssFeedRead",
      "typeVersion": 1.2,
      "position": [-250, 0],
      "id": "rss-reader",
      "name": "Read RSS Feed"
    },
    {
      "parameters": {
        "chatId": "YOUR_TELEGRAM_CHAT_ID",
        "text": "=📰 *[BẢN TIN SÁNG AI AUTOMATION 2026]*\n\n🔥 *Tiêu đề:* {{ $json.title }}\n\n💡 *Mô tả ngắn:* {{ $json.contentSnippet }}\n\n🔗 *Xem chi tiết:* {{ $json.link }}",
        "additionalFields": {
          "parse_mode": "Markdown"
        }
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.1,
      "position": [500, 0],
      "id": "telegram-bot-send",
      "name": "Send Telegram Message",
      "credentials": {
        "telegramApi": {
          "id": "",
          "name": "Telegram Bot Credential"
        }
      }
    }
  ],
  "connections": {
    "Schedule Trigger 8 AM": { "main": [[{ "node": "Read RSS Feed", "type": "main", "index": 0 }]] },
    "Read RSS Feed": { "main": [[{ "node": "Send Telegram Message", "type": "main", "index": 0 }]] }
  }
}
```

---

#### 3. BƯỚC 3: CẤU HÌNH NODE TELEGRAM & THAY CHAT ID
- Click đúp Node **Send Telegram Message** trên n8n.
- Thay `YOUR_TELEGRAM_CHAT_ID` bằng Chat ID nhóm Telegram của bạn.
- Nhập **Telegram Bot Token** trong mục Credentials.

---

#### 4. BƯỚC 4: CHẠY THỬ NGHIỆM & KÍCH HOẠT
- Bấm **Execute workflow** → Kiểm tra thông báo tóm tắt tự động bắn thẳng vào ứng dụng Telegram trên điện thoại/máy tính của bạn!
- Gạt công tắc **Active** để n8n gửi bản tin tự động lúc 8:00 AM hàng ngày.

---

### III. CHECKLIST NGHIỆM THU BÀI 2

- [ ] **Telegram Bot:** Đã tạo Bot với `@BotFather` và cấp quyền Admin trong Nhóm Telegram.
- [ ] **n8n Connected:** Đã kết nối thành công Telegram Bot Credential.
- [ ] **Tin nhắn mượt mượt:** Đã nhận được tin nhắn tóm tắt có định dạng Markdown đẹp mắt trên Telegram.
- [ ] **Kích hoạt 24/7:** Đã bật công tắc sang trạng thái **Active**.
