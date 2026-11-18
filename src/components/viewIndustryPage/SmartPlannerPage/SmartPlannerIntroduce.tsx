import React from 'react'
import {
  CalendarCheck,
  LayoutGrid,
  Clock,
  Sparkles,
} from 'lucide-react'
import IndustryHeroTemplate from '../common/IndustryHeroTemplate'

export default function SmartPlannerIntroduce() {
  // 4 Tính năng cốt lõi của FXPRO Smart Planner
  const plannerFeatures = [
    {
      titleTop: 'Optimize',
      titleBottom: 'Capacity',
      desc: 'Maximize factory resource utilization and sewing line loading.',
      icon: CalendarCheck,
    },
    {
      titleTop: 'Balance',
      titleBottom: 'Sewing Lines',
      desc: 'Eliminate bottlenecks with dynamic SMV and skill-matrix balancing.',
      icon: LayoutGrid,
    },
    {
      titleTop: 'Accelerate',
      titleBottom: 'Lead Times',
      desc: 'Auto-generate production schedules and synchronize critical path T&A.',
      icon: Clock,
    },
    {
      titleTop: 'Mitigate',
      titleBottom: 'Disruptions',
      desc: 'Identify schedule conflicts and material delays proactively with AI.',
      icon: Sparkles,
    },
  ]

  return (
    <IndustryHeroTemplate
      brandCategory="Apparel Smart Planner"
      titleLine1="FXPRO"
      titleLine2="Smart Planner"
      titleLine2Color="#087bc1"
      tagline="Intelligent Production Scheduling & Dynamic Capacity Optimization"
      description="FXPRO Smart Planner empowers garment manufacturers with automated scheduling, real-time capacity balancing, and critical path control. By synchronizing sewing line loading with material readiness and order lead times, Smart Planner eliminates bottlenecks, maximizes line efficiency, and ensures on-time delivery across every factory floor."
      features={plannerFeatures}
      primaryCtaText="Explore Capabilities"
      primaryCtaLink="#capabilities"
      secondaryCtaText="Request a Demo"
      secondaryCtaLink="#contact"
      bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
      bgImageAlt="FXPRO Smart Planner Advanced Manufacturing Scheduling"
    />
  )
}
