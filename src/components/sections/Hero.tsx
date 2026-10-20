import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react'

// Hình ảnh kiến trúc công nghệ đón nắng & bầu trời xanh, hòa tan mượt mà vào nền trắng
const daylightTechImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'

const credentials = [
  {
    icon: Award,
    title: '20+ Years Excellence',
    desc: 'Deep enterprise software implementation heritage',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 27001 Certified',
    desc: 'Banking-grade data security & privacy standards',
  },
  {
    icon: Zap,
    title: '99.9% High Availability',
    desc: 'Cloud disaster recovery & zero-downtime SLA',
  },
  {
    icon: Server,
    title: '500+ Deployments',
    desc: 'Trusted by medium and large-scale enterprises',
  },
]

const techStandards = [
  'AWS Cloud Partner',
  'Microsoft Azure',
  'Oracle Database',
  'SAP Integration Ready',
  'PostgreSQL',
  'Kubernetes & Docker',
]

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-24 text-slate-900 lg:pt-28"
    >
      {/* =====================================================
          HÌNH ẢNH NỀN SÁNG PHÍA BÊN PHẢI (CHUẨN MISYNERGY)
      ===================================================== */}
      <div className="pointer-events-none absolute right-0 top-0 h-[680px] z-0 hidden w-full overflow-hidden lg:block lg:w-[48%] xl:w-[45%]">
        <img
          src={daylightTechImage}
          alt="LNTBOOST Enterprise Growth & Technology"
          className="h-full w-full object-cover object-center opacity-65"
          loading="eager"
        />

        {/* Lớp phủ gradient trắng xóa viền hoàn toàn, tạo không gian thoáng đãng */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* =====================================================
          KHUNG NỘI DUNG CHÍNH HERO
      ===================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#087bc1]/20 bg-[#087bc1]/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#087bc1]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#087bc1]" />
            LNTBOOST · ENTERPRISE SOLUTIONS
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold uppercase tracking-tight text-[#15194f] sm:text-4xl lg:text-5xl leading-[1.18]"
          >
            Empower Your Business
            <br />
            Connect Your Enterprise
            <br />
            <span className="text-[#087bc1]">
              Scale for the Future
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base sm:leading-7 font-normal"
          >
            Cloud ERP and intelligent software solutions to unify business operations,
            optimize performance, and accelerate digital transformation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#solutions"
              className="group flex items-center gap-2.5 rounded-full bg-[#087bc1] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#087bc1]/20 transition-all duration-300 hover:bg-[#076da9] hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore Our Solutions
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-300 hover:border-[#087bc1] hover:text-[#087bc1] hover:-translate-y-0.5"
            >
              Schedule Live Demo
            </a>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          DẢI BẢO CHỨNG UY TÍN & CHUẨN CÔNG NGHỆ (GẮN LIỀN CHÂN HERO)
      ===================================================== */}
      <div className="relative z-10 border-t border-slate-200/90 bg-slate-50/70 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Credential Metrics Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#087bc1] shadow-xs border border-slate-200/80">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#15194f]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Technology Standards Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-6">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Technology Standards & Compatibility:
            </span>

            <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-500">
              {techStandards.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#087bc1]"
                >
                  <CheckCircle2 size={13} className="text-[#087bc1]" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero