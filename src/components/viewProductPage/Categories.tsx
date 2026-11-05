import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Truck,
  Factory,
  Coins,
  BarChart3,
  Check,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export interface SolutionCategory {
  id: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  theme: {
    color: string
    bgLight: string
    border: string
    text: string
    badgeBg: string
    ring: string
    gradient: string
  }
  icon: React.ComponentType<{ size?: number; className?: string }>
  modules: string[]
  image: string
}

export const solutionCategories: SolutionCategory[] = [
  {
    id: 'commercial',
    title: 'Commercial',
    shortTitle: 'Commercial',
    tagline: 'Manage Customer Relationships, Orders, and Sales Operations',
    description:
      'LNTBOOST Commercial helps you build stronger customer relationships and coordinate the complete sales process — from customer engagement and order management to delivery and distribution.',
    theme: {
      color: '#087bc1',
      bgLight: 'bg-sky-50/70',
      border: 'border-sky-200',
      text: 'text-[#087bc1]',
      badgeBg: 'bg-sky-100/80',
      ring: 'ring-sky-400',
      gradient: 'from-sky-500 to-blue-600',
    },
    icon: Users,
    modules: ['CRM', 'Order Management', 'Sales & Distribution'],
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain',
    shortTitle: 'Supply Chain',
    tagline: 'Optimize Procurement, Inventory, and Warehouse Operations',
    description:
      'LNTBOOST Supply Chain enables you to manage purchasing, supplier coordination, inventory control and warehouse operations with greater visibility and efficiency.',
    theme: {
      color: '#10b981',
      bgLight: 'bg-emerald-50/70',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      badgeBg: 'bg-emerald-100/80',
      ring: 'ring-emerald-400',
      gradient: 'from-emerald-500 to-teal-600',
    },
    icon: Truck,
    modules: ['Procurement', 'Inventory & Warehouse Management (IWM)'],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'manufacturing-operations',
    title: 'Manufacturing Operations',
    shortTitle: 'Manufacturing',
    tagline: 'Connect Planning, Production, Quality, and Maintenance',
    description:
      'LNTBOOST Manufacturing Operations integrates production planning, shop-floor execution, quality assurance and equipment maintenance to improve productivity, ensure consistent quality and meet delivery commitments.',
    theme: {
      color: '#7c3aed',
      bgLight: 'bg-purple-50/70',
      border: 'border-purple-200',
      text: 'text-purple-600',
      badgeBg: 'bg-purple-100/80',
      ring: 'ring-purple-400',
      gradient: 'from-purple-500 to-indigo-600',
    },
    icon: Factory,
    modules: [
      'MRP',
      'Production Planning & Control',
      'MES',
      'Quality Management (QMS)',
      'Maintenance Management',
    ],
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'financial-management',
    title: 'Financial Management',
    shortTitle: 'Finance',
    tagline: 'Improve Cost Visibility and Financial Control',
    description:
      'LNTBOOST Financial Management provides greater visibility into manufacturing costs, operational expenses and financial performance, helping you make informed budgeting and management decisions.',
    theme: {
      color: '#d97706',
      bgLight: 'bg-amber-50/70',
      border: 'border-amber-200',
      text: 'text-amber-600',
      badgeBg: 'bg-amber-100/80',
      ring: 'ring-amber-400',
      gradient: 'from-amber-500 to-orange-600',
    },
    icon: Coins,
    modules: ['Management Accounting', 'Manufacturing Costing'],
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'enterprise-management',
    title: 'Enterprise Management',
    shortTitle: 'Enterprise BI',
    tagline: 'Turn Business Data into Actionable Insights',
    description:
      'LNTBOOST Enterprise Management helps you monitor business performance, analyze operational information and manage system access and configuration. Make data-driven decisions and maintain effective control over your enterprise.',
    theme: {
      color: '#0d9488',
      bgLight: 'bg-teal-50/70',
      border: 'border-teal-200',
      text: 'text-teal-600',
      badgeBg: 'bg-teal-100/80',
      ring: 'ring-teal-400',
      gradient: 'from-teal-500 to-cyan-600',
    },
    icon: BarChart3,
    modules: ['Business Intelligence & Reporting', 'System Administration'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
  },
]

interface CategoriesProps {
  initialTargetId?: string
}

export default function Categories({ initialTargetId }: CategoriesProps = {}) {
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null)

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId)
    if (element) {
      const navOffset = 90
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      setHighlightedCategory(categoryId)
      setTimeout(() => setHighlightedCategory(null), 2500)
    }
  }

  useEffect(() => {
    if (initialTargetId) {
      setTimeout(() => scrollToCategory(initialTargetId), 300)
    }

    const handleHashCheck = () => {
      const rawHash = window.location.hash.replace('#', '').replace('/', '')
      if (rawHash && solutionCategories.some((cat) => cat.id === rawHash)) {
        setTimeout(() => scrollToCategory(rawHash), 400)
      }
    }

    handleHashCheck()
    window.addEventListener('hashchange', handleHashCheck)
    return () => window.removeEventListener('hashchange', handleHashCheck)
  }, [initialTargetId])

  return (
    <div id="categories-overview" className="bg-slate-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/20 bg-sky-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#087bc1]"
          >
            OUR SOLUTION CATEGORIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-tight text-[#15194f] sm:text-4xl lg:text-5xl"
          >
            Complete Business Solutions, One Platform
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            LNTBOOST Cloud ERP is organized into five key solution categories, each with
            specialized modules to meet your business needs and drive operational excellence.
          </motion.p>
        </div>

        {/* Solution Cards Layout */}
        <div className="mt-16 space-y-8">
          {/* Top 4 Cards Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {solutionCategories.slice(0, 4).map((category, index) => {
              const Icon = category.icon
              const isHighlighted = highlightedCategory === category.id

              return (
                <motion.div
                  key={category.id}
                  id={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative scroll-mt-28 flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 sm:p-8 shadow-md transition-all duration-500 hover:shadow-xl ${
                    category.theme.border
                  } ${
                    isHighlighted
                      ? `ring-4 ${category.theme.ring} shadow-2xl scale-[1.01]`
                      : ''
                  }`}
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-6">
                    <div className="sm:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${category.theme.bgLight} ${category.theme.text}`}
                          >
                            <Icon size={22} />
                          </span>
                          <div>
                            <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                              {category.title}
                            </h3>
                            <p className="text-xs font-semibold text-slate-500">
                              {category.tagline}
                            </p>
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                          {category.description}
                        </p>
                      </div>

                      <div className="mt-6 border-t border-slate-100 pt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Key Modules
                        </span>
                        <ul className="mt-2.5 space-y-2">
                          {category.modules.map((module) => (
                            <li
                              key={module}
                              className="flex items-center gap-2 text-sm font-medium text-slate-700"
                            >
                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${category.theme.bgLight} ${category.theme.text}`}
                              >
                                <Check size={11} strokeWidth={3} />
                              </span>
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="sm:col-span-5">
                      <div className="relative h-48 sm:h-full min-h-[190px] w-full overflow-hidden rounded-2xl shadow-sm">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5">
                          <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                            <CheckCircle2 size={12} className={category.theme.text} />
                            {category.shortTitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-1.5 text-xs font-bold ${category.theme.text} transition-all hover:underline`}
                    >
                      Request {category.title} Demo
                      <ArrowRight size={13} />
                    </a>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Cloud Native · ISO 27001
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* 5th Card: Enterprise Management */}
          {solutionCategories.slice(4, 5).map((category) => {
            const Icon = category.icon
            const isHighlighted = highlightedCategory === category.id

            return (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative scroll-mt-28 overflow-hidden rounded-3xl border bg-white p-6 sm:p-8 lg:p-10 shadow-md transition-all duration-500 hover:shadow-xl ${
                  category.theme.border
                } ${
                  isHighlighted
                    ? `ring-4 ${category.theme.ring} shadow-2xl scale-[1.01]`
                    : ''
                }`}
              >
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${category.theme.bgLight} ${category.theme.text}`}
                      >
                        <Icon size={24} />
                      </span>
                      <div>
                        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                          {category.title}
                        </h3>
                        <p className="text-sm font-semibold text-slate-500">
                          {category.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {category.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Key Modules
                      </span>
                      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {category.modules.map((module) => (
                          <div
                            key={module}
                            className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                          >
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${category.theme.bgLight} ${category.theme.text}`}
                            >
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span>{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition-all hover:bg-teal-700 hover:shadow-lg"
                      >
                        Request Enterprise Consultation
                        <ArrowRight size={15} />
                      </a>
                      <span className="text-xs text-slate-500 font-medium">
                        Executive Dashboards · Unlimited Multi-Company Reporting
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={category.image}
                        alt="LNTBOOST Enterprise Management Analytics"
                        className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="rounded-lg bg-teal-600/90 px-3 py-1 text-xs font-bold backdrop-blur-md">
                          Executive Telemetry & BI
                        </span>
                        <span className="text-xs font-medium text-teal-200">Real-time KPIs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
