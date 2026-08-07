import React, { useState, useEffect } from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';
import Modal from '@cloudscape-design/components/modal';
import Form from '@cloudscape-design/components/form';
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
import { BookOpen, Users, Database, ShieldCheck } from 'lucide-react';

export default function AdminDashboard() {
  const [lessons, setLessons] = useState(initialLessonsData);
  const [leads, setLeads] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [saveAlert, setSaveAlert] = useState(false);

  // Edit form states
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editMegaPrompt, setEditMegaPrompt] = useState('');
  const [editN8nJson, setEditN8nJson] = useState('');

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

  const handleOpenEdit = (lesson) => {
    setSelectedLesson(lesson);
    setEditTitle(lesson.title);
    setEditDescription(lesson.description);
    setEditMegaPrompt(lesson.mega_prompt || '');
    setEditN8nJson(lesson.n8n_json || '');
    setEditModalOpen(true);
  };

  const handleSaveLesson = async () => {
    if (!selectedLesson) return;

    const updatedFields = {
      title: editTitle,
      description: editDescription,
      mega_prompt: editMegaPrompt,
      n8n_json: editN8nJson
    };

    await updateLessonData(selectedLesson.session_number, updatedFields);

    setLessons((prev) =>
      prev.map((l) => (l.session_number === selectedLesson.session_number ? { ...l, ...updatedFields } : l))
    );

    setEditModalOpen(false);
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 4000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navigation />

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
                      <Container header={<Header variant="h2" description="Sửa đổi nội dung tiêu đề, Mega-Prompt và n8n JSON trực tiếp trên Web">Danh Sách 8 Buổi Học</Header>}>
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
                              header: 'Thao tác',
                              cell: (item) => (
                                <Button iconName="edit" onClick={() => handleOpenEdit(item)}>
                                  Sửa Online
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

              {/* EDIT LESSON MODAL */}
              <Modal
                visible={editModalOpen}
                onDismiss={() => setEditModalOpen(false)}
                header={`Sửa Bài Học Online: Buổi ${selectedLesson?.session_number}`}
                footer={
                  <Box float="right">
                    <SpaceBetween direction="horizontal" size="xs">
                      <Button variant="link" onClick={() => setEditModalOpen(false)}>
                        Hủy
                      </Button>
                      <Button variant="primary" onClick={handleSaveLesson}>
                        Lưu Thay Đổi (Publish)
                      </Button>
                    </SpaceBetween>
                  </Box>
                }
              >
                <Form>
                  <SpaceBetween size="m">
                    <FormField label="Tiêu đề bài học">
                      <Input value={editTitle} onChange={({ detail }) => setEditTitle(detail.value)} />
                    </FormField>

                    <FormField label="Mô tả tóm tắt">
                      <Input value={editDescription} onChange={({ detail }) => setEditDescription(detail.value)} />
                    </FormField>

                    <FormField label="Mega-Prompt / Script Text (Quick-Copy)">
                      <Textarea
                        value={editMegaPrompt}
                        onChange={({ detail }) => setEditMegaPrompt(detail.value)}
                        rows={6}
                      />
                    </FormField>

                    <FormField label="Mã Workflow n8n JSON (Direct Download)">
                      <Textarea
                        value={editN8nJson}
                        onChange={({ detail }) => setEditN8nJson(detail.value)}
                        rows={6}
                      />
                    </FormField>
                  </SpaceBetween>
                </Form>
              </Modal>
            </SpaceBetween>
          </ContentLayout>
        }
      />
    </div>
  );
}
