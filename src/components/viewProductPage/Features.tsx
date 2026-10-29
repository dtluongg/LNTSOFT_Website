import { motion } from 'framer-motion'
import { Cloud, Layers, TrendingUp, ShieldCheck, Headphones } from 'lucide-react'

const features = [
  { icon: Cloud, title: 'Cloud Based', desc: 'Access anytime, anywhere, from any device.' },
  { icon: Layers, title: 'Integrated', desc: 'Connects all business processes in one platform.' },
  { icon: TrendingUp, title: 'Scalable', desc: 'Grows with your business needs.' },
  { icon: ShieldCheck, title: 'Secure', desc: 'Advanced security and reliable performance.' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'Your success is our priority.' },
]

export default function Features() {
  return (
    <div className="border-b border-slate-200/80 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#087bc1] shadow-2xs transition-all duration-300 group-hover:bg-[#087bc1] group-hover:text-white group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="mt-3.5 text-sm font-bold text-slate-900 group-hover:text-[#087bc1] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed max-w-[170px]">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
