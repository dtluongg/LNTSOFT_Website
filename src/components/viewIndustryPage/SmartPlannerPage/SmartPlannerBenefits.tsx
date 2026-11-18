import React from 'react'
import {
  Sparkles,
  CalendarCheck,
  Cpu,
  Users,
  Activity,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Check,
  Shirt,
  ClipboardCheck,
  Tablet,
  Scissors,
  Layers,
} from 'lucide-react'

export default function SmartPlannerBenefits() {
  // 7 Trụ cột PPC Excellence nguyên văn 100% từ ảnh của người dùng
  const card1 = {
    num: 1,
    title: 'Production Planning',
    colorBadge: 'bg-orange-500 text-white shadow-sm',
    bgCard: 'bg-sky-50/70 border-sky-200/80 hover:border-sky-400 hover:shadow-md',
    bulletColor: 'bg-sky-500',
    bullets: [
      'Create and maintain production plans based on customer demand, forecasts and capacity.',
      'Plan product mix, quantities and timelines.',
      'Ensure material, manpower and machine availability.',
    ],
  }

  const card2 = {
    num: 2,
    title: 'FXPRO PP & System Management',
    colorBadge: 'bg-emerald-600 text-white shadow-sm',
    bgCard: 'bg-emerald-50/50 border-emerald-200/80 hover:border-emerald-400 hover:shadow-md',
    bulletColor: 'bg-emerald-500',
    bullets: [
      'Use FXPRO PP to release plans, create Manufacturing Orders (MO), track progress and handle exceptions.',
      'Maintain master data (BOM, routing, work center, etc.).',
      'Update and monitor in real time.',
    ],
  }

  const card3 = {
    num: 3,
    title: 'Coordination & Communication',
    colorBadge: 'bg-amber-500 text-white shadow-sm',
    bgCard: 'bg-amber-50/60 border-amber-200/80 hover:border-amber-400 hover:shadow-md',
    bulletColor: 'bg-amber-500',
    bullets: [
      'Work with multiple departments (Merchandising, Purchase, Stores, Production, Quality, Sales, etc.).',
      'Resolve issues and ensure smooth flow of materials and information.',
      'Align with daily/ weekly/ Monthly plans.',
    ],
  }

  const card4 = {
    num: 4,
    title: 'Monitoring & Problem Solving',
    colorBadge: 'bg-blue-600 text-white shadow-sm',
    bgCard: 'bg-indigo-50/60 border-indigo-200/80 hover:border-indigo-400 hover:shadow-md',
    bulletColor: 'bg-indigo-500',
    bullets: [
      'Track production progress and meet delivery targets.',
      'Identify and resolve delays, shortages, and capacity constraints.',
      'Take quick decisions to minimize downtime and losses.',
    ],
  }

  const card5 = {
    num: 5,
    title: 'Continuous Improvement',
    colorBadge: 'bg-emerald-600 text-white shadow-sm',
    bgCard: 'bg-teal-50/60 border-teal-200/80 hover:border-teal-400 hover:shadow-md',
    bulletColor: 'bg-teal-500',
    bullets: [
      'Analyze performance (plan vs actual).',
      'Find root causes of deviations.',
      'Suggest and implement improvement ideas (Kaizen).',
      'Work on cost, time and resource optimization.',
    ],
  }

  const card6 = {
    num: 6,
    title: 'Exception Handling',
    colorBadge: 'bg-rose-500 text-white shadow-sm',
    bgCard: 'bg-rose-50/60 border-rose-200/80 hover:border-rose-400 hover:shadow-md',
    bulletColor: 'bg-rose-500',
    bullets: [
      'Handle urgent changes, breakdowns and material shortages.',
      'Replan and reschedule as needed.',
      'Communicate risks and mitigation plans.',
    ],
  }

  const card7 = {
    num: 7,
    title: 'Data & Reporting',
    colorBadge: 'bg-sky-700 text-white shadow-sm',
    bgCard: 'bg-blue-50/60 border-blue-200/80 hover:border-blue-400 hover:shadow-md',
    bulletColor: 'bg-blue-600',
    bullets: [
      'Prepare daily/weekly/monthly production reports.',
      'Analyze data (utilization, adherence, output, bottlenecks).',
      'Support management with MIS and dashboards.',
    ],
  }

  // Component render từng thẻ chuẩn mực
  const renderCard = (card: typeof card1) => (
    <div
      key={card.num}
      className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${card.bgCard}`}
    >
      <div>
        {/* Header thẻ: Số thứ tự tròn và Tiêu đề */}
        <div className="flex items-center gap-3 mb-3.5">
          <span
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 ${card.colorBadge}`}
          >
            {card.num}
          </span>
          <h3 className="text-base sm:text-[17px] font-bold text-title tracking-tight leading-snug">
            {card.title}
          </h3>
        </div>

        {/* Danh sách các gạch đầu dòng */}
        <ul className="space-y-2.5">
          {card.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${card.bulletColor}`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <section id="business-benefits" className="relative w-full bg-slate-50/40 py-20 sm:py-24 lg:py-28 border-b border-slate-200/80 overflow-hidden">
      
      {/* Quầng sáng quang học mềm mại tạo chiều sâu không gian */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[520px] bg-gradient-to-r from-sky-100/50 via-blue-50/50 to-emerald-50/40 blur-[130px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =======================================================================
            HEADER KHỐI: KEY BUSINESS BENEFITS & SLOGAN NGUYÊN BẢN
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lnt-blue shadow-xs mb-4">
            <Sparkles size={13} className="text-lnt-blue" />
            <span>Key Business Benefits</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-title font-heading tracking-tight">
            FXPRO <span className="text-lnt-blue">Opteze</span> <span className="text-amber-600">PPC Excellence</span>
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-600">
            <span>Better Plan</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Better Execution</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Better Tomorrow</span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Synchronizing end-to-end production planning and control to eliminate downtime, optimize capacity, and drive continuous factory improvements.
          </p>
        </div>

        {/* =======================================================================
            BỐ CỤC 3 CỘT ĐỐI XỨNG THEO ĐÚNG HÌNH ẢNH GỐC CỦA NGƯỜI DÙNG:
            - Cột Trái (4 cột): Thẻ 1, 2, 3
            - Cột Giữa (4 cột): Minh họa Hub Điều Hành PPC Trung Tâm + Thẻ 4 (Monitoring & Problem Solving)
            - Cột Phải (4 cột): Thẻ 5, 6, 7
        ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ===================================================================
              CỘT TRÁI (4 CỘT): THẺ 1, 2, 3
          =================================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {renderCard(card1)}
            {renderCard(card2)}
            {renderCard(card3)}
          </div>

          {/* ===================================================================
              CỘT GIỮA (4 CỘT): MINH HỌA TRUNG TÂM + THẺ 4
          =================================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* MINH HỌA TRUNG TÂM: SMART SEWING & DIGITAL TABLET PLANNING HUB */}
            <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm flex flex-col items-center justify-center text-center overflow-hidden flex-1 min-h-[300px]">
              
              {/* Vòng nền phát quang */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-sky-100/60 blur-[60px]" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-amber-100/50 blur-[60px]" />

              {/* Huy hiệu trung tâm */}
              <div className="relative z-10 flex flex-col items-center">
                
                {/* Cụm Icon đồ họa May mặc & Lập lịch số */}
                <div className="relative mb-5 flex items-center justify-center">
                  
                  {/* Bảng checklist điện tử */}
                  <div className="w-16 h-20 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-center p-2.5 space-y-1.5 -mr-3 z-10">
                    <div className="flex items-center gap-1.5 text-[10px] text-lnt-blue font-bold">
                      <Check size={11} className="stroke-[3] text-emerald-600" />
                      <span className="w-8 h-1.5 bg-slate-200 rounded" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-lnt-blue font-bold">
                      <Check size={11} className="stroke-[3] text-emerald-600" />
                      <span className="w-6 h-1.5 bg-slate-200 rounded" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-lnt-blue font-bold">
                      <Check size={11} className="stroke-[3] text-emerald-600" />
                      <span className="w-7 h-1.5 bg-slate-200 rounded" />
                    </div>
                  </div>

                  {/* Máy may công nghiệp thông minh */}
                  <div className="w-22 h-22 rounded-2xl bg-gradient-to-br from-[#087bc1] to-[#0284c7] text-white shadow-xl flex items-center justify-center relative z-20 border-2 border-white">
                    <Shirt size={38} className="text-white" />
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px] shadow">
                      PPC
                    </span>
                  </div>

                  {/* Tablet màn hình thiết kế & kế hoạch chuyền */}
                  <div className="w-16 h-20 rounded-xl bg-slate-900 border border-slate-800 shadow-md flex flex-col justify-between p-2 -ml-3 z-10 text-white">
                    <div className="text-[9px] font-mono text-sky-400 text-center border-b border-slate-800 pb-0.5">
                      LIVE
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-1 bg-sky-400/80 rounded" />
                      <div className="w-3/4 h-1 bg-emerald-400/80 rounded" />
                    </div>
                    <div className="text-[8px] font-mono text-slate-400 text-center">
                      99.4%
                    </div>
                  </div>

                </div>

                {/* Tiêu đề & Slogan minh họa trung tâm */}
                <h4 className="text-base sm:text-lg font-bold text-title tracking-tight font-heading">
                  PPC Operational Core
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-[240px] leading-relaxed">
                  Real-time synchronization between production planning, line balancing, and floor execution.
                </p>

                {/* Dải trạng thái cam kết chất lượng */}
                <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[11px] font-semibold text-lnt-blue">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Integrated Planning Excellence</span>
                </div>

              </div>

            </div>

            {/* THẺ 4: MONITORING & PROBLEM SOLVING (Đặt ở chân cột giữa) */}
            {renderCard(card4)}

          </div>

          {/* ===================================================================
              CỘT PHẢI (4 CỘT): THẺ 5, 6, 7
          =================================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {renderCard(card5)}
            {renderCard(card6)}
            {renderCard(card7)}
          </div>

        </div>

      </div>

    </section>
  )
}
