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
import { resolveMarkdownImageUrl } from '../lib/resolveImage';

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
            header={<h2>💡 Trợ Giúp Học Viên</h2>}
            footer={
              <div>
                <h3>Kiểm soát 100% từ Local IDE:</h3>
                <Box color="text-body-secondary">
                  Tệp giáo án: <code>src/content/buoi_{currentLesson.session_number}.md</code>.<br/>
                  Tự động đồng bộ ảnh cùng cấp khi dán vào VS Code!
                </Box>
              </div>
            }
          >
            <SpaceBetween size="m">
              <Box variant="p">
                <strong>Buổi {currentLesson.session_number}</strong>: {currentLesson.description}
              </Box>
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
                    <StatusIndicator type="success">IDE Single Control Mode</StatusIndicator>
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
                  ✅ Đã sao chép <strong>{copiedPromptName}</strong> vào Clipboard!
                </Alert>
              )}

              {/* OVERVIEW CARDS */}
              <ColumnLayout columns={3} variant="classic">
                <Container header={<Header variant="h3">⏱️ Thời Lượng</Header>}>
                  <Box variant="h2">90 Phút</Box>
                  <Box color="text-body-secondary">Thực hành 100% trên lớp</Box>
                </Container>
                <Container header={<Header variant="h3">🎯 Phân Luồng 2 Tab</Header>}>
                  <StatusIndicator type="info">Tab Trò Chuyện &amp; Tab Spark BETA</StatusIndicator>
                  <Box color="text-body-secondary">Chuẩn 100% giao diện thực tế</Box>
                </Container>
                <Container header={<Header variant="h3">🛡️ Quản Lý Bài Học</Header>}>
                  <StatusIndicator type="success">IDE Markdown Only (No CMS)</StatusIndicator>
                  <Box color="text-body-secondary">src/content/buoi_{currentLesson.session_number}.md</Box>
                </Container>
              </ColumnLayout>

              {/* UNIFIED TABS */}
              <Tabs
                tabs={[
                  {
                    id: 'tab-master-blueprint',
                    label: '📖 1. Master Blueprint (Giáo Án & Quy Trình 90 Phút)',
                    content: (
                      <SpaceBetween size="l">
                        {/* CASE STUDY HIGHLIGHT CARD */}
                        {currentLesson.case_study && (
                          <Alert type="info" header={`⛺ ${currentLesson.case_study.title}`}>
                            <div className="space-y-1 text-sm">
                              <div><strong>Tình huống thực tế:</strong> Bạn được giao lên kế hoạch du lịch / team building 3N2Đ cho nhóm 10-15 người (3-5 triệu/người).</div>
                              <div><strong>Luồng Thao Tác 2 Tab:</strong> [Tab Trò chuyện] (Research + Canvas + Veo) &rarr; [Tab Spark BETA] (Trình duyệt từ xa Agoda + Standing Instructions Gmail sang Sheets).</div>
                            </div>
                          </Alert>
                        )}

                        {/* CHANG 1: TAB TRO CHUYE N */}
                        <Container header={<Header variant="h2" description="35 Phút | Thao tác tại Tab Trò Chuyện (Menu Trái)">🔵 CHẶNG 1: TAB "TRÒ CHUYỆN" - TẠO CONTENT &amp; MEDIA</Header>}>
                          <SpaceBetween size="m">
                            <div>
                              <h3 className="font-bold text-slate-900 text-base mb-1">1️⃣ Deep Research &amp; Canvas Kế Hoạch (15 Phút)</h3>
                              <p className="text-sm text-slate-600 mb-2">Ở tab <strong>Trò chuyện</strong>, dán câu lệnh Deep Research quét các địa điểm du lịch 3N2Đ hot nhất 2026 và xuất bài viết kế hoạch trên Canvas.</p>
                              
                              {currentLesson.prompts_with_placeholders?.step1_1 && (
                                <div className="mb-4">
                                  <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-2 rounded-t-lg text-xs font-semibold">
                                    <span>Prompt 1.1 - Deep Research Scan</span>
                                    <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step1_1, 'Prompt 1.1')}>
                                      1-Click Copy Prompt 1.1
                                    </Button>
                                  </div>
                                  <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step1_1}</div>
                                </div>
                              )}

                              {/* REAL SCREENSHOTS FOR DEEP RESEARCH */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                                <div className="border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50">
                                  <div className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1.5">
                                    📸 <span>Deep Research Gemini:</span>
                                    <Badge color="blue">image-1.png</Badge>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('image-1.png')} alt="image-1.png" className="w-full h-48 object-contain bg-slate-50" />
                                  </div>
                                </div>

                                <div className="border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50">
                                  <div className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1.5">
                                    📸 <span>Chi Tiết Báo Cáo Canvas:</span>
                                    <Badge color="blue">image-2.png</Badge>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('image-2.png')} alt="image-2.png" className="w-full h-48 object-contain bg-slate-50" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-slate-200">
                              <h3 className="font-bold text-slate-900 text-base mb-1">2️⃣ Tính Năng Native "Tạo" Trên Canvas &amp; Guided Learning (10 Phút)</h3>
                              <p className="text-sm text-slate-600 mb-2">Ngay tại giao diện Canvas vừa tạo, dùng menu nút <strong>Tạo ∨</strong> ở góc trên bên phải để sinh Bài kiểm tra (Quiz) hoặc Audio Podcast.</p>
                              
                              {currentLesson.prompts_with_placeholders?.step1_2 && (
                                <div className="mb-3">
                                  <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-2 rounded-t-lg text-xs font-semibold">
                                    <span>Prompt 1.2 - Guided Learning Q&amp;A</span>
                                    <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step1_2, 'Prompt 1.2')}>
                                      1-Click Copy Prompt 1.2
                                    </Button>
                                  </div>
                                  <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step1_2}</div>
                                </div>
                              )}

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                                <div className="border-2 border-dashed border-emerald-200 rounded-xl p-3 bg-emerald-50/50">
                                  <div className="text-xs font-semibold text-emerald-700 mb-2">📸 Menu Nút Tạo ∨ Trên Canvas:</div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('canvas-create-web.png')} alt="canvas-create-web.png" className="w-full h-44 object-contain bg-slate-50" />
                                  </div>
                                </div>

                                <div className="border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50">
                                  <div className="text-xs font-semibold text-indigo-700 mb-2">📸 Giao Diện Trắc Nghiệm Guided Learning:</div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('guided-learning-quiz.png')} alt="guided-learning-quiz.png" className="w-full h-44 object-contain bg-slate-50" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-slate-200">
                              <h3 className="font-bold text-slate-900 text-base mb-1">3️⃣ Xưởng Media: Poster &amp; Video Veo 5s (10 Phút)</h3>
                              <p className="text-sm text-slate-600 mb-2">Tạo ảnh Poster du lịch Cinematic và ném ảnh vào Veo để sinh Clip Video 5s chuyển động Tilt up.</p>
                              
                              {currentLesson.prompts_with_placeholders?.step3_1 && (
                                <div className="mb-3">
                                  <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-2 rounded-t-lg text-xs font-semibold">
                                    <span>Prompt 3.1 - Cinematic Poster Image Gen</span>
                                    <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step3_1, 'Prompt 3.1')}>
                                      1-Click Copy Prompt 3.1
                                    </Button>
                                  </div>
                                  <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step3_1}</div>
                                </div>
                              )}

                              {currentLesson.prompts_with_placeholders?.step3_2 && (
                                <div className="mb-3">
                                  <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-2 rounded-t-lg text-xs font-semibold">
                                    <span>Prompt 3.2 - Veo Video 5s Motion</span>
                                    <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step3_2, 'Prompt 3.2')}>
                                      1-Click Copy Prompt 3.2
                                    </Button>
                                  </div>
                                  <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step3_2}</div>
                                </div>
                              )}

                              <div className="border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50 my-3">
                                <div className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1.5">
                                  📸 <span>Ảnh Poster Team Building Cinematic Thực Tế:</span>
                                  <Badge color="blue">image.png</Badge>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                  <img src={resolveMarkdownImageUrl('image.png')} alt="image.png" className="w-full h-56 object-contain bg-slate-50" />
                                </div>
                              </div>
                            </div>
                          </SpaceBetween>
                        </Container>

                        {/* CHANG 2: TAB SPARK BETA */}
                        <Container header={<Header variant="h2" description="45 Phút | Thao tác tại Tab Spark BETA (Menu Trái)">🔴 CHẶNG 2: TAB "SPARK BETA" - TRÌNH DUYỆT TỪ XA &amp; TỰ ĐỘNG HÓA</Header>}>
                          <SpaceBetween size="m">
                            <div>
                              <h3 className="font-bold text-slate-900 text-base mb-1">1️⃣ Trình Duyệt Từ Xa (Auto Browse) - Cào Giá Agoda / Booking (20 Phút)</h3>
                              <p className="text-sm text-slate-600 mb-2">Nhấp chuyển sang tab <strong>Spark BETA</strong> ở menu bên trái, dán câu lệnh ra lệnh cho Trình duyệt từ xa tự tương tác web Agoda / Booking.com.</p>
                              
                              {currentLesson.prompts_with_placeholders?.step2_2 && (
                                <div className="mb-3">
                                  <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-2 rounded-t-lg text-xs font-semibold">
                                    <span>Prompt Spark Auto Browse Booking</span>
                                    <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step2_2, 'Prompt Auto Browse')}>
                                      1-Click Copy Prompt Auto Browse
                                    </Button>
                                  </div>
                                  <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step2_2}</div>
                                </div>
                              )}

                              {/* SPARK REMOTE BROWSER 3 REAL SCREENSHOTS */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
                                <div className="border-2 border-dashed border-red-200 rounded-xl p-3 bg-red-50/50">
                                  <div className="text-xs font-semibold text-red-700 mb-2 flex items-center gap-1">
                                    📸 <span>1. Trình Duyệt Mở Nửa Phải:</span>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('spark-remote-browser-1.png')} alt="spark-remote-browser-1.png" className="w-full h-44 object-contain bg-slate-50" />
                                  </div>
                                </div>

                                <div className="border-2 border-dashed border-red-200 rounded-xl p-3 bg-red-50/50">
                                  <div className="text-xs font-semibold text-red-700 mb-2 flex items-center gap-1">
                                    📸 <span>2. Spark Tự Tương Tác Click:</span>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('spark-remote-browser-2.png')} alt="spark-remote-browser-2.png" className="w-full h-44 object-contain bg-slate-50" />
                                  </div>
                                </div>

                                <div className="border-2 border-dashed border-emerald-200 rounded-xl p-3 bg-emerald-50/50">
                                  <div className="text-xs font-semibold text-emerald-700 mb-2 flex items-center gap-1">
                                    📸 <span>3. Trích Xuất Giá Phòng Kết Quả:</span>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('spark-remote-browser-result.png')} alt="spark-remote-browser-result.png" className="w-full h-44 object-contain bg-slate-50" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-slate-200">
                              <h3 className="font-bold text-slate-900 text-base mb-1">2️⃣ Cài Đặt Standing Instructions 24/7 (25 Phút)</h3>
                              <p className="text-sm text-slate-600 mb-2">Vào Spark Settings &amp; Standing Instructions, dán lệnh tự động ghi nhận bill Gmail về Google Sheets 24/7.</p>
                              
                              {currentLesson.prompts_with_placeholders?.step4_1 && (
                                <div>
                                  <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-2 rounded-t-lg text-xs font-semibold">
                                    <span>Prompt Standing Instruction 24/7</span>
                                    <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step4_1, 'Prompt Standing Instruction')}>
                                      1-Click Copy Prompt Standing Instruction
                                    </Button>
                                  </div>
                                  <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step4_1}</div>
                                </div>
                              )}
                            </div>
                          </SpaceBetween>
                        </Container>

                        {/* CHANG 3: DONG GOI GEM */}
                        <Container header={<Header variant="h2" description="10 Phút | Thao tác tại Mục Custom Gems">🟢 CHẶNG 3: ĐÓNG GÓI CUSTOM GEM &amp; TỔNG KẾT</Header>}>
                          <SpaceBetween size="m">
                            <div>
                              <h3 className="font-bold text-slate-900 text-base mb-1">1️⃣ Tạo Gem "Trợ Lý Lập Kế Hoạch Du Lịch 360"</h3>
                              <p className="text-sm text-slate-600 mb-2">Đóng gói System Instruction thành Custom Gem mang về dùng lâu dài.</p>
                              
                              {currentLesson.prompts_with_placeholders?.step4_2 && (
                                <div>
                                  <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-2 rounded-t-lg text-xs font-semibold">
                                    <span>Prompt Custom Gem Instructions</span>
                                    <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step4_2, 'Prompt Custom Gem')}>
                                      1-Click Copy Gem Instruction
                                    </Button>
                                  </div>
                                  <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step4_2}</div>
                                </div>
                              )}
                            </div>
                          </SpaceBetween>
                        </Container>

                        {/* TROUBLESHOOTING SECTION */}
                        <ExpandableSection headerText="🛠️ Xử Lý Lỗi Thường Gặp (Troubleshooting Guide)">
                          <SpaceBetween size="s">
                            {currentLesson.troubleshooting.map((item, idx) => (
                              <Alert key={idx} type="warning" header={`Lỗi hay gặp: ${item.issue}`}>
                                <div><strong>Nguyên nhân:</strong> {item.cause}</div>
                                <div><strong>Cách sửa nhanh:</strong> {item.fix}</div>
                              </Alert>
                            ))}
                          </SpaceBetween>
                        </ExpandableSection>
                      </SpaceBetween>
                    )
                  },
                  {
                    id: 'tab-resources',
                    label: '📦 2. Mega-Prompt & Tài Nguyên JSON',
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
                        </SpaceBetween>
                      </Container>
                    )
                  },
                  {
                    id: 'tab-sandbox',
                    label: '🧪 3. AI Prompt Sandbox (Thử Nghiệm)',
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
                    label: '🎯 4. Checklist Hoàn Thành (DoD)',
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
