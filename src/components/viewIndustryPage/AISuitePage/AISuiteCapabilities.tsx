import React from 'react'
import {
  FileText,
  Layers,
  Check,
} from 'lucide-react'
import aiSuite1 from '../../../assets/components/industryPage/AI_SUITE/AI_Suite1.png'
import aiSuite2 from '../../../assets/components/industryPage/AI_SUITE/AI_Suite2.png'
import aiSuite3 from '../../../assets/components/industryPage/AI_SUITE/AI_Suite3.png'
import aiSuite4 from '../../../assets/components/industryPage/AI_SUITE/AI_Suite4 .png'

export default function AISuiteCapabilities() {
  // Module 1: 4 Key Benefits - Giữ nguyên 100% nội dung sếp đưa ra
  const orderBenefits = [
    {
      title: 'Automated Order Data Capture',
      desc: 'Automatically extract customer order details from API integrations, emails, and documents, eliminating manual data entry and accelerating order processing.',
    },
    {
      title: 'Product & SKU Validation',
      desc: 'Validate product information, style details, and SKU specifications to ensure order accuracy and consistency with FXPRO master data.',
    },
    {
      title: 'Order Discrepancy Detection',
      desc: 'Identify quantity mismatches, missing information, and inconsistencies in customer orders, helping prevent order processing errors and potential fulfillment issues.',
    },
    {
      title: 'Proactive Order Risk Alerts',
      desc: 'Detect potential order delays, delivery risks, and fulfillment issues early, enabling teams to take corrective action promptly.',
    },
  ]

  // Module 2: 5 Key Benefits - Giữ nguyên 100% nội dung sếp đưa ra
  const techPackBenefits = [
    {
      title: 'AI-Powered Data Extraction',
      desc: 'Read and extract information from PDF and Excel tech packs.',
    },
    {
      title: 'Automated BOM Structuring',
      desc: 'Convert unstructured buyer specifications into structured BOM data.',
    },
    {
      title: 'Data Validation',
      desc: 'Identify missing information, inconsistencies, and potential errors.',
    },
    {
      title: 'Automated Purchasing Data',
      desc: 'Generate purchasing requirements directly in the system.',
    },
    {
      title: 'Faster Processing',
      desc: 'Reduce manual data entry and accelerate order preparation.',
    },
  ]

  return (
    <div id="capabilities" className="w-full">
      
      {/* =======================================================================
          MODULE 1: SMARTER CUSTOMER ORDER PROCESSING, CONNECTED TO OPERATIONS
          - 100% Nội dung gốc của sếp, giữ nguyên tiêu đề "Key Benefits:"
          - Không dùng hàng thẻ hộp dưới chân, tránh lặp lại rập khuôn
          - Bố cục mở rộng sang 2 bên (max-w-[1440px]), Key Benefits dạng lưới 2 cột giúp chữ dàn đều, không bị dài dòng
      ======================================================================= */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* CỘT TRÁI (6 CỘT): TIÊU ĐỀ, DẪN NHẬP & KEY BENEFITS DÀN RỘNG 2 CỘT */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Capsule Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-2xs">
                <FileText size={13} className="text-lnt-blue" />
                <span>01 • ORDER AUTOMATION</span>
              </div>

              {/* Tiêu đề H2 chuẩn */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight leading-snug">
                Smarter Customer Order Processing,{' '}
                <span className="text-lnt-blue">Connected to Operations</span>
              </h2>

              {/* 2 Đoạn dẫn nhập nguyên gốc */}
              <div className="space-y-3 text-sm sm:text-base text-body leading-relaxed">
                <p>
                  Transform customer order information into structured sales order data directly in FXPRO through AI-powered data extraction, processing, and validation.
                </p>
                <p>
                  Receive proactive alerts on order delays, quantity discrepancies, and potential delivery risks, enabling faster responses and better operational control.
                </p>
              </div>

              {/* KEY BENEFITS - Lưới 2 cột mở rộng sang 2 bên, giúp chiều cao ngắn gọn, không bị dài dòng */}
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue font-heading mb-3.5">
                  Key Benefits:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {orderBenefits.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-sky-100 text-lnt-blue flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[2.5]" />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <h4 className="text-sm font-bold text-lnt-navy leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-body leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* CỘT PHẢI (6 CỘT): 2 HÌNH ẢNH TO RÕ, CHỒNG LỚP NỔI BẬT CÂN BẰNG CHIỀU CAO */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4 sm:py-6 lg:py-8">
              
              {/* Quầng sáng dịu Brand Soft Glow phía sau */}
              <div className="pointer-events-none absolute -top-8 -right-8 h-96 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-indigo-100/20 blur-[100px] -z-10" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-80 w-80 rounded-full bg-cyan-100/35 blur-[90px] -z-10" />

              {/* Khung chứa 2 ảnh to bản */}
              <div className="relative w-full max-w-[650px] lg:max-w-none mx-auto">
                
                {/* HÌNH ĐẰNG SAU (AI_Suite2 - Confirmed Order Management): Khổ lớn, lệch lên trên về phía bên phải */}
                <div className="relative mr-10 w-[88%] sm:w-[90%] rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <img
                    src={aiSuite2}
                    alt="Customer Order Source Document - PO Items"
                    className="w-full h-auto object-cover object-top block"
                  />
                </div>

                {/* HÌNH ĐẰNG TRƯỚC (AI_Suite1 - Customer PO Document): Khổ lớn đè lên phía trước, lệch xuống dưới về phía bên trái */}
                <div className="relative z-10 -mt-50 sm:-mt-28 lg:-mt-70 ml-15 w-[100%] sm:w-[92%] rounded-2xl overflow-hidden shadow-2xl border-2 border-white ring-1 ring-slate-200/90 bg-white transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl">
                  <img
                    src={aiSuite1}
                    alt="FXPRO Confirmed Order Management & Product Detail"
                    className="w-full h-auto object-cover block"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =======================================================================
          MODULE 2: FROM CUSTOMER TECH PACKS TO READY-TO-USE BOM DATA
          - Nền phân đoạn Zebra luân phiên (bg-slate-50/60)
          - Bố cục So le: Cột trái (2 ảnh chồng nhau AI_Suite4 & AI_Suite3) | Cột phải (Văn bản & 5 Key Benefits)
          - Mở rộng sang 2 bên (max-w-[1440px]), Key Benefits lưới 2 cột giúp giảm chiều dài khung chữ
      ======================================================================= */}
      <section className="w-full bg-slate-50/60 py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* CỘT TRÁI (6 CỘT): 2 HÌNH ẢNH TO RÕ, CHỒNG LỚP NỔI BẬT CÂN BẰNG CHIỀU CAO */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4 sm:py-6 lg:py-8 order-2 lg:order-1">
              
              {/* Quầng sáng dịu Brand Soft Glow */}
              <div className="pointer-events-none absolute -top-8 -left-8 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-200/40 via-sky-100/30 to-blue-100/20 blur-[100px] -z-10" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-80 w-80 rounded-full bg-sky-100/35 blur-[90px] -z-10" />

              {/* Khung chứa 2 ảnh to bản */}
              <div className="relative w-full max-w-[650px] lg:max-w-none mx-auto">
                
                {/* HÌNH ĐẰNG SAU (AI_Suite4 - Customer Tech Pack Specification): Khổ lớn, lệch lên trên về phía bên trái */}
                <div className="relative mr-auto w-[88%] sm:w-[90%] rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <img
                    src={aiSuite4}
                    alt="Customer Tech Pack Specification and Material BOM Sheet"
                    className="w-full h-auto object-cover object-top block"
                  />
                </div>

                {/* HÌNH ĐẰNG TRƯỚC (AI_Suite3 - AI Based BOM Creation): Khổ lớn đè lên phía trước, lệch xuống dưới về phía bên phải */}
                <div className="relative z-10 -mt-20 sm:-mt-28 lg:-mt-32 ml-auto w-[90%] sm:w-[92%] rounded-2xl overflow-hidden shadow-2xl border-2 border-white ring-1 ring-slate-200/90 bg-white transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl">
                  <img
                    src={aiSuite3}
                    alt="FXPRO AI Based BOM Creation Screen"
                    className="w-full h-auto object-cover block"
                  />
                </div>

              </div>

            </div>

            {/* CỘT PHẢI (6 CỘT): TIÊU ĐỀ, DẪN NHẬP & 5 KEY BENEFITS DÀN RỘNG 2 CỘT */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              
              {/* Capsule Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-lnt-blue/30 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue shadow-2xs">
                <Layers size={13} className="text-lnt-blue" />
                <span>02 • PRE-PRODUCTION AUTOMATION</span>
              </div>

              {/* Tiêu đề H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-title tracking-tight leading-snug">
                From Customer Tech Packs to{' '}
                <span className="text-lnt-blue">Ready-to-Use BOM Data</span>
              </h2>

              {/* Đoạn dẫn nhập nguyên gốc */}
              <p className="text-sm sm:text-base text-body leading-relaxed">
                The FXPRO AI Agent automatically reads, extracts, structures, and validates key material and component information from customer Tech Packs. Within minutes, it transforms this information into structured BOM/ Purchasing data.
              </p>

              {/* KEY BENEFITS - Lưới 2 cột mở rộng sang 2 bên, giúp nội dung không bị dài dòng */}
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-lnt-blue font-heading mb-3.5">
                  Key Benefits:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3.5">
                  {techPackBenefits.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 ${idx === techPackBenefits.length - 1 ? 'sm:col-span-2' : ''}`}
                    >
                      <div className="w-5 h-5 rounded-full bg-sky-100 text-lnt-blue flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[2.5]" />
                      </div>
                      <p className="text-xs text-body leading-relaxed">
                        <strong className="text-lnt-navy font-bold">{item.title}</strong>
                        {' – '}
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
