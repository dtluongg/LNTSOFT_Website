import { motion } from 'framer-motion'
import {
  Users,
  Truck,
  Factory,
  Coins,
  BarChart3,
  ArrowRight,
  Sparkles,
  Check,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'

interface ProductsMegaMenuProps {
  onClose: () => void
  onMouseEnter: () => void
  onNavigate?: (page: 'home' | 'product', targetId?: string) => void
}

const menuCategories = [
  {
    id: 'commercial',
    title: 'Commercial',
    tagline: 'CRM & Sales Operations',
    icon: Users,
    color: '#087bc1',
    bg: 'bg-sky-50',
    borderHover: 'hover:border-sky-300',
    text: 'text-[#087bc1]',
    badgeBg: 'bg-sky-100 text-sky-800',
    modules: ['CRM', 'Order Management', 'Sales & Distribution'],
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain',
    tagline: 'Procurement & Warehouse',
    icon: Truck,
    color: '#10b981',
    bg: 'bg-emerald-50',
    borderHover: 'hover:border-emerald-300',
    text: 'text-emerald-600',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    modules: ['Procurement', 'Inventory & Warehouse (IWM)'],
  },
  {
    id: 'manufacturing-operations',
    title: 'Manufacturing Operations',
    tagline: 'MRP, MES & Quality',
    icon: Factory,
    color: '#7c3aed',
    bg: 'bg-purple-50',
    borderHover: 'hover:border-purple-300',
    text: 'text-purple-600',
    badgeBg: 'bg-purple-100 text-purple-800',
    modules: ['MRP', 'MES Execution', 'Quality Control', 'Plant Maintenance'],
  },
  {
    id: 'financial-management',
    title: 'Financial Management',
    tagline: 'Costing & Accounting',
    icon: Coins,
    color: '#d97706',
    bg: 'bg-amber-50',
    borderHover: 'hover:border-amber-300',
    text: 'text-amber-600',
    badgeBg: 'bg-amber-100 text-amber-800',
    modules: ['Management Accounting', 'Manufacturing Costing'],
  },
  {
    id: 'enterprise-management',
    title: 'Enterprise Management',
    tagline: 'BI & Executive Insights',
    icon: BarChart3,
    color: '#0d9488',
    bg: 'bg-teal-50',
    borderHover: 'hover:border-teal-300',
    text: 'text-teal-600',
    badgeBg: 'bg-teal-100 text-teal-800',
    modules: ['BI & Analytics Reporting', 'System Administration'],
  },
]

export function ProductsMegaMenu({
  onClose,
  onMouseEnter,
  onNavigate,
}: ProductsMegaMenuProps) {
  const handleItemClick = (id: string) => {
    onClose()
    if (onNavigate) {
      onNavigate('product', id)
      return
    }

    const element = document.getElementById(id)
    if (element) {
      const navOffset = 90
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    } else {
      window.location.hash = `#${id}`
    }
  }

  const handleProductOverviewClick = () => {
    onClose()
    if (onNavigate) {
      onNavigate('product', 'product')
      return
    }

    const element = document.getElementById('product')
    if (element) {
      const navOffset = 90
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    } else {
      window.location.hash = '#product'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      onMouseEnter={onMouseEnter}
      className="absolute inset-x-0 top-full z-50 border-b border-slate-200/90 bg-white/98 shadow-2xl shadow-slate-900/10 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-5 pb-8">
        {/* Top Header Strip with Direct Link to #product */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 mb-6 gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-[#087bc1]">
              <Sparkles size={15} />
            </span>
            <div>
              <h4 className="text-sm font-bold text-[#15194f]">
                LNTBOOST Cloud ERP Suite
              </h4>
              <p className="text-xs text-slate-500">
                Five integrated solution categories for complete enterprise visibility
              </p>
            </div>
          </div>

          <a
            href="#product"
            onClick={handleProductOverviewClick}
            className="group inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-[#087bc1] transition-all hover:bg-[#087bc1] hover:text-white"
          >
            Explore Product Overview
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* 5 Solution Categories Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {menuCategories.map((category) => {
            const Icon = category.icon

            return (
              <div
                key={category.id}
                className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${category.borderHover}`}
              >
                {/* Header Icon + Title */}
                <div>
                  <a
                    href={`#${category.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleItemClick(category.id)
                    }}
                    className="block"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.bg} ${category.text} transition-transform duration-200 group-hover:scale-105`}
                      >
                        <Icon size={20} />
                      </span>
                      <ChevronRight
                        size={15}
                        className="text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-slate-700"
                      />
                    </div>

                    <h5 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-[#087bc1] transition-colors">
                      {category.title}
                    </h5>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-snug">
                      {category.tagline}
                    </p>
                  </a>

                  {/* Key Modules List */}
                  <div className="mt-3 border-t border-slate-100 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Modules
                    </span>
                    <ul className="mt-1.5 space-y-1.5">
                      {category.modules.map((m) => (
                        <li key={m}>
                          <a
                            href={`#${category.id}`}
                            onClick={(e) => {
                              e.preventDefault()
                              handleItemClick(category.id)
                            }}
                            className="flex items-center gap-1.5 text-xs text-slate-600 transition-colors hover:text-[#087bc1]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-[#087bc1]" />
                            <span className="truncate">{m}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-2 border-t border-slate-50">
                  <a
                    href={`#${category.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleItemClick(category.id)
                    }}
                    className={`inline-flex items-center gap-1 text-[11px] font-bold ${category.text} hover:underline`}
                  >
                    View Details
                    <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
