import React from 'react'
import {
  ArrowRight,
  ArrowDown,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react'

export default function WorkNoteWorkflow() {
  const step1 = {
    num: '01',
    title: 'Capture Information',
    desc: 'Record notes, comments, instructions, and supporting documents against Sales Orders.',
  }

  const step2 = {
    num: '02',
    title: 'Organize & Categorize',
    desc: 'Classify information using predefined categories and manage private or shared access.',
  }

  const step3 = {
    num: '03',
    title: 'Create & Assign Tasks',
    desc: 'Convert comments into actionable tasks and assign responsible users with due dates.',
  }

  const step4 = {
    num: '04',
    title: 'Notify & Follow Up',
    desc: 'Generate reminders and email notifications to ensure timely follow-up.',
  }

  const step5 = {
    num: '05',
    title: 'Monitor Task Progress',
    desc: 'Track Pending, Ongoing, and Completed activities through interactive dashboards.',
  }

  const step6 = {
    num: '06',
    title: 'Report & Review',
    desc: 'Generate status snapshots and reports to improve traceability and management visibility.',
  }

  return (
    <section id="workflow" className="w-full bg-slate-50/60 py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =======================================================================
            HEADER KHỐI: GỌN GÀNG, SẠCH SẼ, CHUẨN DESIGN_SYSTEM.md
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-lnt-blue bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs mb-3">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight">
            How WorkNote Works
          </h2>
        </div>

        {/* =======================================================================
            DESKTOP VIEW (>= lg): BỐ CỤC 2 HÀNG CÓ MŨI TÊN DẪN HƯỚNG VÀ VÒNG LẶP 5 -> 4
        ======================================================================= */}
        <div className="hidden lg:block space-y-10">
          
          {/* --- HÀNG 1: BƯỚC 01 -> BƯỚC 02 -> BƯỚC 03 --- */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-8 items-stretch">
              
              {/* Thẻ 01 */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-lnt-blue hover:shadow-md transition-all duration-300 flex flex-col justify-start relative">
                <span className="text-xs font-mono font-bold text-lnt-blue bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-md w-fit">
                  Step {step1.num}
                </span>
                <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 font-heading tracking-tight mt-3 leading-snug">
                  {step1.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 font-normal leading-relaxed">
                  {step1.desc}
                </p>

                {/* Mũi tên dẫn sang Thẻ 02 */}
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 text-lnt-blue flex items-center justify-center shadow-xs z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Thẻ 02 */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-lnt-blue hover:shadow-md transition-all duration-300 flex flex-col justify-start relative">
                <span className="text-xs font-mono font-bold text-lnt-blue bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-md w-fit">
                  Step {step2.num}
                </span>
                <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 font-heading tracking-tight mt-3 leading-snug">
                  {step2.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 font-normal leading-relaxed">
                  {step2.desc}
                </p>

                {/* Mũi tên dẫn sang Thẻ 03 */}
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 text-lnt-blue flex items-center justify-center shadow-xs z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Thẻ 03 */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-lnt-blue hover:shadow-md transition-all duration-300 flex flex-col justify-start relative">
                <span className="text-xs font-mono font-bold text-lnt-blue bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-md w-fit">
                  Step {step3.num}
                </span>
                <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 font-heading tracking-tight mt-3 leading-snug">
                  {step3.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 font-normal leading-relaxed">
                  {step3.desc}
                </p>
              </div>

            </div>

            {/* Mũi tên chuyển tiếp từ Hàng 1 (Cuối bước 3) xuống Hàng 2 (Đầu bước 4) */}
            <div className="flex items-center justify-center my-6 relative">
              <div className="w-full border-t border-dashed border-slate-300 absolute" />
              <div className="relative px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 shadow-2xs flex items-center gap-2">
                <span>Task Execution & Monitoring Flow</span>
                <ArrowDown size={14} className="text-lnt-blue" />
              </div>
            </div>
          </div>

          {/* --- HÀNG 2: BƯỚC 04 -> BƯỚC 05 (CÓ VÒNG LẶP QUAY LẠI 04) -> BƯỚC 06 --- */}
          <div className="relative pt-6">
            
            {/* VÒNG LẶP SVG UỐN CONG TỪ BƯỚC 05 QUAY VỀ BƯỚC 04 */}
            <div className="absolute -top-3 left-[16%] right-[50%] h-8 pointer-events-none z-20 flex items-center justify-center">
              <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold shadow-xs flex items-center gap-1.5">
                <RotateCcw size={12} className="text-amber-600" />
                <span>Update & Re-notify on pending tasks</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 items-stretch">
              
              {/* Thẻ 04: Notify & Follow Up */}
              <div className="rounded-2xl bg-white border-2 border-slate-200/90 hover:border-lnt-blue p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-start relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-lnt-blue bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-md w-fit">
                    Step {step4.num}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                    Active Feedback Hub
                  </span>
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 font-heading tracking-tight leading-snug">
                  {step4.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 font-normal leading-relaxed">
                  {step4.desc}
                </p>

                {/* Mũi tên chính dẫn từ 04 sang 05 */}
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 text-lnt-blue flex items-center justify-center shadow-xs z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Thẻ 05: Monitor Task Progress (Có vòng lặp quay ngược về 04) */}
              <div className="rounded-2xl bg-white border-2 border-lnt-blue/70 p-6 sm:p-7 shadow-sm hover:border-lnt-blue hover:shadow-md transition-all duration-300 flex flex-col justify-start relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-lnt-blue bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-md w-fit">
                    Step {step5.num}
                  </span>
                  <span className="text-[11px] font-semibold text-lnt-blue bg-sky-50 px-2 py-0.5 rounded border border-sky-200/60">
                    Progress Evaluation
                  </span>
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 font-heading tracking-tight leading-snug">
                  {step5.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 font-normal leading-relaxed">
                  {step5.desc}
                </p>

                {/* Mũi tên dẫn từ 05 sang 06 khi hoàn thành */}
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 flex items-center z-10">
                  <div className="w-8 h-8 rounded-full bg-white border border-emerald-300 text-emerald-600 flex items-center justify-center shadow-xs" title="Completed activities move forward to Step 06">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

              {/* Thẻ 06: Report & Review */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all duration-300 flex flex-col justify-start relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md w-fit">
                    Step {step6.num}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Final Output
                  </span>
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 font-heading tracking-tight leading-snug">
                  {step6.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 font-normal leading-relaxed">
                  {step6.desc}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* =======================================================================
            MOBILE & TABLET VIEW (< lg): TRỤC DỌC TUẦN HOÀN RÕ NÉT
        ======================================================================= */}
        <div className="lg:hidden space-y-4">
          {[step1, step2, step3, step4, step5, step6].map((item, idx) => {
            const isStep5 = item.num === '05'
            const isStep4 = item.num === '04'
            
            return (
              <div key={item.num} className="space-y-4">
                <div className={`rounded-2xl bg-white p-5 sm:p-6 border transition-all ${
                  isStep5 ? 'border-2 border-lnt-blue/70 shadow-sm' : 'border-slate-200 shadow-2xs'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-lnt-blue bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-md">
                      Step {item.num}
                    </span>
                    {isStep4 && (
                      <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium border border-amber-200">
                        Feedback Hub
                      </span>
                    )}
                    {isStep5 && (
                      <span className="text-[11px] text-lnt-blue bg-sky-50 px-2 py-0.5 rounded font-medium border border-sky-200">
                        Loops to Step 04
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Vòng lặp đặc biệt giữa bước 5 và bước 4 trên mobile */}
                {isStep5 && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium flex items-center justify-center gap-2">
                    <RotateCcw size={14} className="text-amber-700 shrink-0" />
                    <span>Pending activities loop back to Step 04 to update</span>
                  </div>
                )}

                {/* Mũi tên dẫn dọc giữa các bước */}
                {idx < 5 && (
                  <div className="flex justify-center text-slate-400">
                    <ArrowDown size={18} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
