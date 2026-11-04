import React from 'react'
import { motion } from 'framer-motion'
import {
  Factory,
  CheckCircle2,
  ArrowUpRight,
  BarChart3,
  TrendingDown,
  Layers,
  Sparkles,
} from 'lucide-react'
import industry1 from '../../assets/components/productPage/industry1.png'

export default function ManufacturingSection() {
  const metrics = [
    { value: 'End-to-End', label: 'Factory Integration' },
    { value: 'Real-Time', label: 'Material Visibility' },
    { value: '↓ 24%', label: 'Production Cost' },
  ]

  const biReports = [
    'Production performance & yield reports',
    'Real-time raw material inventory analytics',
    'Manufacturing cost & standard variance reports',
    'Operational KPI & machine load dashboards',
    'Executive decision-support intelligence',
    'Automated scrap & waste reduction logs',
  ]

  const keyPoints = [
    'Connects all factory departments into a unified system for full operational governance.',
    'End-to-end traceability from raw material procurement to finished goods warehouse.',
    'Minimizes production costs, eliminates machine downtime, and accelerates order completion.',
  ]

  return (
    <section id="manufacturing-erp" className="py-16 lg:py-24 border-b border-slate-100 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/20 bg-[#087bc1]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#087bc1] mb-2">
              <Factory size={14} />
              <span>ENTERPRISE RESOURCE PLANNING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#15194f] tracking-tight">
              Manufacturing ERP Solution
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-2xl">
              End-to-end factory management engineered specifically for high-mix manufacturing companies.
            </p>
          </div>

          {/* Metric cards */}
          <div className="flex items-center gap-3 shrink-0">
            {metrics.map((m, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-center min-w-[105px]">
                <div className="text-base sm:text-lg font-black text-[#15194f]">{m.value}</div>
                <div className="text-[11px] text-slate-500 font-semibold">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-10">
          
          {/* Left Column: Description & BI Card */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">
              <span className="font-bold text-[#15194f]">LNT Manufacturing ERP</span> provides a centralized management operating system tailored for industrial manufacturers. It orchestrates every operational step — from procurement indents and multi-level BOM explosions to shop-floor scheduling, quality audits, and shipment fulfillment.
            </p>
            
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              By connecting departments into one synchronized data pipeline, LNT ERP delivers{' '}
              <span className="font-semibold text-[#087bc1]">real-time visibility</span>, reduces material scrap, optimizes machine uptime, and provides senior leadership with actionable business intelligence.
            </p>

            {/* Management Reporting & BI card */}
            <div className="rounded-2xl border border-[#087bc1]/25 bg-gradient-to-br from-[#087bc1]/8 to-transparent p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#087bc1]/15 text-[#087bc1]">
                  <BarChart3 size={16} />
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15194f]">
                  Management Reporting & Business Intelligence
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {biReports.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#087bc1] shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2 pt-2">
              {keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-[#087bc1] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#087bc1] hover:bg-[#076da9] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all hover:gap-2.5 cursor-pointer"
              >
                <span>Request Manufacturing ERP Consultation</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: High-Res Dashboard Showcase */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900">
            <img
              src={industry1}
              alt="LNT Manufacturing ERP Dashboard Showcase"
              className="w-full h-auto max-h-[420px] object-contain mx-auto transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-[#15194f]/90 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LNT Insight • Smart Factory Analytics
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

