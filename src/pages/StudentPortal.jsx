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

  // Helper to render Markdown line by line with auto image path resolution
  const renderMarkdownContent = (markdownText) => {
    if (!markdownText) return null;
    const lines = markdownText.split('\n');

    return (
      <div className="space-y-4 text-slate-800">
        {lines.map((line, idx) => {
          if (line.startsWith('# ')) {
            return <h1 key={idx} className="text-2xl font-extrabold text-slate-900 mb-3">{line.replace('# ', '')}</h1>;
          }
          if (line.startsWith('## ')) {
            return <h2 key={idx} className="text-xl font-bold text-indigo-900 mt-4 mb-2 pb-1 border-b border-indigo-100">{line.replace('## ', '')}</h2>;
          }
          if (line.startsWith('### ')) {
            return <h3 key={idx} className="text-lg font-semibold text-slate-800 mt-3 mb-1">{line.replace('### ', '')}</h3>;
          }
          if (line.startsWith('![') && line.includes('](')) {
            const altMatch = line.match(/!\[(.*?)\]/);
            const urlMatch = line.match(/\((.*?)\)/);
            const alt = altMatch ? altMatch[1] : '';
            const rawUrl = urlMatch ? urlMatch[1] : '';
            const resolvedUrl = resolveMarkdownImageUrl(rawUrl);

            return (
              <div key={idx} className="my-4 border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50">
                <div className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1.5">
                  📸 <span>{alt || 'Ảnh Bài Làm Thực Tế'}:</span>
                  <Badge color="blue">IDE Synced Image ({rawUrl})</Badge>
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img src={resolvedUrl} alt={alt} className="w-full max-h-96 object-contain bg-slate-50" />
                </div>
              </div>
            );
          }
          if (line.startsWith('> 💡')) {
            return (
              <Alert key={idx} type="info" header="💡 Mẹo Tối Ưu">
                {line.replace('> 💡 ', '').replace('> 💡', '')}
              </Alert>
            );
          }
          if (line.startsWith('```')) {
            return null;
          }
          if (line.startsWith('- **') || line.startsWith('- ')) {
            return (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 py-0.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                <span>{line.replace('- ', '')}</span>
              </div>
            );
          }
          if (line.trim() === '') return <div key={idx} className="h-1"></div>;

          return <p key={idx} className="text-sm leading-relaxed text-slate-700">{line}</p>;
        })}
      </div>
    );
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
                <h3>Chỉnh sửa tệp Markdown từ IDE?</h3>
                <Box color="text-body-secondary">Mở tệp <code>src/content/buoi_1.md</code> trong VS Code, dán ảnh cùng cấp (vd: <code>image.png</code>) và lưu file. Web sẽ tự cập nhật HMR!</Box>
              </div>
            }
          >
            <SpaceBetween size="m">
              <Box variant="p">
                Chào mừng bạn đến với <strong>Buổi {currentLesson.session_number}</strong>! Đang hiển thị trực tiếp từ tệp Markdown IDE <code>src/content/buoi_{currentLesson.session_number}.md</code>.
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
                    <StatusIndicator type="success">IDE Markdown Synced</StatusIndicator>
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
                <Container header={<Header variant="h3">🎯 Nguồn Nội Dung</Header>}>
                  <StatusIndicator type="info">IDE file: src/content/buoi_{currentLesson.session_number}.md</StatusIndicator>
                  <Box color="text-body-secondary">Tự động đồng bộ ảnh cùng cấp</Box>
                </Container>
                <Container header={<Header variant="h3">🛡️ Tiêu Chuẩn</Header>}>
                  <StatusIndicator type="success">100% Zero Error Guarantee</StatusIndicator>
                  <Box color="text-body-secondary">Vite HMR Live Auto Reload</Box>
                </Container>
              </ColumnLayout>

              {/* CASE STUDY HIGHLIGHT CARD */}
              {currentLesson.case_study && (
                <Alert type="info" header={`⛺ ${currentLesson.case_study.title}`}>
                  <div className="space-y-1">
                    <div><strong>Tình huống:</strong> Bạn (dân văn phòng/tự do) lên kế hoạch du lịch / team building 3N2Đ cho nhóm 10-15 người (3-5 triệu/người).</div>
                    <div><strong>Mục tiêu:</strong> Tự động hóa từ cào địa điểm, Canvas sinh Web App 1-Click, tạo Poster/Video Veo/Music đến gom bill Gmail về Google Sheets 24/7.</div>
                  </div>
                </Alert>
              )}

              {/* TABS CONTAINER */}
              <Tabs
                tabs={[
                  {
                    id: 'tab-theory',
                    label: '💡 1. Bối Cảnh & Nội Dung Giáo Án',
                    content: (
                      <Container header={<Header variant="h2" description={`Nội dung hiển thị live từ src/content/buoi_${currentLesson.session_number}.md`}>Giáo Án Chi Tiết (IDE Live Stream)</Header>}>
                        <SpaceBetween size="l">
                          {renderMarkdownContent(currentLesson.raw_markdown)}
                        </SpaceBetween>
                      </Container>
                    )
                  },
                  {
                    id: 'tab-steps',
                    label: '📋 2. Quy Trình 4 Mắt Xích Thực Hành & Prompt Buttons',
                    content: (
                      <Container header={<Header variant="h2" description="Các Nút 1-Click Copy Prompt & Ảnh Mẫu Thực Tế">4 Mắt Xích Thực Hành 90 Phút</Header>}>
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

                              {/* DYNAMIC IMAGE RESOLUTION FOR IMAGE-1.PNG AND IMAGE-2.PNG */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50">
                                  <div className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1.5">
                                    📸 <span>Ảnh 1 (image-1.png):</span>
                                    <Badge color="blue">image-1.png</Badge>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('image-1.png')} alt="image-1.png" className="w-full h-48 object-contain bg-slate-50" />
                                  </div>
                                </div>

                                <div className="border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50">
                                  <div className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1.5">
                                    📸 <span>Ảnh 2 (image-2.png):</span>
                                    <Badge color="blue">image-2.png</Badge>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('image-2.png')} alt="image-2.png" className="w-full h-48 object-contain bg-slate-50" />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 1.2: Chốt địa điểm & Concept bằng Guided Learning</h4>
                                <p className="text-xs text-slate-600 mb-2">Bật Guided Learning đưa ra 3 câu hỏi trắc nghiệm tương tác để chọn địa điểm & concept.</p>
                                {currentLesson.prompts_with_placeholders?.step1_2 && (
                                  <div className="mb-4">
                                    <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-1.5 rounded-t-lg text-xs font-semibold">
                                      <span>Prompt 1.2 - Guided Learning Q&A</span>
                                      <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.prompts_with_placeholders.step1_2, 'Prompt 1.2')}>
                                        1-Click Copy Prompt 1.2
                                      </Button>
                                    </div>
                                    <div className="custom-code-editor rounded-b-lg rounded-t-none">{currentLesson.prompts_with_placeholders.step1_2}</div>
                                  </div>
                                )}

                                {/* GUIDED LEARNING QUIZ REAL SCREENSHOT */}
                                <div className="border-2 border-dashed border-indigo-200 rounded-xl p-3 bg-indigo-50/50 mt-3">
                                  <div className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1.5">
                                    📸 <span>Giao diện Trắc Nghiệm Guided Learning Thực Tế:</span>
                                    <Badge color="blue">guided-learning-quiz.png</Badge>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('guided-learning-quiz.png')} alt="guided-learning-quiz.png" className="w-full h-64 object-contain bg-slate-50" />
                                  </div>
                                </div>
                              </div>
                            </SpaceBetween>
                          </Container>

                          {/* MAT XICH 2 */}
                          <Container header={<Header variant="h3" description="25 Phút | 01:15 - 00:40">🔗 MẮT XÍCH 2: CANVAS BUILT-IN WEB APP & SPARK AUTO BROWSE</Header>}>
                            <SpaceBetween size="m">
                              <Alert type="info" header="💡 Đột Phá Gemini Canvas: Tính Năng Built-in 'Tạo -> Trang web'">
                                Sau khi Gemini trả Báo cáo Deep Research trên Canvas, chỉ cần nhìn góc trên bên phải bấm <strong>Tạo &rarr; Trang web</strong>. Gemini sẽ tự sinh 1 Interactive Web App trực quan mà không cần gõ thêm Prompt!
                              </Alert>

                              {/* CANVAS WEBSITE APP REAL SCREENSHOTS */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="border-2 border-dashed border-emerald-200 rounded-xl p-3 bg-emerald-50/50">
                                  <div className="text-xs font-semibold text-emerald-700 mb-2 flex items-center gap-1.5">
                                    📸 <span>Bấm nút Tạo &rarr; Trang web trên Canvas:</span>
                                    <Badge color="green">canvas-create-web.png</Badge>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('canvas-create-web.png')} alt="canvas-create-web.png" className="w-full h-48 object-contain bg-slate-50" />
                                  </div>
                                </div>

                                <div className="border-2 border-dashed border-emerald-200 rounded-xl p-3 bg-emerald-50/50">
                                  <div className="text-xs font-semibold text-emerald-700 mb-2 flex items-center gap-1.5">
                                    📸 <span>Web App Team Building Sinh Ra Tự Động:</span>
                                    <Badge color="green">canvas-web-app.png</Badge>
                                  </div>
                                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
                                    <img src={resolveMarkdownImageUrl('canvas-web-app.png')} alt="canvas-web-app.png" className="w-full h-48 object-contain bg-slate-50" />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 2.2: Sửa trực tiếp trên Canvas & Auto Browse cào giá Homestay</h4>
                                <p className="text-xs text-slate-600 mb-2">Dùng Comment lề trang sửa văn bản &amp; Ra lệnh Spark Auto Browse cào bảng giá phòng Homestay.</p>
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
                                <p className="text-xs text-slate-600 mb-2">Mở Spark Settings &amp; Standing Instructions dán lệnh tự động trích xuất bill Gmail sang Google Sheets.</p>
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

                              <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">📌 Thao tác 4.2: Đóng gói thành Custom Gem dùng lâu dài</h4>
                                <p className="text-xs text-slate-600 mb-2">Vào Gems &amp; Create New Gem, dán System Instruction tạo Bot 'Trợ Lý Lập Kế Hoạch Sự Kiện &amp; Du Lịch'.</p>
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
