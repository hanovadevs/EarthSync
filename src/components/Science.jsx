import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Zap, Shield, Sparkles, Beaker, Activity, Info, RotateCcw } from 'lucide-react';
import FAQ from './FAQ';
import WellnessShowcase from './WellnessShowcase';

const scienceFAQs = [
  {
    question: "Is there real scientific evidence for grounding?",
    answer: "Yes. Over 20 peer-reviewed studies have been published in journals such as the 'Journal of Environmental and Public Health'. These studies document measurable changes in cortisol levels, inflammation markers (CRP), and blood viscosity."
  },
  {
    question: "How do the silver fibers actually conduct?",
    answer: "We use 99.9% pure silver, which is one of the most conductive elements on Earth. The fibers (10% of the weave) are integrated directly into the cotton matrix (90%), creating a continuous conductive grid."
  },
  {
    question: "Does grounding work through pajamas?",
    answer: "Yes, to an extent. While direct skin contact is optimal, the moisture (even invisible perspiration) in your clothing will conduct the electrons. However, for the fastest results, we recommend at least some direct contact."
  },
  {
    question: "What is the difference between direct ground and outlet ground?",
    answer: "There is no functional difference. The third hole in your outlet is connected to a copper rod driven into the earth outside your home. Our sheets simply tap into this existing safety system."
  }
];

