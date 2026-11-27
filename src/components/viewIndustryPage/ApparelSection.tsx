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
import ApparelIndustryImage from '../../assets/components/industryPage/Apparel_ERP_Industries.png'
import fxproAiBanner from '../../assets/components/industryPage/AI_SUITE/banner.jpg'
import smartPlannerBanner from '../../assets/components/industryPage/Smart_Planner/banner.png'
import smartFactoryBanner from '../../assets/components/industryPage/Smart_Factory/banner.png'

export default function ApparelSection() {
  // 5 Điểm chạm công nghệ cốt lõi - Tối giản chữ, tôn vinh hình ảnh banner thực tế của từng trang con
  const highlights = [
    {
      id: 'ai-suite',
      name: 'AI SUITE',
      subtitle: 'Intelligent Order Automation',
      slug: '#industry/ai-suite',
      image: fxproAiBanner,
      available: true,
    },
    {
      id: 'smart-planner',
      name: 'SMART PLANNER',
      subtitle: 'Production Scheduling & Capacity',
      slug: '#industry/smart-planner',
      image: smartPlannerBanner,
      available: true,
    },
    {
      id: 'smart-factory',
      name: 'SMART FACTORY',
      subtitle: 'Sewing Workstations & Live MES',
      slug: '#industry/smart-factory',
      // image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
      image: smartFactoryBanner,
      available: true,
    },
    {
      id: 'ai-insight',
      name: 'AI INSIGHT',
      subtitle: 'Executive Analytics & Intelligence',
      slug: '#industry/ai-insight',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      available: true,
    },
    {
      id: 'worknote',
      name: 'WORKNOTE',
      subtitle: 'Digital Floor Collaboration & Task Tracking',
      slug: '#industry/worknote',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      available: true,
    },
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
            TIÊU ĐỀ KHỐI: TRẢI DÀI TOÀN CHIỀU NGANG MÀN HÌNH (FULL-WIDTH HEADLINE)
            Tuân thủ nghiêm ngặt chuẩn DESIGN_SYSTEM.md:
            - Pill Badge: text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue
            - H2: text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight leading-snug
            - Subtitle: text-base sm:text-lg font-medium text-lnt-blue mt-2 leading-snug
        ========================================================================= */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-2xs mb-3">
            <Shirt size={13} className="text-lnt-blue" />
            <span>FASHION & APPAREL ENTERPRISE SUITE</span>
          </div>

          {/* Tiêu đề H2 chuẩn mực */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight leading-snug">
            Apparel ERP & MES Solution
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-medium text-lnt-blue mt-2 leading-snug">
            Modern, Customizable ERP Software for Your Entire Apparel Business Ecosystem
          </p>
        </div>

        {/* =========================================================================
            PHONG CÁCH 2: THE OVERLAPPING GLASS STAGE
            - Khung ảnh toàn cảnh nằm ngang rộng mở (Wide Horizon Canvas)
            - Thẻ kính mờ nổi (Floating Frosted Glass Card) gối lên phía trái của ảnh
            - Phong cách thời trang cao cấp & nghệ thuật kiến trúc (Editorial Layering)
        ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 group">
          
          {/* Quầng sáng quang học mềm mại phía sau khung */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-400/20 via-blue-200/10 to-transparent blur-3xl z-10" />

          {/* 1. KHUNG ẢNH TOÀN CẢNH NỀN RỘNG (WIDE HORIZON IMAGE) */}
          <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] overflow-hidden">
            <img
              src={ApparelIndustryImage}
              alt="FXPRO Apparel ERP & MES Smart Factory Operation"
              className="w-full h-full object-cover object-center lg:object-right transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Gradient phủ nhẹ để hòa sắc tự nhiên và tạo độ tương phản */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-slate-950/50 lg:via-slate-950/10 lg:to-transparent pointer-events-none" />
          </div>

          {/* 2. THẺ KÍNH MỜ NỔI (FLOATING FROSTED GLASS OVERLAY CARD) */}
          <div className="relative p-6 sm:p-8 lg:p-0 lg:absolute lg:inset-y-8 lg:left-8 lg:max-w-[560px] xl:max-w-[620px] z-20 flex items-center">
            <div className="w-full rounded-2xl sm:rounded-3xl bg-white/95 lg:bg-white/90 backdrop-blur-xl border border-white/95 shadow-2xl p-6 sm:p-8 lg:p-9 space-y-4 ring-1 ring-slate-900/5">
              
              {/* OVERVIEW Badge (Capsule Pill đỏ Ruby tinh tế) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <Sparkles size={13} className="text-rose-500" />
                <span>OVERVIEW</span>
              </div>

              {/* Lead Quote */}
              <div className="relative border-l-3 border-lnt-blue pl-4 sm:pl-5 py-1">
                <p className="text-base sm:text-[17px] font-bold italic text-slate-800 leading-relaxed font-sans">
                  "FXPRO Product Suite is an integrated, AI-powered, end-to-end Apparel ERP & MES solution designed to digitalize, streamline, and optimize the business operations, supply chain activities, and factory-floor execution within one unified platform."
                </p>
              </div>

              {/* Explanation Paragraph */}
              <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed pl-1 font-sans">
                Leveraging advanced technologies, intelligent automation, and real-time operational intelligence, FXPRO empowers apparel manufacturers to achieve greater operational efficiency, enhance production performance, improve end-to-end visibility, and accelerate data-driven decision-making.
              </p>

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
          Chứa sơ đồ 3D Oval 22 Modules + 5 Cổng Solution Portals với Banner Hero thực tế
      ========================================================================= */}
      <div className="w-full bg-[#259fd2] pt-12 pb-16 shadow-inner overflow-hidden relative">
        
        {/* Header Application Modules trên nền xanh */}
        <div className="text-center max-w-3xl mx-auto px-4 mb-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            Application Modules
          </h3>
          <p className="text-white/90 text-sm sm:text-base font-medium mt-1.5 font-sans">
            Interactive multi-tier architecture spanning 22 specialized apparel manufacturing modules.
          </p>
        </div>

        {/* Sơ đồ 3D Oval 22 Modules */}
        <ApparelArchitectureSuite />

        {/* =========================================================================
            5 CỔNG GIẢI PHÁP ĐỒNG BỘ HERO (MINI-HERO SOLUTION PORTALS):
            - Thiết kế tinh gọn: Bớt chữ, không thanh trạng thái rườm rà, tập trung vào hình ảnh đẹp
            - Click vào thẻ sẽ chuyển trang và mở ra phần Hero toàn cảnh tương ứng
        ========================================================================= */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
          
          {/* Header cụm 5 Solution Portals - Tối giản, gọn gàng */}
          <div className="flex items-center justify-between gap-3 mb-5 px-1">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading">
              Explore Dedicated Solution Suites
            </h4>
            <span className="text-xs text-white/80 hidden sm:inline font-medium">
              Click to view full suite hero
            </span>
          </div>

          {/* Grid 5 Thẻ Mini-Hero Banner (Chữ gọn gàng, hình ảnh nổi bật) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {highlights.map((item, idx) => (
              <a
                key={idx}
                href={item.slug}
                onClick={(e) => {
                  e.preventDefault()
                  if (item.available) {
                    window.location.hash = item.slug.replace(/^#/, '')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    window.dispatchEvent(new Event('hashchange'))
                  }
                }}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 border transition-all duration-500 flex flex-col justify-between p-4 sm:p-5 select-none h-[280px] sm:h-[300px] lg:h-[320px] group ${
                  item.available
                    ? 'border-white/20 hover:border-white shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer'
                    : 'border-white/10 opacity-75 cursor-default'
                }`}
              >
                {/* 1. Hình ảnh banner thực tế của Hero, sáng rõ và sắc nét */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Lớp gradient tối nhẹ chỉ phủ ở chân thẻ để chữ nổi bật, giữ trọn vẹn hình ảnh phía trên */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                </div>

                {/* 2. GÓC TRÊN: Nút tròn mở nhanh tối giản */}
                <div className="relative z-10 flex justify-end">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    item.available
                      ? 'bg-black/30 backdrop-blur-md border-white/30 text-white group-hover:bg-white group-hover:text-lnt-blue group-hover:scale-110 shadow-sm'
                      : 'bg-black/40 border-white/15 text-white/40'
                  }`}>
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* 3. GÓC DƯỚI: Tên phân hệ chuẩn + 1 dòng tóm tắt cực ngắn */}
                <div className="relative z-10">
                  <h4 className="text-base sm:text-lg font-bold font-heading text-white tracking-wide uppercase group-hover:text-sky-200 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-white/80 font-normal mt-0.5 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Đường kẻ phát quang ngang siêu mảnh mờ ảo */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent my-8 sm:my-10" />

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
