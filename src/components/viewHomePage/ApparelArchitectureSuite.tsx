import React, { useState } from 'react'
import {
  Briefcase,
  Calculator,
  Scissors,
  CalendarCheck,
  LayoutGrid,
  Clock,
  Sparkles,
  Boxes,
  Database,
  Warehouse,
  GitBranch,
  Crosshair,
  Factory,
  ShieldCheck,
  Droplets,
  Shirt,
  PackageCheck,
  Package,
  Globe,
  FileText,
  Landmark,
  BarChart3,
} from 'lucide-react'

export interface ApparelModule {
  id: string
  number: number
  lines: string[]
  fullName: string
  url: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

export const apparelModules: ApparelModule[] = [
  { id: 'order-management', number: 1, lines: ['ORDER', 'MANAGEMENT'], fullName: 'Order Management', url: '#order-management', icon: Briefcase },
  { id: 'costing', number: 2, lines: ['COSTING'], fullName: 'Product Lifecycle Costing', url: '#costing', icon: Calculator },
  { id: 'sampling', number: 3, lines: ['SAMPLING'], fullName: 'Style Sampling Management (SSM)', url: '#sampling', icon: Scissors },
  { id: 'ppc', number: 4, lines: ['PPC'], fullName: 'Production Planning & Control (PPC)', url: '#ppc', icon: CalendarCheck },
  { id: 'planning-board', number: 5, lines: ['PLANNING', 'BOARD'], fullName: 'Sewing Team Details Planning Board', url: '#planning-board', icon: LayoutGrid },
  { id: 'tna', number: 6, lines: ['TNA'], fullName: 'Time and Action (T&A)', url: '#tna', icon: Clock },
  { id: 'ai-bom', number: 7, lines: ['AI BOM'], fullName: 'AI Bill of Materials', url: '#ai-bom', icon: Sparkles },
  { id: 'material-management', number: 8, lines: ['MATERIAL', 'MANAGEMENT'], fullName: 'Material Management', url: '#material-management', icon: Boxes },
  { id: 'rm-inventory', number: 9, lines: ['RM', 'INVENTORY'], fullName: 'Inventory Management System (IMS)', url: '#rm-inventory', icon: Database },
  { id: 'warehouse', number: 10, lines: ['RM', 'WAREHOUSE'], fullName: 'Warehouse Management System (WMS)', url: '#warehouse', icon: Warehouse },
  { id: 'mrp', number: 11, lines: ['MRP'], fullName: 'Material Requirements Planning (MRP)', url: '#mrp', icon: GitBranch },
  { id: 'cut-plan', number: 12, lines: ['CUT PLAN'], fullName: 'Cut Plan', url: '#cut-plan', icon: Crosshair },
  { id: 'mes', number: 13, lines: ['MES'], fullName: 'Manufacturing Execution System (MES)', url: '#mes', icon: Factory },
  { id: 'quality', number: 14, lines: ['QUALITY'], fullName: 'Quality Management System', url: '#quality', icon: ShieldCheck },
  { id: 'washing-laundry', number: 15, lines: ['WASHING /', 'LAUNDRY'], fullName: 'Washing & Industrial Laundry', url: '#washing-laundry', icon: Droplets },
  { id: 'finishing', number: 16, lines: ['FINISHING'], fullName: 'Garment Finishing', url: '#finishing', icon: Shirt },
  { id: 'fg-iwms', number: 17, lines: ['FG_IWMS'], fullName: 'Finished Goods Inventory & WMS', url: '#fg-iwms', icon: PackageCheck },
  { id: 'pick-to-pack', number: 18, lines: ['PICK TO', 'PACK'], fullName: 'Pick to Pack Management', url: '#pick-to-pack', icon: Package },
  { id: 'sales-distribution', number: 19, lines: ['SALES &', 'DISTRIBUTION'], fullName: 'Sales & Distribution Management', url: '#sales-distribution', icon: Globe },
  { id: 'shipping-invoicing', number: 20, lines: ['SHIPPING &', 'INVOICING'], fullName: 'Shipping & Invoicing Management (SIM)', url: '#shipping-invoicing', icon: FileText },
  { id: 'management-accounting', number: 21, lines: ['MANAGEMENT', 'ACCOUNTING'], fullName: 'Management Accounting', url: '#management-accounting', icon: Landmark },
  { id: 'analytics-bi', number: 22, lines: ['ANALYTICS,', 'BI & REPORTS'], fullName: 'Analytics, Reporting and BI', url: '#analytics-bi', icon: BarChart3 },
]

export default function ApparelArchitectureSuite() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const total = apparelModules.length

  // Geometry for 4 Flat Oval Shapes (Wider horizontal diameter as requested)
  const svgW = 1400
  const svgH = 370
  const cx = 700
  const rx = 670
  const ry = 74

  // 4 Oval Centers (Offset vertically by 38px each to reveal the crescent text)
  const y1 = 92 // Oval 1 (Top Blue Plate)
  const y2 = 130 // Oval 2 (Sky Blue Plate)
  const y3 = 168 // Oval 3 (Navy Blue Plate)
  const y4 = 206 // Oval 4 (Bottom Charcoal Plate)

