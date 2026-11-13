import React, { useState } from 'react'
import {
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Trophy,
  BrainCircuit,
} from 'lucide-react'

export default function AISuiteBenefits() {
  const [activeNode, setActiveNode] = useState<number | null>(null)

  // 3 Hàng đối xứng tuyệt đối (Row 1: Top, Row 2: Middle, Row 3: Bottom)
  const rows = [
    {
      left: {
        id: 1,
        num: '01',
        title: 'Reduced Manual Work',
        desc: 'Minimize repetitive data entry.',
        icon: Sparkles,
      },
      right: {
        id: 4,
        num: '04',
        title: 'Better Decision-Making',
        desc: 'Support decisions with structured business data.',
        icon: TrendingUp,
      },
      gapWidth: 'w-[200px] lg:w-[220px]', // Bám đúng đường cong vòm trên của quả cầu
    },
    {
      left: {
        id: 2,
        num: '02',
        title: 'Faster Processing',
        desc: 'Accelerate daily business workflows.',
        icon: Zap,
      },
      right: {
        id: 5,
        num: '05',
        title: 'Early Risk Detection',
        desc: 'Identify operational issues sooner.',
        icon: AlertTriangle,
      },
      gapWidth: 'w-[280px] lg:w-[310px]', // Bám đúng xích đạo rộng nhất của quả cầu
    },
    {
      left: {
        id: 3,
        num: '03',
        title: 'Improved Data Accuracy',
        desc: 'Validate information and reduce errors.',
        icon: CheckCircle2,
      },
      right: {
        id: 6,
        num: '06',
        title: 'Higher Productivity',
        desc: 'Enable teams to focus on value-added activities.',
        icon: Trophy,
      },
      gapWidth: 'w-[200px] lg:w-[220px]', // Bám đúng đường cong vòm dưới của quả cầu
    },
  ]

  return (
    <section id="business-benefits" className="relative w-full bg-slate-50/50 py-20 sm:py-24 lg:py-28 border-b border-slate-200/80 overflow-hidden">
      
      {/* Quầng sáng quang học dịu nhẹ phía sau */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-r from-sky-100/50 via-blue-50/60 to-cyan-100/40 blur-[130px] -z-10" />

      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12 xl:px-16">
        
        {/* =======================================================================
            HEADER KHỐI: KEY BUSINESS BENEFITS
        ======================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          
          {/* Capsule Badge chuẩn mục 5.1 DESIGN_SYSTEM.md */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-2xs mb-3.5">
            <Sparkles size={13} className="text-lnt-blue" />
            <span>KEY BUSINESS BENEFITS</span>
          </div>

          {/* Tiêu đề H2 chuẩn Section Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight font-heading leading-snug text-balance">
            Make Every Operation <span className="text-lnt-blue">Smarter with AI</span>
          </h2>

        </div>

        {/* =======================================================================
            BỐ CỤC ĐỒNG TRỤC: 6 ICON BÁM TRÊN ĐƯỜNG CONG QUẢ CẦU VÀ NỐI THẲNG VÀO THẺ
            - Sử dụng cấu trúc 3 hàng ngang đối xứng (3 Synchronized Horizontal Rows)
            - Đường kẻ nối trực tiếp 100% chuẩn xác giữa icon và mép thẻ, không lệch pixel nào
            - Kích thước thẻ vừa vặn gọn gàng (w-fit max-w-[340px]), không bị thừa khoảng trắng
        ======================================================================= */}
        <div className="relative">
          
          {/* QUẢ CẦU HẠT NHÂN TRUNG TÂM (ĐẶT Ở CHÍNH GIỮA KHỐI) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] items-center justify-center pointer-events-none z-10">
            
            {/* Vòng tròn viền quỹ đạo mảnh bao ngoài nơi các icon bám lên */}
            <div className="absolute inset-0 rounded-full border-2 border-sky-200/90 shadow-[0_0_20px_rgba(56,189,248,0.15)]" />
            <div className="absolute inset-3 rounded-full border border-dashed border-sky-300/40 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-sky-100/80" />

            {/* Quầng sáng đa tầng */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-sky-400/20 via-blue-500/20 to-cyan-300/20 blur-xl animate-pulse" />

            {/* Quả cầu Lõi AI (FXPRO AI Core) */}
            <div className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-b from-white via-sky-50 to-blue-50/80 p-1.5 shadow-xl border border-white ring-1 ring-slate-200/80 flex items-center justify-center pointer-events-auto group cursor-default">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-sky-50/50 flex flex-col items-center justify-center text-center p-3 transition-transform duration-500 group-hover:scale-105">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-lnt-blue text-white flex items-center justify-center shadow-lg shadow-sky-500/25 mb-1.5 group-hover:rotate-6 transition-transform duration-300">
                  <BrainCircuit size={24} className="stroke-[2.2]" />
                </div>
                <span className="font-heading font-black text-xs sm:text-sm tracking-wider text-title uppercase">
                  FXPRO <span className="text-lnt-blue">AI Core</span>
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                  Intelligent Engine
                </span>
              </div>
            </div>

          </div>

          {/* ===================================================================
              HIỂN THỊ MÀN HÌNH DESKTOP (3 HÀNG NGANG ĐỐI XỨNG TUYỆT ĐỐI)
          =================================================================== */}
          <div className="hidden lg:block space-y-6 sm:space-y-8 relative z-20">
            {rows.map((row, rIdx) => {
              const isLeftHovered = activeNode === row.left.id
              const isRightHovered = activeNode === row.right.id
              const LeftIcon = row.left.icon
              const RightIcon = row.right.icon

              return (
                <div key={rIdx} className="flex items-center justify-between min-h-[92px]">
                  
                  {/* PHẦN CÁNH TRÁI: THẺ GỌN ─── ĐƯỜNG KẺ ─── ICON BÁM VIỀN */}
                  <div
                    onMouseEnter={() => setActiveNode(row.left.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    className="flex items-center justify-end flex-1 group cursor-pointer"
                  >
                    {/* 1. Thẻ nội dung cánh trái (Khổ gọn, không bị thừa khoảng trắng) */}
                    <div className={`w-fit max-w-[340px] px-4.5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border transition-all duration-300 shadow-xs ${
                      isLeftHovered
                        ? 'border-lnt-blue bg-sky-50/50 shadow-md ring-2 ring-sky-100 -translate-x-1'
                        : 'border-slate-200/90 hover:border-lnt-blue/50'
                    }`}>
                      <div className="flex items-center gap-2 mb-1 justify-end">
                        <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                          isLeftHovered
                            ? 'bg-lnt-blue text-white'
                            : 'bg-sky-50 text-lnt-blue border border-sky-100'
                        }`}>
                          {row.left.num}
                        </span>
                        <h3 className={`text-sm sm:text-[15px] font-bold font-heading tracking-tight leading-snug transition-colors ${
                          isLeftHovered ? 'text-lnt-blue' : 'text-title'
                        }`}>
                          {row.left.title}
                        </h3>
                      </div>
                      <p className="text-xs text-body leading-relaxed text-right">
                        {row.left.desc}
                      </p>
                    </div>

                    {/* 2. Đường kẻ dẫn hướng nối trực tiếp từ mép thẻ đến icon */}
                    <div className="flex items-center flex-1 min-w-[36px] max-w-[120px] px-1 pointer-events-none">
                      <div className={`w-2 h-2 rounded-full border-2 border-white shrink-0 transition-colors ${
                        isLeftHovered ? 'bg-lnt-blue shadow-xs' : 'bg-sky-300'
                      }`} />
                      <div className={`w-full transition-all duration-300 ${
                        isLeftHovered
                          ? 'h-[2px] bg-lnt-blue shadow-[0_0_8px_rgba(8,123,193,0.6)]'
                          : 'h-[1.5px] bg-gradient-to-r from-sky-200 to-sky-400'
                      }`} />
                    </div>

                    {/* 3. Icon nằm bám trên viền quả cầu */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 z-30 ${
                      isLeftHovered
                        ? 'bg-lnt-blue text-white shadow-xl scale-125 ring-4 ring-sky-200'
                        : 'bg-white text-lnt-blue border-2 border-sky-300 hover:border-lnt-blue shadow-md hover:scale-110'
                    }`}>
                      <LeftIcon size={19} className="stroke-[2.2]" />
                    </div>

                  </div>

                  {/* KHOẢNG HỞ TRUNG TÂM PHÙ HỢP VỚI ĐỘ CONG QUẢ CẦU Ở HÀNG NÀY */}
                  <div className={`${row.gapWidth} shrink-0 pointer-events-none`} />

                  {/* PHẦN CÁNH PHẢI: ICON BÁM VIỀN ─── ĐƯỜNG KẺ ─── THẺ GỌN */}
                  <div
                    onMouseEnter={() => setActiveNode(row.right.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    className="flex items-center justify-start flex-1 group cursor-pointer"
                  >
                    {/* 1. Icon nằm bám trên viền quả cầu */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 z-30 ${
                      isRightHovered
                        ? 'bg-lnt-blue text-white shadow-xl scale-125 ring-4 ring-sky-200'
                        : 'bg-white text-lnt-blue border-2 border-sky-300 hover:border-lnt-blue shadow-md hover:scale-110'
                    }`}>
                      <RightIcon size={19} className="stroke-[2.2]" />
                    </div>

                    {/* 2. Đường kẻ dẫn hướng nối trực tiếp từ icon đến mép thẻ */}
                    <div className="flex items-center flex-1 min-w-[36px] max-w-[120px] px-1 pointer-events-none">
                      <div className={`w-full transition-all duration-300 ${
                        isRightHovered
                          ? 'h-[2px] bg-lnt-blue shadow-[0_0_8px_rgba(8,123,193,0.6)]'
                          : 'h-[1.5px] bg-gradient-to-r from-sky-400 to-sky-200'
                      }`} />
                      <div className={`w-2 h-2 rounded-full border-2 border-white shrink-0 transition-colors ${
                        isRightHovered ? 'bg-lnt-blue shadow-xs' : 'bg-sky-300'
                      }`} />
                    </div>

                    {/* 3. Thẻ nội dung cánh phải (Khổ gọn, không bị thừa khoảng trắng) */}
                    <div className={`w-fit max-w-[340px] px-4.5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border transition-all duration-300 shadow-xs ${
                      isRightHovered
                        ? 'border-lnt-blue bg-sky-50/50 shadow-md ring-2 ring-sky-100 translate-x-1'
                        : 'border-slate-200/90 hover:border-lnt-blue/50'
                    }`}>
                      <div className="flex items-center gap-2 mb-1 justify-start">
                        <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                          isRightHovered
                            ? 'bg-lnt-blue text-white'
                            : 'bg-sky-50 text-lnt-blue border border-sky-100'
                        }`}>
                          {row.right.num}
                        </span>
                        <h3 className={`text-sm sm:text-[15px] font-bold font-heading tracking-tight leading-snug transition-colors ${
                          isRightHovered ? 'text-lnt-blue' : 'text-title'
                        }`}>
                          {row.right.title}
                        </h3>
                      </div>
                      <p className="text-xs text-body leading-relaxed text-left">
                        {row.right.desc}
                      </p>
                    </div>

                  </div>

                </div>
              )
            })}
          </div>

          {/* ===================================================================
              HIỂN THỊ MÀN HÌNH MOBILE / TABLET (< lg): BỐ CỤC DỌC TINH GỌN
          =================================================================== */}
          <div className="lg:hidden space-y-8">
            
            {/* Quả cầu thu nhỏ trên Mobile */}
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-b from-white via-sky-50 to-blue-50/80 p-1.5 shadow-xl border border-white ring-1 ring-slate-200/80 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-sky-50/50 flex flex-col items-center justify-center text-center p-2">
                  <BrainCircuit size={24} className="text-lnt-blue mb-1" />
                  <span className="font-heading font-black text-xs text-title uppercase">
                    FXPRO <span className="text-lnt-blue">AI Core</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Lưới 6 thẻ gọn gàng trên Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...rows.map((r) => r.left), ...rows.map((r) => r.right)].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-lnt-blue flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="stroke-[2.2]" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] font-bold text-lnt-blue">
                          {item.num}
                        </span>
                        <h3 className="text-sm font-bold text-title font-heading tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-body leading-relaxed">
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
    </section>
  )
}
