import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  FileCode2,
  Headphones,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Users2,
  Workflow,
} from 'lucide-react'

// Smart warehouse & industrial infrastructure background
const warehouseBgImage =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80'

interface StepItem {
  number: string
  title: string
  description: string
  tags: string[]
  icon: typeof Search
  highlight: string
}

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Requirement Collection',
    description:
      'Understand your goals and challenges through comprehensive on-site assessments to define precise technical and business system requirements.',
    tags: ['On-Site Workflow Audit', 'Pain-Point Discovery', 'System Scoping'],
    icon: Search,
    highlight: 'Comprehensive audit before any coding begins',
  },
  {
    number: '02',
    title: 'Solution Design',
    description:
      'We design an integrated system roadmap covering WMS, RFID tracking, shop-floor automation, and seamless bridges to your existing ERP ecosystem.',
    tags: ['WMS & RFID Architecture', 'Automation Specs', 'API Integration'],
    icon: Boxes,
    highlight: 'Engineered for scalability & high-throughput',
  },
  {
    number: '03',
    title: 'Configuration & Development',
    description:
      'We prepare detailed functional specifications, configure core enterprise applications, and engineer any bespoke customizations or business rules.',
    tags: ['Custom Business Logic', 'Core Configuration', 'Data Cleansing'],
    icon: FileCode2,
    highlight: 'Zero-disruption customization & testing',
  },
  {
    number: '04',
    title: 'Implementation & Staff Training',
    description:
      'End-to-end deployment, hardware and software commissioning, rigorous UAT validation, and role-based onboarding sessions for your operational team.',
    tags: ['Hardware Commissioning', 'UAT Sign-off', 'Role-Based Onboarding'],
    icon: Users2,
    highlight: 'Guaranteed user adoption & smooth go-live',
  },
  {
    number: '05',
    title: 'Post-Implementation Support',
    description:
      'We monitor live system telemetry, fine-tune solution performance, provide 24/7 SLA escalation support, and deliver ongoing continuous enhancements.',
    tags: ['24/7 SLA Hotline', 'Telemetry Monitoring', 'Continuous Fine-Tuning'],
    icon: Headphones,
    highlight: 'Long-term operational stability & peace of mind',
  },
]

