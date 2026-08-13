# Buổi 7: Vibe Coding Chuẩn Kỹ Nghệ — Điều Khiển AI Agent Xây Dựng Ứng Dụng Tự Động Hóa (jcode + eurus-agent)

![Giao diện Vibe Coding Engine](/session_7.jpg)

## 📖 Tổng Quan Buổi Học
Không giống như các trào lưu "Vibe Coding" nhắm mắt gõ prompt ngô nghê dẫn đến vỡ code và đốt tiền Token, buổi học này trang bị cho bạn **Tư Duy Kỹ Nghệ Kiểm Soát AI Agent (Spec-Driven Agentic Engineering)**. 

Bạn sẽ học cách kết hợp bộ công cụ siêu tiết kiệm chi phí: **`jcode` CLI (Rust Engine)** + **OpenRouter (DeepSeek V3 / Qwen Coder)** + **`eurus-agent v2.4`** để tự tay xây dựng một ứng dụng web thực tế theo đúng **Happy Path** (chính xác, không lỗi, độc lập 100%, không phụ thuộc API bên thứ 3).

---

## 🧠 6 Từ Khóa Bản Chất Về Điều Khiển AI Agent (Core Mechanics)

Trước khi bắt tay vào gõ code, học viên BẮT BUỘC phải hiểu 6 khái niệm vật lý cốt lõi điều khiển hành vi của AI:

```text
 ┌────────────────────────────────────────────────────────────────────────┐
 │            6 TỪ KHÓA BẢN CHẤT CỦA AI AGENT ENGINEERING                 │
 └────────────────────────────────────────────────────────────────────────┘

 1. TOKEN (Đơn Vị Tiền Tệ & Tri Thức)
    └─ 1 Token ~ 3-4 ký tự tiếng Anh (Tiếng Việt/Code ~ 1-2 ký tự/token).
    └─ Chi phí & tốc độ của Agent tính 100% bằng số Token Input + Output.

 2. CONTEXT WINDOW (Cửa Sổ Bối Cảnh / Bộ Nhớ Ngắn Hạn)
    └─ Dung lượng RAM tối đa AI xử lý trong 1 phiên (Ví dụ: 128k - 200k tokens).
    └─ Cạm bẫy: Chat quá dài ➔ Cửa sổ bị phình ➔ AI bị "quên" phần đầu (Context Drift) ➔ Hỏng code!

 3. HALLUCINATION (Ảo Giác AI)
    └─ Hiện tượng AI tự bịa ra hàm không tồn tại hoặc sửa tràn ra ngoài yêu cầu.
    └─ Giải pháp: Ép 3 Điều Cấm Negative Space & Hợp đồng Spec để triệt tiêu ảo giác!

 4. TEMPERATURE (Độ Sáng Tạo / Độ Ngẫu Nhiên)
    └─ Thang đo từ 0.0 đến 1.0.
    └─ Lập trình & Kỹ thuật: BẮT BUỘC đặt Temperature = 0.0 - 0.2 (Chính xác, tuyệt đối không ngẫu hứng).

 5. MAX OUTPUT TOKEN (Giới Hạn Phản Hồi)
    └─ Số token tối đa AI được trả về trong 1 lượt (Ví dụ: 4,096 - 8,192 tokens).
    └─ Chống cạm bẫy: Bắt AI sửa code bằng khối Diff (Search & Replace) thay vì gõ lại cả file 5,000 dòng.

 6. PROMPT CACHING PHYSICS (Vật Lý Nạp Tiền Đề Cố Định)
    └─ Cơ chế giảm giá 95% chi phí API của OpenRouter / Anthropic / DeepSeek.
    └─ Điều kiện: Tiền đề đầu file (Prefix) phải là một dải Byte cố định liên tục (như AGENTS.md & active_context.md).
```

---

## 🎯 3 Trụ Cột Tư Duy Của Buổi Học

1. **Chống "Vibe Coding Ảo Giác" (Anti-Hallucination)**:
   - Không bắt AI đoán mò. Dùng **Hiến Pháp Router** và **Spec Hợp Đồng** để ép AI làm đúng 100% scope.
2. **Vùng Cấm An Toàn (Negative Space Boundaries)**:
   - Ép 3 Điều Cấm tuyệt đối để AI không bao giờ tự ý sửa tràn làm hỏng code cũ hay làm vỡ giao diện.
