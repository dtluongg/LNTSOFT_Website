import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import { apparelModulesData, type ApparelModuleDetail } from './apparelModulesData'

export type ApparelModule = ApparelModuleDetail
export const apparelModules = apparelModulesData

// ─── Animation variants ─────────────────────────────────────────────────────

/** Each oval layer slides up from below and fades in */
const layerVariants = {
  hidden: { opacity: 0, y: 60, scaleX: 0.82 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scaleX: 1,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

/** Scan-line that sweeps across an ellipse once */
const scanVariants = {
  hidden: { x: -720, opacity: 0 },
  visible: (delay: number) => ({
    x: 720,
    opacity: [0, 0.55, 0.55, 0],
    transition: { duration: 1.1, delay, ease: 'easeInOut' },
  }),
}

// ─── Floating scan-line overlay component (entrance — fires once) ─────────────
function ScanLine({ ovalY, ry, delay }: { ovalY: number; ry: number; delay: number }) {
  return (
    <motion.rect
      x={0}
      y={ovalY - ry + 4}
      width={60}
      height={ry * 2 - 8}
      rx={4}
      fill="url(#scanGrad)"
      custom={delay}
      variants={scanVariants}
      initial="hidden"
      animate="visible"
    />
  )
}

// ─── Hover scan-line: repeats continuously while oval is hovered ──────────────
function HoverScanLine({ ovalY, ry, active }: { ovalY: number; ry: number; active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.rect
          key="hover-beam"
          x={0}
          y={ovalY - ry + 4}
          width={60}
          height={ry * 2 - 8}
          rx={4}
          fill="url(#scanGradHover)"
          initial={{ x: -720, opacity: 0 }}
          animate={{ x: 720, opacity: [0, 0.8, 0.8, 0] }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.25 }}
        />
      )}
    </AnimatePresence>
  )
}

// ─── Hover rim glow: bright edge outline on the active oval ──────────────────
function HoverRimGlow({
  cx, cy, rx, ry, active,
}: {
  cx: number; cy: number; rx: number; ry: number; active: boolean
}) {
  return (
    <AnimatePresence>
      {active && (
        <motion.ellipse
          key="rim-glow"
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          fill="none"
          stroke="rgba(100,220,255,0.55)"
          strokeWidth={3}
          initial={{ opacity: 0, strokeWidth: 1 }}
          animate={{ opacity: [0.5, 1, 0.5], strokeWidth: [2, 4, 2] }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity }}
        />
      )}
    </AnimatePresence>
  )
}

// ─── Pulsing ring on an oval ─────────────────────────────────────────────────
function PulseRing({ cx, cy, rx, ry }: { cx: number; cy: number; rx: number; ry: number }) {
  return (
    <motion.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill="none"
      stroke="rgba(100,200,255,0.35)"
      strokeWidth={2}
      initial={{ opacity: 0.6, scaleX: 1, scaleY: 1 }}
      animate={{ opacity: 0, scaleX: 1.04, scaleY: 1.35 }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.8 }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  )
}

