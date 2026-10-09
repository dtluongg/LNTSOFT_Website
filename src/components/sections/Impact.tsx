import { motion } from 'framer-motion'
import { ArrowUpRight, Globe2, Users, BriefcaseBusiness, Clock3 } from 'lucide-react'

const impactStats = [
  {
    value: '20+',
    label: 'Years of experience',
    description: 'Building technology and business solutions.',
    icon: Clock3,
  },
  {
    value: '100+',
    label: 'Combined experience',
    description: 'Years of expertise across our team.',
    icon: Users,
  },
  {
    value: '10+',
    label: 'Industries served',
    description: 'Technology applied across diverse business environments.',
    icon: BriefcaseBusiness,
  },
  {
    value: 'Global',
    label: 'Business reach',
    description: 'Technology supporting organizations across markets.',
    icon: Globe2,
  },
]

function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden bg-[#f5f9fc] py-28 sm:py-36">
      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#38bde8]/15 blur-[130px]"
      />

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#087bc1]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#087bc1]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#087bc1]">
                Our Impact
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#15194f] sm:text-5xl lg:text-6xl"
            >
              Experience that creates{' '}
              <span className="text-[#087bc1]">lasting impact.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-xl text-base leading-8 text-slate-600 lg:ml-auto"
          >
            Our journey is measured not only by the technology we build, but
            by the businesses we help transform and the people we work with.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#087bc1]/20 hover:shadow-xl hover:shadow-[#087bc1]/10"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f8fc] text-[#087bc1] transition-all duration-500 group-hover:bg-[#087bc1] group-hover:text-white"
                >
                  <Icon size={19} strokeWidth={1.7} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                  className="mt-10"
                >
                  <div className="text-5xl font-semibold tracking-[-0.05em] text-[#15194f] sm:text-6xl">
                    {stat.value}
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-[#15194f]">
                    {stat.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {stat.description}
                  </p>
                </motion.div>

                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#38bde8]/5 blur-2xl transition-transform duration-700 group-hover:scale-150" />
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 overflow-hidden rounded-[2rem] bg-[#15194f] p-8 sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#38bde8]">
                Built for the long term
              </span>

              <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Technology should create value today — and continue to create
                value tomorrow.
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#15194f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#38bde8]"
            >
              Start a conversation
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Impact