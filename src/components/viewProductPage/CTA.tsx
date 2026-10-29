import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0c1033] via-[#15194f] to-[#163d91] py-16 text-white sm:py-20">
      {/* Subtle decorative glowing mesh */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300"
        >
          LET'S BUILD A SMARTER FUTURE TOGETHER
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Discover how LNTBOOST Cloud ERP can help you streamline operations, optimize resources
          and achieve sustainable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#087bc1] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-2xl"
          >
            Request a Demo
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/20"
          >
            Contact Us
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
