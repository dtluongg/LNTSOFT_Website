import React from 'react'
import {
  Activity,
  Sliders,
  ShieldCheck,
  BarChart3,
} from 'lucide-react'
import IndustryHeroTemplate from '../common/IndustryHeroTemplate'

export interface SmartFactoryIntroduceProps {
  bgImage?: string
}

export default function SmartFactoryIntroduce({
  bgImage = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
}: SmartFactoryIntroduceProps) {
  // 4 Tính năng cốt lõi đúc kết từ nội dung người dùng cung cấp
  const factoryFeatures = [
    {
      titleTop: 'Real-Time',
      titleBottom: 'Workstation Tracking',
      desc: 'Track live sewing floor output and operator work order execution.',
      icon: Activity,
    },
    {
      titleTop: 'Optimize',
      titleBottom: 'Line Performance',
      desc: 'Balance sewing bottlenecks and maximize shop-floor throughput.',
      icon: Sliders,
    },
    {
      titleTop: 'Quality',
      titleBottom: 'Monitoring',
      desc: 'Real-time inline defect detection and end-of-line QC audit.',
      icon: ShieldCheck,
    },
    {
      titleTop: 'Production',
      titleBottom: 'Analytics',
      desc: 'Turn floor telemetry into actionable managerial intelligence.',
      icon: BarChart3,
    },
  ]

  return (
    <IndustryHeroTemplate
      brandCategory="Apparel Smart Factory"
      titleLine1="FXPRO"
      titleLine2="Smart Factory"
      titleLine2Color="#087bc1"
      tagline="Intelligent Manufacturing for Smart Sewing Operations"
      description="Transform sewing operations into a connected, data-driven manufacturing environment with the FXPRO Smart Sewing Factory. FXPRO Smart Sewing Factory integrates production planning, real-time sewing workstation Production tracking, quality monitoring and production analytics into one connected manufacturing environment. It empowers apparel manufacturers to improve productivity, optimize production line performance, reduce operational inefficiencies and make data-driven decisions."
      features={factoryFeatures}
      primaryCtaText="Explore Capabilities"
      primaryCtaLink="#capabilities"
      secondaryCtaText="Request a Demo"
      secondaryCtaLink="#contact"
      bgImage={bgImage}
      bgImageAlt="FXPRO Smart Sewing Factory Intelligent Manufacturing"
    />
  )
}
