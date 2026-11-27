import React from 'react'

export default function WorkNoteBenefits() {
  const benefits = [
    {
      num: '01',
      title: 'Proper Documentation',
      desc: 'Maintain organized digital records of important notes, tasks, comments, and supporting documents.',
    },
    {
      num: '02',
      title: 'Improved Traceability',
      desc: 'Track task ownership, updates, and completion history for better visibility of business activities.',
    },
    {
      num: '03',
      title: 'Knowledge Sharing',
      desc: 'Enable teams to share important information, observations, and work-related knowledge.',
    },
    {
      num: '04',
      title: 'Effective Issue Tracking',
      desc: 'Record issues, assign follow-up actions, and monitor their resolution.',
    },
    {
      num: '05',
      title: 'Continuous Process Improvement',
      desc: 'Use documented information and historical records to identify recurring issues and improvement opportunities.',
    },
    {
      num: '06',
      title: 'Greater Transparency',
      desc: 'Improve visibility of responsibilities, task progress, and outstanding activities.',
    },
    {
      num: '07',
      title: 'Compliance Support',
      desc: 'Maintain accessible records and supporting documentation to assist internal reviews and audit requirements.',
    },
    {
      num: '08',
      title: 'Faster Employee Onboarding',
      desc: 'Help new employees understand previous discussions, work instructions, and ongoing activities through centralized records.',
    },
  ]

  return (
    <section id="business-benefits" className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =======================================================================
            HEADER KHỐI: GỌN GÀNG, ĐÚNG CHUẨN NỘI DUNG YÊU CẦU
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-lnt-blue bg-sky-50 border border-sky-100 px-3 py-1 rounded-full shadow-2xs mb-3">
            Key Business Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight leading-tight">
            Better Documentation & Business Knowledge Management
          </h2>
        </div>

        {/* =======================================================================
            LƯỚI 8 THẺ LỢI ÍCH: 4 CỘT x 2 HÀNG CÂN XỨNG, SẠCH SẼ, CHỮ TO RÕ NÉT
        ======================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => (
            <div
              key={item.num}
              className="rounded-2xl bg-slate-50/60 border border-slate-200/90 hover:border-lnt-blue hover:bg-white hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Số thứ tự */}
                <div className="mb-3">
                  <span className="text-xs font-mono font-bold text-lnt-blue bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs">
                    {item.num}
                  </span>
                </div>

                {/* Tiêu đề (100% nguyên văn) */}
                <h3 className="text-base sm:text-[17px] font-bold text-slate-900 font-heading tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Mô tả (100% nguyên văn) */}
                <p className="mt-2 text-sm text-slate-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
