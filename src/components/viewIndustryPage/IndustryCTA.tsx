import React from 'react'
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  PhoneCall,
} from 'lucide-react'

export default function IndustryCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#15194f] via-[#0d2a54] to-[#087bc1] py-16 lg:py-20 text-white">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-200 mb-4">
          <Sparkles size={13} />
          <span>TAILORED INDUSTRY DEPLOYMENT</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Modernize Your Industry Operations?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Partner with LNT Software engineers for a comprehensive operational audit, pilot rollout roadmap, and seamless enterprise system integration.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-[#15194f] shadow-xl hover:bg-slate-100 transition-all hover:scale-102 cursor-pointer"
          >
            <span>Schedule an Industry Consultation</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="tel:+84900000000"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            <PhoneCall size={15} />
            <span>Speak with an Architect</span>
          </a>
        </div>

        {/* Trust Points */}
        <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span>Guaranteed Zero-Downtime Migration</span>
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-sky-300" />
            <span>Banking & Enterprise Security Compliance</span>
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-amber-300" />
            <span>24/7 Dedicated SLA & On-Site Support</span>
          </span>
        </div>

      </div>
    </section>
  )
}

