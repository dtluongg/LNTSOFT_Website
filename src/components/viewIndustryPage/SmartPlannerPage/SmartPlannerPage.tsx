import React, { useEffect } from 'react'
import ApparelSuiteNav from '../common/ApparelSuiteNav'
import SmartPlannerIntroduce from './SmartPlannerIntroduce'
import SmartPlannerCapabilities from './SmartPlannerCapabilities'
import SmartPlannerWorkflow from './SmartPlannerWorkflow'
import SmartPlannerBenefits from './SmartPlannerBenefits'
import SmartPlannerFinal from './SmartPlannerFinal'

interface SmartPlannerPageProps {
  onBack?: () => void
}

export default function SmartPlannerPage({ onBack }: SmartPlannerPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* =========================================================================
          SUITE NAVIGATOR: BREADCRUMB PHÂN CẤP + 5 PILLS CHUYỂN TRANG TỨC THÌ
          Home > Industry Solutions > Apparel ERP & MES Solution
      ========================================================================= */}
      <ApparelSuiteNav currentSuite="smart-planner" onBack={onBack} />

      {/* =========================================================================
          PHẦN 1: HERO / INTRODUCE (Áp dụng chung khung Template chuẩn)
      ========================================================================= */}
      <SmartPlannerIntroduce />

      {/* =========================================================================
          PHẦN 2: CAPABILITIES (FXPRO OPEZE Planner Capabilities)
          - Phần 1: Production Capacity Planning
          - Phần 2: Production Scheduling
      ========================================================================= */}
      <SmartPlannerCapabilities />

      {/* =========================================================================
          PHẦN 3: WORKFLOW / MINDMAP (How FXPRO Opteze Planner Works)
          - Trạm 1: Capacity Plan (Commercial Inquiries, Plant Allocation, Reports & Confirmations)
          - Trạm 2: Detail Plan (Machine Allocation & 5 Production Deliverables)
      ========================================================================= */}
      <SmartPlannerWorkflow />

      {/* =========================================================================
          PHẦN 4: KEY BUSINESS BENEFITS (FXPRO Opteze PPC Excellence - 7 Pillars)
          - Better Plan • Better Execution • Better Tomorrow
      ========================================================================= */}
      <SmartPlannerBenefits />

      {/* =========================================================================
          PHẦN 5: FINAL CTA & CONVERSION (The Executive Aurora Portal)
      ========================================================================= */}
      <SmartPlannerFinal />
    </div>
  )
}
