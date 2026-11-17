import React, { useEffect } from 'react'
import { ArrowLeft, ChevronRight, Home } from 'lucide-react'
import AIInsightIntroduce from './AIInsightIntroduce'
import AIInsightCapabilities from './AIInsightCapabilities'
import AIInsightWorkflow from './AIInsightWorkflow'
import AIInsightBenefits from './AIInsightBenefits'
import AIInsightFinal from './AIInsightFinal'

interface AIInsightPageProps {
  onBack?: () => void
}

export default function AIInsightPage({ onBack }: AIInsightPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* =========================================================================
          BREADCRUMB NAVIGATION: Đồng bộ chuẩn mực với AI Suite Page
      ========================================================================= */}
      <div className="pt-20 sm:pt-24 pb-3.5 bg-slate-50/90 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 flex-wrap">
            <a href="#" className="hover:text-lnt-blue flex items-center gap-1 transition-colors">
              <Home size={13} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="text-slate-400" />
            <a href="#industry" className="hover:text-lnt-blue transition-colors">
              Industry Solutions
            </a>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-lnt-blue font-bold">FXPRO AI Insight</span>
          </nav>

          <a
            href="#industry"
            onClick={(e) => {
              if (onBack) {
                e.preventDefault()
                onBack()
              }
            }}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-lnt-blue transition-colors px-3 py-1.5 rounded-full hover:bg-white border border-transparent hover:border-slate-200 cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to Industry</span>
          </a>
        </div>
      </div>

      {/* =========================================================================
          PHẦN 1: HERO / INTRODUCE (Áp dụng chung khung Template chuẩn)
      ========================================================================= */}
      <AIInsightIntroduce />

      {/* =========================================================================
          PHẦN 2: AI-POWERED INSIGHT CAPABILITIES (4 Cột mốc Năng lực Trí tuệ)
      ========================================================================= */}
      <AIInsightCapabilities />

      {/* =========================================================================
          PHẦN 3: HOW FXPRO INSIGHT WORKS (Sơ đồ luồng 4 trạm khép kín)
      ========================================================================= */}
      <AIInsightWorkflow />

      {/* =========================================================================
          PHẦN 4: KEY BUSINESS BENEFITS (Quả cầu quỹ đạo 6 lợi ích chiến lược)
      ========================================================================= */}
      <AIInsightBenefits />

      {/* =========================================================================
          PHẦN 5: FINAL CTA & CONVERSION (The Executive Aurora Portal)
      ========================================================================= */}
      <AIInsightFinal />
    </div>
  )
}