// ─── ERP Screenshot / Fallback Mockup UI (Bản lớn, hiển thị chi tiết cao) ────
function ModulePreviewMockup({ module }: { module: ApparelModuleDetail }) {
  if (module.image) {
    return (
      <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-900 group">
        <img
          src={module.image}
          alt={module.title || module.fullName}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur text-xs text-white font-mono flex items-center gap-2 shadow">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Hệ thống thực tế • Live System View</span>
        </div>
      </div>
    )
  }

  // Giao diện mô phỏng ERP/MES kích thước lớn, chuẩn như trong hình mẫu
  return (
    <div className="relative w-full h-full min-h-[330px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md flex flex-col text-[11px] select-none">
      {/* Top window bar */}
      <div className="bg-[#15194f] text-white px-3.5 py-2 flex items-center justify-between border-b border-slate-300 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="font-bold text-xs text-white tracking-wide ml-1.5 truncate max-w-[300px]">
            LNT FX-PRO Enterprise Suite • {module.fullName}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-300 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Live Sync
          </span>
          <span className="text-[10px] bg-[#087bc1] text-white px-2 py-0.5 rounded font-mono font-bold tracking-wider shrink-0 shadow-xs">
            v4.8 ERP
          </span>
        </div>
      </div>

      {/* Meta header ribbon */}
      <div className="bg-slate-50 px-3.5 py-2 border-b border-slate-200 grid grid-cols-4 gap-2 text-[10.5px] text-slate-600 shrink-0">
        <div><span className="text-slate-400">Order Ref:</span> <b className="text-slate-900 font-mono">BL00012054</b></div>
        <div><span className="text-slate-400">Buyer:</span> <b className="text-slate-900">H&M Global Fashion</b></div>
        <div><span className="text-slate-400">Style:</span> <b className="text-slate-900 truncate">Contours Slim</b></div>
        <div><span className="text-slate-400">Lead Time:</span> <b className="text-emerald-700 font-bold">On Schedule</b></div>
      </div>

      {/* Interactive table grid */}
      <div className="flex-1 overflow-hidden p-3 bg-white space-y-2 flex flex-col justify-between">
        <div>
          <div className="grid grid-cols-12 bg-slate-100 rounded-md px-2.5 py-1.5 text-[10px] font-extrabold text-slate-700 uppercase tracking-wider">
            <span className="col-span-3">MO #</span>
            <span className="col-span-3">Color / Style</span>
            <span className="col-span-2 text-right">Order Qty</span>
            <span className="col-span-2 text-right">Target PCD</span>
            <span className="col-span-2 text-center">Status</span>
          </div>

          {[
            { mo: 'MO00002856', style: 'C24/Black Slim Fit', qty: '2,500', pcd: '15/06', status: 'Released', color: 'bg-emerald-100 text-emerald-800 border border-emerald-300' },
            { mo: 'MO00003662', style: 'D18/Navy Polo Shirt', qty: '3,000', pcd: '21/06', status: 'In Process', color: 'bg-sky-100 text-sky-800 border border-sky-300' },
            { mo: 'MO00005028', style: 'Solid White Oxford', qty: '1,500', pcd: '28/06', status: 'Scheduled', color: 'bg-amber-100 text-amber-800 border border-amber-300' },
            { mo: 'MO00006190', style: 'Khaki Chino Pants', qty: '4,200', pcd: '05/07', status: 'Pre-Prod', color: 'bg-purple-100 text-purple-800 border border-purple-300' },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-12 px-2.5 py-1.5 text-[10.5px] text-slate-700 border-b border-slate-100 items-center hover:bg-slate-50 transition-colors">
              <span className="col-span-3 font-mono font-bold text-[#087bc1]">{row.mo}</span>
              <span className="col-span-3 truncate font-medium text-slate-800">{row.style}</span>
              <span className="col-span-2 text-right font-mono font-bold text-slate-900">{row.qty}</span>
              <span className="col-span-2 text-right text-slate-500 font-mono">{row.pcd}</span>
              <span className="col-span-2 text-center">
                <span className={`inline-block px-2 py-0.5 text-[9.5px] rounded-md font-bold ${row.color}`}>
                  {row.status}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Schedule & Gantt timeline bar (giống ảnh mẫu người dùng đã cung cấp) */}
        <div className="pt-2 border-t border-slate-100 px-1">
          <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium mb-1">
            <span>Production Scheduling & Capacity Allocation</span>
            <span className="text-emerald-700 font-bold">Line Balance: 98.4%</span>
          </div>
          <div className="h-5 bg-slate-100 rounded-md flex overflow-hidden gap-1 p-0.5 border border-slate-200">
            <div className="bg-[#087bc1] h-full rounded-xs w-1/5 flex items-center justify-center text-[9px] text-white font-extrabold tracking-wider">CUTTING</div>
            <div className="bg-amber-500 h-full rounded-xs w-2/5 flex items-center justify-center text-[9px] text-white font-extrabold tracking-wider">SEWING</div>
            <div className="bg-emerald-600 h-full rounded-xs w-1/5 flex items-center justify-center text-[9px] text-white font-extrabold tracking-wider">QC INSPECT</div>
            <div className="bg-purple-600 h-full rounded-xs w-1/5 flex items-center justify-center text-[9px] text-white font-extrabold tracking-wider">PACKING</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ApparelArchitectureSuite() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [hoveredOval, setHoveredOval] = useState<string | null>(null)
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })
  const svgControls = useAnimation()
  const total = apparelModules.length

  // Look up currently active module
  const activeModule = apparelModules.find(m => m.id === hoveredId)

  // Hover timer helpers to keep the HUD card open when moving mouse into it
  const handleMouseEnterModule = (id: string) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
      leaveTimerRef.current = null
    }
    setHoveredId(id)
  }

  const handleMouseLeaveModule = () => {
    leaveTimerRef.current = setTimeout(() => {
      setHoveredId(null)
    }, 240)
  }

  const handleMouseEnterCard = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
      leaveTimerRef.current = null
    }
  }

  const handleMouseLeaveCard = () => {
    leaveTimerRef.current = setTimeout(() => {
      setHoveredId(null)
    }, 180)
  }

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current)
    }
  }, [])

  // Geometry for 4 Flat Oval Shapes
  const svgW = 1400
  const svgH = 370
  const cx = 700
  const rx = 670
  const ry = 74

  // 4 Oval Centers
  const y1 = 92 // Oval 1 (Top Blue Plate)
  const y2 = 130 // Oval 2 (Sky Blue Plate)
  const y3 = 168 // Oval 3 (Navy Blue Plate)
  const y4 = 206 // Oval 4 (Bottom Charcoal Plate)

  // 22 Modules along the top arc of Oval 1
  const getCoordinates = (index: number) => {
    const leftStart = 50
    const leftEnd = 1390
    const left = leftStart + (index / (total - 1)) * (leftEnd - leftStart)
    const mid = 720
    const u = (left - mid) / 670
    const top = 152 - ry * Math.sqrt(Math.max(0, 1 - 0.95 * u * u)) - 42
    return { left, top }
  }

  // Trigger oval layer animations when section enters the viewport
  useEffect(() => {
    if (isInView) {
      svgControls.start('visible')
    }
  }, [isInView, svgControls])

  return (
    <div ref={containerRef} className="w-full pt-1 pb-4 overflow-visible flex justify-center relative">
      <div className="relative w-[1400px] h-[370px] shrink-0 overflow-visible">

        {/* =========================================================
            4 TẤM OVAL — animated layers
        ========================================================= */}
        <div className="absolute top-[60px] left-[20px] w-[1400px] h-[370px] z-0 select-none">
          <svg
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="w-full h-full select-none"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            style={{ pointerEvents: 'none' }}
          >
            <defs>
              {/* Drop shadow */}
              <filter id="ovalDropShadow" x="-5%" y="-5%" width="110%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#040d18" floodOpacity="0.4" />
              </filter>

              {/* Glow filter for scan highlight */}
              <filter id="scanGlow" x="-20%" y="-80%" width="140%" height="260%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>

              {/* Gradient for scan line beam */}
              <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64c8ff" stopOpacity="0" />
                <stop offset="40%" stopColor="#64c8ff" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#64c8ff" stopOpacity="0" />
              </linearGradient>

              {/* Gradient for hover scan beam */}
              <linearGradient id="scanGradHover" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a0e8ff" stopOpacity="0" />
                <stop offset="35%" stopColor="#7dd8ff" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="75%" stopColor="#fad400" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#fad400" stopOpacity="0" />
              </linearGradient>

              {/* Edge highlight gradient on top of oval 1 */}
              <radialGradient id="rimGlow" cx="50%" cy="0%" r="50%">
                <stop offset="0%" stopColor="#9ee8ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#9ee8ff" stopOpacity="0" />
              </radialGradient>

              {/* Clip paths so scan stays inside each oval */}
              <clipPath id="clip4"><ellipse cx={cx} cy={y4} rx={rx} ry={ry} /></clipPath>
              <clipPath id="clip3"><ellipse cx={cx} cy={y3} rx={rx} ry={ry} /></clipPath>
              <clipPath id="clip2"><ellipse cx={cx} cy={y2} rx={rx} ry={ry} /></clipPath>
              <clipPath id="clip1"><ellipse cx={cx} cy={y1} rx={rx} ry={ry} /></clipPath>
            </defs>

            {/* ── OVAL 4 — Charcoal ── */}
            <motion.g
              id="oval-4"
              custom={0}
              variants={layerVariants}
              initial="hidden"
              animate={svgControls}
              style={{ transformOrigin: `${cx}px ${y4}px`, pointerEvents: 'all', cursor: 'default' }}
              onMouseEnter={() => setHoveredOval('oval-4')}
              onMouseLeave={() => setHoveredOval(null)}
            >
              <ellipse cx={cx} cy={y4} rx={rx} ry={ry} fill="#232532" />
              <text x={cx} y="265" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700" letterSpacing="2.5" style={{ fontFamily: 'var(--font-heading)' }}>
                CLOUD – BASED PLATFORM
              </text>
              <g clipPath="url(#clip4)" filter="url(#scanGlow)">
                <ScanLine ovalY={y4} ry={ry} delay={0.15} />
              </g>
              <g clipPath="url(#clip4)" filter="url(#scanGlow)">
                <HoverScanLine ovalY={y4} ry={ry} active={hoveredOval === 'oval-4'} />
              </g>
              <HoverRimGlow cx={cx} cy={y4} rx={rx} ry={ry} active={hoveredOval === 'oval-4'} />
            </motion.g>

            {/* ── OVAL 3 — Navy ── */}
            <motion.g
              id="oval-3"
              filter="url(#ovalDropShadow)"
              custom={0.18}
              variants={layerVariants}
              initial="hidden"
              animate={svgControls}
              style={{ transformOrigin: `${cx}px ${y3}px`, pointerEvents: 'all', cursor: 'default' }}
              onMouseEnter={() => setHoveredOval('oval-3')}
              onMouseLeave={() => setHoveredOval(null)}
            >
              <ellipse cx={cx} cy={y3} rx={rx} ry={ry} fill="#185688" />
              <text x={cx} y="227" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="700" letterSpacing="2" style={{ fontFamily: 'var(--font-heading)' }}>
                USER-FRIENDLY API
              </text>
              <g clipPath="url(#clip3)" filter="url(#scanGlow)">
                <ScanLine ovalY={y3} ry={ry} delay={0.38} />
              </g>
              <g clipPath="url(#clip3)" filter="url(#scanGlow)">
                <HoverScanLine ovalY={y3} ry={ry} active={hoveredOval === 'oval-3'} />
              </g>
              <HoverRimGlow cx={cx} cy={y3} rx={rx} ry={ry} active={hoveredOval === 'oval-3'} />
            </motion.g>

            {/* ── OVAL 2 — Sky Blue ── */}
            <motion.g
              id="oval-2"
              filter="url(#ovalDropShadow)"
              custom={0.36}
              variants={layerVariants}
              initial="hidden"
              animate={svgControls}
              style={{ transformOrigin: `${cx}px ${y2}px`, pointerEvents: 'all', cursor: 'default' }}
              onMouseEnter={() => setHoveredOval('oval-2')}
              onMouseLeave={() => setHoveredOval(null)}
            >
              <ellipse cx={cx} cy={y2} rx={rx} ry={ry} fill="#1c7cb8" />
              <text x={cx} y="189" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="700" letterSpacing="1.8" style={{ fontFamily: 'var(--font-heading)' }}>
                CUSTOMER -SPECIFIC NEXT-GENERATION FRAMEWORK
              </text>
              <g clipPath="url(#clip2)" filter="url(#scanGlow)">
                <ScanLine ovalY={y2} ry={ry} delay={0.6} />
              </g>
              <g clipPath="url(#clip2)" filter="url(#scanGlow)">
                <HoverScanLine ovalY={y2} ry={ry} active={hoveredOval === 'oval-2'} />
              </g>
              <HoverRimGlow cx={cx} cy={y2} rx={rx} ry={ry} active={hoveredOval === 'oval-2'} />
            </motion.g>

            {/* ── OVAL 1 — Top Blue (with rim glow + pulse rings) ── */}
            <motion.g
              id="oval-1"
              filter="url(#ovalDropShadow)"
              custom={0.54}
              variants={layerVariants}
              initial="hidden"
              animate={svgControls}
              style={{ transformOrigin: `${cx}px ${y1}px`, pointerEvents: 'all', cursor: 'default' }}
              onMouseEnter={() => setHoveredOval('oval-1')}
              onMouseLeave={() => setHoveredOval(null)}
            >
              <ellipse cx={cx} cy={y1} rx={rx} ry={ry} fill="#0d6aa8" />
              <ellipse cx={cx} cy={y1 - ry * 0.5} rx={rx * 0.85} ry={ry * 0.45} fill="url(#rimGlow)" />

              {/* Default Logo (visible when no module is hovered) */}
              <g transform={`translate(${cx - 140}, ${y1 + 16})`}>
                <rect x="0" y="0" width="46" height="42" rx="8" fill="#15194f" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                <text x="23" y="29" textAnchor="middle" fill="#ffffff" fontSize="23" fontWeight="900" style={{ fontFamily: 'var(--font-heading)' }}>FX</text>
                <text x="58" y="29" fill="#ffffff" fontSize="26" fontWeight="800" letterSpacing="-0.3" style={{ fontFamily: 'var(--font-heading)' }}>
                  PRO <tspan fontWeight="400" fill="#e2e8f0">Product Suite</tspan>
                </text>
                <text x="58" y="47" fill="#ffffff" opacity="0.9" fontSize="12.5" fontStyle="italic" fontWeight="500" style={{ fontFamily: 'var(--font-sans)' }}>
                  Simplifying your operation
                </text>
              </g>

              {/* Entrance scan beam */}
              <g clipPath="url(#clip1)" filter="url(#scanGlow)">
                <ScanLine ovalY={y1} ry={ry} delay={0.82} />
              </g>
              {/* Hover scan beam */}
              <g clipPath="url(#clip1)" filter="url(#scanGlow)">
                <HoverScanLine ovalY={y1} ry={ry} active={hoveredOval === 'oval-1'} />
              </g>
              <HoverRimGlow cx={cx} cy={y1} rx={rx} ry={ry} active={hoveredOval === 'oval-1'} />
            </motion.g>

            {/* Pulsing rings */}
            {isInView && (
              <>
                <PulseRing cx={cx} cy={y1} rx={rx} ry={ry} />
                <PulseRing cx={cx} cy={y2} rx={rx * 0.9} ry={ry * 0.9} />
              </>
            )}
          </svg>
        </div>

        {/* =========================================================
            CENTER COCKPIT / HUD CONSOLE (BẢN TO HẲN, TRÀN ĐÈ XUỐNG DƯỚI)
            Không bị gò bó trong khung oval xanh, hiển thị siêu lớn & rõ ràng
        ========================================================= */}
        <div
          className="absolute top-[108px] left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          style={{ width: '1240px' }}
        >
          <AnimatePresence>
            {activeModule && (
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                onMouseEnter={handleMouseEnterCard}
                onMouseLeave={handleMouseLeaveCard}
                className="pointer-events-auto relative bg-white/98 backdrop-blur-2xl rounded-3xl border-2 border-sky-400/70 shadow-[0_30px_90px_-10px_rgba(4,13,24,0.65),0_15px_35px_-5px_rgba(4,13,24,0.4)] p-6 sm:p-7 overflow-hidden ring-2 ring-sky-300/40"
              >
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#087bc1] via-sky-400 to-[#15194f]" />

                <div className="grid grid-cols-12 gap-7 items-stretch">
                  {/* Cột trái: Hình ảnh UI Screenshot ERP / Fallback Mockup (TO HẲN, 340px) */}
                  <div className="col-span-5 flex flex-col justify-center">
                    <ModulePreviewMockup module={activeModule} />
                  </div>

                  {/* Cột phải: Tiêu đề, Mô tả, và Danh sách tính năng (Checklist) */}
                  <div className="col-span-7 flex flex-col justify-between pl-2">
                    {/* Module Title & Description */}
                    <div>
                      {/* Module Badge */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087bc1]/12 text-[#087bc1] text-xs font-bold uppercase tracking-wider mb-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#087bc1] animate-pulse" />
                        <span>Module #{String(activeModule.number).padStart(2, '0')}</span>
                        <span className="text-slate-300">•</span>
                        <span>{activeModule.fullName}</span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-[27px] font-black text-[#15194f] tracking-tight leading-snug">
                        {activeModule.title || activeModule.fullName}
                      </h3>
                      <div className="h-1.5 w-20 bg-gradient-to-r from-[#087bc1] to-sky-400 rounded-full mt-2 mb-3.5" />

                      {/* Description Paragraph */}
                      <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                        {activeModule.description}
                      </p>
                    </div>

                    {/* Features Section (chuẩn theo layout mẫu) */}
                    <div className="mt-5 pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xs sm:text-[13px] font-bold text-[#15194f] uppercase tracking-wider flex items-center gap-2">
                          <Sparkles size={16} className="text-[#087bc1]" />
                          <span>Core Capabilities & Features</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                          Hỗ trợ Cloud & On-Premise
                        </span>
                      </div>

                      {/* 2-Column Features Checklist (To, chữ đậm, checkmark xanh lá chuẩn) */}
                      <div className="grid grid-cols-2 gap-x-5 gap-y-2.5">
                        {activeModule.features?.slice(0, 6).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Action Bar */}
                      <div className="mt-4 pt-3 flex items-center justify-between">
                        <a
                          href={activeModule.url}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087bc1] hover:bg-[#076da9] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all hover:gap-2.5"
                        >
                          <span>Khám phá phân hệ {activeModule.fullName}</span>
                          <ArrowUpRight size={14} />
                        </a>
                        <span className="text-[11.5px] text-slate-500 font-mono flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          Enterprise Ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =========================================================
            22 MODULES: NẰM TRÊN BỀ MẶT TẤM OVAL 1
        ========================================================= */}
        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none overflow-visible">
          {apparelModules.map((item, idx) => {
            const { left, top } = getCoordinates(idx)
            const Icon = item.icon
            const isHovered = hoveredId === item.id
            const isOtherHovered = hoveredId !== null && !isHovered

            return (
              <div
                key={item.id}
                className={`absolute pointer-events-auto transition-all duration-300 ease-out origin-bottom ${
                  isOtherHovered ? 'opacity-25' : 'opacity-100'
                }`}
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  width: '82px',
                  marginLeft: '-41px',
                  zIndex: isHovered ? 60 : 20,
                  transform: isHovered ? 'scale(1.24) translateY(-10px)' : 'scale(1) translateY(0)',
                }}
              >
                <a
                  href={item.url}
                  title={item.fullName}
                  onMouseEnter={() => handleMouseEnterModule(item.id)}
                  onMouseLeave={handleMouseLeaveModule}
                  className={`group flex flex-col items-center cursor-pointer select-none transition-all duration-300 rounded-xl ${
                    isHovered
                      ? 'bg-[#15194f]/95 backdrop-blur-md px-2 py-2 border border-[#fad400]/60 shadow-2xl shadow-black/70'
                      : 'p-1'
                  }`}
                >
                  {/* Icon dạng vẽ nét, zoom to & xoay 360 khi hover */}
                  <div
                    className="flex items-center justify-center transition-all duration-700"
                    style={{
                      transform: isHovered ? 'rotateY(360deg) scale(1.15)' : 'rotateY(0deg) scale(1)',
                    }}
                  >
                    <Icon
                      size={32}
                      className={`transition-all duration-300 ${
                        isHovered
                          ? 'text-[#fad400] drop-shadow-[0_4px_10px_rgba(250,212,0,0.6)]'
                          : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'
                      }`}
                    />
                  </div>

                  {/* Chữ chú thích */}
                  <div className="mt-3 flex flex-col items-center justify-center text-center">
                    {item.lines.map((line, lIdx) => (
                      <span
                        key={lIdx}
                        className={`font-sans uppercase whitespace-nowrap transition-all duration-300 ${
                          isHovered
                            ? 'text-[#fad400] text-[10px] sm:text-[10.5px] font-bold leading-3.5 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'
                            : 'text-white text-[9px] sm:text-[9.5px] font-semibold leading-3.5 tracking-normal drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]'
                        }`}
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
