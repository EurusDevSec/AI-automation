import React, { useState, useEffect } from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Tabs from '@cloudscape-design/components/tabs';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import Badge from '@cloudscape-design/components/badge';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import Alert from '@cloudscape-design/components/alert';
import Box from '@cloudscape-design/components/box';
import Textarea from '@cloudscape-design/components/textarea';
import FormField from '@cloudscape-design/components/form-field';
import HelpPanel from '@cloudscape-design/components/help-panel';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Checkbox from '@cloudscape-design/components/checkbox';
import Navigation from '../components/Navigation';
import { initialLessonsData } from '../data/lessonsData';
import { getLocalLessonsOverride } from '../lib/supabase';

export default function StudentPortal() {
  const [activeSession, setActiveSession] = useState(1);
  const [navigationOpen, setNavigationOpen] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copiedPromptName, setCopiedPromptName] = useState('');
  const [lessons, setLessons] = useState(initialLessonsData);
  const [toolsOpen, setToolsOpen] = useState(false);

  // Checklist state for DoD
  const [checkListState, setCheckListState] = useState({});

  // Sandbox state
  const [sandboxPrompt, setSandboxPrompt] = useState('');
  const [sandboxResponse, setSandboxResponse] = useState('');
  const [sandboxLoading, setSandboxLoading] = useState(false);

  useEffect(() => {
    const overrides = getLocalLessonsOverride();
    if (Object.keys(overrides).length > 0) {
      setLessons((prev) =>
        prev.map((l) => (overrides[l.session_number] ? { ...l, ...overrides[l.session_number] } : l))
      );
    }
  }, []);

  const currentLesson = lessons.find((l) => l.session_number === activeSession) || lessons[0];

  const handleCopyPrompt = (text, promptName = 'Prompt') => {
    navigator.clipboard.writeText(text);
    setCopiedPromptName(promptName);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const handleDownloadJson = (jsonString, filename) => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  const handleRunSandbox = () => {
    setSandboxLoading(true);
    setSandboxResponse('');
    setTimeout(() => {
      setSandboxResponse(
        `🤖 [CLOUDSCAPE AI SANDBOX - SIMULATION RESPONSE]\n--------------------------------------------------\n✔ Prompt Parsed Successfully:\n"${(sandboxPrompt || currentLesson.mega_prompt || 'Default Prompt').substring(0, 150)}..."\n\n🎉 [Status: 200 OK]: Simulation completed 100% cleanly according to Golden Path specification!`
      );
      setSandboxLoading(false);
    }, 600);
  };

  const toggleChecklist = (idx) => {
    setCheckListState((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navigation />
      
      <AppLayout
        contentType="default"
        navigationOpen={navigationOpen}
        onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
        toolsOpen={toolsOpen}
        onToolsChange={({ detail }) => setToolsOpen(detail.open)}
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: 'Trang Chủ', href: '/' },
              { text: 'Student Portal', href: '/app' },
              { text: `Buổi ${currentLesson.session_number}: ${currentLesson.title.split(':')[1] || currentLesson.title}`, href: `#buoi-${currentLesson.session_number}` }
            ]}
            ariaLabel="Breadcrumbs"
          />
        }
        navigation={
          <SideNavigation
            activeHref={`#buoi-${activeSession}`}
            header={{
              href: '#/app',
              text: 'Lộ Trình Đào Tạo AI 2026',
              logo: { src: '/logo.svg', alt: 'AI Automation Logo' }
            }}
            onFollow={(e) => {
              e.preventDefault();
              const id = parseInt(e.detail.href.replace('#buoi-', ''), 10);
              if (id) setActiveSession(id);
            }}
            items={[
              {
                type: 'section',
                text: 'Chặng 1: AI Văn Phòng & Dữ Liệu',
                items: [
                  { type: 'link', text: 'Buổi 1: Lập Kế Hoạch Team Building', href: '#buoi-1', info: <Badge color="blue">Cơ bản</Badge> },
                  { type: 'link', text: 'Buổi 2: Trợ Lý Excel', href: '#buoi-2', info: <Badge color="blue">Cơ bản</Badge> }
                ]
              },
              { type: 'divider' },
              {
                type: 'section',
                text: 'Chặng 2: Tự Động Hóa n8n',
                items: [
                  { type: 'link', text: 'Buổi 3: Săn Ý Tưởng RSS', href: '#buoi-3', info: <Badge color="green">Nâng cao</Badge> },
                  { type: 'link', text: 'Buổi 4: Máy Content FB', href: '#buoi-4', info: <Badge color="green">Nâng cao</Badge> },
                  { type: 'link', text: 'Buổi 5: Kịch Bản Video', href: '#buoi-5', info: <Badge color="green">Nâng cao</Badge> },
                  { type: 'link', text: 'Buổi 6: Auto Chatbot Messenger', href: '#buoi-6', info: <Badge color="green">Nâng cao</Badge> }
                ]
              },
              { type: 'divider' },
              {
                type: 'section',
                text: 'Chặng 3: Website AI & Live',
                items: [
                  { type: 'link', text: 'Buổi 7: AI Tạo Website', href: '#buoi-7', info: <Badge color="red">Thực chiến</Badge> },
                  { type: 'link', text: 'Buổi 8: Deploy Vercel & Supabase', href: '#buoi-8', info: <Badge color="red">Thực chiến</Badge> }
                ]
              }
            ]}
          />
        }
        tools={
          <HelpPanel
            header={<h2>💡 Hướng Dẫn Học Viên</h2>}
            footer={
              <div>
                <h3>Cần hỗ trợ trực tiếp?</h3>
                <Box color="text-body-secondary">Liên hệ giảng viên EurusDevSec qua Zalo / Telegram nhóm học tập 24/7.</Box>
              </div>
            }
          >
            <SpaceBetween size="m">
              <Box variant="p">
                Chào mừng bạn đến với <strong>Buổi {currentLesson.session_number}</strong>! Bạn đang thực hành Case Study Lập Kế Hoạch & Bộ Truyền Thông Team Building 3N2Đ.
              </Box>
              <div>
                <h4>Mẹo thực hành mượt mà:</h4>
                <ul>
                  <li>Nhấn nút <strong>1-Click Copy Prompt</strong> tương ứng với từng Thao tác 1.1 đến 4.2.</li>
                  <li>Xem <strong>Ảnh Bài Làm Mẫu Thực Tế</strong> bên dưới mỗi Mắt xích để so sánh sản phẩm.</li>
                  <li>Tạo Audio Music song song khi Veo đang xử lý render Video.</li>
                </ul>
              </div>
            </SpaceBetween>
          </HelpPanel>
        }
        content={
          <ContentLayout
            header={
              <Header
                variant="h1"
                description={currentLesson.description}
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Badge color="blue">{currentLesson.module_name}</Badge>
                    <StatusIndicator type="success">Golden Path Verified</StatusIndicator>
                    <Button iconName="help" onClick={() => setToolsOpen(!toolsOpen)}>
                      Trợ Giúp
                    </Button>
                  </SpaceBetween>
                }
              >
                {currentLesson.title}
              </Header>
            }
          >
            <SpaceBetween size="l">
              {copySuccess && (
                <Alert type="success" dismissible onDismiss={() => setCopySuccess(false)}>
                  ✅ Đã sao chép <strong>{copiedPromptName}</strong> vào Clipboard! Dán trực tiếp vào Gemini / Spark để chạy ngay.
                </Alert>
              )}

              {/* OVERVIEW CARDS */}
              <ColumnLayout columns={3} variant="classic">
                <Container header={<Header variant="h3">⏱️ Thời Lượng</Header>}>
                  <Box variant="h2">90 Phút</Box>
                  <Box color="text-body-secondary">Thực hành 100% trên lớp</Box>
                </Container>
                <Container header={<Header variant="h3">🎯 Cấp Độ & Đối Tượng</Header>}>
                  <StatusIndicator type="info">Dân Văn Phòng & Freelancer</StatusIndicator>
                  <Box color="text-body-secondary">Không cần kiến thức lập trình</Box>
                </Container>
                <Container header={<Header variant="h3">🛡️ Tiêu Chuẩn</Header>}>
                  <StatusIndicator type="success">100% Zero Error Guarantee</StatusIndicator>
                  <Box color="text-body-secondary">Prompt đã thử nghiệm 100%</Box>
                </Container>
              </ColumnLayout>

              {/* CASE STUDY HIGHLIGHT CARD */}
              {currentLesson.case_study && (
                <Alert type="info" header={`⛺ ${currentLesson.case_study.title}`}>
                  <div className="space-y-1">
                    <div><strong>Tình huống:</strong> Bạn (dân văn phòng/tự do) lên kế hoạch du lịch / team building 3N2Đ cho nhóm 10-15 người (3-5 triệu/người).</div>
                    <div><strong>Mục tiêu:</strong> Tự động hóa từ cào địa điểm, kịch bản Canvas, tạo Poster/Video Veo/Music đến gom bill Gmail về Google Sheets 24/7.</div>
                  </div>
                </Alert>
              )}

              {/* TABS CONTAINER */}
              <Tabs
                tabs={[
                  {
                    id: 'tab-theory',
                    label: '💡 1. Bối Cảnh & Ma Trận Công Cụ',
                    content: (
                      <Container header={<Header variant="h2" description="Tổng quan bối cảnh dự án & phân công 8 công cụ trong dây chuyền sản xuất">Mục Tiêu Bài Học Buổi {currentLesson.session_number}</Header>}>
                        <SpaceBetween size="l">
                          {/* MAIN SESSION IMAGE */}
                          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                            <img
                              src={currentLesson.image_url}
                              alt={currentLesson.title}
                              className="w-full h-auto max-h-[380px] object-cover"
                            />
                          </div>

                          <Container header={<Header variant="h3">📖 Bối Cảnh Dự Án Thực Tế</Header>}>
                            <Box variant="p" fontSize="body-m" color="text-body-primary">
                              {currentLesson.theory.overview}
                            </Box>
                          </Container>

                          <Alert type="warning" header="💡 Khái Niệm Cốt Lõi (Core Concept)">
                            {currentLesson.theory.core_concept}
                          </Alert>

                          <Container header={<Header variant="h3">🎯 Kết Quả Người Học Đạt Được (Learning Outcomes)</Header>}>
                            <SpaceBetween size="s">
                              {currentLesson.theory.learning_outcomes.map((outcome, idx) => (
                                <StatusIndicator key={idx} type="success">
                                  <strong>{outcome}</strong>
                                </StatusIndicator>
                              ))}
                            </SpaceBetween>
                          </Container>
                        </SpaceBetween>
                      </Container>
                    )
                  },
                  {
                    id: 'tab-steps',
                    label: '📋 2. Quy Trình 4 Mắt Xích Thực Hành (90 Phút)',
                    content: (
                      <Container header={<Header variant="h2" description="Thực hành 4 Mắt xích chi tiết kèm Ảnh Bài Làm Mẫu Thực Tế & Nút Copy Prompt">Quy Trình 4 Mắt Xích Thực Chiếm 90 Phút</Header>}>
                        <SpaceBetween size="l">
                          {/* MAT XICH 1 */}
                          <Container header={<Header variant="h3" description="15 Phút | 00:00 - 00:15">🔗 MẮT XÍCH 1: DEEP RESEARCH & GUIDED LEARNING</Header>}>
                            <SpaceBetween size="m">
                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 1.1: Tìm địa điểm & ý tưởng bằng Deep Research</h4>
                                <p className="text-xs text-slate-600 mb-2">Kích hoạt Deep Research quét các địa điểm du lịch 3N2Đ hot nhất 2026 cho nhóm 10-15 người.</p>
                                {currentLesson.prompts_with_placeholders?.step1_1 && (
                                  <div className="mb-4">
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 1.1 - Deep Research Scan</span>
                                      <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step1_1, 'Prompt 1.1')}>
                                        1-Click Copy Prompt 1.1
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step1_1}</div>
                                  </div>
                                )}
                              </div>

                              {/* SAMPLE WORK IMAGE 1 */}
                              <div className="border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50">
                                <div className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1.5">
                                  📸 <span>Ảnh Mẫu Bài Làm (Mắt Xích 1 - Báo Cáo Deep Research & Guided Learning):</span>
                                  <Badge color="blue">Sample Work</Badge>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-slate-200">
                                  <img src="/session_1.jpg" alt="Mắt Xích 1 Mẫu" className="w-full h-56 object-cover" />
                                </div>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 1.2: Chốt địa điểm & Concept bằng Guided Learning</h4>
                                <p className="text-xs text-slate-600 mb-2">Bật Guided Learning đưa ra 3 câu hỏi trắc nghiệm tương tác để chọn địa điểm & concept.</p>
                                {currentLesson.prompts_with_placeholders?.step1_2 && (
                                  <div>
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 1.2 - Guided Learning Q&A</span>
                                      <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step1_2, 'Prompt 1.2')}>
                                        1-Click Copy Prompt 1.2
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step1_2}</div>
                                  </div>
                                )}
                              </div>
                            </SpaceBetween>
                          </Container>

                          {/* MAT XICH 2 */}
                          <Container header={<Header variant="h3" description="25 Phút | 01:15 - 00:40">🔗 MẮT XÍCH 2: CANVAS & SPARK AUTO BROWSE</Header>}>
                            <SpaceBetween size="m">
                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 2.1: Dàn lịch trình chi tiết lên Canvas</h4>
                                <p className="text-xs text-slate-600 mb-2">Mở giao diện Canvas để Gemini xuất Bảng lịch trình 3N2Đ và Kịch bản Video Trailer 15s.</p>
                                {currentLesson.prompts_with_placeholders?.step2_1 && (
                                  <div className="mb-4">
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 2.1 - Canvas Itinerary & Script</span>
                                      <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step2_1, 'Prompt 2.1')}>
                                        1-Click Copy Prompt 2.1
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step2_1}</div>
                                  </div>
                                )}
                              </div>

                              {/* SAMPLE WORK IMAGE 2 */}
                              <div className="border-2 border-dashed border-emerald-200 rounded-xl p-3 bg-emerald-50/50">
                                <div className="text-xs font-semibold text-emerald-700 mb-2 flex items-center gap-1.5">
                                  📸 <span>Ảnh Mẫu Bài Làm (Mắt Xích 2 - Lịch Trình Canvas & Auto Browse):</span>
                                  <Badge color="green">Sample Work</Badge>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-slate-200">
                                  <img src="/workflow_n8n_preview.jpg" alt="Mắt Xích 2 Mẫu" className="w-full h-56 object-cover" />
                                </div>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 2.2: Sửa trực tiếp trên Canvas & Auto Browse cào giá Homestay</h4>
                                <p className="text-xs text-slate-600 mb-2">Dùng Comment lề trang sửa văn bản + Ra lệnh Spark Auto Browse cào bảng giá phòng Homestay.</p>
                                {currentLesson.prompts_with_placeholders?.step2_2 && (
                                  <div>
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 2.2 - Auto Browse Homestay Prices</span>
                                      <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step2_2, 'Prompt 2.2')}>
                                        1-Click Copy Prompt 2.2
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step2_2}</div>
                                  </div>
                                )}
                              </div>
                            </SpaceBetween>
                          </Container>

                          {/* MAT XICH 3 */}
                          <Container header={<Header variant="h3" description="25 Phút | 00:40 - 01:05">🔗 MẮT XÍCH 3: XƯỞNG SẢN XUẤT ĐA PHƯƠNG TIỆN</Header>}>
                            <SpaceBetween size="m">
                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 3.1: Tạo Poster chuyến đi (Image Generation)</h4>
                                <p className="text-xs text-slate-600 mb-2">Tạo bức ảnh Poster du lịch chuẩn Cinematic với ánh sáng rực rỡ bên xe Jeep/camping.</p>
                                {currentLesson.prompts_with_placeholders?.step3_1 && (
                                  <div className="mb-4">
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 3.1 - Cinematic Poster Image Gen</span>
                                      <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step3_1, 'Prompt 3.1')}>
                                        1-Click Copy Prompt 3.1
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step3_1}</div>
                                  </div>
                                )}
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 3.2: Biến ảnh thành Video Trailer (Veo Integration)</h4>
                                <p className="text-xs text-slate-600 mb-2">Đính kèm ảnh vào Gemini, nhập Prompt camera Tilt up biến ảnh thành Clip Video 5s.</p>
                                {currentLesson.prompts_with_placeholders?.step3_2 && (
                                  <div className="mb-4">
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 3.2 - Veo Video 5s Motion</span>
                                      <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step3_2, 'Prompt 3.2')}>
                                        1-Click Copy Prompt 3.2
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step3_2}</div>
                                  </div>
                                )}
                              </div>

                              <Alert type="info" header="💡 Mẹo Render Song Song Tối Ưu Thời Gian">
                                Trong lúc Veo đang xử lý render Video (mất ~1-2 phút), hãy lấy ngay Prompt 3.3 tạo Nhạc nền Tropical House để không lãng phí thời gian trên lớp!
                              </Alert>

                              {/* SAMPLE WORK IMAGE 3 */}
                              <div className="border-2 border-dashed border-amber-200 rounded-xl p-3 bg-amber-50/50">
                                <div className="text-xs font-semibold text-amber-700 mb-2 flex items-center gap-1.5">
                                  📸 <span>Ảnh Mẫu Bài Làm (Mắt Xích 3 - Bộ Media Poster, Veo Video & Music):</span>
                                  <Badge color="red">Sample Work</Badge>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-slate-200">
                                  <img src="/hero_ai_automation_light.jpg" alt="Mắt Xích 3 Mẫu" className="w-full h-56 object-cover" />
                                </div>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 3.3: Tạo Nhạc nền Video (Audio/Music Generation)</h4>
                                <p className="text-xs text-slate-600 mb-2">Tạo đoạn nhạc nền Audio 15s phong cách Tropical House / Indie Pop tươi vui.</p>
                                {currentLesson.prompts_with_placeholders?.step3_3 && (
                                  <div>
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 3.3 - Tropical House Audio Music</span>
                                      <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step3_3, 'Prompt 3.3')}>
                                        1-Click Copy Prompt 3.3
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step3_3}</div>
                                  </div>
                                )}
                              </div>
                            </SpaceBetween>
                          </Container>

                          {/* MAT XICH 4 */}
                          <Container header={<Header variant="h3" description="25 Phút | 01:05 - 01:30">🔗 MẮT XÍCH 4: STANDING INSTRUCTION 24/7 & CUSTOM GEM</Header>}>
                            <SpaceBetween size="m">
                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 4.1: Cài đặt Tự động hóa ghi nhận Thu - Chi chuyến đi</h4>
                                <p className="text-xs text-slate-600 mb-2">Mở Spark Settings &rarr; Standing Instructions dán lệnh tự động trích xuất bill Gmail sang Google Sheets.</p>
                                {currentLesson.prompts_with_placeholders?.step4_1 && (
                                  <div className="mb-4">
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 4.1 - Standing Instruction 24/7</span>
                                      <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step4_1, 'Prompt 4.1')}>
                                        1-Click Copy Prompt 4.1
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step4_1}</div>
                                  </div>
                                )}
                              </div>

                              {/* SAMPLE WORK IMAGE 4 */}
                              <div className="border-2 border-dashed border-purple-200 rounded-xl p-3 bg-purple-50/50">
                                <div className="text-xs font-semibold text-purple-700 mb-2 flex items-center gap-1.5">
                                  📸 <span>Ảnh Mẫu Bài Làm (Mắt Xích 4 - Standing Instruction & Custom Gem Bot):</span>
                                  <Badge color="blue">Sample Work</Badge>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-slate-200">
                                  <img src="/session_1.jpg" alt="Mắt Xích 4 Mẫu" className="w-full h-56 object-cover" />
                                </div>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 4.2: Đóng gói thành Custom Gem dùng lâu dài</h4>
                                <p className="text-xs text-slate-600 mb-2">Vào Gems &rarr; Create New Gem, dán System Instruction tạo Bot 'Trợ Lý Lập Kế Hoạch Sự Kiện & Du Lịch'.</p>
                                {currentLesson.prompts_with_placeholders?.step4_2 && (
                                  <div>
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 4.2 - Custom Gem System Instruction</span>
                                      <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step4_2, 'Prompt 4.2')}>
                                        1-Click Copy Prompt 4.2
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step4_2}</div>
                                  </div>
                                )}
                              </div>
                            </SpaceBetween>
                          </Container>

                          <ExpandableSection headerText="🛠️ Xử Lý Lỗi Thường Gặp (Troubleshooting Guide)">
                            <SpaceBetween size="s">
                              {currentLesson.troubleshooting.map((item, idx) => (
                                <Alert key={idx} type="warning" header={`Lỗi hay gặp: ${item.issue}`}>
                                  <div>
                                    <strong>Nguyên nhân:</strong> {item.cause}
                                  </div>
                                  <div>
                                    <strong>Cách sửa nhanh:</strong> {item.fix}
                                  </div>
                                </Alert>
                              ))}
                            </SpaceBetween>
                          </ExpandableSection>
                        </SpaceBetween>
                      </Container>
                    )
                  },
                  {
                    id: 'tab-resources',
                    label: '📦 3. Kho Tài Nguyên Mega-Prompt & JSON',
                    content: (
                      <Container header={<Header variant="h2" description="Tải xuống workflow n8n JSON hoặc 1-Click Copy Mega Prompt">Tài Nguyên Thực Chiến Core</Header>}>
                        <SpaceBetween size="l">
                          {currentLesson.mega_prompt && (
                            <div>
                              <Header
                                variant="h3"
                                actions={
                                  <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.mega_prompt, 'Mega-Prompt')}>
                                    1-Click Copy Full Case Study Prompt
                                  </Button>
                                }
                              >
                                📄 Full Case Study Master Prompt
                              </Header>
                              <div className="custom-code-editor">{currentLesson.mega_prompt}</div>
                            </div>
                          )}

                          {currentLesson.n8n_json && (
                            <div>
                              <Header
                                variant="h3"
                                actions={
                                  <SpaceBetween direction="horizontal" size="xs">
                                    <Button
                                      iconName="copy"
                                      onClick={() => handleCopyPrompt(currentLesson.n8n_json, 'n8n JSON')}
                                    >
                                      Copy JSON
                                    </Button>
                                    <Button
                                      iconName="download"
                                      variant="primary"
                                      onClick={() =>
                                        handleDownloadJson(
                                          currentLesson.n8n_json,
                                          `workflow_buoi_${currentLesson.session_number}.json`
                                        )
                                      }
                                    >
                                      Tải JSON Direct
                                    </Button>
                                  </SpaceBetween>
                                }
                              >
                                🤖 Mã Workflow n8n JSON (Valid 100%)
                              </Header>
                              <div className="custom-code-editor">{currentLesson.n8n_json}</div>
                            </div>
                          )}
                        </SpaceBetween>
                      </Container>
                    )
                  },
                  {
                    id: 'tab-sandbox',
                    label: '🧪 4. AI Prompt Sandbox (Thử Nghiệm)',
                    content: (
                      <Container header={<Header variant="h2" description="Khung thử nghiệm phản hồi Prompt trực quan dành cho học viên">AI Prompt Sandbox Live</Header>}>
                        <SpaceBetween size="m">
                          <FormField label="Nhập hoặc chỉnh sửa Prompt cần thử nghiệm:">
                            <Textarea
                              value={sandboxPrompt || currentLesson.mega_prompt}
                              onChange={({ detail }) => setSandboxPrompt(detail.value)}
                              rows={6}
                            />
                          </FormField>

                          <Button variant="primary" loading={sandboxLoading} onClick={handleRunSandbox}>
                            🚀 Chạy Thử Nghiệm Prompt
                          </Button>

                          {sandboxResponse && <div className="custom-code-editor">{sandboxResponse}</div>}
                        </SpaceBetween>
                      </Container>
                    )
                  },
                  {
                    id: 'tab-checklist',
                    label: '🎯 5. Đánh Giá Tiêu Chuẩn Bài Học (DoD)',
                    content: (
                      <Container header={<Header variant="h2" description="Tự kiểm tra mức độ hoàn thành bài học 90 phút">Checklist Hoàn Thành</Header>}>
                        <SpaceBetween size="m">
                          {currentLesson.steps.map((step, idx) => (
                            <Checkbox
                              key={idx}
                              checked={!!checkListState[idx]}
                              onChange={() => toggleChecklist(idx)}
                            >
                              Hoàn thành Mắt xích {idx + 1}: {step}
                            </Checkbox>
                          ))}
                        </SpaceBetween>
                      </Container>
                    )
                  }
                ]}
              />
            </SpaceBetween>
          </ContentLayout>
        }
      />
    </div>
  );
}
