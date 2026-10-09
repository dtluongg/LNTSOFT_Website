import { motion } from 'framer-motion'
import { ArrowUpRight, BrainCircuit, Handshake, Layers3, Rocket } from 'lucide-react'

const reasons = [
  {
    number: '01',
    title: 'Business-first thinking',
    description:
      'We start with business challenges, not technology. Every solution is designed around the way organizations actually operate.',
    icon: BrainCircuit,
  },
  {
    number: '02',
    title: 'Industry expertise',
    description:
      'Our experience across enterprise and industry-specific environments helps us understand complex operational requirements.',
    icon: Layers3,
  },
  {
    number: '03',
    title: 'Long-term partnership',
    description:
      'We work alongside our clients beyond implementation, continuously improving solutions as their businesses evolve.',
    icon: Handshake,
  },
  {
    number: '04',
    title: 'Technology that evolves',
    description:
      'We embrace modern technologies and engineering practices to build solutions that remain adaptable for the future.',
    icon: Rocket,
  },
]

function WhyLNTSoft() {
  return (
    <section id="why-lntsoft" className="relative overflow-hidden bg-[#15194f] py-28 sm:py-36">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#38bde8]/15 blur-[130px]"
      />

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#087bc1]/20 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#38bde8]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#38bde8]">
                Why LNTSoft
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              More than technology.
              <br />
              <span className="text-[#38bde8]">A partner for progress.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 max-w-lg text-base leading-8 text-white/55 sm:text-lg"
            >
              We combine technology, business understanding and long-term
              collaboration to help organizations turn complex challenges into
              opportunities.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#38bde8]/40 hover:bg-white/10"
            >
              Let's work together
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-7 top-0 w-px bg-white/10" />

            <div className="space-y-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon

                return (
                  <motion.article
                    key={reason.number}
                    initial={{ opacity: 0, x: 45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative pl-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, amount: 0.25 }}
                      transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                      className="absolute left-0 top-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#15194f] text-[#38bde8] shadow-xl shadow-black/10"
                    >
                      <Icon size={22} strokeWidth={1.6} />
                    </motion.div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#38bde8]/25 group-hover:bg-white/[0.07] sm:p-8">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <span className="text-xs font-semibold tracking-[0.2em] text-[#38bde8]/70">
                            {reason.number}
                          </span>

                          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                            {reason.title}
                          </h3>
                        </div>

                        <ArrowUpRight
                          size={19}
                          className="shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#38bde8]"
                        />
                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                        {reason.description}
                      </p>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyLNTSoft