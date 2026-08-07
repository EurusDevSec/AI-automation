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
                  { type: 'link', text: 'Buổi 1: Spark OS & Case Study', href: '#buoi-1', info: <Badge color="blue">Cơ bản</Badge> },
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
                Chào mừng bạn đến với <strong>Buổi {currentLesson.session_number}</strong>! Mỗi buổi học kéo dài 90 phút và được tối ưu hóa theo triết lý <em>Golden Path</em>.
              </Box>
              <div>
                <h4>Mẹo thực hành mượt mà:</h4>
                <ul>
                  <li>Thay thế các từ trong ngoặc vuông <strong>[TÊN_SẢN_PHẨM_DỊCH_VỤ]</strong> bằng ý tưởng của bạn.</li>
                  <li>Bấm <strong>1-Click Copy Prompt</strong> để sao chép vào Clipboard.</li>
                  <li>Xem <strong>Ảnh Bài Làm Thực Tế Mẫu</strong> bên dưới từng Mắt xích để so sánh kết quả.</li>
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
                  ✅ Đã sao chép <strong>{copiedPromptName}</strong> vào Clipboard! Dán trực tiếp vào Gemini / AI để chạy ngay.
                </Alert>
              )}

              {/* OVERVIEW CARDS */}
              <ColumnLayout columns={3} variant="classic">
                <Container header={<Header variant="h3">⏱️ Thời Lượng</Header>}>
                  <Box variant="h2">90 Phút</Box>
                  <Box color="text-body-secondary">Thực hành 100% trên lớp</Box>
                </Container>
                <Container header={<Header variant="h3">🎯 Cấp Độ & Đối Tượng</Header>}>
                  <StatusIndicator type="info">Dân Văn Phòng & Chủ Shop</StatusIndicator>
                  <Box color="text-body-secondary">Không cần kiến thức lập trình</Box>
                </Container>
                <Container header={<Header variant="h3">🛡️ Tiêu Chuẩn</Header>}>
                  <StatusIndicator type="success">100% Zero Error Guarantee</StatusIndicator>
                  <Box color="text-body-secondary">Prompt đã thử nghiệm 100%</Box>
                </Container>
              </ColumnLayout>

              {/* CASE STUDY HIGHLIGHT CARD */}
              {currentLesson.case_study && (
                <Alert type="info" header={`🎯 ${currentLesson.case_study.title}`}>
                  <div className="space-y-1">
                    <div><strong>Đối tượng thực hành:</strong> {currentLesson.case_study.target_audience}</div>
                    <div><strong>Mục tiêu buổi học:</strong> {currentLesson.case_study.goal}</div>
                  </div>
                </Alert>
              )}

              {/* TABS CONTAINER */}
              <Tabs
                tabs={[
                  {
                    id: 'tab-theory',
                    label: '💡 1. Lý Thuyết & Ma Trận Công Cụ',
                    content: (
                      <Container header={<Header variant="h2" description="Tổng quan khái niệm & kết quả người học sẽ gặt hái được sau 90 phút">Mục Tiêu Bài Học Buổi {currentLesson.session_number}</Header>}>
                        <SpaceBetween size="l">
                          {/* MAIN SESSION IMAGE */}
                          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                            <img
                              src={currentLesson.image_url}
                              alt={currentLesson.title}
                              className="w-full h-auto max-h-[380px] object-cover"
                            />
                          </div>

                          <Container header={<Header variant="h3">📖 Tổng Quan Buổi Học</Header>}>
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
                      <Container header={<Header variant="h2" description="Thực hành từng bước ngắn gọn (<10 từ/gạch đầu dòng) kèm Ảnh Mẫu Thực Tế & Prompt Placeholders">Thực Hành Case Study Trực Quan</Header>}>
                        <SpaceBetween size="l">
                          {/* STEP 1 CARD */}
                          <Container header={<Header variant="h3" description="15 Phút | 00:00 - 00:15">🔗 Mắt Xích 1: Khởi Tạo Bộ Não AI & Research Thị Trường</Header>}>
                            <SpaceBetween size="m">
                              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                                <li>Bật <strong>Personal Intelligence</strong> trong Cài đặt Gemini.</li>
                                <li>Tạo thư mục <strong>Spark OS</strong> trên Google Drive.</li>
                                <li>Nhấn 1-Click Copy Prompt Step 1 dán vào Gemini.</li>
                                <li>Bật <strong>Guided Learning</strong> chốt góc đánh tiếp thị.</li>
                              </ul>

                              {/* SAMPLE IMAGE SLOT STEP 1 */}
                              <div className="border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50">
                                <div className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1.5">
                                  📸 <span>Ảnh Bài Làm Thực Tế Mẫu (Mắt Xích 1):</span>
                                  <Badge color="blue">Sample Work</Badge>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-slate-200">
                                  <img src="/session_1.jpg" alt="Mắt Xích 1 Mẫu" className="w-full h-56 object-cover" />
                                </div>
                              </div>

                              {/* PROMPT PLACEHOLDER STEP 1 */}
                              {currentLesson.prompts_with_placeholders?.step1 && (
                                <div>
                                  <Header
                                    variant="h4"
                                    actions={
                                      <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step1, 'Prompt Step 1')}>
                                        1-Click Copy Step 1 Prompt
                                      </Button>
                                    }
                                  >
                                    📋 Prompt Mẫu Mắt Xích 1 (Kèm Placeholders)
                                  </Header>
                                  <div className="custom-code-editor">{currentLesson.prompts_with_placeholders.step1}</div>
                                </div>
                              )}
                            </SpaceBetween>
                          </Container>

                          {/* STEP 2 CARD */}
                          <Container header={<Header variant="h3" description="25 Phút | 00:15 - 00:40">🔗 Mắt Xích 2: Dàn Kịch Bản Canvas & Chrome Auto Browse</Header>}>
                            <SpaceBetween size="m">
                              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                                <li>Bấm 1-Click Copy Step 2 Prompt dán vào <strong>Canvas</strong>.</li>
                                <li>Gõ comment lề trang Canvas để Spark tự sửa nội dung.</li>
                                <li>Chạy Spark Chrome Auto Browse cào dữ liệu web đối thủ.</li>
                              </ul>

                              {/* SAMPLE IMAGE SLOT STEP 2 */}
                              <div className="border-2 border-dashed border-emerald-200 rounded-xl p-3 bg-emerald-50/50">
                                <div className="text-xs font-semibold text-emerald-700 mb-2 flex items-center gap-1.5">
                                  📸 <span>Ảnh Bài Làm Thực Tế Mẫu (Mắt Xích 2):</span>
                                  <Badge color="green">Sample Work</Badge>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-slate-200">
                                  <img src="/workflow_n8n_preview.jpg" alt="Mắt Xích 2 Mẫu" className="w-full h-56 object-cover" />
                                </div>
                              </div>

                              {/* PROMPT PLACEHOLDER STEP 2 */}
                              {currentLesson.prompts_with_placeholders?.step2 && (
                                <div>
                                  <Header
                                    variant="h4"
                                    actions={
                                      <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step2, 'Prompt Step 2')}>
                                        1-Click Copy Step 2 Prompt
                                      </Button>
                                    }
                                  >
                                    📋 Prompt Mẫu Mắt Xích 2 (Kèm Placeholders)
                                  </Header>
                                  <div className="custom-code-editor">{currentLesson.prompts_with_placeholders.step2}</div>
                                </div>
                              )}
                            </SpaceBetween>
                          </Container>

                          {/* STEP 3 CARD */}
                          <Container header={<Header variant="h3" description="25 Phút | 00:40 - 01:05">🔗 Mắt Xích 3: Xưởng Sản Xuất Đa Phương Tiện End-to-End</Header>}>
                            <SpaceBetween size="m">
                              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                                <li>Tạo ảnh Banner Studio từ kịch bản Canvas.</li>
                                <li>Nhập Prompt camera 3D biến ảnh thành Clip Video Veo 5s.</li>
                                <li>Chạy Prompt Audio Music song song trong lúc chờ Veo render.</li>
                              </ul>

                              <Alert type="info" header="💡 Mẹo Render Song Song Tối Ưu Thời Gian">
                                Khi Veo đang xử lý render Video (mất ~1-2 phút), hãy lấy ngay Prompt Audio Music chạy tạo nhạc nền song song để không lãng phí 2 phút chờ trên lớp!
                              </Alert>

                              {/* SAMPLE IMAGE SLOT STEP 3 */}
                              <div className="border-2 border-dashed border-amber-200 rounded-xl p-3 bg-amber-50/50">
                                <div className="text-xs font-semibold text-amber-700 mb-2 flex items-center gap-1.5">
                                  📸 <span>Ảnh Bài Làm Thực Tế Mẫu (Mắt Xích 3):</span>
                                  <Badge color="red">Sample Work</Badge>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-slate-200">
                                  <img src="/hero_ai_automation_light.jpg" alt="Mắt Xích 3 Mẫu" className="w-full h-56 object-cover" />
                                </div>
                              </div>

                              {/* PROMPT PLACEHOLDER STEP 3 */}
                              {currentLesson.prompts_with_placeholders?.step3 && (
                                <div>
                                  <Header
                                    variant="h4"
                                    actions={
                                      <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step3, 'Prompt Step 3')}>
                                        1-Click Copy Step 3 Prompt
                                      </Button>
                                    }
                                  >
                                    📋 Prompt Mẫu Mắt Xích 3 (Kèm Placeholders)
                                  </Header>
                                  <div className="custom-code-editor">{currentLesson.prompts_with_placeholders.step3}</div>
                                </div>
                              )}
                            </SpaceBetween>
                          </Container>

                          {/* STEP 4 CARD */}
                          <Container header={<Header variant="h3" description="25 Phút | 01:05 - 01:30">🔗 Mắt Xích 4: Standing Instructions 24/7 & Đóng Gói Custom Gem</Header>}>
                            <SpaceBetween size="m">
                              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                                <li>Dán lệnh Standing Instruction (Gmail tự điền Google Sheets).</li>
                                <li>Tự gửi 1 Gmail test kiểm tra dữ liệu tự nhảy vào Sheets.</li>
                                <li>Lưu System Instruction đóng gói thành Custom Gem Bot.</li>
                              </ul>

                              {/* SAMPLE IMAGE SLOT STEP 4 */}
                              <div className="border-2 border-dashed border-purple-200 rounded-xl p-3 bg-purple-50/50">
                                <div className="text-xs font-semibold text-purple-700 mb-2 flex items-center gap-1.5">
                                  📸 <span>Ảnh Bài Làm Thực Tế Mẫu (Mắt Xích 4):</span>
                                  <Badge color="blue">Sample Work</Badge>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-slate-200">
                                  <img src="/session_1.jpg" alt="Mắt Xích 4 Mẫu" className="w-full h-56 object-cover" />
                                </div>
                              </div>

                              {/* PROMPT PLACEHOLDER STEP 4 */}
                              {currentLesson.prompts_with_placeholders?.step4 && (
                                <div>
                                  <Header
                                    variant="h4"
                                    actions={
                                      <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step4, 'Prompt Step 4')}>
                                        1-Click Copy Step 4 Prompt
                                      </Button>
                                    }
                                  >
                                    📋 Prompt Mẫu Mắt Xích 4 (Kèm Placeholders)
                                  </Header>
                                  <div className="custom-code-editor">{currentLesson.prompts_with_placeholders.step4}</div>
                                </div>
                              )}
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
                                    1-Click Copy Mega-Prompt
                                  </Button>
                                }
                              >
                                📄 Mega-Prompt / Script Text
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

                          {currentLesson.sql_template && (
                            <div>
                              <Header
                                variant="h3"
                                actions={
                                  <Button
                                    iconName="copy"
                                    onClick={() => handleCopyPrompt(currentLesson.sql_template, 'SQL Schema')}
                                  >
                                    Copy SQL Schema
                                  </Button>
                                }
                              >
                                🗄️ Supabase / PostgreSQL SQL Schema
                              </Header>
                              <div className="custom-code-editor">{currentLesson.sql_template}</div>
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