const Science = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const specs = [
    { label: "Material", val: "90% cotton + 10% silver fiber" },
    { label: "Thread Count", val: "400TC (smooth, breathable, soft)" },
    { label: "Conductivity", val: "Verified threading (Pen tester included)" },
    { label: "GSM", val: "~123 GSM (Balance of softness/durability)" },
    { label: "Sheet Pocket Depth", val: "13 inches (Secure fit)" },
    { label: "Cord Length", val: "4.6 meters (15 feet)" },
    { label: "Plug Type", val: "Grounding port only (Non-powered)" },
    { label: "Safety Resistor", val: "100kΩ (Secure use with electronics)" },
    { label: "Included", val: "Cord, Pen Tester, Outlet Tester, Silk Mask" },
    { label: "Washing Care", val: "Gentle wash, No bleach, Air dry pref." }
  ];

  return (
    <div style={{ backgroundColor: '#FDFDFD', minHeight: '100vh', color: '#1A1A1A' }}>
      
      {/* Cinematic Header - FIXED IMAGE & SPACING */}
      <header style={{ height: '85vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <img src="/assets/image-3.jpg" alt="Science Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.2) 60%, #FDFDFD)' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1000px', padding: '0 24px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none', marginBottom: '50px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8 }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '30px', textShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
          >
            THE PHYSICS OF <br /> <span style={{ color: '#A3B18A' }}>RESTORATION</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{ color: 'white', opacity: 0.9, fontSize: '1.3rem', fontWeight: 300, maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Authentic specifications and clinical validation for the <br /> EarthSync Essentials grounding system.
          </motion.p>
        </div>
      </header>

      {/* REFINED: WHY IT WORKS FLIP CARD SECTION */}
      <section style={{ padding: '150px 24px', backgroundColor: '#FDFDFD', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
             <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5em', color: '#3B5233', display: 'block', marginBottom: '20px' }}>Technical Architecture</span>
             <h2 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>Why It Works</h2>
          </div>

          <div style={{ perspective: '2000px', width: '100%', height: '650px' }}>
            <motion.div
              style={{ 
                width: '100%', 
                height: '100%', 
                position: 'relative', 
                transformStyle: 'preserve-3d',
                cursor: 'pointer'
              }}
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front Side */}
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                backfaceVisibility: 'hidden', 
                borderRadius: '60px', 
                overflow: 'hidden',
                boxShadow: '0 50px 120px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1460" 
                  alt="Front" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} 
                />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(59, 82, 51, 0.4)', backdropFilter: 'blur(2px)' }} />
                <div style={{ position: 'relative', textAlign: 'center', color: 'white', padding: '40px' }}>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ backgroundColor: 'white', color: '#3B5233', padding: '15px 40px', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '15px', marginBottom: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                  >
                    <Info size={20} />
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0, letterSpacing: '0.05em' }}>TECHNICAL PROFILE</h3>
                  </motion.div>
                  <p style={{ fontSize: '1.5rem', fontWeight: 300, opacity: 0.9, maxWidth: '500px' }}>Explore the exact specifications behind our grounding technology.</p>
                  <div style={{ marginTop: '40px' }}>
                     <RotateCcw size={40} style={{ opacity: 0.6 }} />
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                backfaceVisibility: 'hidden', 
                transform: 'rotateY(180deg)', 
                backgroundColor: '#1A1A1A', 
                borderRadius: '60px', 
                padding: '80px', 
                color: 'white',
                boxShadow: '0 60px 150px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A3B18A', letterSpacing: '-0.02em' }}>TECHNICAL SPECS</h3>
                  <div style={{ backgroundColor: 'rgba(163, 177, 138, 0.15)', color: '#A3B18A', padding: '10px 24px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.1em' }}>VERIFIED 2026</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
                  {specs.map((s, i) => (
                    <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '15px' }}>
                      <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#A3B18A', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>{s.label}</span>
                      <span style={{ fontSize: '1.1rem', fontWeight: 500, opacity: 0.95 }}>{s.val}</span>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: '50px', fontSize: '0.9rem', opacity: 0.5, fontStyle: 'italic', textAlign: 'center' }}>
                  Integrated 100kΩ safety resistor for electronic interference shielding.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 100px' }}>
        
        {/* Section 1: The Core Science */}
        <section style={{ marginBottom: '160px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', display: 'block', marginBottom: '20px' }}>Biological Synchronization</span>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>What happens when you touch the Earth?</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', fontWeight: 300 }}>
                Every second, your body undergoes millions of chemical reactions. These reactions create "free radicals"—positively charged particles that cause inflammation and aging. The Earth is a giant reservoir of negatively charged free electrons.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}
            >
              <img src="/assets/image-7.jpg" alt="Conductive Silver Fiber" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: '30px', left: '30px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, display: 'block', color: '#3B5233' }}>MAGNIFICATION: 100X</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Pure Silver Thread Matrix</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ritual Transition (Image 2 Influence) */}
        <section style={{ height: '75vh', position: 'relative', marginBottom: '160px', borderRadius: '60px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.1)' }}>
          <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1460" alt="Morning ritual" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.95) 40%, transparent)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: '8% 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '800px' }}>
            <motion.h2 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: '#3B5233', lineHeight: 1, marginBottom: '40px', letterSpacing: '-0.02em' }}
            >
              Thousands Are <br /> Grounding Their Nights.
            </motion.h2>
            <Link to="/products" className="btn btn-primary" style={{ width: 'fit-content', padding: '22px 50px', fontSize: '1.1rem', letterSpacing: '0.1em' }}>
               FIND YOUR RITUAL
            </Link>
          </div>
        </section>

      </div>

      <WellnessShowcase />

      <FAQ items={scienceFAQs} title="Science FAQ" />

      {/* Footer Persistence */}
      <div style={{ borderTop: '1px solid #eee' }}>
         <footer style={{ padding: '120px 24px', backgroundColor: '#1A1A1A', color: 'white', textAlign: 'center' }}>
            <img src="/assets/logo-1.png" alt="Logo" style={{ height: '40px', marginBottom: '30px', filter: 'brightness(0) invert(1)' }} />
            <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '30px', letterSpacing: '-0.02em' }}>Ready to Experience the Science?</h3>
            <Link to="/products" className="btn btn-primary" style={{ textDecoration: 'none', padding: '20px 50px' }}>Shop the Collection</Link>
            <div style={{ marginTop: '100px', opacity: 0.3, fontSize: '0.8rem', letterSpacing: '0.2em' }}>
              © 2026 EARTHSYNC ESSENTIALS. BUILT ON SCIENCE.
            </div>
         </footer>
      </div>
    </div>
  );
};

export default Science;
