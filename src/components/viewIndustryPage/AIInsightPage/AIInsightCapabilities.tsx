import React from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import aiInsight1 from '../../../assets/components/industryPage/AI_INSIGHT/AI_Insight1.png'
import aiInsight2 from '../../../assets/components/industryPage/AI_INSIGHT/AI_Insight2.png'
import aiInsight3 from '../../../assets/components/industryPage/AI_INSIGHT/AI_Insight3.png'
import aiInsight4 from '../../../assets/components/industryPage/AI_INSIGHT/AI_Insight4.png'

interface CapabilitySection {
  id: string
  title: string
  desc: string
  bullets: string[]
  themeColor: string
  glowColor: string
  badgeColor: string
  image: string
  imageAlt: string
  imageOnRight: boolean
}

// 4 Phần năng lực cốt lõi - Mỗi nội dung đi kèm 1 ảnh giao diện thực tế
const capabilitySections: CapabilitySection[] = [
  {
    id: '01',
    title: 'Intelligent Business Performance Analysis',
    desc: 'Analyze business performance across departments and operational functions.',
    bullets: [
      'Monitor key business performance indicators.',
      'Analyze operational trends and performance.',
      'Identify areas requiring management attention.',
    ],
    themeColor: '#087bc1',
    glowColor: 'from-sky-200/40 via-blue-100/30 to-transparent',
    badgeColor: 'bg-sky-50 text-[#087bc1] border-sky-200/80',
    image: aiInsight1,
    imageAlt: 'FXPRO Intelligent Business Performance Analysis Dashboard',
    imageOnRight: true,
  },
  {
    id: '02',
    title: 'AI-Powered Data Analysis & Anomaly Detection',
    desc: 'Identify unusual patterns, discrepancies, and potential operational issues.',
    bullets: [
      'Detect unusual data patterns.',
      'Highlight performance deviations.',
      'Identify potential operational risks.',
    ],
    themeColor: '#d97706',
    glowColor: 'from-amber-200/40 via-orange-100/30 to-transparent',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/80',
    image: aiInsight2,
    imageAlt: 'AI-Powered Data Analysis & Anomaly Detection',
    imageOnRight: false,
  },
  {
    id: '03',
    title: 'Intelligent Trend & Forecast Analysis',
    desc: 'Turn historical and current business data into insights that support forward planning.',
    bullets: [
      'Analyze historical performance trends.',
      'Identify emerging business patterns.',
      'Support planning and forecasting decisions',
    ],
    themeColor: '#6366f1',
    glowColor: 'from-indigo-200/40 via-purple-100/30 to-transparent',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    image: aiInsight3,
    imageAlt: 'Intelligent Trend & Forecast Analysis Horizon',
    imageOnRight: true,
  },
  {
    id: '04',
    title: 'AI-Driven Management Insights',
    desc: 'Help management teams understand business performance and make informed decisions.',
    bullets: [
      'Present actionable business insights.',
      'Highlight areas for improvement.',
      'Support faster management decisions.',
    ],
    themeColor: '#059669',
    glowColor: 'from-emerald-200/40 via-teal-100/30 to-transparent',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    image: aiInsight4,
    imageAlt: 'AI-Driven Management Insights & Decision Support',
    imageOnRight: false,
  },
]

export default function AIInsightCapabilities() {
  return (
    <section
      id="capabilities"
      className="w-full bg-white py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Header Khối */}
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16 mb-20 sm:mb-24 lg:mb-28 text-center sm:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-2xs mb-4">
            <Sparkles size={13} className="text-lnt-blue" />
            <span>INTELLIGENCE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15194f] font-heading tracking-tight leading-[1.12]">
            AI-Powered <span className="text-[#087bc1]">Insight Capabilities</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Four specialized intelligence capabilities designed to transform factory-floor and enterprise operations into clear, proactive, data-driven decisions.
          </p>
        </div>
      </div>

      {/* Danh sách 4 phần so le */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16 space-y-24 sm:space-y-32 lg:space-y-36">
        {capabilitySections.map((item, idx) => (
          <div key={item.id} className="relative">
            {/* Đường ngăn cách giữa các phần */}
            {idx > 0 && (
              <div className="absolute -top-12 sm:-top-16 lg:-top-18 left-0 right-0 flex items-center justify-center">
                <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
              {/* Cột Nội dung chữ (5 Cột) */}
              <div
                className={`lg:col-span-5 relative space-y-6 ${
                  item.imageOnRight ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Số Watermark chìm */}
                <span className="pointer-events-none absolute -top-8 -left-4 text-7xl sm:text-8xl font-black text-slate-100 select-none font-heading -z-10 opacity-70">
                  {item.id}
                </span>

                {/* Badge tiêu đề */}
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border shadow-2xs ${item.badgeColor}`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.themeColor }}
                    />
                    <span>{item.title}</span>
                  </span>
                </div>

                {/* Mô tả */}
                <p className="text-base sm:text-[16.5px] text-slate-600 font-normal leading-relaxed">
                  {item.desc}
                </p>

                {/* 3 Gạch đầu dòng */}
                <div className="pt-2 space-y-3.5 border-t border-slate-100">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3.5">
                      <span
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full shadow-2xs"
                        style={{
                          backgroundColor: `${item.themeColor}15`,
                          color: item.themeColor,
                        }}
                      >
                        <CheckCircle2 size={14} className="stroke-[2.5]" />
                      </span>
                      <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cột Hình ảnh cửa sổ ứng dụng (7 Cột) */}
              <div
                className={`lg:col-span-7 relative ${
                  item.imageOnRight ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Quầng sáng quang học sau ảnh */}
                <div
                  className={`pointer-events-none absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-tr ${item.glowColor} blur-[70px] -z-10`}
                />

                {/* Cửa sổ ứng dụng kiểu macOS */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xl sm:shadow-2xl group">
                  {/* Thanh tiêu đề cửa sổ */}
                  <div className="bg-slate-50/95 border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                      <span className="text-[11px] font-mono text-slate-500 font-semibold pl-2 truncate max-w-[220px] sm:max-w-none">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>FXPRO-Insight</span>
                    </div>
                  </div>

                  {/* Ảnh hệ thống thực tế */}
                  <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[400px] xl:h-[430px] bg-slate-900 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
