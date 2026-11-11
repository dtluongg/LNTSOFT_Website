import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Factory,
  Shirt,
  Landmark,
  ArrowDown,
  Layers,
  ShieldCheck,
  RefreshCw,
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
    <div className="relative border-b border-slate-100 bg-gradient-to-b from-sky-50/50 via-white to-slate-50/40 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      
      {/* Soft Ambient Brand Aura: Ánh sáng lan tỏa đa sắc mềm mại */}
      <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[380px] w-[750px] rounded-full bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-indigo-100/20 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-cyan-100/30 blur-[110px]" />
      <div className="pointer-events-none absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-sky-100/30 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 1. Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/25 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-xs"
          >
            <Layers size={13} className="text-lnt-blue" />
            <span>POWERING INDUSTRIES THROUGH INNOVATION</span>
          </motion.div>

          {/* 2. Main Headline (H1): Dùng biến token text-title và text-lnt-navy */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-6 text-3xl sm:text-4xl lg:text-[46px] font-bold text-title tracking-tight leading-[1.18] font-heading"
          >
            <span>Industry-Specific Solutions.</span>
            <span className="block mt-1 sm:mt-1.5 text-lnt-navy">
              Smarter Business. Stronger Growth.
            </span>
          </motion.h1>

          {/* 3. Tagline (Thẻ p): Bề ngang max-w-3xl khớp đúng độ dài dòng 2 header, căn lề text-justify */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="mt-5 max-w-3xl w-full mx-auto text-justify text-base sm:text-lg text-slate-600 leading-relaxed font-sans"
          >
            LNTSOFT empowers businesses across diverse industries with intelligent enterprise software solutions. We combine industry knowledge, innovative technology, and practical expertise to help organizations streamline operations, improve efficiency, and accelerate digital transformation.
          </motion.p>

          {/* 4. Quick Jump Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            className="mt-10"
          >
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-heading">
              EXPLORE OUR INDUSTRY SOLUTIONS
            </h2>
          </motion.div>

          {/* =========================================================================
              5. ĐỀ XUẤT 3: 3 VIÊN THUỐC ĐỘC LẬP (Không đóng khung lồng nhau, thoáng mắt, chữ đầy đủ 100%)
          ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
          >
            {/* Mục 1: Manufacturing ERP */}
            <button
              type="button"
              onClick={() => scrollTo('manufacturing-erp')}
              className="group inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-sky-50/70 border border-slate-200/90 hover:border-lnt-blue/50 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 text-lnt-blue border border-sky-100 group-hover:bg-lnt-blue group-hover:text-white transition-all shadow-2xs">
                <Factory size={16} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-lnt-navy group-hover:text-lnt-blue transition-colors whitespace-nowrap">
                Manufacturing ERP
              </span>
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100/70 group-hover:bg-lnt-blue/10 text-slate-400 group-hover:text-lnt-blue transition-colors">
                <ArrowDown size={12} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </div>
            </button>

            {/* Mục 2: Apparel ERP & MES */}
            <button
              type="button"
              onClick={() => scrollTo('apparel')}
              className="group inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-amber-50/70 border border-slate-200/90 hover:border-amber-400/60 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-2xs">
                <Shirt size={16} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-lnt-navy group-hover:text-amber-600 transition-colors whitespace-nowrap">
                Apparel ERP & MES
              </span>
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100/70 group-hover:bg-amber-500/10 text-slate-400 group-hover:text-amber-600 transition-colors">
                <ArrowDown size={12} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </div>
            </button>

            {/* Mục 3: FinTech Solutions */}
            <button
              type="button"
              onClick={() => scrollTo('fintech')}
              className="group inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-emerald-50/70 border border-slate-200/90 hover:border-emerald-400/60 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-2xs">
                <Landmark size={16} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-lnt-navy group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                FinTech Solutions
              </span>
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100/70 group-hover:bg-emerald-600/10 text-slate-400 group-hover:text-emerald-700 transition-colors">
                <ArrowDown size={12} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </div>
            </button>
          </motion.div>

          {/* =========================================================================
              6. TELEMETRY / TRUST BADGES
          ========================================================================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="mt-12 pt-6 border-t border-slate-200/70 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-500 font-medium"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-600" />
              <span>Enterprise-Grade Reliability</span>
            </span>
            <span className="flex items-center gap-1.5">
              <RefreshCw size={15} className="text-[#087bc1]" />
              <span>Real-Time Operational Integration</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={15} className="text-amber-500" />
              <span>20+ Years of Industry Expertise</span>
            </span>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
