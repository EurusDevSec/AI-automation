# Buổi 6: Trợ Lý AI Siêu Năng Lực Telegram (Multi-Tool Agentic AI: Gmail, Calendar, Web Search & Vision)

![Giao diện AI Chatbot Telegram Agent](/session_6.jpg)

## 📖 TỔNG QUAN BUỔI HỌC

Xây dựng **Trợ lý AI Đa Năng "Sam"** trên Telegram kết nối n8n AI Agent với 5 Siêu Công cụ (Tools) thực tế:
1. 📧 **Quản lý Gmail**: Đọc danh sách Email chưa đọc & Tự động soạn/gửi Email theo yêu cầu.
2. 📅 **Lịch biểu Google Calendar**: Xem sự kiện lịch làm việc & Tự khởi tạo lịch họp/nhắc nhở mới.
3. 🌐 **Tìm kiếm Google Search (SerpAPI)**: Tra cứu thông tin thời gian thực, giá coin, tin tức mới nhất trên Internet.
4. 👁️ **Thị giác AI (Vision)**: Phân tích, nhận diện và mô tả nội dung hình ảnh gửi từ ứng dụng Telegram.
5. 🧠 **Bộ nhớ hội thoại (Window Buffer Memory)**: Ghi nhớ thông tin người dùng, lịch sử trò chuyện qua Chat ID.

---

## 🔑 HƯỚNG DẪN CHUẨN BỊ 4 API KEYS & CREDENTIALS (SETUP UPFRONT)

Để hệ thống Trợ lý AI Sam hoạt động mượt mà 100%, học viên cần chuẩn bị trước 4 loại Khóa & Quyền kết nối theo hướng dẫn từng bước bên dưới:

### 1. Telegram Bot Token (Miễn phí 100%)
- Mở ứng dụng Telegram $\rightarrow$ Tìm kiếm bot `@BotFather`.
- Gõ lệnh `/newbot` $\rightarrow$ Nhập tên Bot và Username cho Bot.
- Copy chuỗi **API Token** được cấp (VD: `8699105519:AAGa7X...`).
- Trong n8n: Tạo Credential loại `Telegram account` $\rightarrow$ Dán mã Token vào.

