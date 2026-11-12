import React from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Shirt,
} from 'lucide-react'
import ApparelArchitectureSuite from '../viewHomePage/Industry/ApparelArchitectureSuite'
import ExploreKeyCapabilities from './ExploreKeyCapabilities'

export default function ApparelSection() {
  // 5 Điểm chạm công nghệ cốt lõi - Giữ nguyên 100% tên ban đầu, sẵn sàng liên kết mở trang chi tiết
  const highlights = [
    { name: 'AI SUITE', slug: '#industry/ai-suite' },
    { name: 'SMART PLANNER', slug: '#industry/smart-planner' },
    { name: 'SMART FACTORY', slug: '#industry/smart-factory' },
    { name: 'AI INSIGHT', slug: '#industry/ai-insight' },
    { name: 'WORKNOTE', slug: '#industry/worknote' },
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
            TẦNG 1: BỐ CỤC MỞ RỘNG TRÀN 2 BÊN (CÂN BẰNG THOÁNG ĐÃNG, KHÔNG BỊ TRỐNG)
            - Cột trái: Header + Subtitle + Badge Overview + Quote + Đoạn giải thích
            - Cột phải: Ý TƯỞNG 4 (Arch Horizon) - Vòm cong kiến trúc thời trang,
              kèm họa tiết khung đệm và quầng sáng hào quang, ảnh sạch 100% không đè chữ
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* CỘT TRÁI (7 CỘT): NỘI DUNG MẠCH LẠC, TRẢI DÀI VỪA VẶN KHÔNG GIAN */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header & Subtitle */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-lnt-blue shadow-2xs mb-3">
                <Shirt size={13} className="text-lnt-blue" />
                <span>FASHION & APPAREL ENTERPRISE SUITE</span>
              </div>

              {/* Tiêu đề H2: Đồng bộ chuẩn xác với Manufacturing ERP */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight leading-snug">
                Apparel ERP & MES Solution
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg font-medium text-lnt-blue mt-2 leading-snug">
                Modern, Customizable ERP Software for Your Entire Apparel Business Ecosystem
              </p>
            </div>

            {/* Khối OVERVIEW: Giữ nguyên vẹn 100% nội dung gốc */}
            <div className="space-y-4 pt-1">
              
              {/* OVERVIEW Badge (Capsule Pill đỏ Ruby tinh tế) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <Sparkles size={13} className="text-rose-500" />
                <span>OVERVIEW</span>
              </div>

              {/* Đoạn 1: Lead Quote */}
              <div className="relative border-l-3 border-lnt-blue pl-4 sm:pl-5 py-1">
                <p className="text-base sm:text-[17px] font-bold italic text-slate-800 leading-relaxed font-sans">
                  "FXPRO Product Suite is an integrated, AI-powered, end-to-end Apparel ERP & MES solution designed to digitalize, streamline, and optimize the business operations, supply chain activities, and factory-floor execution within one unified platform."
                </p>
              </div>

              {/* Đoạn 2: Explanation */}
              <p className="text-sm sm:text-base font-normal not-italic text-slate-600 leading-relaxed pl-1 font-sans">
                Leveraging advanced technologies, intelligent automation, and real-time operational intelligence, FXPRO empowers apparel manufacturers to achieve greater operational efficiency, enhance production performance, improve end-to-end visibility, and accelerate data-driven decision-making.
              </p>
            </div>

          </div>

          {/* CỘT PHẢI (5 CỘT): TẠO HÌNH VIÊN THUỐC ĐỨNG PHÁ CÁCH (CAPSULE PORTAL)
              - Tạo hình tròn viên thuốc mềm mại (rounded-full), phá vỡ hoàn toàn góc vuông lặp lại
              - Bỏ sạch các chấm dot dot, chỉ giữ quầng sáng và vòng tròn đồng tâm tối giản
              - Ảnh sạch nguyên bản 100%, không viết bất kỳ chữ nào đè lên ảnh
          ========================================================================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-4 lg:py-6">
            
            {/* 1. Hào quang ánh sáng mềm mại phía sau (Brand Soft Glow) */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-200/45 via-blue-100/30 to-indigo-100/25 blur-[100px] -z-30" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-[90px] -z-30" />

            {/* 2. Cụm vòng tròn quỹ đạo đồng tâm tối giản (Không chấm dot dot) */}
            <div className="relative w-full flex items-center justify-center">
              
              {/* Vòng đệm ngoài cùng: Bo tròn viên thuốc lớn, nền kính mờ nhẹ */}
              <div className="absolute -inset-6 sm:-inset-7 rounded-full border border-sky-100 bg-gradient-to-b from-sky-50/50 via-slate-50/30 to-transparent -z-20 pointer-events-none" />

              {/* Vòng nét chỉ mạ kim thứ hai: Nét mảnh màu xanh thương hiệu LNT */}
              <div className="absolute -inset-3 sm:-inset-3.5 rounded-full border border-lnt-blue/25 -z-10 pointer-events-none" />

              {/* Khung ảnh chính: Dáng Viên thuốc đứng cao cấp (Capsule Portal), bo tròn hoàn toàn rounded-full */}
              <div className="relative w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[430px] h-[460px] sm:h-[500px] lg:h-[520px] rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200/90 group bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                  alt="FXPRO Apparel ERP & MES Smart Factory Operation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Lớp bóng kính mờ nhẹ ở đáy để tạo chiều sâu quang học tự nhiên, không che khuất ảnh */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            TẦNG 2: 4 THẺ DATA TRẢI DÀI FULL-WIDTH (Chân khối, bệ đỡ ngang vững chãi)
            Thiết kế tối giản đỡ viền, cả 4 thẻ nằm trên 1 dòng đồng đều tăm tắp
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

        {/* 5 Điểm chạm công nghệ - Dáng Pill tối giản chuẩn Aptean, không viền nặng, giữ nguyên 100% chữ ban đầu */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-5 relative z-0">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-4">
            {highlights.map((item, idx) => (
              <a
                key={idx}
                href={item.slug}
                className="group flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-title transition-all duration-300 cursor-pointer border border-white/15 hover:border-white shadow-xs hover:shadow-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-lnt-blue shadow-[0_0_6px_rgba(255,255,255,0.8)] group-hover:scale-125 transition-all shrink-0" />
                <span className="font-bold text-xs sm:text-[13px] lg:text-[13.5px] font-heading tracking-wider leading-none uppercase group-hover:text-lnt-navy transition-colors whitespace-nowrap">
                  {item.name}
                </span>
                <ArrowUpRight
                  size={14}
                  className="opacity-70 group-hover:opacity-100 text-white/80 group-hover:text-lnt-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </a>
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
