import React from 'react'
import {
  BarChart3,
  AlertTriangle,
  TrendingUp,
  Sparkles,
} from 'lucide-react'
import IndustryHeroTemplate from '../common/IndustryHeroTemplate'

export default function AIInsightIntroduce() {
  // 4 Tính năng cốt lõi được rút gọn trực tiếp từ nội dung người dùng cung cấp
  const insightFeatures = [
    {
      titleTop: 'Understand',
      titleBottom: 'Performance',
      desc: 'Gain a clearer understanding of overall business and factory performance.',
      icon: BarChart3,
    },
    {
      titleTop: 'Identify',
      titleBottom: 'Issues',
      desc: 'Identify operational issues, bottlenecks, and anomalies early.',
      icon: AlertTriangle,
    },
    {
      titleTop: 'Uncover',
      titleBottom: 'Trends',
      desc: 'Uncover emerging operational and manufacturing trends.',
      icon: TrendingUp,
    },
    {
      titleTop: 'Smarter',
      titleBottom: 'Decisions',
      desc: 'Make smarter, proactive, data-driven management decisions.',
      icon: Sparkles,
    },
  ]

  return (
    <IndustryHeroTemplate
      brandCategory="Apparel AI Insight"
      titleLine1="FXPRO"
      titleLine2="AI Insight"
      titleLine2Color="#087bc1"
      tagline="Turn Business Data into Intelligent Business Decisions"
      description="FXPRO AI Insight Robot transforms complex business and operational data into meaningful, actionable insights. It empowers management teams to gain a clearer understanding of business performance, identify operational issues, uncover emerging trends, and make smarter, data-driven decisions."
      features={insightFeatures}
      primaryCtaText="Explore Capabilities"
      primaryCtaLink="#capabilities"
      secondaryCtaText="Request a Demo"
      secondaryCtaLink="#contact"
      bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
      bgImageAlt="FXPRO AI Insight Executive Analytics Dashboard"
    />
  )
}
