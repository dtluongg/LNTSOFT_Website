import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react'
import lntLogo from '../../assets/logo/lnt-logo-slogan.png'
import {
  productCategories,
  serviceCategories,
  industryCategoriesData,
  type NavMenuCategory,
} from './navbarData'

// =========================================================================
// 1. DRAWER KIỂU AWS GỌN GÀNG, NỀN TRẮNG ĐỤC, TẬP TRUNG
// =========================================================================

interface NavDrawerProps {
  isOpen: boolean
  title: string
  tagline: string
  categories: NavMenuCategory[]
  onItemClick: (cat: NavMenuCategory) => void
  onClose: () => void
}

function NavDrawer({ isOpen, title, tagline, categories, onItemClick, onClose }: NavDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Lớp phủ Backdrop tối mờ làm nổi bật menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 top-20 z-40 bg-slate-950/60 backdrop-blur-xs"
          />

          {/* Drawer menu trắng đục sắc nét */}
          <motion.div
            ref={drawerRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full z-50 border-b-2 border-slate-200 bg-white shadow-2xl shadow-slate-950/25"
          >
            {/* Thanh tiêu đề drawer */}
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

            {/* Lưới danh mục Card Grid */}
            <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
              <div
                className={`grid gap-4 ${
                  categories.length <= 3
                    ? 'grid-cols-1 md:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {categories.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <div
                      key={cat.id}
                      onClick={() => {
                        onItemClick(cat)
                        onClose()
                      }}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#087bc1]/60 hover:shadow-lg hover:shadow-slate-200/50 cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {Icon && (
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#087bc1] transition-colors group-hover:bg-[#087bc1] group-hover:text-white">
                                <Icon size={20} />
                              </span>
                            )}
                            <div>
                              <h5 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#087bc1] transition-colors">
                                {cat.title}
                              </h5>
                              {cat.subtitle && (
                                <p className="text-xs text-slate-400 font-medium">
                                  {cat.subtitle}
                                </p>
                              )}
                            </div>
                          </div>
                          <ArrowUpRight
                            size={16}
                            className="text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#087bc1]"
                          />
                        </div>

                        {cat.description && (
                          <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                            {cat.description}
                          </p>
                        )}

                        {/* Cấu hình hiển thị sub-items nếu sau này có điền vào mảng items trong navbarData.ts */}
                        {cat.items && cat.items.length > 0 && (
                          <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5">
                            {cat.items.map((sub) => (
                              <div
                                key={sub.id}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  onItemClick({
                                    ...cat,
                                    targetPage: sub.targetPage || cat.targetPage,
                                    targetId: sub.targetId || sub.id,
                                  })
                                  onClose()
                                }}
                                className="flex items-center justify-between py-1 px-2 rounded-lg hover:bg-slate-50 transition-colors"
                              >
                                <span className="text-xs font-medium text-slate-700">
                                  {sub.name}
                                </span>
                                {sub.badge && (
                                  <span className="text-[9px] bg-sky-100 text-[#087bc1] font-bold px-1.5 py-0.2 rounded-full">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#087bc1] group-hover:underline">
                          Access Module
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Nhấp chọn để mở trực tiếp phân hệ • Bấm ESC hoặc Close để đóng</span>
                <span>LNTSoft Architecture</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// =========================================================================
// 2. MAIN NAVBAR COMPONENT
// =========================================================================

export interface NavbarProps {
  currentPage?: 'home' | 'product'
  onNavigate?: (page: 'home' | 'product', targetId?: string) => void
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<'products' | 'services' | 'industries' | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setActiveMenu(null)

  const toggleMenu = (menu: 'products' | 'services' | 'industries') => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  // Điều hướng chuyển trang
  const handleItemNavigate = (cat: NavMenuCategory) => {
    closeMenu()
    const page = cat.targetPage || 'home'
    const targetId = cat.targetId || cat.id

    if (onNavigate) {
      onNavigate(page, targetId)
    } else {
      if (page === 'product') {
        window.location.href = `/#product#${targetId}`
      } else {
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // Nếu là Industries thì dispatch event đồng bộ tab
    if (cat.targetId === 'industries') {
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
    targetPage: 'home' | 'product' = 'home'
  ) => {
    closeMenu()
    if (onNavigate) {
      e.preventDefault()
      onNavigate(targetPage, targetSection)
    }
  }

  // Xử lý khi click vào nút PRODUCTS:
  // Chuyển trang sang trang ProductPage đồng thời mở menu Drawer
  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (currentPage !== 'product') {
      if (onNavigate) {
        onNavigate('product', 'product')
      } else {
        window.location.hash = '#product'
      }
    }
    toggleMenu('products')
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

          {/* Desktop Nav Items */}
          <div className="hidden items-center gap-1.5 md:flex">
            {/* PRODUCTS: 1 Click duy nhất vừa chuyển sang trang Product vừa mở Drawer */}
            <button
              type="button"
              onClick={handleProductsClick}
              className={`group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                currentPage === 'product' || activeMenu === 'products'
                  ? 'bg-slate-100 text-[#087bc1] font-bold'
                  : 'text-slate-700 hover:text-[#087bc1]'
              }`}
            >
              PRODUCTS
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  activeMenu === 'products' ? 'rotate-180 text-[#087bc1]' : 'text-slate-400'
                }`}
              />
            </button>

            {/* SERVICES */}
            <button
              type="button"
              onClick={() => toggleMenu('services')}
              className={`group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                activeMenu === 'services'
                  ? 'bg-slate-100 text-[#087bc1] font-bold'
                  : 'text-slate-700 hover:text-[#087bc1]'
              }`}
            >
              SERVICES
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  activeMenu === 'services' ? 'rotate-180 text-[#087bc1]' : 'text-slate-400'
                }`}
              />
            </button>

            {/* INDUSTRIES */}
            <button
              type="button"
              onClick={() => toggleMenu('industries')}
              className={`group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                activeMenu === 'industries'
                  ? 'bg-slate-100 text-[#087bc1] font-bold'
                  : 'text-slate-700 hover:text-[#087bc1]'
              }`}
            >
              INDUSTRIES
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  activeMenu === 'industries' ? 'rotate-180 text-[#087bc1]' : 'text-slate-400'
                }`}
              />
            </button>

            {/* METHODOLOGY */}
            <a
              href="#methodology"
              onClick={(e) => handleSectionNav(e, 'methodology', 'home')}
              className="rounded-full px-3.5 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:text-[#087bc1] cursor-pointer"
            >
              METHODOLOGY
            </a>

            {/* ABOUT */}
            <a
              href="#about"
              onClick={(e) => handleSectionNav(e, 'about', 'home')}
              className="rounded-full px-3.5 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:text-[#087bc1] cursor-pointer"
            >
              ABOUT
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              onClick={(e) => handleSectionNav(e, 'contact', currentPage)}
              className="ml-2 flex items-center gap-1.5 rounded-full bg-[#087bc1] px-4.5 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#087bc1]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#076da9] cursor-pointer"
            >
              CONTACT
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-700 transition-colors hover:text-[#087bc1] md:hidden cursor-pointer"
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        {/* ── BẢNG DRAWER CHUNG: PRODUCTS ── */}
        <NavDrawer
          isOpen={activeMenu === 'products'}
          title="LNTBOOST Cloud ERP Suite"
          tagline="Explore 5 core enterprise operational categories"
          categories={productCategories}
          onItemClick={handleItemNavigate}
          onClose={closeMenu}
        />

        {/* ── BẢNG DRAWER CHUNG: SERVICES ── */}
        <NavDrawer
          isOpen={activeMenu === 'services'}
          title="Implementation & Consultancy Services"
          tagline="End-to-end consulting, technical readiness, and 24/7 SLA"
          categories={serviceCategories}
          onItemClick={handleItemNavigate}
          onClose={closeMenu}
        />

        {/* ── BẢNG DRAWER CHUNG: INDUSTRIES ── */}
        <NavDrawer
          isOpen={activeMenu === 'industries'}
          title="Industry-Specific Engineering"
          tagline="Domain expertise battle-tested for manufacturing and logistics"
          categories={industryCategoriesData}
          onItemClick={handleItemNavigate}
          onClose={closeMenu}
        />

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
                <a
                  href="#product"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSectionNav(e, 'product', 'product')
                  }}
                  className="block py-2 text-sm font-semibold text-slate-800"
                >
                  PRODUCTS (LNTBOOST ERP)
                </a>
                <a
                  href="#industries"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSectionNav(e, 'industries', 'home')
                  }}
                  className="block py-2 text-sm font-semibold text-slate-800"
                >
                  INDUSTRIES
                </a>
                <a
                  href="#methodology"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSectionNav(e, 'methodology', 'home')
                  }}
                  className="block py-2 text-sm font-semibold text-slate-800"
                >
                  METHODOLOGY
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    setMobileOpen(false)
                    handleSectionNav(e, 'about', 'home')
                  }}
                  className="block py-2 text-sm font-semibold text-slate-800"
                >
                  ABOUT
                </a>
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
