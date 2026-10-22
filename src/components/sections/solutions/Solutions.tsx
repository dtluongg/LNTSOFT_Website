import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

// interface SolutionItem {
//   id: string
//   title: string
//   desc: string
//   icon: React.ComponentType<{ size?: number; className?: string }>
//   tags: string[]
//   metrics?: string
// }

// interface SolutionPillar {
//   id: string
//   tabName: string
//   badge: string
//   headline: string
//   description: string
//   items: SolutionItem[]
// }

// const solutionPillars: SolutionPillar[] = [
//   {
//     id: 'core',
//     tabName: 'Core ERP & Modules',
//     badge: '10 Enterprise Modules',
//     headline: 'Unified Digital Backbone for Operations & Finance',
//     description:
//       'LNTBOOST integrates every core operational department into a single, cohesive source of truth with real-time analytics, automated approval chains, and multi-entity consolidation.',
//     items: [
//       {
//         id: 'erp',
//         title: 'Enterprise Resource Planning (ERP)',
//         desc: 'Centralized financial accounting, fixed assets, budgeting, and general ledger operations.',
//         icon: Building2,
//         tags: ['General Ledger', 'Multi-Currency', 'Budgeting'],
//         metrics: '100% Real-time sync',
//       },
//       {
//         id: 'mes',
//         title: 'Manufacturing Execution (MES)',
//         desc: 'Shop-floor machine integration, production scheduling, bill of materials, and quality inspection.',
//         icon: Factory,
//         tags: ['Machine OEE', 'BOM Management', 'Quality Control'],
//         metrics: '99.5% Line accuracy',
//       },
//       {
//         id: 'scm',
//         title: 'Supply Chain & Warehouse',
//         desc: 'Multi-site warehouse barcoding, automated replenishment, logistics, and vendor management.',
//         icon: Warehouse,
//         tags: ['Lot Tracking', 'Inventory Valuation', 'FIFO / LIFO'],
//         metrics: '-30% Holding costs',
//       },
//       {
//         id: 'sales',
//         title: 'Sales & Distribution',
//         desc: 'Omnichannel B2B order routing, tiered pricing policy, sales territory, and receivables management.',
//         icon: ShoppingCart,
//         tags: ['Order Tracking', 'Price Matrix', 'Credit Limit'],
//         metrics: 'Fast fulfillment',
//       },
//       {
//         id: 'accounting',
//         title: 'Management Accounting',
//         desc: 'Cost accounting, managerial variance analytics, cost centers, and executive consolidated reporting.',
//         icon: Calculator,
//         tags: ['Cost Centers', 'Variance Analysis', 'Tax Compliance'],
//         metrics: 'Fast monthly close',
//       },
//       {
//         id: 'bi',
//         title: 'Business Intelligence & BI',
//         desc: 'Executive performance dashboards, drill-down operational metrics, and self-service BI reporting.',
//         icon: ChartNoAxesCombined,
//         tags: ['KPI Dashboards', 'Drill-Down', 'Trend Forecasts'],
//         metrics: 'Instant insight',
//       },
//       {
//         id: 'ai',
//         title: 'AI & Machine Learning',
//         desc: 'Demand prediction algorithms, automated inventory forecasting, and smart workflow anomalies.',
//         icon: BrainCircuit,
//         tags: ['Demand Prediction', 'Anomaly Detection', 'Smart Automation'],
//         metrics: 'Self-optimizing',
//       },
//       {
//         id: 'workflow',
//         title: 'Workflow & Document Approvals',
//         desc: 'Role-based digital approval paths, e-signatures, audit logs, and compliance traceability.',
//         icon: Workflow,
//         tags: ['Multi-Level Approval', 'Audit Trail', 'SLA Triggers'],
//         metrics: 'Zero paper waste',
//       },
//       {
//         id: 'mobile',
//         title: 'Mobile & Digital Applications',
//         desc: 'Cross-platform native mobile apps for shop-floor supervisors, field staff, and mobile executives.',
//         icon: Smartphone,
//         tags: ['iOS & Android', 'Offline Mode', 'Instant Push'],
//         metrics: 'On-the-go access',
//       },
//       {
//         id: 'integration',
//         title: 'Platform Services & API Hub',
//         desc: 'Secure enterprise API hub connecting legacy software, banking gateways, and IoT sensors.',
//         icon: Network,
//         tags: ['REST & GraphQL', 'Webhook Hub', 'Legacy Connectors'],
//         metrics: 'High throughput',
//       },
//     ],
//   },
//   {
//     id: 'industry',
//     tabName: 'Industry Solutions',
//     badge: 'Specialized Verticals',
//     headline: 'Deep Industry-Tailored Architectures',
//     description:
//       'Generic software fails where specialized industry workflows begin. LNTSoft provides battle-tested platforms designed specifically for garment manufacturing and high-security FinTech.',
//     items: [
//       {
//         id: 'apparel',
//         title: 'Apparel ERP & MES Solution',
//         desc: 'Specialized for textile, garment, and footwear manufacturers. Handles color-size matrix, cut-order planning, fabric roll barcoding, line balancing, and export compliance.',
//         icon: Shirt,
//         tags: ['Cut Order Planning', 'Line Balancing', 'Fabric Roll Tracking', 'Style Matrix'],
//         metrics: '+28% Sewing efficiency',
//       },
//       {
//         id: 'fintech',
//         title: 'FinTech Solutions & Core Integration',
//         desc: 'Designed for financial institutions, leasing companies, and payment service providers. Multi-currency settlement, automated regulatory reporting, and banking-grade encryption.',
//         icon: Landmark,
//         tags: ['Core Banking Settlement', 'Audit Trail', 'ISO 20022', 'Fraud Prevention'],
//         metrics: 'Bank-grade compliance',
//       },
//     ],
//   },
//   {
//     id: 'addon',
//     tabName: 'Add-On Ecosystem',
//     badge: 'Productivity Engines',
//     headline: 'High-Speed Intelligent Extensions',
//     description:
//       'Plug-and-play digital accelerators designed to eliminate manual data entry, streamline customer support, and automate high-volume document rendering.',
//     items: [
//       {
//         id: 'doc-auto',
//         title: 'Document Automation & PDF Engine',
//         desc: 'High-speed automated generation of multi-page invoices, custom certificates, packing lists, and barcode labels at 10,000+ docs/minute.',
//         icon: FileText,
//         tags: ['Template Engine', 'Bulk PDF Rendering', 'Dynamic Watermarking'],
//         metrics: '10,000+ docs/min',
//       },
//       {
//         id: 'edoc',
//         title: 'eDoc Digital Document Management',
//         desc: 'Centralized enterprise document archive with semantic search, access rights segregation, version tracking, and digital signature verification.',
//         icon: FolderArchive,
//         tags: ['Full-Text Search', 'Version Control', 'Digital Signatures'],
//         metrics: 'Zero paper storage',
//       },
//       {
//         id: 'remote-assist',
//         title: 'Remote Visual Assistance Platform',
//         desc: 'Real-time collaborative AR video platform connecting field service technicians and on-site customers with centralized technical specialists.',
//         icon: Headphones,
//         tags: ['AR Annotation', 'HD Video', 'Ticket Integration'],
//         metrics: '-45% Travel cost',
//       },
//       {
//         id: 'analytics-kit',
//         title: 'Data Analytics Toolkit',
//         desc: 'Pre-packaged business data models, executive financial formulas, and interactive dashboard widgets ready for instant deployment.',
//         icon: ChartPie,
//         tags: ['Pre-built Models', 'Excel & PowerBI Export', 'Custom Metrics'],
//         metrics: 'Day-1 Reporting',
//       },
//     ],
//   },
// ]

