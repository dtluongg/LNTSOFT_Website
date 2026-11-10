import React from 'react'
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import ApparelArchitectureSuite from '../viewHomePage/Industry/ApparelArchitectureSuite'
import ExploreKeyCapabilities from './ExploreKeyCapabilities'

export default function ApparelSection() {
  const metrics = [
    { value: '+28%', label: 'Sewing Efficiency' },
    { value: '-35%', label: 'Fabric Wastage' },
    { value: '100%', label: 'Order Traceability' },
  ]

  // 5 Nội dung trọng tâm sếp yêu cầu
  const highlights = [
    'AI SUITE',
    'SMART PLANNER',
    'SMART FACTORY',
    'AI INSIGHT',
    'WORKNOTE',
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
            <p className="text-base sm:text-lg font-medium text-[#087bc1] mt-2 max-w-2xl md:max-w-none leading-snug">
              Modern, Customizable ERP Software for Your Entire Apparel Business Ecosystem
            </p>
          </div>

          {/* Metric cards
          <div className="flex items-center gap-3 shrink-0">
            {metrics.map((m, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200/90 shadow-xs px-4 py-2.5 text-center min-w-[105px]">
                <div className="text-base sm:text-lg font-bold text-[#15194f]">{m.value}</div>
                <div className="text-[11px] text-slate-500 font-semibold">{m.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* =========================================================================
            OVERVIEW FRAMED CARD: Hàng trên (Text + Hình ảnh) + Hàng dưới (4 thẻ trải ngang)
        ========================================================================= */}
        <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
          
          {/* HÀNG TRÊN: Cột trái nội dung text + Cột phải hình ảnh (Hình được nâng lên gọn gàng) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Cột trái: Badge OVERVIEW + 2 Đoạn nội dung văn bản */}
            <div className="lg:col-span-7 space-y-4">
              
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
            </div>

            {/* Cột phải: Hình ảnh minh họa Smart Apparel Factory / MES Showcase (Nâng lên cân đối) */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                alt="FXPRO Apparel ERP & MES Smart Factory Operation"
                className="w-full h-[230px] sm:h-[260px] object-cover mx-auto transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15194f]/85 via-[#15194f]/20 to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#15194f]/90 backdrop-blur-md px-3 py-1 font-semibold shadow">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>FXPRO MES • Smart Business Applications</span>
                </div>
                <span className="text-[11px] text-slate-300 font-mono hidden sm:inline">22 Modules Live</span>
              </div>
            </div>

          </div>

          {/* HÀNG DƯỚI: TRẢI DÀI FULL-WIDTH 4 THẺ GIÁ TRỊ (4 CỘT CÂN ĐỐI) */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="text-xs sm:text-sm font-bold text-[#15194f] font-heading tracking-tight flex items-center gap-2 mb-3.5">
              <TrendingUp size={16} className="text-[#087bc1]" />
              <span>Drive Measurable Business Improvements</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-sky-50/70 border border-sky-100 text-xs sm:text-[13px] font-semibold text-[#087bc1] shadow-2xs hover:bg-sky-50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#087bc1] shrink-0" />
                <span className="line-clamp-1">Improved Operational Efficiency</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs sm:text-[13px] font-semibold text-emerald-700 shadow-2xs hover:bg-emerald-50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="line-clamp-1">Reduced Material Wastage</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs sm:text-[13px] font-semibold text-indigo-700 shadow-2xs hover:bg-indigo-50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                <span className="line-clamp-1">End-to-End Order Traceability</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-100 text-xs sm:text-[13px] font-semibold text-amber-800 shadow-2xs hover:bg-amber-50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span className="line-clamp-1">Improved On-Time Delivery Performance</span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            EXPLORE KEY CAPABILITIES: Khung tương tác 8 Capabilities (Bento Stage)
        ========================================================================= */}
        <ExploreKeyCapabilities />

      </div>

      {/* =========================================================================
          APPLICATION MODULES STAGE: GOM TOÀN BỘ (HEADER + 3D OVAL + 5 THẺ + CTA)
          VÀO CHUNG DẢI NỀN XANH CÔNG NGHỆ CAO — LIỀN KHỐI 100%
      ========================================================================= */}
      <div className="w-full bg-[#259fd2] pt-10 pb-12 shadow-inner overflow-hidden relative">
        
        {/* 1. Header Application Modules trên nền xanh */}
        <div className="text-center max-w-3xl mx-auto px-4 mb-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            Application Modules
          </h3>
          <p className="text-white/90 text-sm sm:text-base font-medium mt-1.5 font-sans">
            Interactive multi-tier architecture spanning 22 specialized apparel manufacturing modules.
          </p>
        </div>

        {/* 2. Sơ đồ 3D Oval 22 Modules */}
        <ApparelArchitectureSuite />

        {/* 3. Floating Tech Nodes + CTA (Ý TƯỞNG 1: HOÀN TOÀN KHÔNG ĐÓNG KHUNG BO VIỀN) */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-4 relative z-0">
          
          {/* 5 Điểm chạm công nghệ trôi nổi phẳng (Floating Tech Nodes) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {highlights.map((name, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-center text-center gap-2.5 py-2.5 px-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] shrink-0 group-hover:scale-125 group-hover:bg-amber-300 group-hover:shadow-[0_0_10px_rgba(253,224,71,0.9)] transition-all" />
                <span className="text-white font-bold text-xs sm:text-[14px] font-heading tracking-wider leading-snug group-hover:text-amber-100 transition-colors uppercase">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Đường kẻ phát quang ngang siêu mảnh mờ ảo */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent my-6 sm:my-7" />

          {/* Dải CTA chân nền xanh: Thông điệp thanh thoát + Nút Navy tương phản sang trọng */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/95">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399] shrink-0" />
              <span>Ready to transform your garment manufacturing operations with FXPRO?</span>
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#15194f] hover:bg-[#0c0f33] text-white text-xs sm:text-sm font-semibold shadow-xl hover:shadow-2xl transition-all hover:gap-2.5 shrink-0 cursor-pointer border border-white/20"
            >
              <span>Request Apparel Case Study</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
