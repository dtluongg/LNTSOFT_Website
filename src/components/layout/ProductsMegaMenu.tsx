import { motion } from 'framer-motion'
import {
  BrainCircuit,
  BuildingComplex,
  Calculator,
  ChartNoAxesCombined,
  ChartPie,
  Factory,
  FileText,
  FolderArchive,
  Headphones,
  Landmark,
  Network,
  Shirt,
  ShoppingCart,
  Smartphone,
  Warehouse,
  Workflow,
} from 'lucide-react'
import productsData from '../../data/productsMenu.json'

// =========================================================================
// CẤU HÌNH SỐ CỘT CHO LƯỚI SẢN PHẨM:
// Đổi số này thành 2, 3 hoặc 4 cột tùy ý:
// =========================================================================
const COLUMN_COUNT: 2 | 3 | 4 = 3

// Icon registry mapped to JSON icon identifiers
export const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  BuildingComplex,
  Factory,
  Warehouse,
  ShoppingCart,
  Calculator,
  ChartNoAxesCombined,
  BrainCircuit,
  Workflow,
  Smartphone,
  Network,
  Shirt,
  Landmark,
  FileText,
  FolderArchive,
  Headphones,
  ChartPie,
}

export function getNavIcon(
  iconName: string,
): React.ComponentType<{ size?: number; className?: string }> {
  return iconMap[iconName] || BuildingComplex
}

interface ProductsMegaMenuProps {
  activeCategoryIndex: number
  setActiveCategoryIndex: (index: number) => void
  onClose: () => void
  onMouseEnter: () => void
}

export function ProductsMegaMenu({
  activeCategoryIndex,
  setActiveCategoryIndex,
  onClose,
  onMouseEnter,
}: ProductsMegaMenuProps) {
  const activeCategory = productsData[activeCategoryIndex]

  // Khai báo rõ ràng các class chuỗi tĩnh để Tailwind CSS biên dịch chuẩn 100%
  const gridColumnsClass =
    COLUMN_COUNT === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : COLUMN_COUNT === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      onMouseEnter={onMouseEnter}
      className="absolute inset-x-0 top-full z-50 border-b border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-2 pb-8">
        {/* Horizontal Parent Tabs (3 tabs cùng kích thước bằng nhau tuyệt đối - flex-1) */}
        <div className="mx-auto flex max-w-5xl border-b border-slate-200">
          {productsData.map((category, index) => {
            const isActive = activeCategoryIndex === index
            return (
              <button
                key={category.id}
                type="button"
                onMouseEnter={() => setActiveCategoryIndex(index)}
                onClick={() => setActiveCategoryIndex(index)}
                className={`relative flex-1 py-3.5 text-center text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#087bc1]'
                    : 'text-slate-600 hover:text-[#087bc1]'
                }`}
              >
                <span>{category.name}</span>

                {/* Active Underline Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="productsActiveTabUnderline"
                    className="absolute -bottom-px left-0 right-0 h-[2.5px] bg-[#087bc1]"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Lưới sản phẩm: dồn sát lên trên (content-start), khoảng cách giữa các hàng khít nhau (gap-y-2.5) */}
        <div className="pt-6 min-h-[230px] flex justify-center items-start">
          <div
            className={`w-full max-w-5xl grid ${gridColumnsClass} gap-x-8 gap-y-2.5 content-start auto-rows-max`}
          >
            {activeCategory.items.map((item) => {
              const Icon = getNavIcon(item.icon)
              return (
                <a
                  key={item.title}
                  href={item.href || '#solutions'}
                  onClick={onClose}
                  className="group flex w-full h-[52px] items-center gap-3 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#087bc1] transition-all duration-200 group-hover:bg-[#087bc1] group-hover:text-white group-hover:scale-105">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm font-medium text-slate-700 transition-colors duration-200 group-hover:text-[#087bc1] leading-snug line-clamp-2">
                    {item.title}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
