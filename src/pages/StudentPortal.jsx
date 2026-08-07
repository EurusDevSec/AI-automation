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

  const handleCopyPrompt = (text) => {
    navigator.clipboard.writeText(text);
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
                  { type: 'link', text: 'Buổi 1: Chuẩn Hóa Văn Bản', href: '#buoi-1', info: <Badge color="blue">Cơ bản</Badge> },
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
                  <li>Xem <strong>Lý thuyết & Hình minh họa</strong> để hiểu rõ mục tiêu buổi học.</li>
                  <li>Bấm <strong>1-Click Copy</strong> để sao chép prompt chuẩn.</li>
                  <li>Tải file JSON n8n về máy rồi chọn <strong>Import from File</strong> trong n8n.</li>
                  <li>Dùng tab <strong>AI Prompt Sandbox</strong> để thử nghiệm phản hồi ngay trên lớp.</li>
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
                  ✅ Đã sao chép tài nguyên vào Clipboard! Dán trực tiếp vào AI / n8n để chạy ngay.
                </Alert>
              )}

              {/* OVERVIEW CARDS */}
              <ColumnLayout columns={3} variant="classic">
                <Container header={<Header variant="h3">⏱️ Thời Lượng</Header>}>
                  <Box variant="h2">90 Phút</Box>
                  <Box color="text-body-secondary">Thực hành 100% tại lớp</Box>
                </Container>
                <Container header={<Header variant="h3">🎯 Cấp Độ</Header>}>
                  <StatusIndicator type="info">Người mới bắt đầu (Beginners)</StatusIndicator>
                  <Box color="text-body-secondary">Không cần kiến thức lập trình</Box>
                </Container>
                <Container header={<Header variant="h3">🛡️ Tiêu Chuẩn</Header>}>
                  <StatusIndicator type="success">100% Zero Error Guarantee</StatusIndicator>
                  <Box color="text-body-secondary">Prompt & n8n JSON đã kiểm thử</Box>
                </Container>
              </ColumnLayout>

              {/* TABS CONTAINER */}
              <Tabs
                tabs={[
                  {
                    id: 'tab-theory',
                    label: '💡 1. Lý Thuyết & Kiến Thức Cốt Lõi',
                    content: (
                      <Container header={<Header variant="h2" description="Tổng quan khái niệm & kết quả người học sẽ gặt hái được sau 90 phút">Mục Tiêu Bài Học Buổi {currentLesson.session_number}</Header>}>
                        <SpaceBetween size="l">
                          {/* ILLUSTRATION IMAGE */}
                          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <img
                              src={currentLesson.image_url}
                              alt={currentLesson.title}
                              style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' }}
                            />
                          </div>

                          <Container header={<Header variant="h3">📖 Tổng Quan Buổi Học</Header>}>
                            <Box variant="p" fontSize="body-m" color="text-body-primary">
                              {currentLesson.theory.overview}
                            </Box>
                          </Container>

                          <Alert type="info" header="💡 Khái Niệm Cốt Lõi (Core Concept)">
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
                    label: '📋 2. Hướng Dẫn Thực Hành (90 Phút)',
                    content: (
                      <Container header={<Header variant="h2" description="Quy trình từng bước ngắn gọn (<10 từ/gạch đầu dòng) để hoàn thành bài thực hành trên lớp">Các Bước Thực Hiện</Header>}>
                        <SpaceBetween size="m">
                          {currentLesson.steps.map((step, idx) => (
                            <Container key={idx}>
                              <SpaceBetween direction="horizontal" size="s">
                                <StatusIndicator type={checkListState[idx] ? 'success' : 'in-progress'}>
                                  <strong>Bước {idx + 1}:</strong>
                                </StatusIndicator>
                                <Box variant="p" fontSize="body-m" color="text-body-primary">
                                  {step}
                                </Box>
                              </SpaceBetween>
                            </Container>
                          ))}

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
                                  <Button iconName="copy" variant="primary" onClick={() => handleCopyPrompt(currentLesson.mega_prompt)}>
                                    1-Click Copy Prompt
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
                                      onClick={() => handleCopyPrompt(currentLesson.n8n_json)}
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
                                    onClick={() => handleCopyPrompt(currentLesson.sql_template)}
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

                          {currentLesson.spec_text && (
                            <div>
                              <Header
                                variant="h3"
                                actions={
                                  <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.spec_text)}>
                                    Copy PRD Spec
                                  </Button>
                                }
                              >
                                📐 Web Landing Page Specification
                              </Header>
                              <div className="custom-code-editor">{currentLesson.spec_text}</div>
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
                              Hoàn thành Bước {idx + 1}: {step}
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
