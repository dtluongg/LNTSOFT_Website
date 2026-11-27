import React from 'react'
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Headphones,
  CheckCircle2,
} from 'lucide-react'

export default function WorkNoteFinal() {
  return (
    <section id="final-cta" className="relative w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* EXECUTIVE AURORA PORTAL */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#091129] via-[#0e1c47] to-[#072459] border border-sky-400/20 p-8 sm:p-12 lg:p-16 xl:p-20 shadow-2xl overflow-hidden">
          {/* Aurora Glows */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600/30 blur-[120px]" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full bg-sky-400/15 blur-[100px]" />

          {/* Grid Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#38bde8 1px, transparent 1px), linear-gradient(90deg, #38bde8 1px, transparent 1px)`,
              backgroundSize: '36px 36px',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Cột trái (7 cột): Tiêu đề & Nội dung nguyên bản 100% của bạn */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Sparkles size={13} className="text-cyan-300" />
                <span>FXPRO WORKNOTE</span>
              </div>

              {/* Tiêu đề chính */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading leading-tight text-balance">
                Keep Every Task{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300">
                  on Track.
                </span>
              </h2>

              {/* Dòng dẫn dắt */}
              <p className="text-base sm:text-lg font-semibold text-cyan-200/90 leading-snug">
                Bring your business notes, tasks, and follow-up activities into one organized digital workspace.
              </p>

              {/* Đoạn văn mô tả (100% nguyên văn) */}
              <div className="space-y-3 text-sm sm:text-[15px] text-slate-300 font-normal leading-relaxed max-w-xl">
                <p>
                  With FXPRO WorkNote, your teams can collaborate more effectively, maintain better traceability, and ensure important business activities are followed through to completion.
                </p>
                <p>
                  Discover how FXPRO WorkNote can help your business work smarter and stay organized.
                </p>
              </div>

              {/* Điểm nhấn an toàn & tích hợp */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span>Native FXPRO ERP Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-cyan-400 shrink-0" />
                  <span>Enterprise Security & Role-Based Access</span>
                </div>
              </div>
            </div>

            {/* Cột phải (5 cột): Khối tương tác liên hệ tư vấn */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/[0.07] backdrop-blur-xl border border-white/15 hover:border-cyan-400/40 hover:bg-white/[0.1] p-7 sm:p-9 shadow-2xl transition-all duration-500 space-y-6 group">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider font-mono">
                    <Headphones size={15} />
                    <span>DIRECT CONSULTATION</span>
                  </div>

                  {/* Tiêu đề & mô tả (100% nguyên văn) */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight leading-snug">
                    Request a Demo Today.
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Talk to our solution specialists.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Nút bấm (100% nguyên văn: CONTACT OUR TEAM) */}
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold px-6 py-3.5 text-sm transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_28px_rgba(56,189,248,0.55)] group/btn cursor-pointer"
                  >
                    <span>CONTACT OUR TEAM</span>
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>

                  <p className="text-center text-xs text-slate-400">
                    No commitment required • Tailored to your business workflow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
