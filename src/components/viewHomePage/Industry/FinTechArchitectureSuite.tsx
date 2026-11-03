import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Terminal,
  Code2,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  ArrowUpRight,
  Sparkles,
  Building2,
  Zap,
  Globe2,
  Layers,
  Lock,
} from 'lucide-react'

type TechTab = 'dashboard' | 'api' | 'architecture'

export default function FinTechArchitectureSuite() {
  const [activeTab, setActiveTab] = useState<TechTab>('dashboard')

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(4,13,24,0.12)] p-5 sm:p-7 overflow-hidden">

        {/* ── Top Bar: High-Tech Architecture Switcher ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-[#15194f] to-[#087bc1] text-white flex items-center justify-center shadow-lg shadow-[#087bc1]/25">
              <Zap size={22} className="text-sky-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black text-[#15194f] tracking-tight">
                  LNT FinTech Platform Engineering
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  API v3.4 LIVE
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Cloud-native corporate treasury engines, open banking microservices & automated settlement APIs
              </p>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-white text-[#087bc1] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers size={13} />
              <span>Treasury Platform</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('api')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'api'
                  ? 'bg-white text-[#087bc1] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 size={13} />
              <span>Open Banking API</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-white text-[#087bc1] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal size={13} />
              <span>Security & Topology</span>
            </button>
          </div>
        </div>

        {/* ── Main Layout: Grid 12 Columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 pt-5 items-stretch">

          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN (7 COLS): High-Tech Interactive Visual Platform
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">

            {/* Real-Time Telemetry Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-1">
                  <span>API LATENCY</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-mono font-bold">p99</span>
                </div>
                <div className="text-sm sm:text-base font-black text-[#15194f] font-mono">
                  18.4 <span className="text-xs text-slate-500 font-sans font-semibold">ms</span>
                </div>
                <div className="text-[10px] text-emerald-600 font-medium mt-0.5 flex items-center gap-1 font-mono">
                  <TrendingUp size={11} /> 99.999% SLA
                </div>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-1">
                  <span>ACTIVE LEDGER</span>
                  <span className="text-[10px] bg-sky-100 text-[#087bc1] px-1.5 py-0.2 rounded font-mono font-bold">mTLS</span>
                </div>
                <div className="text-sm sm:text-base font-black text-[#15194f] font-mono">
                  $48.2 <span className="text-xs text-slate-500 font-sans font-semibold">M/mo</span>
                </div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5 font-mono">
                  Multi-Entity Cleared
                </div>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-1">
                  <span>RECON MATCH RATE</span>
                  <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.2 rounded font-mono font-bold">AI Core</span>
                </div>
                <div className="text-sm sm:text-base font-black text-[#15194f] font-mono">
                  99.98 <span className="text-xs text-slate-500 font-sans font-semibold">%</span>
                </div>
                <div className="text-[10px] text-purple-600 font-medium mt-0.5 font-mono">
                  Zero Human Touch
                </div>
              </div>
            </div>

            {/* Interactive Screen Display */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex-1 min-h-[340px]">
              <AnimatePresence mode="wait">

                {/* 1. Treasury Dashboard View (Real Software Image + Telemetry Overlay) */}
                {activeTab === 'dashboard' && (
                  <motion.div
                    key="view-dashboard"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full min-h-[340px] flex flex-col justify-between"
                  >
                    {/* Visual Software Dashboard Image */}
                    <div className="relative w-full h-[210px] overflow-hidden bg-slate-950 group">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                        alt="LNT FinTech Platform Dashboard"
                        className="w-full h-full object-cover object-center opacity-85 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur text-white text-[10px] font-mono font-bold border border-white/20">
                          PROD • US-EAST-1
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-[#087bc1]/80 backdrop-blur text-white text-[10px] font-mono font-bold">
                          ISO 20022 Engine
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <div>
                          <div className="text-[11px] font-mono text-slate-300">Enterprise Multi-Bank Consolidated Flow</div>
                          <div className="text-lg font-black text-white font-mono">$18,450,290.40 USD</div>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/40 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Live Settlement Stream
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Transaction Stream Ledger */}
                    <div className="p-3 bg-white space-y-1.5">
                      {[
                        {
                          partner: 'Standard Chartered API',
                          type: 'INWARD SWIFT',
                          ref: 'TXN-98421 • Buyer Deposit Match',
                          amount: '+$420,000.00',
                          badge: 'Auto Reconciled',
                          color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
                        },
                        {
                          partner: 'HSBC Global Liquidity',
                          type: 'BATCH PAYROLL',
                          ref: 'TXN-98420 • 2,400 Employees',
                          amount: '-$186,400.00',
                          badge: 'Smart Contract Cleared',
                          color: 'text-sky-700 bg-sky-50 border-sky-200',
                        },
                        {
                          partner: 'Vietcombank Open Banking',
                          type: 'SUPPLIER PO PAYOUT',
                          ref: 'TXN-98419 • Textile Raw Materials',
                          amount: '-₫ 3,250,000,000',
                          badge: 'HSM Multi-Signed',
                          color: 'text-purple-700 bg-purple-50 border-purple-200',
                        },
                      ].map((tx, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100/70 transition-colors text-xs font-mono"
                        >
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-500" />
                            <div>
                              <div className="font-bold text-slate-800 text-[11px] font-sans">{tx.partner}</div>
                              <div className="text-[10px] text-slate-400">{tx.ref}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900 text-xs">{tx.amount}</div>
                            <span className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-bold border ${tx.color}`}>
                              ✓ {tx.badge}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 2. Open Banking API Code Console View */}
                {activeTab === 'api' && (
                  <motion.div
                    key="view-api"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 bg-[#0d131f] text-slate-200 font-mono text-xs flex flex-col justify-between h-full min-h-[340px]"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">POST</span>
                        <span className="text-slate-300">/api/v3/banking/settlements/batch-execute</span>
                      </div>
                      <span className="text-sky-400 font-mono">200 OK (14ms)</span>
                    </div>

                    {/* Code Snippet */}
                    <div className="py-2 space-y-1 text-[11px] leading-relaxed text-slate-300">
                      <div><span className="text-sky-400 font-bold">const</span> settlementBatch = <span className="text-sky-400 font-bold">await</span> lntFinTech.disbursement.create({'{'}</div>
                      <div className="pl-4">merchantId: <span className="text-amber-300">"CORP_ENT_00921"</span>,</div>
                      <div className="pl-4">currency: <span className="text-amber-300">"USD"</span>,</div>
                      <div className="pl-4">routingScheme: <span className="text-emerald-300">"OPEN_BANKING_INSTANT"</span>,</div>
                      <div className="pl-4">signatureProtocol: <span className="text-purple-300">"RSA4096_SHA256_PKCS1"</span>,</div>
                      <div className="pl-4">recipients: [</div>
                      <div className="pl-8">{'{'} account: <span className="text-amber-300">"9981240182"</span>, bank: <span className="text-amber-300">"HSBC_GLOBAL"</span>, amount: <span className="text-amber-300">250000.00</span> {'}'},</div>
                      <div className="pl-8">{'{'} account: <span className="text-amber-300">"0071004128"</span>, bank: <span className="text-amber-300">"VCB_CORP"</span>, amount: <span className="text-amber-300">142000.00</span> {'}'}</div>
                      <div className="pl-4">]</div>
                      <div>{'}'});</div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <ShieldCheck size={13} /> Encrypted with AES-256 GCM & mTLS Handshake
                      </span>
                      <span>SDK: Node.js / C# / Python / Go</span>
                    </div>
                  </motion.div>
                )}

                {/* 3. Security & Topology Architecture View */}
                {activeTab === 'architecture' && (
                  <motion.div
                    key="view-architecture"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 bg-slate-900 text-white flex flex-col justify-between h-full min-h-[340px]"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5 font-mono">
                        <Terminal size={14} /> Cloud Microservices Topology & Security Perimeter
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">Zero Trust Arch</span>
                    </div>

                    {/* Visual Architecture Flow Diagram */}
                    <div className="grid grid-cols-3 gap-3 py-3 items-center">
                      <div className="p-3 rounded-xl border border-sky-500/30 bg-sky-950/40 text-center">
                        <div className="h-8 w-8 rounded-lg bg-sky-500/20 text-sky-400 mx-auto flex items-center justify-center mb-1">
                          <Building2 size={16} />
                        </div>
                        <div className="text-xs font-bold text-white">LNT ERP Core</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">PO & Invoice Events</div>
                      </div>

                      <div className="p-3 rounded-xl border border-indigo-500/30 bg-indigo-950/40 text-center relative">
                        <div className="h-8 w-8 rounded-lg bg-indigo-500/20 text-indigo-400 mx-auto flex items-center justify-center mb-1">
                          <Zap size={16} />
                        </div>
                        <div className="text-xs font-bold text-white">API Gateway</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Token Auth & Rate-Limit</div>
                      </div>

                      <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/40 text-center">
                        <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-1">
                          <Globe2 size={16} />
                        </div>
                        <div className="text-xs font-bold text-white">Core Banking</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">SWIFT & Open Banking</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 leading-relaxed font-sans">
                      <b className="text-sky-300">Banking-Grade Cryptographic Security:</b> Compliant with ISO 27001, PCI-DSS Level 1 and regional central bank Open Banking specifications. Hardware Security Module (HSM) Cloud Signing ensures absolute audit compliance.
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN (5 COLS): Enterprise Software Capabilities (English)
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col justify-between pl-0 lg:pl-3 space-y-4">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#087bc1]/10 text-[#087bc1] text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                <Code2 size={13} />
                <span>Enterprise FinTech Engineering</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black text-[#15194f] leading-snug">
                Open Banking Infrastructure & Automated Corporate Treasury
              </h3>
              <div className="h-1 w-16 bg-[#087bc1] rounded-full mt-2 mb-3" />

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                LNT Software engineers high-throughput financial infrastructure that bridges corporate ERPs with modern banking networks. Automate 100% of payment workflows, auto-reconcile complex multi-currency ledgers, and forecast liquidity with institutional precision.
              </p>
            </div>

            {/* 3 Tech Architecture Pillars */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="h-7 w-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <RefreshCw size={15} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zero-Touch Automated Bank Reconciliation</div>
                  <div className="text-[11.5px] text-slate-600 leading-snug">
                    AI-driven matching engine parses statement streams and instant virtual accounts (VA), automatically clearing ERP invoices with zero manual intervention.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="h-7 w-7 rounded-lg bg-sky-100 text-[#087bc1] flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={15} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">High-Throughput Open Banking Gateway</div>
                  <div className="text-[11.5px] text-slate-600 leading-snug">
                    Direct integration with major banking APIs. Initiate batch payroll, supplier disbursements, and LC settlements directly from your software interface.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="h-7 w-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Lock size={15} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Banking-Grade Security & ISO 20022 Compliance</div>
                  <div className="text-[11.5px] text-slate-600 leading-snug">
                    End-to-end mTLS authentication, hardware-backed cloud digital signatures (HSM), and seamless tax authority e-invoicing compliance.
                  </div>
                </div>
              </div>
            </div>

            {/* Supported Bank Integrations */}
            <div className="pt-2 border-t border-slate-100">
              <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">
                Pre-Engineered Banking Connectors:
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold text-slate-700 font-mono">
                <span className="px-2 py-0.8 rounded-md bg-slate-100 border border-slate-200">Vietcombank API</span>
                <span className="px-2 py-0.8 rounded-md bg-slate-100 border border-slate-200">Techcombank Open</span>
                <span className="px-2 py-0.8 rounded-md bg-slate-100 border border-slate-200">BIDV iBank</span>
                <span className="px-2 py-0.8 rounded-md bg-slate-100 border border-slate-200">MB Bank B2B</span>
                <span className="px-2 py-0.8 rounded-md bg-slate-100 border border-slate-200">HSBCnet</span>
                <span className="px-2 py-0.8 rounded-md bg-slate-100 border border-slate-200">SWIFT & Napas 247</span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#15194f] via-[#087bc1] to-[#076da9] hover:opacity-95 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#087bc1]/25 transition-all hover:scale-[1.01] cursor-pointer"
              >
                <span>Request FinTech Architecture & Demo</span>
                <ArrowUpRight size={16} />
              </a>
              <div className="text-center text-[11px] text-slate-400 mt-1.5 font-medium">
                ✦ Custom software deployment and tailored API integration by LNT Software Engineers
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
