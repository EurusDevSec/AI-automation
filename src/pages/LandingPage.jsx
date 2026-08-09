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

      {/* INTERACTIVE 8-SESSION CARD CATALOG GRID SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-indigo-50/40 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-100/80 border border-indigo-200 text-indigo-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
              <span>Danh Sách 8 Buổi Học Thực Chiến</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Chọn Buổi Học & Trải Nghiệm <span className="text-gradient-primary">Giao Diện Thực Hành</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Nhấp vào bất kỳ Card Buổi học nào bên dưới để đi trực tiếp vào giao diện học tập Student Portal chuẩn Golden Path 100%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                number: 'Buổi 1',
                title: 'Lập Kế Hoạch Team Building & Prompt Sandbox',
                stage: 'Chặng 1: AI Văn Phòng',
                level: 'Cơ bản',
                badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
                icon: '📝',
                desc: 'Tạo kế hoạch sự kiện 2 ngày 1 đêm, phân bổ ngân sách 50 triệu và thiết kế prompt 4 tầng chuẩn 100%.',
                tags: ['ChatGPT', 'Team Building', 'Prompt Sandbox'],
                border: 'border-blue-200 hover:border-blue-500 hover:shadow-blue-500/15'
              },
              {
                id: 2,
                number: 'Buổi 2',
                title: 'Trợ Lý Văn Phòng Docs, Sheets & Slides',
                stage: 'Chặng 1: AI Văn Phòng',
                level: 'Cơ bản',
                badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
                icon: '📊',
                desc: 'Tự động dọn dẹp dữ liệu thô Excel 30 dòng, làm sạch báo cáo Docs và tạo Infographic Native trên Slides.',
                tags: ['Google Docs', 'Google Sheets', 'Slides AI'],
                border: 'border-indigo-200 hover:border-indigo-500 hover:shadow-indigo-500/15'
              },
              {
                id: 3,
                number: 'Buổi 3',
                title: 'Auto Cào Ý Tưởng RSS & n8n AI Summarizer',
                stage: 'Chặng 2: Tự Động Hóa n8n',
                level: 'Nâng cao',
                badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                icon: '⚡',
                desc: 'Dựng luồng cào tin tức VNExpress tự động sang Google Sheets & tóm tắt AI gửi ngay về Telegram & Gmail.',
                tags: ['n8n Workflow', 'RSS Feed', 'Telegram Bot'],
                border: 'border-emerald-200 hover:border-emerald-500 hover:shadow-emerald-500/15'
              },
              {
                id: 4,
                number: 'Buổi 4',
                title: 'Máy Tạo Content Facebook Tự Động',
                stage: 'Chặng 2: Tự Động Hóa n8n',
                level: 'Nâng cao',
                badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                icon: '📱',
                desc: 'Lên lịch biên soạn bài đăng Facebook kèm hình ảnh AI tự động, hẹn giờ đăng bài lên Fanpage 24/7.',
                tags: ['Facebook API', 'AI Content Writer', 'Fanpage Auto'],
                border: 'border-teal-200 hover:border-teal-500 hover:shadow-teal-500/15'
              },
              {
                id: 5,
                number: 'Buổi 5',
                title: 'Xưởng Kịch Bản & Video AI Ngắn',
                stage: 'Chặng 2: Tự Động Hóa n8n',
                level: 'Nâng cao',
                badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                icon: '🎬',
                desc: 'Tự động sản xuất kịch bản Video TikTok/Shorts, ghép voice AI và xuất file Video trailer sẵn sàng đăng.',
                tags: ['AI Script', 'Voice AI', 'Video Automation'],
                border: 'border-purple-200 hover:border-purple-500 hover:shadow-purple-500/15'
              },
              {
                id: 6,
                number: 'Buổi 6',
                title: 'Auto Chatbot Messenger Báo Giá',
                stage: 'Chặng 2: Tự Động Hóa n8n',
                level: 'Nâng cao',
                badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                icon: '🤖',
                desc: 'Thiết lập Chatbot AI tư vấn sản phẩm, tự động trả lời bình luận và gửi báo giá qua tin nhắn riêng.',
                tags: ['Messenger Bot', 'AI Customer Care', 'Auto Reply'],
                border: 'border-amber-200 hover:border-amber-500 hover:shadow-amber-500/15'
              },
              {
                id: 7,
                number: 'Buổi 7',
                title: 'Lập Trình Website AI (React & Tailwind)',
                stage: 'Chặng 3: Website AI & Live',
                level: 'Thực chiến',
                badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
                icon: '🌐',
                desc: 'Ra lệnh cho AI Agent dựng trọn bộ Website bán hàng/Landing Page React hiện đại chuẩn UX/UI.',
                tags: ['React.js', 'TailwindCSS', 'Vite App'],
                border: 'border-rose-200 hover:border-rose-500 hover:shadow-rose-500/15'
              },
              {
                id: 8,
                number: 'Buổi 8',
                title: 'Deploy Vercel & Supabase Cloud DB',
                stage: 'Chặng 3: Website AI & Live',
                level: 'Thực chiến',
                badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
                icon: '🚀',
                desc: 'Kết nối mã nguồn GitHub với Vercel để xuất bản website chạy công khai lên Internet & Supabase Database.',
                tags: ['Vercel Cloud', 'Supabase DB', 'Live Deploy'],
                border: 'border-indigo-300 hover:border-indigo-600 hover:shadow-indigo-500/15'
              }
            ].map((card) => (
              <div
                key={card.id}
                onClick={() => navigate(`/app?session=${card.id}`)}
                className={`group relative bg-white rounded-2xl p-6 border ${card.border} shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden`}
              >
                {/* TOP HEADER */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl p-2 rounded-xl bg-slate-100 group-hover:scale-110 transition-transform">{card.icon}</span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                      {card.level}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{card.stage} • {card.number}</div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-indigo-600 transition-colors mt-1 leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                {/* FOOTER TAGS & CTA BUTTON */}
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-200/80">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-full py-2 px-3 rounded-xl bg-slate-100 group-hover:bg-indigo-600 text-slate-700 group-hover:text-white font-bold text-xs transition-all flex items-center justify-between">
                    <span>Vào Học ngay</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
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
