import React, { useEffect } from 'react'
import ApparelSuiteNav from '../common/ApparelSuiteNav'
import AISuiteIntroduce from './AISuiteIntroduce'
import AISuiteCapabilities from './AISuiteCapabilities'
import AISuiteWorkflow from './AISuiteWorkflow'
import AISuiteBenefits from './AISuiteBenefits'
import AISuiteFinal from './AISuiteFinal'

interface AISuitePageProps {
  onBack?: () => void
  onNavigate?: (page: any, targetId?: string) => void
}

export default function AISuitePage({ onBack, onNavigate }: AISuitePageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* =========================================================================
          SUITE NAVIGATOR: BREADCRUMB PHÂN CẤP + 5 PILLS CHUYỂN TRANG TỨC THÌ
          Home > Industry Solutions > Apparel ERP & MES Solution
      ========================================================================= */}
      <ApparelSuiteNav currentSuite="ai-suite" onBack={onBack} onNavigate={onNavigate} />

      {/* PHẦN 1: INTRODUCE (Hero toàn cảnh tràn trang) */}
      <AISuiteIntroduce />

      {/* PHẦN 2: CAPABILITIES (Nội dung cốt lõi: Order Automation & Tech Pack to BOM) */}
      <AISuiteCapabilities />

      {/* PHẦN 3: WORKFLOW (Sơ đồ tiến trình: How FXPRO AI Works) */}
      <AISuiteWorkflow />

      {/* PHẦN 4: KEY BUSINESS BENEFITS (Cụm Vệ tinh Hội tụ: Make Every Operation Smarter with AI) */}
      <AISuiteBenefits />

      {/* PHẦN 5: FINAL CTA & CONVERSION (The Executive Aurora Portal) */}
      <AISuiteFinal />
    </div>
  )
}
