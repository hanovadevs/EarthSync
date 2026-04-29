import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
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
import Policy from './components/Policy'
import PolicyTeaser from './components/PolicyTeaser'
import ProductDetail from './components/ProductDetail'
import WellnessShowcase from './components/WellnessShowcase'
import Research from './components/Research'
import ResearchTeaser from './components/ResearchTeaser'

const homeFAQs = [
  {
    question: "What is grounding?",
    answer: "Grounding, also known as Earthing, is the practice of connecting your body to the Earth's natural surface energy. This is typically done by walking barefoot outdoors or using conductive products indoors that bridge the connection to the Earth's electrical field."
  },
  {
    question: "How does grounding work?",
    answer: "The Earth's surface has a limitless supply of free electrons. When you make contact, these electrons flow into your body, where they act as powerful antioxidants, neutralizing positively charged free radicals that cause inflammation and oxidative stress."
  },
  {
    question: "What are the benefits of grounding?",
    answer: "Commonly reported benefits include reduced inflammation, improved sleep quality, faster muscle recovery, decreased stress levels (cortisol normalization), and improved circulation."
  },
  {
    question: "How long does it take to feel results?",
    answer: "Many people feel an immediate sense of relaxation or 'tingling' upon connection. Improved sleep usually occurs within the first 1-3 nights of consistent use, while chronic inflammation may take 2-4 weeks to show significant reduction."
  },
  {
    question: "Is grounding safe?",
    answer: "Yes, grounding is completely natural. You are simply restoring the connection humans have had for thousands of years. Our products include a built-in safety resistor that prevents any electrical surges from reaching you."
  },
  {
    question: "Can I ground indoors?",
    answer: "Absolutely. EarthSync sheets use pure silver fibers to conduct the Earth's energy from a standard wall outlet's ground port (the third hole) directly to your skin while you sleep."
  },
  {
    question: "How often should I ground?",
    answer: "The more the better. We recommend grounding during sleep (7-8 hours) as it's the time when your body is naturally focused on repair and recovery."
  },
  {
    question: "Do Earthing products really work?",
    answer: "Yes. The conductivity of our products can be verified with a simple voltmeter. Clinical studies published in peer-reviewed journals have documented the physiological changes that occur when the body is grounded."
  }
];

const Home = () => (
  <>
    <Hero />
    <Explanation />
    <Benefits />
    <Reviews />
    <CinematicContent />
    <WellnessShowcase />
    <ResearchTeaser />
    <Showcase />
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/science" element={<Science />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
