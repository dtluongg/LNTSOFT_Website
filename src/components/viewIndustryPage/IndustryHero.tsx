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

// =========================================================================
// ẢNH NỀN KIẾN TRÚC DOANH NGHIỆP HIỆN ĐẠI (PUBLIC IMAGE TẠM THỜI)
// Bạn có thể dễ dàng thay đổi link ảnh hoặc import ảnh local vào đây sau
// =========================================================================
const DEFAULT_HERO_BG = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80'

interface IndustryHeroProps {
  onSelectIndustry?: (id: string) => void
  bgImage?: string
}

export default function IndustryHero({
  onSelectIndustry,
  bgImage = DEFAULT_HERO_BG,
}: IndustryHeroProps) {
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
    <section className="relative w-full overflow-hidden border-b border-slate-200/80 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      
      {/* =========================================================================
          1. HÌNH ẢNH NỀN TOÀN CẢNH DOANH NGHIỆP PHÍA SAU (FULL-WIDTH HERO BACKGROUND)
          - Hiển thị bao la phía sau chữ (tương tự thiết kế mẫu của KMS Technology)
          - Phủ một lớp sáng quang học nhẹ để giữ độ tươi sáng tự nhiên
      ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="LNTSOFT Industry Enterprise Architecture"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Lớp gradient kính mờ đa chiều để hòa sắc ảnh tự nhiên vào tổng thể */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/25 via-slate-900/15 to-slate-900/35" />
        <div className="absolute inset-0 bg-sky-900/10 backdrop-blur-[1px]" />
      </div>

      {/* =========================================================================
          2. KHUNG KÍNH MỜ CHỮ NỔI BẬT (FROSTED GLASS CONTAINER)
          - Bo góc tròn hiện đại (rounded-3xl), hiệu ứng kính mờ (backdrop-blur-md)
          - Khung trắng sáng giúp toàn bộ chữ, nút bấm đọc rõ ràng 100%
      ========================================================================= */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative rounded-3xl bg-white/90 sm:bg-white/92 backdrop-blur-xl border border-white/95 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3)] ring-1 ring-slate-900/5 p-6 sm:p-10 lg:p-12 text-center overflow-hidden"
        >
          
          {/* Vệt sáng quang học nhẹ ở góc trên của khung kính */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-sky-200/50 via-blue-100/30 to-transparent blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-tl from-emerald-100/40 via-sky-100/20 to-transparent blur-2xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* 1. Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/25 bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-2xs mb-2"
            >
              <Layers size={13} className="text-lnt-blue" />
              <span>POWERING INDUSTRIES THROUGH INNOVATION</span>
            </motion.div>

            {/* 2. Main Headline (H1) */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold text-title tracking-tight leading-[1.2] font-heading"
            >
              <span>Industry-Specific Solutions.</span>
              <span className="block mt-1 sm:mt-1.5 text-lnt-navy">
                Smarter Business. Stronger Growth.
              </span>
            </motion.h1>

            {/* 3. Tagline (Thẻ p) */}
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="mt-8 pt-6 border-t border-slate-200/70"
            >
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                EXPLORE OUR INDUSTRY SOLUTIONS
              </h2>
            </motion.div>

            {/* 5. Ba Viên Thuốc Chuyển Nhanh Ngành Nghề (3 Quick-Jump Pills) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {/* Mục 1: Manufacturing ERP */}
              <button
                type="button"
                onClick={() => scrollTo('manufacturing-erp')}
                className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-slate-50 hover:bg-sky-50/80 border border-slate-200/90 hover:border-lnt-blue/50 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lnt-blue border border-sky-100 group-hover:bg-lnt-blue group-hover:text-white transition-all shadow-2xs">
                  <Factory size={15} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-lnt-navy group-hover:text-lnt-blue transition-colors whitespace-nowrap">
                  Manufacturing ERP
                </span>
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200/60 group-hover:bg-lnt-blue/15 text-slate-400 group-hover:text-lnt-blue transition-colors">
                  <ArrowDown size={11} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </div>
              </button>

              {/* Mục 2: Apparel ERP & MES */}
              <button
                type="button"
                onClick={() => scrollTo('apparel')}
                className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-slate-50 hover:bg-amber-50/80 border border-slate-200/90 hover:border-amber-400/60 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-amber-500 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-2xs">
                  <Shirt size={15} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-lnt-navy group-hover:text-amber-600 transition-colors whitespace-nowrap">
                  Apparel ERP & MES
                </span>
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200/60 group-hover:bg-amber-500/15 text-slate-400 group-hover:text-amber-600 transition-colors">
                  <ArrowDown size={11} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </div>
              </button>

              {/* Mục 3: FinTech Solutions */}
              <button
                type="button"
                onClick={() => scrollTo('fintech')}
                className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-slate-50 hover:bg-emerald-50/80 border border-slate-200/90 hover:border-emerald-400/60 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-emerald-600 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-2xs">
                  <Landmark size={15} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-lnt-navy group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                  FinTech Solutions
                </span>
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200/60 group-hover:bg-emerald-600/15 text-slate-400 group-hover:text-emerald-700 transition-colors">
                  <ArrowDown size={11} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </div>
              </button>
            </motion.div>

            {/* 6. TELEMETRY / TRUST BADGES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="mt-8 pt-5 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 sm:gap-x-8 text-xs text-slate-500 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Enterprise-Grade Reliability</span>
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw size={14} className="text-lnt-blue" />
                <span>Real-Time Operational Integration</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-500" />
                <span>20+ Years of Industry Expertise</span>
              </span>
            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}
