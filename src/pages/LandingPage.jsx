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
import StatusIndicator from '@cloudscape-design/components/status-indicator';
import Cards from '@cloudscape-design/components/cards';
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

  const featurePillars = [
    {
      title: '🛡️ Con Đường Hoàng Kim (Golden Path)',
      description: 'Mọi câu prompt, file cấu hình JSON của n8n hay mã SQL đều đã được kiểm thử 100% chạy mượt không lỗi.'
    },
    {
      title: '⚡ 1-Click Copy & Direct Download',
      description: 'Lấy ngay tài nguyên Mega-Prompt hoặc tải mã workflow n8n JSON chỉ với 1 click chuột trực tiếp trên giao diện.'
    },
    {
      title: '🌐 Đưa Sản Phẩm Lên Internet Thực Tế',
      description: 'Hướng dẫn kết nối GitHub, Vercel và Supabase Database để đưa website cá nhân chạy live công khai trên internet.'
    },
    {
      title: '🧪 AI Prompt Sandbox Trực Tuyến',
      description: 'Thực hành thử nghiệm prompt và quan sát phản hồi AI trực tiếp ngay trong nền tảng học tập.'
    }
  ];

  const curriculumCards = [
    {
      stage: 'Chặng 1: Trợ Lý AI Văn Phòng & Dữ Liệu',
      badge: 'Chặng 1',
      sessions: 'Buổi 1 & Buổi 2 (90 phút/buổi)',
      details: 'Chuẩn hóa văn bản doanh nghiệp chuyên nghiệp & Tự động xử lý dữ liệu thô Excel, tạo công thức chính xác 100%.'
    },
    {
      stage: 'Chặng 2: Hệ Thống Tự Động Hóa n8n',
      badge: 'Chặng 2',
      sessions: 'Buổi 3 đến Buổi 6 (90 phút/buổi)',
      details: 'Tự động săn ý tưởng RSS, sản xuất nội dung đa kênh Facebook, xưởng kịch bản Video TikTok & Chatbot Messenger báo giá auto.'
    },
    {
      stage: 'Chặng 3: Website AI & Triển Khai Live',
      badge: 'Chặng 3',
      sessions: 'Buổi 7 & Buổi 8 (90 phút/buổi)',
      details: 'Ra lệnh cho AI Agent tự gõ code Web React/Tailwind, đẩy lên GitHub, triển khai Vercel & kết nối cơ sở dữ liệu Supabase.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b1120' }}>
      <Navigation />
      
      {/* HERO SECTION */}
      <div style={{ padding: '40px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <SpaceBetween size="xxl">
          <div className="hero-glow-banner">
            <Grid gridDefinition={[{ span: { default: 12, s: 7 } }, { span: { default: 12, s: 5 } }]}>
              <SpaceBetween size="l">
                <div>
                  <Badge color="blue">✨ CHƯƠNG TRÌNH ĐÀO TẠO AI & AUTOMATION 2026</Badge>
                  <h1 style={{ fontSize: '2.8rem', lineHeight: '1.2', margin: '16px 0', fontWeight: '800' }}>
                    Làm Chủ AI & Tự Động Hóa <span className="gradient-text">Kinh Doanh Thực Chiến</span>
                  </h1>
                  <Box variant="p" color="text-body-secondary" fontSize="heading-m">
                    Lộ trình 8 buổi chuyên sâu thiết kế theo triết lý <strong>"Golden Path"</strong> dành cho người không biết code, dân văn phòng, kinh doanh online & marketer.Ứng dụng ngay công việc ngay tại lớp.
                  </Box>
                </div>

                <SpaceBetween direction="horizontal" size="s">
                  <Button variant="primary" iconName="unlocked" onClick={() => navigate('/app')}>
                    ⚡ Khám Phá Student Portal (8 Buổi)
                  </Button>
                  <Button onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}>
                    📑 Xem Chi Tiết Lộ Trình
                  </Button>
                </SpaceBetween>

                <SpaceBetween direction="horizontal" size="l">
                  <StatusIndicator type="success">100% Tested Zero-Error</StatusIndicator>
                  <StatusIndicator type="info">Deploy Live Vercel & Supabase</StatusIndicator>
                </SpaceBetween>
              </SpaceBetween>

              {/* ENROLLMENT FORM */}
              <div className="glass-container" style={{ padding: '24px' }}>
                <Header variant="h2" description="Nhận trọn bộ giáo án & tài nguyên thực chiến 8 buổi">
                  📝 Nhận Tư Vấn Lộ Trình
                </Header>
                <div style={{ marginTop: '16px' }}>
                  {submitted ? (
                    <Alert type="success" header="Đăng Ký Thành Công!">
                      Cảm ơn bạn! Thông tin tư vấn đã được ghi nhận vào hệ thống Supabase. Giảng viên sẽ liên hệ với bạn trong thời gian sớm nhất.
                    </Alert>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <Form actions={<Button variant="primary" loading={loading} fullWidth>Gửi Thông Tin Đăng Ký Tư Vấn</Button>}>
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
                              placeholder="name@company.com"
                              type="email"
                              required
                            />
                          </FormField>
                          <FormField label="Số điện thoại / Zalo">
                            <Input
                              value={phone}
                              onChange={({ detail }) => setPhone(detail.value)}
                              placeholder="0987 654 321"
                              required
                            />
                          </FormField>
                          <FormField label="Nghề nghiệp hiện tại">
                            <Select
                              selectedOption={occupation}
                              onChange={({ detail }) => setOccupation(detail.selectedOption)}
                              options={[
                                { label: 'Dân văn phòng / Nhân sự / Kế toán', value: 'Office' },
                                { label: 'Chủ shop / Kinh doanh online', value: 'Business' },
                                { label: 'Marketer / Content Creator', value: 'Marketing' },
                                { label: 'Khác', value: 'Other' }
                              ]}
                            />
                          </FormField>
                        </SpaceBetween>
                      </Form>
                    </form>
                  )}
                </div>
              </div>
            </Grid>
          </div>

          {/* CORE PILLARS */}
          <Container header={<Header variant="h2" description="Phương pháp đào tạo tối ưu hóa cho người mới bắt đầu">💡 Giá Trị Cốt Lõi Khóa Học</Header>}>
            <Grid gridDefinition={[{ span: 6 }, { span: 6 }, { span: 6 }, { span: 6 }]}>
              {featurePillars.map((item, idx) => (
                <div key={idx} className="glass-container" style={{ padding: '20px' }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#60a5fa' }}>{item.title}</h3>
                  <Box color="text-body-secondary">{item.description}</Box>
                </div>
              ))}
            </Grid>
          </Container>

          {/* CURRICULUM ROADMAP */}
          <Container header={<Header variant="h2" description="3 Chặng đào tạo thực chiến kéo dài 8 buổi (90 phút/buổi)">🎯 Lộ Trình 8 Buổi Học Thực Chiến</Header>}>
            <Cards
              cardDefinition={{
                header: (item) => (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{item.stage}</span>
                    <Badge color="blue">{item.badge}</Badge>
                  </div>
                ),
                sections: [
                  { id: 'sessions', header: 'Thời lượng', content: (item) => item.sessions },
                  { id: 'details', header: 'Mục tiêu đạt được', content: (item) => item.details }
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
