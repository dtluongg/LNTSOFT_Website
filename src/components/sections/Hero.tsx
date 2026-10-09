import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, BarChart3, Globe2, Layers3, Sparkles } from 'lucide-react'
import lntLogo from '../../assets/logo/lnt-logo.png'

const floatingItems = [
  {
    label: 'ERP',
    icon: Layers3,
    className: 'left-4 top-16',
  },
  {
    label: 'Analytics',
    icon: BarChart3,
    className: 'right-0 top-28',
  },
  {
    label: 'Digital',
    icon: Globe2,
    className: 'bottom-24 left-10',
  },
  {
    label: 'Innovation',
    icon: Sparkles,
    className: 'bottom-12 right-10',
  },
]

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f7fbff] pt-20"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -right-32 top-24 h-[500px] w-[500px] rounded-full bg-[#38bde8]/15 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -bottom-40 -left-32 h-[450px] w-[450px] rounded-full bg-[#087bc1]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left Content */}
        <div className="max-w-2xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <img
              src={lntLogo}
              alt="LNTSoft"
              className="h-20 w-20 object-contain"
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#087bc1]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#087bc1]">
              Technology & Innovation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#15194f] sm:text-6xl lg:text-7xl"
          >
            Technology
            <br />
            that drives
            <br />
            <span className="bg-gradient-to-r from-[#163d91] via-[#087bc1] to-[#24a6d8] bg-clip-text text-transparent">
              business.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Building innovative technology solutions that help businesses
            operate smarter, adapt faster, and move forward.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#solutions"
              className="group flex items-center gap-3 rounded-full bg-[#087bc1] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#087bc1]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#076da9] hover:shadow-2xl hover:shadow-[#087bc1]/25"
            >
              Discover LNTSoft

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#about"
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#087bc1]"
            >
              Who we are
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative mx-auto h-[480px] w-full max-w-[560px] lg:h-[580px]"
        >
          {/* Main Orb */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#087bc1]/10"
          >
            <div className="absolute -right-2 top-1/2 h-3 w-3 rounded-full bg-[#24a6d8] shadow-lg shadow-[#24a6d8]/40" />
          </motion.div>

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#38bde8]/10"
          >
            <div className="absolute left-1/2 -top-1 h-2.5 w-2.5 rounded-full bg-[#087bc1]" />
          </motion.div>

          {/* Center Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#163d91] via-[#087bc1] to-[#38bde8] opacity-80 blur-2xl"
          />

          {/* Center Logo */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.5rem] border border-white/40 bg-white/20 shadow-2xl shadow-[#087bc1]/20 backdrop-blur-xl"
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-white shadow-xl">
              <img
                src={lntLogo}
                alt="LNTSoft"
                className="h-24 w-24 object-contain"
              />
            </div>
          </motion.div>

          {/* Floating Items */}
          {floatingItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: 0.35 + index * 0.1,
                }}
                animate={{
                  y: [0, index % 2 === 0 ? -8 : 8, 0],
                }}
                className={`absolute ${item.className}`}
              >
                <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
                  <Icon size={15} className="text-[#087bc1]" />
                  {item.label}
                </div>
              </motion.div>
            )
          })}

          {/* Small Decorative Dots */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute right-16 top-12 h-2 w-2 rounded-full bg-[#24a6d8]"
          />

          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute bottom-20 left-20 h-2 w-2 rounded-full bg-[#087bc1]"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.8 }}
        animate={{ y: [0, 6, 0] }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[#087bc1]/60 transition-colors hover:text-[#087bc1]"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}

export default Hero