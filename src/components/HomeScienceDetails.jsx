import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, RotateCcw } from 'lucide-react';

const HomeScienceDetails = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const specs = [
    { label: "Material", val: "90% cotton + 10% silver fiber" },
    { label: "Thread Count", val: "400TC (smooth, breathable, soft)" },
    { label: "Conductivity", val: "Verified threading (Pen tester included)" },
    { label: "GSM", val: "~123 GSM (Balance of softness/durability)" },
    { label: "Sheet Pocket Depth", val: "13 inches (Secure fit)" },
    { label: "Cord Length", val: "4.6 meters (15 feet)" },
    { label: "Plug Type", val: "Grounding port only (Non-powered)" },
    { label: "Safety Resistor", val: "100kΩ (Secure use with electronics)" }
  ];

  return (
    <section style={{ padding: '120px 24px', backgroundColor: '#FDFDFD', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Core Science Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '160px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', display: 'block', marginBottom: '20px' }}>Biological Synchronization</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>What happens when you touch the Earth?</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', fontWeight: 300, marginBottom: '20px' }}>
              Every second, your body undergoes millions of chemical reactions. These reactions create "free radicals"—positively charged particles that cause inflammation and aging.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', fontWeight: 300 }}>
              The Earth is a giant reservoir of negatively charged free electrons. When you make contact, these electrons flow into your body, neutralizing free radicals and bringing you back to your natural electrical baseline.
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

        {/* Technical Architecture Flip Card */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5em', color: '#3B5233', display: 'block', marginBottom: '20px' }}>Technical Architecture</span>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>Why It Works</h2>
        </div>

        <div style={{ perspective: '2000px', width: '100%', height: '600px', maxWidth: '1000px', margin: '0 auto' }}>
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
              padding: 'clamp(30px, 5vw, 60px)', 
              color: 'white',
              boxShadow: '0 60px 150px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              overflowY: 'auto'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#A3B18A', letterSpacing: '-0.02em', margin: 0 }}>TECHNICAL SPECS</h3>
                <div style={{ backgroundColor: 'rgba(163, 177, 138, 0.15)', color: '#A3B18A', padding: '10px 24px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.1em' }}>VERIFIED 2026</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(15px, 3vw, 30px)' }}>
                {specs.map((s, i) => (
                  <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '15px' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#A3B18A', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>{s.label}</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 500, opacity: 0.95 }}>{s.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeScienceDetails;
