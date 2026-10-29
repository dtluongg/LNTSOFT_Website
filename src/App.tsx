import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/common/BackToTop'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

const productTargets = [
  'product',
  'commercial',
  'supply-chain',
  'manufacturing-operations',
  'financial-management',
  'enterprise-management',
  'categories-overview',
]

const parseRoute = (): { page: 'home' | 'product'; targetId?: string } => {
  const rawHash = window.location.hash
    .toLowerCase()
    .replace('#/', '')
    .replace('#', '')
    .replace('..', '')
  const path = window.location.pathname.toLowerCase()

  if (
    path.includes('/product') ||
    rawHash.startsWith('product') ||
    productTargets.includes(rawHash)
  ) {
    return { page: 'product', targetId: rawHash || 'product' }
  }

  return { page: 'home', targetId: rawHash || undefined }
}

const App = () => {
  const [route, setRoute] = useState<{ page: 'home' | 'product'; targetId?: string }>(() =>
    parseRoute()
  )

  // Listen to hash / browser back and forward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(parseRoute())
    }

    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  const handleNavigate = (page: 'home' | 'product', targetId?: string) => {
    setRoute({ page, targetId })

    if (page === 'product') {
      const hash = targetId ? `#${targetId}` : '#product'
      window.history.pushState(null, '', hash)
      if (!targetId || targetId === 'product') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setTimeout(() => {
          const el = document.getElementById(targetId)
          if (el) {
            const navOffset = 90
            const elementPosition = el.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - navOffset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
          }
        }, 150)
      }
    } else {
      const hash = targetId && targetId !== 'top' ? `#${targetId}` : ''
      window.history.pushState(null, '', hash ? hash : window.location.pathname)
      if (!targetId || targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setTimeout(() => {
          const el = document.getElementById(targetId)
          if (el) {
            const navOffset = 80
            const elementPosition = el.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - navOffset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
          }
        }, 150)
      }
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar currentPage={route.page} onNavigate={handleNavigate} />
      <main>
        {route.page === 'product' ? (
          <ProductPage initialTargetId={route.targetId} />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App