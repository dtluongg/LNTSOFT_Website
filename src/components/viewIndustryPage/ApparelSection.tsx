import React from 'react'
import {
  Scissors,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import ApparelArchitectureSuite from '../viewHomePage/Industry/ApparelArchitectureSuite'

export default function ApparelSection() {
  const metrics = [
    { value: '+28%', label: 'Sewing Efficiency' },
    { value: '-35%', label: 'Fabric Wastage' },
    { value: '100%', label: 'Order Traceability' },
  ]

  const bulletPoints = [
    'End-to-end garment production management tailored for fast-paced, high-mix apparel realities.',
    'Real-time sewing line balancing, style sampling approval workflow, and defect heatmap inspection.',
    'Seamless modular interoperability across fabric warehouse, cutting room, sewing lines, and ERP.',
  ]

  return (
    <section id="apparel" className="py-16 lg:py-24 border-b border-slate-100 bg-slate-50/50 scroll-mt-20 overflow-visible">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              <Scissors size={14} />
              <span>TEXTILE & GARMENT PRODUCTION MES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#15194f] tracking-tight">
              Apparel ERP & Manufacturing Execution (MES)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-2xl">
              The industry-proven FX PRO Product Suite orchestrating 22 specialized apparel modules from order intake to shipment.
            </p>
          </div>

          {/* Metric cards */}
          <div className="flex items-center gap-3 shrink-0">
            {metrics.map((m, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200 shadow-xs px-4 py-2.5 text-center min-w-[105px]">
                <div className="text-base sm:text-lg font-black text-[#15194f]">{m.value}</div>
                <div className="text-[11px] text-slate-500 font-semibold">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3D Oval Architecture Suite (Full Bleed Cyan Ribbon) */}
      <div className="w-full bg-[#259fd2] py-2 shadow-inner overflow-visible relative">
        <ApparelArchitectureSuite />
      </div>

      {/* Section Footer: Checklist & CTA */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="space-y-2">
            {bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 size={16} className="text-[#087bc1] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#087bc1] hover:bg-[#076da9] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all hover:gap-2.5 shrink-0 cursor-pointer"
          >
            <span>Request Apparel Case Study</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

