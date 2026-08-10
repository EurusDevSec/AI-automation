# Bài 1: Tự Động Hóa Content AI, Tạo Ảnh & Đăng Fanpage Facebook (Kiểm Duyệt Telegram)

![Sơ đồ tổng quan Workflow n8n Facebook Auto Content](image-1.png)

## 📌 I. MỤC TIÊU VÀ CẤU TRÚC WORKFLOW

Hệ thống giúp học viên tự động hóa toàn bộ quy trình tiếp thị nội dung trên mạng xã hội theo mô hình 2 nhánh chuyên nghiệp:

* **Nhánh 1 (Tạo nội dung & Gửi bản nháp)**: Lấy xu hướng từ Google Trends $\rightarrow$ AI Gemini chọn từ khóa & viết bài $\rightarrow$ Tạo link ảnh AI tự động $\rightarrow$ Lưu vào Google Sheets $\rightarrow$ Bắn bản nháp sang Telegram kèm nút bấm duyệt.
* **Nhánh 2 (Kích hoạt & Đăng Fanpage)**: Quản trị viên bấm nút duyệt trên Telegram $\rightarrow$ Webhook kích hoạt $\rightarrow$ Lấy nội dung từ Google Sheets $\rightarrow$ Đăng bài kèm ảnh trực tiếp lên Fanpage Facebook qua Meta Graph API.

---

## 🛠️ II. CHUẨN BỊ TRƯỚC KHI CẤU HÌNH

1. **Google Sheets**: Tạo 1 file tên `Auto post Fb` chứa 4 cột tiêu đề tại dòng 1: `ID`, `Keyword`, `Content`, `ImageURL`.
2. **Telegram Bot**: Dùng `@BotFather` tạo con bot mới, lấy **Bot Token** và **Chat ID** cá nhân/nhóm.
3. **Google Gemini API Key**: Khởi tạo API Key miễn phí tại Google AI Studio.
4. **Facebook Fanpage**: Đảm bảo có quyền Admin Fanpage, lấy **Page ID** và **Page Access Token** từ Meta Graph API Explorer.

---

## ⚙️ III. HƯỚNG DẪN CẤU HÌNH CHI TIẾT TỪNG NODE

### 🟢 NHÁNH 1: TỰ ĐỘNG TẠO VÀ CHUẨN BỊ BẢN NHÁP

#### Node 1: Schedule Trigger (Kích hoạt theo giờ)
* **Type**: `Schedule Trigger`
* **Trigger Interval**: `Hours`
* **Trigger at Hour**: `7` (chạy tự động vào 7 giờ sáng hàng ngày).

#### Node 2: RSS Read (Lấy xu hướng từ Google)
* **Type**: `RSS Read`
* **URL**: `https://trends.google.com/trending/rss?geo=VN` (Quét tin tức xu hướng mới nhất tại Việt Nam).

#### Node 3: Limit (Giới hạn số lượng tin)
* **Type**: `Limit`
* **Max Items**: `3` (Chỉ lấy 3 tin tức nổi bật nhất để xử lý).

#### Node 4: Aggregate (Gom dữ liệu)
* **Type**: `Aggregate`
* **Fields To Aggregate**: Thêm item `fieldToAggregate = title` (Gom 3 tiêu đề tin tức thành một danh sách duy nhất).

#### Node 5: Message a model (AI Gemini viết bài)

![Cấu hình Node Gemini AI Write Content](image-2.png)

* **Type**: `Google Gemini` (`@n8n/n8n-nodes-langchain.googleGemini`)
* **Model**: `models/gemini-3-flash-preview`
* **Prompt Content (Chế độ Expression)**:

```prompt
=Bạn là một chuyên gia về DevOps và Cloud Computing. Dưới đây là 3 từ khóa đang trending trên Google:
{{ $json.title }}

Nhiệm vụ của bạn:
1. Phân tích và chọn ra đúng 1 từ khóa có tiềm năng ứng dụng công nghệ/hạ tầng mạng nhất.
2. Viết một bài đăng mạng xã hội chuyên sâu dựa trên từ khóa đó (dưới 1200 ký tự). Bỏ qua các từ sáo rỗng. Tập trung đánh giá tác động kỹ thuật, tính khả dụng, hoặc tối ưu hóa tự động hóa.
3. Trình bày bài viết có câu Hook thu hút, dùng ký hiệu (•) cho các ý chính và kết thúc bằng một Call-to-action.

Trả về định dạng JSON BẮT BUỘC:
{
  "trending_keyword": "Từ khóa bạn chọn",
  "social_post": "Nội dung bài viết hoàn chỉnh..."
}
```

