import React from 'react'
import {
  Sparkles,
  Radio,
  BellRing,
  ShieldCheck,
  Smartphone,
  TrendingUp,
} from 'lucide-react'
import RealTimeSewingWorkStation from '../../../assets/components/industryPage/Smart_Factory/1.png';
import ProductionAlert from '../../../assets/components/industryPage/Smart_Factory/2.png';
import QtyAndDefect from '../../../assets/components/industryPage/Smart_Factory/3.png';
import MobileProduction from '../../../assets/components/industryPage/Smart_Factory/4.png';
import SewingTeamPerfomance from '../../../assets/components/industryPage/Smart_Factory/5.png';


export default function SmartFactoryCapabilities() {
  // Hình ảnh chất lượng cao chuyên ngành
  const imgWorkstation = RealTimeSewingWorkStation
  const imgAlerts = ProductionAlert
  const imgQuality = QtyAndDefect
  const imgMobile = MobileProduction
  const imgPerformance = SewingTeamPerfomance
   
  return (
    <div id="capabilities" className="w-full bg-white relative overflow-hidden">
      
      {/* =======================================================================
          HEADER PHÂN HỆ: SANG TRỌNG, THOÁNG ĐÃNG
      ======================================================================= */}
      <section className="pt-20 sm:pt-24 pb-14 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50 relative overflow-hidden">
        {/* Quầng sáng quang học dịu êm làm nền */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[400px] rounded-full bg-gradient-to-b from-sky-100/60 via-blue-50/20 to-transparent blur-[120px] -z-10" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lnt-blue shadow-xs mb-4">
            <Sparkles size={13} className="text-lnt-blue" />
            <span>Manufacturing Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-title font-heading tracking-tight leading-tight">
            Capabilities – Connected Intelligence{' '}
            <span className="text-lnt-blue">Across Sewing Operations</span>
          </h2>
        </div>
      </section>

      {/* =======================================================================
          BỐ CỤC 5 DÒNG ĐỘC LẬP VỚI KIỂU DÁNG & KHUNG VIỀN ĐA DẠNG:
          - Dòng 1: Màn hình điều hành công nghiệp HMI ngang rộng (Industrial Monitor)
          - Dòng 2: Màn hình trung tâm giám sát viền đôi tỏa sáng màu hổ phách (Alert Display)
          - Dòng 3: Khung máy kiểm định độ chuẩn xác có 4 góc thước ngắm (Precision Scanner)
          - Dòng 4: Khung điện thoại thông minh Smartphone dựng đứng thanh thoát (Mobile Mockup)
          - Dòng 5: Màn hình máy tính khoang lái góc siêu rộng có chân đế nổi (Ultrawide Cockpit)
          - 100% hình ảnh sạch sẽ, TUYỆT ĐỐI KHÔNG ĐÈ CHỮ LÊN HÌNH
      ======================================================================= */}
      <div className="divide-y divide-slate-100">
        
        {/* =====================================================================
            DÒNG 1: Real-Time Sewing Workstation Output Tracking
            Thiết kế: Màn hình công nghiệp ngang rộng HMI có viền graphite & đèn LED
        ===================================================================== */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Cột chữ (5 Cột) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-lnt-blue border border-sky-200/80 text-xs font-bold uppercase tracking-wider">
                  <Radio size={14} className="text-lnt-blue" />
                  <span>Workstation Tracking</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title font-heading tracking-tight leading-snug">
                  Real-Time Sewing Workstation Output Tracking
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Capture operation-level production output directly from connected sewing machines and workstation devices, providing accurate, timely, and real-time production data across sewing operations
                </p>
              </div>

              {/* Khung Màn hình HMI Công nghiệp ngang rộng (7 Cột) */}
              <div className="lg:col-span-7 relative flex items-center justify-center">
                {/* Quầng sáng xanh sau màn hình */}
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-sky-200/60 via-blue-100/30 to-transparent blur-[85px] -z-10" />

                {/* Vỏ màn hình công nghiệp chuyên dụng */}
                <div className="relative w-full max-w-[640px] rounded-[28px] bg-slate-900 border-2 border-slate-700/80 p-3 sm:p-3.5 shadow-2xl shadow-slate-900/20 group">
                  
                  {/* Dải viền trên của màn hình máy móc với 3 đèn tín hiệu */}
                  <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      <span className="w-2 h-2 rounded-full bg-sky-400/60" />
                      <span className="w-2 h-2 rounded-full bg-slate-600" />
                    </div>
                    <div className="w-10 h-1 bg-slate-800 rounded-full" />
                  </div>

                  {/* Vùng hiển thị ảnh sạch 100% không chữ */}
                  <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[390px] rounded-2xl overflow-hidden bg-slate-950">
                    <img
                      src={imgWorkstation}
                      alt="Real-Time Sewing Workstation Output Tracking"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================================
            DÒNG 2: Production Alerts & Attention Monitoring
            Thiết kế: Màn hình trung tâm giám sát với viền đôi tỏa sắc cam hổ phách
        ===================================================================== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/40 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Khung Màn hình Cảnh báo viền đôi sắc hổ phách (Trái 6 Cột) */}
              <div className="lg:col-span-6 order-2 lg:order-1 relative flex items-center justify-center">
                {/* Quầng sáng màu hổ phách ấm */}
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-amber-200/50 via-orange-100/30 to-transparent blur-[85px] -z-10" />

                {/* Khung viền đôi phong cách Dashboard giám sát */}
                <div className="relative w-full max-w-[540px] rounded-[28px] p-2 bg-gradient-to-br from-amber-400/30 via-orange-300/20 to-transparent border-2 border-amber-400/40 shadow-2xl shadow-amber-500/10 group">
                  
                  {/* Lớp khung trong màu tối sang trọng */}
                  <div className="rounded-[22px] bg-slate-900 p-2 sm:p-2.5 border border-slate-800">
                    {/* Thanh tiêu đề màn hình giám sát */}
                    <div className="flex items-center justify-between px-2.5 py-1 mb-1.5 border-b border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/40" />
                      </div>
                    </div>

                    {/* Vùng hiển thị ảnh sạch 100% không chữ */}
                    <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[350px] rounded-xl overflow-hidden bg-slate-950">
                      <img
                        src={imgAlerts}
                        alt="Production Alerts & Attention Monitoring"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cột chữ (Phải 6 Cột) */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200/80 text-xs font-bold uppercase tracking-wider">
                  <BellRing size={14} className="text-amber-600" />
                  <span>Production Alerts</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title font-heading tracking-tight leading-snug">
                  Production Alerts & Attention Monitoring
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Identify sewing teams requiring attention through real-time performance monitoring and automated alerts. Empower supervisors to respond promptly to production issues through centralized monitoring dashboards.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================================
            DÒNG 3: Quality & Defect Monitoring
            Thiết kế: Khung máy kiểm định với 4 góc thước ngắm quang học L-brackets sắc nét
        ===================================================================== */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Cột chữ (Trái 6 Cột) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Quality Monitoring</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title font-heading tracking-tight leading-snug">
                  Quality & Defect Monitoring
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Record inline and end-line quality inspection results, track defect categories and rework garments, and monitor overall quality performance to support effective quality control throughout production
                </p>
              </div>

              {/* Khung Máy Kiểm Định Quang Học có Thước ngắm 4 góc (Phải 6 Cột) */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                {/* Quầng sáng xanh ngọc lục bảo */}
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-emerald-200/50 via-teal-100/30 to-transparent blur-[85px] -z-10" />

                {/* Vỏ khung kiểm định có viền xanh emerald */}
                <div className="relative w-full max-w-[540px] rounded-[28px] bg-slate-900 border-2 border-emerald-500/40 p-3 sm:p-3.5 shadow-2xl shadow-emerald-500/10 group">
                  
                  {/* 4 GÓC THƯỚC NGẮM QUANG HỌC L-BRACKETS NGOÀI VIỀN */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-400 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-400 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none" />

                  {/* Thanh header của trạm kiểm định */}
                  <div className="flex items-center justify-between px-3 py-1 mb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      <div className="w-16 h-1 bg-slate-800 rounded-full" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-xs border border-emerald-400/80" />
                    </div>
                  </div>

                  {/* Vùng hiển thị ảnh sạch 100% không chữ */}
                  <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[350px] rounded-xl overflow-hidden bg-slate-950">
                    <img
                      src={imgQuality}
                      alt="Quality & Defect Monitoring"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================================
            DÒNG 4: Mobile Production Tracking
            Thiết kế: Khung điện thoại thông minh Smartphone DỰNG ĐỨNG thanh thoát
            Tạo sự thay đổi kích thước và hình khối đột phá so với các màn hình ngang
        ===================================================================== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/40 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Khung Điện thoại Thông minh Smartphone Dựng đứng (Trái 5 Cột) */}
              <div className="lg:col-span-5 order-2 lg:order-1 relative flex items-center justify-center">
                {/* Quầng sáng tím chàm sau điện thoại */}
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-indigo-200/50 via-purple-100/30 to-transparent blur-[85px] -z-10" />

                {/* Vỏ thân điện thoại Smartphone tinh xảo */}
                <div className="relative w-[210px] sm:w-[240px] rounded-[44px] bg-slate-950 p-2.5 shadow-2xl shadow-indigo-500/20 border-[3.5px] border-slate-700/80 ring-1 ring-slate-800 group">
                  
                  {/* Dynamic Island ở đỉnh màn hình điện thoại */}
                  <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/80" />
                  </div>

                  {/* Màn hình điện thoại hiển thị ảnh sạch sẽ 100% không chữ */}
                  <div className="w-full h-[320px] sm:h-[370px] rounded-[32px] overflow-hidden bg-slate-900">
                    <img
                      src={imgMobile}
                      alt="Mobile Production Tracking"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Cột chữ (Phải 7 Cột) */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200/80 text-xs font-bold uppercase tracking-wider">
                  <Smartphone size={14} className="text-indigo-600" />
                  <span>Mobile Tracking</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title font-heading tracking-tight leading-snug">
                  Mobile Production Tracking
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Enable production teams and supervisors to access production information through mobile devices. Monitor individual and team output, production progress, and work performance anytime, anywhere.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================================
            DÒNG 5: Sewing Team Performance Analysis
            Thiết kế: Màn hình máy tính góc siêu rộng (Ultrawide) có chân đế nổi
        ===================================================================== */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Cột chữ (Trái 5 Cột) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-lnt-blue border border-sky-200/80 text-xs font-bold uppercase tracking-wider">
                  <TrendingUp size={14} className="text-lnt-blue" />
                  <span>Performance Analysis</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title font-heading tracking-tight leading-snug">
                  Sewing Team Performance Analysis
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Analyze sewing team productivity, target achievement, production bottlenecks, downtime, and operator performance. Compare planned targets against actual output to identify performance gaps and opportunities for operational improvement
                </p>
              </div>

              {/* Khung Màn hình Cockpit Siêu rộng có chân đế nổi (Phải 7 Cột) */}
              <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
                {/* Quầng sáng cyan sau màn hình */}
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-sky-200/50 via-cyan-100/30 to-transparent blur-[85px] -z-10" />

                {/* Vỏ màn hình Desktop Analytics */}
                <div className="relative w-full max-w-[640px] rounded-[28px] bg-slate-900 border-2 border-sky-500/40 p-3 sm:p-3.5 shadow-2xl shadow-sky-500/10 group">
                  
                  {/* Thanh header macOS-style tối giản của dashboard */}
                  <div className="flex items-center justify-between px-3 py-1 mb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                      <span className="w-2 h-2 rounded-full bg-slate-600" />
                      <span className="w-2 h-2 rounded-full bg-slate-600" />
                    </div>
                    <div className="w-12 h-1 bg-slate-800 rounded-full" />
                  </div>

                  {/* Vùng hiển thị ảnh sạch 100% không chữ */}
                  <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[380px] rounded-xl overflow-hidden bg-slate-950">
                    <img
                      src={imgPerformance}
                      alt="Sewing Team Performance Analysis"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                  </div>
                </div>

                {/* Chân đế màn hình nổi sang trọng bên dưới */}
                <div className="w-24 sm:w-28 h-3 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-lg border-x border-b border-slate-600/80 shadow-md" />
                <div className="w-36 sm:w-44 h-1.5 bg-slate-800 rounded-full shadow-sm -mt-0.5" />
              </div>

            </div>
          </div>
        </section>

      </div>

    </div>
  )
}
