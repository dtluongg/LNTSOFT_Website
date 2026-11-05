import React, { useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { 
  Scissors, 
  Landmark, 
  Boxes, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2,
  Factory,
} from 'lucide-react';
import ApparelArchitectureSuite from './ApparelArchitectureSuite';
import FinTechArchitectureSuite from './FinTechArchitectureSuite';
import industry1 from '../../../assets/components/productPage/industry1.png';

interface IndustryItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  metrics: { value: string; label: string }[];
  bulletPoints: string[];
  ctaText: string;
  ctaLink: string;
  renderVisual: () => React.ReactNode;
}

const INDUSTRIES: IndustryItem[] = [

  // ── 1. Manufacturing ERP ──────────────────────────────────────────────────
  {
    id: 'manufacturing-erp',
    name: 'Manufacturing ERP',
    badge: 'Enterprise Resource Planning',
    tagline: 'What is Manufacturing ERP?',
    icon: Factory,
    metrics: [
      { value: 'End-to-End', label: 'Integration' },
      { value: 'Real-time', label: 'Visibility' },
      { value: '↓ Cost', label: 'Production' },
    ],
    bulletPoints: [
      'Connects departments into one centralized system for full operational control.',
      'Real-time visibility from raw material purchasing to product delivery.',
      'Reduces production costs and supports smarter business decisions.',
    ],
    ctaText: 'Explore Manufacturing ERP',
    ctaLink: '#contact',
    renderVisual: () => (
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* ── Left column: Definition + BI section ── */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">
              <span className="font-bold text-[#15194f]">Manufacturing ERP</span>{' '}
              (Enterprise Resource Planning) is an integrated business management software
              system designed specifically for manufacturing companies to manage, monitor,
              and control their entire operations — from raw material
              purchasing to production, finished goods inventory, and delivery.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              It connects departments into one centralized system, providing{' '}
              <span className="font-semibold text-[#087bc1]">real-time visibility</span>,
              improving operational efficiency, reducing costs, and supporting
              better decisions.
            </p>

            {/* ── Management Reporting & BI card ── */}
            <div className="rounded-2xl border border-[#087bc1]/25 bg-gradient-to-br from-[#087bc1]/8 to-transparent p-4 sm:p-5">
              {/* Card header */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#087bc1]/15 text-[#087bc1]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15194f]">
                  Management Reporting & Business Intelligence
                </span>
              </div>

              {/* 2-column grid of items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                {[
                  'Production performance reports',
                  'Inventory analysis',
                  'Manufacturing cost reports',
                  'Operational KPI dashboards',
                  'Management decision-support reports',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-[5px] h-2 w-2 rounded-full bg-[#087bc1] shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column: Dashboard image ── */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
            <img
              src={industry1}
              alt="Manufacturing ERP Dashboard — LNT Insight"
              className="w-full h-auto max-h-[380px] object-contain mx-auto transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#15194f]/85 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white shadow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LNT Insight — Smart Factory Dashboard
            </div>
          </div>

        </div>
      </div>
    ),
  },
  {
    id: 'apparel',
    name: 'Apparel ERP & MES Solution',
    badge: 'Textile & Garment Production MES',
    tagline: 'Apparel ERP & Manufacturing Execution',
    icon: Scissors,
    metrics: [
      { value: '+28%', label: 'Sewing Efficiency' },
      { value: '-35%', label: 'Fabric Wastage' },
      { value: '100%', label: 'Traceability' },
    ],
    bulletPoints: [
      'End-to-end garment production management for fast-paced, high-mix realities.',
      'Real-time line balancing, inline quality inspection, and defect heatmap.',
      'Seamless modular interoperability across sewing lines, warehouse, and ERP.',
    ],
    ctaText: 'Request Apparel Case Study',
    ctaLink: '#contact',
    renderVisual: () => (
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#259fd2] py-1 shadow-inner overflow-visible z-30">
        <ApparelArchitectureSuite />
      </div>
    ),
  },
  {
    id: 'fintech',
    name: 'FinTech Solutions',
    badge: 'Enterprise Open Banking & Corporate Treasury',
    tagline: 'Automated Cashflow & Corporate Banking Integration',
    icon: Landmark,
    metrics: [
      { value: '< 1.2s', label: 'API Settlement' },
      { value: '99.98%', label: 'Recon Match Rate' },
      { value: 'ISO 20022', label: 'Banking Compliance' },
    ],
    bulletPoints: [
      'Cloud-native Open Banking Gateway connecting seamlessly to corporate banking APIs & payment networks.',
      'Real-time multi-bank automated transaction reconciliation with AI-powered invoice-matching ledger.',
      'High-throughput treasury microservices engineered for automated batch payroll, B2B payouts, and predictive cashflow.',
    ],
    ctaText: 'Request FinTech Architecture Demo',
    ctaLink: '#contact',
    renderVisual: () => <FinTechArchitectureSuite />,
  },
];

export function IndustryFocus() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Theo dõi tiến độ cuộn chuột qua khung này (từ 0 đến 1)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const totalItems = INDUSTRIES.length;

  // Tính toán vị trí tab active dựa trên scroll progress
  const [activeIndex, setActiveIndex] = React.useState(0);

  scrollYProgress.on('change', (latest) => {
    // Chia đều thanh cuộn theo số lượng ngành
    const index = Math.min(Math.floor(latest * totalItems), totalItems - 1);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  // Hỗ trợ click trực tiếp vào tab để nhảy nhanh đến ngành đó
  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const targetSectionTop = rect.top + scrollTop;
      const scrollableDist = targetRef.current.offsetHeight - window.innerHeight;
      
      // Tính vị trí cuộn tương ứng với tab (chia đều đoạn track)
      const targetScroll = targetSectionTop + (index / (totalItems - 1)) * Math.max(0, scrollableDist);
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  // Lắng nghe sự kiện click từ Navbar MegaMenu
  React.useEffect(() => {
    const handleCustomSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ index: number; id: string }>;
      if (customEvent.detail && typeof customEvent.detail.index === 'number') {
        handleTabClick(customEvent.detail.index);
      }
    };

    window.addEventListener('industry-select-tab', handleCustomSelect);
    return () => {
      window.removeEventListener('industry-select-tab', handleCustomSelect);
    };
  }, [totalItems]);

  const current = INDUSTRIES[activeIndex];
  const IconComponent = current.icon;

  return (
    // Scroll track: chiều cao = N × 100vh
    <section
      id="industries"
      ref={targetRef}
      className="relative bg-white"
      style={{ height: `${totalItems * 120}vh` }}
    >
      {/* ── STICKY PANEL: offset top-20 (80px) để không bị navbar che ── */}
      <div className="sticky top-20 w-full flex flex-col justify-between bg-white z-10 overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>

        {/* ── HEADER: dãn cách vừa phải, chuẩn nhịp điệu với About/Solutions ── */}
        <div className="shrink-0 bg-white pt-6 pb-4 z-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full flex flex-col items-center gap-2.5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/20 bg-[#087bc1]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#087bc1]">
              <Layers size={13} /> INDUSTRY FOCUS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#15194f]">
              Specialized Industry Engineering
            </h2>

            {/* Tab bar — hỗ trợ click trực tiếp hoặc theo chuột cuộn */}
            <div className="mt-2 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              {INDUSTRIES.map((ind, i) => {
                const TabIcon = ind.icon;
                const isCurrent = activeIndex === i;
                return (
                  <button
                    type="button"
                    key={ind.id}
                    onClick={() => handleTabClick(i)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#087bc1] text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/60'
                    }`}
                  >
                    <TabIcon size={14} />
                    <span>{ind.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CONTENT: căn giữa đều đặn, không bị dính sát vào tab ── */}
        <div className="w-full flex-1 flex flex-col justify-center min-h-0 relative overflow-visible py-4 sm:py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full flex flex-col justify-center my-auto"
            >
              {/* Tiêu đề phân hệ & Chỉ số */}
              <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full flex items-center justify-between pb-4 shrink-0">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087bc1]">
                    <IconComponent size={15} />
                    <span>{current.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#15194f] mt-1">
                    {current.tagline}
                  </h3>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="rounded-2xl bg-slate-50 border border-slate-200 px-4 py-2 text-center min-w-[90px]">
                      <div className="text-base sm:text-lg font-bold text-[#15194f]">{m.value}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual / Architecture Diagram */}
              <div className="w-full my-auto">
                {current.renderVisual()}
              </div>

              {/* Footer: Checklist & CTA */}
              <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full flex items-center justify-between pt-5 mt-4 border-t border-slate-100 shrink-0">
                <div className="space-y-1">
                  {current.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-[#087bc1] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={current.ctaLink}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#087bc1] hover:bg-[#076da9] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all shrink-0 cursor-pointer"
                >
                  <span>{current.ctaText}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── FOOTER: scroll indicator ── */}
        <div className="shrink-0 py-2.5 text-center text-xs text-slate-400 font-medium border-t border-slate-100">
          Cuộn chuột hoặc nhấp chọn tab để chuyển đổi ({activeIndex + 1}/{totalItems})
        </div>

      </div>
    </section>
  );
}

export default IndustryFocus;