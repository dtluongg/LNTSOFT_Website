import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Landmark,
  Layers,
  Scissors,
  Sparkles,
} from 'lucide-react'
import ApparelArchitectureSuite from './ApparelArchitectureSuite'

function IndustryFocus() {
  return (
    <section id="industries" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/20 bg-[#087bc1]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#087bc1]">
            <Layers size={13} />
            INDUSTRY SPECIALIZATION
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#15194f] sm:text-4xl lg:text-5xl">
            Engineered for High-Stakes Industries
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Generic ERP systems fall short when specialized industry complexities arise.
            LNTSoft delivers domain-specific engineering battle-tested for manufacturing and finance.
          </p>
        </div>

        {/* =========================================================================
            FLAGSHIP 1: APPAREL & GARMENT MANUFACTURING EXECUTION
        ========================================================================= */}
        <div className="mt-16 w-full">
          {/* Top Header & Metrics Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/20 bg-sky-50 px-3 py-1 text-xs font-semibold text-[#087bc1]">
                <Scissors size={14} />
                Textile & Garment Production MES
              </div>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-[#15194f] sm:text-4xl">
                Apparel ERP & Manufacturing Execution
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                End-to-end garment production management designed to handle the fast-paced,
                high-mix realities of modern textile factories. Powered by the{' '}
                <strong>FX PRO Product Suite</strong>.
              </p>
            </div>

            {/* Metric Benchmarks */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 px-4 py-3 text-center shadow-2xs">
                <div className="text-xl sm:text-2xl font-bold text-[#15194f]">+28%</div>
                <div className="text-[11px] text-slate-500 font-medium">Sewing Efficiency</div>
              </div>
              <div className="rounded-2xl bg-sky-50/70 border border-sky-100 px-4 py-3 text-center shadow-2xs">
                <div className="text-xl sm:text-2xl font-bold text-[#087bc1]">-35%</div>
                <div className="text-[11px] text-slate-500 font-medium">Fabric Wastage</div>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 px-4 py-3 text-center shadow-2xs">
                <div className="text-xl sm:text-2xl font-bold text-[#15194f]">100%</div>
                <div className="text-[11px] text-slate-500 font-medium">Traceability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sơ đồ kiến trúc 4 tầng xếp lớp chuẩn như trong Microsoft Word trên nền xanh cyan của web cũ */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-x-auto bg-[#259fd2] py-8 sm:py-10 my-6 shadow-inner">
        <ApparelArchitectureSuite />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Action Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200/80 pt-6">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles size={14} className="text-[#087bc1]" />
            <span>Full modular interoperability across sewing lines, warehouses, and executive accounting.</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#087bc1] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#087bc1]/20 transition-all hover:bg-[#076da9] cursor-pointer"
          >
            <span>Request Apparel Case Study</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* =========================================================================
            FLAGSHIP 2: FINTECH & FINANCIAL MANAGEMENT
        ========================================================================= */}
        <div className="mt-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-[#087bc1]/40 hover:shadow-xl hover:shadow-blue-900/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#163d91]">
                    <Landmark size={24} />
                  </span>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#163d91]">
                    Banking & FinTech Core
                  </span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#15194f]">
                  FinTech Integration & Core Banking Systems
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  Banking-grade financial architecture tailored for microfinance, leasing,
                  wealth management, and high-frequency digital payment settlement gateways.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={16} className="shrink-0 text-[#163d91] mt-0.5" />
                    <span>
                      <strong>Automated Multi-Entity Settlement:</strong> Real-time reconciliation across subsidiary branches and currencies.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={16} className="shrink-0 text-[#163d91] mt-0.5" />
                    <span>
                      <strong>Regulatory & Tax Compliance:</strong> Automated audit trails conforming to strict banking governance.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={16} className="shrink-0 text-[#163d91] mt-0.5" />
                    <span>
                      <strong>High-Security Architecture:</strong> Hardware encryption, dual-control authorization, and zero-trust APIs.
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="group/btn inline-flex items-center gap-2 rounded-xl bg-[#15194f] px-5 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#163d91] cursor-pointer"
                  >
                    <span>Consult FinTech Architects</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Proven Metric Badges & Assurance */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-sm space-y-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Mission-Critical Benchmarks
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                      <div className="text-xl font-bold text-[#15194f]">10k+</div>
                      <div className="text-[11px] text-slate-500">Txns / Sec</div>
                    </div>
                    <div className="rounded-xl bg-blue-50/50 p-3 border border-blue-100">
                      <div className="text-xl font-bold text-[#163d91]">ISO 20022</div>
                      <div className="text-[11px] text-slate-500">Compliant Core</div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                      <div className="text-xl font-bold text-[#15194f]">Zero</div>
                      <div className="text-[11px] text-slate-500">Discrepancy</div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 text-xs text-slate-600 leading-relaxed">
                    Designed for high-throughput transactional resilience with microservices architecture and PCI-DSS compliant workflows.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IndustryFocus
