import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck, Zap, Globe, Cpu, CheckCircle2, ArrowRight,
  BookOpen, UserCheck, Star, Sparkles, Copy, Check,
  Layers, Terminal, Play, Flame, TrendingUp, Code2
} from 'lucide-react';
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

  // Interactive Stage Filter State
  const [activeStageFilter, setActiveStageFilter] = useState('all');

  // Interactive Sandbox Widget State
  const [activeSandboxTab, setActiveSandboxTab] = useState('prompt');
  const [copiedSandbox, setCopiedSandbox] = useState(false);

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
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: 'Triết Lý Golden Path 100%',
      description: 'Mọi câu prompt, file JSON n8n hay mã SQL đều đã kiểm thử chạy 100% không lỗi khi copy-paste.'
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: '1-Click Copy & Direct Download',
      description: 'Sao chép prompt chuẩn doanh nghiệp hoặc tải workflow n8n JSON trực tiếp ngay trên giao diện web.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: 'Deploy Web Live Lên Internet',
      description: 'Tự mình kết nối Git repo với Vercel & Supabase để đưa website sản phẩm chạy thực tế công khai.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      title: 'AI Prompt Sandbox Trực Tuyến',
      description: 'Thực hành thử nghiệm prompt và quan sát kết quả xử lý ngay trong nền tảng học tập.'
    }
  ];

  const sessionCardsData = [
    {
      id: 1,
      number: 'Buổi 1',
      title: 'Lập Kế Hoạch Team Building & Prompt Sandbox',
      stage: 'stage1',
      stageName: 'Chặng 1: AI Văn Phòng',
      level: 'Cơ bản',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: '📝',
      imageUrl: '/session_1_real.png',
      desc: 'Tạo kế hoạch sự kiện 2 ngày 1 đêm, phân bổ ngân sách 50 triệu và thiết kế prompt 4 tầng chuẩn 100%.',
      tags: ['ChatGPT', 'Team Building', 'Prompt Sandbox'],
      border: 'border-blue-200 hover:border-blue-500 hover:shadow-blue-500/15'
    },
    {
      id: 2,
      number: 'Buổi 2',
      title: 'Trợ Lý Văn Phòng Docs, Sheets & Slides',
      stage: 'stage1',
      stageName: 'Chặng 1: AI Văn Phòng',
      level: 'Cơ bản',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: '📊',
      imageUrl: '/session_2.jpg',
      desc: 'Tự động dọn dẹp dữ liệu thô Excel 30 dòng, làm sạch báo cáo Docs và tạo Infographic Native trên Slides.',
      tags: ['Google Docs', 'Google Sheets', 'Slides AI'],
      border: 'border-indigo-200 hover:border-indigo-500 hover:shadow-indigo-500/15'
    },
    {
      id: 3,
      number: 'Buổi 3',
      title: 'Auto Cào Ý Tưởng RSS & n8n AI Summarizer',
      stage: 'stage2',
      stageName: 'Chặng 2: Tự Động Hóa n8n',
      level: 'Nâng cao',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: '⚡',
      imageUrl: '/session_3.jpg',
      desc: 'Dựng luồng cào tin tức VNExpress tự động sang Google Sheets & tóm tắt AI gửi ngay về Telegram & Gmail.',
      tags: ['n8n Workflow', 'RSS Feed', 'Telegram Bot'],
      border: 'border-emerald-200 hover:border-emerald-500 hover:shadow-emerald-500/15'
    },
    {
      id: 4,
      number: 'Buổi 4',
      title: 'Máy Tạo Content Facebook Tự Động',
      stage: 'stage2',
      stageName: 'Chặng 2: Tự Động Hóa n8n',
      level: 'Nâng cao',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: '📱',
      imageUrl: '/session_4.jpg',
      desc: 'Lên lịch biên soạn bài đăng Facebook kèm hình ảnh AI tự động, hẹn giờ đăng bài lên Fanpage 24/7.',
      tags: ['Facebook API', 'AI Content Writer', 'Fanpage Auto'],
      border: 'border-teal-200 hover:border-teal-500 hover:shadow-teal-500/15'
    },
    {
      id: 5,
      number: 'Buổi 5',
      title: 'Xưởng Kịch Bản & Video AI Ngắn',
      stage: 'stage2',
      stageName: 'Chặng 2: Tự Động Hóa n8n',
      level: 'Nâng cao',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: '🎬',
      imageUrl: '/session_5.jpg',
      desc: 'Tự động sản xuất kịch bản Video TikTok/Shorts, ghép voice AI và xuất file Video trailer sẵn sàng đăng.',
      tags: ['AI Script', 'Voice AI', 'Video Automation'],
      border: 'border-purple-200 hover:border-purple-500 hover:shadow-purple-500/15'
    },
    {
      id: 6,
      number: 'Buổi 6',
      title: 'Auto Chatbot Messenger Báo Giá',
      stage: 'stage2',
      stageName: 'Chặng 2: Tự Động Hóa n8n',
      level: 'Nâng cao',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: '🤖',
      imageUrl: '/session_6.jpg',
      desc: 'Thiết lập Chatbot AI tư vấn sản phẩm, tự động trả lời bình luận và gửi báo giá qua tin nhắn riêng.',
      tags: ['Messenger Bot', 'AI Customer Care', 'Auto Reply'],
      border: 'border-amber-200 hover:border-amber-500 hover:shadow-amber-500/15'
    },
    {
      id: 7,
      number: 'Buổi 7',
      title: 'Lập Trình Website AI (React & Tailwind)',
      stage: 'stage3',
      stageName: 'Chặng 3: Website AI & Live',
      level: 'Thực chiến',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      icon: '🌐',
      imageUrl: '/session_7.jpg',
      desc: 'Ra lệnh cho AI Agent dựng trọn bộ Website bán hàng/Landing Page React hiện đại chuẩn UX/UI.',
      tags: ['React.js', 'TailwindCSS', 'Vite App'],
      border: 'border-rose-200 hover:border-rose-500 hover:shadow-rose-500/15'
    },
    {
      id: 8,
      number: 'Buổi 8',
      title: 'Deploy Vercel & Supabase Cloud DB',
      stage: 'stage3',
      stageName: 'Chặng 3: Website AI & Live',
      level: 'Thực chiến',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      icon: '🚀',
      imageUrl: '/session_8.jpg',
      desc: 'Kết nối mã nguồn GitHub với Vercel để xuất bản website chạy công khai lên Internet & Supabase Database.',
      tags: ['Vercel Cloud', 'Supabase DB', 'Live Deploy'],
      border: 'border-indigo-300 hover:border-indigo-600 hover:shadow-indigo-500/15'
    }
  ];

  const filteredSessions = activeStageFilter === 'all'
    ? sessionCardsData
    : sessionCardsData.filter(s => s.stage === activeStageFilter);

  const sandboxSnippets = {
    prompt: `Nhiệm vụ: Hãy lập kế hoạch sự kiện Team Building 2 ngày 1 đêm cho 30 nhân viên.
Bối cảnh: Ngân sách tối đa 50 triệu đồng tại Đà Nẵng.
Yêu cầu output: 
1. Bảng phân bổ chi phí dạng Markdown Table.
2. Lịch trình chi tiết theo từng khung giờ.
3. Kịch bản trò chơi gắn kết đồng đội.`,
    workflow: `// n8n Workflow JSON Snippet (Auto RSS -> Google Sheets -> Telegram AI Summarizer)
{
  "nodes": [
    { "name": "Schedule Trigger", "type": "n8n-nodes-base.scheduleTrigger" },
    { "name": "RSS Read", "type": "n8n-nodes-base.rssFeedRead" },
    { "name": "Gemini AI Summarizer", "type": "@n8n/n8n-nodes-langchain.chainLlm" },
    { "name": "Telegram Bot Notify", "type": "n8n-nodes-base.telegram" }
  ]
}`,
    code: `// React Component: AI Web Builder Output (Vite + Tailwind)
export default function HeroSection() {
  return (
    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-indigo-400">AI Automation Platform</h1>
      <p className="mt-2 text-slate-300">Deploy live lên Vercel trong 60 giây.</p>
    </div>
  );
}`
  };

  const handleCopySandbox = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedSandbox(true);
    setTimeout(() => setCopiedSandbox(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      <Navigation />

      {/* TOP NOTIFICATION BANNER */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-xs sm:text-sm py-2.5 px-4 text-center font-medium flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        <span>Lộ Trình Đào Tạo AI & Automation Thực Chiến 2026 - Chuẩn Golden Path 100% Zero-Error</span>
        <span className="hidden md:inline-block bg-white/20 text-white text-[11px] px-2.5 py-0.5 rounded-full font-bold border border-white/20">
          90 Phút / Buổi
        </span>
      </div>

      {/* AMBIENT MESH GLOW BACKDROP */}
      <div className="mesh-ambient-glow bg-indigo-400 w-96 h-96 top-10 -left-20"></div>
      <div className="mesh-ambient-glow bg-purple-400 w-96 h-96 top-40 -right-20"></div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-indigo-100/90 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: HERO HEADLINE & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs">
                <Star className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
                <span>Khóa Học Thực Chiến 8 Buổi Dành Cho Người Không Biết Code</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Làm Chủ AI & Tự Động Hóa <br />
                <span className="gradient-text-hero">Kinh Doanh Thực Chiến</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Ứng dụng trọn bộ <strong>ChatGPT, n8n Automation, Supabase & AI Web Builder</strong> vào công việc kinh doanh hàng ngày. Học gạch đầu dòng rõ ràng, thực hành copy-paste chạy 100% không lo lỗi code.
              </p>

              {/* TRUST BADGES & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigate('/app')}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-7 py-4 rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 text-base active:scale-95 cursor-pointer"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  <span>Vào Học Ngay (Student Portal)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 font-bold px-6 py-4 rounded-2xl border border-slate-300 shadow-xs transition-all duration-200 text-base cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-slate-500" />
                  <span>Khám Phá Lộ Trình 8 Buổi</span>
                </button>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Golden Path Zero-Error</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Tải File n8n JSON 1-Click</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Deploy Website Live Vercel</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: HERO 3D PREVIEW CARD */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900">
                <img
                  src="/hero_ai_automation_light.jpg"
                  alt="AI Automation Dashboard Preview"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-md border border-slate-200/80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Golden Path Verified</span>
                </div>

                <div className="p-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between text-xs border-t border-slate-800">
                  <span className="font-bold flex items-center gap-1.5 text-indigo-300">
                    <span>⚡ Engine Tự Động Hóa n8n</span>
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30 text-[10px]">
                    Ready to Copy
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUE PILLARS GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Đỉnh Cao Thực Chiến
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Tại Sao Khóa Học Này <span className="gradient-text-emerald">Khác Biệt Hoàn Toàn?</span>
          </h2>
          <p className="text-slate-600 text-base">
            Loại bỏ hoàn toàn cảm giác bối rối công nghệ. Học xong có ngay sản phẩm tự động hóa vận hành thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featurePillars.map((item, idx) => (
            <div key={idx} className="glass-card-premium p-6 rounded-2xl flex flex-col justify-between hover:border-indigo-300 transition-all hover:-translate-y-1 shadow-sm">
              <div className="space-y-4">
                <div className="p-3 bg-indigo-50 rounded-xl w-fit border border-indigo-100">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-base text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE 8-SESSION CARD CATALOG GRID WITH STAGE FILTER TABS */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-indigo-50/40 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-100/80 border border-indigo-200 text-indigo-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
              <span>Lộ Trình Đào Tạo 8 Buổi Học</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Chọn Buổi Học & Trải Nghiệm <span className="gradient-text-hero">Giao Diện Thực Hành</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Bấm vào từng Chặng bên dưới để lọc bài học hoặc bấm vào bất kỳ Card nào để đi trực tiếp vào Student Portal.
            </p>
          </div>

          {/* STAGE FILTER TABS */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {[
              { id: 'all', label: '✨ Tất Cả (8 Buổi)' },
              { id: 'stage1', label: 'Chặng 1: AI Văn Phòng (2)' },
              { id: 'stage2', label: 'Chặng 2: Tự Động Hóa n8n (4)' },
              { id: 'stage3', label: 'Chặng 3: Website AI (2)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStageFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                  activeStageFilter === tab.id
                    ? 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-300'
                    : 'bg-white text-slate-700 hover:bg-indigo-50 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* SESSION CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSessions.map((card) => (
              <div
                key={card.id}
                onClick={() => navigate(`/app?session=${card.id}`)}
                className={`group relative bg-white rounded-2xl border ${card.border} shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden`}
              >
                {/* POSTER THUMBNAIL HEADER */}
                {card.imageUrl && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900 border-b border-slate-100">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                      <span className="text-xl p-1.5 rounded-lg bg-white/90 backdrop-blur-md shadow-sm">{card.icon}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border backdrop-blur-md ${card.badgeColor}`}>
                        {card.level}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">{card.stageName} • {card.number}</div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((tag, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-200/80">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="w-full py-2 px-3 rounded-xl bg-slate-100 group-hover:bg-indigo-600 text-slate-700 group-hover:text-white font-bold text-xs transition-all flex items-center justify-between shadow-2xs">
                      <span>Vào Học ngay</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE INTERACTIVE PROMPT & WORKFLOW SANDBOX WIDGET */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Live Sandbox Preview</span>
              </div>
              <h3 className="text-2xl font-extrabold mt-1">Trải Nghiệm Mẫu Tài Nguyên 1-Click Copy</h3>
            </div>

            {/* SANDBOX TABS */}
            <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {[
                { id: 'prompt', label: '📝 Prompt mẫu' },
                { id: 'workflow', label: '⚡ n8n JSON' },
                { id: 'code', label: '💻 Code React' }
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => setActiveSandboxTab(st.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeSandboxTab === st.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          {/* CODE CONTAINER */}
          <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-5 overflow-hidden font-mono text-xs text-slate-200">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="text-slate-400 font-bold uppercase text-[10px]">
                {activeSandboxTab === 'prompt' ? 'Mega Prompt Template' : activeSandboxTab === 'workflow' ? 'n8n Workflow JSON' : 'React Code Snippet'}
              </span>
              <button
                onClick={() => handleCopySandbox(sandboxSnippets[activeSandboxTab])}
                className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                {copiedSandbox ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSandbox ? 'Đã sao chép!' : 'Sao chép 1-Click'}</span>
              </button>
            </div>
            <pre className="overflow-x-auto leading-relaxed whitespace-pre-wrap">
              <code>{sandboxSnippets[activeSandboxTab]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-indigo-100 text-center space-y-8">
          <div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
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
              <p className="text-sm">Thông tin của bạn đã được ghi nhận vào cơ sở dữ liệu Supabase Cloud. Giảng viên sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
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
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all text-base flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                {loading ? 'Đang gửi thông tin...' : '🚀 Gửi Thông Tin Đăng Ký Tư Vấn'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-sm text-center border-t border-slate-800">
        <p>© 2026 AI & Automation Masterclass. Powered by EurusDevSec, Cloudscape & Supabase Cloud.</p>
      </footer>
    </div>
  );
}
