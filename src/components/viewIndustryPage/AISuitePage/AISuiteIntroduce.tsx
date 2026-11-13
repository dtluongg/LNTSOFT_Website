import React from 'react'
import {
  ArrowRight,
  Play,
  Bot,
  Zap,
  TrendingUp,
  Trophy,
} from 'lucide-react'
import fxproAiBanner from '../../../assets/components/industryPage/FXPRO_AI.jpg'

export default function AISuiteIntroduce() {
  // 4 Tính năng cốt lõi dạng biểu tượng tròn
  const foundationFeatures = [
    {
      titleTop: 'Automate',
      titleBottom: 'Tasks',
      desc: 'Reduce manual work with intelligent automation.',
      icon: Bot,
    },
    {
      titleTop: 'Accelerate',
      titleBottom: 'Operations',
      desc: 'Speed up daily processes across your business.',
      icon: Zap,
    },
    {
      titleTop: 'Make Smarter',
      titleBottom: 'Decisions',
      desc: 'Turn data into actionable insights.',
      icon: TrendingUp,
    },
    {
      titleTop: 'Drive Higher',
      titleBottom: 'Profitability',
      desc: 'Optimize performance and grow your business.',
      icon: Trophy,
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] flex items-center border-b border-slate-200/80">
      
      {/* =========================================================================
          NỀN BÊN PHẢI: HÌNH ẢNH XƯỞNG MAY & CHIP CÔNG NGHỆ CAO FXPRO_AI.jpg
          - Hiển thị sắc nét ở phía bên phải
          - Chuyển mờ (Fade to White) mượt mà về phía bên trái để chữ đọc rõ 100%
      ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <img
          src={fxproAiBanner}
          alt="FXPRO AI Suite Smart Garment Factory"
          className="w-full h-full object-cover object-right lg:object-center"
        />
        {/* Lớp gradient chuyển mờ từ trái sang phải */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-[65%] xl:w-[60%] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #ffffff 0%, #ffffff 52%, rgba(255, 255, 255, 0.94) 70%, rgba(255, 255, 255, 0) 100%)',
          }}
        />
      </div>

      {/* =========================================================================
          CÁC LỚP HỌA TIẾT CÔNG NGHỆ BÊN TRÁI (LEFT-SIDE DECORATIVE TECH TEXTURES)
          - Xóa tan cảm giác trắng trơn, tạo chiều sâu thẩm mỹ công nghệ cao cấp
      ========================================================================= */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
        
        {/* 1. Quầng sáng quang học xanh dịu phía trên góc trái (Top-Left Ambient Glow) */}
        <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-sky-100/70 via-cyan-50/50 to-transparent blur-[100px]" />
        
        {/* 2. Quầng sáng xanh lơ ở giữa lề trái (Mid-Left Soft Glow) */}
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-50/70 via-sky-100/40 to-transparent blur-[110px]" />

        {/* 3. Vòng quỹ đạo công nghệ mạ nét mảnh (Concentric Blueprint Orbital Arcs) */}
        <div className="absolute -top-36 -left-36 w-[620px] h-[620px] rounded-full border border-sky-100/90" />
        <div className="absolute -top-20 -left-20 w-[460px] h-[460px] rounded-full border border-dashed border-sky-200/50" />
        <div className="absolute -top-4 -left-4 w-[320px] h-[320px] rounded-full border border-sky-100/60" />

        {/* 4. Lưới chấm ma trận công nghệ tinh tế (Tech Dot Matrix Grid) ở góc trên bên trái */}
        <div
          className="absolute top-8 left-8 w-64 h-48 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(#087bc1 1.2px, transparent 1.2px)`,
            backgroundSize: '18px 18px',
            maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
          }}
        />

        {/* 5. Các điểm chốt công nghệ vi mạch (+ Crosshair Markers) trôi nhẹ */}
        <div className="absolute top-28 left-64 text-sky-300 text-xs font-mono font-light select-none opacity-40">+</div>
        <div className="absolute top-52 left-20 text-sky-300 text-xs font-mono font-light select-none opacity-40">+</div>
        <div className="absolute top-72 left-80 text-sky-400 text-xs font-mono font-light select-none opacity-50">+</div>

      </div>

      {/* =========================================================================
          HỌA TIẾT ĐƯỜNG LƯỢN SÓNG ĐA TẦNG Ở GÓC DƯỚI BÊN TRÁI (LAYERED FLOWING WAVES)
          - Mở rộng bề thế, chuyển màu từ xanh Navy thương hiệu sang xanh Cyan phát quang
      ========================================================================= */}
      <div className="absolute bottom-0 left-0 w-80 sm:w-[500px] lg:w-[640px] h-32 sm:h-44 lg:h-52 pointer-events-none overflow-hidden" style={{ zIndex: 6 }}>
        <svg
          viewBox="0 0 640 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Lớp sóng 1 (Sâu nhất - Xanh nhạt bán trong suốt) */}
          <path
            d="M -30 220 C 120 220, 200 130, 340 120 C 480 110, 560 170, 670 220 L -30 220 Z"
            fill="url(#wave-grad-1)"
            opacity="0.35"
          />
          {/* Lớp sóng 2 (Giữa - Xanh Cyan chuyển sắc) */}
          <path
            d="M -30 220 C 100 220, 190 155, 300 145 C 420 135, 500 180, 600 220 L -30 220 Z"
            fill="url(#wave-grad-2)"
            opacity="0.65"
          />
          {/* Lớp sóng 3 (Chính - Xanh thương hiệu LNT đĩnh đạc) */}
          <path
            d="M -30 220 C 80 220, 160 175, 250 165 C 360 155, 430 195, 520 220 L -30 220 Z"
            fill="url(#wave-grad-3)"
            opacity="0.9"
          />
          {/* Vệt sáng phát quang dọc mép sóng */}
          <path
            d="M -30 220 C 80 220, 160 175, 250 165 C 360 155, 430 195, 520 220"
            stroke="url(#wave-stroke)"
            strokeWidth="2"
            opacity="0.6"
          />

          <defs>
            <linearGradient id="wave-grad-1" x1="0" y1="120" x2="640" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bde8" stopOpacity="0.8" />
              <stop offset="1" stopColor="#087bc1" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0" y1="140" x2="600" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#087bc1" stopOpacity="0.8" />
              <stop offset="1" stopColor="#38bde8" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="wave-grad-3" x1="0" y1="160" x2="520" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#087bc1" />
              <stop offset="1" stopColor="#0055b3" />
            </linearGradient>
            <linearGradient id="wave-stroke" x1="0" y1="165" x2="520" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.5" stopColor="#38bde8" />
              <stop offset="1" stopColor="#087bc1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          NỘI DUNG CHÍNH CỘT TRÁI
      ========================================================================= */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-14 sm:py-16 lg:py-20" style={{ zIndex: 10 }}>
        <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-7">
          
          {/* 1. Header Branding: FXPRO | Apparel AI Suite */}
          <div className="flex items-center gap-2.5">
            <span className="text-xl sm:text-2xl font-black text-[#0055b3] tracking-tight font-heading">
              FXPRO
            </span>
            <span className="text-slate-300 text-lg font-light select-none">|</span>
            <span className="text-sm sm:text-base font-semibold text-slate-700 tracking-tight">
              Apparel AI Suite
            </span>
          </div>

          {/* 2. Tiêu đề lớn 2 dòng đậm chất hiện đại */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#15194f] font-heading tracking-tight leading-[1.08]">
            FXPRO <br />
            <span className="text-[#087bc1]">AI Suite</span>
          </h1>

          {/* 3. Dòng Tagline in đậm nổi bật */}
          <p className="text-base sm:text-lg lg:text-[19px] font-bold text-slate-900 leading-snug">
            Work Smarter. Deliver Faster. Drive Higher Profitability.
          </p>

          {/* 4. Đoạn văn mô tả (Giữ nguyên 100% nội dung gốc không thay đổi) */}
          <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed max-w-xl">
            The FXPRO AI Suite empowers businesses to reduce manual workloads, accelerate daily operations, and make smarter, data-driven decisions. By eliminating operational bottlenecks and streamlining workflows, AI helps teams work smarter, deliver faster, and drive higher profitability.
          </p>

          {/* 5. 4 Biểu tượng hình tròn xếp ngang */}
          <div className="pt-2">
            <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg">
              {foundationFeatures.map((item, idx) => (
                <div
                  key={idx}
                  title={item.desc}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Nút tròn màu trắng, viền xanh nhẹ, icon xanh LNT */}
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white border border-sky-200/80 shadow-md text-[#087bc1] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#087bc1] group-hover:text-white group-hover:border-[#087bc1] transition-all duration-300">
                    <item.icon size={23} className="stroke-[2.2]" />
                  </div>

                  {/* Nhãn 2 dòng phía dưới nút tròn */}
                  <div className="mt-2.5 text-xs sm:text-[13px] font-bold text-[#15194f] font-heading leading-tight group-hover:text-[#087bc1] transition-colors">
                    <div>{item.titleTop}</div>
                    <div>{item.titleBottom}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Hai nút bấm CTA song hành */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            
            {/* Nút 1: Nền xanh thương hiệu bo tròn viên thuốc */}
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#087bc1] hover:bg-[#0769a6] text-white px-7 py-3.5 text-sm font-bold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Capabilities</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Nút 2: Nền trắng viền xám nhẹ thanh lịch */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-7 py-3.5 text-sm font-bold shadow-xs hover:border-slate-400 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <span>Request a Demo</span>
              <Play size={11} className="fill-slate-800 text-slate-800 shrink-0" />
            </a>

          </div>

        </div>
      </div>

    </section>
  )
}