3. **Chu Trình Tự Động Hóa Đóng Gói (Auto-Pilot Teardown)**:
   - Sử dụng phím tắt tự nhiên `start` (nạp bối cảnh), `continue` (làm tiếp), `save` (tự test + tự update memory + tự git commit/push).

---

## 🛠️ Thiết Lập Môi Trường (Setup Tooling)

### 1. Cấu hình `jcode` CLI (Rust Engine <28MB RAM)
- Tải & Cài đặt `jcode` CLI.
- Nạp API Key OpenRouter (Chọn model `deepseek/deepseek-chat` hoặc `qwen/qwen-2.5-coder-32b` — Chi phí siêu rẻ chỉ ~$0.01 cho cả buổi học!).
- Đặt `temperature = 0.0` trong file `~/.jcode/config.toml` để đảm bảo code chính xác 100%.

### 2. Triển khai `eurus-agent v2.4` (1-Line Installer)
Mở Terminal tại thư mục dự án và chạy:
- **Windows (PowerShell)**:
  ```powershell
  irm https://raw.githubusercontent.com/EurusDevSec/eurus-agent/main/install.ps1 | iex
  ```
- **Linux / macOS (Bash)**:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/EurusDevSec/eurus-agent/main/install.sh | bash
  ```

---

## 🚀 Thực Hành Dự Án Thực Tế: AI Interactive Quiz & Exam Studio

Dự án mẫu thực chiến: Một **Ứng Dụng Tạo Đề Thi Trắc Nghiệm & Chấm Điểm Thông Minh (Single Page App)** giao diện Dark Mode chuẩn doanh nghiệp, chạy 100% độc lập trên trình duyệt!

```text
AI Interactive Quiz & Exam Studio/
├── 📖 Tab 1: Document & Lesson Ingestion (Dán văn bản / tài liệu bài học thô)
├── 🧩 Tab 2: AI Quiz Builder (AI tự bóc tách kiến thức & sinh bộ câu hỏi trắc nghiệm + đáp án chi tiết)
└── 🎯 Tab 3: Live Interactive Exam (Học viên vào làm bài trực tiếp có chấm điểm & giải thích real-time)
```

---

## 📋 Quy Trình Thực Thi Theo Happy Path (6 Bước Vàng)

### Bước 1: Khởi tạo bối cảnh (`start`)
Gõ từ khóa tự nhiên vào `jcode`:
```text
start
```
*(AI tự động quét dự án, nạp `active_context.md` và `ROADMAP.md` trong 0.5s)*.

### Bước 2: Tạo Hợp đồng Đặc tả (`/spec`)
Gõ:
```text
/spec Xây dựng AI Interactive Quiz & Exam Studio
```
*(AI sinh ra file `SPEC-01_Quiz_Studio.md` chứa Yêu cầu Gherkin, Schema dữ liệu và **3 Điều Cấm**: 1. Khai báo 0 external DB requirement, 2. Lưu bộ câu hỏi & điểm số qua LocalStorage, 3. Giao diện chuẩn Tailwind Dark Mode)*.

### Bước 3: Kỹ sư trưởng Phản biện (`/challenge`)
Gõ:
```text
/challenge
```
*(AI đóng vai Principal Engineer soi lỗ hổng giao diện và tự vá lại Spec)*.

### Bước 4: Lập Phương án Kỹ thuật (`/plan`)
Gõ:
```text
/plan
```
*(AI bẻ Ma Trận Task Mẹ & Task Con `[NEW]` kèm Micro-Assertions)*.

### Bước 5: Thi công mã nguồn (`/build`)
Gõ:
```text
/build
```
*(AI xuất khối Diff Search & Replace gõ code thực tế, tự kích hoạt Spec-Reflector đồng bộ 2 chiều)*.

### Bước 6: Đóng gói & Lưu trữ (`save`)
Gõ từ khóa tự nhiên:
```text
save
```
*(AI TỰ ĐỘNG: Chạy test ➔ Cập nhật `active_context.md` ➔ Git commit & push ➔ Trả ra báo cáo tóm tắt thay đổi!)*

---

## 💡 Bài Học Rút Ra Dành Cho Học Viên
- Vibe Coding thành công **không nằm ở số lượng code AI viết ra**, mà nằm ở **Tư duy Khống chế Ranh giới và Quản lý Bối cảnh của Lập trình viên**!
- Hiểu rõ 6 khái niệm bản chất (`Token`, `Context Window`, `Hallucination`, `Temperature = 0.0`, `Max Output Token`, `Prompt Caching`) giúp bạn làm chủ 100% mọi AI Agent trên thị trường!