import { solutionPillars } from './SolutionsData'

function Solutions() {
  const [activeTab, setActiveTab] = useState(0)
  const currentPillar = solutionPillars[activeTab]

  return (
    <section id="solutions" className="relative overflow-hidden bg-[#f8fafc] py-24 sm:py-32">
      {/* Decorative ambient background accents */}
      <div className="pointer-events-none absolute top-10 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[100px] transform-gpu" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-96 w-96 rounded-full bg-blue-200/20 blur-[100px] transform-gpu" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/20 bg-[#087bc1]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#087bc1]"
          >
            <Sparkles size={13} />
            LNTBOOST PLATFORM SUITE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[#15194f] sm:text-4xl lg:text-5xl"
          >
            Comprehensive Ecosystem for Enterprise Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            A scalable, modular software suite engineered to harmonize management, optimize
            factory shop-floors, and accelerate end-to-end operational transparency.
          </motion.p>
        </div>

        {/* =====================================================
            INTERACTIVE PILLAR TABS (CORE | INDUSTRY | ADD-ONS)
        ===================================================== */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            {solutionPillars.map((pillar, idx) => {
              const isActive = activeTab === idx
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-[#087bc1] hover:bg-slate-50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillarTab"
                      className="absolute inset-0 rounded-xl bg-[#087bc1] shadow-md shadow-[#087bc1]/25"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{pillar.tabName}</span>
                  <span
                    className={`relative z-10 hidden rounded-full px-2 py-0.5 text-[10px] sm:inline-block ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {pillar.badge}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* =====================================================
            PILLAR HEADLINE & DESCRIPTION
        ===================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-8 text-center"
          >
            <h3 className="text-xl font-bold text-[#15194f] sm:text-2xl">
              {currentPillar.headline}
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-500 leading-relaxed">
              {currentPillar.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* =====================================================
            SOLUTIONS GRID CARDS
        ===================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`mt-10 grid gap-6 ${
              currentPillar.items.length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {currentPillar.items.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087bc1]/40 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div>
                    {/* Top Row: Icon + Metric */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#087bc1] transition-colors duration-300 group-hover:bg-[#087bc1] group-hover:text-white group-hover:scale-105">
                        <Icon size={22} />
                      </div>

                      {item.metrics && (
                        <span className="rounded-full bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                          {item.metrics}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="mt-5 text-base font-bold text-[#15194f] transition-colors duration-200 group-hover:text-[#087bc1]">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {item.desc}
                    </p>

                    {/* Functional Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100/80 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087bc1] transition-all duration-200 group-hover:translate-x-1"
                    >
                      <span>Request Architecture Consultation</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Solutions
