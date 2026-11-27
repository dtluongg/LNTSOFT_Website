import React from 'react'

export default function WorkNoteCapabilities() {
  return (
    <div id="capabilities" className="w-full bg-white">
      
      {/* =======================================================================
          HEADER PHÂN HỆ: GỌN GÀNG, ĐÚNG CHUẨN, KHÔNG RƯỜM RÀ
      ======================================================================= */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-14 border-b border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-lnt-blue bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs mb-3">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight">
            Key Capabilities
          </h2>
        </div>
      </section>

      {/* =======================================================================
          PHẦN 1: 4 NỘI DUNG ĐẦU TIÊN + 1 HÌNH ẢNH (KHUNG GỌN GÀNG, SẠCH SẼ)
      ======================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Cột trái: 4 nội dung nguyên bản của bạn (Lưới 2 cột) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1 */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 font-heading leading-snug">
                    Streamline Task Creation, Assignment & Tracking
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    Create and assign tasks, monitor progress, and easily identify completed, pending, and ongoing activities.
                  </p>
                </div>

                {/* 2 */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 font-heading leading-snug">
                    Reduce Information Loss & Simplify Order Follow-Ups
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    Keep all important notes, comments, updates, and observations digitally recorded against the relevant Sales Orders.
                  </p>
                </div>

                {/* 3 */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 font-heading leading-snug">
                    Enhance Communication & Collaboration
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    Share notes, task updates, and relevant information with team members to maintain alignment throughout order execution.
                  </p>
                </div>

                {/* 4 */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 font-heading leading-snug">
                    Improve Accountability & Transparency
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    Maintain visibility of task ownership, updates, and completion status, helping teams understand who is responsible for each activity.
                  </p>
                </div>

              </div>
            </div>

            {/* Cột phải: 1 hình ảnh sạch sẽ, gọn gàng, không họa tiết màu mè */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80"
                  alt="WorkNote Task Management"
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          PHẦN 2: 1 HÌNH ẢNH + 2 NỘI DUNG TIẾP THEO (ĐẢO CHIỀU)
      ======================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Cột trái: 1 hình ảnh sạch sẽ */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                  alt="WorkNote Reminders and Follow-Ups"
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
              </div>
            </div>

            {/* Cột phải: 2 nội dung nguyên bản của bạn */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              
              {/* 5 */}
              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading leading-snug">
                  Automated Follow-Ups & Reminders
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Generate task reminders and email notifications to help users follow up on pending activities and meet important deadlines.
                </p>
              </div>

              {/* 6 */}
              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading leading-snug">
                  Comment Capture with Follow-Up Actions
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Record important comments and observations and link them directly to actionable follow-up tasks.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          PHẦN 3: 2 NỘI DUNG CUỐI CÙNG + 1 HÌNH ẢNH (ĐẢO CHIỀU LẠI)
      ======================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Cột trái: 2 nội dung nguyên bản của bạn */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* 7 */}
              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading leading-snug">
                  Real-Time Task Status Updates
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Monitor task progress through clear status indicators, including Pending, Ongoing, and Completed.
                </p>
              </div>

              {/* 8 */}
              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading leading-snug">
                  Interactive Dashboards & Reports
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Access visual dashboards and status reports to monitor outstanding tasks, follow-up activities, and overall progress.
                </p>
              </div>

            </div>

            {/* Cột phải: 1 hình ảnh sạch sẽ */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="WorkNote Status Updates and Reports"
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
