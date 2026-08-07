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
        `🤖 [AI PROMPT SANDBOX DEMO RESPONSE]\n----------------------------------------\nĐã nhận diện Prompt thành công:\n"${sandboxPrompt.substring(0, 100)}..."\n\n✅ Đã thực thi giả lập theo triết lý Golden Path thành công 100% không lỗi!`
      );
      setSandboxLoading(false);
    }, 800);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navigation />
      <AppLayout
        navigationOpen={true}
        navigation={
          <SideNavigation
            activeHref={`#buoi-${activeSession}`}
            header={{ href: '#', title: '📚 Lộ Trình 8 Buổi Học' }}
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
                  { type: 'link', text: 'Buổi 4: Máy Viết Content FB', href: '#buoi-4' },
                  { type: 'link', text: 'Buổi 5: Xưởng Kịch Bản Video', href: '#buoi-5' },
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
                actions={<Badge color="blue">{currentLesson.module_name}</Badge>}
              >
                {currentLesson.title}
              </Header>
            }
          >
            <SpaceBetween size="l">
              {copySuccess && (
                <Alert type="success" dismissible onDismiss={() => setCopySuccess(false)}>
                  ✅ Đã sao chép nội dung tài nguyên vào Clipboard! Dán trực tiếp vào AI / n8n để sử dụng ngay.
                </Alert>
              )}

              <Tabs
                tabs={[
                  {
                    id: 'tab-steps',
                    label: '📋 Hướng Dẫn Thực Hành (90 Phút)',
                    content: (
                      <Container header={<Header variant="h2">Các Bước Thực Hiện Trên Lớp</Header>}>
                        <SpaceBetween size="m">
                          {currentLesson.steps.map((step, idx) => (
                            <Box key={idx} variant="p">
                              <strong>Bước {idx + 1}:</strong> {step}
                            </Box>
                          ))}

                          <ExpandableSection headerText="🛠️ Lỗi Thường Gặp & Cách Sửa (Troubleshooting)">
                            <SpaceBetween size="s">
                              {currentLesson.troubleshooting.map((item, idx) => (
                                <Alert key={idx} type="warning" header={`Lỗi: ${item.issue}`}>
                                  <div>
                                    <strong>Nguyên nhân:</strong> {item.cause}
                                  </div>
                                  <div>
                                    <strong>Cách sửa:</strong> {item.fix}
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
                      <Container header={<Header variant="h2">Tài Nguyên Core 1-Click Copy / Download</Header>}>
                        <SpaceBetween size="l">
                          {currentLesson.mega_prompt && (
                            <div>
                              <Header
                                variant="h3"
                                actions={
                                  <Button iconName="copy" onClick={() => handleCopyPrompt(currentLesson.mega_prompt)}>
                                    1-Click Copy Mega-Prompt
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
                                      1-Click Copy JSON
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
                                    Copy Web PRD Spec
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
                      <Container header={<Header variant="h2">Khung Thử Nghiệm Prompt Trực Tiếp Trên Web</Header>}>
                        <SpaceBetween size="m">
                          <FormField label="Nhập hoặc dán Prompt cần thử nghiệm:">
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
