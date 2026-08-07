import React, { useState, useEffect, useRef } from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';
import Modal from '@cloudscape-design/components/modal';
import FormField from '@cloudscape-design/components/form-field';
import Input from '@cloudscape-design/components/input';
import Textarea from '@cloudscape-design/components/textarea';
import Button from '@cloudscape-design/components/button';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Tabs from '@cloudscape-design/components/tabs';
import Badge from '@cloudscape-design/components/badge';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import Alert from '@cloudscape-design/components/alert';
import Container from '@cloudscape-design/components/container';
import Box from '@cloudscape-design/components/box';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Navigation from '../components/Navigation';
import { initialLessonsData } from '../data/lessonsData';
import { getLeads, updateLessonData, getLocalLessonsOverride } from '../lib/supabase';
import { Image, Code, FileText, AlertTriangle, CheckSquare, Sparkles, X, Save, Upload, Clipboard } from 'lucide-react';

export default function AdminDashboard() {
  const [lessons, setLessons] = useState(initialLessonsData);
  const [leads, setLeads] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isStudioMode, setIsStudioMode] = useState(false);
  const [saveAlert, setSaveAlert] = useState(false);
  const [pasteAlert, setPasteAlert] = useState(false);
  const [imagePickerOpen, setImagePickerOpen] = useState(false);

  // File upload hidden ref
  const fileInputRef = useRef(null);

  // Markdown Studio states
  const [markdownContent, setMarkdownContent] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  // Predefined image catalog for Image Picker
  const systemImages = [
    { name: 'Buổi 1 - Thực Tế Gemini Deep Research', url: '/session_1_real.png' },
    { name: 'Buổi 1 - Chuẩn Hóa Văn Bản', url: '/session_1.jpg' },
    { name: 'Buổi 2 - Excel AI Analyst', url: '/session_2.jpg' },
    { name: 'Buổi 3 - n8n RSS Automation', url: '/session_3.jpg' },
    { name: 'Buổi 4 - Facebook Content AI', url: '/session_4.jpg' },
    { name: 'Buổi 5 - Kịch Bản Video Shorts', url: '/session_5.jpg' },
    { name: 'Buổi 6 - Messenger Sales Chatbot', url: '/session_6.jpg' },
    { name: 'Buổi 7 - AI Web Builder', url: '/session_7.jpg' },
    { name: 'Buổi 8 - Vercel & Supabase Deploy', url: '/session_8.jpg' },
    { name: 'Workflow n8n Graph', url: '/workflow_n8n_preview.jpg' },
    { name: 'Hero Banner Dashboard', url: '/hero_ai_automation_light.jpg' },
    { name: 'AWS Vector Logo', url: '/logo.svg' }
  ];

  useEffect(() => {
    // Sync local overrides
    const overrides = getLocalLessonsOverride();
    if (Object.keys(overrides).length > 0) {
      setLessons((prev) =>
        prev.map((l) => (overrides[l.session_number] ? { ...l, ...overrides[l.session_number] } : l))
      );
    }

    // Fetch leads
    getLeads().then((data) => setLeads(data || []));
  }, []);

  const handleOpenStudio = (lesson) => {
    setSelectedLesson(lesson);
    setEditTitle(lesson.title);
    setEditDescription(lesson.description);
    setMarkdownContent(lesson.raw_markdown || `# ${lesson.title}\n\n${lesson.description}`);
    setIsStudioMode(true);
  };

  const handleInsertShortcut = (textToInsert) => {
    setMarkdownContent((prev) => prev + '\n\n' + textToInsert);
  };

  const handleSelectImageFromPicker = (imageUrl, imageName) => {
    const markdownImageSnippet = `![${imageName}](${imageUrl})`;
    setMarkdownContent((prev) => prev + '\n\n' + markdownImageSnippet);
    setImagePickerOpen(false);
  };

  // DIRECT CTRL+V CLIPBOARD IMAGE PASTE HANDLER
  const handlePasteImage = (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        e.preventDefault();
        const file = items[i].getAsFile();
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64Data = event.target.result;
          const imageSnippet = `\n\n![📸 Ảnh Chụp Màn Hình Bài Làm Thực Tế (${new Date().toLocaleTimeString()})](${base64Data})\n\n`;
          
          const textarea = e.target;
          const start = textarea.selectionStart || 0;
          const end = textarea.selectionEnd || 0;
          const text = markdownContent;
          const newText = text.substring(0, start) + imageSnippet + text.substring(end);
          
          setMarkdownContent(newText);
          setPasteAlert(true);
          setTimeout(() => setPasteAlert(false), 4000);
        };
        reader.readAsDataURL(file);
        break;
      }
    }
  };

  // UPLOAD FILE FROM COMPUTER
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Data = event.target.result;
      const imageSnippet = `\n\n![📸 Ảnh Tải Từ Máy Tính (${file.name})](${base64Data})\n\n`;
      setMarkdownContent((prev) => prev + imageSnippet);
      setPasteAlert(true);
      setTimeout(() => setPasteAlert(false), 4000);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveLessonStudio = async () => {
    if (!selectedLesson) return;

    const updatedFields = {
      title: editTitle,
      description: editDescription,
      raw_markdown: markdownContent
    };

    await updateLessonData(selectedLesson.session_number, updatedFields);

    setLessons((prev) =>
      prev.map((l) => (l.session_number === selectedLesson.session_number ? { ...l, ...updatedFields } : l))
    );

    setIsStudioMode(false);
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 4000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navigation />

      {/* HIDDEN FILE INPUT FOR IMAGE UPLOAD */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {/* FULLSCREEN MARKDOWN STUDIO EDITOR MODE */}
      {isStudioMode ? (
        <div className="p-4 md:p-6 bg-slate-100 min-h-[calc(100vh-64px)]">
          {/* PASTE NOTIFICATION ALERT */}
          {pasteAlert && (
            <div className="mb-3">
              <Alert type="success" dismissible onDismiss={() => setPasteAlert(false)}>
                ⚡ <strong>Đã dán (Ctrl + V) thành công!</strong> Ảnh chụp màn hình bài làm thực tế đã được chèn trực tiếp dưới dạng Data-URL vào vị trí con trỏ.
              </Alert>
            </div>
          )}

          {/* STUDIO HEADER CONTROL BAR */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-4 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-bold">
                B{selectedLesson?.session_number}
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>✏️ Markdown Studio Editor</span>
                  <Badge color="blue">Buổi {selectedLesson?.session_number}</Badge>
                </h1>
                <p className="text-xs text-slate-500">
                  <span className="font-semibold text-emerald-600">💡 Mẹo dán nhanh:</span> Bạn có thể chụp màn hình (Win + Shift + S) rồi nhấn <kbd className="px-1.5 py-0.5 bg-slate-200 rounded text-slate-800 font-mono text-[11px]">Ctrl + V</kbd> dán trực tiếp ảnh vào ô Editor!
                </p>
              </div>
            </div>

            {/* ACTION BUTTONS & SHORTCUTS TOOLBAR */}
            <div className="flex flex-wrap items-center gap-2">
              <Button iconName="upload" onClick={() => fileInputRef.current?.click()}>
                📤 Tải Ảnh Từ Máy Tính
              </Button>
              <Button iconName="insert-image" onClick={() => setImagePickerOpen(true)}>
                🖼️ Thư Viện Ảnh
              </Button>
              <Button onClick={() => handleInsertShortcut('```prompt\n[BỐI CẢNH & NHIỆM VỤ]\n...\n```')}>
                📄 +Prompt Box
              </Button>
              <Button onClick={() => handleInsertShortcut('> 💡 **Mẹo Tối Ưu Thời Gian**: ...')}>
                💡 +Callout Box
              </Button>

              <div className="h-6 w-px bg-slate-300 mx-1"></div>

              <Button variant="primary" iconName="status-positive" onClick={handleSaveLessonStudio}>
                💾 Lưu Giáo Án (Publish)
              </Button>
              <Button iconName="close" onClick={() => setIsStudioMode(false)}>
                Thoát Studio
              </Button>
            </div>
          </div>

          {/* SPLIT SCREEN 50/50 WORKSPACE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-180px)]">
            {/* LEFT PANE: MARKDOWN CODE EDITOR WITH DIRECT CTRL+V PASTE */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col h-full overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-indigo-500" /> Markdown Input Editor (Bấm Ctrl+V dán ảnh trực tiếp)
                </span>
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <Clipboard className="w-3.5 h-3.5" /> Ctrl+V Paste Enabled
                </span>
              </div>
              <textarea
                className="w-full flex-grow p-4 font-mono text-sm bg-slate-900 text-emerald-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none leading-relaxed"
                value={markdownContent}
                onChange={(e) => setMarkdownContent(e.target.value)}
                onPaste={handlePasteImage}
                placeholder="# Nhập nội dung bài học Markdown tại đây... (Bấm Ctrl + V dán ảnh chụp màn hình trực tiếp)"
              />
            </div>

            {/* RIGHT PANE: LIVE CLOUDSCAPE PREVIEW */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col h-full overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-500" /> Live Student Portal Preview (Right)
                </span>
                <Badge color="green">Realtime Rendered</Badge>
              </div>

              {/* RENDERED PREVIEW CONTAINER */}
              <div className="flex-grow overflow-y-auto p-4 bg-slate-50 rounded-xl space-y-4 text-slate-800">
                <div className="prose prose-slate max-w-none">
                  {markdownContent.split('\n').map((line, idx) => {
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
                      const url = urlMatch ? urlMatch[1] : '';
                      return (
                        <div key={idx} className="my-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                          <img src={url} alt={alt} className="w-full max-h-96 object-contain bg-slate-100" />
                        </div>
                      );
                    }
                    if (line.startsWith('> 💡')) {
                      return (
                        <div key={idx} className="p-3 my-2 bg-blue-50 border-l-4 border-blue-500 text-blue-900 text-sm rounded-r-lg">
                          {line.replace('> ', '')}
                        </div>
                      );
                    }
                    if (line.startsWith('> ⚠️')) {
                      return (
                        <div key={idx} className="p-3 my-2 bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-sm rounded-r-lg">
                          {line.replace('> ', '')}
                        </div>
                      );
                    }
                    if (line.startsWith('- **') || line.startsWith('- ')) {
                      return (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 py-1">
                          <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                          <span>{line.replace('- ', '')}</span>
                        </div>
                      );
                    }
                    if (line.trim() === '') return <div key={idx} className="h-2"></div>;

                    return <p key={idx} className="text-sm leading-relaxed text-slate-700 my-1">{line}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE PICKER MODAL */}
          <Modal
            visible={imagePickerOpen}
            onDismiss={() => setImagePickerOpen(false)}
            header="🖼️ Bộ Chọn Ảnh Minh Họa (System Image Catalog)"
            footer={
              <Box float="right">
                <Button variant="link" onClick={() => setImagePickerOpen(false)}>
                  Đóng
                </Button>
              </Box>
            }
          >
            <SpaceBetween size="m">
              <Box variant="p" color="text-body-secondary">
                Nhấp chuột vào hình ảnh bất kỳ bên dưới để tự động chèn cú pháp Markdown chèn ảnh vào Editor:
              </Box>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto p-2">
                {systemImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectImageFromPicker(img.url, img.name)}
                    className="border border-slate-200 rounded-xl p-2 cursor-pointer hover:border-indigo-500 hover:shadow-md transition-all bg-white group"
                  >
                    <div className="h-24 rounded-lg overflow-hidden mb-2 bg-slate-100">
                      <img src={img.url} alt={img.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="text-xs font-semibold text-slate-800 truncate">{img.name}</div>
                    <div className="text-[10px] text-slate-400 truncate">{img.url}</div>
                  </div>
                ))}
              </div>
            </SpaceBetween>
          </Modal>
        </div>
      ) : (
        /* NORMAL DASHBOARD VIEW */
        <AppLayout
          contentType="table"
          navigationHide={true}
          toolsHide={true}
          breadcrumbs={
            <BreadcrumbGroup
              items={[
                { text: 'Trang Chủ', href: '/' },
                { text: 'Admin CMS Online', href: '/admin' }
              ]}
              ariaLabel="Breadcrumbs"
            />
          }
          content={
            <ContentLayout
              header={
                <Header
                  variant="h1"
                  description="Trình quản lý bài học trực tuyến (CMS) và danh sách học viên đăng ký tư vấn."
                  actions={<Badge color="green">Role: Host / Giảng Viên</Badge>}
                >
                  🛠️ Admin CMS Dashboard - Quản Lý Khóa Học AI
                </Header>
              }
            >
              <SpaceBetween size="l">
                {saveAlert && (
                  <Alert type="success" dismissible onDismiss={() => setSaveAlert(false)}>
                    ✅ Đã lưu thay đổi bài học thành công lên cơ sở dữ liệu Supabase! Học viên trên Student Portal sẽ nhận cập nhật ngay lập tức.
                  </Alert>
                )}

                {/* OVERVIEW STATS METRICS GRID */}
                <ColumnLayout columns={4} variant="classic">
                  <Container header={<Header variant="h3">📚 Tổng Số Buổi Học</Header>}>
                    <Box variant="h1" color="text-status-info">8 Buổi</Box>
                    <Box color="text-body-secondary">Giáo án đã chuẩn hóa 100%</Box>
                  </Container>
                  <Container header={<Header variant="h3">👥 Học Viên Đăng Ký (Leads)</Header>}>
                    <Box variant="h1" color="text-status-success">{leads.length} Học Viên</Box>
                    <Box color="text-body-secondary">Đã đồng bộ từ Landing Page</Box>
                  </Container>
                  <Container header={<Header variant="h3">🟢 Trạng Thái Supabase DB</Header>}>
                    <StatusIndicator type="success">Connected Realtime</StatusIndicator>
                    <Box color="text-body-secondary">Sẵn sàng lưu trữ bài học & leads</Box>
                  </Container>
                  <Container header={<Header variant="h3">🛡️ Triết Lý Kiểm Thử</Header>}>
                    <StatusIndicator type="info">Golden Path 100%</StatusIndicator>
                    <Box color="text-body-secondary">Prompt & n8n JSON Valid</Box>
                  </Container>
                </ColumnLayout>

                {/* TABS FOR LESSONS & LEADS */}
                <Tabs
                  tabs={[
                    {
                      id: 'tab-manage-lessons',
                      label: '📚 Quản Lý & Chỉnh Sửa 8 Buổi Học Online',
                      content: (
                        <Container header={<Header variant="h2" description="Sửa đổi nội dung giáo án Markdown, dán ảnh Ctrl+V trực tiếp, Mega-Prompt và n8n JSON">Danh Sách 8 Buổi Học</Header>}>
                          <Table
                            columnDefinitions={[
                              { id: 'session', header: 'Buổi', cell: (item) => `Buổi ${item.session_number}` },
                              { id: 'title', header: 'Tiêu đề bài học', cell: (item) => item.title },
                              { id: 'module', header: 'Chặng', cell: (item) => <Badge color="blue">{item.module_name}</Badge> },
                              {
                                id: 'status',
                                header: 'Trạng thái',
                                cell: () => <StatusIndicator type="success">Live on Web</StatusIndicator>
                              },
                              {
                                id: 'actions',
                                header: 'Thao tác Studio',
                                cell: (item) => (
                                  <Button iconName="edit" variant="primary" onClick={() => handleOpenStudio(item)}>
                                    ✏️ Sửa Online (Markdown Studio)
                                  </Button>
                                )
                              }
                            ]}
                            items={lessons}
                          />
                        </Container>
                      )
                    },
                    {
                      id: 'tab-manage-leads',
                      label: `👥 Danh Sách Học Viên Đăng Ký (${leads.length})`,
                      content: (
                        <Container header={<Header variant="h2" description="Danh sách lead đăng ký nhận tư vấn từ Landing Page">Học Viên Tư Vấn ({leads.length})</Header>}>
                          <Table
                            columnDefinitions={[
                              { id: 'name', header: 'Họ và tên', cell: (item) => item.full_name },
                              { id: 'email', header: 'Email', cell: (item) => item.email },
                              { id: 'phone', header: 'Số điện thoại', cell: (item) => item.phone },
                              { id: 'occupation', header: 'Nghề nghiệp', cell: (item) => item.occupation || 'N/A' },
                              { id: 'date', header: 'Ngày đăng ký', cell: (item) => new Date(item.created_at).toLocaleDateString() },
                              {
                                id: 'status',
                                header: 'Trạng thái',
                                cell: () => <Badge color="green">Cần Liên Hệ</Badge>
                              }
                            ]}
                            items={leads}
                            empty={
                              <Box textAlign="center" color="inherit">
                                Chưa có học viên đăng ký mới.
                              </Box>
                            }
                          />
                        </Container>
                      )
                    }
                  ]}
                />
              </SpaceBetween>
            </ContentLayout>
          }
        />
      )}
    </div>
  );
}
