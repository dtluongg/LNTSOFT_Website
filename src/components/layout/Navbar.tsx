import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import lntLogo from '../../assets/logo/lnt-logo-slogan.png'
import { ProductsMegaMenu } from './ProductsMegaMenu'

const services = [
  'Consultancy',
  'System Implementation & Maintenance',
  'ERP Awareness Programs',
  'Evaluating Feasibility Studies',
  'Training & Certifications',
]

export interface NavbarProps {
  currentPage?: 'home' | 'product'
  onNavigate?: (page: 'home' | 'product', targetId?: string) => void
}

function Navbar({ currentPage = 'home', onNavigate }: NavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<'products' | 'services' | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Track page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Smooth hover handlers with small debounce to prevent abrupt disappearing
  const handleMouseEnter = (menu: 'products' | 'services') => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
      menuTimeoutRef.current = null
    }
    setOpenMenu(menu)
  }

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    menuTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null)
    }, 180)
  }

  const closeMenu = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    setOpenMenu(null)
  }

  const handleSectionNav = (
    e: React.MouseEvent,
    targetSection: string,
    targetPage: 'home' | 'product' = 'home'
  ) => {
    closeMenu()
    if (onNavigate) {
      e.preventDefault()
      onNavigate(targetPage, targetSection)
    }
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled || openMenu
            ? 'border-b border-slate-200/90 bg-white/98 shadow-md backdrop-blur-xl'
            : 'border-b border-slate-200/60 bg-white/95 shadow-xs backdrop-blur-md'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Brand Logo */}
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
            <img
              src={lntLogo}
              alt="LNTSoft"
              className="h-40 w-40 object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-2 md:flex">
            {/* PRODUCTS (Hover trigger & click to #product page) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
            >
              <a
                href="#product"
                onClick={(e) => {
                  closeMenu()
                  if (onNavigate) {
                    e.preventDefault()
                    onNavigate('product', 'product')
                  } else {
                    const el = document.getElementById('product')
                    if (el) {
                      const navOffset = 80
                      const elementPosition = el.getBoundingClientRect().top
                      const offsetPosition =
                        elementPosition + window.pageYOffset - navOffset
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                    }
                  }
                }}
                className={`group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                  currentPage === 'product' || openMenu === 'products'
                    ? 'text-[#087bc1] font-bold bg-sky-50/80'
                    : 'text-slate-700 hover:text-[#087bc1]'
                }`}
              >
                PRODUCTS
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    openMenu === 'products'
                      ? 'rotate-180 text-[#087bc1]'
                      : 'text-slate-400 group-hover:text-[#087bc1]'
                  }`}
                />
              </a>
            </div>

            {/* SERVICES (Hover trigger) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenMenu(openMenu === 'services' ? null : 'services')
                }
                className={`group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                  openMenu === 'services'
                    ? 'text-[#087bc1] bg-sky-50/80'
                    : 'text-slate-700 hover:text-[#087bc1]'
                }`}
              >
                SERVICES
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    openMenu === 'services'
                      ? 'rotate-180 text-[#087bc1]'
                      : 'text-slate-400 group-hover:text-[#087bc1]'
                  }`}
                />
              </button>

              <AnimatePresence>
                {openMenu === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    onMouseEnter={() => handleMouseEnter('services')}
                    className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-xl shadow-slate-900/10 backdrop-blur-xl"
                  >
                    {services.map((service) => (
                      <a
                        key={service}
                        href="#contact"
                        onClick={(e) => handleSectionNav(e, 'contact', 'home')}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-[#087bc1]"
                      >
                        <span>{service}</span>
                        <ArrowUpRight
                          size={15}
                          className="text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#087bc1]"
                        />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INDUSTRIES */}
            <a
              href="#industries"
              onClick={(e) => handleSectionNav(e, 'industries', 'home')}
              className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:text-[#087bc1] cursor-pointer"
            >
              INDUSTRIES
            </a>

            {/* METHODOLOGY */}
            <a
              href="#methodology"
              onClick={(e) => handleSectionNav(e, 'methodology', 'home')}
              className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:text-[#087bc1] cursor-pointer"
            >
              METHODOLOGY
            </a>

            {/* ABOUT */}
            <a
              href="#about"
              onClick={(e) => handleSectionNav(e, 'about', 'home')}
              className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:text-[#087bc1] cursor-pointer"
            >
              ABOUT
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              onClick={(e) => handleSectionNav(e, 'contact', currentPage)}
              className="ml-3 flex items-center gap-2 rounded-full bg-[#087bc1] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#087bc1]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#076da9] cursor-pointer"
            >
              CONTACT
              <ArrowUpRight size={15} />
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

        {/* Desktop Products Mega Menu */}
        <AnimatePresence>
          {openMenu === 'products' && (
            <ProductsMegaMenu
              onClose={closeMenu}
              onMouseEnter={() => handleMouseEnter('products')}
              onNavigate={onNavigate}
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
                {/* Mobile Products Accordion with 5 Categories */}
                <details className="group" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-sm font-semibold text-slate-800">
                    <span
                      onClick={(e) => {
                        e.stopPropagation()
                        setMobileOpen(false)
                        handleSectionNav(e, 'product', 'product')
                      }}
                      className={`font-bold cursor-pointer ${
                        currentPage === 'product' ? 'text-[#087bc1]' : 'text-slate-900'
                      }`}
                    >
                      PRODUCTS (LNTBOOST ERP)
                    </span>
                    <ChevronDown
                      size={17}
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>

                  <div className="space-y-1 pb-2 pl-3">
                    <a
                      href="#product"
                      onClick={(e) => {
                        setMobileOpen(false)
                        handleSectionNav(e, 'product', 'product')
                      }}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold text-[#087bc1] bg-sky-50"
                    >
                      Overview (LNTBOOST Cloud ERP)
                    </a>
                    <a
                      href="#commercial"
                      onClick={(e) => {
                        setMobileOpen(false)
                        handleSectionNav(e, 'commercial', 'product')
                      }}
                      className="block rounded-lg px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#087bc1]"
                    >
                      Commercial (CRM & Sales)
                    </a>
                    <a
                      href="#supply-chain"
                      onClick={(e) => {
                        setMobileOpen(false)
                        handleSectionNav(e, 'supply-chain', 'product')
                      }}
                      className="block rounded-lg px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#087bc1]"
                    >
                      Supply Chain (Procurement & IWM)
                    </a>
                    <a
                      href="#manufacturing-operations"
                      onClick={(e) => {
                        setMobileOpen(false)
                        handleSectionNav(e, 'manufacturing-operations', 'product')
                      }}
                      className="block rounded-lg px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#087bc1]"
                    >
                      Manufacturing Operations (MRP & MES)
                    </a>
                    <a
                      href="#financial-management"
                      onClick={(e) => {
                        setMobileOpen(false)
                        handleSectionNav(e, 'financial-management', 'product')
                      }}
                      className="block rounded-lg px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#087bc1]"
                    >
                      Financial Management (Costing)
                    </a>
                    <a
                      href="#enterprise-management"
                      onClick={(e) => {
                        setMobileOpen(false)
                        handleSectionNav(e, 'enterprise-management', 'product')
                      }}
                      className="block rounded-lg px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#087bc1]"
                    >
                      Enterprise Management (BI Analytics)
                    </a>
                  </div>
                </details>

                {/* SERVICES */}
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-sm font-semibold text-slate-800">
                    SERVICES
                    <ChevronDown
                      size={17}
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>

                  <div className="space-y-1 pb-2 pl-3">
                    {services.map((service) => (
                      <a
                        key={service}
                        href="#contact"
                        onClick={(e) => {
                          setMobileOpen(false)
                          handleSectionNav(e, 'contact', 'home')
                        }}
                        className="block rounded-lg px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#087bc1]"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </details>

                <a
                  href="#industries"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSectionNav(e, 'industries', 'home')
                  }}
                  className="block py-2.5 text-sm font-semibold text-slate-800"
                >
                  INDUSTRIES
                </a>

                <a
                  href="#methodology"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSectionNav(e, 'methodology', 'home')
                  }}
                  className="block py-2.5 text-sm font-semibold text-slate-800"
                >
                  METHODOLOGY
                </a>

                <a
                  href="#about"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSectionNav(e, 'about', 'home')
                  }}
                  className="block py-2.5 text-sm font-semibold text-slate-800"
                >
                  ABOUT
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSectionNav(e, 'contact', currentPage)
                  }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#087bc1] px-5 py-3 text-sm font-semibold text-white"
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
