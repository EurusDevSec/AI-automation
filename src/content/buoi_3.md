# Buổi 3: Auto Cào Ý Tưởng RSS Sang Google Sheets (n8n)

![Giao diện n8n RSS Automation](/session_3.jpg)

## 📖 Tổng Quan Buổi Học
Bắt đầu bước chân vào thế giới Tự Động Hóa Workflow không code với n8n. Tạo hệ thống tự động 'cào' bài viết từ báo chí/đối thủ về Google Sheets mỗi ngày.

---

## 📦 Mã Workflow n8n JSON
```json
{
  "name": "Buổi 3 - Auto Cào Ý Tưởng RSS sang Google Sheets",
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
      "id": "node-schedule-trigger",
      "name": "Schedule Trigger (Mỗi 24h)",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "url": "https://vnexpress.net/rss/so-hoa.rss"
      },
      "id": "node-rss-feed",
      "name": "HTTP RSS Request",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [480, 300]
    },
    {
      "parameters": {
        "operation": "append",
        "documentId": {
          "__rl": true,
          "value": "[YOUR_GOOGLE_SHEET_ID_HERE]",
          "mode": "list"
        }
      },
      "id": "node-google-sheets",
      "name": "Google Sheets Append Node",
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.5,
      "position": [700, 300]
    }
  ]
}
```
