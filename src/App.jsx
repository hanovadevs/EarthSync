import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import Explanation from './components/Explanation'
import Benefits from './components/Benefits'
import Showcase from './components/Showcase'
import Science from './components/Science'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import About from './components/About'
import Products from './components/Products'
import Reviews from './components/Reviews'
import CinematicContent from './components/CinematicContent'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import Navbar from './components/Navbar'
import Policy from './components/Policy'
import PolicyTeaser from './components/PolicyTeaser'
import ProductDetail from './components/ProductDetail'
import Warranty from './components/Warranty'
import WarrantyTeaser from './components/WarrantyTeaser'
import WellnessShowcase from './components/WellnessShowcase'
import Research from './components/Research'
import ResearchTeaser from './components/ResearchTeaser'
import HomeAbout from './components/HomeAbout'
import HomeScienceDetails from './components/HomeScienceDetails'
import HomeProducts from './components/HomeProducts'

const homeFAQs = [
  {
    question: "What is the physiological premise of grounding?",
    answer: "Grounding (or Earthing) refers to direct physical contact with the surface of the Earth. The Earth maintains a negative electrical potential on its surface. When the human body connects to this field, it absorbs free electrons, which are hypothesized to neutralize positively charged free radicals in the body."
  },
  {
    question: "How does electron transfer affect inflammation?",
    answer: "Inflammation is primarily caused by reactive oxygen species (ROS), which are positively charged molecules missing an electron. By supplying the body with an abundant source of free electrons from the Earth, grounding provides the necessary components to neutralize these free radicals, thereby potentially reducing acute and chronic inflammation."
  },
  {
    question: "What are the documented effects on sleep?",
    answer: "Clinical studies have shown that grounding during sleep normalizes the day-night cortisol rhythm. This helps synchronize circadian profiles, leading to improved sleep onset, deeper sleep cycles, and reduced instances of night-time waking and sleep apnea."
  },
  {
    question: "How is indoor grounding achieved?",
    answer: "Modern electrical grids include a designated ground wire connected directly to the earth via a conductive rod. Specialized conductive materials (like silver or carbon matrices) can connect to this ground port, extending the Earth's electrical field indoors safely without drawing active electrical current."
  },
  {
    question: "Is grounding safe for daily practice?",
    answer: "Yes, the practice simply replicates a biological state humans maintained throughout history before the invention of synthetic footwear and elevated bedding. Properly designed indoor grounding tools incorporate safety resistors (typically 100kΩ) to prevent any electrical current from reaching the user."
  },
  {
    question: "Can grounding interact with medical conditions?",
    answer: "Because grounding can improve blood viscosity and circulation, individuals taking blood-thinning medications or thyroid medications should consult with a healthcare provider. The physiological changes may require a doctor to adjust medication dosages."
  },
  {
    question: "How long does it take for the body to respond?",
    answer: "Physiological responses begin immediately. Skin conductance changes in milliseconds. Muscle tension and pulse rate shift within minutes. However, resolving long-standing chronic inflammation or resetting deep circadian rhythms often requires continuous, multi-hour daily exposure (like during sleep) over several weeks."
  },
  {
    question: "Is there empirical evidence supporting these claims?",
    answer: "Yes. Over two dozen peer-reviewed studies have been published in journals such as the 'Journal of Inflammation Research' and the 'Journal of Environmental and Public Health', using methodologies ranging from thermography to blood viscosity analysis to document the systemic effects of Earthing."
  }
];

const Home = () => (
  <>
    <Hero />
    <Explanation />
    <HomeScienceDetails />
    <HomeProducts />
    <Benefits />
    <Reviews />
    <CinematicContent />
    <WellnessShowcase />
    <HomeAbout />
    <ResearchTeaser />
    <Showcase />
    <WarrantyTeaser />
    <PolicyTeaser />
    <FAQ items={homeFAQs} />
  </>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <main style={{ backgroundColor: 'white', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/science" element={<Science />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/warranty" element={<Warranty />} />
        </Routes>
        <Footer />
        <ChatBot />
        <Analytics />
      </main>
    </Router>
  )
}

export default App
