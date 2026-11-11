import React from 'react'
import {
  ArrowRight,
  BarChart3,
  TrendingDown,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Factory,
  CheckCircle2,
} from 'lucide-react'
import industry1 from '../../assets/components/productPage/industry1.png'

export default function ManufacturingSection() {
  // Chu trình 4 trụ cột vận hành sản xuất khép kín
  const productionPillars = [
    {
      step: '01',
      title: 'Material & MRP Planning',
      desc: 'Multi-level BOM explosions, dynamic inventory reorder thresholds, and automated purchase requisition workflows.',
      icon: Layers,
      tag: 'Pre-Production',
      color: 'text-lnt-blue',
      bgColor: 'bg-sky-50',
    },
    {
      step: '02',
      title: 'Shop-Floor Scheduling & MES',
      desc: 'Shift and machine capacity planning, work order routing, job dispatching, and live workstation throughput.',
      icon: Cpu,
      tag: 'Execution',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      step: '03',
      title: 'Inline Quality Control (QC/QA)',
      desc: 'Incoming raw material inspection (IQC), in-process checkpoint audits (PQC), and instant scrap alerts.',
      icon: ShieldCheck,
      tag: 'Inspection',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      step: '04',
      title: 'Costing & Scrap Variance',
      desc: 'Standard vs. actual product costing, direct labor allocation, overhead absorption, and yield optimization.',
      icon: TrendingDown,
      tag: 'Financial BI',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ]

  // Danh mục báo cáo điều hành thực tế
  const biReports = [
    'Production performance & machine yield logs',
    'Raw material inventory turnover analytics',
    'Standard vs. actual manufacturing cost reports',
    'Operational KPI & machine load dashboards',
    'Executive decision-support intelligence',
    'Automated scrap & rework variance logs',
  ]

  return (
    <section id="manufacturing-erp" className="py-16 lg:py-24 border-b border-slate-200/80 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =========================================================================
            1. SECTION HEADER (Đồng bộ kích thước H2 với ApparelSection)
        ========================================================================= */}
        <div className="pb-8 border-b border-slate-200/80">
          
          {/* Section Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-lnt-blue shadow-2xs mb-3">
            <Factory size={13} className="text-lnt-blue" />
            <span>INDUSTRIAL MANUFACTURING SUITE</span>
          </div>

          {/* Section Title H2 */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight leading-snug">
            Manufacturing ERP Solution
          </h2>

          {/* Section Lead Description */}
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed font-normal">
            A unified digital operating system engineered for high-mix industrial manufacturing — synchronizing planning, shop-floor execution, inventory, and cost control into one real-time source of truth.
          </p>
        </div>

        {/* =========================================================================
            2. KHỐI 1: CHU TRÌNH 4 TRỤ CỘT SẢN XUẤT (Thiết kế tối giản, loại bỏ viền thô)
        ========================================================================= */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-heading">
              Closed-Loop Production Lifecycle
            </span>
            <span className="text-xs sm:text-sm text-lnt-blue font-semibold hidden sm:inline">
              4 Integrated Operational Stages
            </span>
          </div>

          {/* 4 Trụ cột: Bỏ viền dày, dùng nền soft tint nhẹ và số thứ tự chìm tinh tế */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productionPillars.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.step}
                  className="group relative rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-100/90 hover:border-slate-200/90 p-5 sm:p-6 hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Hàng icon + Số thứ tự công nghệ chìm */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${p.bgColor} ${p.color} group-hover:scale-105 transition-transform`}>
                        <Icon size={19} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-slate-400 transition-colors">
                        STAGE {p.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-[16.5px] font-bold text-lnt-navy group-hover:text-lnt-blue transition-colors leading-snug">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>

                  {/* Nhãn tag chân thẻ - Tối giản không gạch vạch kẻ */}
                  <div className="mt-4 pt-2 flex items-center justify-between text-xs font-semibold text-lnt-blue">
                    <span>{p.tag}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* =========================================================================
            3. KHỐI 2: KHUNG ĐIỀU HÀNH TRUNG TÂM (Factory Control Center)
            Xóa bỏ chiếc hộp viền khổng lồ bọc ngoài, chuyển thành bố cục mở thoáng đãng
        ========================================================================= */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          
          {/* HÀNG TRÊN: CỘT TRÁI VĂN BẢN (50%) + CỘT PHẢI HÌNH ẢNH (50%) - THOÁNG ĐÃNG */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Cột trái: Diễn giải điều hành súc tích */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-lnt-blue/20 text-lnt-blue text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} className="text-lnt-blue" />
                <span>Centralized Operations & Governance</span>
              </div>

              {/* Tiêu đề dùng biến text-title */}
              <h3 className="text-2xl sm:text-[28px] font-bold text-title tracking-tight leading-snug">
                Connecting Shop-Floor Operations Directly with Executive Finance
              </h3>

              <p className="text-base sm:text-[16.5px] leading-relaxed text-slate-600 font-normal">
                By replacing disjointed spreadsheets and isolated legacy tools with LNT Manufacturing ERP, industrial leaders gain continuous operational transparency across material procurement, warehouse stocks, machine schedules, and real-time cost variances.
              </p>

              {/* 3 Chỉ số cam kết nhanh: Pill nhẹ nhàng, không đóng khung hộp dày */}
              <div className="pt-1 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-xs font-semibold text-lnt-blue">
                  <span className="w-1.5 h-1.5 rounded-full bg-lnt-blue" />
                  Real-Time Costing
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live Machine OEE
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Closed-Loop MRP
                </span>
              </div>
            </div>

            {/* Cột phải: Mockup Màn hình LNT Insight Smart Factory bo góc lớn 32px */}
            <div className="lg:col-span-6 relative rounded-[28px] overflow-hidden shadow-2xl group bg-slate-900 border border-slate-200/80">
              <img
                src={industry1}
                alt="LNT Manufacturing ERP Dashboard Showcase"
                className="w-full h-[260px] sm:h-[300px] object-cover mx-auto transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lnt-navy/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-lnt-navy/90 backdrop-blur-md px-3.5 py-1.5 font-semibold shadow">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LNT Insight • Smart Factory Telemetry</span>
                </div>
                <span className="text-[11px] text-slate-300 font-mono hidden sm:inline">Real-Time Sync</span>
              </div>
            </div>

          </div>

          {/* HÀNG DƯỚI: 6 BÁO CÁO BI (Danh sách tối giản thanh nhã, KHÔNG đóng 6 cái hộp viền) + THANH CTA */}
          <div className="mt-12 pt-8 border-t border-slate-200/80">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-50 text-lnt-blue">
                <BarChart3 size={15} />
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-title">
                Management Reporting & Business Intelligence
              </span>
            </div>

            {/* 6 Báo cáo: Bỏ hoàn toàn 6 chiếc hộp viền! Dùng danh sách phẳng tinh tế */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {biReports.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 py-1.5 text-xs sm:text-sm text-slate-700 font-medium group hover:text-lnt-navy transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-lnt-blue shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Dải CTA chân hàng dưới - Nút Dark Pill Aptean */}
            <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Ready to modernize your manufacturing execution and cost control?</span>
              </div>

              <a
                href="#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-title hover:bg-black text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
              >
                <span>Request Manufacturing ERP Consultation</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
