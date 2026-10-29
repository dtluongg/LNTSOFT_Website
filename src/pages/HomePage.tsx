import Hero from '../components/viewHomePage/Hero'
import About from '../components/viewHomePage/About'
import Solutions from '../components/viewHomePage/solutions/Solutions'
import IndustryFocus from '../components/viewHomePage/IndustryFocus'
import Methodology from '../components/viewHomePage/Methodology'
import EndToEndProcess from '../components/viewHomePage/EndToEndProcess'
import Contact from '../components/viewHomePage/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <IndustryFocus />
      <Methodology />
      <EndToEndProcess />
      <Contact />
    </>
  )
}
