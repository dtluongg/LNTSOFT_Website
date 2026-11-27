import React from 'react'
import { ArrowLeft, ChevronRight, Home, Sparkles, CalendarRange, Factory, BarChart3, FileText } from 'lucide-react'

export type ApparelSuiteId = 'ai-suite' | 'smart-planner' | 'smart-factory' | 'ai-insight' | 'worknote'

export interface ApparelSuiteNavProps {
  currentSuite: ApparelSuiteId
  onBack?: () => void
  onNavigate?: (page: any, targetId?: string) => void
}

export default function ApparelSuiteNav({ currentSuite, onBack, onNavigate }: ApparelSuiteNavProps) {
  // 5 Phân hệ công nghệ cốt lõi của Apparel ERP & MES Solution
  const suiteItems = [
    {
      id: 'ai-suite' as ApparelSuiteId,
      name: 'AI SUITE',
      slug: '#industry/ai-suite',
      icon: Sparkles,
      available: true,
    },
    {
      id: 'smart-planner' as ApparelSuiteId,
      name: 'SMART PLANNER',
      slug: '#industry/smart-planner',
      icon: CalendarRange,
      available: true,
    },
    {
      id: 'smart-factory' as ApparelSuiteId,
      name: 'SMART FACTORY',
      slug: '#industry/smart-factory',
      icon: Factory,
      available: true,
    },
    {
      id: 'ai-insight' as ApparelSuiteId,
      name: 'AI INSIGHT',
      slug: '#industry/ai-insight',
      icon: BarChart3,
      available: true,
    },
    {
      id: 'worknote' as ApparelSuiteId,
      name: 'WORKNOTE',
      slug: '#industry/worknote',
      icon: FileText,
      available: true,
    },
  ]

  const handleSelectSuite = (suite: typeof suiteItems[0]) => {
    if (suite.available) {
      if (onNavigate) {
        onNavigate(suite.id)
      }
      window.location.hash = suite.slug.replace(/^#/, '')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.dispatchEvent(new Event('hashchange'))
    } else {
      // Nếu là phân hệ đang chuẩn bị ra mắt, chuyển về mục Apparel với thông báo nhẹ
      if (onNavigate) {
        onNavigate('industry', 'apparel')
      }
      window.location.hash = 'industry/apparel'
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.dispatchEvent(new Event('hashchange'))
    }
  }

  return (
    <div className="pt-20 sm:pt-24 pb-3 sm:pb-3.5 bg-slate-50/95 border-b border-slate-200/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =====================================================================
            HÀNG 1: BREADCRUMB CHUẨN ĐỊNH DANH + NÚT BACK TO INDUSTRY
            Mặc định: Home > Industry Solutions > Apparel ERP & MES Solution
        ===================================================================== */}
        <div className="flex items-center justify-between gap-4 pb-2.5 border-b border-slate-200/70">
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-medium text-slate-500 flex-wrap">
            <a href="#" className="hover:text-lnt-blue flex items-center gap-1 transition-colors">
              <Home size={13} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <a href="#industry" className="hover:text-lnt-blue transition-colors">
              Industry Solutions
            </a>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <a
              href="#industry/apparel"
              onClick={(e) => {
                if (onBack) {
                  e.preventDefault()
                  onBack()
                }
              }}
              className="text-slate-800 font-bold hover:text-lnt-blue transition-colors"
            >
              Apparel ERP & MES Solution
            </a>
          </nav>

          <a
            href="#industry"
            onClick={(e) => {
              if (onBack) {
                e.preventDefault()
                onBack()
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-lnt-blue transition-colors px-3 py-1.5 rounded-full hover:bg-white border border-transparent hover:border-slate-200 cursor-pointer shrink-0"
          >
            <ArrowLeft size={13} />
            <span className="hidden sm:inline">Back to Industry</span>
          </a>
        </div>

        {/* =====================================================================
            HÀNG 2: DẢI 5 NÚT PILLS CHUYỂN TRANG TỨC THÌ (SUITE NAVIGATOR)
            - 1 chạm chuyển ngay lập tức giữa 5 trang
            - Tự động cuộn ngang mượt mà trên Mobile
        ===================================================================== */}
        <div className="pt-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold hidden md:inline shrink-0 mr-1">
            Suite Modules:
          </span>

          {suiteItems.map((suite) => {
            const isActive = suite.id === currentSuite
            const Icon = suite.icon

            return (
              <a
                key={suite.id}
                href={suite.slug}
                onClick={(e) => {
                  e.preventDefault()
                  handleSelectSuite(suite)
                }}
                className={
                  isActive
                    ? 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lnt-blue text-white text-xs font-bold shadow-xs tracking-wider shrink-0 uppercase transition-all cursor-default'
                    : 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-sky-50 text-slate-600 hover:text-lnt-blue border border-slate-200/90 hover:border-lnt-blue/40 text-xs font-semibold tracking-wider shrink-0 uppercase transition-all cursor-pointer'
                }
              >
                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)] animate-pulse" />
                ) : (
                  <Icon size={12} className="opacity-70" />
                )}
                <span>{suite.name}</span>
                {!suite.available && (
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-400 font-normal">
                    soon
                  </span>
                )}
              </a>
            )
          })}
        </div>

      </div>
    </div>
  )
}
