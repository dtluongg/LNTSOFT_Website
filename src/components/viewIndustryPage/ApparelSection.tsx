import React from 'react'
import {
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import ApparelArchitectureSuite from '../viewHomePage/Industry/ApparelArchitectureSuite'
import ExploreKeyCapabilities from './ExploreKeyCapabilities'

export default function ApparelSection() {
  const metrics = [
    { value: '+28%', label: 'Sewing Efficiency' },
    { value: '-35%', label: 'Fabric Wastage' },
    { value: '100%', label: 'Order Traceability' },
  ]

  const bulletPoints = [
    'End-to-end garment production management tailored for fast-paced, high-mix apparel realities.',
    'Real-time sewing line balancing, style sampling approval workflow, and defect heatmap inspection.',
    'Seamless modular interoperability across fabric warehouse, cutting room, sewing lines, and ERP.',
  ]

  return (
    <section id="apparel" className="py-16 lg:py-24 border-b border-slate-100 bg-slate-50/50 scroll-mt-20 overflow-visible">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            {/* Main Title: Apparel ERP & MES Solution */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15194f] tracking-tight">
              Apparel ERP & MES Solution
            </h2>

            {/* Subtitle / Value Proposition Tagline */}
            <p className="text-base sm:text-lg font-medium text-[#087bc1] mt-2 max-w-2xl leading-snug">
              Modern, Customizable ERP Software for Your Entire Apparel Business Ecosystem
            </p>
          </div>

          {/* Metric cards */}
          <div className="flex items-center gap-3 shrink-0">
            {metrics.map((m, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200/90 shadow-xs px-4 py-2.5 text-center min-w-[105px]">
                <div className="text-base sm:text-lg font-bold text-[#15194f]">{m.value}</div>
                <div className="text-[11px] text-slate-500 font-semibold">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            OVERVIEW FRAMED CARD: Cột trái nội dung text + Cột phải hình ảnh
        ========================================================================= */}
        <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Cột trái: Badge OVERVIEW + 2 Đoạn nội dung văn bản */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* OVERVIEW Badge (Capsule Pill đỏ Ruby tinh tế, thu hút ánh nhìn) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200/90 text-rose-600 text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <Sparkles size={13} className="text-rose-500" />
                <span>OVERVIEW</span>
              </div>

              {/* Đoạn 1: Lead Quote (In đậm, in nghiêng, font sắc sảo) */}
              <div className="relative border-l-3 border-[#087bc1] pl-4 sm:pl-5 py-1">
                <p className="text-base sm:text-[17px] font-bold italic text-slate-800 leading-relaxed font-sans">
                  "FXPRO Product Suite is an integrated, AI-powered, end-to-end Apparel ERP & MES solution designed to digitalize, streamline, and optimize the business operations, supply chain activities, and factory-floor execution within one unified platform."
                </p>
              </div>

              {/* Đoạn 2: Explanation (Đứng thẳng, viết thường, thoáng mắt, dễ đọc) */}
              <p className="text-sm sm:text-base font-normal not-italic text-slate-600 leading-relaxed pl-1 font-sans">
                Leveraging advanced technologies, intelligent automation, and real-time operational intelligence, FXPRO empowers apparel manufacturers to achieve greater operational efficiency, enhance production performance, improve end-to-end visibility, and accelerate data-driven decision-making.
              </p>

              {/* Capability Tags */}
              <div className="pt-2 flex flex-wrap gap-2.5 pl-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 border border-sky-100 text-xs font-semibold text-[#087bc1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087bc1]" />
                  AI Line Balancing
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Inline QC & Defect Heatmap
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Color-Size Matrix & Roll IWM
                </span>
              </div>
            </div>

            {/* Cột phải: Hình ảnh minh họa Smart Apparel Factory / MES Showcase */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                alt="FXPRO Apparel ERP & MES Smart Factory Operation"
                className="w-full h-auto max-h-[380px] object-cover mx-auto transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15194f]/85 via-[#15194f]/20 to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#15194f]/90 backdrop-blur-md px-3 py-1 font-semibold shadow">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>FXPRO MES • Smart Sewing Floor</span>
                </div>
                <span className="text-[11px] text-slate-300 font-mono hidden sm:inline">22 Modules Live</span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            EXPLORE KEY CAPABILITIES: Khung tương tác 8 Capabilities (Bento Stage)
        ========================================================================= */}
        <ExploreKeyCapabilities />

      </div>

      {/* 3D Oval Architecture Suite (Full Bleed Cyan Ribbon) */}
      <div className="w-full bg-[#259fd2] py-2 shadow-inner overflow-visible relative">
        <ApparelArchitectureSuite />
      </div>

      {/* Section Footer: Checklist & CTA */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="space-y-2">
            {bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 size={16} className="text-[#087bc1] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#087bc1] hover:bg-[#076da9] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:gap-2.5 shrink-0 cursor-pointer"
          >
            <span>Request Apparel Case Study</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
