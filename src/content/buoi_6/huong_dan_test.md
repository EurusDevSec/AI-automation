Chuẩn bị
Đảm bảo workflow đang bật (Active) trên n8n.
Mở Telegram, vào chat với bot của bạn.
Node đang disabled (sẽ bỏ qua khi test): Contacts, Embeddings OpenAI, HTTP Request (voice), Generate Audio. Nghĩa là nhánh voice và tra cứu contacts qua Pinecone chưa hoạt động đầy đủ — xem phần "Giới hạn đã biết" ở cuối.

1. Nhánh Text cơ bản (đây là lỗi cũ đã sửa)
Gửi: hello
Mong đợi: Bot trả lời thân thiện, xưng tên Sam.
Kiểm tra quan trọng: Tin nhắn hiển thị bình thường, không bị lỗi và không thấy ký tự ** hay * thô. Chữ đậm phải hiển thị đúng dạng đậm (do dùng HTML). Đây chính là lỗi "can't parse entities" đã được khắc phục.
2. Test định dạng (ép bot dùng formatting)
Gửi: Liệt kê giúp tôi 5 mẹo tiết kiệm tiền, có in đậm tiêu đề mỗi mục
Mong đợi: Danh sách hiển thị gọn gàng, phần in đậm hiện đúng, các gạch đầu dòng dùng dấu -. Không lộ ký tự Markdown thô.
3. Nhánh Gmail — Đọc email (tool Get Emails)
Gửi: Kiểm tra email chưa đọc của tôi
Mong đợi: Bot tóm tắt tối đa 5 email UNREAD trong INBOX, kèm tên người gửi và địa chỉ email.
4. Nhánh Gmail — Gửi email (tool Send Email)
Gửi: Gửi email tới [email test của bạn] với tiêu đề "Test bot" và nội dung "Đây là email thử nghiệm từ Sam"
Mong đợi: Bot xác nhận đã gửi. Kiểm tra hộp thư đến của địa chỉ nhận.
5. Nhánh Calendar — Xem lịch (tool Get Calendar)
Gửi: Hôm nay tôi có lịch gì không? hoặc Xem lịch tuần này
Mong đợi: Bot liệt kê sự kiện trên Google Calendar (lịch <zeno11275@gmail.com>).
6. Nhánh Calendar — Tạo sự kiện (tool Set Calendar)
Gửi: Tạo sự kiện "Họp nhóm" ngày mai lúc 15h đến 16h
Mong đợi: Bot xác nhận đã tạo. Lưu ý: node Set Calendar hiện đang tạo trên lịch <sumit.bhimte@numerize.ai> (không phải lịch của bạn) — kiểm tra xem đây có đúng ý bạn không.
7. Nhánh Google Search (tool Google Search / SerpAPI)
Gửi: Tìm giúp tôi giá Bitcoin hôm nay hoặc Tin mới nhất về n8n
Mong đợi: Bot trả lời dựa trên kết quả tìm kiếm web.
8. Nhánh Image (gửi ảnh)
Gửi: Một tấm ảnh bất kỳ (có thể kèm caption như Mô tả ảnh này giúp tôi)
Mong đợi: Bot mô tả nội dung ảnh (dùng model gpt-5-mini vừa được sửa). Nếu không có caption, mặc định "Describe this image".
9. Test bộ nhớ hội thoại (Memory)
Gửi lần 1: Tên tôi là Minh, nhớ nhé
Gửi lần 2: Tên tôi là gì?
Mong đợi: Bot nhớ và trả lời "Minh" (memory lưu 20 lượt theo chat ID).
Giới hạn đã biết (sẽ KHÔNG hoạt động khi test)
Tin nhắn thoại (voice): node HTTP Request (Google Speech) và Generate Audio đang disabled. Gửi voice sẽ vào nhánh voice nhưng phần chuyển giọng nói → văn bản chưa chạy. Nếu muốn dùng, cần bật và cấu hình các node này.
Tra cứu Contacts (Pinecone): node Contacts và Embeddings OpenAI đang disabled, nên bot không tra được email liên hệ từ vector store.
