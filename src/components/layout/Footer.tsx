import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import lntLogo from '../../assets/logo/lnt-logo.png'

const solutionLinks = [
  'ERP Solution',
  'Apparel Product Suite',
  'Data Analytics',
  'Insurance Solutions',
]

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Why LNTSoft', href: '#why-lntsoft' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'Contact Us', href: '#contact' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d1038] text-white">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#087bc1]/15 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#38bde8]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 border-b border-white/10 py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <a href="#hero" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-1.5">
                <img src={lntLogo} alt="LNTSoft" className="h-full w-full object-contain" />
              </div>

              <span className="text-xl font-semibold tracking-tight">
                LNT<span className="text-[#38bde8]">Soft</span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              Technology solutions designed to help businesses operate smarter,
              adapt faster and move forward.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#38bde8]"
            >
              Start a conversation
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white">
              Solutions
            </h3>

            <ul className="mt-6 space-y-4">
              {solutionLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#featured-solutions"
                    className="text-sm text-white/40 transition-colors duration-300 hover:text-[#38bde8]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/40 transition-colors duration-300 hover:text-[#38bde8]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-white">
              Get in touch
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:info@lnt-soft.com"
                className="group flex items-start gap-3 text-sm text-white/40 transition-colors hover:text-[#38bde8]"
              >
                <Mail size={17} className="mt-0.5 shrink-0" />
                <span>info@lnt-soft.com</span>
              </a>

              <a
                href="tel:+94112805000"
                className="group flex items-start gap-3 text-sm text-white/40 transition-colors hover:text-[#38bde8]"
              >
                <Phone size={17} className="mt-0.5 shrink-0" />
                <span>+94 11 280 5000</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/40">
                <MapPin size={17} className="mt-0.5 shrink-0" />
                <span>Sri Lanka</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} LNTSoft. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/70"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/70"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer