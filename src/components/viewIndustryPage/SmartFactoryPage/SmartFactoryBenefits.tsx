import React from 'react'
import {
  Sparkles,
  Eye,
  TrendingUp,
  SlidersHorizontal,
  CheckCircle2,
  Zap,
  BarChart3,
  Check,
  Shirt,
  Radio,
  Cpu,
} from 'lucide-react'

export default function SmartFactoryBenefits() {
  // 6 Lợi ích cốt lõi nguyên văn 100% từ yêu cầu của người dùng
  const card1 = {
    num: 1,
    title: 'Improved Production Visibility',
    desc: 'Gain real-time visibility into sewing line output, team performance, production progress, and operational status, enabling better oversight of daily manufacturing activities.',
    icon: Eye,
    colorBadge: 'bg-sky-500 text-white shadow-sm',
    bgCard: 'bg-sky-50/70 border-sky-200/80 hover:border-sky-400 hover:shadow-md',
    bulletColor: 'bg-sky-500',
  }

  const card2 = {
    num: 2,
    title: 'Increase Production Efficiency',
    desc: 'Identify productivity gaps, production bottlenecks, and underperforming teams to improve resource utilization and optimize sewing line performance.',
    icon: TrendingUp,
    colorBadge: 'bg-emerald-600 text-white shadow-sm',
    bgCard: 'bg-emerald-50/50 border-emerald-200/80 hover:border-emerald-400 hover:shadow-md',
    bulletColor: 'bg-emerald-500',
  }

  const card3 = {
    num: 3,
    title: 'Better Production Control',
    desc: 'Monitor planned versus actual production output and quickly identify production activities requiring management attention, ensuring better control over production targets.',
    icon: SlidersHorizontal,
    colorBadge: 'bg-amber-500 text-white shadow-sm',
    bgCard: 'bg-amber-50/60 border-amber-200/80 hover:border-amber-400 hover:shadow-md',
    bulletColor: 'bg-amber-500',
  }

  const card4 = {
    num: 4,
    title: 'More Accurate Production Information',
    desc: 'Reduce reliance on manual reporting by capturing production information directly from connected digital workstations, improving data accuracy and timeliness.',
    icon: CheckCircle2,
    colorBadge: 'bg-blue-600 text-white shadow-sm',
    bgCard: 'bg-blue-50/60 border-blue-200/80 hover:border-blue-400 hover:shadow-md',
    bulletColor: 'bg-blue-600',
  }

  const card5 = {
    num: 5,
    title: 'Faster Operational Response',
    desc: 'Provide supervisors with timely production alerts and performance information, enabling quicker responses to production issues and more effective corrective actions.',
    icon: Zap,
    colorBadge: 'bg-rose-500 text-white shadow-sm',
    bgCard: 'bg-rose-50/60 border-rose-200/80 hover:border-rose-400 hover:shadow-md',
    bulletColor: 'bg-rose-500',
  }

  const card6 = {
    num: 6,
    title: 'Data-Driven Management Decisions',
    desc: 'Transform daily production data into meaningful performance insights, helping management evaluate operational results, identify improvement opportunities, and drive continuous improvement',
    icon: BarChart3,
    colorBadge: 'bg-indigo-600 text-white shadow-sm',
    bgCard: 'bg-indigo-50/60 border-indigo-200/80 hover:border-indigo-400 hover:shadow-md',
    bulletColor: 'bg-indigo-500',
  }

  // Component render từng thẻ theo đúng phong cách SmartPlannerBenefits
  const renderCard = (card: typeof card1) => {
    const Icon = card.icon
    return (
      <div
        key={card.num}
        className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${card.bgCard}`}
      >
        <div>
          {/* Header thẻ: Số thứ tự tròn, Icon và Tiêu đề */}
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 ${card.colorBadge}`}
            >
              {card.num}
            </span>
            <div className="flex items-center gap-2">
              <Icon size={18} className="text-slate-700" />
              <h3 className="text-base sm:text-[17px] font-bold text-title tracking-tight leading-snug">
                {card.title}
              </h3>
            </div>
          </div>

          {/* Đoạn văn mô tả nguyên bản 100% */}
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-10">
            {card.desc}
          </p>
        </div>
      </div>
    )
  }

  return (
    <section id="business-benefits" className="relative w-full bg-slate-50/40 py-20 sm:py-24 lg:py-28 border-b border-slate-200/80 overflow-hidden">
      
      {/* Quầng sáng quang học mềm mại tạo chiều sâu không gian */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[520px] bg-gradient-to-r from-sky-100/50 via-blue-50/50 to-emerald-50/40 blur-[130px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =======================================================================
            HEADER KHỐI: KEY BUSINESS BENEFITS & TIÊU ĐỀ NGUYÊN BẢN
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lnt-blue shadow-xs mb-4">
            <Sparkles size={13} className="text-lnt-blue" />
            <span>Key Business Benefits</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-title font-heading tracking-tight">
            Make Every Sewing Operation{' '}
            <span className="text-lnt-blue">More Productive</span>
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-600">
            <span>Real-Time Visibility</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Line Optimization</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Data-Driven Control</span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Empowering apparel manufacturing operations with continuous real-time insight, eliminating shop-floor bottlenecks, and elevating sewing line productivity.
          </p>
        </div>

        {/* =======================================================================
            BỐ CỤC 3 CỘT ĐỐI XỨNG CHUẨN MỰC (TƯƠNG TỰ SMART PLANNER BENEFITS):
            - Cột Trái (4 cột): Thẻ 1, 2, 3
            - Cột Giữa (4 cột): Hub Điều Hành Smart Factory Trung Tâm
            - Cột Phải (4 cột): Thẻ 4, 5, 6
        ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ===================================================================
              CỘT TRÁI (4 CỘT): THẺ 1, 2, 3
          =================================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {renderCard(card1)}
            {renderCard(card2)}
            {renderCard(card3)}
          </div>

          {/* ===================================================================
              CỘT GIỮA (4 CỘT): MINH HỌA SMART FACTORY OPERATIONAL CORE
          =================================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            
            <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col items-center justify-center text-center overflow-hidden h-full min-h-[420px]">
              
              {/* Vòng nền phát quang */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-sky-100/60 blur-[60px]" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-emerald-100/50 blur-[60px]" />

              {/* Huy hiệu trung tâm */}
              <div className="relative z-10 flex flex-col items-center">
                
                {/* Cụm Icon đồ họa May mặc & IoT Chuyền May */}
                <div className="relative mb-6 flex items-center justify-center">
                  
                  {/* Bảng checklist kiểm soát chất lượng & sản lượng */}
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

                  {/* Máy may công nghiệp thông minh trung tâm */}
                  <div className="w-22 h-22 rounded-2xl bg-gradient-to-br from-[#087bc1] to-[#0284c7] text-white shadow-xl flex items-center justify-center relative z-20 border-2 border-white">
                    <Shirt size={38} className="text-white" />
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[9px] shadow">
                      MES
                    </span>
                  </div>

                  {/* Thiết bị hiển thị số liệu chuyền may thông minh */}
                  <div className="w-16 h-20 rounded-xl bg-slate-900 border border-slate-800 shadow-md flex flex-col justify-between p-2 -ml-3 z-10 text-white">
                    <div className="text-[9px] font-mono text-sky-400 text-center border-b border-slate-800 pb-0.5">
                      IOT
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-1 bg-sky-400/80 rounded" />
                      <div className="w-3/4 h-1 bg-emerald-400/80 rounded" />
                    </div>
                    <div className="text-[8px] font-mono text-emerald-400 text-center font-bold">
                      LIVE
                    </div>
                  </div>

                </div>

                {/* Tiêu đề & Mô tả minh họa trung tâm */}
                <h4 className="text-base sm:text-lg font-bold text-title tracking-tight font-heading">
                  Smart Factory Core
                </h4>
                <p className="text-xs text-slate-500 mt-2 max-w-[260px] leading-relaxed">
                  Real-time connectivity between sewing workstations, supervisor alerts, and plant-wide analytics.
                </p>

                {/* Dải trạng thái cam kết chất lượng */}
                <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[11px] font-semibold text-lnt-blue">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Connected Sewing Intelligence</span>
                </div>

              </div>

            </div>

          </div>

          {/* ===================================================================
              CỘT PHẢI (4 CỘT): THẺ 4, 5, 6
          =================================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {renderCard(card4)}
            {renderCard(card5)}
            {renderCard(card6)}
          </div>

        </div>

      </div>

    </section>
  )
}
