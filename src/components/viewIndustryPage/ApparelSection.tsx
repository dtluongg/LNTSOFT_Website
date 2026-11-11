import React from 'react'
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shirt,
  CheckCircle2,
} from 'lucide-react'
import ApparelArchitectureSuite from '../viewHomePage/Industry/ApparelArchitectureSuite'
import ExploreKeyCapabilities from './ExploreKeyCapabilities'

export default function ApparelSection() {
  // 5 Điểm chạm công nghệ cốt lõi
  const highlights = [
    'AI SUITE',
    'SMART PLANNER',
    'SMART FACTORY',
    'AI INSIGHT',
    'WORKNOTE',
  ]

  // 4 Chỉ số cải tiến thực tiễn ban đầu (Độ dài chữ cân đối, không bị lệch hàng)
  const impactValues = [
    {
      title: 'Improved Operational Efficiency',
      dotColor: 'bg-lnt-blue shadow-[0_0_8px_rgba(8,123,193,0.5)]',
    },
    {
      title: 'Reduced Material Wastage',
      dotColor: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]',
    },
    {
      title: 'End-to-End Order Traceability',
      dotColor: 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]',
    },
    {
      title: 'On-Time Delivery Performance',
      dotColor: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]',
    },
  ]

  return (
    <section id="apparel" className="py-16 lg:py-24 border-b border-slate-200/80 bg-white scroll-mt-20 overflow-visible">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-14">
        
        {/* =========================================================================
            TẦNG 1: BỐ CỤC 2 CỘT CHIA ĐÔI TỪ ĐỈNH HEADER
            Cột phải: Hình ảnh lớn phóng to lên ngang hàng với tiêu đề
            Cột trái: Tiêu đề lớn + Tiêu đề phụ + Khối Overview trọn vẹn
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* CỘT TRÁI (7 CỘT): HEADER + SUBTITLE + BADGE OVERVIEW + QUOTE + EXPLANATION */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* 1. Header & Subtitle */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-lnt-blue shadow-2xs mb-3">
                <Shirt size={13} className="text-lnt-blue" />
                <span>FASHION & APPAREL ENTERPRISE SUITE</span>
              </div>

              {/* Tiêu đề H2: Chuẩn kích thước bằng đúng Manufacturing ERP */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight leading-snug">
                Apparel ERP & MES Solution
              </h2>

              {/* Subtitle / Value Proposition Tagline */}
              <p className="text-base sm:text-lg font-medium text-lnt-blue mt-2 leading-snug">
                Modern, Customizable ERP Software for Your Entire Apparel Business Ecosystem
              </p>
            </div>

            {/* 2. Khối OVERVIEW: Giữ trọn nội dung gốc ban đầu */}
            <div className="space-y-4 pt-1">
              
              {/* OVERVIEW Badge (Capsule Pill đỏ Ruby tinh tế) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <Sparkles size={13} className="text-rose-500" />
                <span>OVERVIEW</span>
              </div>

              {/* Đoạn 1: Lead Quote (In đậm, in nghiêng, font sắc sảo) */}
              <div className="relative border-l-3 border-lnt-blue pl-4 sm:pl-5 py-1">
                <p className="text-base sm:text-[17px] font-bold italic text-slate-800 leading-relaxed font-sans">
                  "FXPRO Product Suite is an integrated, AI-powered, end-to-end Apparel ERP & MES solution designed to digitalize, streamline, and optimize the business operations, supply chain activities, and factory-floor execution within one unified platform."
                </p>
              </div>

              {/* Đoạn 2: Explanation (Đứng thẳng, viết thường, thoáng mắt, dễ đọc) */}
              <p className="text-sm sm:text-base font-normal not-italic text-slate-600 leading-relaxed pl-1 font-sans">
                Leveraging advanced technologies, intelligent automation, and real-time operational intelligence, FXPRO empowers apparel manufacturers to achieve greater operational efficiency, enhance production performance, improve end-to-end visibility, and accelerate data-driven decision-making.
              </p>
            </div>

          </div>

          {/* CỘT PHẢI (5 CỘT): HÌNH ẢNH PHÓNG TO LÊN NGANG HÀNG HEADER CHẠY DỌC XUỐNG */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[380px] sm:min-h-[440px] relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl group bg-slate-900">
              
              {/* Ảnh thực tế nhà máy thời trang & công nghệ may */}
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                alt="FXPRO Apparel ERP & MES Smart Factory Operation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />

              {/* Lớp phủ gradient ánh sáng */}
              <div className="absolute inset-0 bg-gradient-to-t from-lnt-navy/85 via-lnt-navy/20 to-transparent pointer-events-none" />

              {/* Dải thông tin chân ảnh: Khôi phục chính xác 100% nội dung gốc ban đầu */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-lnt-navy/90 backdrop-blur-md px-3.5 py-1.5 font-semibold shadow">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>FXPRO MES • Smart Business Applications</span>
                </div>
                <span className="text-[11px] text-slate-300 font-mono hidden sm:inline">22 Modules Live</span>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            TẦNG 2: 4 THẺ DATA TRẢI DÀI FULL-WIDTH (Chân khối, bệ đỡ ngang vững chãi)
            Khôi phục chuẩn xác cấu trúc và nội dung mà bạn yêu cầu
        ========================================================================= */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs sm:text-sm font-bold text-title flex items-center gap-2 font-heading">
              <TrendingUp size={16} className="text-lnt-blue" />
              <span>Drive Measurable Business Improvements</span>
            </div>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Operational KPIs
            </span>
          </div>

          {/* 4 Thẻ cải tiến: Thiết kế tối giản đỡ viền, 1 dòng đồng đều tăm tắp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {impactValues.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100/90 hover:border-slate-200/90 hover:shadow-xs transition-all duration-300"
              >
                <span className={`w-2 h-2 rounded-full ${item.dotColor} shrink-0 group-hover:scale-125 transition-transform`} />
                <span className="text-xs sm:text-[12.5px] lg:text-[13px] font-bold text-title group-hover:text-lnt-navy transition-colors whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            EXPLORE KEY CAPABILITIES: Khung tương tác 8 Capabilities (Bento Stage)
        ========================================================================= */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <ExploreKeyCapabilities />
        </div>

      </div>

      {/* =========================================================================
          APPLICATION MODULES STAGE: DẢI NỀN XANH CÔNG NGHỆ CAO
          Chứa sơ đồ 3D Oval 22 Modules + 5 Điểm chạm phẳng + Nút CTA
      ========================================================================= */}
      <div className="w-full bg-[#259fd2] pt-10 pb-12 shadow-inner overflow-hidden relative">
        
        {/* Header Application Modules trên nền xanh */}
        <div className="text-center max-w-3xl mx-auto px-4 mb-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            Application Modules
          </h3>
          <p className="text-white/90 text-sm sm:text-base font-medium mt-1.5 font-sans">
            Interactive multi-tier architecture spanning 22 specialized apparel manufacturing modules.
          </p>
        </div>

        {/* Sơ đồ 3D Oval 22 Modules */}
        <ApparelArchitectureSuite />

        {/* 5 Floating Tech Nodes + CTA (Phong cách phẳng không viền hộp) */}
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

          {/* Dải CTA chân nền xanh: Nút Dark Pill Aptean tương phản sang trọng */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/95">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399] shrink-0" />
              <span>Ready to transform your garment manufacturing operations with FXPRO?</span>
            </div>

            <a
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-title hover:bg-black text-white text-xs sm:text-sm font-semibold shadow-xl hover:shadow-2xl transition-all shrink-0 cursor-pointer border border-white/20"
            >
              <span>Request Apparel Case Study</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