function EndToEndProcess() {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section
      id="end-to-end"
      className="relative overflow-hidden bg-[#0c1033] py-24 sm:py-32 text-white"
    >
      {/* =====================================================
          BACKGROUND IMAGE & DUOTONE SAPPHIRE NAVY GRADIENT OVERLAYS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Warehouse Racking Background Image */}
        <img
          src={warehouseBgImage}
          alt="LNTSoft Industrial & Warehouse Automation"
          className="h-full w-full object-cover object-center opacity-15 mix-blend-luminosity filter contrast-125"
          loading="lazy"
        />

        {/* Multi-layered Sapphire & Navy Brand Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1033] via-[#0f1542]/95 to-[#163d91]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1033] via-transparent to-[#0c1033]/80" />

        {/* Ambient Glowing Orbs */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#087bc1]/20 blur-[130px] transform-gpu" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-[450px] w-[450px] rounded-full bg-[#38bde8]/15 blur-[120px] transform-gpu" />
        <div className="pointer-events-none absolute left-1/3 top-10 h-[350px] w-[350px] rounded-full bg-[#163d91]/25 blur-[100px] transform-gpu" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* =====================================================
              LEFT COLUMN: IMPACTFUL TITLE, VALUE PROPOSITION & CTA
          ===================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#38bde8]/30 bg-[#38bde8]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#38bde8] backdrop-blur-md"
            >
              <Workflow size={13} className="text-[#38bde8]" />
              END-TO-END DELIVERY MODEL
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.12]"
            >
              How We Build Your Solutions from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bde8] via-sky-300 to-[#24a6d8]">
                End-to-End
              </span>
            </motion.h2>

            {/* Narrative Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-slate-300/90 sm:text-lg"
            >
              From initial operational audit to custom WMS/RFID system engineering,
              hardware commissioning, and 24/7 SLA governance, our disciplined methodology
              ensures your digital transformation achieves maximum ROI with zero downtime.
            </motion.p>

            {/* Core Capability Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 space-y-3.5 border-y border-white/10 py-6"
            >
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087bc1]/30 text-[#38bde8]">
                  <CheckCircle2 size={15} />
                </div>
                <span>Full-cycle enterprise delivery with zero legacy data loss</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087bc1]/30 text-[#38bde8]">
                  <Radio size={14} />
                </div>
                <span>Seamless RFID, Barcode, & Warehouse IoT integration</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087bc1]/30 text-[#38bde8]">
                  <ShieldCheck size={15} />
                </div>
                <span>ISO 27001 compliant security & milestone acceptance guarantee</span>
              </div>
            </motion.div>

            {/* Action CTA & Architect Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#087bc1] to-[#163d91] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#087bc1]/25 transition-all duration-300 hover:from-[#0a8cd9] hover:to-[#1e4eb8] hover:shadow-xl hover:shadow-[#087bc1]/35 hover:-translate-y-0.5"
              >
                <span>Discuss Your System Architecture</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#methodology"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-[#38bde8]"
              >
                <span>View SLA Framework</span>
                <span className="text-[#38bde8]">→</span>
              </a>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT COLUMN: THE 5 SEQUENTIAL PROCESS ROWS (MATCHING IMAGE)
          ===================================================== */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl shadow-black/20">
              {steps.map((step, idx) => {
                const isSelected = activeStep === idx
                const StepIcon = step.icon

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    className={`group relative cursor-pointer p-6 sm:p-8 transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent'
                        : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    {/* Active Accent Left Border Indicator */}
                    <div
                      className={`absolute left-0 inset-y-0 w-1 transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-b from-[#38bde8] via-[#087bc1] to-[#163d91] opacity-100 shadow-[0_0_12px_rgba(56,189,232,0.8)]'
                          : 'opacity-0 group-hover:opacity-40 bg-[#38bde8]'
                      }`}
                    />

                    <div className="flex items-start gap-5 sm:gap-8">
                      {/* Big Step Number (Styled like the reference design) */}
                      <div className="shrink-0 select-none">
                        <span
                          className={`font-heading text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl transition-all duration-300 block leading-none ${
                            isSelected
                              ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-[#38bde8] to-[#087bc1] scale-105 drop-shadow-[0_0_20px_rgba(56,189,232,0.4)]'
                              : 'text-white/35 group-hover:text-white/70'
                          }`}
                        >
                          {step.number}
                        </span>

                        {/* Step Icon Badge */}
                        <div
                          className={`mt-2 flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 ${
                            isSelected
                              ? 'bg-[#38bde8]/20 text-[#38bde8]'
                              : 'bg-white/5 text-slate-400 group-hover:text-slate-200'
                          }`}
                        >
                          <StepIcon size={16} />
                        </div>
                      </div>

                      {/* Content: Title, Description & Tags */}
                      <div className="min-w-0 flex-1 pt-0.5">
                        <div className="flex items-center justify-between gap-3">
                          <h3
                            className={`font-heading text-lg font-bold sm:text-xl transition-colors duration-300 ${
                              isSelected
                                ? 'text-white drop-shadow-sm'
                                : 'text-slate-100 group-hover:text-white'
                            }`}
                          >
                            {step.title}
                          </h3>

                          {/* Subtle arrow indicator */}
                          <ArrowUpRight
                            size={18}
                            className={`shrink-0 transition-all duration-300 ${
                              isSelected
                                ? 'text-[#38bde8] -translate-y-0.5 translate-x-0.5 opacity-100'
                                : 'text-white/20 opacity-0 group-hover:opacity-70'
                            }`}
                          />
                        </div>

                        {/* Description */}
                        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300/85">
                          {step.description}
                        </p>

                        {/* Deliverable Tags / Chips */}
                        <div className="mt-3.5 flex flex-wrap items-center gap-2">
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors duration-200 ${
                                isSelected
                                  ? 'bg-[#087bc1]/25 text-[#38bde8] border border-[#38bde8]/30'
                                  : 'bg-white/5 text-slate-400 border border-white/5 group-hover:border-white/10 group-hover:text-slate-300'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom Guarantee Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-sm text-xs text-slate-400"
            >
              <div className="flex items-center gap-2.5 text-slate-300">
                <Sparkles size={15} className="text-[#38bde8]" />
                <span>
                  <strong>Full Lifecycle Accountability:</strong> Single point of contact from kickoff to long-term SLA.
                </span>
              </div>
              <a
                href="#contact"
                className="shrink-0 font-semibold text-[#38bde8] hover:text-white transition-colors"
              >
                Request Consultation →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EndToEndProcess
