import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Solutions from './components/sections/Solutions'
import IndustryFocus from './components/sections/IndustryFocus'
import Methodology from './components/sections/Methodology'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import BackToTop from './components/common/BackToTop'

const App = () => {
  return (
    <div className='min-h-screen bg-white text-slate-900'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <IndustryFocus />
        <Methodology />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App