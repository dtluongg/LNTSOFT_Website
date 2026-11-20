import React from 'react'
import {
  Sparkles,
  Radio,
  BellRing,
  ShieldCheck,
  Smartphone,
  TrendingUp,
} from 'lucide-react'

export interface SmartFactoryCapabilitiesProps {
  images?: {
    workstation?: string
    alerts?: string
    quality?: string
    mobile?: string
    performance?: string
  }
}

export default function SmartFactoryCapabilities({ images }: SmartFactoryCapabilitiesProps) {
  // Hình ảnh chất lượng cao chuyên ngành
  const imgWorkstation =
    images?.workstation ||
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80'
  const imgAlerts =
    images?.alerts ||
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  const imgQuality =
    images?.quality ||
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
  const imgMobile =
    images?.mobile ||
    'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80'
  const imgPerformance =
    images?.performance ||
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'

  // 5 Năng lực - 100% NGUYÊN VĂN NỘI DUNG MẶC ĐỊNH CỦA NGƯỜI DÙNG, KHÔNG THÊM BỚT
  const heroItem = {
    title: 'Real-Time Sewing Workstation Output Tracking',
    desc: 'Capture operation-level production output directly from connected sewing machines and workstation devices, providing accurate, timely, and real-time production data across sewing operations',
    image: imgWorkstation,
    icon: Radio,
  }

  const gridItems = [
    {
      title: 'Production Alerts & Attention Monitoring',
      desc: 'Identify sewing teams requiring attention through real-time performance monitoring and automated alerts. Empower supervisors to respond promptly to production issues through centralized monitoring dashboards.',
      image: imgAlerts,
      icon: BellRing,
      accentBg: 'bg-amber-50 text-amber-600 border-amber-200/80',
    },
    {
      title: 'Quality & Defect Monitoring',
      desc: 'Record inline and end-line quality inspection results, track defect categories and rework garments, and monitor overall quality performance to support effective quality control throughout production',
      image: imgQuality,
      icon: ShieldCheck,
      accentBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    },
    {
      title: 'Mobile Production Tracking',
      desc: 'Enable production teams and supervisors to access production information through mobile devices. Monitor individual and team output, production progress, and work performance anytime, anywhere.',
      image: imgMobile,
      icon: Smartphone,
      accentBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
    },
    {
      title: 'Sewing Team Performance Analysis',
      desc: 'Analyze sewing team productivity, target achievement, production bottlenecks, downtime, and operator performance. Compare planned targets against actual output to identify performance gaps and opportunities for operational improvement',
      image: imgPerformance,
      icon: TrendingUp,
      accentBg: 'bg-sky-50 text-lnt-blue border-sky-200/80',
    },
  ]

  return (
    <section id="capabilities" className="w-full bg-slate-50/60 py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Quầng sáng quang học dịu êm làm nền tạo chiều sâu */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-b from-sky-100/60 via-blue-50/20 to-transparent blur-[120px] -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full bg-cyan-100/40 blur-[100px] -z-10" />

      {/* =======================================================================
          HEADER PHÂN HỆ
      ======================================================================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-14 sm:mb-16 lg:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lnt-blue shadow-xs mb-4">
          <Sparkles size={13} className="text-lnt-blue" />
          <span>Manufacturing Capabilities</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-title font-heading tracking-tight">
          Capabilities – Connected Intelligence{' '}
          <span className="text-lnt-blue">Across Sewing Operations</span>
        </h2>
      </div>

      {/* =======================================================================
          BENTO GRID HIỆN ĐẠI – 5 NĂNG LỰC HÀI HÒA & ĐẲNG CẤP
          - Hàng 1: Thẻ tiêu điểm Hero (8 cột) + Thẻ cảnh báo (4 cột)
          - Hàng 2: 3 Thẻ chuyên biệt (4 cột x 3)
          - Không dùng số đếm 01 02, ảnh & text gắn kết tinh tế, không lặp lại bố cục z-pattern
      ======================================================================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8">
          
          {/* 1. THẺ HERO SPOTLIGHT (8 CỘT): Real-Time Sewing Workstation Output Tracking */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-12px_rgba(8,123,193,0.14)] hover:border-sky-300 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center group">
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-lnt-blue group-hover:bg-lnt-blue group-hover:text-white transition-colors duration-300 shadow-xs">
                <heroItem.icon size={24} />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-title font-heading tracking-tight leading-snug mb-3">
                  {heroItem.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {heroItem.desc}
                </p>
              </div>
            </div>

            <div className="w-full md:w-[48%] h-64 sm:h-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-slate-900/5 bg-slate-900 relative shrink-0">
              <img
                src={heroItem.image}
                alt={heroItem.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* 2. THẺ CẢNH BÁO & GIÁM SÁT (4 CỘT): Production Alerts & Attention Monitoring */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-12px_rgba(8,123,193,0.14)] hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group">
            <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden ring-1 ring-slate-900/5 bg-slate-900 relative mb-6 shrink-0">
              <img
                src={gridItems[0].image}
                alt={gridItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center p-2 rounded-xl border mb-3 shadow-xs transition-colors duration-300 bg-amber-50 text-amber-600 border-amber-200/80 group-hover:bg-amber-500 group-hover:text-white">
                  <BellRing size={20} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-title font-heading tracking-tight leading-snug mb-2">
                  {gridItems[0].title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {gridItems[0].desc}
                </p>
              </div>
            </div>
          </div>

          {/* HÀNG 2: 3 THẺ CHUYÊN BIỆT (4 CỘT X 3) */}
          {gridItems.slice(1).map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-12px_rgba(8,123,193,0.14)] hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden ring-1 ring-slate-900/5 bg-slate-900 relative mb-6 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div
                      className={`inline-flex items-center p-2 rounded-xl border mb-3 shadow-xs transition-colors duration-300 ${item.accentBg} group-hover:bg-lnt-blue group-hover:text-white group-hover:border-lnt-blue`}
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-title font-heading tracking-tight leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
