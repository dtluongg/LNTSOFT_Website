import React from 'react'
import {
  Bot,
  Zap,
  TrendingUp,
  Trophy,
} from 'lucide-react'
import fxproAiBanner from '../../../assets/components/industryPage/FXPRO_AI.jpg'
import IndustryHeroTemplate from '../common/IndustryHeroTemplate'

export default function AISuiteIntroduce() {
  // 4 Tính năng cốt lõi dạng biểu tượng tròn
  const foundationFeatures = [
    {
      titleTop: 'Automate',
      titleBottom: 'Tasks',
      desc: 'Reduce manual work with intelligent automation.',
      icon: Bot,
    },
    {
      titleTop: 'Accelerate',
      titleBottom: 'Operations',
      desc: 'Speed up daily processes across your business.',
      icon: Zap,
    },
    {
      titleTop: 'Make Smarter',
      titleBottom: 'Decisions',
      desc: 'Turn data into actionable insights.',
      icon: TrendingUp,
    },
    {
      titleTop: 'Drive Higher',
      titleBottom: 'Profitability',
      desc: 'Optimize performance and grow your business.',
      icon: Trophy,
    },
  ]

  return (
    <IndustryHeroTemplate
      brandCategory="Apparel AI Suite"
      titleLine1="FXPRO"
      titleLine2="AI Suite"
      titleLine2Color="#087bc1"
      tagline="Work Smarter. Deliver Faster. Drive Higher Profitability."
      description="The FXPRO AI Suite empowers businesses to reduce manual workloads, accelerate daily operations, and make smarter, data-driven decisions. By eliminating operational bottlenecks and streamlining workflows, AI helps teams work smarter, deliver faster, and drive higher profitability."
      features={foundationFeatures}
      primaryCtaText="Explore Capabilities"
      primaryCtaLink="#capabilities"
      secondaryCtaText="Request a Demo"
      secondaryCtaLink="#contact"
      bgImage={fxproAiBanner}
      bgImageAlt="FXPRO AI Suite Smart Garment Factory"
    />
  )
}
