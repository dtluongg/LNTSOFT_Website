import React, { useState, useEffect } from 'react'
import {
  ChevronRight,
  X,
  CheckCircle2,
  ExternalLink,
  Layers,
} from 'lucide-react'
import { apparelCapabilities, type ApparelCapability } from './apparelCapabilitiesData'

// URL hình ảnh chất lượng cao đại diện cho từng module may mặc / MES
const CAPABILITY_IMAGES: Record<string, string> = {
  '01': 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80', // Textile materials & patterns
  '02': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80', // Factory production line execution
  '03': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80', // Technical pre-production sampling
  '04': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', // Automated fabric roll warehouse
  '05': 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80', // Precision cutting room & markers
  '06': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80', // Industrial quality inspection QC
  '07': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80', // Garment logistics & packaging
  '08': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', // Executive supply chain dashboards
}

export default function ExploreKeyCapabilities() {
  const [activeModalItem, setActiveModalItem] = useState<ApparelCapability | null>(null)

  // Đóng modal khi nhấn phím ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Khóa cuộn trang khi modal đang mở
  useEffect(() => {
    if (activeModalItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeModalItem])

  return (
    <div>
      
      {/* Header phần: Chuẩn hóa theo Design System (text-title, font-Inter) */}
      <div className="pb-6 border-b border-slate-200/80">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-50 text-lnt-blue">
            <Layers size={14} />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
            FXPRO Functional Architecture
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-title tracking-tight leading-snug">
          Core Capabilities
        </h3>

        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed font-normal">
          Explore the integrated functional capabilities of the FXPRO Apparel Product Suite, designed to streamline complex manufacturing operations, optimize resource utilization, enhance operational visibility, and support sustainable business growth.
        </p>
      </div>

      {/* =========================================================================
          LƯỚI 8 Ô CỐ ĐỊNH CHIỀU CAO (KHÔNG ĐẨY TRANG, KHÔNG GIẬT LAG)
          - Ban đầu: Chỉ thấy Tiêu đề + Dòng Tagline
          - Khi Hover: Lớp phủ trượt ngang sang (Slide-in Overlay) hiện Description + Feature Titles
          - Khi Click: Mở Modal chi tiết
      ========================================================================= */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {apparelCapabilities.map((item) => {
          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveModalItem(item)}
              className="group relative h-[255px] rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-2xs hover:shadow-lg hover:border-lnt-blue/60 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 group-hover:bg-lnt-blue transition-colors duration-300" />

              {/* ===================================================================
                  MẶT TRƯỚC (BAN ĐẦU): CHỈ HIỂN THỊ TIÊU ĐỀ + TAGLINE
              =================================================================== */}
              <div className="h-full flex flex-col justify-between select-none">
                <div>
                  {/* Tiêu đề chính: Dùng text-lnt-navy chuyển text-lnt-blue khi hover */}
                  <h4 className="text-base sm:text-[16.5px] font-bold text-lnt-navy group-hover:text-lnt-blue transition-colors tracking-tight leading-snug line-clamp-2">
                    {item.title}
                  </h4>

                  {/* Dòng nội dung đầu (Tagline) */}
                  <p className="text-xs sm:text-[13px] font-normal text-slate-600 mt-2.5 leading-relaxed line-clamp-4">
                    {item.tagline}
                  </p>
                </div>

                {/* Footer chân ô ban đầu */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-lnt-blue transition-colors">
                  <span>Explore features</span>
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>

              {/* ===================================================================
                  LỚP PHỦ KÉO SANG KHI HOVER (SLIDE-IN OVERLAY - KHÔNG ĐẨY TRANG)
              =================================================================== */}
              <div className="absolute inset-0 bg-white p-5 flex flex-col justify-between translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-10 border border-lnt-blue/50 rounded-2xl shadow-xl">
                
                {/* Header lớp phủ */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-sky-50 text-lnt-blue border border-sky-100">
                      • OVERVIEW
                    </span>
                    <span className="text-[11px] font-bold text-lnt-blue">
                      Click for full modal ↗
                    </span>
                  </div>

                  {/* Description ngắn gọn */}
                  <p className="text-[11.5px] sm:text-xs text-slate-600 leading-relaxed line-clamp-3 mb-2.5 font-normal">
                    {item.descriptions[0]}
                  </p>

                  {/* Danh sách Title của Features */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Capabilities:
                    </div>
                    {item.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-800 font-semibold leading-tight">
                        <span className="text-lnt-blue">•</span>
                        <span className="line-clamp-1">{feat.title}</span>
                      </div>
                    ))}
                    {item.features.length > 3 && (
                      <div className="text-[10.5px] font-bold text-lnt-blue pl-2">
                        +{item.features.length - 3} more capabilities...
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer lớp phủ */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-lnt-blue">
                  <span>Click to view full detail</span>
                  <ChevronRight size={15} />
                </div>

              </div>

            </div>
          )
        })}
      </div>

      {/* =========================================================================
          EXECUTIVE MODAL POPUP (CHỈ MỞ KHI CLICK VÀO Ô)
      ========================================================================= */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          {/* Khung Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-scaleUp"
          >
            {/* Modal Header */}
            <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-200 bg-white sticky top-0 z-10 flex items-start justify-between gap-4">
              <div className="min-w-0 pr-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-lnt-navy text-white text-[11px] font-bold font-mono mb-1.5">
                  {activeModalItem.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-title tracking-tight leading-snug">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-lnt-blue mt-1">
                  {activeModalItem.tagline}
                </p>
              </div>

              {/* Nút tắt X */}
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="shrink-0 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                title="Close modal (Esc)"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar font-sans text-slate-700">
              
              {/* Toàn bộ các đoạn văn bản mô tả chi tiết */}
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-slate-700 border-b border-slate-100 pb-6">
                {activeModalItem.descriptions.map((desc, idx) => (
                  <p key={idx} className="text-justify sm:text-left">
                    {desc}
                  </p>
                ))}
              </div>

              {/* Danh sách toàn bộ Key Features & Capabilities */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-lnt-navy mb-4">
                  Key Features & Capabilities ({activeModalItem.features.length})
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalItem.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-lnt-blue/40 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-lnt-blue shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-title leading-snug">
                            {feat.title}
                          </div>
                          {feat.description && (
                            <div className="text-xs font-normal text-slate-600 mt-1 leading-relaxed">
                              {feat.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* HÌNH ẢNH MINH HỌA TRỰC TIẾP */}
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100">
                <img
                  src={
                    activeModalItem.image ||
                    CAPABILITY_IMAGES[activeModalItem.number] ||
                    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80'
                  }
                  alt={activeModalItem.title}
                  className="w-full h-auto max-h-[380px] object-cover"
                />
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 sm:px-8 sm:py-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[11px] font-mono">Esc</kbd> or click outside to close
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-300 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveModalItem(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-title hover:bg-black text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer"
                >
                  <span>Request Full Specification</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
