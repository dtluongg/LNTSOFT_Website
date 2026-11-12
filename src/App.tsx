import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/common/BackToTop'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import IndustryPage from './pages/IndustryPage'
import { AISuitePage } from './components/viewIndustryPage/AISuitePage'

export type PageRoute = 'home' | 'product' | 'industry' | 'ai-suite'

// 1. Nhận diện Route cực kỳ gọn gàng từ URL Hash
const getRoute = (): { page: PageRoute; targetId?: string } => {
  const hash = (window.location.hash || '').toLowerCase()

  if (hash.includes('ai-suite')) {
    return { page: 'ai-suite', targetId: 'ai-suite' }
  }
  if (hash.includes('product')) {
    return { page: 'product', targetId: hash.replace(/^#\/?product\/?/, '') || 'product' }
  }
  if (hash.includes('industry') || hash.includes('apparel') || hash.includes('manufacturing') || hash.includes('fintech')) {
    return { page: 'industry', targetId: hash.replace(/^#\/?industry\/?/, '') || 'industry' }
  }
  return { page: 'home', targetId: undefined }
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  // 2. Lắng nghe thay đổi hash (Click link hoặc nút Back/Forward của trình duyệt)
  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // 3. Hàm chuyển trang tập trung & gán Hash trực quan
  const handleNavigate = (page: PageRoute, targetId?: string) => {
    if (page === 'ai-suite') {
      window.location.hash = 'industry/ai-suite'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'product') {
      window.location.hash = targetId && targetId !== 'product' ? `product/${targetId}` : 'product'
    } else if (page === 'industry') {
      window.location.hash = targetId && targetId !== 'industry' ? `industry/${targetId}` : 'industry'
    } else {
      window.location.hash = targetId ? targetId : ''
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // 4. Render trang tương ứng gọn gàng, rõ ràng
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar currentPage={route.page} onNavigate={handleNavigate} />
      <main>
        {route.page === 'ai-suite' && (
          <AISuitePage onBack={() => handleNavigate('industry', 'apparel')} />
        )}
        {route.page === 'product' && <ProductPage initialTargetId={route.targetId} />}
        {route.page === 'industry' && <IndustryPage initialTargetId={route.targetId} />}
        {route.page === 'home' && <HomePage />}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
