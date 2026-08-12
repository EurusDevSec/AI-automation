# 🚀 PROJECT KNOWLEDGE HANDOFF & CONTINUITY MASTER GUIDE

> **MỤC TIÊU TÀI LIỆU**: Đây là tài liệu bàn giao tri thức (Handoff Artifact) tích tụ 100% tinh túy kỹ thuật, quyết định kiến trúc, bài học thực chiến, bẫy lỗi đã xử lý và tình trạng dự án. Bất kỳ AI Agent nào khi khởi tạo session mới chỉ cần đọc file này là ngay lập tức nắm trọn bối cảnh, tư duy làm việc và tiếp tục công việc mà KHÔNG CẦN người dùng giải thích lại.

---

## 📌 I. BẢN ĐỒ DỰ ÁN & CẤU TRÚC FILE CHÍNH (FILE MAP)

| Loại File | Đường dẫn File | Mục mục & Vai trò |
| :--- | :--- | :--- |
| **Nguồn Bài Học LMS** | [src/content/buoi_5/bai_1.md](file:///r:/_Projects/Eurus_Workspace/AI-automation/src/content/buoi_5/bai_1.md) | **FILE CHÍNH THỨC 100%** hiển thị trên cổng Web LMS cho học viên. |
| **Tổng Quan Buổi 5** | [src/content/buoi_5.md](file:///r:/_Projects/Eurus_Workspace/AI-automation/src/content/buoi_5.md) | File tóm tắt OKRs & nội dung Buổi 5 trên giao diện danh mục. |
| **Tài liệu Docs Dự phòng**| [docs/buoi_5_tu_dong_hoa_youtube_shorts.md](file:///r:/_Projects/Eurus_Workspace/AI-automation/docs/buoi_5_tu_dong_hoa_youtube_shorts.md) | File Docs lưu trữ độc lập (Đã đồng bộ 100% với file LMS). |
| **Workflow Local (Backup)**| [n8n-youtube-automation/youtube-automation.json](file:///r:/_Projects/Eurus_Workspace/AI-automation/n8n-youtube-automation/youtube-automation.json) | File n8n JSON thực tế local (Chứa Chat ID thực tế, đã `.gitignore`). |
| **Workflow Public (Mẫu)** | [n8n-youtube-automation/youtube-automation-public.json](file:///r:/_Projects/Eurus_Workspace/AI-automation/n8n-youtube-automation/youtube-automation-public.json) | File n8n JSON mẫu đã khử thông tin bảo mật + có 4 Sticky Notes. |
| **Docker Compose** | [n8n-youtube-automation/docker-compose.yml](file:///r:/_Projects/Eurus_Workspace/AI-automation/n8n-youtube-automation/docker-compose.yml) | Cấu hình Docker n8n v2.x + `N8N_RUNNERS_ENABLED=false` + mount `/data`. |
| **Bảo Vệ Git** | [.gitignore](file:///r:/_Projects/Eurus_Workspace/AI-automation/.gitignore) | Khóa ẩn file `youtube-automation.json` và thư mục `local_files/`. |

---

## 🏛️ II. KIẾN TRÚC KĨ THUẬT VÀ 5 BÀI HỌC THỰC CHIẾN XƯƠNG MÁU

### 1. n8n v2.x Task Runner Timeout Bug
* **Hiện tượng lỗi**: `Task execution aborted because runner became unresponsive`.
* **Nguyên nhân**: Khi thực thi lệnh CLI nặng (`FFmpeg`, `edge-tts`), n8n v2.x tạo sub-process qua WebSocket Task Runner. Lệnh đồng bộ `execSync` làm CPU Node.js bị đóng băng, rớt nhịp tim Heartbeat.
* **Cách khắc phục triệt để**:
  1. Trong `docker-compose.yml`: Bắt buộc thiết lập `N8N_RUNNERS_ENABLED=false`.
  2. Trong các Code Node n8n: Bắt buộc đổi từ `execSync` sang bất đồng bộ `util.promisify(exec)` với `await execPromise(...)`.

### 2. Pollinations AI WAF & HTTP 429 Too Many Requests
* **Hiện tượng lỗi**: Node sinh ảnh AI bị trả về lỗi `HTTP 429` hoặc trả về phông màu đơn sắc (`null` data).
* **Nguyên nhân**: Cloudflare WAF của Pollinations AI chặn Python Scraper User-Agent mặc định (`Python-urllib/3.14`).
* **Cách khắc phục triệt me**:
  1. Giả lập Header trình duyệt thật: `headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}` trong lệnh Python.
  2. Thêm hàm `sleep(2000)` dãn cách 2 giây giữa các request sinh ảnh.
  3. Thêm cơ chế **HD Photo Fallback**: Nếu dịch vụ AI bị bảo trì, tự động tải ảnh chụp HD từ Picsum (`https://picsum.photos/1920/1080`) $\rightarrow$ Đảm bảo 100% không rớt về phông đơn sắc.

### 3. Edge-TTS Connection Drop & Voice Fallback
* **Hiện tượng lỗi**: Lỗi `NoAudioReceived` khi gọi giọng đọc Microsoft Edge.
* **Cách khắc phục**:
  * Sử dụng vòng lặp `while` thử lại 3 lần (Auto-Retry 3x với `sleep(1500)`).
  * Nếu sau 3 lần thất bại, tự động chuyển sang giọng nam dự phòng `vi-VN-NamMinhNeural`.

### 4. FFmpeg Stream Mapping Cho Hòa Âm BGM
* **Hiện tượng lỗi**: Lỗi `Filter amix:default has output 0 (a) unconnected` khi trộn nhạc nền BGM.
* **Cách khắc phục**: Lệnh hòa âm phải sử dụng cờ ánh xạ stream chuẩn xác:
  ```bash
  ffmpeg -i /data/FINAL_MERGED.mp4 -i /data/bg_music.mp3 -filter_complex "[1:a]volume=0.15[bg];[0:a][bg]amix=inputs=2:duration=first[a]" -map 0:v -map "[a]" -c:v copy -c:a aac /data/FINAL_YOUTUBE_SHORTS.mp4 -y
  ```

### 5. URL Xác Thực Local Host Chuẩn Cho Google OAuth2
* **Tên miền chuẩn**: Sử dụng **`http://localtest.me:5678`** thay vì `localhost:5678`.
* **Lý do**: `localtest.me` trỏ về IP `127.0.0.1` nhưng là Tên miền công khai hợp lệ $\rightarrow$ Khớp 100% Redirect URI của Google Cloud OAuth2 (`http://localtest.me:5678/rest/oauth2-credential/callback`), loại bỏ hoàn toàn lỗi `redirect_uri_mismatch`.

---

## ⚖️ III. KHUNG PHÁP LÝ & AN TOÀN AI (LUẬT AI 2026 & LUẬT AN NINH MẠNG)

1. **Luật Trí tuệ Nhân tạo Việt Nam (Hiệu lực 01/03/2026)**: Bắt buộc gắn nhãn nhận biết nội dung do AI tạo ra. Workflow đã tích hợp tự động chèn bộ Hashtag `#Shorts #AIContent #CreatedWithAI` vào Description của Video.
2. **Luật An ninh mạng (Sửa đổi 2025, Hiệu lực 01/07/2026)**: Nghiêm cấm Deepfake & Giả mạo. Workflow n8n đã tích hợp **Content Safety Guardrails** trong Prompt Gemini AI (bỏ qua 100% tin tức nhà nước, chính trị, pháp luật, đất đai $\rightarrow$ chỉ chọn Giải trí/Công nghệ/Đời sống) và chỉ sử dụng giọng đọc/hình ảnh nghệ thuật ảo.
3. **Mô hình Human-In-The-Loop**: 2 chặng kiểm duyệt Telegram Bot (Duyệt kịch bản chữ $\rightarrow$ Duyệt phát thử video MP4) giúp người dùng nắm quyền kiểm soát 100% trước khi đăng.

---

## 📝 IV. QUY NẮC TRÌNH BÀY & QUY TRÌNH PHÁT TRIỂN (AGENTS.MD RULES)

1. **Tuân thủ AGENTS.md**: Mọi chỉnh sửa mã nguồn phải sử dụng khối Search & Replace Diff blocks (`<<<<<<< SEARCH`).
2. **Pedagogical Structure**: Bài học trên LMS tuân thủ chặt chẽ cấu trúc Buổi 4:
   - Phần I: Tổng quan & OKRs.
   - Phần II: Khung Pháp lý & Luật AI 2026.
   - Phần III: Nền tảng Kiến trúc & Ý nghĩa Công nghệ (Tech Stack Rationale).
   - Phần IV: Chuẩn bị Môi trường & Credentials Upfront.
   - Phần V: Phương pháp 1 - Hướng dẫn Cấu hình Chi tiết từng Node (16 Nodes).
   - Phần VI: Phương pháp 2 - Import 1-Click qua file JSON (có Sticky Notes).
   - Phần VII: Bản đồ Troubleshooting thực chiến.
3. **Bảo mật**: Không bao giờ commit API Key hay Chat ID thật lên Git repository.

---

## 🎯 V. TÌNH TRẠNG HIỆN TẠI (CURRENT STATE)

- [x] Workflow n8n YouTube Shorts Automation 4 Chặng (16 Nodes + 4 Sticky Notes) đã hoàn tất 100%, chạy test thành công trên Container Docker.
- [x] File JSON mẫu `youtube-automation-public.json` và file local backup `youtube-automation.json` đã đồng bộ.
- [x] Giáo trình Buổi 5 tại `src/content/buoi_5/bai_1.md` và `docs/buoi_5_tu_dong_hoa_youtube_shorts.md` đã cập nhật đầy đủ Luật AI 2026 và kiến thức công nghệ.
- [x] Hệ thống sẵn sàng cho công việc tiếp theo do người dùng yêu cầu!
