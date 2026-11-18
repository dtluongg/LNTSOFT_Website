import React from 'react'
import {
  CalendarRange,
  Clock,
  Sliders,
  Activity,
  Layers,
  Sparkles,
  Building2,
  Boxes,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export interface SmartPlannerCapabilitiesProps {
  capacityImage?: string
  schedulingImage?: string
}

export default function SmartPlannerCapabilities({
  capacityImage = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=85',
  schedulingImage = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85',
}: SmartPlannerCapabilitiesProps) {
  // 4 Trụ cột giải pháp cho Part 1: Production Capacity Planning
  const capacityHighlights = [
    {
      title: 'Group-Level Demand Planning',
      desc: 'Centralized allocation across multiple manufacturing locations and plants.',
    },
    {
      title: 'Real-Time Capacity Monitoring',
      desc: 'Live operational data feeds and customized executive dashboards.',
    },
    {
      title: 'Demand & Inquiries Forecasting',
      desc: 'Forecast capacity needs based on customer inquiries and historical performance.',
    },
    {
      title: 'Flexible Capacity Allocation',
      desc: 'Partner capacity, inter-company transfers, and customer demand-based flow planning.',
    },
  ]

  // 4 Key Functions chính xác theo 100% nội dung gốc cho Part 2: Production Scheduling
  const schedulingFunctions = [
    {
      title: 'Production Schedule Management',
      desc: 'Create and manage production schedules.',
      icon: CalendarRange,
    },
    {
      title: 'Timeline Coordination',
      desc: 'Coordinate planned production activities and timelines.',
      icon: Clock,
    },
    {
      title: 'Schedule Adjustment',
      desc: 'Adjust schedules in response to changing production requirements.',
      icon: Sliders,
    },
    {
      title: 'Schedule Monitoring',
      desc: 'Review production schedules and planning status.',
      icon: Activity,
    },
  ]

  return (
    <div id="capabilities" className="w-full bg-white">
      {/* =======================================================================
          HEADER CHUNG CHO PHÂN HỆ: FXPRO OPEZE PLANNER CAPABILITIES
          - Phong cách tối giản, thoáng đãng, sang trọng
      ======================================================================= */}
      <section className="pt-20 sm:pt-24 pb-14 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50 relative overflow-hidden">
        {/* Quầng sáng dịu nhẹ tối giản ở nền */}
        <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-gradient-to-b from-sky-100/50 via-blue-50/20 to-transparent blur-[110px] -z-10" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lnt-blue shadow-xs mb-4">
            <Sparkles size={13} className="text-lnt-blue" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-title font-heading tracking-tight">
            FXPRO OPEZE <span className="text-lnt-blue">Planner Capabilities</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Centralized multi-plant capacity optimization and structured shop-floor production scheduling designed specifically for modern apparel manufacturing.
          </p>
        </div>
      </section>

      {/* =======================================================================
          PHẦN 1: PRODUCTION CAPACITY PLANNING
          - Thiết kế: Sang trọng, thoáng đãng, ảnh sạch 100% không đè chữ hay HUD rối rắm
      ======================================================================= */}
      <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* CỘT TRÁI (6 CỘT): NỘI DUNG CHỮ THOÁNG ĐÃNG, DỄ ĐỌC */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Badge định danh */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lnt-blue">
                <span className="w-2 h-2 rounded-full bg-lnt-blue shadow-[0_0_6px_rgba(8,123,193,0.6)]" />
                <span>01 • Production Capacity Planning</span>
              </div>

              {/* Tiêu đề & Tagline gốc */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight leading-snug">
                  Manage Capacity.{' '}
                  <span className="text-lnt-blue">Balance Workloads.</span>{' '}
                  <span className="block text-slate-800">Improve Resource Utilization</span>
                </h3>
              </div>

              {/* 2 Đoạn văn nội dung 100% nguyên bản */}
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  The Solution provides centralized, group-level demand planning across multiple manufacturing locations, enabling businesses to allocate and split orders according to business requirements, manage and monitor production capacity through real-time data feeds and customized dashboards, and forecast capacity needs based on customer inquiries and historical performance.
                </p>
                <p>
                  It supports data-driven business decisions by evaluating multiple capacity allocation options, including partner capacity, inter-company transfers, and customer demand-based production flow planning, while applying flexible planning parameters aligned with business requirements and available manufacturing capacity.
                </p>
              </div>

              {/* 4 Trụ cột tính năng: Thiết kế tối giản, sạch sẽ, không đóng khung nặng nề */}
              <div className="pt-2 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capacityHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-lnt-blue mt-2 shrink-0 shadow-[0_0_5px_rgba(8,123,193,0.5)]" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-title leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* CỘT PHẢI (6 CỘT): KHUNG ẢNH NGHỆ THUẬT SANG TRỌNG, SẠCH 100% */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4">
              
              {/* Quầng sáng quang học mềm phía sau */}
              <div className="pointer-events-none absolute -top-8 -right-8 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-100/60 via-blue-50/40 to-transparent blur-[90px] -z-10" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-72 w-72 rounded-full bg-cyan-100/50 blur-[80px] -z-10" />

              {/* Vòng nét mảnh tinh tế bao ngoài */}
              <div className="relative w-full max-w-[540px]">
                
                {/* Khung ảnh chính: Viền trắng tinh khôi, bóng đổ mềm mại cao cấp, ảnh nguyên bản không đè chữ */}
                <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200/80 bg-slate-900 group">
                  <img
                    src={capacityImage}
                    alt="FXPRO OPEZE Production Capacity Planning"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hiệu ứng bóng mờ nhẹ tự nhiên ở đáy ảnh */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          PHẦN 2: PRODUCTION SCHEDULING (Bố cục đảo chiều so le)
          - Thiết kế: Nền nhẹ bg-slate-50/50 tạo nhịp điệu tương phản, ảnh sạch 100%
      ======================================================================= */}
      <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-slate-50/50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* CỘT TRÁI (6 CỘT - ĐẢO CHIỀU): KHUNG ẢNH SANG TRỌNG, SẠCH 100% */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4 order-2 lg:order-1">
              
              {/* Quầng sáng quang học mềm phía sau */}
              <div className="pointer-events-none absolute -top-8 -left-8 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-100/60 via-sky-50/40 to-transparent blur-[90px] -z-10" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-72 w-72 rounded-full bg-sky-100/50 blur-[80px] -z-10" />

              <div className="relative w-full max-w-[540px]">
                {/* Khung ảnh chính */}
                <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200/80 bg-slate-900 group">
                  <img
                    src={schedulingImage}
                    alt="FXPRO OPEZE Production Scheduling"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hiệu ứng bóng mờ nhẹ tự nhiên ở đáy ảnh */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>

            {/* CỘT PHẢI (6 CỘT - ĐẢO CHIỀU): NỘI DUNG & 4 KEY FUNCTIONS TINH GỌN */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              
              {/* Badge định danh */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lnt-blue">
                <span className="w-2 h-2 rounded-full bg-lnt-blue shadow-[0_0_6px_rgba(8,123,193,0.6)]" />
                <span>02 • Production Scheduling</span>
              </div>

              {/* Tiêu đề & Tagline gốc */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight leading-snug">
                  Smarter Scheduling for{' '}
                  <span className="text-lnt-blue">Efficient Production Management</span>
                </h3>
              </div>

              {/* Đoạn văn giới thiệu 100% nguyên bản */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Coordinate production activities through structured scheduling capabilities. FXPRO Apparel Smart Planner helps manufacturers organize production timelines, manage scheduling priorities, and maintain better control over planned manufacturing activities.
              </p>

              {/* 4 KEY FUNCTIONS: Thiết kế thanh lịch, gọn gàng, có chiều sâu sang trọng */}
              <div className="pt-2 border-t border-slate-200/70">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 font-heading mb-4">
                  Key Functions:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {schedulingFunctions.map((item, idx) => {
                    const IconComp = item.icon
                    return (
                      <div
                        key={idx}
                        className="group flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-lnt-blue/50 hover:shadow-sm transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-xl bg-sky-50 text-lnt-blue flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-lnt-blue group-hover:text-white transition-all duration-300">
                          <IconComp size={15} />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-xs sm:text-[13px] font-bold text-title group-hover:text-lnt-blue transition-colors leading-snug">
                            {item.title}
                          </h5>
                          <p className="text-[11.5px] text-slate-500 leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
