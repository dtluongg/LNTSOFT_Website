import React, { useEffect } from 'react'
import ApparelSuiteNav from '../common/ApparelSuiteNav'
import SmartFactoryIntroduce from './SmartFactoryIntroduce'
import SmartFactoryCapabilities from './SmartFactoryCapabilities'
import SmartFactoryWorkflow from './SmartFactoryWorkflow'
import SmartFactoryBenefits from './SmartFactoryBenefits'
import SmartFactoryFinal from './SmartFactoryFinal'

interface SmartFactoryPageProps {
  onBack?: () => void
  onNavigate?: (page: any, targetId?: string) => void
}

export default function SmartFactoryPage({ onBack, onNavigate }: SmartFactoryPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* =========================================================================
          SUITE NAVIGATOR: BREADCRUMB PHÂN CẤP + 5 PILLS CHUYỂN TRANG TỨC THÌ
          Home > Industry Solutions > Apparel ERP & MES Solution
      ========================================================================= */}
      <ApparelSuiteNav currentSuite="smart-factory" onBack={onBack} onNavigate={onNavigate} />

      {/* =========================================================================
          PHẦN 1: HERO / INTRODUCE (Intelligent Manufacturing for Smart Sewing Operations)
      ========================================================================= */}
      <SmartFactoryIntroduce />

      {/* =========================================================================
          PHẦN 2: CAPABILITIES (Connected Intelligence Across Sewing Operations)
          - Bento Grid 5 năng lực không số đếm, hài hòa & sang trọng
      ========================================================================= */}
      <SmartFactoryCapabilities />

      {/* =========================================================================
          PHẦN 3: WORKFLOW / MINIMAP SƠ ĐỒ (How the Smart Sewing Factory Works)
          - Sơ đồ mạch 5 bước khép kín (Continuous Data Stream & Closed-Loop Feedback)
      ========================================================================= */}
      <SmartFactoryWorkflow />

      {/* =========================================================================
          PHẦN 4: KEY BUSINESS BENEFITS (Make Every Sewing Operation More Productive)
          - Bố cục 3 cột đối xứng: Trái (3 thẻ) - Hub Smart Factory (Trung tâm) - Phải (3 thẻ)
      ========================================================================= */}
      <SmartFactoryBenefits />

      {/* =========================================================================
          PHẦN 5: FINAL CTA (Transform Your Sewing Factory into a Smart Factory)
          - Executive Aurora Portal: Nền Navy chiều sâu cực quang + Kính mờ Glassmorphism
      ========================================================================= */}
      <SmartFactoryFinal />
    </div>
  )
}
