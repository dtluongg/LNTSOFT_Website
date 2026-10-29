import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Landmark,
  Layers,
  Scissors,
} from 'lucide-react'

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

        {/* 2 Flagship Industry Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* =====================================================
              CARD 1: APPAREL & GARMENT MANUFACTURING
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/50 to-sky-50/30 p-8 shadow-sm transition-all duration-300 hover:border-[#087bc1]/40 hover:shadow-xl hover:shadow-blue-900/5"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-[#087bc1]">
                  <Scissors size={24} />
                </span>
                <span className="rounded-full border border-[#087bc1]/20 bg-[#087bc1]/10 px-3 py-1 text-xs font-semibold text-[#087bc1]">
                  Textile & Apparel MES
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#15194f]">
                Apparel ERP & Manufacturing Execution
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                End-to-end garment production management designed to handle the fast-paced,
                high-mix order realities of modern apparel exporters and textile factories.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 size={16} className="shrink-0 text-[#087bc1] mt-0.5" />
                  <span>
                    <strong>Cut-Order Planning (COP):</strong> Automated marker optimization and fabric roll barcode traceability.
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 size={16} className="shrink-0 text-[#087bc1] mt-0.5" />
                  <span>
                    <strong>Sewing Line Balancing:</strong> Real-time bottleneck detection and hourly piece-rate worker output.
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 size={16} className="shrink-0 text-[#087bc1] mt-0.5" />
                  <span>
                    <strong>Style-Color-Size Matrix:</strong> Native multi-dimensional BOM and customer sample approval cycles.
                  </span>
                </div>
              </div>

              {/* Proven Metric Badges */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-6">
                <div>
                  <div className="text-xl font-bold text-[#15194f]">+28%</div>
                  <div className="text-[11px] text-slate-500">Sewing Efficiency</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#087bc1]">-35%</div>
                  <div className="text-[11px] text-slate-500">Fabric Wastage</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#15194f]">100%</div>
                  <div className="text-[11px] text-slate-500">Traceability</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="group/btn inline-flex items-center gap-2 rounded-xl bg-[#087bc1] px-5 py-3 text-xs font-semibold text-white shadow-md shadow-[#087bc1]/20 transition-all hover:bg-[#076da9]"
              >
                <span>Request Apparel Case Study</span>
                <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          {/* =====================================================
              CARD 2: FINTECH & FINANCIAL MANAGEMENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 p-8 shadow-sm transition-all duration-300 hover:border-[#087bc1]/40 hover:shadow-xl hover:shadow-blue-900/5"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#163d91]">
                  <Landmark size={24} />
                </span>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#163d91]">
                  Banking & FinTech Core
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#15194f]">
                FinTech Integration & Core Banking Systems
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
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

              {/* Proven Metric Badges */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-6">
                <div>
                  <div className="text-xl font-bold text-[#15194f]">10k+</div>
                  <div className="text-[11px] text-slate-500">Txns / Second</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#163d91]">ISO 20022</div>
                  <div className="text-[11px] text-slate-500">Compliant Core</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#15194f]">Zero</div>
                  <div className="text-[11px] text-slate-500">Audit Discrepancy</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="group/btn inline-flex items-center gap-2 rounded-xl bg-[#15194f] px-5 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#163d91]"
              >
                <span>Consult FinTech Architects</span>
                <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IndustryFocus
