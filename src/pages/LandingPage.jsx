import React, { useState } from 'react';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Grid from '@cloudscape-design/components/grid';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Input from '@cloudscape-design/components/input';
import Select from '@cloudscape-design/components/select';
import Button from '@cloudscape-design/components/button';
import Alert from '@cloudscape-design/components/alert';
import Badge from '@cloudscape-design/components/badge';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Box from '@cloudscape-design/components/box';
import Cards from '@cloudscape-design/components/cards';
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import { useNavigate } from 'react-router-dom';
import { saveLead } from '../lib/supabase';
import Navigation from '../components/Navigation';

export default function LandingPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState({ label: 'Dân văn phòng', value: 'Office' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await saveLead({
      full_name: fullName,
      email: email,
      phone: phone,
      occupation: occupation ? occupation.label : 'Office'
    });
    setLoading(false);
    setSubmitted(true);
  };

  const curriculumCards = [
    {
      stage: 'Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu',
      sessions: 'Buổi 1 - 2',
      details: 'Soạn thảo văn bản doanh nghiệp chuẩn mực & Dọn dẹp dữ liệu Excel, xuất công thức tự động.',
      badge: 'Cơ Bản'
    },
    {
      stage: 'Chặng 2: Hệ Thống Tự Động Hóa Mạng Xã Hội',
      sessions: 'Buổi 3 - 6',
      details: 'Cài đặt n8n cào RSS, AI sản xuất bài đăng Facebook, kịch bản Video TikTok & Chatbot Messenger auto báo giá.',
      badge: 'Nâng Cao'
    },
    {
      stage: 'Chặng 3: Lập Trình Website Bằng AI & Triển Khai',
      sessions: 'Buổi 7 - 8',
      details: 'Dùng AI Agent tự động viết code Website React/Tailwind, đẩy lên GitHub, triển khai Vercel & Supabase DB.',
      badge: 'Thực Chiến'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f1b2a' }}>
      <Navigation />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <SpaceBetween size="xxl">
          {/* HERO SECTION */}
          <Container
            header={
              <Header
                variant="h1"
                description="Khóa học thực chiến 8 buổi dành riêng cho người không biết code, dân văn phòng, kinh doanh online & marketer."
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Badge color="green">🔥 Học Phí: 3.500.000 VNĐ</Badge>
                    <Badge color="blue">90 Phút / Buổi</Badge>
                  </SpaceBetween>
                }
              >
                🚀 Làm Chủ AI & Tự Động Hóa Kinh Doanh Trong 8 Buổi
              </Header>
            }
          >
            <Grid gridDefinition={[{ span: { default: 12, s: 7 } }, { span: { default: 12, s: 5 } }]}>
              <SpaceBetween size="l">
                <Box variant="p">
                  Ứng dụng triết lý <strong>"Con Đường Hoàng Kim" (Golden Path)</strong> — 100% prompt, workflow n8n JSON và đặc tả kỹ thuật đã được tối ưu hóa, chạy được ngay không lỗi. Giúp bạn nâng cao năng suất công việc gấp 10 lần mà không sợ rào cản công nghệ.
                </Box>
                <SpaceBetween direction="horizontal" size="s">
                  <Button variant="primary" onClick={() => navigate('/app')}>
                    ⚡ Vào Học Ngay (Student Portal)
                  </Button>
                  <Button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
                    📑 Xem Lộ Trình 8 Buổi
                  </Button>
                </SpaceBetween>

                <StatusIndicator type="success">
                  Đã kiểm thử 100% không lỗi cú pháp (Zero Error Guarantee)
                </StatusIndicator>
              </SpaceBetween>

              {/* FORM DANG KY TU VAN */}
              <Container header={<Header variant="h2">📝 Đăng Ký Nhận Tư Vấn & Ưu Đãi</Header>}>
                {submitted ? (
                  <Alert type="success" header="Đăng ký thành công!">
                    Cảm ơn bạn! Thông tin của bạn đã được ghi nhận vào hệ thống Supabase. Giảng viên sẽ liên hệ với bạn ngay.
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Form actions={<Button variant="primary" loading={loading}>Gửi Thông Tin Đăng Ký (3.5M)</Button>}>
                      <SpaceBetween size="m">
                        <FormField label="Họ và tên">
                          <Input
                            value={fullName}
                            onChange={({ detail }) => setFullName(detail.value)}
                            placeholder="Nguyễn Văn A"
                            required
                          />
                        </FormField>
                        <FormField label="Email">
                          <Input
                            value={email}
                            onChange={({ detail }) => setEmail(detail.value)}
                            placeholder="example@gmail.com"
                            type="email"
                            required
                          />
                        </FormField>
                        <FormField label="Số điện thoại / Zalo">
                          <Input
                            value={phone}
                            onChange={({ detail }) => setPhone(detail.value)}
                            placeholder="0987654321"
                            required
                          />
                        </FormField>
                        <FormField label="Nghề nghiệp hiện tại">
                          <Select
                            selectedOption={occupation}
                            onChange={({ detail }) => setOccupation(detail.selectedOption)}
                            options={[
                              { label: 'Dân văn phòng', value: 'Office' },
                              { label: 'Kinh doanh online', value: 'Business' },
                              { label: 'Marketer / Content Creator', value: 'Marketing' },
                              { label: 'Khác', value: 'Other' }
                            ]}
                          />
                        </FormField>
                      </SpaceBetween>
                    </Form>
                  </form>
                )}
              </Container>
            </Grid>
          </Container>

          {/* LỘ TRÌNH 8 BUỔI CURRICULUM GRID */}
          <Container header={<Header variant="h2">🎯 Lộ Trình Chi Tiết 3 Chặng & 8 Buổi Học</Header>}>
            <Cards
              cardDefinition={{
                header: (item) => item.stage,
                sections: [
                  { id: 'sessions', header: 'Thời lượng', content: (item) => item.sessions },
                  { id: 'details', header: 'Nội dung thực hành', content: (item) => item.details },
                  { id: 'badge', header: 'Cấp độ', content: (item) => <Badge color="blue">{item.badge}</Badge> }
                ]
              }}
              cardsPerRow={[{ default: 1, s: 3 }]}
              items={curriculumCards}
            />
          </Container>
        </SpaceBetween>
      </div>
    </div>
  );
}
