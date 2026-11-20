import React, { useState } from 'react'
import {
  Workflow,
  Send,
  Radio,
  SlidersHorizontal,
  LayoutDashboard,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Cpu,
  Activity,
  BarChart2,
  TrendingUp,
  AlertCircle,
  Clock,
  Layers,
} from 'lucide-react'

export default function SmartFactoryWorkflow() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: '01',
      step: 'Step 1',
      title: 'Manufacturing Order & Plan Release',
      shortTitle: 'Plan Release',
      desc: 'Release manufacturing orders and allocate planned production targets, resources, and assignments to sewing teams to initiate production execution.',
      icon: Send,
      theme: 'blue',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200/80',
      accentGlow: 'from-blue-500/20 to-sky-500/10',
      // Visual Widget đại diện cho Step 1: Lệnh sản xuất & phân bổ mục tiêu
      widget: {
        tag: 'WORK ORDER RELEASE',
        title: 'MO #2026-FX48 • Sewing Line A-02',
        metric1: { label: 'Planned Target', value: '2,400 pcs / day' },
        metric2: { label: 'Assigned Teams', value: '3 Teams (48 Operators)' },
        metric3: { label: 'Status', value: 'Ready for Floor Execution' },
        statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      },
    },
    {
      id: '02',
      step: 'Step 2',
      title: 'Real-Time Production Tracking',
      shortTitle: 'Real-Time Tracking',
      desc: 'Capture and update actual production output, team performance, and work-in-progress (WIP) information in real time through connected sewing workstations and mobile interfaces.',
      icon: Radio,
      theme: 'sky',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
      accentGlow: 'from-sky-500/20 to-cyan-500/10',
      // Visual Widget đại diện cho Step 2: Dữ liệu thu thập thời gian thực
      widget: {
        tag: 'LIVE TELEMETRY STREAM',
        title: 'Connected Workstations Online',
        metric1: { label: 'Current Output', value: '1,865 pcs (77.7%)' },
        metric2: { label: 'Connected Devices', value: '48 / 48 Active IoT Nodes' },
        metric3: { label: 'WIP Tracking', value: 'Balanced Flow • Zero Bottleneck' },
        statusColor: 'text-sky-600 bg-sky-50 border-sky-200',
      },
    },
    {
      id: '03',
      step: 'Step 3',
      title: 'Production Performance Monitoring',
      shortTitle: 'Performance Monitoring',
      desc: 'Compare planned targets against actual production results. Monitor sewing team performance, identify output gaps, and highlight production teams requiring management attention.',
      icon: SlidersHorizontal,
      theme: 'teal',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200/80',
      accentGlow: 'from-teal-500/20 to-emerald-500/10',
      // Visual Widget đại diện cho Step 3: Giám sát so sánh kế hoạch vs thực tế
      widget: {
        tag: 'VARIANCE MONITORING',
        title: 'Planned Target vs Actual Output',
        metric1: { label: 'Variance Rate', value: '+4.2% Ahead of Plan' },
        metric2: { label: 'Attention Alert', value: 'Team 03 Needs Material Resupply' },
        metric3: { label: 'Line Velocity', value: 'Optimal Cycle Time (42s)' },
        statusColor: 'text-amber-600 bg-amber-50 border-amber-200',
      },
    },
    {
      id: '04',
      step: 'Step 4',
      title: 'Production Analytics & Management Insights',
      shortTitle: 'Analytics & Insights',
      desc: 'Present production information through interactive dashboards and analytical reports, enabling supervisors and management to evaluate production performance, identify operational issues, and make informed decisions.',
      icon: LayoutDashboard,
      theme: 'indigo',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      accentGlow: 'from-indigo-500/20 to-purple-500/10',
      // Visual Widget đại diện cho Step 4: Dashboard điều hành thông minh
      widget: {
        tag: 'MANAGEMENT DASHBOARD',
        title: 'Overall Sewing Line Efficiency',
        metric1: { label: 'OEE Efficiency', value: '94.8% Operational Score' },
        metric2: { label: 'Defect Rate', value: '0.85% (Below 1.2% Threshold)' },
        metric3: { label: 'Downtime Log', value: '-22% Idle Time this Shift' },
        statusColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      },
    },
    {
      id: '05',
      step: 'Step 5',
      title: 'Corrective Actions & Continuous Improvement',
      shortTitle: 'Continuous Improvement',
      desc: 'Use real-time production information and performance insights to address production issues, improve team coordination, optimize resource utilization, and continuously enhance sewing operations',
      icon: RefreshCw,
      theme: 'violet',
      badgeBg: 'bg-violet-50 text-violet-700 border-violet-200/80',
      accentGlow: 'from-violet-500/20 to-blue-500/10',
      // Visual Widget đại diện cho Step 5: Cải tiến khép kín
      widget: {
        tag: 'CLOSED-LOOP OPTIMIZATION',
        title: 'Operational Feedback Loop Active',
        metric1: { label: 'Action Executed', value: 'Workload Re-balanced across Lines' },
        metric2: { label: 'Resource Gain', value: '+11.5% Capacity Utilization' },
        metric3: { label: 'Feedback Sync', value: 'Updated to Master Scheduling' },
        statusColor: 'text-violet-600 bg-violet-50 border-violet-200',
      },
    },
  ]

  const current = steps[activeStep]
  const CurrentIcon = current.icon

  return (
    <section id="workflow" className="w-full bg-white py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-slate-200/80">
      {/* Quầng sáng quang học dịu êm làm nền */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[520px] bg-gradient-to-r from-sky-100/40 via-blue-50/50 to-indigo-50/40 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =======================================================================
            HEADER PHÂN HỆ: GỌN GÀNG, CAO CẤP
        ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lnt-blue shadow-xs mb-4">
            <Workflow size={13} className="text-lnt-blue" />
            <span>Process Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-title font-heading tracking-tight">
            How the Smart Sewing <span className="text-lnt-blue">Factory Works</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            The FXPRO Smart Sewing Factory connects manufacturing order planning, sewing operations, and management monitoring through a continuous flow of real-time production information.
          </p>
        </div>

        {/* =======================================================================
            MINIMAP WORKFLOW CANVAS: SƠ ĐỒ ĐIỀU HƯỚNG TRỰC QUAN + STAGE BẮT MẮT
        ======================================================================= */}
        <div className="relative bg-slate-50/80 rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-100/80 overflow-hidden">
          
          {/* Lưới toạ độ Blueprint mờ tinh tế */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `radial-gradient(#087bc1 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* ===================================================================
              1. MINIMAP PROGRESS TRACK: 5 NÚT SƠ ĐỒ KẾT NỐI NGANG
          =================================================================== */}
          <div className="relative z-10 mb-8 sm:mb-10">
            {/* Thanh dẫn dữ liệu ngầm */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-slate-200 rounded-full -z-0" />
            
            {/* Thanh tiến trình sáng tương ứng với bước đang chọn */}
            <div
              className="hidden lg:block absolute top-7 left-12 h-1 bg-gradient-to-r from-lnt-blue to-sky-400 rounded-full transition-all duration-500 -z-0"
              style={{
                width: `${(activeStep / (steps.length - 1)) * (100 - (24 / 1200) * 100)}%`,
              }}
            />

            {/* Danh sách 5 Node tương tác */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 relative z-10">
              {steps.map((item, idx) => {
                const Icon = item.icon
                const isActive = activeStep === idx

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center sm:flex-col gap-3 sm:gap-2 p-3 sm:p-3.5 rounded-2xl border text-left sm:text-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-white border-sky-400 shadow-md ring-2 ring-sky-100 -translate-y-1'
                        : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                    }`}
                  >
                    {/* Node icon */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-lnt-blue text-white shadow-sm shadow-lnt-blue/30 scale-105'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {item.step}
                      </div>
                      <div
                        className={`text-xs sm:text-sm font-bold truncate transition-colors ${
                          isActive ? 'text-lnt-blue' : 'text-title'
                        }`}
                      >
                        {item.shortTitle}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ===================================================================
              2. SÂN KHẤU MINIMAP (INTERACTIVE SPOTLIGHT STAGE)
              - 1 Cột Hiển thị Widget công nghệ cao, trực quan bắt mắt
              - 1 Cột Trình bày Tiêu đề & Nội dung với khoảng thở thoáng đãng, dễ đọc
          =================================================================== */}
          <div className="relative z-10 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* CỘT NỘI DUNG (7 CỘT): TIÊU ĐỀ + MÔ TẢ CHUẨN XÁC, THOÁNG ĐÃNG */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border ${current.badgeBg}`}>
                    {current.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Process Phase {activeStep + 1} of 5
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-title font-heading tracking-tight leading-snug">
                  {current.title}
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {current.desc}
                </p>

                {/* Điều hướng nhanh Next / Prev */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <ArrowLeft size={14} />
                    <span>Previous</span>
                  </button>

                  <button
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-lnt-blue text-white shadow-xs hover:bg-sky-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <span>Next Step</span>
                    <ArrowRight size={14} />
                  </button>

                  <span className="text-xs text-slate-400 ml-2">
                    Click steps above or use arrows to explore
                  </span>
                </div>
              </div>

              {/* CỘT WIDGET BẮT MẮT (5 CỘT): MÔ PHỎNG DỮ LIỆU SẢN XUẤT THỜI GIAN THỰC */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-7 text-white shadow-xl ring-1 ring-slate-800/80 overflow-hidden">
                  {/* Quầng sáng quang học trên widget */}
                  <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-sky-500/20 rounded-full blur-2xl" />

                  {/* Header widget */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold tracking-wider text-sky-400 uppercase">
                        {current.widget.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">FXPRO • LIVE</span>
                  </div>

                  {/* Tên trạm / thiết bị */}
                  <div className="my-5">
                    <div className="text-xs text-slate-400 mb-1">Active Operation</div>
                    <div className="text-base font-bold text-white font-heading">
                      {current.widget.title}
                    </div>
                  </div>

                  {/* 3 Chỉ số giám sát cốt lõi */}
                  <div className="space-y-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">{current.widget.metric1.label}</span>
                      <span className="text-xs font-bold text-sky-300 font-mono">{current.widget.metric1.value}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">{current.widget.metric2.label}</span>
                      <span className="text-xs font-bold text-emerald-300 font-mono">{current.widget.metric2.value}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">{current.widget.metric3.label}</span>
                      <span className="text-xs font-bold text-amber-300 font-mono truncate max-w-[190px]">{current.widget.metric3.value}</span>
                    </div>
                  </div>

                  {/* Footer status của widget */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <CurrentIcon size={13} className="text-sky-400" />
                      <span>Smart Sewing Engine</span>
                    </div>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={12} /> Sync OK
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* VÒNG LẶP PHẢN HỒI KHÉP KÍN (CLOSED-LOOP FOOTER) */}
          <div className="relative z-10 mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Real-Time Continuous Production Data Stream</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-semibold text-lnt-blue">
              <RefreshCw size={12} className="text-lnt-blue animate-spin" style={{ animationDuration: '8s' }} />
              <span>Step 5 Feedback Feeds Back Into Step 1 Planning</span>
            </div>

            <div className="flex items-center gap-1.5 font-medium text-slate-600">
              <CheckCircle2 size={13} className="text-sky-600" />
              <span>Connected Manufacturing System</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
