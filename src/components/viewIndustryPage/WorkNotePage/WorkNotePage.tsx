import React, { useEffect } from 'react'
import ApparelSuiteNav from '../common/ApparelSuiteNav'
import WorkNoteIntroduce from './WorkNoteIntroduce'
import WorkNoteCapabilities from './WorkNoteCapabilities'
import WorkNoteWorkflow from './WorkNoteWorkflow'
import WorkNoteBenefits from './WorkNoteBenefits'
import WorkNoteFinal from './WorkNoteFinal'

interface WorkNotePageProps {
  onBack?: () => void
  onNavigate?: (page: any, targetId?: string) => void
}

export default function WorkNotePage({ onBack, onNavigate }: WorkNotePageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* =========================================================================
          SUITE NAVIGATOR: BREADCRUMB PHAN CAP + 5 PILLS CHUYEN TRANG TUC THI
          Home > Industry Solutions > Apparel ERP & MES Solution
      ========================================================================= */}
      <ApparelSuiteNav currentSuite="worknote" onBack={onBack} onNavigate={onNavigate} />

      {/* =========================================================================
          PHAN 1: HERO / INTRODUCE (Ap dung chung khung Template chuan)
      ========================================================================= */}
      <WorkNoteIntroduce />

      {/* =========================================================================
          PHAN 2: CAPABILITIES (4 Cot moc Nang luc Cong nghe & Ket noi San xuat)
      ========================================================================= */}
      <WorkNoteCapabilities />

      {/* =========================================================================
          PHAN 3: WORKFLOW (So do luong 4 tram khep kin)
      ========================================================================= */}
      <WorkNoteWorkflow />

      {/* =========================================================================
          PHAN 4: KEY BUSINESS BENEFITS (6 Loi ich chien luoc chuyen doi so)
      ========================================================================= */}
      <WorkNoteBenefits />

      {/* =========================================================================
          PHAN 5: FINAL CTA & CONVERSION (The Executive Aurora Portal)
      ========================================================================= */}
      <WorkNoteFinal />
    </div>
  )
}