#### Node 6: Append or update row in sheet (Ghi dữ liệu vào Google Sheets)
* **Type**: `Google Sheets`
* **Operation**: `Append or Update`
* **Document**: Chọn file `Auto post Fb`
* **Sheet Name**: `Trang tính1`
* **Column to match on**: `ID`
* **Values to Send (Chuyển sang Expression)**:

```javascript
// Cột ID
={{ $execution.id }}

// Cột Keyword
={{ JSON.parse($json.content.parts[0].text.replace(/```json/gi, '').replace(/```/g, '').trim()).trending_keyword }}

// Cột Content
={{ JSON.parse($json.content.parts[0].text.replace(/```json/gi, '').replace(/```/g, '').trim()).social_post }}

// Cột ImageURL
=https://image.pollinations.ai/prompt/{{ encodeURIComponent("Tech illustration about " + JSON.parse($json.content.parts[0].text.replace(/```json/gi, '').replace(/```/g, '').trim()).trending_keyword) }}?width=1024&height=1024&nologo=true
```

#### Node 7: Send a text message (Gửi bản nháp qua Telegram)

![Nút bấm Duyệt Bài trên Telegram Bot](image-3.png)

* **Type**: `Telegram`
* **Chat ID**: Nhập ID tài khoản Telegram của bạn.
* **Text (Expression)**:

```html
=<b>🔥 BẢN NHÁP MỚI CẦN DUYỆT</b>

<b>Chủ đề:</b> {{ $json.Keyword }}

{{ $json.Content }}
```

* **Reply Markup**: `Inline Keyboard`
* **Inline Keyboard Buttons**:
  * **Text**: `✅ DUYỆT & ĐĂNG BÀI`
  * **URL (Expression)**: `https://<DOMAIN-N8N-CỦA-BẠN>/webhook-test/duyet-bai?id={{ $json.ID }}` (Thay đường dẫn Webhook thực tế vào).
* **Additional Fields**: Bật `Parse Mode` chọn `HTML`.

---

### 🔵 NHÁNH 2: LẮNG NGHE LỆNH DUYỆT VÀ ĐĂNG BÀI LÊN FACEBOOK

#### Node 8: Webhook (Cổng nhận lệnh duyệt)
* **Type**: `Webhook`
* **Path**: `duyet-bai`
* **HTTP Method**: `GET`

#### Node 9: Get row(s) in sheet (Tra cứu bài viết theo ID)
* **Type**: `Google Sheets`
* **Operation**: `Get Row(s)`
* **Document**: Chọn file `Auto post Fb`
* **Filter Values**:
  * **Lookup Column**: `ID`
  * **Lookup Value (Expression)**: `={{ $json.query.id }}` (Trích xuất ID gửi kèm từ URL Telegram).

#### Node 10: Facebook Graph API (Đăng bài kèm ảnh)

![Cấu hình Facebook Graph API Post Photo](image-4.png)

* **Type**: `Facebook Graph API`
* **HTTP Request Method**: `POST`
* **Graph API Version**: `v25.0` (hoặc phiên bản hiện tại)
* **Node**: Điền Page ID của bạn (ví dụ: `1028776643660761`).
* **Edge**: `photos` (Đăng bài dưới dạng ảnh).
* **Query Parameters**:
  * **Parameter 1**: `Name: message` $\rightarrow$ `Value (Expression): ={{ $json.Content }}`
  * **Parameter 2**: `Name: url` $\rightarrow$ `Value (Expression): ={{ $json.ImageURL }}`

---

## 🛠️ IV. BẢN ĐỒ TRÁNH BẪY LỖI CHO HỌC VIÊN (TROUBLESHOOTING)

| Hiện tượng lỗi | Nguyên nhân chính | Cách xử lý nhanh |
| :--- | :--- | :--- |
| **Facebook báo lỗi 403 Forbidden / Invalid Token** | Copy nhầm User Token cá nhân thay vì Page Access Token. | Trên trang Graph API Explorer, tại mục *User or Page*, bắt buộc bấm vào menu thả xuống và chọn chính xác tên Fanpage rồi mới copy token. |
| **Facebook báo lỗi #100 url should represent a valid URL** | Link ảnh bị dính dấu `=` thừa hoặc chứa ký tự tiếng Việt có dấu khiến URL bị gãy. | Kiểm tra lại ô `ImageURL` trong Google Sheets, bắt buộc bọc hàm `encodeURIComponent()` xung quanh từ khóa tiếng Việt. |
| **Google Sheets lỗi SyntaxError: Unexpected token** | Dữ liệu trả về từ Gemini có chứa ký hiệu mã markdown ```json ... ``` làm hỏng hàm `JSON.parse`. | Sử dụng đoạn mã làm sạch chuỗi: `.replace(/```json/gi, '').replace(/```/g, '').trim()` trước khi truyền vào `JSON.parse`. |
