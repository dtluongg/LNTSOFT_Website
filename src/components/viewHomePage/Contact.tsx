import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@lnt-soft.com',
    href: 'mailto:info@lnt-soft.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 11 280 5000',
    href: 'tel:+94112805000',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sri Lanka',
    href: '#',
  },
]

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#38bde8]/10 blur-[100px] transform-gpu" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#087bc1]/10 blur-[100px] transform-gpu" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#15194f] shadow-2xl shadow-[#15194f]/15">
          <div className="relative">
            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#38bde8]/10" />
            <div className="pointer-events-none absolute right-20 top-20 h-64 w-64 rounded-full bg-[#087bc1]/15 blur-3xl transform-gpu" />

            <div className="relative z-10 grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.7 }}
                  className="mb-5 flex items-center gap-3"
                >
                  <span className="h-px w-8 bg-[#38bde8]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#38bde8]">
                    Contact Us
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
                >
                  Schedule an Enterprise{' '}
                  <span className="text-[#38bde8]">Consultation & Demo.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg"
                >
                  Whether you are planning a modern ERP rollout, optimizing factory shop-floor
                  MES, or integrating high-security FinTech infrastructure, our senior architects
                  are ready to conduct a dedicated feasibility audit.
                </motion.p>

                <motion.a
                  href="mailto:info@lnt-soft.com?subject=Enterprise%20Software%20Consultation%20Request"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#15194f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#38bde8]"
                >
                  Schedule Live Demo
                  <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="flex flex-col justify-end"
              >
                <div className="space-y-3">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.6, delay: 0.25 + index * 0.1 }}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#38bde8]/30 hover:bg-white/[0.08]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#38bde8] transition-all duration-300 group-hover:bg-[#38bde8] group-hover:text-white">
                          <Icon size={19} strokeWidth={1.7} />
                        </div>

                        <div className="min-w-0">
                          <div className="text-xs uppercase tracking-[0.18em] text-white/35">
                            {item.label}
                          </div>
                          <div className="mt-1 truncate text-sm font-medium text-white/80">
                            {item.value}
                          </div>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="ml-auto shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#38bde8]"
                        />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact