# 🤖 Bài 2: n8n AI Summarizer sang Telegram / Slack

![ảnh Kết quả cuối cùng](image-1.png)

### Hướng dẫn toàn tập: Xây dựng hệ thống AI News Intelligence Digest trên n8n

Dưới đây là tài liệu kỹ thuật chi tiết để xây dựng hệ thống tổng hợp tin tức AI News Intelligence Digest, được thiết kế cho luồng chạy tự động hằng ngày.

---

### Phần 1: Chuẩn bị tài khoản và kết nối

Để hệ thống vận hành, bạn cần chuẩn bị sẵn các thông tin xác thực (Credentials) trong n8n:

* Tài khoản **Google Gemini (PaLM) API**.

* Tài khoản **Google Sheets OAuth2 API**.

* Tài khoản **Telegram API** (thông qua BotFather).

* Tài khoản **Gmail OAuth2**.

---

### Phần 2: Cấu hình từng Node chi tiết

**Bước 1: Thiết lập lịch chạy tự động (Schedule Trigger)**

* Thêm node **Schedule Trigger**.

* Tại mục **Rule**, thiết lập **Interval** để luồng chạy tự động vào lúc **7 giờ sáng** mỗi ngày (`triggerAtHour: 7`).

![Thiết lập Schedule Trigger](image-2.png)

**Bước 2: Khai báo danh sách nguồn tin (Code in JavaScript)**

* Thêm node **Code** (tên: `Code in JavaScript`) kết nối vào sau node Schedule Trigger.

* Dán đoạn mã sau vào node để lấy dữ liệu từ các nguồn RSS:

```javascript
return [
  { json: { url: 'https://vnexpress.net/rss/so-hoa.rss', source: 'VNExpress' } },
  { json: { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' } },
  { json: { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' } }
];

```

![Search node Code](image-4.png)

![Thiết lập code in Javascript](image-3.png)

**Bước 3: Thu thập nội dung (RSS Read)**

* Thêm node **RSS Read** nối tiếp vào node Code.

* Tại trường **URL**, bật chế độ Expression và nhập công thức: `{{ $json.url }}`.

![Thêm node RSS Read và Thêm URL](image-5.png)

![Thêm Filter](image-6.png)
**Bước 4: Bộ lọc bài viết trong 24 giờ (Filter)**

* Thêm node **Filter**.

* **Left Value**: `{{ $json.isoDate }}`.

* **Operator**: Chọn `After` (thuộc nhóm dateTime).

* **Right Value**: `{{ $now.minus({hours: 24}) }}`.

![Thiết lập Left Value và Right Value](image-7.png)

=> Ý nghĩa luôn lọc các tin mới nhất lấy sau thời điểm 24h trước

**Bước 5: Gom nhóm dữ liệu cho AI (Aggregate)**

* Thêm node **Aggregate**.

* Tại mục **Fields To Aggregate**, thêm 3 trường dữ liệu cần thiết:

* Trường 1: `title`.

* Trường 2: `contentSnippet`.

* Trường 3: `link`.

![Kéo các 3 trường title, contentSnippet, link sang ](image-8.png)

![Trạng thái sau khi Thêm Aggreate](image-9.png)

**Bước 6: Xử lý bằng AI (Message a model - Google Gemini)**

* Thêm node **Google Gemini**.
![Chọn node Gemini](image-10.png)

![Chọn Create a Credentials](image-11.png)

![vào Studio ai tạo API key](image-12.png)

* **Model ID**: Chọn `models/gemini-3-flash-preview`.

* **Output Content as JSON**: Phải bật tính năng này (`jsonOutput: true`).

* Tại mục **Messages**, dán cấu trúc Prompt này vào bằng chế độ Expression:

![setup model ID, json, messeages](image-13.png)

```text
Bạn là một chuyên gia phân tích tin tức công nghệ. Dưới đây là danh sách các bài báo trong ngày.
Nhiệm vụ của bạn:
1. Phát hiện và bỏ qua các bài viết trùng lặp nội dung.
2. Chấm điểm độ quan trọng (1-10) cho từng sự kiện.
3. Chọn ra TOP 5 sự kiện công nghệ đáng chú ý nhất.
4. Tóm tắt mỗi sự kiện ngắn gọn từ 2-3 câu bằng tiếng Việt.
5. Phân loại chủ đề (VD: AI, Chip, An ninh mạng, Startup, Big Tech...).

ĐẦU RA BẮT BUỘC:
Chỉ trả về chuỗi JSON chuẩn định dạng Array, tuyệt đối không kèm markdown (```json) hay bất kỳ câu chữ nào khác ngoài mảng JSON này.

Cấu trúc JSON yêu cầu:
[
  {
    "title": "Tiêu đề tiếng Việt",
    "category": "Chủ đề",
    "score": 9,
    "summary": "Tóm tắt...",
    "link": "Link bài báo"
  }
]

DỮ LIỆU ĐẦU VÀO:
Danh sách Tiêu đề: 
{{ $json.title }}

Danh sách Tóm tắt gốc: 
{{ $json.contentSnippet }}

Danh sách Link: 
{{ $json.link }}

```

**Bước 7: Bóc tách dữ liệu JSON (Code in JavaScript1)**

* Thêm node **Code** (tên: `Code in JavaScript1`).

* Dán đoạn mã dưới đây để phân tách kết quả của AI thành các items độc lập:

```javascript
// Lấy chuỗi văn bản JSON từ kết quả của Gemini
const rawText = $input.first().json.content.parts[0].text;

// Chuyển đổi chuỗi văn bản đó thành một mảng (Array) thực thụ
const parsedData = JSON.parse(rawText);

// Trả về mảng này để n8n tự động tách thành các items (dòng) riêng biệt
return parsedData;

```

![Thêm code javascript](image-14.png)

**Bước 8: Lưu trữ lịch sử (Append or update row in sheet)**

* Thêm node **Google Sheets**.
![Thêm node Google Sheets](image-15.png)

![Tạo sheet với tên AI Tech Digest và các cột](image-16.png)

* **Operation**: Chọn `Append or Update Row`.

* **Document ID** & **Sheet Name**: Chọn bảng tính "AI Tech Digest" và trang tính tương ứng của bạn.

* **Column to match on** (Cột đối chiếu): Chọn `Link`.

* **Columns Mapping** (Ghép dữ liệu vào các cột) sử dụng Expression:

* `Link`: `{{ $json.link }}`.

* `Ngày`: `{{ $now.setZone('Asia/Ho_Chi_Minh').toFormat('dd/MM/yyyy') }}`.

* `Tiêu đề`: `{{ $json.title }}`.

* `Chủ đề`: `{{ $json.category }}`.

* `Điểm`: `{{ $json.score }}`.

* `Tóm tắt`: `{{ $json.summary }}`.

![Thiết lập Operation, Document ID, Column to match on, Columns Mapping](image-17.png)

**Bước 9: Khởi tạo định dạng bản tin đa nền tảng (Code in JavaScript2)**

* Thêm node **Code** (tên: `Code in JavaScript2`).

* Dán mã sau để soạn sẵn một phiên bản cho Telegram (dùng `\n`) và một phiên bản cho Email (dùng thẻ `<br>`):

```javascript
// Lấy ngày hiện tại
const today = $now.setZone('Asia/Ho_Chi_Minh').toFormat('dd/MM/yyyy');

// Tạo 2 biến chứa tin nhắn cho Tele (dùng \n) và Email (dùng <br>)
let teleMsg = `<b>🧠 BẢN TIN TECH DIGEST (${today})</b>\n\n`;
let emailMsg = `<h2>🧠 BẢN TIN TECH DIGEST (${today})</h2><br>`;

$input.all().forEach((item, index) => {
    const data = item.json;
    
    // Soạn nội dung chung
    const title = `<b>${index + 1}. [${data['Chủ đề']}] ${data['Tiêu đề']}</b> (Điểm: ${data['Điểm']}/10)`;
    const summary = `💡 ${data['Tóm tắt']}`;
    const link = `🔗 <a href="${data['Link']}">Đọc bài gốc</a>`;

    // Ghép vào bản Telegram
    teleMsg += `${title}\n${summary}\n${link}\n\n`;

    // Ghép vào bản Email
    emailMsg += `${title}<br>${summary}<br>${link}<br><br>`;
});

// Trả về cả 2 phiên bản và ngày tháng để dùng cho các node sau
return [{ 
    json: { 
        telegram_message: teleMsg, 
        email_message: emailMsg,
        today: today
    } 
}];
```

![Thêm node javascript](image-18.png)

**Bước 10: Phân phối thông báo (Chia nhánh song song)**
Từ đầu ra của Bước 9, bạn kéo ra 2 nhánh để thực hiện gửi tin qua 2 kênh cùng lúc:

* **Nhánh 1: Gửi qua Telegram (Send a text message)**
* Thêm node **Telegram**.
![Thêm node Telegram](image-23.png)
* **Chuẩn bị kết nối và Lấy Chat ID (Rất quan trọng):**

1. **Tạo Bot:** Trên ứng dụng Telegram, tìm kiếm **`@BotFather`**, gõ lệnh `/newbot` và làm theo hướng dẫn để tạo một con bot mới. Sao chép đoạn API Token mà BotFather cung cấp để tạo Credential (kết nối) trong node Telegram của n8n.
![Tạo @BotFather lấy Access Token](image-24.png)

![Dán Access Token từ @BotFather vào Credential](image-25.png)
2. **Lấy ID cá nhân:** Tiếp tục tìm kiếm bot **`@userinfobot`** trên Telegram, bấm **Start**. Bot sẽ trả về cho bạn một dãy số ID cá nhân (Ví dụ: `203943049`).
![Lấy ID](image-26.png)
3. **Kích hoạt Bot:** Tìm tên con bot bạn vừa tạo ở bước 1, bấm **Start** để trò chuyện với nó. *(Thao tác này bắt buộc để cấp quyền cho bot được phép nhắn tin vào máy bạn).*

* **Chat ID:** Nhập dãy số ID cá nhân bạn vừa lấy được từ `@userinfobot` vào ô này.
* **Text:** Bật chế độ Expression (`fx`) và nhập: `={{ $json.telegram_message }}`.
* **Additional Fields:** Bấm Add Field $\rightarrow$ Thêm `Parse Mode` và chọn **`HTML`** (Bước này giúp tin nhắn hiển thị chữ in đậm và link rút gọn đẹp mắt).
![lấy id cá nhân, kích hoạt bot, dán Chat ID, Text, Additional Fields](image-27.png)

![Kết quả](image-28.png)

* **Nhánh 2: Gửi qua Gmail (Send a message)**
* Thêm node **Gmail**.
![Thêm node Gmail](image-19.png)

* **Send To**: Nhập địa chỉ nhận (ví dụ: `nguyenvana@gmail.com`).

* **Subject**: `🧠 Bản tin Tech Digest ({{ $json.today }})`.

* **Message**: `{{ $json.email_message }}`.
![Thiết lập Send To, Subject, Message](image-20.png)

![Kết quả bot gửi Gmail](image-21.png)
Sau khi hoàn tất toàn bộ các bước, bạn chỉ cần bật công tắc góc phải màn hình từ `Inactive` sang `Active` (`active: true` trong hệ thống) để workflow bắt đầu tự vận hành hằng ngày.

Kết quả cuối cùng
![Kết quả cuối cùng](image-29.png)