  // 22 Modules along the top arc of Oval 1 - Spaced out more horizontally
  const getCoordinates = (index: number) => {
    const leftStart = 50
    const leftEnd = 1390
    const left = leftStart + (index / (total - 1)) * (leftEnd - leftStart)
    const mid = 720
    const u = (left - mid) / 670
    // Curve along the upper rim of Oval 1
    const top = 152 - ry * Math.sqrt(Math.max(0, 1 - 0.95 * u * u)) - 24
    return { left, top }
  }

  return (
    <div className="w-full pt-8 pb-6 overflow-x-auto flex justify-center">
      <div className="relative w-[1440px] h-[440px] shrink-0 overflow-visible">
        {/* =========================================================
            4 TẤM OVAL ĐƠN THUẦN XẾP CHỒNG LÊN NHAU (CHUẨN NHƯ TRONG WORD)
        ========================================================= */}
        <div className="absolute top-[60px] left-[20px] w-[1400px] h-[370px] z-0 pointer-events-none select-none">
          <svg
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="w-full h-full select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Bóng đổ nhẹ tự nhiên giữa các tấm oval */}
              <filter id="ovalDropShadow" x="-5%" y="-5%" width="110%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#040d18" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* =====================================================
                TẤM OVAL 4 (ĐÁY): MÀU THAN CHÌ (#232532)
            ===================================================== */}
            <g id="oval-4">
              <ellipse cx={cx} cy={y4} rx={rx} ry={ry} fill="#232532" />
              <text
                x={cx}
                y="265"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="12"
                fontWeight="700"
                letterSpacing="2.5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                CLOUD – BASED PLATFORM
              </text>
            </g>

            {/* =====================================================
                TẤM OVAL 3: MÀU XANH NAVY ĐẬM (#185688)
            ===================================================== */}
            <g id="oval-3" filter="url(#ovalDropShadow)">
              <ellipse cx={cx} cy={y3} rx={rx} ry={ry} fill="#185688" />
              <text
                x={cx}
                y="227"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11.5"
                fontWeight="700"
                letterSpacing="2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                USER-FRIENDLY API
              </text>
            </g>

            {/* =====================================================
                TẤM OVAL 2: MÀU XANH BIỂN (#1c7cb8)
            ===================================================== */}
            <g id="oval-2" filter="url(#ovalDropShadow)">
              <ellipse cx={cx} cy={y2} rx={rx} ry={ry} fill="#1c7cb8" />
              <text
                x={cx}
                y="189"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11.5"
                fontWeight="700"
                letterSpacing="1.8"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                CUSTOMER -SPECIFIC NEXT-GENERATION FRAMEWORK
              </text>
            </g>

            {/* =====================================================
                TẤM OVAL 1 (TRÊN CÙNG): MÀU XANH DƯƠNG (#0d6aa8)
            ===================================================== */}
            <g id="oval-1" filter="url(#ovalDropShadow)">
              <ellipse cx={cx} cy={y1} rx={rx} ry={ry} fill="#0d6aa8" />

              {/* Logo & Tiêu đề trung tâm như bản vẽ Word */}
              <g transform={`translate(${cx - 140}, ${y1 + 16})`}>
                <rect x="0" y="0" width="46" height="42" rx="8" fill="#15194f" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                <text x="23" y="29" textAnchor="middle" fill="#ffffff" fontSize="23" fontWeight="900" style={{ fontFamily: 'var(--font-heading)' }}>
                  FX
                </text>
                <text x="58" y="29" fill="#ffffff" fontSize="26" fontWeight="800" letterSpacing="-0.3" style={{ fontFamily: 'var(--font-heading)' }}>
                  PRO <tspan fontWeight="400" fill="#e2e8f0">Product Suite</tspan>
                </text>
                <text x="58" y="47" fill="#ffffff" opacity="0.9" fontSize="12.5" fontStyle="italic" fontWeight="500" style={{ fontFamily: 'var(--font-sans)' }}>
                  Simplifying your operation
                </text>
              </g>
            </g>
          </svg>
        </div>

        {/* =========================================================
            22 MODULES: NẰM TRÊN BỀ MẶT TẤM OVAL 1 (ĐÚNG NHƯ TRONG WORD)
        ========================================================= */}
        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none overflow-visible">
          {apparelModules.map((item, idx) => {
            const { left, top } = getCoordinates(idx)
            const Icon = item.icon
            const isHovered = hoveredId === item.id

            return (
              <div
                key={item.id}
                className="absolute pointer-events-auto transition-transform duration-300 ease-out origin-bottom"
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
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group flex flex-col items-center cursor-pointer select-none transition-all duration-300 rounded-xl ${
                    isHovered
                      ? 'bg-[#15194f]/95 backdrop-blur-md px-2 py-2 border border-[#fad400]/60 shadow-2xl shadow-black/70'
                      : 'p-1'
                  }`}
                >
                  {/* Icon dạng vẽ nét như bản vẽ Word, zoom to & xoay 360 khi hover */}
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

                  {/* Chữ chú thích: Mặc định màu trắng, hover có nền tối rõ nét, chuyển sang màu vàng (#fad400) */}
                  <div className="mt-1 flex flex-col items-center justify-center text-center">
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
