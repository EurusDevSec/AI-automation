import React, { useState } from 'react';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import Modal from '@cloudscape-design/components/modal';
import Header from '@cloudscape-design/components/header';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Badge from '@cloudscape-design/components/badge';
import Alert from '@cloudscape-design/components/alert';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <div id="top-nav-container" className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <TopNavigation
          identity={{
            href: '/',
            title: 'AI & Automation Masterclass',
            logo: {
              src: '/logo.svg',
              alt: 'AI Automation Minimalist 2D Flat Vector Logo'
            }
          }}
          utilities={[
            {
              type: 'button',
              text: '⚠️ Thực Tế & Giới Hạn AI',
              onClick: () => setModalVisible(true)
            },
            {
              type: 'button',
              text: 'Trang Chủ',
              variant: location.pathname === '/' ? 'primary-button' : 'normal',
              onClick: () => navigate('/')
            },
            {
              type: 'button',
              text: '⚡ Student Portal (8 Buổi)',
              variant: location.pathname.startsWith('/app') ? 'primary-button' : 'normal',
              onClick: () => navigate('/app')
            },
            {
              type: 'url',
              text: 'GitHub Repo',
              href: 'https://github.com/EurusDevSec/AI-automation',
              external: true,
              externalIconAriaLabel: 'Opens in a new tab'
            }
          ]}
          i18nStrings={{
            searchIconAriaLabel: 'Search',
            searchDismissIconAriaLabel: 'Dismiss search',
            overflowMenuTriggerText: 'More',
            overflowMenuTitleText: 'All'
          }}
        />
      </div>

      {/* GLOBAL MODAL: REALITY & LIMITATIONS OF AI AGENTS 2026 */}
      <Modal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        size="large"
        header={
          <Header
            variant="h2"
            description="Định hình tư duy chuẩn xác 2026: AI là đòn bẩy nhân 10 hiệu suất, không phải phép thuật thay thế 100% con người!"
          >
            ⚠️ Thực Tế &amp; Giới Hạn Của AI &amp; AI Agent
          </Header>
        }
        footer={
          <Box float="right">
            <Button variant="primary" onClick={() => setModalVisible(false)}>
              Đã Hiểu - Đóng (Esc)
            </Button>
          </Box>
        }
      >
        <SpaceBetween size="l">
          <Alert type="warning" header="💡 Thông Điệp Cốt Lõi Cho Học Viên">
            Tránh thần thánh hóa AI! AI Agent giúp bạn tự động hóa <strong>80% công việc tay chân lặp lại</strong>, nhưng <strong>20% tư duy chiến lược, định hướng và kiểm duyệt chất lượng cuối cùng</strong> BẮT BUỘC thuộc về con người.
          </Alert>

          {/* 6 CORE REALITY & LIMITATION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* CARD 1: HALLUCINATION */}
            <div className="p-4 bg-rose-50/60 border-l-4 border-l-rose-500 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <span>🧠</span> <span>1. Ảo Giác AI (Hallucination in LLM)</span>
                </span>
                <Badge color="red">Xác suất sai số</Badge>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Thuật ngữ:</strong> <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-rose-700 border border-rose-200">LLM (Large Language Model)</code> • <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-rose-700 border border-rose-200">Hallucination</code><br />
                <strong>Giải thích bình dân:</strong> AI hoạt động dựa trên xác suất đoán từ tiếp theo. Do đó, AI có thể đưa ra số liệu hoàn toàn bịa đặt hoặc tự sinh ra đường link không tồn tại nhưng trả lời với văn phong cực kỳ khẳng định.
              </p>
              <div className="text-xs font-semibold text-rose-800 bg-white p-2.5 rounded-lg border border-rose-200 shadow-2xs">
                👉 <strong>Giải pháp thực chiến:</strong> Bắt buộc dùng Deep Research có trích dẫn nguồn kiểm chứng và con người cross-check dữ liệu quan trọng trước khi xuất bản.
              </div>
            </div>

            {/* CARD 2: TOOL & DOM DEPENDENCY */}
            <div className="p-4 bg-amber-50/60 border-l-4 border-l-amber-500 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <span>⚙️</span> <span>2. Sự Cố Giao Diện &amp; Máy Chủ (DOM &amp; Rate Limit)</span>
                </span>
                <Badge color="orange">Tool Dependency</Badge>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Thuật ngữ:</strong> <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-amber-700 border border-amber-200">DOM Change</code> • <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-amber-700 border border-amber-200">Captcha</code> • <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-amber-700 border border-amber-200">Rate Limit</code><br />
                <strong>Giải thích bình dân:</strong> AI Agent (như Spark Auto Browse, n8n) sẽ ngưng chạy nếu trang web đổi mã giao diện (DOM), dính mã xác thực hình ảnh (Captcha) hoặc bị máy chủ chặn do gửi quá nhiều yêu cầu.
              </p>
              <div className="text-xs font-semibold text-amber-800 bg-white p-2.5 rounded-lg border border-amber-200 shadow-2xs">
                👉 <strong>Giải pháp thực chiến:</strong> Xây dựng kịch bản dự phòng (fallback), soi nhật ký thực thi (log) và không phó mặc 100% cho máy móc.
              </div>
            </div>

            {/* CARD 3: HUMAN IN THE LOOP */}
            <div className="p-4 bg-emerald-50/60 border-l-4 border-l-emerald-500 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <span>👤</span> <span>3. Con Người Trong Vòng Lặp (Human-In-The-Loop)</span>
                </span>
                <Badge color="green">80% AI - 20% Human</Badge>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Thuật ngữ:</strong> <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-emerald-700 border border-emerald-200">Human-In-The-Loop (HITL)</code> • <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-emerald-700 border border-emerald-200">Direction</code><br />
                <strong>Giải thích bình dân:</strong> AI tạo bản nháp thô tay chân cực nhanh (80%). Tuy nhiên, 20% còn lại về tính thẩm mỹ, văn phong, đạo đức và duyệt xuất bản cuối cùng BẮT BUỘC do bạn điều khiển.
              </p>
              <div className="text-xs font-semibold text-emerald-800 bg-white p-2.5 rounded-lg border border-emerald-200 shadow-2xs">
                👉 <strong>Giải pháp thực chiến:</strong> Học viên đóng vai "Đạo diễn &amp; Tổng biên tập", chỉ đạo AI thực thi chứ không là người bấm nút thụ động.
              </div>
            </div>

            {/* CARD 4: SECURITY & TOKEN COST */}
            <div className="p-4 bg-indigo-50/60 border-l-4 border-l-indigo-500 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <span>🛡️</span> <span>4. Bảo Mật &amp; Chi Phí Token (Security &amp; API Cost)</span>
                </span>
                <Badge color="blue">Security &amp; Budget</Badge>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Thuật ngữ:</strong> <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-indigo-700 border border-indigo-200">Token Usage</code> • <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-indigo-700 border border-indigo-200">Environment (.env)</code><br />
                <strong>Giải thích bình dân:</strong> Ném dữ liệu tài chính/bảo mật lên Chat công khai gây rủi ro lộ bí mật. Mỗi lượt phản hồi AI đều tiêu tốn Token (chi phí máy chủ), cần quản lý hạn mức chi phí rõ ràng.
              </p>
              <div className="text-xs font-semibold text-indigo-800 bg-white p-2.5 rounded-lg border border-indigo-200 shadow-2xs">
                👉 <strong>Giải pháp thực chiến:</strong> Cất giữ khóa API trong file <code className="font-mono">.env</code> bảo mật, đặt hạn mức ngân sách và kiểm soát Token tiêu thụ.
              </div>
            </div>

            {/* CARD 5: CONTEXT WINDOW LIMIT */}
            <div className="p-4 bg-purple-50/60 border-l-4 border-l-purple-500 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <span>📚</span> <span>5. Trí Nhớ &amp; Cửa Sổ Ngữ Cảnh (Context Window Limit)</span>
                </span>
                <Badge color="purple">Memory Limit</Badge>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Thuật ngữ:</strong> <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-purple-700 border border-purple-200">Context Window</code> • <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-purple-700 border border-purple-200">Catastrophic Forgetting</code><br />
                <strong>Giải thích bình dân:</strong> AI có giới hạn số lượng từ trong một phiên chat. Khi cuộc hội thoại hoặc file tài liệu quá dài, AI sẽ bắt đầu "quên" hoặc bỏ qua các yêu cầu ban đầu ở đầu đoạn chat.
              </p>
              <div className="text-xs font-semibold text-purple-800 bg-white p-2.5 rounded-lg border border-purple-200 shadow-2xs">
                👉 <strong>Giải pháp thực chiến:</strong> Chia nhỏ tài liệu thành từng phần, tóm tắt dữ liệu trung gian và dùng bộ lưu trữ Google Drive / Supabase.
              </div>
            </div>

            {/* CARD 6: INFINITE LOOP & STAGNATION */}
            <div className="p-4 bg-teal-50/60 border-l-4 border-l-teal-500 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <span>🔄</span> <span>6. Vòng Lặp Vô Tận &amp; Ngõ Cấm (Infinite Loop)</span>
                </span>
                <Badge color="teal">Agent Stagnation</Badge>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Thuật ngữ:</strong> <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-teal-700 border border-teal-200">Infinite Execution Loop</code> • <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono text-teal-700 border border-teal-200">Max Iterations</code><br />
                <strong>Giải thích bình dân:</strong> Khi gặp lỗi ngoài dự kiến trên trang web, AI Agent có thể bị kẹt trong vòng lặp thử lại liên tục mà không tự biết ngưng lại, gây lãng phí chi phí và làm đơ luồng.
              </p>
              <div className="text-xs font-semibold text-teal-800 bg-white p-2.5 rounded-lg border border-teal-200 shadow-2xs">
                👉 <strong>Giải pháp thực chiến:</strong> Cài đặt tham số <code className="font-mono">max_iterations</code> (số lần thử tối đa) và nút ngắt khẩn cấp khi chạy luồng tự động.
              </div>
            </div>

          </div>

          {/* COMPARISON TABLE */}
          <div className="border border-slate-200 rounded-xl overflow-hidden text-xs shadow-xs">
            <div className="bg-slate-900 text-white p-3 font-extrabold flex items-center justify-between">
              <span>📊 BẢNG SO SÁNH: KỲ VỌNG THẦN THÁNH VS THỰC TẾ AI AGENT 2026</span>
            </div>
            <div className="divide-y divide-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 p-3 bg-white gap-3">
                <div className="text-red-700 font-semibold">❌ <strong>Lầm tưởng:</strong> "AI tự làm hết từ A-Z, con người chỉ việc ngồi chơi xơi nước."</div>
                <div className="text-emerald-800 font-semibold">✅ <strong>Thực tế:</strong> "AI làm 80% công việc tay chân, con người định hướng &amp; chốt 20% chất lượng."</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 p-3 bg-slate-50 gap-3">
                <div className="text-red-700 font-semibold">❌ <strong>Lầm tưởng:</strong> "AI trả lời câu nào cũng đúng 100% tuyệt đối."</div>
                <div className="text-emerald-800 font-semibold">✅ <strong>Thực tế:</strong> "AI có xác suất Hallucination (ảo giác), bắt buộc con người kiểm chứng số liệu."</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 p-3 bg-white gap-3">
                <div className="text-red-700 font-semibold">❌ <strong>Lầm tưởng:</strong> "AI Agent có thể tự động vượt qua mọi lớp bảo mật 2FA/Captcha."</div>
                <div className="text-emerald-800 font-semibold">✅ <strong>Thực tế:</strong> "AI Agent bị ngắt bởi Captcha/DOM change, cần có kịch bản dự phòng Fallback."</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 p-3 bg-slate-50 gap-3">
                <div className="text-red-700 font-semibold">❌ <strong>Lầm tưởng:</strong> "Cứ thả cho AI Agent tự chạy ngầm không cần cài đặt giới hạn."</div>
                <div className="text-emerald-800 font-semibold">✅ <strong>Thực tế:</strong> "Cần cài max_iterations để tránh bị kẹt Infinite Loop gây tốn chi phí Token."</div>
              </div>
            </div>
          </div>
        </SpaceBetween>
      </Modal>
    </>
  );
}
