import React from 'react'
import {
  Sparkles,
  ArrowRight,
  Bot,
  Zap,
  TrendingUp,
  Trophy,
} from 'lucide-react'
import fxproAiBanner from '../../../assets/components/industryPage/FXPRO_AI.jpg'

export default function AISuiteIntroduce() {
  // 4 Thẻ giá trị cốt lõi trải ngang ở chân khối (The 4 Horizontal Foundation Cards)
  const foundationFeatures = [
    {
      title: 'Automate Tasks',
      desc: 'Reduce manual work with intelligent automation.',
      icon: Bot,
    },
    {
      title: 'Accelerate Operations',
      desc: 'Speed up daily processes across your business.',
      icon: Zap,
    },
    {
      title: 'Make Smarter Decisions',
      desc: 'Turn data into actionable insights.',
      icon: TrendingUp,
    },
    {
      title: 'Drive Higher Profitability',
      desc: 'Optimize performance and grow your business.',
      icon: Trophy,
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* =========================================================================
          NỀN TOÀN CẢNH: HÌNH ẢNH FXPRO_AI.jpg CHIẾM TRỌN PHẦN ĐẦU TRANG
          - Hình ảnh sắc nét 100% bao gồm xưởng may, chip 3D, bệ phát sáng và ma-nơ-canh
          - Các lớp chữ và thẻ tính năng được bố trí đè lên đúng các khoảng trắng tự nhiên
      ========================================================================= */}
      <div className="relative w-full min-h-[680px] lg:min-h-[820px] xl:min-h-[900px] flex flex-col justify-between">
        
        {/* 1. Bức ảnh nền chính + Lớp nền trắng tinh khiết đặc trị (Solid Pure White) che trọn vẹn khu vực chữ */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <img
            src={fxproAiBanner}
            alt="FXPRO AI Suite Smart Garment Factory"
            className="w-full h-full object-cover object-center"
          />
          {/* Lớp nền trắng nguyên chất 100% (Solid White): Tuyệt đối không để màu xanh của xưởng may hắt lên làm mờ chữ */}
          <div
            className="absolute inset-y-0 left-0 w-full lg:w-[62%] pointer-events-none"
            style={{
              zIndex: 2,
              background: 'linear-gradient(to right, #ffffff 0%, #ffffff 52%, rgba(255, 255, 255, 0.95) 65%, rgba(255, 255, 255, 0) 100%)',
            }}
          />
        </div>

        {/* =======================================================================
            TẦNG TRÊN: NỘI DUNG CHỮ SÁT TRÁI - HOÀN TOÀN KHÔNG DÙNG KHUNG HỘP
            - Đặt chữ tự nhiên sát lề trái, phóng khoáng trực tiếp trên nền trắng thuần
            - Chữ đậm nét, độ tương phản tuyệt đối, không bị chìm hay mờ
        ======================================================================= */}
        <div
          className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 pt-10 sm:pt-14 lg:pt-20 relative"
          style={{ position: 'relative', zIndex: 10 }}
        >
          <div className="max-w-xl lg:max-w-2xl">
            
            {/* 1. Pill Tag + Trailing Line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-2xs">
                <Sparkles size={13} className="text-lnt-blue" />
                <span>FXPRO AI SUITE</span>
              </div>
              <div className="h-px bg-gradient-to-r from-sky-200 to-transparent w-20 hidden sm:block" />
            </div>

            {/* 2. Tiêu đề lớn: FXPRO AI Suite (Đúng chuẩn typography trong DESIGN_SYSTEM.md) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-title font-heading leading-tight">
              FXPRO <span className="text-lnt-blue">AI</span> Suite
            </h1>

            {/* 3. Đoạn văn mô tả với độ tương phản cao, chuẩn text-body */}
            <p className="mt-4 text-sm sm:text-[15px] lg:text-base text-body font-normal leading-relaxed max-w-xl">
              The FXPRO AI Suite empowers businesses to reduce manual workloads, accelerate daily operations, and make smarter, data-driven decisions. By eliminating operational bottlenecks and streamlining workflows, AI helps teams work smarter, deliver faster, and drive higher profitability.
            </p>

            {/* 4. Nút bấm Discover More chuẩn Executive Dark Pill (Mục 5.2.A DESIGN_SYSTEM.md) */}
            <div className="mt-7">
              <a
                href="#foundation"
                className="group inline-flex items-center gap-2.5 rounded-full bg-title px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition-all cursor-pointer"
              >
                <span>Discover More</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>

        {/* =======================================================================
            TẦNG DƯỚI: 4 THẺ GIÁ TRỊ TRẢI NGANG - CĂN GIỮA, KHỔ LỚN, TRÀN ĐỀU CHIỀU NGANG
            - Căn giữa trang web (mx-auto), phân bố đều 4 cột đối xứng tuyệt đối
            - Thẻ lớn, icon to, typography rõ nét vững chãi
        ======================================================================= */}
        <div
          id="foundation"
          className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-20 mt-14 sm:mt-18"
          style={{ position: 'relative', zIndex: 10 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {foundationFeatures.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 p-5 sm:p-5.5 lg:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs hover:border-lnt-blue/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {/* Semantic Icon Badge */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-sky-50 text-lnt-blue flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-lnt-blue group-hover:text-white transition-all duration-300">
                  <item.icon size={24} className="stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[15px] sm:text-base font-bold text-lnt-navy font-heading tracking-tight leading-snug group-hover:text-lnt-blue transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-[13px] text-body leading-snug font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}
