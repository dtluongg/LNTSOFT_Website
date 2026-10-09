import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import lntLogo from '../../assets/logo/lnt-logo.png'

const solutions = [
  'ERP Solution',
  'Apparel Product Suite',
  'Data Analytic Toolkit',
  'Insurance Solutions',
  'Banking & Wealth Management',
  'Other Featured Solutions',
]

const services = [
  'Consultancy',
  'System Implementation & Maintenance',
  'ERP Awareness Programs',
  'Evaluating Feasibility Studies',
  'Training & Certifications',
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<'solutions' | 'services' | null>(
    null,
  )
  const [mobileOpen, setMobileOpen] = useState(false)

  // Detect when user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close desktop mega menu when clicking outside
  const closeMenu = () => {
    setOpenMenu(null)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={lntLogo}
              alt="LNTSoft"
              className="h-12 w-12 object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {/* Solutions */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenMenu(openMenu === 'solutions' ? null : 'solutions')
                }
                className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#087bc1]"
              >
                Solutions
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    openMenu === 'solutions' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openMenu === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-xl shadow-slate-900/5 backdrop-blur-xl"
                  >
                    {solutions.map((solution) => (
                      <a
                        key={solution}
                        href="#products"
                        onClick={closeMenu}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-[#087bc1]"
                      >
                        <span>{solution}</span>

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

            {/* Services */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenMenu(openMenu === 'services' ? null : 'services')
                }
                className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#087bc1]"
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    openMenu === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openMenu === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-xl shadow-slate-900/5 backdrop-blur-xl"
                  >
                    {services.map((service) => (
                      <a
                        key={service}
                        href="#contact"
                        onClick={closeMenu}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-[#087bc1]"
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

            {/* About */}
            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#087bc1]"
            >
              About
            </a>

            {/* Capabilities */}
            <a
              href="#capabilities"
              onClick={closeMenu}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#087bc1]"
            >
              Capabilities
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="ml-3 flex items-center gap-2 rounded-full bg-[#087bc1] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#087bc1]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#076da9]"
            >
              Contact Us
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-700 transition-colors hover:text-[#087bc1] md:hidden"
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-200/70 bg-white md:hidden"
            >
              <div className="space-y-2 px-6 py-5">
                {/* Solutions */}
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold text-slate-800">
                    Solutions
                    <ChevronDown
                      size={17}
                      className="transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <div className="space-y-1 pb-2 pl-3">
                    {solutions.map((solution) => (
                      <a
                        key={solution}
                        href="#products"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#087bc1]"
                      >
                        {solution}
                      </a>
                    ))}
                  </div>
                </details>

                {/* Services */}
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold text-slate-800">
                    Services
                    <ChevronDown
                      size={17}
                      className="transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <div className="space-y-1 pb-2 pl-3">
                    {services.map((service) => (
                      <a
                        key={service}
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#087bc1]"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </details>

                <a
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-semibold text-slate-800"
                >
                  About
                </a>

                <a
                  href="#capabilities"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-semibold text-slate-800"
                >
                  Capabilities
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#087bc1] px-5 py-3 text-sm font-semibold text-white"
                >
                  Contact Us
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
