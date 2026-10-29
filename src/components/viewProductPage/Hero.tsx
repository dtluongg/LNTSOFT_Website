import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Play,
  X,
  Users,
  Truck,
  Factory,
  Coins,
  BarChart3,
  Cloud,
  ChevronRight,
} from 'lucide-react'
import { solutionCategories } from './Categories'

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const scrollToCategory = (categoryId: string) => {
    const el = document.getElementById(categoryId)
    if (el) {
      const navOffset = 90
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative border-b border-slate-100 bg-gradient-to-b from-sky-50/40 via-white to-slate-50/50 pt-20 pb-16 lg:pt-28 lg:pb-24">
      {/* Background ambient gradient lights */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-sky-200/35 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-blue-100/30 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 lg:pr-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/30 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#087bc1] shadow-xs"
            >
              <Sparkles size={13} className="text-[#087bc1]" />
              LNTBOOST CLOUD ERP
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-3xl font-extrabold tracking-tight text-[#15194f] sm:text-4xl lg:text-5xl leading-[1.18]"
            >
              Integrated Enterprise Solutions for Smarter Business Operations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              LNTBOOST Cloud ERP is a powerful, cloud-based platform that connects your core
              business processes — from sales and supply chain to manufacturing, finance and
              reporting — in one unified system.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollToCategory('categories-overview')}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#087bc1] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#087bc1]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#076da9] hover:shadow-xl hover:shadow-[#087bc1]/30 cursor-pointer"
              >
                Explore Our Solutions
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-300 hover:border-[#087bc1] hover:text-[#087bc1] hover:shadow-md cursor-pointer"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-[#087bc1] transition-transform duration-300 group-hover:scale-110">
                  <Play size={12} className="fill-current ml-0.5" />
                </span>
                Watch Video
              </button>
            </motion.div>

            {/* Quick Jump Pills */}
            <div className="mt-8 border-t border-slate-200/80 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Quick Jump to Category:
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {solutionCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => scrollToCategory(cat.id)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs transition-all hover:border-[#087bc1] hover:bg-sky-50 hover:text-[#087bc1] cursor-pointer"
                  >
                    <cat.icon size={13} className={cat.theme.text} />
                    {cat.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interactive Canvas */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto flex h-[480px] sm:h-[520px] w-full max-w-[560px] items-center justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-100/60 via-blue-50/40 to-slate-100/70 p-1 shadow-2xl shadow-blue-900/10 backdrop-blur-xl">
                <div
                  className="h-full w-full rounded-[22px] bg-white/70"
                  style={{
                    backgroundImage: 'radial-gradient(#087bc1 0.75px, transparent 0.75px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.25,
                  }}
                />
              </div>

              {/* Laptop Screen Mockup */}
              <div className="relative z-10 w-[82%] sm:w-[78%] rounded-2xl border border-slate-200/80 bg-white/95 p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-0.5 text-[11px] font-medium text-slate-600">
                    <Cloud size={11} className="text-[#087bc1]" />
                    lntboost.cloud.erp/dashboard
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    LIVE 99.9%
                  </span>
                </div>

                <div className="space-y-2.5 pt-3">
                  <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-[#15194f] to-[#087bc1] p-3 text-white">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-sky-200 font-medium">
                        Unified Enterprise Backbone
                      </div>
                      <div className="text-sm font-bold">LNTBOOST Cloud ERP</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] text-sky-200">Total System Sync</div>
                      <div className="text-xs font-semibold text-emerald-300">100% Operational</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-left">
                    <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-2">
                      <div className="text-[10px] text-slate-500">Active Orders</div>
                      <div className="text-xs font-bold text-slate-800">1,420</div>
                      <span className="text-[9px] font-semibold text-emerald-600">+18% YoY</span>
                    </div>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-2">
                      <div className="text-[10px] text-slate-500">Shop OEE</div>
                      <div className="text-xs font-bold text-slate-800">94.8%</div>
                      <span className="text-[9px] font-semibold text-sky-600">Optimal</span>
                    </div>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-2">
                      <div className="text-[10px] text-slate-500">Inventory Sync</div>
                      <div className="text-xs font-bold text-slate-800">Real-Time</div>
                      <span className="text-[9px] font-semibold text-emerald-600">Multi-Site</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-2">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-slate-600 mb-1">
                      <span>Production & Sales Stream</span>
                      <span className="text-[#087bc1]">Live Telemetry</span>
                    </div>
                    <div className="h-12 w-full flex items-end gap-1.5 pt-1">
                      {[40, 65, 50, 85, 70, 95, 60, 80, 90, 75, 100, 88].map((val, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-[#087bc1] to-sky-400 transition-all duration-300 hover:brightness-110"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Pulsing Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <span className="absolute h-16 w-16 rounded-full bg-[#087bc1]/20 animate-ping" />
                  <div className="flex items-center gap-1.5 rounded-full border-2 border-white bg-[#087bc1] px-4 py-1.5 text-xs font-bold text-white shadow-xl shadow-[#087bc1]/40">
                    <Sparkles size={12} className="animate-spin" />
                    LNTBOOST
                  </div>
                </div>
              </div>

              {/* 5 Dynamic Interactive Nodes */}
              <motion.button
                type="button"
                onClick={() => scrollToCategory('commercial')}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                className="group absolute top-5 left-2 sm:left-4 z-30 flex items-center gap-2.5 rounded-2xl border border-sky-200 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-sky-900/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-sky-400 cursor-pointer"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-white shadow-md shadow-sky-500/30">
                  <Users size={18} />
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800 group-hover:text-[#087bc1]">
                    Commercial
                  </div>
                  <div className="text-[10px] text-slate-500">Sales & CRM</div>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-[#087bc1]" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => scrollToCategory('supply-chain')}
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="group absolute top-5 right-2 sm:right-4 z-30 flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-emerald-900/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-emerald-400 cursor-pointer"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                  <Truck size={18} />
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-600">
                    Supply Chain
                  </div>
                  <div className="text-[10px] text-slate-500">IWM & Logistics</div>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-emerald-600" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => scrollToCategory('manufacturing-operations')}
                animate={{ y: [-3, 5, -3] }}
                transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="group absolute top-[48%] -right-2 sm:right-2 z-30 flex items-center gap-2.5 rounded-2xl border border-purple-200 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-purple-900/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-purple-400 cursor-pointer"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-500/30">
                  <Factory size={18} />
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800 group-hover:text-purple-600">
                    Manufacturing
                  </div>
                  <div className="text-[10px] text-slate-500">MRP & MES</div>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-purple-600" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => scrollToCategory('financial-management')}
                animate={{ y: [3, -5, 3] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                className="group absolute bottom-4 right-2 sm:right-8 z-30 flex items-center gap-2.5 rounded-2xl border border-amber-200 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-amber-900/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-amber-400 cursor-pointer"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/30">
                  <Coins size={18} />
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800 group-hover:text-amber-600">
                    Financial Mgmt
                  </div>
                  <div className="text-[10px] text-slate-500">Costing & Control</div>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-amber-600" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => scrollToCategory('enterprise-management')}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="group absolute bottom-4 left-2 sm:left-6 z-30 flex items-center gap-2.5 rounded-2xl border border-teal-200 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-teal-900/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-teal-400 cursor-pointer"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-500/30">
                  <BarChart3 size={18} />
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800 group-hover:text-teal-600">
                    Enterprise Mgmt
                  </div>
                  <div className="text-[10px] text-slate-500">BI & Analytics</div>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-teal-600" />
              </motion.button>
            </div>

            <div className="mt-3 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Interactive System Hub — Click any node to jump to section
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#087bc1] animate-ping" />
                  <span className="font-bold text-sm tracking-wide text-white">
                    LNTBOOST Cloud ERP Platform Tour
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-slate-950 flex flex-col items-center justify-center p-8 text-center">
                <div className="max-w-lg space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#087bc1]/20 text-[#087bc1] border border-[#087bc1]/40 shadow-xl">
                    <Play size={28} className="fill-current ml-1" />
                  </div>
                  <h3 className="text-xl font-bold">Watch LNTBOOST Cloud ERP in Action</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Experience how our unified platform connects Sales, Supply Chain, Shop-Floor
                    MES, Costing, and Executive BI into one cohesive real-time ecosystem.
                  </p>
                  <div className="pt-2 flex items-center justify-center gap-4">
                    <a
                      href="#contact"
                      onClick={() => setIsVideoModalOpen(false)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#087bc1] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#076da9] transition-colors"
                    >
                      Book 1-on-1 Guided Demo
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
