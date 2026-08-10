import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import Modal from '@cloudscape-design/components/modal';
import ProgressBar from '@cloudscape-design/components/progress-bar';
import HelpPanel from '@cloudscape-design/components/help-panel';
import SplitPanel from '@cloudscape-design/components/split-panel';
import Flashbar from '@cloudscape-design/components/flashbar';
import Cards from '@cloudscape-design/components/cards';
import TextFilter from '@cloudscape-design/components/text-filter';
import Navigation from '../components/Navigation';
import { initialLessonsData } from '../data/lessonsData';
import { getLessonStructuredData } from '../lib/resolveMarkdown';
import { resolveMarkdownImageUrl } from '../lib/resolveImage';

export default function StudentPortal() {
  const location = useLocation();
  const [activeSession, setActiveSession] = useState(1);
  const [navigationOpen, setNavigationOpen] = useState(true);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [splitPanelOpen, setSplitPanelOpen] = useState(false);
  const [lessons, setLessons] = useState(initialLessonsData);
  const [showCatalogModal, setShowCatalogModal] = useState(false);
  const [catalogFilterText, setCatalogFilterText] = useState('');

  // Floating Toast Notifications (Cloudscape Flashbar)
  const [flashItems, setFlashItems] = useState([]);
  const [copiedPromptId, setCopiedPromptId] = useState(null);

  // Exercise and Method selection states
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  const [activeMethodIndex, setActiveMethodIndex] = useState(0);

  // TOC (Table of Contents) States
  const [isTocVisible, setIsTocVisible] = useState(true);
  const [activeHeadingId, setActiveHeadingId] = useState('');

  const triggerFlash = (message, type = 'success') => {
    const id = Date.now().toString();
    setFlashItems([
      {
        type: type,
        content: message,
        dismissible: true,
        onDismiss: () => setFlashItems([]),
        id: id
      }
    ]);
    setTimeout(() => setFlashItems([]), 2500);
  };

  // Read URL query parameter (?session=X)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sessionParam = params.get('session');
    if (sessionParam) {
      const parsed = parseInt(sessionParam, 10);
      if (parsed >= 1 && parsed <= 8) {
        setActiveSession(parsed);
        setActiveExerciseIndex(0);
      }
    }
  }, [location]);

  const currentLesson = lessons.find((l) => l.session_number === activeSession) || lessons[0];
  const structuredData = getLessonStructuredData(activeSession, currentLesson.raw_markdown);
  const activeExercise = structuredData.exercises[activeExerciseIndex] || structuredData.exercises[0];
  const activeMethod = activeExercise?.methods[activeMethodIndex] || activeExercise?.methods[0];
  const activeMarkdown = activeMethod?.content || activeMethod?.markdown || activeExercise?.rawText || activeExercise?.markdown || structuredData.intro;

  // Track active scroll heading for TOC
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

  const handleCopyPrompt = (promptText, promptName = 'Prompt', promptKey = null) => {
    navigator.clipboard.writeText(promptText);
    if (promptKey) {
      setCopiedPromptId(promptKey);
      setTimeout(() => setCopiedPromptId(null), 2000);
    }
    triggerFlash(`✅ Đã copy ${promptName} vào bộ nhớ tạm!`, 'success');
  };

  const makeHeadingId = (text, index) => {
    if (!text) return `section-${index}`;
    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9àáảãạăắằẳẵặcâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return `heading-${slug || index}`;
  };

  const scrollToHeading = (id) => {
    setActiveHeadingId(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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

  const anchors = extractTocHeadings(activeMarkdown).map((h) => ({
    text: h.text,
    href: `#${h.id}`,
    level: Math.min(Math.max(h.level, 1), 3)
  }));
  const activeHref = activeHeadingId ? `#${activeHeadingId}` : (anchors[0]?.href || '');

  const parseInlineMarkdown = (text) => {
    if (!text) return '';
    
    let cleanText = text
      .replace(/\$\\rightarrow\$/g, '→')
      .replace(/\$\\rightarrow/g, '→')
      .replace(/\\rightarrow\$/g, '→')
      .replace(/\\rightarrow/g, '→')
      .replace(/\$→\$/g, '→')
      .replace(/\$→/g, '→')
      .replace(/→\$/g, '→')
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
        const resolvedUrl = resolveMarkdownImageUrl(rawUrl, activeSession, activeExerciseIndex + 1);
        const isDownload = /\.(docx|doc|pdf|xlsx|xls|zip|rar|json)$/i.test(rawUrl);

        return (
          <a
            key={`link-${idx}`}
            href={resolvedUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={isDownload ? true : undefined}
            onClick={() => {
              if (isDownload) {
                triggerFlash(`📥 Đã bắt đầu tải file: ${label}`, 'info');
              }
            }}
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

  const renderFullWidthImageCard = (src, altText) => {
    const currentExId = activeExercise?.id || `bai_${activeExerciseIndex + 1}`;
    const resolvedSrc = resolveMarkdownImageUrl(src, activeSession, currentExId);
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

  const renderFullWidthAudioCard = (src, title) => {
    const currentExId = activeExercise?.id || `bai_${activeExerciseIndex + 1}`;
    const resolvedSrc = resolveMarkdownImageUrl(src, activeSession, currentExId);
    return (
      <div className="my-6 p-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/50 via-white to-slate-50 shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm flex-shrink-0 text-lg">
            🎧
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">{title}</h4>
            <p className="text-[11px] text-slate-500 font-medium">Audio Overview / Podcast AI</p>
          </div>
        </div>
        <div className="w-full md:flex-1">
          <audio controls src={resolvedSrc} className="w-full h-10 rounded-lg shadow-2xs" />
        </div>
      </div>
    );
  };

  const renderFullWidthVideoCard = (src, title) => {
    const currentExId = activeExercise?.id || `bai_${activeExerciseIndex + 1}`;
    const resolvedSrc = resolveMarkdownImageUrl(src, activeSession, currentExId);
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

  const renderSingleMarkdownContent = (markdownText) => {
    if (!markdownText) return null;

    const lines = markdownText.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeBlockContent = [];
    let codeBlockLang = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockLang = line.trim().replace(/^```/, '');
          codeBlockContent = [];
        } else {
          inCodeBlock = false;
          const fullCode = codeBlockContent.join('\n');
          const isPrompt = codeBlockLang.toLowerCase().includes('prompt') || fullCode.includes('Nhiệm vụ:') || fullCode.includes('Bối cảnh:');
          const blockKey = `code-${i}`;
          const isCopied = copiedPromptId === blockKey;

          elements.push(
            <div key={`code-block-${i}`} className="my-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono font-bold text-slate-300 ml-2 uppercase">
                    {codeBlockLang || (isPrompt ? 'Prompt Template' : 'Code Snippet')}
                  </span>
                </div>
                
                {/* CLOUDSCAPE BUTTON WITH DYNAMIC STATUS-POSITIVE ICON & COPY FEEDBACK */}
                <Button
                  variant={isCopied ? "primary" : "normal"}
                  iconName={isCopied ? "status-positive" : "copy"}
                  onClick={() => handleCopyPrompt(fullCode, isPrompt ? 'Prompt' : 'Code', blockKey)}
                >
                  {isCopied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{fullCode}</code>
              </pre>
            </div>
          );
        }
        continue;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        continue;
      }

      if (line.trim().startsWith('=== SUBTAB:')) continue;

      const htmlVideoMatch = line.trim().match(/<video[^>]*src=["'](.*?)["']/i);
      if (htmlVideoMatch) {
        elements.push(renderFullWidthVideoCard(htmlVideoMatch[1], 'Video AI Trailer Thực Tế'));
        continue;
      }

      const htmlAudioMatch = line.trim().match(/<audio[^>]*src=["'](.*?)["']/i);
      if (htmlAudioMatch) {
        elements.push(renderFullWidthAudioCard(htmlAudioMatch[1], 'Nhạc Nền Audio MP3 Thực Tế'));
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

      if (line.trim().startsWith('# ')) {
        const titleText = line.trim().replace(/^#\s+/, '');
        const headingId = makeHeadingId(titleText, i);
        elements.push(<h1 id={headingId} key={`h1-${i}`} className="text-xl font-extrabold text-slate-900 my-5 pb-3 border-b border-slate-200 tracking-tight leading-snug scroll-mt-24">{parseInlineMarkdown(titleText)}</h1>);
        continue;
      }

      if (line.trim().startsWith('## ')) {
        const titleText = line.trim().replace(/^##\s+/, '');
        const headingId = makeHeadingId(titleText, i);
        elements.push(<h2 id={headingId} key={`h2-${i}`} className="mt-8 mb-4 px-4 py-3 bg-gradient-to-r from-indigo-50/80 via-slate-50 to-white border border-indigo-100 rounded-xl text-base font-bold text-indigo-950 flex items-center gap-2.5 shadow-2xs scroll-mt-24">{parseInlineMarkdown(titleText)}</h2>);
        continue;
      }

      if (line.trim().startsWith('### ')) {
        const titleText = line.trim().replace(/^###\s+/, '');
        const headingId = makeHeadingId(titleText, i);
        elements.push(<h3 id={headingId} key={`h3-${i}`} className="mt-6 mb-3 border-l-4 border-indigo-500 pl-3.5 text-sm font-bold text-slate-900 flex items-center gap-2 scroll-mt-24">{parseInlineMarkdown(titleText)}</h3>);
        continue;
      }

      if (line.trim().startsWith('#### ') || line.trim().startsWith('##### ')) {
        const titleText = line.trim().replace(/^#{4,5}\s+/, '');
        const headingId = makeHeadingId(titleText, i);
        elements.push(<h4 id={headingId} key={`h4-${i}`} className="mt-5 mb-2 font-bold text-indigo-900 text-sm flex items-center gap-2 scroll-mt-24">{parseInlineMarkdown(titleText)}</h4>);
        continue;
      }

      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const listText = line.trim().replace(/^[\*\-]\s+/, '');
        elements.push(<div key={`li-${i}`} className="my-2.5 p-3.5 bg-white border border-slate-200/80 rounded-xl shadow-2xs text-slate-700 text-sm leading-relaxed flex items-start gap-3 hover:border-indigo-200 transition-all"><span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" /><div className="flex-1">{parseInlineMarkdown(listText)}</div></div>);
        continue;
      }

      if (line.trim().length > 0) {
        elements.push(<p key={`p-${i}`} className="my-3 text-slate-700 text-sm leading-relaxed">{parseInlineMarkdown(line.trim())}</p>);
      }
    }

    return elements;
  };

  const renderCloudscapeTocPanel = () => {
    if (!anchors.length) return null;

    return (
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-4 shadow-lg space-y-3 transition-all hover:border-indigo-300">
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-extrabold text-slate-900 tracking-wide uppercase">Mục Lục Bài Học</span>
          </div>
          <button
            onClick={() => setIsTocVisible(false)}
            className="text-[11px] font-bold text-slate-400 hover:text-slate-600 px-2 py-0.5 rounded hover:bg-slate-100 transition-colors"
          >
            Ẩn
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
          {anchors.map((item, idx) => {
            const id = item.href.replace('#', '');
            const isActive = activeHeadingId === id;

            return (
              <div
                key={idx}
                onClick={() => scrollToHeading(id)}
                className={`group flex items-center justify-between text-xs py-2 px-3 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-indigo-50/80 hover:text-indigo-700 font-medium'
                }`}
                style={{ paddingLeft: `${(item.level - 1) * 12 + 12}px` }}
              >
                <span className="truncate flex-1">{item.text}</span>
                {isActive && <span className="text-[10px] ml-1 text-indigo-200">●</span>}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const catalogItemsData = [
    { id: 1, number: 'Buổi 1', title: 'Lập Kế Hoạch Team Building', icon: '📝', level: 'Cơ bản', stage: 'Chặng 1: AI Văn Phòng' },
    { id: 2, number: 'Buổi 2', title: 'Trợ Lý Văn Phòng (Docs/Sheets/Slides)', icon: '📊', level: 'Cơ bản', stage: 'Chặng 1: AI Văn Phòng' },
    { id: 3, number: 'Buổi 3', title: 'Auto RSS & n8n AI Summarizer', icon: '⚡', level: 'Nâng cao', stage: 'Chặng 2: Tự Động Hóa n8n' },
    { id: 4, number: 'Buổi 4', title: 'Máy Content FB', icon: '📱', level: 'Nâng cao', stage: 'Chặng 2: Tự Động Hóa n8n' },
    { id: 5, number: 'Buổi 5', title: 'Kịch Bản Video AI', icon: '🎬', level: 'Nâng cao', stage: 'Chặng 2: Tự Động Hóa n8n' },
    { id: 6, number: 'Buổi 6', title: 'Auto Chatbot Messenger', icon: '🤖', level: 'Nâng cao', stage: 'Chặng 2: Tự Động Hóa n8n' },
    { id: 7, number: 'Buổi 7', title: 'AI Tạo Website (React & Tailwind)', icon: '🌐', level: 'Thực chiến', stage: 'Chặng 3: Website AI & Live' },
    { id: 8, number: 'Buổi 8', title: 'Deploy Vercel & Supabase', icon: '🚀', level: 'Thực chiến', stage: 'Chặng 3: Website AI & Live' }
  ];

  const filteredCatalogItems = catalogItemsData.filter(item =>
    item.title.toLowerCase().includes(catalogFilterText.toLowerCase()) ||
    item.stage.toLowerCase().includes(catalogFilterText.toLowerCase()) ||
    item.number.toLowerCase().includes(catalogFilterText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navigation />

      {/* CLOUDSCAPE FLASHBAR FLOATING TOAST NOTIFICATIONS */}
      {flashItems.length > 0 && (
        <div className="fixed top-16 right-6 z-50 max-w-md w-full shadow-2xl">
          <Flashbar items={flashItems} />
        </div>
      )}

      <AppLayout
        navigationOpen={navigationOpen}
        onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
        toolsOpen={toolsOpen}
        onToolsChange={({ detail }) => setToolsOpen(detail.open)}
        splitPanelOpen={splitPanelOpen}
        onSplitPanelToggle={({ detail }) => setSplitPanelOpen(detail.open)}
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: 'Trang chủ', href: '/' },
              { text: 'Student Portal', href: '/app' },
              { text: currentLesson.module_name, href: `#buoi-${activeSession}` },
              { text: `Buổi ${activeSession}`, href: `#buoi-${activeSession}` }
            ]}
          />
        }
        navigation={
          <SideNavigation
            activeHref={`#buoi-${activeSession}`}
            header={{ href: '/app', text: 'Chương Trình 8 Buổi Học' }}
            onFollow={(e) => {
              e.preventDefault();
              const href = e.detail.href;
              const match = href.match(/#buoi-(\d+)/);
              if (match) {
                setActiveSession(parseInt(match[1], 10));
                setActiveExerciseIndex(0);
                setActiveMethodIndex(0);
              }
            }}
            items={[
              {
                type: 'section',
                text: 'Chặng 1: Trợ Lý AI Văn Phòng',
                items: [
                  { type: 'link', text: 'Buổi 1: Lập Kế Hoạch Team Building', href: '#buoi-1', info: <Badge color="blue">Cơ bản</Badge> },
                  { type: 'link', text: 'Buổi 2: Trợ Lý Docs/Sheets/Slides', href: '#buoi-2', info: <Badge color="blue">Cơ bản</Badge> }
                ]
              },
              { type: 'divider' },
              {
                type: 'section',
                text: 'Chặng 2: Tự Động Hóa n8n',
                items: [
                  { type: 'link', text: 'Buổi 3: Auto RSS & n8n AI Summarizer', href: '#buoi-3', info: <Badge color="green">Nâng cao</Badge> },
                  { type: 'link', text: 'Buổi 4: Máy Tạo Content Facebook', href: '#buoi-4', info: <Badge color="green">Nâng cao</Badge> },
                  { type: 'link', text: 'Buổi 5: Kịch Bản Video AI Ngắn', href: '#buoi-5', info: <Badge color="green">Nâng cao</Badge> },
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
            header={<h2>💡 Mẹo Thực Hành & Sửa Lỗi Fast-Track</h2>}
          >
            <SpaceBetween size="m">
              <Box variant="p">
                <strong>Golden Path 100% Zero-Error:</strong> Mọi câu prompt và file JSON n8n đều đã được kiểm thử chạy thành công 100%. Bấm nút <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-indigo-700">Copy</code> để sao chép chuẩn xác.
              </Box>

              <Alert type="warning" header="🛠️ Sửa lỗi nhanh Buổi 3 (n8n)">
                Nếu n8n báo lỗi 401 Unauthorized khi chạy Google Sheets Node $\rightarrow$ Bấm đúp vào Node và chọn lại Google Account Credentials trong dropdown.
              </Alert>

              <Alert type="info" header="📌 Phím tắt nhanh">
                Bấm <code className="font-mono">Esc</code> để đóng Modal, hoặc bấm nút <code className="font-mono">ℹ️</code> góc trên để mở Bảng Trợ Giúp này.
              </Alert>
            </SpaceBetween>
          </HelpPanel>
        }
        splitPanel={
          <SplitPanel
            header="⚡ AI Sandbox & Quick Copy Terminal"
            closeBehavior="collapse"
          >
            <SpaceBetween size="s">
              <Box variant="p">
                Khung thực hành song song giúp bạn sao chép câu lệnh Prompt hoặc tải file n8n JSON trực tiếp ngay trong quá trình đọc bài học.
              </Box>
              <div className="flex items-center gap-2">
                <Button
                  variant="primary"
                  iconName="copy"
                  onClick={() => {
                    handleCopyPrompt(activeMarkdown, `Nội dung Buổi ${activeSession}`);
                  }}
                >
                  Copy Toàn Bộ Bài Học
                </Button>
                <Button
                  variant="normal"
                  iconName="download"
                  onClick={() => {
                    triggerFlash(`📥 Đã khởi tạo tải xuống file tài nguyên Buổi ${activeSession}`, 'info');
                  }}
                >
                  Tải File n8n JSON / Docs
                </Button>
              </div>
            </SpaceBetween>
          </SplitPanel>
        }
        content={
          <ContentLayout
            header={
              <SpaceBetween size="s">
                <Header
                  variant="h1"
                  description={currentLesson.description}
                  actions={
                    <SpaceBetween direction="horizontal" size="xs">
                      <Badge color="blue">{currentLesson.module_name}</Badge>

                      {/* CLOUDSCAPE BUTTON WITH FOLDER ICON */}
                      <Button
                        variant="normal"
                        iconName="folder"
                        onClick={() => setShowCatalogModal(true)}
                      >
                        Card 8 Buổi
                      </Button>

                      <StatusIndicator type="success">Golden Path Ready</StatusIndicator>
                    </SpaceBetween>
                  }
                >
                  {currentLesson.title}
                </Header>

                {/* CLOUDSCAPE PROGRESS BAR: COURSE COMPLETION PROGRESS */}
                <ProgressBar
                  value={Math.round((activeSession / 8) * 100)}
                  label="Tiến độ hoàn thành khóa học thực chiến"
                  description={`Buổi ${activeSession} trên tổng số 8 Buổi học (${Math.round((activeSession / 8) * 100)}% hoàn thành)`}
                  status="in-progress"
                />
              </SpaceBetween>
            }
          >
            {/* ULTRA-COMPACT SINGLE-ROW STICKY STEP & METHOD TOOLBAR (~42px height) */}
            {(structuredData.exercises.length > 1 || (activeExercise && activeExercise.methods.length > 1)) && (
              <div className="sticky top-14 z-40 bg-slate-950/95 backdrop-blur-md rounded-xl px-3.5 py-2 text-white shadow-xl border border-indigo-600/70 my-2 transition-all">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-2.5">
                  
                  {/* LEFT: COMPACT LESSON BADGE & TITLE */}
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="px-2 py-0.5 rounded-md bg-indigo-500/25 text-indigo-300 font-extrabold text-[11px] border border-indigo-400/30 flex-shrink-0">
                      {activeExerciseIndex + 1}/{structuredData.exercises.length || 1}
                    </span>
                    <span className="text-xs font-bold text-white truncate leading-snug">
                      <span className="mr-1">{activeExercise?.icon || '📘'}</span>
                      <span>{activeExercise?.title}</span>
                    </span>
                  </div>

                  {/* RIGHT: COMPACT METHOD SWITCHER & STEP CONTROLS IN A SINGLE ROW */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Compact Method Switcher (Short Pill Labels) */}
                    {activeExercise && activeExercise.methods.length > 1 && (
                      <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-lg border border-white/15">
                        {activeExercise.methods.map((method, mIdx) => {
                          const shortLabel = method.label.includes('Thủ Công')
                            ? '🛠️ Thủ Công'
                            : method.label.includes('JSON')
                            ? '⚡ Import JSON'
                            : method.label;

                          return (
                            <button
                              key={method.id}
                              onClick={() => setActiveMethodIndex(mIdx)}
                              className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                                activeMethodIndex === mIdx
                                  ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400'
                                  : 'text-slate-300 hover:text-white hover:bg-white/10'
                              }`}
                              title={method.label}
                            >
                              <span>{shortLabel}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Compact Step Switcher (Bài 1, Bài 2...) */}
                    {structuredData.exercises.length > 1 && (
                      <div className="flex items-center gap-1">
                        {activeExerciseIndex > 0 && (
                          <button
                            onClick={() => {
                              setActiveExerciseIndex(activeExerciseIndex - 1);
                              setActiveMethodIndex(0);
                            }}
                            className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/15 active:scale-95 cursor-pointer"
                            title="Bài Trước"
                          >
                            ←
                          </button>
                        )}

                        <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-lg border border-white/15">
                          {structuredData.exercises.map((ex, idx) => (
                            <button
                              key={ex.id}
                              onClick={() => {
                                setActiveExerciseIndex(idx);
                                setActiveMethodIndex(0);
                              }}
                              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                                activeExerciseIndex === idx
                                  ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400'
                                  : 'text-slate-300 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              <span>{ex.icon}</span>
                              <span>Bài {idx + 1}</span>
                            </button>
                          ))}
                        </div>

                        {activeExerciseIndex < structuredData.exercises.length - 1 && (
                          <button
                            onClick={() => {
                              setActiveExerciseIndex(activeExerciseIndex + 1);
                              setActiveMethodIndex(0);
                            }}
                            className="px-2 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-sm active:scale-95 cursor-pointer"
                            title="Bài Tiếp"
                          >
                            →
                          </button>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              </div>
            )}

            <SpaceBetween size="l">
              {/* INTRO CONTENT FROM index.md */}
              {structuredData.intro && (
                <div className="p-4 bg-gradient-to-r from-indigo-50/70 via-slate-50 to-white border border-indigo-100 rounded-2xl shadow-2xs">
                  {renderSingleMarkdownContent(structuredData.intro)}
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

      {/* SESSION CATALOG CARD GRID MODAL WITH CLOUDSCAPE CARDS & TEXTFILTER */}
      <Modal
        visible={showCatalogModal}
        onDismiss={() => setShowCatalogModal(false)}
        header="📚 Danh Sách 8 Buổi Học Thực Chiến (Golden Path Roadmap)"
        size="max"
      >
        <SpaceBetween size="m">
          <TextFilter
            filteringText={catalogFilterText}
            filteringPlaceholder="Tìm kiếm bài học theo từ khóa (n8n, Facebook, Excel, Vercel...)"
            onChange={({ detail }) => setCatalogFilterText(detail.filteringText)}
          />

          <Cards
            cardDefinition={{
              header: item => (
                <div className="flex items-center justify-between">
                  <span className="text-xl">{item.icon}</span>
                  <Badge color={item.level === 'Cơ bản' ? 'blue' : item.level === 'Nâng cao' ? 'green' : 'red'}>
                    {item.level}
                  </Badge>
                </div>
              ),
              sections: [
                {
                  id: 'stage',
                  content: item => <span className="text-[10px] font-bold text-slate-500 uppercase">{item.stage} • {item.number}</span>
                },
                {
                  id: 'title',
                  content: item => <h4 className="font-extrabold text-xs text-slate-900 leading-snug">{item.title}</h4>
                },
                {
                  id: 'action',
                  content: item => (
                    <Button
                      variant="primary"
                      iconName="unlocked"
                      onClick={() => {
                        setActiveSession(item.id);
                        setActiveExerciseIndex(0);
                        setActiveMethodIndex(0);
                        setShowCatalogModal(false);
                      }}
                    >
                      Mở Buổi {item.id}
                    </Button>
                  )
                }
              ]
            }}
            items={filteredCatalogItems}
            loadingText="Đang tải bài học..."
            empty={
              <Box textContent={{ alignment: 'center' }} color="inherit">
                Không tìm thấy bài học phù hợp với từ khóa "{catalogFilterText}".
              </Box>
            }
          />
        </SpaceBetween>
      </Modal>
    </div>
  );
}
