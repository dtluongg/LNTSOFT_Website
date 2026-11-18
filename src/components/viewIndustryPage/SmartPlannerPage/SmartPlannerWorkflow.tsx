import React from 'react'
import {
  Workflow,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Building2,
  FileText,
  PackageCheck,
  Cpu,
  CheckCircle2,
  Check,
  ChevronRight,
  Layers,
  CalendarCheck,
  Shirt,
  BarChart3,
  ClipboardList,
} from 'lucide-react'

export default function SmartPlannerWorkflow() {
  // 5 Hạng mục đầu ra của Detail Plan (100% nguyên gốc từ mindmap)
  const detailDeliverables = [
    { title: 'Production Plan', desc: 'Daily & hourly sewing line schedules' },
    { title: 'Production Status', desc: 'Real-time floor tracking & line progress' },
    { title: 'Machine/Manning Reports', desc: 'Operator allocations & machine load balance' },
    { title: 'Machine Requirement', desc: 'Specialty attachments & tooling readiness' },
    { title: 'Shipment Status', desc: 'On-time delivery tracking & dispatch status' },
  ]

  return (
    <section id="workflow" className="w-full bg-white py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-slate-200/80">
      
      {/* =========================================================================
          QUẦNG SÁNG NỀN QUANG HỌC DỊU ÊM (AMBIENT AURA GLOW)
      ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[520px] bg-gradient-to-r from-sky-100/40 via-blue-50/50 to-indigo-50/40 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =======================================================================
            HEADER KHỐI: SANG TRỌNG, THOÁNG ĐÃNG
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lnt-blue shadow-xs mb-4">
            <Workflow size={13} className="text-lnt-blue" />
            <span>Operational Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-title font-heading tracking-tight">
            How FXPRO <span className="text-lnt-blue">Opteze Planner Works</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            An end-to-end synchronized planning architecture connecting commercial demand with enterprise capacity planning and finite machine-level production scheduling.
          </p>
        </div>

        {/* =======================================================================
            MINDMAP CANVAS (DESKTOP & TABLET NGANG): BẢN VẼ CHUẨN XÁC 100% THEO SƠ ĐỒ
        ======================================================================= */}
        <div className="hidden lg:block relative bg-slate-50/60 rounded-3xl border border-slate-200/80 p-8 xl:p-12 shadow-sm">
          
          {/* Lớp lưới toạ độ công nghệ ẩn mờ */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `radial-gradient(#087bc1 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 grid grid-cols-12 gap-6 items-center">
            
            {/* ===================================================================
                CỘT 1 (4 CỘT): TRẠM NĂNG LỰC TỔNG THỂ (CAPACITY PLAN & INPUT/OUTPUT)
            =================================================================== */}
            <div className="col-span-4 flex flex-col items-center space-y-8">
              
              {/* KHỐI 1 (TOP-LEFT): SALES / FORECAST / INQUIRY ORDERS */}
              <div className="w-full max-w-[280px] rounded-2xl bg-white p-5 border-2 border-lnt-blue/30 shadow-md hover:shadow-lg transition-all duration-300 text-center relative group">
                <div className="space-y-1.5">
                  <div className="text-sm font-bold text-title group-hover:text-lnt-blue transition-colors">
                    Sales order
                  </div>
                  <div className="text-sm font-bold text-title group-hover:text-lnt-blue transition-colors">
                    Forecasted order
                  </div>
                  <div className="text-sm font-bold text-lnt-blue">
                    Inquiry / Block order
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Commercial Demand Input
                </div>

                {/* Mũi tên chỉ xuống Capacity Plan */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-lnt-blue flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-lnt-blue/60" />
                  <ArrowDown size={14} className="stroke-[2.5]" />
                </div>
              </div>

              {/* KHỐI TRUNG TÂM 1: CAPACITY PLAN (CORE HUB) */}
              <div className="w-full max-w-[280px] rounded-2xl bg-gradient-to-r from-[#1b3a70] via-[#087bc1] to-[#0284c7] p-5 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-center relative border-2 border-white/80 ring-2 ring-lnt-blue/30">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sky-200">
                    Stage 01 Hub
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-wide">
                  Capacity Plan
                </h3>
                <p className="text-xs text-white/80 mt-1 font-medium">
                  Group-Level Demand & Workload Balancing
                </p>

                {/* Đường nối xuống Capacity Reports */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-lnt-blue flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-lnt-blue/60" />
                  <ArrowDown size={14} className="stroke-[2.5]" />
                </div>
              </div>

              {/* KHỐI 3 (BOTTOM-LEFT): CAPACITY REPORTS */}
              <div className="w-full max-w-[280px] rounded-2xl bg-white p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-lnt-blue flex items-center justify-center shrink-0 border border-sky-100">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-title">
                    Capacity Reports
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Utilization & Load Forecast
                  </p>
                </div>
              </div>

            </div>

            {/* ===================================================================
                CỘT 2 (4 CỘT): TRỤC ĐIỀU PHỐI (PLANT ALLOCATION & ORDER CONFIRMATION)
            =================================================================== */}
            <div className="col-span-4 flex flex-col items-center justify-between h-[520px] relative">
              
              {/* KHỐI TRÊN (TOP-CENTER): PLANT ALLOCATION */}
              <div className="w-full max-w-[260px] rounded-2xl bg-white p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 text-center relative group">
                <div className="w-11 h-11 mx-auto rounded-xl bg-sky-50 text-lnt-blue flex items-center justify-center mb-2.5 border border-sky-100 group-hover:scale-110 transition-transform">
                  <Building2 size={22} />
                </div>
                <h4 className="text-sm font-bold text-title">
                  Plant Allocation
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Multi-Plant Routing & Inter-Company Transfer
                </p>

                {/* Đường nối chỉ xuống trục chính */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-lnt-blue flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-lnt-blue/60" />
                  <ArrowDown size={14} className="stroke-[2.5]" />
                </div>
              </div>

              {/* ĐƯỜNG TRỤC NỐI NGANG: CAPACITY PLAN ➔ DETAIL PLAN */}
              <div className="w-full flex items-center justify-center my-auto relative">
                <div className="w-full h-1 bg-gradient-to-r from-lnt-blue via-sky-400 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(8,123,193,0.35)] relative">
                  {/* Điểm pulse chạy trên đường nối */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-2 w-3 h-3 rounded-full bg-white border-2 border-lnt-blue shadow-[0_0_8px_#087bc1]" />
                </div>
                {/* Mũi tên chỉ sang phải */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-indigo-500 -mr-2">
                  <ChevronRight size={26} className="stroke-[3]" />
                </div>
              </div>

              {/* KHỐI DƯỚI (BOTTOM-CENTER): ORDER CONFIRMATION */}
              <div className="w-full max-w-[260px] rounded-2xl bg-white p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 text-center relative group">
                {/* Đường nối từ trục chính xuống */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-lnt-blue flex flex-col items-center">
                  <ArrowDown size={14} className="stroke-[2.5]" />
                  <div className="w-0.5 h-3 bg-lnt-blue/60" />
                </div>

                <div className="w-11 h-11 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5 border border-emerald-100 group-hover:scale-110 transition-transform">
                  <PackageCheck size={22} />
                </div>
                <h4 className="text-sm font-bold text-title">
                  Order Confirmation
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Committed Delivery Dates & Sales Confirmation
                </p>
              </div>

            </div>

            {/* ===================================================================
                CỘT 3 (4 CỘT): TRẠM LẬP KẾ HOẠCH CHI TIẾT (DETAIL PLAN & 5 DELIVERABLES)
            =================================================================== */}
            <div className="col-span-4 flex flex-col items-center space-y-8">
              
              {/* KHỐI 1 (TOP-RIGHT): MACHINE ALLOCATION */}
              <div className="w-full max-w-[280px] rounded-2xl bg-white p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 text-center relative group">
                <div className="w-11 h-11 mx-auto rounded-xl bg-sky-50 text-lnt-blue flex items-center justify-center mb-2.5 border border-sky-100 group-hover:scale-110 transition-transform">
                  <Shirt size={22} />
                </div>
                <h4 className="text-sm font-bold text-title">
                  Machine Allocation
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sewing Line Balancing & Operator Skills
                </p>

                {/* Mũi tên chỉ xuống Detail Plan */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-lnt-blue flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-lnt-blue/60" />
                  <ArrowDown size={14} className="stroke-[2.5]" />
                </div>
              </div>

              {/* KHỐI TRUNG TÂM 2: DETAIL PLAN (CORE HUB) */}
              <div className="w-full max-w-[280px] rounded-2xl bg-gradient-to-r from-[#087bc1] via-[#0284c7] to-[#1e40af] p-5 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-center relative border-2 border-white/80 ring-2 ring-lnt-blue/30">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sky-200">
                    Stage 02 Hub
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-wide">
                  Detail Plan
                </h3>
                <p className="text-xs text-white/80 mt-1 font-medium">
                  Finite Sewing Line & Workstation Scheduling
                </p>

                {/* Đường nối xuống 5 Deliverables Checklist */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-lnt-blue flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-lnt-blue/60" />
                  <ArrowDown size={14} className="stroke-[2.5]" />
                </div>
              </div>

              {/* KHỐI 3 (BOTTOM-RIGHT): 5 HẠNG MỤC ĐẦU RA SẢN XUẤT (DELIVERABLES) */}
              <div className="w-full max-w-[280px] rounded-2xl bg-white p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lnt-blue mb-2.5 pb-2 border-b border-slate-100">
                  <ClipboardList size={14} />
                  <span>Output Deliverables</span>
                </div>
                <div className="space-y-2">
                  {detailDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9.5px] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="font-semibold text-slate-800 leading-snug">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* =======================================================================
            RESPONSIVE ADAPTIVE TIMELINE (MOBILE & TABLET NHỎ)
            Tự động chuyển thành 2 chặng liên kết dọc rõ ràng, trực quan
        ======================================================================= */}
        <div className="block lg:hidden space-y-8">
          
          {/* CHẶNG 1: CAPACITY PLANNING */}
          <div className="rounded-3xl bg-slate-50/80 p-6 border border-slate-200/90 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lnt-blue">
              <span className="w-2 h-2 rounded-full bg-lnt-blue" />
              <span>Phase 01 • Capacity Planning</span>
            </div>

            {/* Input */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center">
              <div className="text-xs uppercase font-bold text-slate-400 mb-1">Demand Input</div>
              <div className="text-sm font-bold text-title">Sales order • Forecasted order • Inquiry/Block order</div>
            </div>

            {/* Core Hub */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 text-white text-center shadow-lg">
              <h3 className="text-lg font-bold">Capacity Plan</h3>
              <p className="text-xs text-white/80 mt-1">Multi-plant balancing & demand allocation</p>
            </div>

            {/* Sub-routes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <Building2 size={18} className="mx-auto text-lnt-blue mb-1" />
                <div className="text-xs font-bold text-title">Plant Allocation</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <BarChart3 size={18} className="mx-auto text-sky-600 mb-1" />
                <div className="text-xs font-bold text-title">Capacity Reports</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <PackageCheck size={18} className="mx-auto text-emerald-600 mb-1" />
                <div className="text-xs font-bold text-title">Order Confirmation</div>
              </div>
            </div>
          </div>

          {/* MŨI TÊN CHUYỂN TIẾP TRUNG TÂM */}
          <div className="flex items-center justify-center text-lnt-blue py-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold">
              <span>Synchronized Flow</span>
              <ArrowDown size={14} />
            </div>
          </div>

          {/* CHẶNG 2: DETAIL PLANNING */}
          <div className="rounded-3xl bg-slate-50/80 p-6 border border-slate-200/90 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lnt-blue">
              <span className="w-2 h-2 rounded-full bg-lnt-blue" />
              <span>Phase 02 • Detail Planning</span>
            </div>

            {/* Input Machine Allocation */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center">
              <div className="text-xs uppercase font-bold text-slate-400 mb-1">Technical Input</div>
              <div className="text-sm font-bold text-title">Machine Allocation & Sewing Line Balancing</div>
            </div>

            {/* Core Hub */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-700 text-white text-center shadow-lg">
              <h3 className="text-lg font-bold">Detail Plan</h3>
              <p className="text-xs text-white/80 mt-1">Finite machine & operator scheduling</p>
            </div>

            {/* 5 Deliverables */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-lnt-blue mb-2 pb-1 border-b border-slate-100">
                Production Deliverables:
              </div>
              {detailDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9px] shrink-0">
                    ✓
                  </span>
                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
