import React, { useEffect } from 'react'
import { ArrowLeft, ChevronRight, Home } from 'lucide-react'
import AISuiteIntroduce from './AISuiteIntroduce'
import AISuiteCapabilities from './AISuiteCapabilities'

interface AISuitePageProps {
  onBack?: () => void
}

export default function AISuitePage({ onBack }: AISuitePageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation: Khẳng định rõ cấu trúc trang con của Industry */}
      <div className="pt-20 sm:pt-24 pb-3.5 bg-slate-50/90 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 flex-wrap">
            <a href="#" className="hover:text-lnt-blue flex items-center gap-1 transition-colors">
              <Home size={13} />
              <span>Home</span>
            </a>
            <ChevronRight size={13} className="text-slate-400" />
            <a href="#industry" className="hover:text-lnt-blue transition-colors">
              Industry Solutions
            </a>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-lnt-blue font-bold">FXPRO AI Suite</span>
          </nav>

          <a
            href="#industry"
            onClick={(e) => {
              if (onBack) {
                e.preventDefault()
                onBack()
              }
            }}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-lnt-blue transition-colors px-3 py-1.5 rounded-full hover:bg-white border border-transparent hover:border-slate-200 cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to Industry</span>
          </a>
        </div>
      </div>

      {/* PHẦN 1: INTRODUCE (Hero toàn cảnh tràn trang) */}
      <AISuiteIntroduce />

      {/* PHẦN 2: CAPABILITIES (Nội dung cốt lõi: Order Automation & Tech Pack to BOM) */}
      <AISuiteCapabilities />

      {/* CÁC PHẦN TIẾP THEO SẼ ĐƯỢC PHÁT TRIỂN TIẾP:
          - PHẦN 3: Workflow (Luồng vận hành AI trên chuyền may)
          - PHẦN 4: CTA & Đăng ký tư vấn
      */}
    </div>
  )
}
