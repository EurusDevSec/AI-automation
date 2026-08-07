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
            Tránh thần thánh hóa AI! AI Agent giúp bạn tự động hóa <strong>80% công việc lặp lại</strong>, nhưng <strong>20% tư duy chiến lược, định hướng và kiểm duyệt cuối cùng</strong> BẮT BUỘC thuộc về con người.
          </Alert>

          {/* 4 CORE REALITY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CARD 1 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span>🧠</span> <span>1. Ảo Giác (Hallucination)</span>
                </span>
                <Badge color="red">Xác suất sai số</Badge>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                LLM hoạt động dựa trên đoán từ tiếp theo. AI có thể đưa ra số liệu hoàn toàn sai hoặc bịa link với phong thái cực kỳ tự tin.
              </p>
              <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                👉 <strong>Giải pháp:</strong> Bắt buộc dùng Deep Research có trích dẫn nguồn và con người cross-check dữ liệu quan trọng.
              </div>
            </div>

            {/* CARD 2 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span>⚙️</span> <span>2. Lỗi Tool &amp; Giao Diện</span>
                </span>
                <Badge color="orange">Agent Dependency</Badge>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                AI Agent (như Spark Auto Browse, n8n) có thể thất bại khi trang web đổi cấu trúc DOM, dính Captcha, hoặc API bị timeout/rate limit.
              </p>
              <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                👉 <strong>Giải pháp:</strong> Xây dựng kịch bản dự phòng (fallback), soi log thực thi và không phó mặc 100%.
              </div>
            </div>

            {/* CARD 3 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span>👤</span> <span>3. Human-In-The-Loop</span>
                </span>
                <Badge color="green">80% AI - 20% Human</Badge>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                AI tạo bản nháp thô cực nhanh. Tuy nhiên, 20% còn lại về tính thẩm mỹ, văn phong, đạo đức và duyệt xuất bản phải do người điều khiển chốt.
              </p>
              <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                👉 <strong>Giải pháp:</strong> Học viên đóng vai "Đạo diễn &amp; Tổng biên tập", không là người bấm nút thụ động.
              </div>
            </div>

            {/* CARD 4 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span>🛡️</span> <span>4. Bảo Mật &amp; Chi Phí Token</span>
                </span>
                <Badge color="blue">Security &amp; API Cost</Badge>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ném dữ liệu bí mật lên Chat công khai gây rủi ro bảo mật. Agent chạy vòng lặp vô tận (infinite loop) có thể làm cạn sạch tiền Token.
              </p>
              <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                👉 <strong>Giải pháp:</strong> Bảo mật `.env`, đặt max-iterations và giới hạn ngân sách API rõ ràng.
              </div>
            </div>
          </div>

          {/* COMPARISON TABLE */}
          <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
            <div className="bg-slate-900 text-white p-3 font-bold flex items-center justify-between">
              <span>📊 BẢNG SO SÁNH: KỲ VỌNG THẦN THÁNH VS THỰC TẾ AI AGENT 2026</span>
            </div>
            <div className="divide-y divide-slate-200">
              <div className="grid grid-cols-2 p-3 bg-white gap-3">
                <div className="text-red-700 font-medium">❌ <strong>Lầm tưởng:</strong> "AI tự làm hết từ A-Z, con người chỉ việc ngồi chơi xơi nước."</div>
                <div className="text-emerald-800 font-medium">✅ <strong>Thực tế:</strong> "AI làm 80% công việc tay chân, con người định hướng &amp; chốt 20%."</div>
              </div>
              <div className="grid grid-cols-2 p-3 bg-slate-50 gap-3">
                <div className="text-red-700 font-medium">❌ <strong>Lầm tưởng:</strong> "AI trả lời câu nào cũng đúng 100% tuyệt đối."</div>
                <div className="text-emerald-800 font-medium">✅ <strong>Thực tế:</strong> "AI có xác suất ảo giác, bắt buộc con người kiểm chứng số liệu."</div>
              </div>
              <div className="grid grid-cols-2 p-3 bg-white gap-3">
                <div className="text-red-700 font-medium">❌ <strong>Lầm tưởng:</strong> "Chỉ cần 1 thần prompt là giải quyết mọi bài toán."</div>
                <div className="text-emerald-800 font-medium">✅ <strong>Thực tế:</strong> "Cần quy trình chia nhỏ công việc và phối hợp nhiều Agent/Tool."</div>
              </div>
            </div>
          </div>
        </SpaceBetween>
      </Modal>
    </>
  );
}
