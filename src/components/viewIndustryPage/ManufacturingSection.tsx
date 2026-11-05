import React from 'react'
import {
  CheckCircle2,
  ArrowUpRight,
  BarChart3,
  TrendingDown,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
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
    },
    {
      step: '02',
      title: 'Shop-Floor Scheduling & MES',
      desc: 'Shift and machine capacity planning, work order routing, job dispatching, and live workstation throughput.',
      icon: Cpu,
      tag: 'Execution',
    },
    {
      step: '03',
      title: 'Inline Quality Control (QC/QA)',
      desc: 'Incoming raw material inspection (IQC), in-process checkpoint audits (PQC), and instant scrap alerts.',
      icon: ShieldCheck,
      tag: 'Inspection',
    },
    {
      step: '04',
      title: 'Costing & Scrap Variance',
      desc: 'Standard vs. actual product costing, direct labor allocation, overhead absorption, and yield optimization.',
      icon: TrendingDown,
      tag: 'Financial BI',
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
    <section id="manufacturing-erp" className="py-16 lg:py-24 border-b border-slate-100 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =========================================================================
            1. SECTION HEADER (Thoáng đãng, trang nhã, không còn 3 hộp chỉ số lặp lại)
        ========================================================================= */}
        <div className="pb-8 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15194f] tracking-tight">
            Manufacturing ERP Solution
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-3xl leading-relaxed font-sans">
            A unified digital operating system engineered for high-mix industrial manufacturing — synchronizing planning, shop-floor execution, inventory, and cost control into one real-time source of truth.
          </p>
        </div>

        {/* =========================================================================
            2. KHỐI 1: CHU TRÌNH 4 TRỤ CỘT SẢN XUẤT (4 Production Pillars Flow)
        ========================================================================= */}
        <div className="mt-8 pt-2">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
              Closed-Loop Production Lifecycle
            </span>
            <span className="text-xs sm:text-sm text-[#087bc1] font-semibold hidden sm:inline">
              4 Integrated Operational Stages
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productionPillars.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.step}
                  className="group relative rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6 hover:bg-white hover:border-[#087bc1]/60 hover:shadow-lg hover:shadow-sky-950/5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#087bc1] border border-slate-200/80 shadow-xs group-hover:bg-[#087bc1] group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 text-[#15194f] font-mono shadow-2xs">
                        STAGE {p.step}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-[17px] font-bold text-[#15194f] group-hover:text-[#087bc1] transition-colors leading-snug">
                      {p.title}
                    </h4>

                    <p className="mt-2.5 text-sm sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#087bc1] tracking-wide">
                      {p.tag}
                    </span>
                    <span className="text-sm font-bold text-[#087bc1] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* =========================================================================
            3. KHỐI 2: KHUNG ĐIỀU HÀNH TRUNG TÂM & BÁO CÁO (Factory Control Center)
        ========================================================================= */}
        <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Cột trái: Diễn giải điều hành + Bảng BI Báo cáo Quản trị */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-[#087bc1] text-xs font-semibold">
                <Sparkles size={13} />
                <span>Centralized Operations & Governance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#15194f] tracking-tight leading-snug">
                Connecting Shop-Floor Operations Directly with Executive Finance
              </h3>

              <p className="text-base sm:text-[16.5px] leading-relaxed text-slate-600 font-normal">
                By replacing disjointed spreadsheets and isolated legacy tools with LNT Manufacturing ERP, industrial leaders gain continuous operational transparency across material procurement, warehouse stocks, machine schedules, and real-time cost variances.
              </p>

              {/* Management Reporting & BI card */}
              <div className="rounded-2xl border border-[#087bc1]/20 bg-gradient-to-br from-sky-50/60 to-slate-50/40 p-5 sm:p-6 shadow-2xs">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#087bc1]/15 text-[#087bc1]">
                    <BarChart3 size={16} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15194f]">
                    Management Reporting & Business Intelligence
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {biReports.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[#087bc1] shrink-0" />
                      <span className="text-sm sm:text-[14.5px] text-slate-700 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#087bc1] hover:bg-[#076da9] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:gap-2.5 cursor-pointer"
                >
                  <span>Request Manufacturing ERP Consultation</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Cột phải: Mockup Màn hình LNT Insight Smart Factory */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900">
              <img
                src={industry1}
                alt="LNT Manufacturing ERP Dashboard Showcase"
                className="w-full h-auto max-h-[420px] object-contain mx-auto transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-2 rounded-full bg-[#15194f]/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>LNT Insight • Smart Factory Telemetry</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
