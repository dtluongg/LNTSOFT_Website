import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Factory,
  Scissors,
  Landmark,
  ArrowDown,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react'

interface IndustryHeroProps {
  onSelectIndustry?: (id: string) => void
}

export default function IndustryHero({ onSelectIndustry }: IndustryHeroProps) {
  const scrollTo = (id: string) => {
    if (onSelectIndustry) {
      onSelectIndustry(id)
      return
    }
    const el = document.getElementById(id)
    if (el) {
      const navOffset = 90
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative border-b border-slate-100 bg-gradient-to-b from-sky-50/50 via-white to-slate-50/40 pt-20 pb-14 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-sky-200/30 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-blue-100/35 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/25 bg-[#087bc1]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#087bc1] shadow-xs"
          >
            <Layers size={13} />
            <span>SPECIALIZED INDUSTRY ENGINEERING</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#15194f] tracking-tight leading-tight"
          >
            Purpose-Built ERP & Software Suites For High-Mix Industries
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            Eliminate operational silos with industry-tailored platforms engineered to solve deep manufacturing bottlenecks, fast-turnaround apparel execution, and high-throughput corporate FinTech.
          </motion.p>

          {/* Quick Jump Industry Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={() => scrollTo('manufacturing-erp')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm text-xs sm:text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-[#087bc1]/50 cursor-pointer"
            >
              <Factory size={16} className="text-[#087bc1]" />
              <span>Manufacturing ERP</span>
              <ArrowDown size={13} className="text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('apparel')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm text-xs sm:text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-[#087bc1]/50 cursor-pointer"
            >
              <Scissors size={16} className="text-amber-500" />
              <span>Apparel ERP & MES</span>
              <ArrowDown size={13} className="text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('fintech')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm text-xs sm:text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-[#087bc1]/50 cursor-pointer"
            >
              <Landmark size={16} className="text-emerald-600" />
              <span>FinTech Solutions</span>
              <ArrowDown size={13} className="text-slate-400" />
            </button>
          </motion.div>

          {/* Telemetry / Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-600" />
              <span>Enterprise Grade Reliability</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap size={15} className="text-[#087bc1]" />
              <span>Real-Time Operational Sync</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={15} className="text-amber-500" />
              <span>20+ Years Domain Engineering</span>
            </span>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

