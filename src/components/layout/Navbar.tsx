import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import lntLogo from '../../assets/logo/lnt-logo-slogan.png'
import {
  productCategories,
  serviceCategories,
  industryCategoriesData,
  type NavMenuCategory,
  type NavSubItem,
} from './navbarData'

// =========================================================================
// 1. CONFIGURATION & TYPES
// =========================================================================

export type PageRoute = 'home' | 'product' | 'industry'
type DropdownMenuKey = 'products' | 'services' | 'industries'

const DRAWER_CONFIGS: Record<
  DropdownMenuKey,
  { title: string; tagline: string; categories: NavMenuCategory[] }
> = {
  products: {
    title: 'Products & Extension Platforms',
    tagline: 'LNTBOOST Cloud ERP Suite & Featured Add-On Solutions',
    categories: productCategories,
  },
  services: {
    title: 'Implementation & Consultancy Services',
    tagline: 'End-to-end consulting, technical readiness, and 24/7 SLA',
    categories: serviceCategories,
  },
  industries: {
    title: 'Industry-Specific Engineering',
    tagline: 'Domain expertise battle-tested for Manufacturing, Apparel & FinTech',
    categories: industryCategoriesData,
  },
}

const NAV_DROPDOWNS: { id: DropdownMenuKey; label: string; page?: PageRoute }[] = [
  { id: 'products', label: 'PRODUCTS', page: 'product' },
  { id: 'services', label: 'SERVICES' },
  { id: 'industries', label: 'INDUSTRIES', page: 'industry' },
]

const NAV_LINKS = [
  { id: 'methodology', label: 'METHODOLOGY' },
  { id: 'about', label: 'ABOUT' },
]

// =========================================================================
// 2. NAV DRAWER COMPONENT (Two-Tier for Products, Single-Tier for Services/Industries)
// =========================================================================

interface NavDrawerProps {
  title: string
  tagline: string
  categories: NavMenuCategory[]
  onItemClick: (cat: NavMenuCategory, sub?: NavSubItem) => void
  onClose: () => void
}

