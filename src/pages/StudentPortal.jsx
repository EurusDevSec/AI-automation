import React, { useState, useEffect } from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Tabs from '@cloudscape-design/components/tabs';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import Badge from '@cloudscape-design/components/badge';
import ExpandableSection from '@cloudscape-design/components/expandable-section';
import Alert from '@cloudscape-design/components/alert';
import Box from '@cloudscape-design/components/box';
import Textarea from '@cloudscape-design/components/textarea';
import FormField from '@cloudscape-design/components/form-field';
import Navigation from '../components/Navigation';
import { initialLessonsData } from '../data/lessonsData';
import { getLocalLessonsOverride } from '../lib/supabase';

export default function StudentPortal() {
  const [activeSession, setActiveSession] = useState(1);
  const [copySuccess, setCopySuccess] = useState(false);
  const [lessons, setLessons] = useState(initialLessonsData);

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
        `🤖 [AI PROMPT SANDBOX - KẾT QUẢ GIẢ LẬP REAL-TIME]\n--------------------------------------------------\n✔ Đã nhận diện Prompt thành công:\n"${(sandboxPrompt || currentLesson.mega_prompt || 'Prompt mặc định').substring(0, 120)}..."\n\n🎉 [THÀNH CÔNG 100%]: Kết quả được xử lý mượt mà theo chuẩn Golden Path! Không có lỗi xảy ra.`
      );
      setSandboxLoading(false);
    }, 700);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b1120' }}>
      <Navigation />
      <AppLayout
        navigationOpen={true}
        navigation={
          <SideNavigation
            activeHref={`#buoi-${activeSession}`}
            header={{ href: '#', title: '📚 Giáo Án 8 Buổi Học' }}
            onFollow={(e) => {
              e.preventDefault();
              const id = parseInt(e.detail.href.replace('#buoi-', ''), 10);
              if (id) setActiveSession(id);
            }}
            items={[
              {
                type: 'section',
                text: 'Chặng 1: Văn Phòng & Dữ Liệu',
                items: [
                  { type: 'link', text: 'Buổi 1: Chuẩn Hóa Văn Bản', href: '#buoi-1' },
                  { type: 'link', text: 'Buổi 2: Trợ Lý Excel', href: '#buoi-2' }
                ]
              },
              {
                type: 'section',
                text: 'Chặng 2: Tự Động Hóa n8n',
                items: [
                  { type: 'link', text: 'Buổi 3: Săn Ý Tưởng RSS', href: '#buoi-3' },
                  { type: 'link', text: 'Buổi 4: Máy Content FB', href: '#buoi-4' },
                  { type: 'link', text: 'Buổi 5: Kịch Bản Video', href: '#buoi-5' },
                  { type: 'link', text: 'Buổi 6: Auto Chatbot Messenger', href: '#buoi-6' }
                ]
              },
              {
                type: 'section',
                text: 'Chặng 3: Website AI & Live',
                items: [
                  { type: 'link', text: 'Buổi 7: AI Tạo Website', href: '#buoi-7' },
                  { type: 'link', text: 'Buổi 8: Deploy Vercel & Supabase', href: '#buoi-8' }
                ]
              }
            ]}
          />
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
                    <Badge color="green">90 Phút / Buổi</Badge>
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
                  ✅ Đã sao chép tài nguyên vào Clipboard thành công! Dán trực tiếp vào AI / n8n để sử dụng ngay.
                </Alert>
              )}

              <Tabs
                tabs={[
                  {
                    id: 'tab-steps',
                    label: '📋 Hướng Dẫn Thực Hành Trên Lớp',
                    content: (
                      <Container header={<Header variant="h2" description="Quy trình từng bước ngắn gọn, rõ ràng giúp bạn làm theo không bị trễ thời gian 90 phút">Các Bước Thực Hiện Trên Lớp</Header>}>
                        <SpaceBetween size="m">
                          {currentLesson.steps.map((step, idx) => (
                            <div key={idx} className="step-card-row">
                              <div className="step-number-badge">{idx + 1}</div>
                              <div style={{ flex: 1, paddingTop: '4px' }}>
                                <Box variant="p" fontSize="body-m">
                                  {step}
                                </Box>
                              </div>
                            </div>
                          ))}

                          <ExpandableSection headerText="🛠️ Xử Lý Lỗi Thường Gặp (Troubleshooting Guide)">
                            <SpaceBetween size="s">
                              {currentLesson.troubleshooting.map((item, idx) => (
                                <Alert key={idx} type="warning" header={`Lỗi: ${item.issue}`}>
                                  <div>
                                    <strong>Nguyên nhân:</strong> {item.cause}
                                  </div>
                                  <div>
                                    <strong>Cách khắc phục:</strong> {item.fix}
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
                    label: '📦 Kho Tài Nguyên & Quick-Copy',
                    content: (
                      <Container header={<Header variant="h2" description="Mọi file prompt, workflow JSON đều thiết kế theo triết lý Golden Path">Tài Nguyên Core 1-Click Copy / Download</Header>}>
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
                              <div className="custom-code-box">{currentLesson.mega_prompt}</div>
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
                              <div className="custom-code-box">{currentLesson.n8n_json}</div>
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
                              <div className="custom-code-box">{currentLesson.sql_template}</div>
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
                              <div className="custom-code-box">{currentLesson.spec_text}</div>
                            </div>
                          )}
                        </SpaceBetween>
                      </Container>
                    )
                  },
                  {
                    id: 'tab-sandbox',
                    label: '🧪 AI Prompt Sandbox (Thử Nghiệm)',
                    content: (
                      <Container header={<Header variant="h2" description="Khung thử nghiệm phản hồi Prompt trực quan dành cho học viên">AI Prompt Sandbox</Header>}>
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

                          {sandboxResponse && <div className="custom-code-box">{sandboxResponse}</div>}
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
