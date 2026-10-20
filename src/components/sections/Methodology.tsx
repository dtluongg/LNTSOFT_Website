import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Compass,
  FileCode2,
  Headphones,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

const steps = [
  {
    phase: 'Phase 01',
    stepNumber: '01',
    title: 'Consultation & Process Audit',
    subtitle: 'Deep Operational Assessment',
    description:
      'We conduct on-site workflow audits across your departments to identify operational bottlenecks, data silos, and system redundancies before proposing technical solutions.',
    icon: ClipboardList,
    deliverables: [
      'Comprehensive As-Is Workflow Map',
      'Gap Analysis & ROI Feasibility Report',
      'Technical Readiness & Security Audit',
    ],
    duration: 'Week 1 - 2',
  },
  {
    phase: 'Phase 02',
    stepNumber: '02',
    title: 'Custom Architecture Blueprint',
    subtitle: 'Tailored Solution Modeling',
    description:
      'Our senior architects map out your database models, API gateways, custom ERP/MES modules, and user permission matrices to guarantee seamless scalability.',
    icon: FileCode2,
    deliverables: [
      'Interactive UI/UX Module Wireframes',
      'Entity-Relationship & Database Schema',
      'Security & ISO 27001 Compliance Design',
    ],
    duration: 'Week 3 - 5',
  },
  {
    phase: 'Phase 03',
    stepNumber: '03',
    title: 'Phased Deployment & Migration',
    subtitle: 'Zero-Downtime Data Transfer',
    description:
      'We stage pilot modules, perform automated legacy data extraction and validation, and execute parallel runs to ensure uninterrupted business continuity.',
    icon: Workflow,
    deliverables: [
      'Automated Historical Data Cleansing',
      'Third-party ERP/Banking Gateway Integration',
      'Pilot Environment UAT Validation',
    ],
    duration: 'Week 6 - 9',
  },
  {
    phase: 'Phase 04',
    stepNumber: '04',
    title: 'User Enablement & 24/7 Support',
    subtitle: 'Long-term Operational SLA',
    description:
      'Comprehensive role-based staff training, executive dashboard onboarding, and round-the-clock priority technical support backed by stringent SLAs.',
    icon: Headphones,
    deliverables: [
      'Departmental Training & User Manuals',
      'Formal Go-Live Signoff & Knowledge Transfer',
      '24/7 Dedicated Support Hotline & SLA',
    ],
    duration: 'Week 10+ & Ongoing',
  },
]

function Methodology() {
  return (
    <section id="methodology" className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      {/* Decorative ambient elements */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-sky-200/40 blur-[100px] transform-gpu" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-200/30 blur-[100px] transform-gpu" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/20 bg-[#087bc1]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#087bc1]"
          >
            <Compass size={13} />
            PROVEN IMPLEMENTATION METHODOLOGY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[#15194f] sm:text-4xl lg:text-5xl"
          >
            A Systematic Roadmap to Digital Transformation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Software success is 20% code and 80% disciplined execution. Our 4-stage implementation
            lifecycle mitigates risk, ensures zero data loss, and accelerates enterprise ROI.
          </motion.p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087bc1]/40 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div>
                  {/* Top Row: Phase + Duration */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#087bc1]">
                      {step.phase}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500">
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon & Big Number */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#087bc1] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#087bc1] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <span className="text-3xl font-black text-slate-200/90 transition-colors group-hover:text-[#087bc1]/20">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 text-lg font-bold text-[#15194f] group-hover:text-[#087bc1] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    {step.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Deliverables:
                    </span>
                    <ul className="mt-2.5 space-y-2">
                      {step.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[11px] text-slate-600">
                          <CheckCircle2 size={13} className="shrink-0 text-[#087bc1] mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087bc1] transition-transform group-hover:translate-x-1"
                  >
                    <span>Request Details</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Enterprise Commitment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#087bc1]">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#15194f]">
                Guaranteed Implementation SLA & Zero Downtime
              </h4>
              <p className="text-xs text-slate-500 sm:text-sm">
                Every enterprise contract includes direct access to senior solution architects, daily milestone tracking, and rigorous rollback safeguards.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-xl bg-[#15194f] px-6 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#087bc1]"
          >
            Book Scoping Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Methodology