function NavDrawer({ title, tagline, categories, onItemClick, onClose }: NavDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const hasSubItems = categories.some((c) => c.items && c.items.length > 0)
  const [activeParentId, setActiveParentId] = useState<string | null>(
    () => (hasSubItems ? categories[0]?.id || null : null)
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const activeCategory = categories.find((c) => c.id === activeParentId) || categories[0]

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
        className="fixed inset-0 top-20 z-40 bg-slate-950/60 backdrop-blur-xs"
      />

      {/* Drawer Container */}
      <motion.div
        ref={drawerRef}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-full z-50 border-b-2 border-slate-200 bg-white shadow-2xl shadow-slate-950/25"
      >
        {/* Header Bar */}
        <div className="border-b border-slate-100 bg-slate-50/90 px-6 py-2.5 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#087bc1]">
                {title}
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-400">•</span>
              <p className="hidden sm:inline-block text-xs text-slate-500 font-medium">
                {tagline}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300 hover:text-slate-900 cursor-pointer"
            >
              <span>Close</span>
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          {hasSubItems ? (
            /* ── A. TWO-TIER VIEW (For Products) ── */
            <div>
              {/* Tier 1: Fixed-Height Parent Selector Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((cat) => {
                  const Icon = cat.icon
                  const isActive = activeParentId === cat.id

                  return (
                    <div
                      key={cat.id}
                      onClick={() => setActiveParentId(cat.id)}
                      className={`relative group rounded-2xl border p-4 sm:p-5 transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'border-[#087bc1] bg-sky-50/70 shadow-md ring-2 ring-[#087bc1]/20'
                          : 'border-slate-200/90 bg-white hover:border-[#087bc1]/50 hover:bg-slate-50/60 shadow-xs'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {Icon && (
                          <span
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all shadow-xs ${
                              isActive
                                ? 'bg-[#087bc1] text-white shadow-sky-500/30'
                                : 'bg-sky-50 text-[#087bc1] group-hover:bg-[#087bc1] group-hover:text-white'
                            }`}
                          >
                            <Icon size={22} />
                          </span>
                        )}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h5
                              className={`text-sm sm:text-base font-bold truncate transition-colors ${
                                isActive ? 'text-[#087bc1]' : 'text-slate-900 group-hover:text-[#087bc1]'
                              }`}
                            >
                              {cat.title}
                            </h5>
                            {cat.badge && (
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 transition-colors ${
                                  isActive ? 'bg-[#087bc1] text-white' : 'bg-sky-100 text-[#087bc1]'
                                }`}
                              >
                                {cat.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                            {cat.subtitle || cat.description}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 ml-3 flex items-center">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                            isActive
                              ? 'bg-[#087bc1]/10 text-[#087bc1] font-bold'
                              : 'text-slate-400 group-hover:text-[#087bc1] group-hover:bg-sky-50'
                          }`}
                        >
                          {isActive ? 'Active' : 'Select'}
                        </span>
                      </div>

                      {/* Caret pointer connecting to sub-canvas */}
                      {isActive && (
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[8px] border-x-transparent border-t-[8px] border-t-[#087bc1] z-20 hidden md:block" />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Tier 2: Dedicated Sub-Items Canvas */}
              {activeCategory?.items && activeCategory.items.length > 0 && (
                <div className="mt-4 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#087bc1]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Module Directory: {activeCategory.title}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        ({activeCategory.items.length} solutions)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onItemClick(activeCategory)}
                      className="text-xs font-bold text-[#087bc1] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore {activeCategory.title}</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className={`grid gap-3 ${
                        activeCategory.items.length <= 4
                          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      }`}
                    >
                      {activeCategory.items.map((sub) => {
                        const SubIcon = sub.icon
                        return (
                          <div
                            key={sub.id}
                            onClick={() => onItemClick(activeCategory, sub)}
                            className="group/sub flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/90 bg-white hover:border-[#087bc1] hover:shadow-md hover:shadow-sky-950/5 hover:-translate-y-0.5 transition-all cursor-pointer"
                          >
                            {SubIcon && (
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 border border-sky-100 text-[#087bc1] group-hover/sub:bg-[#087bc1] group-hover/sub:text-white transition-colors mt-0.5 shadow-xs">
                                <SubIcon size={16} />
                              </span>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h6 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover/sub:text-[#087bc1] transition-colors truncate">
                                  {sub.name}
                                </h6>
                                <ArrowUpRight
                                  size={13}
                                  className="text-slate-300 opacity-0 group-hover/sub:opacity-100 group-hover/sub:text-[#087bc1] transition-all shrink-0 ml-1"
                                />
                              </div>
                              {sub.desc && (
                                <p className="text-[11px] text-slate-500 leading-snug mt-1 line-clamp-2">
                                  {sub.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          ) : (
            /* ── B. SINGLE-TIER VIEW (For Services & Industries) ── */
            <div
              className={`grid gap-5 ${
                categories.length === 2
                  ? 'grid-cols-1 lg:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-3'
              }`}
            >
              {categories.map((cat) => {
                const Icon = cat.icon
                return (
                  <div
                    key={cat.id}
                    onClick={() => onItemClick(cat)}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 hover:-translate-y-0.5 hover:border-[#087bc1]/60 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-200 cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {Icon && (
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#087bc1] group-hover:bg-[#087bc1] group-hover:text-white transition-colors shadow-xs">
                              <Icon size={22} />
                            </span>
                          )}
                          <div>
                            <h5 className="text-base font-bold text-slate-900 group-hover:text-[#087bc1] transition-colors">
                              {cat.title}
                            </h5>
                            {cat.subtitle && (
                              <p className="text-xs text-slate-400 font-medium mt-0.5">
                                {cat.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                        <ArrowUpRight
                          size={18}
                          className="text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#087bc1]"
                        />
                      </div>

                      {cat.description && (
                        <p className="mt-3 text-xs text-slate-600 leading-relaxed font-normal">
                          {cat.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#087bc1] group-hover:underline">
                        Access Module
                      </span>
                      <span className="text-xs text-slate-400 group-hover:text-[#087bc1] transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Footer Bar */}
          <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087bc1]" />
              <span>
                {hasSubItems
                  ? 'Select a solution category above to explore specialized modules • Press ESC or Close to dismiss'
                  : 'Click any solution card to navigate to its details • Press ESC or Close to dismiss'}
              </span>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="font-bold text-[#087bc1] hover:underline flex items-center gap-1"
            >
              <span>Need customized solution architecture? Contact our engineers</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  )
}

// =========================================================================
// 3. MAIN NAVBAR COMPONENT
// =========================================================================

export interface NavbarProps {
  currentPage?: PageRoute
  onNavigate?: (page: PageRoute, targetId?: string) => void
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<DropdownMenuKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setActiveMenu(null)
  const toggleMenu = (menu: DropdownMenuKey) => {
    setActiveMenu((prev) => (prev === menu ? null : menu))
  }

  // Unified Item Navigation Handler
  const handleItemNavigate = (cat: NavMenuCategory, sub?: NavSubItem) => {
    closeMenu()
    const page = sub?.targetPage || cat.targetPage || 'home'
    const targetId = sub?.targetId || sub?.id || cat.targetId || cat.id

    if (onNavigate) {
      onNavigate(page, targetId)
    } else {
      if (page === 'product' || page === 'industry') {
        window.location.href = `/#${page}#${targetId}`
      } else {
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // Sync tab with IndustryFocus if on homepage
    if (cat.id === 'industries' || targetId === 'industries') {
      const idx = industryCategoriesData.findIndex((i) => i.id === cat.id)
      if (idx !== -1) {
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent('industry-select-tab', { detail: { index: idx, id: cat.id } })
          )
        }, 200)
      }
    }
  }

  const handleSectionNav = (
    e: React.MouseEvent,
    targetSection: string,
    targetPage: PageRoute = 'home'
  ) => {
    closeMenu()
    if (onNavigate) {
      e.preventDefault()
      onNavigate(targetPage, targetSection)
    }
  }

  const handleDropdownClick = (
    e: React.MouseEvent,
    menu: DropdownMenuKey,
    page?: PageRoute
  ) => {
    e.preventDefault()
    if (page && currentPage !== page) {
      if (onNavigate) {
        onNavigate(page, page)
      } else {
        window.location.hash = `#${page}`
      }
    }
    toggleMenu(menu)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || activeMenu !== null
            ? 'border-b border-slate-200/90 bg-white shadow-md'
            : 'border-b border-slate-200/60 bg-white/98 shadow-xs'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate('home')
              }
            }}
            className="flex items-center cursor-pointer"
          >
            <img src={lntLogo} alt="LNTSoft" className="h-40 w-40 object-contain" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1.5 md:flex">
            {NAV_DROPDOWNS.map((item) => {
              const isSelected = currentPage === item.page || activeMenu === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => handleDropdownClick(e, item.id, item.page)}
                  className={`group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-slate-100 text-[#087bc1] font-bold'
                      : 'text-slate-700 hover:text-[#087bc1]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      activeMenu === item.id ? 'rotate-180 text-[#087bc1]' : 'text-slate-400'
                    }`}
                  />
                </button>
              )
            })}

            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSectionNav(e, link.id, 'home')}
                className="rounded-full px-3.5 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:text-[#087bc1] cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleSectionNav(e, 'contact', currentPage)}
              className="ml-2 flex items-center gap-1.5 rounded-full bg-[#087bc1] px-4.5 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#087bc1]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#076da9] cursor-pointer"
            >
              CONTACT
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-700 transition-colors hover:text-[#087bc1] md:hidden cursor-pointer"
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        {/* ── UNIFIED DRAWER INSTANCE (Single Instance Mounted Dynamically) ── */}
        <AnimatePresence>
          {activeMenu && (
            <NavDrawer
              title={DRAWER_CONFIGS[activeMenu].title}
              tagline={DRAWER_CONFIGS[activeMenu].tagline}
              categories={DRAWER_CONFIGS[activeMenu].categories}
              onItemClick={handleItemNavigate}
              onClose={closeMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-200/70 bg-white md:hidden"
            >
              <div className="space-y-2 px-6 py-5">
                {NAV_DROPDOWNS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.page || item.id}`}
                    onClick={(e) => {
                      setMobileOpen(false)
                      handleSectionNav(e, item.page || item.id, item.page || 'home')
                    }}
                    className="block py-2 text-sm font-semibold text-slate-800"
                  >
                    {item.label}
                  </a>
                ))}

                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      setMobileOpen(false)
                      handleSectionNav(e, link.id, 'home')
                    }}
                    className="block py-2 text-sm font-semibold text-slate-800"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSectionNav(e, 'contact', currentPage)
                  }}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#087bc1] px-5 py-3 text-sm font-semibold text-white"
                >
                  CONTACT
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
