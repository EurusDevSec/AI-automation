# 🗂️ Bài 3: n8n Auto Content Hub sang Notion

### 📖 TỔNG QUAN BÀI TẬP 3

Học viên kết nối **n8n với Notion API** để tự động cào các bài viết hay từ đối thủ hoặc nguồn tin tức, tự động tạo mới các thẻ bài viết dạng **Kanban Board** trên Notion để đội ngũ Marketing sẵn sàng vào duyệt và biên tập.

---

### 📌 QUY TRÌNH THỰC HÀNH 4 BƯỚC

#### 1. BƯỚC 1: TẠO NOTION DATABASE & LẤY INTEGRATION TOKEN
- Truy cập trang [notion.so](https://notion.so) và tạo một Database dạng **Board View** (đặt tên: `Content Hub AI`).
- Định nghĩa các cột trên Notion:
  - `Title` (Title): Tiêu đề bài viết
  - `URL` (URL): Đường link bài gốc
  - `Status` (Select): `Idea` / `In Progress` / `Published`
- Truy cập `notion.so/my-integrations` tạo Integration mới và copy **Secret Integration Token**.

---

#### 2. BƯỚC 2: COPY/PASTE MÃ WORKFLOW N8N JSON BÀI 3
- Bấm nút **1-Click Copy Prompt** ở khung bên dưới → Mở n8n Canvas → Nhấn **Ctrl + V**.

```json
{
  "name": "n8n RSS to Notion Content Hub",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "hours",
              "hoursInterval": 12
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.1,
      "position": [-480, 0],
      "id": "trigger-12h",
      "name": "Schedule Every 12 Hours"
    },
    {
      "parameters": {
        "url": "https://vnexpress.net/rss/so-hoa.rss"
      },
      "type": "n8n-nodes-base.rssFeedRead",
      "typeVersion": 1.2,
      "position": [-250, 0],
      "id": "rss-notion",
      "name": "RSS Feed Reader"
    },
    {
      "parameters": {
        "resource": "databasePage",
        "databaseId": {
          "__rl": true,
          "value": "YOUR_NOTION_DATABASE_ID",
          "mode": "list"
        },
        "title": "={{ $json.title }}",
        "propertiesUi": {
          "propertyValues": [
            {
              "key": "URL|url",
              "urlValue": "={{ $json.link }}"
            },
            {
              "key": "Status|select",
              "selectValue": "Idea"
            }
          ]
        }
      },
      "type": "n8n-nodes-base.notion",
      "typeVersion": 2.2,
      "position": [200, 0],
      "id": "notion-create-card",
      "name": "Create Notion Card",
      "credentials": {
        "notionApi": {
          "id": "",
          "name": "Notion Integration Token"
        }
      }
    }
  ],
  "connections": {
    "Schedule Every 12 Hours": { "main": [[{ "node": "RSS Feed Reader", "type": "main", "index": 0 }]] },
    "RSS Feed Reader": { "main": [[{ "node": "Create Notion Card", "type": "main", "index": 0 }]] }
  }
}
```

---

#### 3. BƯỚC 3: KẾT NỐI NOTION DATABASE ID & NOTION TOKEN
- Click đúp Node **Create Notion Card** trên n8n.
- Nhập **Notion Database ID** và dán **Secret Integration Token**.
- Kết nối quyền *Share* trang Notion Database với Integration vừa tạo.

---

#### 4. BƯỚC 4: CHẠY THỬ NGHIỆM & XÁC NHẬN KANBAN BOARD
- Bấm **Execute workflow** → Mở Notion để thấy các thẻ bài viết tự động đổ vào cột **Idea**!
- Gạt công tắc **Active** để n8n nuôi nguồn ý tưởng cho team Marketing 24/7.

---

### III. CHECKLIST NGHIỆM THU BÀI 3

- [ ] **Notion Setup:** Đã tạo Notion Database dạng Board với các trường `Title`, `URL`, `Status`.
- [ ] **Integration Authorized:** Đã Share trang Notion với Integration Token.
- [ ] **Card Auto Creation:** Dữ liệu tin tức cào về tự động tạo thành thẻ Notion mới trong cột `Idea`.
- [ ] **Kích hoạt 24/7:** Đã bật công tắc sang trạng thái **Active**.
