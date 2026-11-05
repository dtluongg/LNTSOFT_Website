import React from 'react'
import {
  Landmark,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react'
import FinTechArchitectureSuite from '../viewHomePage/Industry/FinTechArchitectureSuite'

export default function FinTechSection() {
  const metrics = [
    { value: '< 1.2s', label: 'API Settlement' },
    { value: '99.98%', label: 'Recon Match Rate' },
    { value: 'ISO 20022', label: 'Banking Compliance' },
  ]

  const bulletPoints = [
    'Cloud-native Open Banking Gateway connecting seamlessly to corporate banking APIs & global payment networks.',
    'Real-time multi-bank automated transaction reconciliation with AI-powered invoice-matching ledger.',
    'High-throughput treasury microservices engineered for automated batch payroll, B2B payouts, and predictive cashflow.',
  ]

  return (
    <section id="fintech" className="py-16 lg:py-24 border-b border-slate-100 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              <Landmark size={14} />
              <span>ENTERPRISE OPEN BANKING & CORPORATE TREASURY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15194f] tracking-tight">
              FinTech Infrastructure & Open Banking Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-2xl">
              High-throughput financial software engineering bridging corporate ERPs with modern banking networks.
            </p>
          </div>

          {/* Metric cards */}
          <div className="flex items-center gap-3 shrink-0">
            {metrics.map((m, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-center min-w-[105px]">
                <div className="text-base sm:text-lg font-bold text-[#15194f]">{m.value}</div>
                <div className="text-[11px] text-slate-500 font-semibold">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FinTech Interactive Platform Suite */}
      <div className="w-full">
        <FinTechArchitectureSuite />
      </div>

      {/* Section Footer: Checklist & CTA */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="space-y-2">
            {bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#15194f] via-[#087bc1] to-[#076da9] hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all hover:gap-2.5 shrink-0 cursor-pointer"
          >
            <span>Request FinTech Platform Demo</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

