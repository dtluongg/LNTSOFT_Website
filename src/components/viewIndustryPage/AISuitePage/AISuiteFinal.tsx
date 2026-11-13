import React from 'react'
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Headphones,
  CheckCircle2,
} from 'lucide-react'

export default function AISuiteFinal() {
  return (
    <section id="final-cta" className="relative w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        
        {/* =======================================================================
            EXECUTIVE AURORA PORTAL: KHỐI CANVAS TOÀN CẢNH CAO CẤP
            - Nền Navy sâu thẳm chuyển màu mượt mà kết hợp quầng sáng cực quang Aurora
            - Bố cục 2 cột cân xứng: Tuyên ngôn chuyển đổi số (Trái) & Khối liên hệ kính mờ (Phải)
        ======================================================================= */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#091129] via-[#0e1c47] to-[#072459] border border-sky-400/20 p-8 sm:p-12 lg:p-16 xl:p-20 shadow-2xl overflow-hidden">
          
          {/* Quầng sáng cực quang phát quang phía sau (Aurora Glows) */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600/30 blur-[120px]" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full bg-sky-400/15 blur-[100px]" />

          {/* Lưới tọa độ công nghệ ẩn mờ */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#38bde8 1px, transparent 1px), linear-gradient(90deg, #38bde8 1px, transparent 1px)`,
              backgroundSize: '36px 36px',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* ===================================================================
                CỘT TRÁI (7 CỘT): TIÊU ĐỀ & ĐOẠN DẪN DẮT CHUYỂN ĐỔI SỐ
            =================================================================== */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Capsule Badge phát quang Neon */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Sparkles size={13} className="text-cyan-300" />
                <span>TRANSFORMATION JOURNEY</span>
              </div>

              {/* Tiêu đề H2 lớn */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading leading-tight text-balance">
                Ready to Make Your Apparel Business{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300">
                  Smarter with AI?
                </span>
              </h2>

              {/* Đoạn giới thiệu nguyên gốc của người dùng */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                Discover how FXPRO AI Suite can transform your apparel Business through intelligent automation and connected business processes.
              </p>

              {/* Điểm nhấn công nghệ đảm bảo an toàn & liên tục */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span>Native FXPRO ERP & MES Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-cyan-400 shrink-0" />
                  <span>Enterprise-Grade Data Security</span>
                </div>
              </div>

            </div>

            {/* ===================================================================
                CỘT PHẢI (5 CỘT): KHỐI TƯƠNG TÁC KÍNH MỜ & NÚT CONTACT OUR TEAM
            =================================================================== */}
            <div className="lg:col-span-5">
              
              {/* Tấm thẻ kính mờ cao cấp (Glassmorphic Card) */}
              <div className="rounded-3xl bg-white/[0.07] backdrop-blur-xl border border-white/15 hover:border-cyan-400/40 hover:bg-white/[0.1] p-7 sm:p-9 shadow-2xl transition-all duration-500 space-y-6 group">
                
                {/* Phần tiêu đề mời gọi */}
                <div className="space-y-2">
                  
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider font-mono">
                    <Headphones size={15} />
                    <span>DIRECT CONSULTATION</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight leading-snug">
                    Let's Explore FXPRO AI Together
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Talk to our solution specialists.
                  </p>

                </div>

                {/* Nút bấm CTA Executive Pill chuẩn phong cách cao cấp */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="group/btn inline-flex items-center justify-center gap-3 w-full py-4 px-8 rounded-full bg-white hover:bg-sky-50 text-slate-950 font-bold text-sm sm:text-base shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-300 cursor-pointer text-center"
                  >
                    <span>CONTACT OUR TEAM</span>
                    <ArrowRight size={17} className="transition-transform duration-300 group-hover/btn:translate-x-1 text-lnt-blue" />
                  </a>
                </div>

                {/* Cam kết phản hồi nhanh chóng */}
                <div className="pt-1 border-t border-white/10 text-center">
                  <span className="text-[11px] font-mono text-slate-400 tracking-wide">
                    Dedicated 1-on-1 Consultation &bull; Tailored for Your Factory
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

