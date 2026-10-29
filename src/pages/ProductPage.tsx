import Hero from '../components/viewProductPage/Hero'
import Features from '../components/viewProductPage/Features'
import Categories from '../components/viewProductPage/Categories'
import CTA from '../components/viewProductPage/CTA'
import Contact from '../components/viewHomePage/Contact'

export interface ProductPageProps {
  initialTargetId?: string
}

export default function ProductPage({ initialTargetId }: ProductPageProps) {
  return (
    <div id="product" className="relative overflow-hidden bg-white text-slate-900 scroll-mt-20">
      <span id="solutions" className="sr-only" />
      <Hero />
      <Features />
      <Categories initialTargetId={initialTargetId} />
      <CTA />
      <Contact />
    </div>
  )
}
