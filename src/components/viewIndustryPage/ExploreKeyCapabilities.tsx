import React, { useState, useEffect } from 'react'
import {
  ChevronRight,
  X,
  CheckCircle2,
  ExternalLink,
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
    <div className="mt-12">
      
      {/* Header phần: Sạch sẽ, không còn title nhỏ thừa */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#15194f] tracking-tight font-heading">
            Core Capabilities
          </h3>
          <p className="text-sm sm:text-base font-medium text-slate-500 mt-1 max-w-3xl md:max-w-5xl font-sans">
            Explore the integrated functional capabilities of the FXPRO Apparel Product Suite, designed to streamline complex manufacturing operations, optimize resource utilization, enhance operational visibility, and support sustainable business growth.
          </p>
        </div>

        {/* <div className="text-xs font-semibold text-slate-500 bg-slate-100/90 px-3.5 py-1.5 rounded-full border border-slate-200 shrink-0 self-start sm:self-auto font-sans">
          8 Modules • Hover to reveal • Click for full detail
        </div> */}
      </div>

      {/* =========================================================================
          LƯỚI 8 Ô CỐ ĐỊNH CHIỀU CAO (KHÔNG ĐẨY TRANG, KHÔNG GIẬT LAG)
          - Ban đầu: Chỉ thấy Tiêu đề + Dòng Tagline
          - Khi Hover: Lớp phủ trượt ngang sang (Slide-in Overlay) hiện Description + Feature Titles
          - Khi Click: Mở Modal chi tiết
      ========================================================================= */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {apparelCapabilities.map((item) => {
          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveModalItem(item)}
              className="group relative h-[260px] rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-[#087bc1] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 group-hover:bg-[#087bc1] transition-colors duration-300" />

              {/* ===================================================================
                  MẶT TRƯỚC (BAN ĐẦU): CHỈ HIỂN THỊ TIÊU ĐỀ + TAGLINE
              =================================================================== */}
              <div className="h-full flex flex-col justify-between select-none">
                <div>
                  {/* Badge số thứ tự */}
                  {/* <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-500 group-hover:bg-[#087bc1] group-hover:text-white transition-colors duration-200">
                      {item.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-[#087bc1] transition-colors">
                      Hover to reveal →
                    </span>
                  </div> */}

                  {/* 1. Tiêu đề chính */}
                  <h4 className="text-base sm:text-[17px] font-bold text-[#15194f] tracking-tight font-heading leading-snug line-clamp-2">
                    {item.title}
                  </h4>

                  {/* 2. Dòng nội dung đầu (Tagline) */}
                  <p className="text-xs sm:text-[13px] font-medium text-slate-600 mt-3 leading-relaxed font-sans line-clamp-4">
                    {item.tagline}
                  </p>
                </div>

                {/* Footer chân ô ban đầu */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Explore features</span>
                  <ChevronRight size={14} className="text-slate-400" />
                </div>
              </div>

              {/* ===================================================================
                  LỚP PHỦ KÉO SANG KHI HOVER (SLIDE-IN OVERLAY - KHÔNG ĐẨY TRANG)
                  - Kéo từ bên phải sang (translate-x-full -> translate-x-0)
                  - Nền trắng tinh tế, phủ kín khung ô đó
                  - Hiện Description + Title của các Features + Nút click chi tiết
              =================================================================== */}
              <div className="absolute inset-0 bg-white p-5 flex flex-col justify-between translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-10 border-2 border-[#087bc1] rounded-2xl shadow-xl">
                
                {/* Header lớp phủ */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded bg-sky-100 text-[#087bc1]">
                      {/* {item.number} • OVERVIEW */}
                      • OVERVIEW
                    </span>
                    <span className="text-[11px] font-bold text-[#087bc1]">
                      Click for full modal ↗
                    </span>
                  </div>

                  {/* Description ngắn gọn */}
                  <p className="text-[11.5px] sm:text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 mb-2.5">
                    {item.descriptions[0]}
                  </p>

                  {/* Danh sách Title của Features */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Capabilities:
                    </div>
                    {item.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-800 font-semibold leading-tight">
                        <span className="text-[#087bc1]">•</span>
                        <span className="line-clamp-1">{feat.title}</span>
                      </div>
                    ))}
                    {item.features.length > 3 && (
                      <div className="text-[10.5px] font-bold text-[#087bc1] pl-2">
                        +{item.features.length - 3} more capabilities...
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer lớp phủ */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#087bc1]">
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
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#15194f] text-white text-[11px] font-bold font-mono mb-1.5">
                  {activeModalItem.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#15194f] tracking-tight font-heading leading-snug">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#087bc1] mt-1">
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
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#15194f] mb-4">
                  Key Features & Capabilities ({activeModalItem.features.length})
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalItem.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:bg-white hover:border-[#087bc1]/40 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-[#087bc1] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
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
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
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
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveModalItem(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#087bc1] hover:bg-[#076da9] text-white text-xs sm:text-sm font-semibold shadow transition-all cursor-pointer"
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