### 2. OpenAI API Key (Model GPT-4o-mini & Vision)
- Truy cập trang [platform.openai.com/api-keys](https://platform.openai.com/api-keys) $\rightarrow$ Đăng nhập tài khoản OpenAI.
- Bấm **Create new secret key** $\rightarrow$ Copy chuỗi API Key (`sk-proj-...`).
- Trong n8n: Tạo Credential loại `OpenAI API account` $\rightarrow$ Dán API Key vào.

### 3. SerpAPI Key (Dùng cho Tool Google Search)
- Truy cập [serpapi.com](https://serpapi.com) $\rightarrow$ Đăng ký tài khoản miễn phí (nhận 100 lượt tìm kiếm/tháng).
- Mở trang Dashboard $\rightarrow$ Copy mã **Private API Key**.
- Trong n8n: Tạo Credential loại `SerpAPI account` $\rightarrow$ Dán Key vào.

### 4. Google OAuth2 Credential (Dùng cho Gmail & Google Calendar)
- Trong n8n: Thêm Credential loại `Gmail OAuth2 API` và `Google Calendar OAuth2 API`.
- Chọn chế độ **Managed OAuth2** $\rightarrow$ Bấm nút **Sign in with Google** $\rightarrow$ Ủy quyền chọn tài khoản Gmail của bạn (Hệ thống sẽ hiện thông báo *Account connected* màu xanh lá).

---

=== SUBTAB: ⚡ Cách 1: Import Nhanh Bằng n8n JSON (1-Click Copy / Download) ===

### 📌 QUY TRÌNH IMPORT N8N JSON CHUẨN (4 BƯỚC BẮT BUỘC)

Toàn bộ mã JSON workflow n8n đã được đóng gói sẵn. Học viên thực hiện đúng 4 bước bên dưới để kích hoạt luồng chạy tự động:

#### BƯỚC 1: COPY/PASTE MÃ JSON HOẶC IMPORT FILE VÀO N8N CANVAS
- **Cách A (Dán trực tiếp):** Bấm nút **1-Click Copy Prompt** ở khung mã bên dưới $\rightarrow$ Mở giao diện n8n Canvas $\rightarrow$ Nhấn tổ hợp phím **Ctrl + V** (hoặc Cmd + V trên Mac).
- **Cách B (Import từ File):** Bấm nút **Tải xuống** ở bên dưới để lấy file `.json` về máy $\rightarrow$ Trên menu n8n chọn **Workflows $\rightarrow$ Import from File**.
- **Tải File Workflow n8n:** [📥 Tải Xuống File Workflow n8n JSON (workflow_buoi_6_chatbot_telegram.json)](/workflow_buoi_6_chatbot_telegram.json)

```json
{
  "name": "Buổi 6 - Trợ Lý AI Siêu Năng Lực Telegram Sam Bot (Multi-Tool Agentic AI)",
  "nodes": [
    {
      "parameters": {
        "updates": [
          "message"
        ],
        "additionalFields": {}
      },
      "id": "ffa31c9e-72e5-47a8-85bb-736e0987d5e2",
      "name": "Receive Message",
      "type": "n8n-nodes-base.telegramTrigger",
      "typeVersion": 1.1,
      "position": [
        -640,
        608
      ],
      "credentials": {
        "telegramApi": {
          "id": "",
          "name": "Telegram account"
        }
      }
    },
    {
      "parameters": {
        "rules": {
          "values": [
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "f6d0a607-e0ad-49ba-9987-10ad2889b536",
                    "leftValue": "={{ $json.message.photo }}",
                    "rightValue": "",
                    "operator": {
                      "type": "array",
                      "operation": "exists",
                      "singleValue": true
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "image"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "2a9d7a90-7f2e-4228-84df-6476a2534a04",
                    "leftValue": "={{ $json.message.voice.file_id }}",
                    "rightValue": "",
                    "operator": {
                      "type": "string",
                      "operation": "exists",
                      "singleValue": true
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "voice"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json.message.text }}",
                    "rightValue": "",
                    "operator": {
                      "type": "string",
                      "operation": "exists",
                      "singleValue": true
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "text"
            }
          ]
        },
        "options": {
          "fallbackOutput": "extra"
        }
      },
      "id": "402eb062-8141-4770-aeaa-aef59f237eb8",
      "name": "Switch",
      "type": "n8n-nodes-base.switch",
      "typeVersion": 3.2,
      "position": [
        -416,
        608
      ]
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "={{ $json.message.text }}",
        "options": {
          "systemMessage": "You are a helpful assistant named Sam. You communicate in a friendly, concise manner. Always format your responses using HTML tags for formatting where appropriate (e.g. <b>bold</b>, <i>italic</i>, <code>code</code>, <a href=\"...\">links</a>, etc.). DO NOT use Markdown syntax such as **bold** or *italic*."
        }
      },
      "id": "2f42a66e-eb58-4509-9fd9-3172e2cf574a",
      "name": "AI Agent",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 1.7,
      "position": [
        -160,
        608
      ]
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "value": "gpt-4o-mini",
          "mode": "list",
          "cachedResultName": "gpt-4o-mini"
        },
        "options": {}
      },
      "id": "fe7e3240-3f74-4b53-ae62-a3cece9c73ef",
      "name": "OpenAI Chat Model",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1.2,
      "position": [
        -288,
        832
      ],
      "credentials": {
        "openAiApi": {
          "id": "",
          "name": "OpenAI API account"
        }
      }
    },
    {
      "parameters": {
        "sessionIdType": "customKey",
        "sessionKey": "={{ $('Receive Message').first().json.message.chat.id }}"
      },
      "id": "766ee6eb-1b15-46ae-886f-578b7bdcffca",
      "name": "Window Buffer Memory",
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "typeVersion": 1.3,
      "position": [
        -160,
        832
      ]
    },
    {
      "parameters": {
        "operation": "getAll",
        "limit": 5,
        "simple": false,
        "filters": {
          "readStatus": "unread"
        }
      },
      "id": "893c52e8-5f25-4c07-b352-2fb9fa1ef376",
      "name": "Get Emails",
      "type": "n8n-nodes-base.gmailTool",
      "typeVersion": 2.1,
      "position": [
        0,
        832
      ],
      "credentials": {
        "gmailOAuth2": {
          "id": "",
          "name": "Gmail account"
        }
      }
    },
    {
      "parameters": {
        "sendTo": "={{ $fromEmail }}",
        "subject": "={{ $subject }}",
        "message": "={{ $messageText }}",
        "options": {}
      },
      "id": "b3e0c058-2975-430a-9d95-e2448378ee01",
      "name": "Send Email",
      "type": "n8n-nodes-base.gmailTool",
      "typeVersion": 2.1,
      "position": [
        128,
        832
      ],
      "credentials": {
        "gmailOAuth2": {
          "id": "",
          "name": "Gmail account"
        }
      }
    },
    {
      "parameters": {
        "operation": "getAll",
        "calendar": {
          "__rl": true,
          "value": "primary",
          "mode": "list"
        },
        "returnAll": true,
        "options": {}
      },
      "id": "e4587c67-bf14-41d9-83bc-bd1423403332",
      "name": "Get Calendar",
      "type": "n8n-nodes-base.googleCalendarTool",
      "typeVersion": 1.3,
      "position": [
        256,
        832
      ],
      "credentials": {
        "googleCalendarOAuth2Api": {
          "id": "",
          "name": "Google Calendar account"
        }
      }
    },
    {
      "parameters": {
        "calendar": {
          "__rl": true,
          "value": "primary",
          "mode": "list"
        },
        "start": "={{ $startTime }}",
        "end": "={{ $endTime }}",
        "additionalFields": {
          "summary": "={{ $title }}"
        }
      },
      "id": "a9042b78-43d9-4fa2-b52e-ec56efd8a11f",
      "name": "Set Calendar",
      "type": "n8n-nodes-base.googleCalendarTool",
      "typeVersion": 1.3,
      "position": [
        384,
        832
      ],
      "credentials": {
        "googleCalendarOAuth2Api": {
          "id": "",
          "name": "Google Calendar account"
        }
      }
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "27cfb62a-89bc-4340-84eb-47535fa324bb",
      "name": "Google Search",
      "type": "n8n-nodes-base.serpApi",
      "typeVersion": 1,
      "position": [
        512,
        832
      ],
      "credentials": {
        "serpApi": {
          "id": "",
          "name": "SerpAPI account"
        }
      }
    },
    {
      "parameters": {
        "resource": "image",
        "model": "gpt-4o-mini",
        "prompt": "={{ $json.message.caption || 'Describe this image' }}",
        "options": {}
      },
      "id": "c1f77d34-9721-419b-a342-990c0ef7ab85",
      "name": "OpenAI Vision",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "typeVersion": 1.6,
      "position": [
        -160,
        384
      ],
      "credentials": {
        "openAiApi": {
          "id": "",
          "name": "OpenAI API account"
        }
      }
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "ec3a884f-480f-4462-9437-a7de0faed372",
              "name": "output",
              "value": "={{ $json.content }}",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "id": "f83d0b37-7b3e-4d6b-b697-3cb48714d398",
      "name": "Format Vision Output",
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        80,
        384
      ]
    },
    {
      "parameters": {
        "chatId": "={{ $('Receive Message').first().json.message.chat.id }}",
        "text": "={{ $json.output }}",
        "additionalFields": {
          "parse_mode": "HTML"
        }
      },
      "id": "5735dea1-8550-4e3e-9866-5929468ee975",
      "name": "Send Telegram Response",
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        352,
        608
      ],
      "credentials": {
        "telegramApi": {
          "id": "",
          "name": "Telegram account"
        }
      }
    }
  ],
  "connections": {
    "Receive Message": {
      "main": [
        [
          {
            "node": "Switch",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Switch": {
      "main": [
        [
          {
            "node": "OpenAI Vision",
            "type": "main",
            "index": 0
          }
        ],
        [],
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Window Buffer Memory": {
      "ai_memory": [
        [
          {
            "node": "AI Agent",
            "type": "ai_memory",
            "index": 0
          }
        ]
      ]
    },
    "Get Emails": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Send Email": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Get Calendar": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Set Calendar": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Google Search": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "AI Agent": {
      "main": [
        [
          {
            "node": "Send Telegram Response",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Vision": {
      "main": [
        [
          {
            "node": "Format Vision Output",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Format Vision Output": {
      "main": [
        [
          {
            "node": "Send Telegram Response",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "settings": {
    "executionOrder": "v1"
  }
}
```

#### BƯỚC 2: NỐI TÀI KHOẢN CREDENTIALS CHO NÓ
- Click đúp vào các node **Receive Message** và **Send Telegram Response** $\rightarrow$ Chọn Credential `Telegram account`.
- Click đúp vào các node **OpenAI Chat Model** và **OpenAI Vision** $\rightarrow$ Chọn Credential `OpenAI API account`.
- Click đúp vào node **Google Search** $\rightarrow$ Chọn Credential `SerpAPI account`.
- Click đúp vào các node **Get/Send Email** và **Get/Set Calendar** $\rightarrow$ Chọn Credential `Gmail` và `Google Calendar`.

#### BƯỚC 3: KÍCH HOẠT VÀ CHẠY THỬ
- Bấm nút **`Publish`** ở góc trên cùng bên phải n8n Canvas chuyển sang trạng thái **`🟢 Published`** (Active).
- Mở ứng dụng Telegram trên điện thoại nhắn tin trực tiếp cho Bot để trải nghiệm!

---

=== SUBTAB: 🛠️ Cách 2: Hướng Dẫn Dựng Thủ Công Từng Bước (Step-by-Step UI) ===

### GIAI ĐOẠN 1: KHỞI TẠO LUỒNG NHẬN TIN VÀ PHÂN LOẠI (TRIGGER & ROUTER)

- **Mục tiêu:** Nhận tin nhắn Telegram real-time và phân loại dữ liệu đầu vào (Văn bản Text hay Hình ảnh Image).

#### 1. Thêm Node Kích Hoạt Telegram Trigger (`Receive Message`)
- Thêm node **Telegram Trigger** $\rightarrow$ Chọn `Credential for Telegram API`.
- Mục **Trigger On**: Chọn `Message`.

#### 2. Thêm Node Phân Loại Dữ Liệu (`Switch Node`)
- Thêm node **Switch** và nối từ `Receive Message` sang.
- Cấu hình 3 quy tắc phân nhánh:
  - **Nhánh Image**: Kiểm tra `{{ $json.message.photo }}` tồn tại (operator: *exists*).
  - **Nhánh Voice**: Kiểm tra `{{ $json.message.voice.file_id }}` tồn tại (operator: *exists*).
  - **Nhánh Text**: Kiểm tra `{{ $json.message.text }}` tồn tại (operator: *exists*).

---

### GIAI ĐOẠN 2: DỰNG AI AGENT VỚI 5 SIÊU CÔNG CỤ (MULTI-TOOL AGENTIC AI)

- **Mục tiêu:** Dựng bộ não AI Agent trung tâm có khả năng tự động lựa chọn công cụ phù hợp để xử lý yêu cầu.

#### 1. Cấu Hình Node AI Agent
- Thêm node **AI Agent** và nối nhánh **Text** từ `Switch Node` sang.
- Mục **Prompt Type**: Chọn `Define below`.
- Mục **Text**: `={{ $json.message.text }}`
- Mục **System Message**:
  ```text
  You are a helpful assistant named Sam. You communicate in a friendly, concise manner. Always format your responses using HTML tags for formatting where appropriate (e.g. <b>bold</b>, <i>italic</i>, <code>code</code>, <a href="...">links</a>, etc.). DO NOT use Markdown syntax such as **bold** or *italic*.
  ```

#### 2. Gắn Bộ Não & Bộ Nhớ Hội Thoại
- Gắn sub-node **OpenAI Chat Model** (Model: `gpt-4o-mini`).
- Gắn sub-node **Window Buffer Memory** (Session Key: `={{ $('Receive Message').first().json.message.chat.id }}`).

#### 3. Gắn 5 Siêu Công Cụ (Tools)
- 📧 **Tool 1 (Get Emails)**: Gmail Tool $\rightarrow$ Operation `Get All` (Limit: 5 unread emails).
- 📧 **Tool 2 (Send Email)**: Gmail Tool $\rightarrow$ Operation `Send`.
- 📅 **Tool 3 (Get Calendar)**: Google Calendar Tool $\rightarrow$ Operation `Get All`.
- 📅 **Tool 4 (Set Calendar)**: Google Calendar Tool $\rightarrow$ Operation `Create`.
- 🌐 **Tool 5 (Google Search)**: SerpAPI Tool.

---

### GIAI ĐOẠN 3: DỰNG NHÁNH XỬ LÝ HÌNH ẢNH (VISION AI)

- **Mục tiêu:** Phân tích nội dung hình ảnh khi người dùng gửi ảnh trên Telegram.

1. Thêm node **OpenAI Vision** và nối từ nhánh **Image** của `Switch Node` sang.
2. Model: Select `gpt-4o-mini`.
3. Prompt: `={{ $json.message.caption || 'Describe this image' }}`
4. Thêm node **Format Vision Output** (Set node) để đưa dữ liệu kết quả về biến `{{ $json.content }}`.

---

### GIAI ĐOẠN 4: PHẢN HỒI TIN NHẮN TELEGRAM (HTML FORMATTER)

- **Mục tiêu:** Gửi phản hồi chuẩn đẹp về Telegram không bị lỗi Markdown entity parsing.

1. Thêm node **Send Telegram Response** (Telegram Node).
2. Chat ID: `={{ $('Receive Message').first().json.message.chat.id }}`
3. Text: `={{ $json.output }}`
4. Additional Fields $\rightarrow$ **Parse Mode**: Chọn **`HTML`**.

---

## 🧪 HƯỚNG DẪN TEST HOÀN CHỈNH (9 KỊCH BẢN CHECKLIST)

Đảm bảo Workflow đã được chuyển sang trạng thái **`🟢 Published`** (Active) trên n8n. Mở ứng dụng Telegram nhắn tin trực tiếp cho Bot Sam để kiểm tra 9 kịch bản:

### 1. Nhánh Text cơ bản (Chào hỏi)
* **Gửi**: `hello`
* **Mong đợi**: Bot trả lời thân thiện, xưng tên Sam. Chữ viết hiển thị chuẩn HTML đẹp mắt.

### 2. Test Định Dạng HTML (Formatting)
* **Gửi**: `Liệt kê giúp tôi 5 mẹo tiết kiệm tiền, có in đậm tiêu đề mỗi mục`
* **Mong đợi**: Danh sách hiển thị gọn gàng, tiêu đề được in đậm bằng thẻ `<b>`, gạch đầu dòng dùng dấu `-`. Không lộ ký tự Markdown thô.

### 3. Nhánh Gmail — Đọc Email Chưa Đọc (Tool Get Emails)
* **Gửi**: `Kiểm tra email chưa đọc của tôi`
* **Mong đợi**: Bot tự gọi Tool Gmail trích xuất tối đa 5 email UNREAD trong hộp thư INBOX, tóm tắt người gửi và tiêu đề.

### 4. Nhánh Gmail — Gửi Email Tự Động (Tool Send Email)
* **Gửi**: `Gửi email tới [email_cua_ban@gmail.com] với tiêu đề "Test Bot Sam" và nội dung "Đây là email thử nghiệm từ Sam"`
* **Mong đợi**: Bot xác nhận đã gửi email thành công $\rightarrow$ Kiểm tra hộp thư đến nhận được email.

### 5. Nhánh Google Calendar — Xem Lịch Làm Việc (Tool Get Calendar)
* **Gửi**: `Hôm nay tôi có lịch gì không?` hoặc `Xem lịch tuần này`
* **Mong đợi**: Bot tra cứu và liệt kê các sự kiện có trên Google Calendar của bạn.

### 6. Nhánh Google Calendar — Tạo Sự Kiện Mới (Tool Set Calendar)
* **Gửi**: `Tạo sự kiện "Họp nhóm Dự án AI" ngày mai lúc 15h đến 16h`
* **Mong đợi**: Bot tự gọi Tool tạo sự kiện trên Google Calendar và gửi thông báo xác nhận đã thêm vào lịch.

### 7. Nhánh Google Search — Tra Cứu Real-time (Tool SerpAPI)
* **Gửi**: `Tìm giúp tôi giá Bitcoin hôm nay` hoặc `Tin tức công nghệ mới nhất về n8n`
* **Mong đợi**: Bot dùng SerpAPI tìm kiếm web real-time và tổng hợp câu trả lời chính xác.

### 8. Nhánh Image — Thị Giác AI (OpenAI Vision)
* **Gửi**: *[Gửi một tấm ảnh bất kỳ lên Telegram]* kèm caption: `Mô tả tấm ảnh này giúp tôi`
* **Mong đợi**: Bot nhận diện ảnh qua GPT-4o-mini Vision và trả lời chi tiết nội dung bức ảnh.

### 9. Test Bộ Nhớ Hội Thoại (Window Buffer Memory)
* **Gửi lần 1**: `Tên tôi là Minh, nhớ nhé`
* **Gửi lần 2**: `Tên tôi là gì?`
* **Mong đợi**: Bot ghi nhớ Chat ID và trả lời chính xác tên "Minh".

---

## 📌 GIỚI HẠN LƯU Ý KHI TEST (KNOWN LIMITATIONS)
* **Tin nhắn thoại (Voice)**: Nhánh voice hiện chưa cấu hình Google Speech-to-Text nên sẽ giữ ở dạng mở rộng cho các buổi nâng cao tiếp theo.
* **Tra cứu Contacts Vector Store**: Node tra cứu vector Pinecone đang ở dạng mở rộng tùy chọn.

---

## III. CHECKLIST NGHIỆM THU BÀI NỘP (OKR N8N WORKFLOW)

- [ ] **Credentials Connected**: Đã kết nối đủ 4 tài khoản (Telegram, OpenAI, SerpAPI, Google OAuth2) hiển thị màu xanh lá.
- [ ] **Multi-Tool Triggering**: Bot tự động kích hoạt đúng Tool khi hỏi về Email, Calendar, Google Search.
- [ ] **HTML Formatting**: Tin nhắn gửi về Telegram hiển thị đẹp mắt, thẻ in đậm `<b>` chuẩn, không bị rác Markdown syntax.
- [ ] **Vision Processing**: Bot nhận diện và mô tả đúng nội dung hình ảnh khi gửi ảnh lên Telegram.
- [ ] **Memory Persistence**: Bot ghi nhớ thông tin cá nhân của người dùng qua các lượt chat.
- [ ] **Kích hoạt 24/7**: Workflow được bật trạng thái **`🟢 Published`** (Active) trên n8n Cloud.
