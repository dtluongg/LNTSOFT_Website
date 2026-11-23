import React, { useState } from 'react'
import {
  Workflow,
  Send,
  Radio,
  SlidersHorizontal,
  LayoutDashboard,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export default function SmartFactoryWorkflow() {
  const [activeIndex, setActiveIndex] = useState(0)

  // 5 Bước chuẩn hoá - 100% nội dung gốc của người dùng
  const flowNodes = [
    {
      id: '01',
      stepNumber: 1,
      phase: 'PLAN RELEASE',
      title: 'Manufacturing Order & Plan Release',
      desc: 'Release manufacturing orders and allocate planned production targets, resources, and assignments to sewing teams to initiate production execution.',
      icon: Send,
      themeColor: '#087bc1',
      badgeBg: 'bg-sky-50 text-[#087bc1] border-sky-200',
      lightBg: 'bg-sky-500/10',
      borderColor: 'border-sky-300',
    },
    {
      id: '02',
      stepNumber: 2,
      phase: 'SHOPFLOOR TRACKING',
      title: 'Real-Time Production Tracking',
      desc: 'Capture and update actual production output, team performance, and work-in-progress (WIP) information in real time through connected sewing workstations and mobile interfaces.',
      icon: Radio,
      themeColor: '#0284c7',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      lightBg: 'bg-cyan-500/10',
      borderColor: 'border-cyan-300',
    },
    {
      id: '03',
      stepNumber: 3,
      phase: 'PERFORMANCE CONTROL',
      title: 'Production Performance Monitoring',
      desc: 'Compare planned targets against actual production results. Monitor sewing team performance, identify output gaps, and highlight production teams requiring management attention.',
      icon: SlidersHorizontal,
      themeColor: '#d97706',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      lightBg: 'bg-amber-500/10',
      borderColor: 'border-amber-300',
    },
    {
      id: '04',
      stepNumber: 4,
      phase: 'MANAGEMENT INSIGHTS',
      title: 'Production Analytics & Management Insights',
      desc: 'Present production information through interactive dashboards and analytical reports, enabling supervisors and management to evaluate production performance, identify operational issues, and make informed decisions.',
      icon: LayoutDashboard,
      themeColor: '#6366f1',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      lightBg: 'bg-indigo-500/10',
      borderColor: 'border-indigo-300',
    },
    {
      id: '05',
      stepNumber: 5,
      phase: 'CLOSED LOOP',
      title: 'Corrective Actions & Continuous Improvement',
      desc: 'Use real-time production information and performance insights to address production issues, improve team coordination, optimize resource utilization, and continuously enhance sewing operations',
      icon: RefreshCw,
      themeColor: '#059669',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      lightBg: 'bg-emerald-500/10',
      borderColor: 'border-emerald-300',
    },
  ]

  const totalSteps = flowNodes.length

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSteps) % totalSteps)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSteps)
  }

  const getPositionClass = (index: number) => {
    // Tính toán khoảng cách tương đối có tuần hoàn khép kín (-2, -1, 0, 1, 2)
    let diff = index - activeIndex
    if (diff > 2) diff -= totalSteps
    if (diff < -2) diff += totalSteps

    if (diff === 0) {
      // THẺ TRUNG TÂM (ĐANG XEM): Nổi bật nhất, kích thước chuẩn, tương tác đầy đủ
      return {
        style: 'translate-x-0 scale-100 opacity-100 z-30 shadow-2xl pointer-events-auto',
        isCenter: true,
        diff,
      }
    } else if (diff === -1) {
      // THẺ NGAY BÊN TRÁI: Thu nhỏ nhẹ, mờ nhẹ, nhấn vào để tiến về trung tâm
      return {
        style: '-translate-x-[55%] sm:-translate-x-[68%] lg:-translate-x-[75%] scale-[0.88] opacity-50 sm:opacity-75 z-20 cursor-pointer hover:opacity-90',
        isCenter: false,
        diff,
      }
    } else if (diff === 1) {
      // THẺ NGAY BÊN PHẢI: Thu nhỏ nhẹ, mờ nhẹ, nhấn vào để tiến về trung tâm
      return {
        style: 'translate-x-[55%] sm:translate-x-[68%] lg:translate-x-[75%] scale-[0.88] opacity-50 sm:opacity-75 z-20 cursor-pointer hover:opacity-90',
        isCenter: false,
        diff,
      }
    } else if (diff === -2) {
      // THẺ XA BÊN TRÁI
      return {
        style: '-translate-x-[95%] sm:-translate-x-[115%] scale-[0.75] opacity-0 sm:opacity-30 z-10 pointer-events-none',
        isCenter: false,
        diff,
      }
    } else {
      // THẺ XA BÊN PHẢI (diff === 2)
      return {
        style: 'translate-x-[95%] sm:translate-x-[115%] scale-[0.75] opacity-0 sm:opacity-30 z-10 pointer-events-none',
        isCenter: false,
        diff,
      }
    }
  }

  const currentStep = flowNodes[activeIndex]

  return (
    <section id="workflow" className="w-full bg-slate-50/70 py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-slate-200/80">
      
      {/* Quầng sáng quang học dịu êm làm nền */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-gradient-to-b from-sky-100/60 via-blue-50/20 to-transparent blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[350px] rounded-full bg-emerald-50/30 blur-[130px] -z-10" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        
        {/* =======================================================================
            HEADER TIÊU ĐỀ SECTION
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lnt-blue shadow-xs mb-4">
            <Workflow size={13} className="text-lnt-blue" />
            <span>Process Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-title font-heading tracking-tight leading-tight">
            How the Smart Sewing <span className="text-lnt-blue">Factory Works</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            The FXPRO Smart Sewing Factory connects manufacturing order planning, sewing operations, and management monitoring through a continuous flow of real-time production information.
          </p>
        </div>

        {/* =======================================================================
            BỘ ĐIỀU HƯỚNG BƯỚC TUẦN HOÀN (STEPPER TIMELINE / MILESTONES)
            - Cho phép nhấp chọn bất kỳ bước nào để đưa ra trung tâm
            - Hiển thị rõ ràng chu trình khép kín 1 -> 2 -> 3 -> 4 -> 5 -> 1
        ======================================================================= */}
        <div className="max-w-4xl mx-auto mb-10 px-2 sm:px-4">
          <div className="grid grid-cols-5 gap-1.5 sm:gap-3 bg-white/80 p-2 sm:p-2.5 rounded-2xl border border-slate-200/90 shadow-sm backdrop-blur-xs">
            {flowNodes.map((node, idx) => {
              const isActive = idx === activeIndex
              const NodeIcon = node.icon

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 py-2 sm:py-2.5 px-1 sm:px-3 rounded-xl transition-all duration-300 text-left ${
                    isActive
                      ? 'bg-lnt-blue text-white shadow-md shadow-sky-500/20 scale-[1.02]'
                      : 'text-slate-600 hover:text-lnt-blue hover:bg-slate-100/70'
                  }`}
                >
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <NodeIcon size={14} />
                  </div>
                  <div className="text-center sm:text-left min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold opacity-90 truncate">
                      Step {node.id}
                    </div>
                    <div className="hidden md:block text-xs font-bold truncate max-w-[110px]">
                      {node.phase}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* =======================================================================
            CAROUSEL SÂN KHẤU TÂM ĐIỂM (CENTER-STAGE 5-CARD CAROUSEL)
            - Thẻ trung tâm luôn cố định kích thước, trực diện và nổi bật
            - Thẻ 2 bên thu nhỏ tạo chiều sâu 3D perspective
            - 2 Nút Lùi/Tiến nổi bật ở 2 cánh
        ======================================================================= */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center min-h-[420px] sm:min-h-[400px] my-4 select-none">
          
          {/* NÚT ĐIỀU HƯỚNG TRÁI (PREV) */}
          <button
            onClick={handlePrev}
            aria-label="Previous step"
            className="absolute left-2 sm:left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-lnt-blue border border-slate-200/90 shadow-xl shadow-slate-300/40 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group focus:outline-hidden"
          >
            <ChevronLeft size={24} className="stroke-[2.5] transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>

          {/* KHÔNG GIAN HIỂN THỊ CÁC THẺ (CARD DECK WRAPPER) */}
          <div className="relative w-full h-[380px] sm:h-[350px] flex items-center justify-center overflow-hidden py-4">
            {flowNodes.map((item, idx) => {
              const { style, isCenter, diff } = getPositionClass(idx)
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isCenter) {
                      if (diff === -1) handlePrev()
                      if (diff === 1) handleNext()
                    }
                  }}
                  className={`absolute w-[86%] sm:w-[500px] lg:w-[560px] rounded-3xl bg-white border transition-all duration-500 ease-out flex flex-col justify-between p-6 sm:p-8 ${style} ${
                    isCenter
                      ? 'border-sky-300/90 shadow-[0_20px_50px_rgba(8,123,193,0.14)] ring-4 ring-sky-50'
                      : 'border-slate-200/80 shadow-md'
                  }`}
                  style={{
                    transformOrigin: 'center center',
                  }}
                >
                  {/* Dải line màu nhận diện chủ đề trên đỉnh thẻ */}
                  <div
                    className="absolute top-0 left-8 right-8 h-1 rounded-b-full transition-opacity"
                    style={{
                      backgroundColor: item.themeColor,
                      opacity: isCenter ? 1 : 0.4,
                    }}
                  />

                  {/* HEADER CỦA THẺ */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-300"
                        style={{
                          backgroundColor: item.lightBg,
                          color: item.themeColor,
                        }}
                      >
                        <Icon size={26} className="stroke-[2.2]" />
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase border font-mono ${item.badgeBg}`}
                        >
                          Step {item.id} &bull; {item.phase}
                        </span>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">
                          Stage {item.stepNumber} of 5
                        </div>
                      </div>
                    </div>

                    {/* Vị trí badge trạng thái */}
                    {isCenter && (
                      <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-lnt-blue text-[11px] font-semibold font-mono">
                        <Sparkles size={12} />
                        Active View
                      </span>
                    )}
                  </div>

                  {/* THÂN THẺ: TIÊU ĐỀ VÀ MÔ TẢ NGUYÊN VĂN */}
                  <div className="my-auto py-3">
                    <h3 className="text-lg sm:text-xl font-bold text-title font-heading tracking-tight leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* ĐÁY THẺ: DẪN LUỒNG HOẶC GHI CHÚ CHU TRÌNH */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    {item.stepNumber < 5 ? (
                      <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <span>Next:</span>
                        <span className="font-semibold text-slate-700">Step 0{item.stepNumber + 1}</span>
                        <ArrowRight size={13} className="text-slate-400" />
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80">
                        <RotateCcw size={13} className="text-emerald-600" />
                        <span>Loops back to Step 01</span>
                      </div>
                    )}

                    <div className="font-mono text-[11px] text-slate-400">
                      Step {item.stepNumber}/5
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* NÚT ĐIỀU HƯỚNG PHẢI (NEXT) */}
          <button
            onClick={handleNext}
            aria-label="Next step"
            className="absolute right-2 sm:right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-lnt-blue border border-slate-200/90 shadow-xl shadow-slate-300/40 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group focus:outline-hidden"
          >
            <ChevronRight size={24} className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

        </div>

        {/* =======================================================================
            CHỈ SỐ DẤU CHẤM TRANG (DOTS INDICATOR) & NÚT ĐIỀU HƯỚNG NHANH
        ======================================================================= */}
        <div className="flex items-center justify-center gap-2 mt-2 mb-8">
          {flowNodes.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              aria-label={`Jump to step ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === activeIndex
                  ? 'w-8 bg-lnt-blue shadow-xs'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* =======================================================================
            VÒNG HỒI TIẾP KHÉP KÍN (CLOSED-LOOP BANNER):
            "Feedback and Production Improvement"
            Nối trực tiếp từ Bước 5 quay trở lại Bước 1
        ======================================================================= */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-r from-sky-50 via-white to-emerald-50 border border-sky-200/80 p-4 sm:p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-lnt-blue shrink-0 shadow-2xs">
                  <RotateCcw size={18} className="animate-spin" style={{ animationDuration: '10s' }} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-lnt-blue">
                    Closed-Loop Continuous Flow
                  </div>
                  <div className="text-sm font-bold text-title">
                    Feedback and Production Improvement
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600 bg-white/80 px-3 py-1.5 rounded-xl border border-slate-200/70">
                <span className="font-semibold text-emerald-700">Step 05 Insights</span>
                <ArrowRight size={13} className="text-slate-400" />
                <span className="font-semibold text-lnt-blue">Step 01 Planning</span>
                <CheckCircle2 size={14} className="text-emerald-600 ml-1" />
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
