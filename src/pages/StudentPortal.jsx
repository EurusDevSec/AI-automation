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

  // Helper to parse inline markdown (**bold**, *italic*, HTML entities)
  const parseInlineMarkdown = (text) => {
    if (!text) return '';
    
    // Clean HTML entities & arrow symbols
    let cleanText = text
      .replace(/&rarr;/g, '→')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/&amp;/g, '&');

    // Split by bold (**text**) and italic (*text*)
    const parts = cleanText.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
        return <em key={idx} className="italic text-slate-700">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  // Helper to render Full-Width 100% Clean Image Cards (No popup modal needed)
  const renderFullWidthImageCard = (src, title, badgeColor = "blue") => {
    const resolvedUrl = resolveMarkdownImageUrl(src);
    return (
      <div 
        key={src + title}
        className="border-2 border-dashed border-indigo-200 rounded-2xl p-4 bg-indigo-50/40 my-4 w-full shadow-sm"
      >
        <div className="text-sm font-bold text-indigo-900 mb-2.5 flex items-center justify-between">
          <span className="flex items-center gap-2">📸 <span>{title || 'Ảnh chụp màn hình'}:</span></span>
          <Badge color={badgeColor}>{src}</Badge>
        </div>
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white w-full shadow-inner">
          <img 
            src={resolvedUrl} 
            alt={title || src} 
            className="w-full h-auto object-cover bg-slate-50" 
          />
        </div>
      </div>
    );
  };

  // Helper to render Full-Width 100% HTML5 Video Player Cards
  const renderFullWidthVideoCard = (src, title = 'Video AI Trailer') => {
    const resolvedUrl = resolveMarkdownImageUrl(src);
    return (
      <div 
        key={src + title}
        className="border-2 border-dashed border-indigo-300 rounded-2xl p-4 bg-indigo-950/5 transition-all shadow-md my-5 w-full"
      >
        <div className="text-sm font-bold text-indigo-950 mb-2.5 flex items-center justify-between">
          <span className="flex items-center gap-2">🎬 <span>{title}:</span></span>
          <Badge color="red">{src}</Badge>
        </div>
        <div className="rounded-xl overflow-hidden border border-slate-300 bg-black relative w-full shadow-lg">
          <video 
            src={resolvedUrl} 
            controls 
            className="w-full h-auto max-h-[550px] object-contain mx-auto"
          />
        </div>
      </div>
    );
  };

  // Helper to render Full-Width 100% HTML5 Audio Player Cards
  const renderFullWidthAudioCard = (src, title = 'Nhạc Nền Audio Tropical House') => {
    const resolvedUrl = resolveMarkdownImageUrl(src);
    return (
      <div 
        key={src + title}
        className="border-2 border-dashed border-emerald-300 rounded-2xl p-4 bg-emerald-50/60 transition-all shadow-sm my-5 w-full"
      >
        <div className="text-sm font-bold text-emerald-950 mb-2.5 flex items-center justify-between">
          <span className="flex items-center gap-2">🎵 <span>{title}:</span></span>
          <Badge color="green">{src}</Badge>
        </div>
        <div className="rounded-xl overflow-hidden border border-emerald-200 bg-white p-3 shadow-inner flex items-center gap-3">
          <audio 
            src={resolvedUrl} 
            controls 
            className="w-full h-11"
          />
        </div>
      </div>
    );
  };

  // DYNAMIC MARKDOWN PARSER & RENDERER
  // Parses markdown string line-by-line so ALL markdown tags (#, ##, **, *, images, videos, audio) format into rich HTML!
  const renderDynamicMarkdown = (markdownText) => {
    if (!markdownText) return null;

    const lines = markdownText.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeBuffer = [];
    let codeLang = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code Block Start / End
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          // Finish code block
          const codeText = codeBuffer.join('\n');
          const promptTitle = codeLang ? `Prompt (${codeLang})` : 'Prompt';
          elements.push(
            <div key={`code-${i}`} className="my-4">
              <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-3 py-2 rounded-t-lg text-xs font-semibold">
                <span>{promptTitle}</span>
                <Button 
                  iconName="copy" 
                  variant="primary" 
                  onClick={() => handleCopyPrompt(codeText, promptTitle)}
                >
                  1-Click Copy Prompt
                </Button>
              </div>
              <div className="custom-code-editor rounded-b-lg rounded-t-none">{codeText}</div>
            </div>
          );
          codeBuffer = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
          codeLang = line.trim().replace('```', '');
        }
        continue;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        continue;
      }

      // HTML <audio ... src="filename.mp3"> Tag Match
      const htmlAudioMatch = line.trim().match(/<audio[^>]*src=["'](.*?)["']/i);
      if (htmlAudioMatch) {
        const audioSrc = htmlAudioMatch[1];
        elements.push(renderFullWidthAudioCard(audioSrc, 'Nhạc Nền Audio MP3 Thực Tế'));
        continue;
      }

      // HTML <video ... src="filename.mp4"> Tag Match
      const htmlVideoMatch = line.trim().match(/<video[^>]*src=["'](.*?)["']/i);
      if (htmlVideoMatch) {
        const videoSrc = htmlVideoMatch[1];
        elements.push(renderFullWidthVideoCard(videoSrc, 'Video AI Trailer Thực Tế'));
        continue;
      }

      // Image / Video / Audio Tag Match: ![alt](filename.ext)
      const imgMatch = line.trim().match(/^!\[(.*?)\]\((.*?)\)/);
      if (imgMatch) {
        const altText = imgMatch[1] || 'Tệp đính kèm';
        const mediaSrc = imgMatch[2];
        const isVideo = /\.(mp4|webm|mov)$/i.test(mediaSrc);
        const isAudio = /\.(mp3|wav|ogg|m4a|flac)$/i.test(mediaSrc);

        if (isVideo) {
          elements.push(renderFullWidthVideoCard(mediaSrc, altText));
        } else if (isAudio) {
          elements.push(renderFullWidthAudioCard(mediaSrc, altText));
        } else {
          elements.push(renderFullWidthImageCard(mediaSrc, altText, 'blue'));
        }
        continue;
      }

      // Heading 1 (# ...) -> Main Page Title Header
      if (line.trim().startsWith('# ')) {
        const titleText = line.trim().replace(/^#\s+/, '');
        elements.push(
          <h1 key={`h1-${i}`} className="text-2xl font-extrabold text-slate-900 my-4 pb-3 border-b-2 border-slate-200 leading-tight">
            {parseInlineMarkdown(titleText)}
          </h1>
        );
        continue;
      }

      // Heading 2 (## ...) -> Container Section Header
      if (line.trim().startsWith('## ')) {
        const titleText = line.trim().replace(/^##\s+/, '');
        elements.push(
          <h2 key={`h2-${i}`} className="pt-6 pb-2 border-b border-slate-200 text-xl font-bold text-slate-900 flex items-center gap-2">
            {parseInlineMarkdown(titleText)}
          </h2>
        );
        continue;
      }

      // Heading 3 (### ...) -> Sub-heading
      if (line.trim().startsWith('### ')) {
        const titleText = line.trim().replace(/^###\s+/, '');
        elements.push(
          <h3 key={`h3-${i}`} className="text-base font-bold text-slate-900 mt-5 mb-2 flex items-center gap-1.5">
            {parseInlineMarkdown(titleText)}
          </h3>
        );
        continue;
      }

      // Bullet List Items (* ... or - ...)
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const listText = line.trim().replace(/^[\*\-]\s+/, '');
        elements.push(
          <li key={`li-${i}`} className="ml-5 list-disc text-slate-700 text-sm my-1 leading-relaxed">
            {parseInlineMarkdown(listText)}
          </li>
        );
        continue;
      }

      // Blockquote (> ...) -> Alert Box
      if (line.trim().startsWith('> ')) {
        const quoteText = line.trim().replace(/^>\s+/, '');
        elements.push(
          <Alert key={`quote-${i}`} type="info" className="my-3">
            {parseInlineMarkdown(quoteText)}
          </Alert>
        );
        continue;
      }

      // Standard Paragraph text
      if (line.trim().length > 0 && !line.trim().startsWith('---')) {
        elements.push(
          <p key={`p-${i}`} className="text-slate-700 text-sm my-2 leading-relaxed">
            {parseInlineMarkdown(line)}
          </p>
        );
      }
    }

    return <div className="space-y-2">{elements}</div>;
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
                <h3>Hỗ Trợ Phát Audio MP3:</h3>
                <Box color="text-body-secondary">
                  Dán file âm thanh <code>.mp3</code> vào <code>src/content/</code> và gõ <code>&lt;audio src="nhac.mp3" controls&gt;&lt;/audio&gt;</code> để nghe nhạc live!
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
                    <StatusIndicator type="success">HTML5 Audio Player Active</StatusIndicator>
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
                <Container header={<Header variant="h3">🎵 MP3 Audio Support</Header>}>
                  <StatusIndicator type="success">HTML5 Audio Player</StatusIndicator>
                  <Box color="text-body-secondary">Phát nhạc nền MP3 trực tiếp</Box>
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
                              <div className="text-xs text-indigo-700 font-semibold mt-1">✨ Đã bật tính năng trình phát Nhạc Nền MP3 trực tiếp từ file Markdown!</div>
                            </div>
                          </Alert>
                        )}

                        {/* DYNAMIC MARKDOWN RENDERER - RENDERS EVERYTHING IN BUOI_1.MD LIVE! */}
                        <Container header={<Header variant="h2" description="Giáo án &amp; Quy trình thực hành live từ IDE">Master Blueprint Live Content</Header>}>
                          {renderDynamicMarkdown(currentLesson.raw_markdown)}
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
                    id: 'tab-sandbox',
                    label: '🧪 2. AI Prompt Sandbox (Thử Nghiệm)',
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
                    label: '🎯 3. Checklist Hoàn Thành (DoD)',
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
