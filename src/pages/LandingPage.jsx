import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Zap, Globe, Cpu, CheckCircle2, ArrowRight, BookOpen, UserCheck, Star, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import { saveLead } from '../lib/supabase';

export default function LandingPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('Office');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await saveLead({
      full_name: fullName,
      email: email,
      phone: phone,
      occupation: occupation
    });
    setLoading(false);
    setSubmitted(true);
  };

  const featurePillars = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-indigo-600" />,
      title: 'Triết Lý Golden Path 100%',
      description: 'Mọi câu prompt, file JSON n8n hay mã SQL đều đã kiểm thử chạy 100% không lỗi khi copy-paste.'
    },
    {
      icon: <Zap className="w-7 h-7 text-emerald-600" />,
      title: '1-Click Copy & Direct Download',
      description: 'Sao chép prompt chuẩn doanh nghiệp hoặc tải workflow n8n JSON trực tiếp ngay trên giao diện web.'
    },
    {
      icon: <Globe className="w-7 h-7 text-blue-600" />,
      title: 'Deploy Web Live Lên Internet',
      description: 'Tự mình kết nối Git repo với Vercel & Supabase để đưa website sản phẩm chạy thực tế công khai.'
    },
    {
      icon: <Cpu className="w-7 h-7 text-purple-600" />,
      title: 'AI Prompt Sandbox Trực Tuyến',
      description: 'Thực hành thử nghiệm prompt và quan sát kết quả xử lý ngay trong nền tảng học tập.'
    }
  ];

  const curriculumModules = [
    {
      phase: 'Chặng 1',
      title: 'Trợ Lý AI Văn Phòng & Dữ Liệu',
      sessions: 'Buổi 1 & Buổi 2 (90 phút/buổi)',
      desc: 'Chuẩn hóa văn bản doanh nghiệp chuyên nghiệp & Dọn dẹp dữ liệu thô Excel, tự động xuất công thức chính xác 100%.',
      tags: ['ChatGPT', 'Claude', 'Excel AI']
    },
    {
      phase: 'Chặng 2',
      title: 'Hệ Thống Tự Động Hóa n8n',
      sessions: 'Buổi 3 đến Buổi 6 (90 phút/buổi)',
      desc: 'Tự động cào tin RSS sang Sheet, AI viết bài đăng Facebook, xưởng kịch bản Video TikTok & Chatbot Messenger auto báo giá.',
      tags: ['n8n Workflow', 'Facebook API', 'Chatbot']
    },
    {
      phase: 'Chặng 3',
      title: 'Lập Trình Website AI & Triển Khai Live',
      sessions: 'Buổi 7 & Buổi 8 (90 phút/buổi)',
      desc: 'Ra lệnh AI Agent tạo web React/Tailwind, đẩy mã nguồn lên GitHub, deploy Vercel & quản lý dữ liệu Supabase.',
      tags: ['React', 'Vercel', 'Supabase']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      <Navigation />

      {/* TOP NOTIFICATION BANNER */}
      <div className="bg-indigo-600 text-white text-xs sm:text-sm py-2.5 px-4 text-center font-medium flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-4 h-4 text-emerald-300 animate-pulse" />
        <span>Chương trình đào tạo AI & Automation thực chiến dành riêng cho người không biết code</span>
        <span className="hidden md:inline-block bg-indigo-700 text-indigo-100 text-[11px] px-2 py-0.5 rounded-full font-semibold">Tối ưu 90 phút/buổi</span>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="hero-light-banner p-8 sm:p-12 shadow-xl border border-indigo-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: PSYCHOLOGY DRIVEN CONTENT */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
                <span>Khóa Học Đào Tạo Thực Chiến 8 Buổi</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Làm Chủ AI & Tự Động Hóa <br />
                <span className="text-gradient-primary">Kinh Doanh Thực Chiến</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Lộ trình 8 buổi kéo dài nghiêm ngặt 90 phút/buổi giúp bạn ứng dụng <strong>ChatGPT, n8n, Supabase và AI Web Builder</strong> vào công việc hàng ngày mà không sợ rào cản lỗi hệ thống.
              </p>

              {/* TRUST BADGES & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigate('/app')}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-4 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 text-base"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  <span>Vào Học Ngay (Student Portal)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => window.scrollTo({ top: 850, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold px-6 py-4 rounded-xl border border-slate-300 shadow-sm transition-all duration-200 text-base"
                >
                  <BookOpen className="w-5 h-5 text-slate-500" />
                  <span>Khám Phá Lộ Trình</span>
                </button>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Tested Zero-Error</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Direct n8n Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Live Vercel Deploy</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: GENERATED UI IMAGE & ENROLLMENT FORM */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="/hero_ai_automation_light.jpg"
                  alt="AI Automation Dashboard Preview"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-md border border-slate-200/80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Golden Path Verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUE PROPOSITION PILLARS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Tại Sao Khóa Học Này <span className="text-gradient-emerald">Khác Biệt Hoàn Toàn?</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Thiết kế dành riêng cho người không biết code, loại bỏ hoàn toàn cảm giác bối rối và áp lực công nghệ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featurePillars.map((item, idx) => (
            <div key={idx} className="light-glass-card p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-slate-100/80 rounded-xl w-fit">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURRICULUM ROADMAP SECTION WITH PREVIEW IMAGE */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Thực Hành 100% Tại Lớp</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Lộ Trình 3 Chặng Kéo Dài 8 Buổi Học
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Mỗi buổi học diễn ra trong 90 phút với hướng dẫn từng bước gạch đầu dòng rõ ràng bên dưới 10 từ. Giúp bạn đạt được kết quả ngay lập tức mà không bị cháy giáo án.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="/workflow_n8n_preview.jpg"
                  alt="n8n Workflow Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {curriculumModules.map((mod, idx) => (
                <div key={idx} className="light-glass-card p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-indigo-100 text-indigo-700 font-bold text-xs px-3 py-1 rounded-full">
                      {mod.phase}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{mod.sessions}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{mod.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{mod.desc}</p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {mod.tags.map((t, tid) => (
                      <span key={tid} className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-indigo-100 text-center space-y-8">
          <div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Đăng Ký Tư Vấn Ngay
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Nhận Trọn Bộ Giáo Án & Tài Nguyên 8 Buổi
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto mt-2">
              Giảng viên sẽ trực tiếp liên hệ hỗ trợ bạn giải đáp lộ trình học tập tối ưu nhất.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-xl">Gửi Đăng Ký Thành Công!</h3>
              <p className="text-sm">Thông tin của bạn đã được ghi nhận vào cơ sở dữ liệu Supabase. Giảng viên sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left max-w-xl mx-auto">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Họ và tên</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email liên hệ</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Số điện thoại / Zalo</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0987 654 321"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Nghề nghiệp hiện tại</label>
                <select
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none bg-white"
                >
                  <option value="Office">Dân văn phòng / Kế toán / Nhân sự</option>
                  <option value="Business">Chủ shop / Kinh doanh online</option>
                  <option value="Marketing">Marketer / Content Creator</option>
                  <option value="Other">Khác</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-indigo-500/25 transition-all text-base flex items-center justify-center gap-2"
              >
                {loading ? 'Đang gửi thông tin...' : '🚀 Gửi Thông Tin Đăng Ký Tư Vấn'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-sm text-center border-t border-slate-800">
        <p>© 2026 AI & Automation Masterclass. Powered by EurusDevSec, Cloudscape & Supabase.</p>
      </footer>
    </div>
  );
}
