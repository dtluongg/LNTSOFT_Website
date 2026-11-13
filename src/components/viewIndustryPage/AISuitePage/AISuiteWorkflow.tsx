import React from 'react'
import {
  UploadCloud,
  ShieldCheck,
  Cpu,
  Layers,
  ChevronRight,
  Workflow,
} from 'lucide-react'

export default function AISuiteWorkflow() {
  // 4 Bước chuẩn hóa theo đúng sơ đồ "How FXPRO AI Works"
  const workflowSteps = [
    {
      step: '01',
      position: 'top' as const,
      title: 'Input',
      desc: 'Upload PDF/Excel documents, buyer tech packs, or receive customer order information',
      icon: UploadCloud,
    },
    {
      step: '02',
      position: 'bottom' as const,
      title: 'Validation',
      desc: 'Validate data and identify missing information or potential discrepancies',
      icon: ShieldCheck,
    },
    {
      step: '03',
      position: 'top' as const,
      title: 'FXPRO AI Agent Processing',
      desc: 'AI reads, extracts, interprets, and structures relevant information',
      icon: Cpu,
    },
    {
      step: '04',
      position: 'bottom' as const,
      title: 'FXPRO Modules Integration',
      desc: 'Generate structured business data and connect it to the relevant FXPRO processes.',
      icon: Layers,
    },
  ]

  return (
    <section id="how-it-works" className="relative w-full bg-white py-16 sm:py-20 lg:py-28 border-b border-slate-200/80 overflow-hidden">
      
      {/* Quầng sáng quang học mềm mại phía sau tạo chiều sâu không gian (Brand Ambient Glow) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] sm:w-[1200px] h-[450px] bg-gradient-to-r from-sky-100/50 via-blue-50/60 to-cyan-100/40 blur-[130px] -z-10" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16">
        
        {/* =======================================================================
            HEADER KHỐI: THANH LỊCH, GỌN GÀNG, KHÔNG DÀI DÒNG
        ======================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          
          {/* Capsule Badge chuẩn mục 5.1 DESIGN_SYSTEM.md */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-2xs mb-3.5">
            <Workflow size={13} className="text-lnt-blue" />
            <span>AI WORKFLOW & ARCHITECTURE</span>
          </div>

          {/* Tiêu đề H2 chuẩn Section Title (Mục 2.2 DESIGN_SYSTEM.md) */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight font-heading leading-snug text-balance">
            How FXPRO <span className="text-lnt-blue">AI Works</span>
          </h2>

        </div>

        {/* =======================================================================
            SƠ ĐỒ TIẾN TRÌNH KHÔNG VIỀN HỘP (FRAMELESS & BORDERLESS FLOW)
            - Hoàn toàn KHÔNG dùng hộp đóng khung, KHÔNG viền thô cứng
            - Chữ và Icon bay bổng tự do trong không gian thoáng đạt
            - Điểm tựa thị giác bằng Số thứ tự Watermark nghệ thuật (01, 02, 03, 04)
            - Trục ánh sáng LNT thanh thoát với các điểm nút LED phát sáng đa tầng
        ======================================================================= */}
        <div className="w-full overflow-x-auto pb-10 pt-4 scrollbar-thin">
          <div className="min-w-[1040px] relative px-8 lg:px-12">
            
            {/* 1. TRỤC ĐIỀU HƯỚNG TRUNG TÂM (CENTRAL GLOWING FLOW AXIS) */}
            <div className="absolute left-8 right-14 top-[220px] h-[2px] bg-gradient-to-r from-sky-200 via-lnt-blue to-cyan-400 pointer-events-none shadow-[0_0_10px_rgba(8,123,193,0.25)]" />
            <div className="absolute right-10 top-[220px] -translate-y-1/2 text-lnt-blue pointer-events-none flex items-center">
              <ChevronRight size={26} className="stroke-[2.5]" />
            </div>

            {/* 2. LƯỚI 4 TRẠM XỬ LÝ SO LE KHÔNG HỘP (4 FRAMELESS STATIONS) */}
            <div className="grid grid-cols-4 gap-8 lg:gap-12 relative">
              {workflowSteps.map((step, idx) => {
                const isTop = step.position === 'top'
                const Icon = step.icon

                return (
                  <div key={idx} className="relative flex flex-col justify-between h-[440px]">
                    
                    {/* =========================================================
                        KHU VỰC TRÊN (DÀNH CHO BƯỚC 1 VÀ BƯỚC 3)
                    ========================================================= */}
                    <div className="h-[220px] flex flex-col justify-end pb-0 relative">
                      {isTop && (
                        <div className="relative group pb-8 pr-4">
                          
                          {/* Số Watermark nghệ thuật ẩn phía sau - Tạo điểm nhấn đẳng cấp, không cần khung */}
                          <span className="absolute -top-4 right-2 font-mono text-6xl sm:text-7xl font-black text-slate-100/90 group-hover:text-sky-100 transition-colors select-none pointer-events-none tracking-tighter">
                            {step.step}
                          </span>

                          {/* Icon phát quang mềm mại không viền */}
                          <div className="relative z-10 w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-100/90 via-sky-50 to-blue-50/50 text-lnt-blue flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 group-hover:bg-lnt-blue group-hover:text-white transition-all duration-300">
                            <Icon size={20} className="stroke-[2.2]" />
                          </div>

                          {/* Tiêu đề & Nội dung thuần khiết không viền hộp */}
                          <div className="relative z-10 space-y-1.5">
                            <h3 className="text-base sm:text-[17px] font-bold text-title font-heading tracking-tight leading-snug group-hover:text-lnt-blue transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-body leading-relaxed font-normal">
                              {step.desc}
                            </p>
                          </div>

                          {/* Vạch dẫn hướng thanh mảnh nối xuống trục ngang */}
                          <div className="absolute left-5 bottom-0 w-[1.5px] h-8 bg-gradient-to-b from-sky-300/80 to-lnt-blue group-hover:h-9 transition-all duration-300" />

                          {/* Điểm nút LED phát sáng đa tầng trên trục ngang */}
                          <div className="absolute left-[13px] -bottom-1.5 w-4 h-4 rounded-full bg-lnt-blue ring-4 ring-sky-100 border-2 border-white shadow-[0_0_10px_rgba(8,123,193,0.5)] z-10 group-hover:scale-125 transition-transform duration-300" />

                        </div>
                      )}
                    </div>

                    {/* =========================================================
                        KHU VỰC DƯỚI (DÀNH CHO BƯỚC 2 VÀ BƯỚC 4)
                    ========================================================= */}
                    <div className="h-[220px] flex flex-col justify-start pt-0 relative">
                      {!isTop && (
                        <div className="relative group pt-8 pr-4">
                          
                          {/* Điểm nút LED phát sáng đa tầng trên trục ngang */}
                          <div className="absolute left-[13px] -top-2 w-4 h-4 rounded-full bg-lnt-blue ring-4 ring-sky-100 border-2 border-white shadow-[0_0_10px_rgba(8,123,193,0.5)] z-10 group-hover:scale-125 transition-transform duration-300" />

                          {/* Vạch dẫn hướng thanh mảnh nối từ trục ngang xuống nội dung */}
                          <div className="absolute left-5 top-0 w-[1.5px] h-8 bg-gradient-to-b from-lnt-blue to-sky-300/80 group-hover:h-9 transition-all duration-300" />

                          {/* Số Watermark nghệ thuật ẩn phía sau */}
                          <span className="absolute top-2 right-2 font-mono text-6xl sm:text-7xl font-black text-slate-100/90 group-hover:text-sky-100 transition-colors select-none pointer-events-none tracking-tighter">
                            {step.step}
                          </span>

                          {/* Icon phát quang mềm mại không viền */}
                          <div className="relative z-10 w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-100/90 via-sky-50 to-blue-50/50 text-lnt-blue flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 group-hover:bg-lnt-blue group-hover:text-white transition-all duration-300">
                            <Icon size={20} className="stroke-[2.2]" />
                          </div>

                          {/* Tiêu đề & Nội dung thuần khiết không viền hộp */}
                          <div className="relative z-10 space-y-1.5">
                            <h3 className="text-base sm:text-[17px] font-bold text-title font-heading tracking-tight leading-snug group-hover:text-lnt-blue transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-body leading-relaxed font-normal">
                              {step.desc}
                            </p>
                          </div>

                        </div>
                      )}
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
