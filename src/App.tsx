import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/common/BackToTop'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import IndustryPage from './pages/IndustryPage'
import { AISuitePage } from './components/viewIndustryPage/AISuitePage'
import { AIInsightPage } from './components/viewIndustryPage/AIInsightPage'
import { SmartPlannerPage } from './components/viewIndustryPage/SmartPlannerPage'

export type PageRoute = 'home' | 'product' | 'industry' | 'ai-suite' | 'ai-insight' | 'smart-planner'

// 1. Nhận diện Route linh hoạt từ URL Hash lẫn URL Pathname
const getRoute = (): { page: PageRoute; targetId?: string } => {
  const hash = (window.location.hash || '').toLowerCase()
  const path = (window.location.pathname || '').toLowerCase()
  const full = `${hash} ${path}`

  if (full.includes('smart-planner')) {
    return { page: 'smart-planner', targetId: 'smart-planner' }
  }
  if (full.includes('ai-insight')) {
    return { page: 'ai-insight', targetId: 'ai-insight' }
  }
  if (full.includes('ai-suite')) {
    return { page: 'ai-suite', targetId: 'ai-suite' }
  }
  if (full.includes('product')) {
    const target = hash ? hash.replace(/^#\/?product\/?/, '') : path.replace(/^\/?product\/?/, '')
    return { page: 'product', targetId: target || 'product' }
  }
  if (full.includes('industry') || full.includes('apparel') || full.includes('manufacturing') || full.includes('fintech')) {
    const target = hash ? hash.replace(/^#\/?industry\/?/, '') : path.replace(/^\/?industry\/?/, '')
    return { page: 'industry', targetId: target || 'industry' }
  }
  return { page: 'home', targetId: undefined }
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  // 2. Lắng nghe thay đổi hash & popstate (Click link hoặc nút Back/Forward)
  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRoute())
    }
    window.addEventListener('hashchange', syncRoute)
    window.addEventListener('popstate', syncRoute)
    return () => {
      window.removeEventListener('hashchange', syncRoute)
      window.removeEventListener('popstate', syncRoute)
    }
  }, [])

  // 3. Hàm chuyển trang tập trung & gán Hash trực quan
  const handleNavigate = (page: PageRoute, targetId?: string) => {
    if (page === 'smart-planner') {
      window.location.hash = 'industry/smart-planner'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'ai-insight') {
      window.location.hash = 'industry/ai-insight'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'ai-suite') {
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
        {route.page === 'smart-planner' && (
          <SmartPlannerPage onBack={() => handleNavigate('industry', 'apparel')} />
        )}
        {route.page === 'ai-insight' && (
          <AIInsightPage onBack={() => handleNavigate('industry', 'apparel')} />
        )}
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
