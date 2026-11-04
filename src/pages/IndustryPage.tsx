import React, { useEffect } from 'react'
import IndustryHero from '../components/viewIndustryPage/IndustryHero'
import ManufacturingSection from '../components/viewIndustryPage/ManufacturingSection'
import ApparelSection from '../components/viewIndustryPage/ApparelSection'
import FinTechSection from '../components/viewIndustryPage/FinTechSection'
import IndustryCTA from '../components/viewIndustryPage/IndustryCTA'
import Contact from '../components/viewHomePage/Contact'

export interface IndustryPageProps {
  initialTargetId?: string
}

export default function IndustryPage({ initialTargetId }: IndustryPageProps) {
  useEffect(() => {
    if (initialTargetId && initialTargetId !== 'industry' && initialTargetId !== 'industries') {
      const timer = setTimeout(() => {
        const el = document.getElementById(initialTargetId)
        if (el) {
          const navOffset = 90
          const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset
          window.scrollTo({ top: pos, behavior: 'smooth' })
        }
      }, 150)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [initialTargetId])

  const handleSelectIndustry = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const navOffset = 90
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <div id="industry" className="relative overflow-hidden bg-white text-slate-900 scroll-mt-20">
      <span id="industries" className="sr-only" />
      <IndustryHero onSelectIndustry={handleSelectIndustry} />
      <ManufacturingSection />
      <ApparelSection />
      <FinTechSection />
      <IndustryCTA />
      <Contact />
    </div>
  )
}

