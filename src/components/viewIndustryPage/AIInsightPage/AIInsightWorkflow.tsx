import React from 'react'
import {
  Layers,
  BrainCircuit,
  Sparkles,
  Compass,
  Workflow,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

export default function AIInsightWorkflow() {
  // 4 Bước chuẩn hóa theo đúng sơ đồ "How FXPRO Insight Works" - 100% nguyên văn
  const flowSteps = [
    {
      step: '01',
      phase: 'DATA INGESTION',
      title: 'Business Data Collection',
      desc: 'Gather relevant information from integrated FXPRO business modules.',
      icon: Layers,
      themeColor: '#087bc1',
      accentGlow: 'from-sky-400/20 via-sky-300/10 to-transparent',
      touchpoint: 'ERP, MES & Floor Data',
    },
    {
      step: '02',
      phase: 'COGNITIVE ENGINE',
      title: 'AI Data Analysis',
      desc: 'Process and analyze business information to identify trends and patterns.',
      icon: BrainCircuit,
      themeColor: '#6366f1',
      accentGlow: 'from-indigo-400/20 via-indigo-300/10 to-transparent',
      touchpoint: 'Pattern & Variance Engine',
    },
    {
      step: '03',
      phase: 'VALUE SYNTHESIS',
      title: 'Insight Generation',
      desc: 'Convert analyzed data into understandable business insights.',
      icon: Sparkles,
      themeColor: '#0284c7',
      accentGlow: 'from-cyan-400/20 via-blue-300/10 to-transparent',
      touchpoint: 'Clarity & Visual Briefs',
    },
    {
      step: '04',
      phase: 'STRATEGIC ACTION',
      title: 'Management Decision Support',
      desc: 'Provide information to help teams evaluate performance and take action.',
      icon: Compass,
      themeColor: '#059669',
      accentGlow: 'from-emerald-400/20 via-emerald-300/10 to-transparent',
      touchpoint: 'Executive Action Plan',
    },
  ]

  return (
    <section id="workflow" className="w-full bg-white py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-slate-200/80">
      
      {/* =========================================================================
          QUẦNG SÁNG QUANG HỌC NỀN (AMBIENT AURA GLOW)
      ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] sm:w-[1300px] h-[460px] bg-gradient-to-r from-sky-100/45 via-blue-50/50 to-emerald-50/40 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16" style={{ zIndex: 10 }}>
        
        {/* =======================================================================
            HEADER KHỐI: SANG TRỌNG, THOÁNG ĐÃNG, TIÊU ĐỀ KHÔNG GÃY LUNG TUNG
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          
          {/* Top Capsule Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-2xs mb-4">
            <Workflow size={13} className="text-lnt-blue" />
            <span>INTELLIGENT PIPELINE</span>
          </div>

          {/* Tiêu đề H2 chính xác theo yêu cầu */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15194f] font-heading tracking-tight leading-[1.12]">
            How FXPRO <span className="text-[#087bc1]">Insight Works</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            An automated, closed-loop intelligence pipeline transforming fragmented operational data into clear, proactive executive actions.
          </p>

        </div>

        {/* =======================================================================
            SƠ ĐỒ LUỒNG TIẾN TRÌNH KHÔNG VIỀN HỘP (FRAMELESS STREAM ARCHITECTURE)
            - Desktop: Trục ánh sáng xuyên suốt 4 trạm hội tụ từ trái sang phải
            - Mobile: Luồng dọc thanh thoát với các nút xung nhịp phát sáng
            - Hoàn toàn KHÔNG dùng khung viền ô hộp thô cứng, chữ bay bổng thanh nhã
        ======================================================================= */}
        
        {/* ── DESKTOP VIEW (>= lg) ── */}
        <div className="hidden lg:block relative pb-6">
          
          {/* 1. TRỤC DẪN SÁNG TRUNG TÂM (CENTRAL GLOWING PIPELINE BEAM) */}
          <div className="absolute top-[82px] left-14 right-14 h-[2.5px] bg-gradient-to-r from-[#087bc1] via-[#6366f1] via-[#0284c7] to-[#059669] shadow-[0_0_12px_rgba(8,123,193,0.35)] pointer-events-none" />
          
          {/* Mũi tên ánh sáng ở điểm cuối trục */}
          <div className="absolute top-[82px] right-8 -translate-y-1/2 text-[#059669] pointer-events-none">
            <ChevronRight size={28} className="stroke-[3]" />
          </div>

          {/* 2. 4 TRẠM NĂNG LỰC DỌC TRỤC */}
          <div className="grid grid-cols-4 gap-8 xl:gap-12 relative">
            {flowSteps.map((item, idx) => {
              const Icon = item.icon

              return (
                <div
                  key={item.step}
                  className="relative group flex flex-col items-center text-center select-none"
                >
                  {/* Quầng sáng quang học mềm mại khi hover */}
                  <div
                    className={`pointer-events-none absolute -top-8 w-44 h-44 rounded-full bg-gradient-to-b ${item.accentGlow} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Số Watermark mờ ảo phía sau trạm */}
                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-slate-100 font-heading select-none opacity-60 group-hover:text-sky-100 transition-colors">
                    {item.step}
                  </span>

                  {/* NÚT TRÒN TRẠM TRUNG TÂM (CENTRAL POD) nằm ngay trên trục */}
                  <div className="relative z-10 mb-8">
                    {/* Vòng hào quang phát sáng bên ngoài */}
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-xl group-hover:scale-110 transition-all duration-300 border-2"
                      style={{
                        borderColor: item.themeColor,
                        boxShadow: `0 10px 25px -5px ${item.themeColor}35`,
                      }}
                    >
                      {/* Vòng nền gradient bên trong pod */}
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          backgroundColor: `${item.themeColor}12`,
                          color: item.themeColor,
                        }}
                      >
                        <Icon size={26} className="stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Điểm nút LED phát quang nhấp nháy dưới chân Pod */}
                    <div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: item.themeColor }}
                    />
                  </div>

                  {/* PHẦN THÔNG TIN CHỮ: KHÔNG VIỀN HỘP, MẠCH LẠC */}
                  <div className="relative z-10 space-y-3 px-2">
                    
                    {/* Phase Badge */}
                    <div className="flex justify-center">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10.5px] font-bold tracking-widest uppercase font-mono"
                        style={{
                          backgroundColor: `${item.themeColor}10`,
                          color: item.themeColor,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.themeColor }} />
                        <span>{item.phase}</span>
                      </span>
                    </div>

                    {/* Tiêu đề Step: Chữ đậm Navy */}
                    <h3 className="text-xl font-bold text-[#15194f] font-heading tracking-tight leading-snug group-hover:text-[#087bc1] transition-colors">
                      {item.step}. {item.title}
                    </h3>

                    {/* Mô tả (100% nguyên văn) */}
                    <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-[280px] mx-auto">
                      {item.desc}
                    </p>

                    {/* Touchpoint Pill tinh tế dưới chân */}
                    <div className="pt-2 flex justify-center">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
                        <CheckCircle2 size={13} style={{ color: item.themeColor }} />
                        <span>{item.touchpoint}</span>
                      </span>
                    </div>

                  </div>

                </div>
              )
            })}
          </div>

        </div>

        {/* ── MOBILE / TABLET VIEW (< lg): TRỤC DỌC THANH LỊCH ── */}
        <div className="block lg:hidden relative pl-8 sm:pl-10">
          
          {/* Trục dẫn sáng dọc bên trái */}
          <div className="absolute top-6 bottom-6 left-4 sm:left-5 w-[2.5px] bg-gradient-to-b from-[#087bc1] via-[#6366f1] via-[#0284c7] to-[#059669] shadow-[0_0_10px_rgba(8,123,193,0.3)] pointer-events-none" />

          <div className="space-y-12 sm:space-y-14">
            {flowSteps.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.step} className="relative group pl-6 sm:pl-8">
                  
                  {/* Điểm nút LED tròn gắn trên trục dọc */}
                  <div
                    className="absolute -left-[30px] sm:-left-[34px] top-1.5 w-7 h-7 rounded-full bg-white border-2 flex items-center justify-center shadow-md z-10"
                    style={{ borderColor: item.themeColor }}
                  >
                    <div
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: item.themeColor }}
                    />
                  </div>

                  {/* Nội dung khối */}
                  <div className="space-y-2.5">
                    
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${item.themeColor}12`,
                          color: item.themeColor,
                        }}
                      >
                        STEP {item.step}
                      </span>
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                        • {item.phase}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#15194f] font-heading tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/70">
                        <CheckCircle2 size={13} style={{ color: item.themeColor }} />
                        <span>{item.touchpoint}</span>
                      </span>
                    </div>

                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>

    </section>
  )
}
