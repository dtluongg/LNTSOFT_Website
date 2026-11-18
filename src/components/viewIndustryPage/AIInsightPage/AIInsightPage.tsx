import React, { useEffect } from 'react'
import ApparelSuiteNav from '../common/ApparelSuiteNav'
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
          SUITE NAVIGATOR: BREADCRUMB PHÂN CẤP + 5 PILLS CHUYỂN TRANG TỨC THÌ
          Home > Industry Solutions > Apparel ERP & MES Solution
      ========================================================================= */}
      <ApparelSuiteNav currentSuite="ai-insight" onBack={onBack} />

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
