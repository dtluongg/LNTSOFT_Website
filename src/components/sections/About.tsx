import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Users, Globe2 } from 'lucide-react'

const aboutImage = 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1600'

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-28 sm:py-36">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute top-20 -right-40 h-96 w-96 rounded-full bg-[#38bde8]/8 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          {/* LEFT — TITLE */}

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#087bc1]" />

              <span className="text-xs font-semibold tracking-[0.28em] text-[#087bc1] uppercase">Who We Are</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-2xl text-4xl leading-[1.03] font-semibold tracking-[-0.04em] text-[#15194f] sm:text-5xl lg:text-6xl"
            >
              Technology that moves <span className="text-[#087bc1]">business forward.</span>
            </motion.h2>
          </div>

          {/* RIGHT — INTRO */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="max-w-xl text-base leading-8 text-slate-600 lg:ml-auto"
          >
            LNTSOFT is a technology partner delivering tailored enterprise software and IT consulting services. We
            combine technology, industry expertise and innovation to help organizations simplify complexity and embrace
            digital transformation.
          </motion.p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          {/* ===================================================
              IMAGE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative min-h-[480px] overflow-hidden rounded-[2rem] lg:col-span-7"
          >
            {/* IMAGE */}

            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              src={aboutImage}
              alt="LNTSoft team working in a modern office"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* IMAGE OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#15194f]/70 via-[#163d91]/10 to-transparent" />

            {/* BLUE GLOW */}

            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#38bde8]/25 blur-3xl" />

            {/* =================================================
                IMAGE LABEL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="absolute right-7 bottom-7 left-7 flex items-end justify-between gap-6"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-[#8edff5] uppercase">LNTSoft</p>

                <p className="mt-2 max-w-xs text-xl leading-snug font-semibold text-white">
                  Technology built around people and business.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md sm:flex">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </motion.div>

            {/* =================================================
                EXPERIENCE FLOATING CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="absolute top-6 right-6 rounded-2xl border border-white/30 bg-white/85 px-5 py-4 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087bc1]/10">
                  <Building2 size={19} className="text-[#087bc1]" />
                </div>

                <div>
                  <div className="text-2xl font-bold tracking-tight text-[#15194f]">20+</div>

                  <div className="text-[11px] font-medium text-slate-500">Years of experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ===================================================
              RIGHT CONTENT
          =================================================== */}

          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            {/* STORY */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[2rem] border border-slate-200 bg-[#f7fbff] p-8 sm:p-10"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087bc1]/10">
                <Users size={21} className="text-[#087bc1]" />
              </div>

              <p className="text-xl leading-8 font-medium tracking-tight text-[#15194f]">
                We work closely with our clients to understand their challenges and turn complex problems into practical
                technology solutions.
              </p>

              <div className="my-7 h-px bg-slate-200" />

              <p className="text-sm leading-7 text-slate-500">
                From enterprise applications to industry-specific platforms and digital transformation initiatives, our
                goal is to turn technology into measurable business value.
              </p>

              <a
                href="#solutions"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#087bc1]"
              >
                Explore our solutions
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}

            <div className="grid grid-cols-2 gap-4">
              <Stat icon={Globe2} value="20+" label="Years of experience" delay={0.25} />

              <Stat icon={Users} value="100+" label="Years combined experience" delay={0.35} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   STAT CARD
========================================================= */

interface StatProps {
  icon: typeof Globe2
  value: string
  label: string
  delay: number
}

function Stat({ icon: Icon, value, label, delay }: StatProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087bc1]/20 hover:shadow-xl hover:shadow-[#087bc1]/5"
    >
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#087bc1]/10 transition-colors duration-300 group-hover:bg-[#087bc1]">
        <Icon size={18} className="text-[#087bc1] transition-colors duration-300 group-hover:text-white" />
      </div>

      <div className="text-3xl font-semibold tracking-tight text-[#087bc1]">{value}</div>

      <div className="mt-2 text-sm leading-6 text-slate-500">{label}</div>
    </motion.div>
  )
}

export default About
