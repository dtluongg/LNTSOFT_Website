import { useState } from 'react'
import { ArrowUpRight, Boxes, Factory, Globe2, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'

const solutions = [
  {
    number: '01',
    title: 'Enterprise Software',
    shortTitle: 'Enterprise',
    description:
      'Business applications designed to simplify operations, connect teams and improve everyday decision-making.',
    icon: Boxes,
    tags: ['ERP', 'Business Applications', 'Integration'],
  },
  {
    number: '02',
    title: 'Apparel Technology',
    shortTitle: 'Apparel',
    description:
      'Industry-focused solutions that help apparel businesses manage production, performance and operational data.',
    icon: Factory,
    tags: ['Production', 'Planning', 'Analytics'],
  },
  {
    number: '03',
    title: 'Digital Transformation',
    shortTitle: 'Digital',
    description:
      'Modern technology and connected systems that help organizations move from fragmented processes to smarter operations.',
    icon: Globe2,
    tags: ['Modernization', 'Automation', 'Data'],
  },
  {
    number: '04',
    title: 'IT Consulting',
    shortTitle: 'Consulting',
    description:
      'Technology expertise and software engineering capabilities tailored to each organization’s business needs.',
    icon: Lightbulb,
    tags: ['Strategy', 'Engineering', 'Advisory'],
  },
]

function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSolution = solutions[activeIndex]
  const ActiveIcon = activeSolution.icon

  return (
    <section id="solutions" className="relative overflow-hidden bg-[#f5f9fc] py-28 sm:py-36">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-20 -right-40 h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#087bc1]" />

              <span className="text-xs font-semibold tracking-[0.28em] text-[#087bc1] uppercase">What We Do</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-4xl leading-[1.03] font-semibold tracking-[-0.04em] text-[#15194f] sm:text-5xl lg:text-6xl"
            >
              Technology built around <span className="text-[#087bc1]">real business needs.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-xl text-base leading-8 text-slate-600 lg:ml-auto"
          >
            We combine software engineering, industry knowledge and technology consulting to create solutions that
            deliver meaningful business value.
          </motion.p>
        </div>

        {/* =====================================================
            INTERACTIVE SOLUTIONS
        ===================================================== */}

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* =================================================
              LEFT — SOLUTION LIST
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              const isActive = index === activeIndex

              return (
                <button
                  key={solution.number}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 sm:p-5 ${
                    isActive ? 'bg-[#f0f8fc]' : 'hover:bg-slate-50'
                  }`}
                >
                  {/* Active indicator */}

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scaleY: isActive ? 1 : 0.5,
                    }}
                    className="absolute top-3 bottom-3 left-0 w-1 origin-center rounded-full bg-[#087bc1]"
                  />

                  {/* Number */}

                  <span
                    className={`w-8 shrink-0 text-xs font-semibold transition-colors duration-300 ${isActive ? 'text-[#087bc1]' : 'text-slate-400'}`}
                  >
                    {solution.number}
                  </span>

                  {/* Icon */}

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${isActive ? 'bg-[#087bc1] text-white shadow-lg shadow-[#087bc1]/20' : 'bg-slate-100 text-slate-500 group-hover:text-[#087bc1]'}`}
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  {/* Title */}

                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${isActive ? 'text-[#15194f]' : 'text-slate-700'}`}
                    >
                      {solution.title}
                    </div>

                    <div className="mt-1 text-xs text-slate-400">{solution.shortTitle} solutions</div>
                  </div>

                  {/* Arrow */}

                  <ArrowUpRight
                    size={18}
                    className={`shrink-0 transition-all duration-300 ${isActive ? 'translate-x-0.5 -translate-y-0.5 text-[#087bc1]' : 'text-slate-300'}`}
                  />
                </button>
              )
            })}
          </motion.div>

          {/* =================================================
              RIGHT — VISUAL
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#15194f] p-8 shadow-2xl shadow-[#15194f]/10 sm:p-10 lg:min-h-[560px]"
          >
            {/* Background glow */}

            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#38bde8]/20 blur-3xl"
            />

            <motion.div
              animate={{
                x: [0, -20, 0],
                y: [0, 25, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#087bc1]/20 blur-3xl"
            />

            {/* Decorative rings */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute top-[-100px] right-[-100px] h-[420px] w-[420px] rounded-full border border-white/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute top-[-50px] right-[-50px] h-[320px] w-[320px] rounded-full border border-[#38bde8]/10"
            />

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-[0.2em] text-[#38bde8]">{activeSolution.number}</span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
                    LNTSoft Solutions
                  </span>
                </div>

                {/* Animated icon */}

                <motion.div
                  key={activeSolution.number}
                  initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-14 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white/10 text-[#38bde8] shadow-xl shadow-black/10 backdrop-blur-xl"
                >
                  <ActiveIcon size={36} strokeWidth={1.4} />
                </motion.div>

                {/* Title */}

                <motion.h3
                  key={`${activeSolution.number}-title`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="mt-8 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                  {activeSolution.title}
                </motion.h3>

                {/* Description */}

                <motion.p
                  key={`${activeSolution.number}-description`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base"
                >
                  {activeSolution.description}
                </motion.p>
              </div>

              {/* Bottom */}

              <div className="mt-12">
                {/* Tags */}

                <motion.div
                  key={`${activeSolution.number}-tags`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="flex flex-wrap gap-2"
                >
                  {activeSolution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Bottom line */}

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-xs tracking-[0.2em] text-white/40 uppercase">Explore our capabilities</span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#15194f] transition-transform duration-300 hover:-translate-y-1 hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
