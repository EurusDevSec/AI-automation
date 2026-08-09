import React, { useState, useEffect } from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import Badge from '@cloudscape-design/components/badge';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import Alert from '@cloudscape-design/components/alert';
import Box from '@cloudscape-design/components/box';
import HelpPanel from '@cloudscape-design/components/help-panel';
import AnchorNavigation from '@cloudscape-design/components/anchor-navigation';
import Navigation from '../components/Navigation';
import { initialLessonsData } from '../data/lessonsData';
import { getLocalLessonsOverride } from '../lib/supabase';
import { getLessonStructuredData } from '../lib/resolveMarkdown';
import { resolveMarkdownImageUrl } from '../lib/resolveImage';

export default function StudentPortal() {
  const [activeSession, setActiveSession] = useState(1);
  const [navigationOpen, setNavigationOpen] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copiedPromptName, setCopiedPromptName] = useState('');
  const [lessons, setLessons] = useState(initialLessonsData);
  const [toolsOpen, setToolsOpen] = useState(false);

  // Exercise and Method selection states for ultra-clean UI/UX
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  const [activeMethodIndex, setActiveMethodIndex] = useState(0);

  // TOC (Table of Contents) States
  const [isTocVisible, setIsTocVisible] = useState(true);
  const [activeHeadingId, setActiveHeadingId] = useState('');
  const [tocViewMode, setTocViewMode] = useState('tree');

  useEffect(() => {
    const overrides = getLocalLessonsOverride();
    if (Object.keys(overrides).length > 0) {
      setLessons((prev) =>
        prev.map((l) => (overrides[l.session_number] ? { ...l, ...overrides[l.session_number] } : l))
      );
    }
  }, []);

  // Reset exercise and method selections when switching sessions
  useEffect(() => {
    setActiveExerciseIndex(0);
    setActiveMethodIndex(0);
  }, [activeSession]);

  useEffect(() => {
    setActiveMethodIndex(0);
  }, [activeExerciseIndex]);

  const currentLesson = lessons.find((l) => l.session_number === activeSession) || lessons[0];
  const structuredData = getLessonStructuredData(activeSession, currentLesson.raw_markdown);
  const activeExercise = structuredData.exercises[activeExerciseIndex] || structuredData.exercises[0];
  const activeMethod = activeExercise?.methods[activeMethodIndex] || activeExercise?.methods[0];
  const activeMarkdown = activeMethod?.content || activeExercise?.rawText || '';

  // ScrollSpy listener to dynamically update active anchor link on page scroll
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]');
      if (!headings.length) return;

      let currentId = '';
      const scrollPosition = window.scrollY + 130;

      headings.forEach((heading) => {
        const top = heading.offsetTop;
        if (scrollPosition >= top) {
          currentId = heading.id;
        }
      });

      if (currentId && currentId !== activeHeadingId) {
        setActiveHeadingId(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeHeadingId, activeSession, activeExerciseIndex, activeMethodIndex]);

  const handleCopyPrompt = (promptText, promptName = 'Prompt') => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptName(promptName);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  // Helper to slugify heading text into a unique DOM element ID
  const makeHeadingId = (text, index) => {
    if (!text) return `section-${index}`;
    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9àáảãạăắằẳẵặcâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return `heading-${slug || index}`;
  };

  // Smooth Scroll Helper for Table of Contents Anchor Links
  const scrollToHeading = (id) => {
    setActiveHeadingId(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Get Icon helper for TOC Cards
  const getSectionIcon = (text) => {
    if (!text) return '📌';
    const upper = text.toUpperCase();
    if (upper.includes('TỔNG QUAN') || upper.includes('GIỚI THIỆU')) return '📖';
    if (upper.includes('BƯỚC 1') || upper.includes('GIAI ĐOẠN 1')) return '🟢';
    if (upper.includes('BƯỚC 2') || upper.includes('GIAI ĐOẠN 2')) return '🔵';
    if (upper.includes('BƯỚC 3') || upper.includes('GIAI ĐOẠN 3')) return '🟣';
    if (upper.includes('BƯỚC 4') || upper.includes('GIAI ĐOẠN 4')) return '🟠';
    if (upper.includes('CHECKLIST') || upper.includes('OKR')) return '✅';
    if (upper.includes('PHẦN') || upper.includes('BÀI')) return '📄';
    return '📌';
  };

  // Extract Key Heading Structure from active Markdown
  const extractTocHeadings = (markdown) => {
    if (!markdown) return [];
    const lines = markdown.split('\n');
    const headings = [];
    let inCodeBlock = false;

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        return;
      }
      if (inCodeBlock) return;
      if (trimmed.startsWith('=== SUBTAB:')) return;

      let level = 0;
      let text = '';

      if (trimmed.startsWith('# ')) {
        level = 1;
        text = trimmed.replace(/^#\s+/, '');
      } else if (trimmed.startsWith('## ')) {
        level = 2;
        text = trimmed.replace(/^##\s+/, '');
      } else if (trimmed.startsWith('### ')) {
        level = 3;
        text = trimmed.replace(/^###\s+/, '');
      } else if (trimmed.startsWith('#### ')) {
        text = trimmed.replace(/^####\s+/, '');
        if (/^(bước|giai đoạn|phần|chặng|checklist|okr|quần|tỔng quan)/i.test(text)) {
          level = 4;
        }
      }

      if (level > 0 && text) {
        const cleanText = text
          .replace(/\[(.*?)\]\(.*?\)/g, '$1')
          .replace(/\*\*(.*?)\*\*/g, '$1')
          .replace(/\*(.*?)\*/g, '$1')
          .replace(/`(.*?)`/g, '$1')
          .replace(/\\rightarrow/g, '→')
          .replace(/\$\\rightarrow\$/g, '→')
          .replace(/&rarr;/g, '→');

        const id = makeHeadingId(text, idx);
        headings.push({ level, text: cleanText, id });
      }
    });

    return headings;
  };

  // Convert headings to Cloudscape AnchorNavigation format
  const getCloudscapeAnchors = (markdown) => {
    const headings = extractTocHeadings(markdown);
    if (!headings.length) return [];
    return headings.map((h) => ({
      text: h.text,
      href: `#${h.id}`,
      level: Math.min(Math.max(h.level, 1), 3)
    }));
  };

  const anchors = getCloudscapeAnchors(activeMarkdown);
  const activeHref = activeHeadingId ? `#${activeHeadingId}` : (anchors[0]?.href || '');

  // Inline Markdown Parser
  const parseInlineMarkdown = (text) => {
    if (!text) return '';
    
    let cleanText = text
      .replace(/\\rightarrow/g, '→')
      .replace(/\$\\rightarrow\$/g, '→')
      .replace(/\$\\rightarrow/g, '→')
      .replace(/\\rarr/g, '→')
      .replace(/&rarr;/g, '→')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/&amp;/g, '&');

    const parts = cleanText.split(/(\[.*?\]\(.*?\)\s*|\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, idx) => {
      if (!part) return null;

      const codeMatch = part.match(/^`(.*?)`/);
      if (codeMatch) {
        return (
          <code key={`code-${idx}`} className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 text-indigo-700 font-mono text-xs rounded font-semibold mx-0.5">
            {codeMatch[1]}
          </code>
        );
      }

      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        const label = linkMatch[1];
        const rawUrl = linkMatch[2];
        const resolvedUrl = resolveMarkdownImageUrl(rawUrl);
        const isDownload = /\.(docx|doc|pdf|xlsx|xls|zip|rar|json)$/i.test(rawUrl);

        return (
          <a
            key={`link-${idx}`}
            href={resolvedUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={isDownload ? true : undefined}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-all text-xs mx-1 shadow-2xs no-underline hover:text-indigo-800 cursor-pointer"
          >
            <span>{label}</span>
            <span className="text-indigo-400">↗</span>
          </a>
        );
      }

      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`bold-${idx}`} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
        return <em key={`italic-${idx}`} className="italic text-slate-700">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  // Helper to render Full-Width Image Cards
  const renderFullWidthImageCard = (src, altText) => {
    const resolvedSrc = resolveMarkdownImageUrl(src);
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm transition-all hover:shadow-md">
        <div className="relative group bg-slate-900 overflow-hidden flex items-center justify-center min-h-[220px]">
          <img
            src={resolvedSrc}
            alt={altText}
            className="w-full h-auto object-contain max-h-[550px] transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </div>
        <div className="p-3.5 bg-gradient-to-r from-slate-50 to-white border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-700">{altText}</span>
          </div>
          <a
            href={resolvedSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline"
          >
            <span>Mở ảnh phóng to</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    );
  };

  // Helper to render Full-Width Audio Cards
  const renderFullWidthAudioCard = (src, title) => {
    const resolvedSrc = resolveMarkdownImageUrl(src);
    return (
      <div className="my-6 p-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/50 via-white to-slate-50 shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm flex-shrink-0 text-lg">
            🎧
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">{title}</h4>
            <p className="text-[11px] text-slate-500">Audio Podcast Tóm Tắt Bản Tin</p>
          </div>
        </div>
        <div className="flex-1 w-full">
          <audio controls src={resolvedSrc} className="w-full h-10 rounded-lg shadow-2xs" />
        </div>
      </div>
    );
  };

  // Helper to render Full-Width Video Cards
  const renderFullWidthVideoCard = (src, title) => {
    const resolvedSrc = resolveMarkdownImageUrl(src);
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-md">
        <div className="p-3 bg-slate-900 text-slate-200 flex items-center justify-between text-xs font-semibold border-b border-slate-800">
          <span className="flex items-center gap-2"><span>🎬</span> <span>{title}</span></span>
          <Badge color="blue">Video AI Trailer 5s</Badge>
        </div>
        <div className="relative flex justify-center bg-black">
          <video
            controls
            src={resolvedSrc}
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>
      </div>
    );
  };

  // RENDER SINGLE MARKDOWN CONTENT BLOCK WITH HEADINGS ID ATTRIBUTES
  const renderSingleMarkdownContent = (markdownText) => {
    if (!markdownText) return null;

    const lines = markdownText.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeBuffer = [];
    let codeLang = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          const codeText = codeBuffer.join('\n');
          const promptTitle = codeLang ? `Prompt (${codeLang})` : 'Prompt';
          elements.push(
            <div key={`code-${i}`} className="my-5 shadow-2xs rounded-xl overflow-hidden border border-slate-800">
              <div className="flex items-center justify-between bg-slate-900 text-slate-200 px-4 py-2.5 text-xs font-semibold border-b border-slate-800">
                <span className="flex items-center gap-2"><span>📝</span> <span>{promptTitle}</span></span>
                <Button 
                  iconName="copy" 
                  variant="primary" 
                  onClick={() => handleCopyPrompt(codeText, promptTitle)}
                >
                  1-Click Copy Prompt
                </Button>
              </div>
              <div className="custom-code-editor rounded-none border-none">{codeText}</div>
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

      const htmlAudioMatch = line.trim().match(/<audio[^>]*src=["'](.*?)["']/i);
      if (htmlAudioMatch) {
        elements.push(renderFullWidthAudioCard(htmlAudioMatch[1], 'Nhạc Nền Audio MP3 Thực Tế'));
        continue;
      }

      const htmlVideoMatch = line.trim().match(/<video[^>]*src=["'](.*?)["']/i);
      if (htmlVideoMatch) {
        elements.push(renderFullWidthVideoCard(htmlVideoMatch[1], 'Video AI Trailer Thực Tế'));
        continue;
      }

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
          elements.push(renderFullWidthImageCard(mediaSrc, altText));
        }
        continue;
      }

      // Heading 1 (# ...)
      if (line.trim().startsWith('# ')) {
        const titleText = line.trim().replace(/^#\s+/, '');
        const headingId = makeHeadingId(titleText, i);
        elements.push(
          <h1 id={headingId} key={`h1-${i}`} className="text-xl font-extrabold text-slate-900 my-5 pb-3 border-b border-slate-200 tracking-tight leading-snug scroll-mt-24">
            {parseInlineMarkdown(titleText)}
          </h1>
        );
        continue;
      }

      // Heading 2 (## ...)
      if (line.trim().startsWith('## ')) {
        const titleText = line.trim().replace(/^##\s+/, '');
        const headingId = makeHeadingId(titleText, i);
        elements.push(
          <h2 id={headingId} key={`h2-${i}`} className="mt-8 mb-4 px-4 py-3 bg-gradient-to-r from-indigo-50/80 via-slate-50 to-white border border-indigo-100 rounded-xl text-base font-bold text-indigo-950 flex items-center gap-2.5 shadow-2xs scroll-mt-24">
            {parseInlineMarkdown(titleText)}
          </h2>
        );
        continue;
      }

      // Heading 3 (### ...)
      if (line.trim().startsWith('### ')) {
        const titleText = line.trim().replace(/^###\s+/, '');
        const headingId = makeHeadingId(titleText, i);
        elements.push(
          <h3 id={headingId} key={`h3-${i}`} className="mt-6 mb-3 border-l-4 border-indigo-500 pl-3.5 text-sm font-bold text-slate-900 flex items-center gap-2 scroll-mt-24">
            {parseInlineMarkdown(titleText)}
          </h3>
        );
        continue;
      }

      // Heading 4 (#### ...) or Heading 5 (##### ...)
      if (line.trim().startsWith('#### ') || line.trim().startsWith('##### ')) {
        const titleText = line.trim().replace(/^#{4,5}\s+/, '');
        const headingId = makeHeadingId(titleText, i);
        elements.push(
          <h4 id={headingId} key={`h4-${i}`} className="mt-5 mb-2 font-bold text-indigo-900 text-sm flex items-center gap-2 scroll-mt-24">
            {parseInlineMarkdown(titleText)}
          </h4>
        );
        continue;
      }

      // Bullet List Items (* ... or - ...)
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const listText = line.trim().replace(/^[\*\-]\s+/, '');
        elements.push(
          <div key={`li-${i}`} className="my-2.5 p-3.5 bg-white border border-slate-200/80 rounded-xl shadow-2xs text-slate-700 text-sm leading-relaxed flex items-start gap-3 hover:border-indigo-200 transition-all">
            <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
            <div className="flex-1">{parseInlineMarkdown(listText)}</div>
          </div>
        );
        continue;
      }

      // Blockquote (> ...)
      if (line.trim().startsWith('> ')) {
        const quoteText = line.trim().replace(/^>\s+/, '');
        elements.push(
          <div key={`quote-${i}`} className="my-4 p-4 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl text-amber-950 text-sm leading-relaxed font-medium shadow-2xs">
            {parseInlineMarkdown(quoteText)}
          </div>
        );
        continue;
      }

      // Horizontal Rule (---)
      if (line.trim() === '---') {
        elements.push(<hr key={`hr-${i}`} className="my-6 border-slate-200/80" />);
        continue;
      }

      // Standard Paragraph Text
      if (line.trim().length > 0) {
        elements.push(
          <p key={`p-${i}`} className="my-3 text-slate-700 leading-relaxed text-sm">
            {parseInlineMarkdown(line)}
          </p>
        );
      }
    }

    return elements;
  };

  // HIERARCHICAL VISUAL TREE TOC PANEL WITH FOCUS ON ACTIVE EXERCISE & METHOD
  const renderCloudscapeTocPanel = () => {
    const headings = extractTocHeadings(activeMarkdown);
    if (!headings.length) return null;

    return (
      <div className="sticky top-24 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm transition-all overflow-hidden self-start">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-xs tracking-wide uppercase">
            <span>📌</span>
            <span>Mục Lục Mục Xem</span>
            <Badge color="blue">{headings.length}</Badge>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setTocViewMode(tocViewMode === 'tree' ? 'anchors' : 'tree')}
              className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-2 py-1 rounded-md transition-colors cursor-pointer border border-indigo-200"
              title="Chuyển chế độ hiển thị"
            >
              {tocViewMode === 'tree' ? '⚓ AnchorNav' : '🌳 Cây Phân Cấp'}
            </button>
            <button
              onClick={() => setIsTocVisible(false)}
              className="text-xs font-semibold text-slate-400 hover:text-red-500 cursor-pointer transition-colors px-1.5 py-1 rounded-md hover:bg-slate-100 flex items-center gap-1"
              title="Thu gọn mục lực"
            >
              <span>✕</span>
            </button>
          </div>
        </div>

        <div className="max-h-[calc(100vh-230px)] overflow-y-auto overflow-x-hidden pr-1 custom-scrollbar">
          {tocViewMode === 'anchors' ? (
            <AnchorNavigation
              activeHref={activeHref}
              anchors={anchors}
              onFollow={(e) => {
                e.preventDefault();
                const targetId = e.detail.href.replace('#', '');
                scrollToHeading(targetId);
              }}
            />
          ) : (
            <div className="space-y-1.5">
              {headings.map((h, i) => {
                const isActive = activeHeadingId === h.id;
                const icon = getSectionIcon(h.text);

                let levelStyle = '';
                if (h.level === 1) {
                  levelStyle = 'ml-0 bg-indigo-900 border-indigo-950 text-white font-extrabold text-xs p-2.5 shadow-2xs';
                } else if (h.level === 2) {
                  levelStyle = 'ml-2.5 border-l-4 border-indigo-500 bg-indigo-50/90 border-indigo-200 text-indigo-950 font-bold text-xs p-2';
                } else if (h.level === 3) {
                  levelStyle = 'ml-5 border-l-2 border-slate-300 bg-slate-50 hover:bg-indigo-50 border-slate-200 text-slate-800 font-semibold text-xs p-2';
                } else {
                  levelStyle = 'ml-8 border-l-2 border-emerald-400 bg-emerald-50/40 hover:bg-emerald-100/60 border-emerald-200/80 text-emerald-950 font-medium text-[11px] p-1.5';
                }

                return (
                  <button
                    key={`toc-tree-${i}`}
                    onClick={() => scrollToHeading(h.id)}
                    className={`w-full text-left rounded-xl border transition-all flex items-start gap-2 cursor-pointer ${levelStyle} ${
                      isActive
                        ? '!bg-indigo-600 !border-indigo-700 !text-white font-bold shadow-md ring-2 ring-indigo-300'
                        : ''
                    }`}
                  >
                    <span className="text-xs flex-shrink-0 mt-0.5">{icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className={`leading-snug break-words ${isActive ? '!text-white' : ''}`}>
                        {h.text}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navigation />
      
      <AppLayout
        headerSelector="#top-nav-container"
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
                  { type: 'link', text: 'Buổi 2: Trợ Lý Văn Phòng (Docs/Sheets/Slides)', href: '#buoi-2', info: <Badge color="blue">Cơ bản</Badge> }
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
            header={<h2>📌 Mục Lục Bài Học (TOC)</h2>}
            footer={
              <div>
                <h3>Lộ Trình Đào Tạo AI 2026</h3>
                <Box color="text-body-secondary">
                  Bấm vào bất kỳ mục tiêu đề nào để di chuyển nhanh tới phần bài học tương ứng!
                </Box>
              </div>
            }
          >
            <SpaceBetween size="m">
              <Box variant="p">
                <strong>Buổi {currentLesson.session_number}</strong>: {currentLesson.description}
              </Box>

              {anchors.length > 0 && (
                <div className="border border-slate-200 rounded-xl p-3 bg-white">
                  <AnchorNavigation
                    activeHref={activeHref}
                    anchors={anchors}
                    onFollow={(e) => {
                      e.preventDefault();
                      const targetId = e.detail.href.replace('#', '');
                      scrollToHeading(targetId);
                    }}
                  />
                </div>
              )}
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
                    <StatusIndicator type="success">Structured 2-Tier Navigation</StatusIndicator>
                    <Button iconName="help" onClick={() => setToolsOpen(!toolsOpen)}>
                      Mục Lục (TOC)
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

              {/* LEVEL 1: PRIMARY EXERCISE TABS SELECTOR */}
              {structuredData.exercises.length > 1 && (
                <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                    🎯 Danh Sách Bài Tập Thực Hành:
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                    {structuredData.exercises.map((ex, idx) => (
                      <button
                        key={ex.id}
                        onClick={() => setActiveExerciseIndex(idx)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap border ${
                          activeExerciseIndex === idx
                            ? 'bg-indigo-600 border-indigo-700 text-white shadow-md ring-2 ring-indigo-300'
                            : 'bg-slate-50 hover:bg-indigo-50 border-slate-200/80 text-slate-700 hover:text-indigo-900'
                        }`}
                      >
                        <span className="text-sm">{ex.icon}</span>
                        <span>{ex.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* INTRO CONTENT FROM index.md */}
              {structuredData.intro && (
                <div className="p-4 bg-gradient-to-r from-indigo-50/70 via-slate-50 to-white border border-indigo-100 rounded-2xl shadow-2xs">
                  {renderSingleMarkdownContent(structuredData.intro)}
                </div>
              )}

              {/* LEVEL 2: SECONDARY METHOD SEGMENTED SWITCH */}
              {activeExercise && activeExercise.methods.length > 1 && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-slate-100/90 border border-slate-200 rounded-2xl shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                      Chọn Phương Thức Thực Hành:
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200/90 shadow-2xs w-full sm:w-auto">
                    {activeExercise.methods.map((method, mIdx) => (
                      <button
                        key={method.id}
                        onClick={() => setActiveMethodIndex(mIdx)}
                        className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          activeMethodIndex === mIdx
                            ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-500'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <span>{method.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TWO COLUMN LAYOUT: MAIN LESSON CONTENT & FLOATING TOC SIDEBAR */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start relative">
                {/* LEFT COLUMN: MAIN LESSON CONTENT */}
                <div className={isTocVisible && anchors.length > 0 ? "lg:col-span-3 space-y-6" : "lg:col-span-4 space-y-6"}>
                  <Container>
                    {renderSingleMarkdownContent(activeMarkdown)}
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
                </div>

                {/* RIGHT COLUMN: CLOUDSCAPE ANCHOR NAVIGATION SIDEBAR */}
                {isTocVisible && anchors.length > 0 && (
                  <div className="hidden lg:block lg:col-span-1 sticky top-24 self-start">
                    {renderCloudscapeTocPanel()}
                  </div>
                )}
              </div>

              {/* FLOATING RESTORE BUTTON WHEN TOC IS MINIMIZED / HIDDEN */}
              {!isTocVisible && anchors.length > 0 && (
                <button
                  onClick={() => setIsTocVisible(true)}
                  className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-3 rounded-full shadow-xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer border border-indigo-400 animate-bounce"
                  title="Mở lại Mục Lục Bài Học"
                >
                  <span className="text-base">📌</span>
                  <span className="text-xs tracking-wide">Mục Lục ({anchors.length})</span>
                </button>
              )}
            </SpaceBetween>
          </ContentLayout>
        }
      />
    </div>
  );
}
