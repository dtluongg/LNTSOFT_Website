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
  ShieldCheck,
  Check,
} from 'lucide-react'
import hinh2 from '../../../assets/components/industryPage/Smart_Planner/hinh2.png'
import hinh3 from '../../../assets/components/industryPage/Smart_Planner/hinh3.png'

export default function SmartPlannerCapabilities() {
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
          - Thiết kế: Khung Máy Tính Chuyên Nghiệp (Laptop Mockup) hiển thị giao diện hinh2.png
      ======================================================================= */}
      <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* CỘT TRÁI (6 CỘT): NỘI DUNG CHỮ THOÁNG ĐÃNG */}
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

              {/* 4 Trụ cột tính năng */}
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

            {/* CỘT PHẢI (6 CỘT): MÁY TÍNH XÁCH TAY HIỂN THỊ HÌNH 2 (CAPACITY ALLOCATION) */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4">
              
              {/* Quầng sáng quang học mềm phía sau */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-100/70 via-blue-50/40 to-transparent blur-[90px] -z-10" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-cyan-100/50 blur-[80px] -z-10" />

              {/* KHUNG LAPTOP WORKSTATION CHÂN THỰC CHỨA HÌNH 2 */}
              <div className="relative w-full max-w-[620px] mx-auto group">
                
                {/* 1. NẮP MÀN HÌNH MÁY TÍNH (SCREEN LID) */}
                <div className="relative rounded-t-[18px] rounded-b-sm bg-[#161a23] p-2 sm:p-2.5 shadow-2xl border border-slate-700/80 ring-1 ring-slate-900/60">
                  
                  {/* Camera Web ở đỉnh máy tính */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700" />
                    <span className="w-1 h-1 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* KHUNG HIỂN THỊ MÀN HÌNH CHỨA ẢNH HÌNH 2 */}
                  <div className="relative rounded-lg overflow-hidden bg-slate-950 border border-slate-800/90 shadow-inner">
                    
                    {/* Header Bar trình duyệt máy tính */}
                    <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/95 border-b border-slate-800 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      
                      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10.5px] font-mono text-slate-300">
                        <span className="text-emerald-400 text-[10px]">🔒</span>
                        <span>FXPRO Planning Board — [Capacity Allocation]</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="hidden sm:inline">LIVE SYNC</span>
                      </div>
                    </div>

                    {/* HÌNH NỀN GIAO DIỆN PHẦN MỀM HÌNH 2 NGUYÊN BẢN */}
                    <div className="relative w-full overflow-hidden bg-slate-900">
                      <img
                        src={hinh2}
                        alt="FXPRO Planning Board - Capacity Allocation"
                        className="w-full h-auto object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                  </div>
                </div>

                {/* 2. THÂN MÁY TÍNH DƯỚI (LAPTOP CHASSIS & BASE) */}
                <div className="relative -mt-0.5 w-[104%] -left-[2%] h-3.5 sm:h-4 rounded-b-xl bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border-t border-slate-300 shadow-xl flex items-center justify-center">
                  {/* Rãnh mở máy tính */}
                  <div className="w-16 sm:w-20 h-1.5 rounded-full bg-slate-500/40" />
                </div>

                {/* Bóng đổ gầm máy tính kim loại */}
                <div className="w-[90%] mx-auto h-2.5 bg-slate-900/20 blur-md rounded-full mt-1" />

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          PHẦN 2: PRODUCTION SCHEDULING (Bố cục đảo chiều so le)
          - Thiết kế: Khung Máy Tính Chuyên Nghiệp (Laptop Mockup) hiển thị giao diện hinh3.png
      ======================================================================= */}
      <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 bg-slate-50/50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* CỘT TRÁI (6 CỘT - ĐẢO CHIỀU): MÁY TÍNH HIỂN THỊ HÌNH 3 (SEWING LINE GANTT SCHEDULING) */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4 order-2 lg:order-1">
              
              {/* Quầng sáng quang học mềm phía sau */}
              <div className="pointer-events-none absolute -top-10 -left-10 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-100/70 via-sky-50/40 to-transparent blur-[90px] -z-10" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-sky-100/50 blur-[80px] -z-10" />

              {/* KHUNG LAPTOP WORKSTATION CHÂN THỰC CHỨA HÌNH 3 */}
              <div className="relative w-full max-w-[620px] mx-auto group">
                
                {/* 1. NẮP MÀN HÌNH MÁY TÍNH (SCREEN LID) */}
                <div className="relative rounded-t-[18px] rounded-b-sm bg-[#161a23] p-2 sm:p-2.5 shadow-2xl border border-slate-700/80 ring-1 ring-slate-900/60">
                  
                  {/* Camera Web ở đỉnh máy tính */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700" />
                    <span className="w-1 h-1 rounded-full bg-sky-400/80" />
                  </div>

                  {/* KHUNG HIỂN THỊ MÀN HÌNH CHỨA ẢNH HÌNH 3 */}
                  <div className="relative rounded-lg overflow-hidden bg-slate-950 border border-slate-800/90 shadow-inner">
                    
                    {/* Header Bar trình duyệt máy tính */}
                    <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/95 border-b border-slate-800 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      
                      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10.5px] font-mono text-slate-300">
                        <span className="text-sky-400 text-[10px]">🔒</span>
                        <span>FXPRO Planning Board — [Sewing Line Scheduling]</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-sky-400">
                        <Clock size={11} />
                        <span className="hidden sm:inline">GANTT</span>
                      </div>
                    </div>

                    {/* HÌNH NỀN GIAO DIỆN PHẦN MỀM HÌNH 3 NGUYÊN BẢN */}
                    <div className="relative w-full overflow-hidden bg-slate-900">
                      <img
                        src={hinh3}
                        alt="FXPRO Planning Board - Sewing Line Scheduling"
                        className="w-full h-auto object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                  </div>
                </div>

                {/* 2. THÂN MÁY TÍNH DƯỚI (LAPTOP CHASSIS & BASE) */}
                <div className="relative -mt-0.5 w-[104%] -left-[2%] h-3.5 sm:h-4 rounded-b-xl bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border-t border-slate-300 shadow-xl flex items-center justify-center">
                  {/* Rãnh mở máy tính */}
                  <div className="w-16 sm:w-20 h-1.5 rounded-full bg-slate-500/40" />
                </div>

                {/* Bóng đổ gầm máy tính kim loại */}
                <div className="w-[90%] mx-auto h-2.5 bg-slate-900/20 blur-md rounded-full mt-1" />

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

              {/* 4 KEY FUNCTIONS */}
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
