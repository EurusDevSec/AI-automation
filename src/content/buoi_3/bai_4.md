# 🕵️ Bài 4: n8n Auto Keyword Spying 24/7

### 📖 TỔNG QUAN BÀI TẬP 4

Học viên làm chủ Node **IF / Filter / Switch** trong n8n để tự động phân loại bài viết. Hệ thống chỉ lọc các tin tức chứa từ khóa quan trọng (ví dụ: `AI`, `Automation`, `n8n`, `ChatGPT`) trước khi lưu về Google Sheets hoặc đẩy thông báo cảnh báo gấp.

---

### 📌 QUY TRÌNH THỰC HÀNH 4 BƯỚC

#### 1. BƯỚC 1: XÁC ĐỊNH BỘ TỪ KHÓA CẢNH BÁO (KEYWORD RULES)
- Xác định 4 từ khóa cốt lõi cần theo dõi 24/7: `AI`, `Automation`, `n8n`, `ChatGPT`.
- Mục tiêu: Bỏ qua các tin tức giải trí/thời sự thông thường, chỉ giữ lại các tin công nghệ đột phá.

---

#### 2. BƯỚC 2: COPY/PASTE MÃ WORKFLOW N8N JSON BÀI 4
- Bấm nút **1-Click Copy Prompt** ở khung bên dưới → Mở n8n Canvas → Nhấn **Ctrl + V**.

```json
{
  "name": "n8n Keyword Spying 24/7",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "minutes",
              "minutesInterval": 30
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.1,
      "position": [-480, 0],
      "id": "trigger-30m",
      "name": "Schedule Every 30 Min"
    },
    {
      "parameters": {
        "url": "https://vnexpress.net/rss/so-hoa.rss"
      },
      "type": "n8n-nodes-base.rssFeedRead",
      "typeVersion": 1.2,
      "position": [-250, 0],
      "id": "rss-spying",
      "name": "RSS Feed Reader"
    },
    {
      "parameters": {
        "conditions": {
          "string": [
            {
              "value1": "={{ $json.title }}",
              "operation": "regex",
              "value2": "(AI|Automation|n8n|ChatGPT|Gemini)"
            }
          ]
        }
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [100, 0],
      "id": "filter-keywords",
      "name": "Filter AI Keywords Node"
    },
    {
      "parameters": {
        "operation": "appendOrUpdate",
        "documentId": {
          "__rl": true,
          "value": "NHAP_ID_GOOGLE_SHEET_CUA_BAN_VAO_DAY",
          "mode": "list"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Tiêu đề": "={{ $json.title }}",
            "Link": "={{ $json.link }}",
            "Ngày xuất bản": "={{ $json.pubDate }}"
          },
          "matchingColumns": [
            "Link"
          ]
        }
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [450, -100],
      "id": "sheet-matched",
      "name": "Save Hot AI News to Sheet",
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "",
          "name": "Google Sheets account"
        }
      }
    }
  ],
  "connections": {
    "Schedule Every 30 Min": { "main": [[{ "node": "RSS Feed Reader", "type": "main", "index": 0 }]] },
    "RSS Feed Reader": { "main": [[{ "node": "Filter AI Keywords Node", "type": "main", "index": 0 }]] },
    "Filter AI Keywords Node": { "main": [[{ "node": "Save Hot AI News to Sheet", "type": "main", "index": 0 }]] }
  }
}
```

---

#### 3. BƯỚC 3: CẤU HÌNH ĐIỀU KIỆN REGEX KEYWORDS & SHEETS ID
- Click đúp Node **Filter AI Keywords Node**. Bạn có thể tùy chỉnh từ khóa ở ô Regex: `(AI|Automation|n8n|ChatGPT|Gemini|Kinh doanh)`.
- Nhập **Document ID** Google Sheets của bạn ở Node **Save Hot AI News to Sheet**.

---

#### 4. BƯỚC 4: CHẠY THỬ NGHIỆM & KÍCH HOẠT SĂN TIN 24/7
- Bấm **Execute workflow** → Hệ thống sẽ lọc bài viết và chỉ giữ lại những bài khớp từ khóa hot!
- Gạt công tắc **Active** để n8n chạy ngầm quét tin tức mỗi 30 phút.

---

### III. CHECKLIST NGHIỆM THU BÀI 4

- [ ] **Keyword Filter Configured:** Đã thiết lập biểu thức Regex lọc đúng bộ từ khóa cần săn.
- [ ] **If Node Routing:** Các bài tin không chứa từ khóa bị bỏ qua, các bài khớp từ khóa đi qua nhánh `true`.
- [ ] **Data Saved:** Bài tin hot được đẩy thành công về Google Sheets.
- [ ] **Kích hoạt 24/7:** Đã bật công tắc sang trạng thái **Active**.
