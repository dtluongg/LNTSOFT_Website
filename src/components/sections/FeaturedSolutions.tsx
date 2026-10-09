import { ArrowUpRight, BarChart3, Database, Factory, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const featuredSolutions = [
  {
    number: '01',
    title: 'ERP Solutions',
    category: 'Enterprise Technology',
    description: 'Integrated business solutions that connect operations, people and data across the organization.',
    icon: Database,
    size: 'large',
  },
  {
    number: '02',
    title: 'Apparel Technology',
    category: 'Industry Solutions',
    description: 'Technology designed around the complex operational needs of modern apparel businesses.',
    icon: Factory,
    size: 'small',
  },
  {
    number: '03',
    title: 'Data & Analytics',
    category: 'Business Intelligence',
    description: 'Turn operational data into meaningful insights for faster and better decisions.',
    icon: BarChart3,
    size: 'small',
  },
  {
    number: '04',
    title: 'Insurance Solutions',
    category: 'Financial Technology',
    description: 'Digital solutions that help insurance organizations improve efficiency and customer experience.',
    icon: ShieldCheck,
    size: 'large',
  },
]

function FeaturedSolutions() {
  return (
    <section id="featured-solutions" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-20 -right-40 h-96 w-96 rounded-full bg-[#38bde8]/10 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#087bc1]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#087bc1]" />
              <span className="text-xs font-semibold tracking-[0.28em] text-[#087bc1] uppercase">
                Featured Solutions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-4xl leading-[1.03] font-semibold tracking-[-0.04em] text-[#15194f] sm:text-5xl lg:text-6xl"
            >
              Solutions designed for <span className="text-[#087bc1]">real-world impact.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-xl text-base leading-8 text-slate-600 lg:ml-auto"
          >
            From enterprise platforms to industry-focused technology, we build solutions that help organizations work
            smarter and grow with confidence.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-2">
          {featuredSolutions.map((solution, index) => {
            const Icon = solution.icon
            const isLarge = solution.size === 'large'

            return (
              <motion.article
                key={solution.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7fbff] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#087bc1]/20 hover:shadow-2xl hover:shadow-[#087bc1]/10 sm:p-9 ${isLarge ? 'min-h-[390px]' : 'min-h-[330px]'}`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
                  className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#38bde8]/10 blur-3xl transition-transform duration-700 group-hover:scale-150"
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-semibold tracking-[0.2em] text-[#087bc1]">{solution.number}</span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#087bc1] shadow-sm transition-all duration-500 group-hover:bg-[#087bc1] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#087bc1]/20">
                        <Icon size={21} strokeWidth={1.7} />
                      </div>
                    </div>

                    <div className="mt-14">
                      <span className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                        {solution.category}
                      </span>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#15194f] sm:text-3xl">
                        {solution.title}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-5">
                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase transition-colors duration-300 group-hover:text-[#087bc1]">
                      Explore solution
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#087bc1] transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:border-[#087bc1]">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSolutions
