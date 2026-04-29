import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Shield, Zap } from 'lucide-react';

const WellnessShowcase = () => {
  return (
    <section style={{ padding: '120px 24px', backgroundColor: '#FDFDFD', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B5233', textTransform: 'uppercase', letterSpacing: '0.4em', display: 'block', marginBottom: '20px' }}>
              Circadian Optimization
            </span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '30px', letterSpacing: '-0.02em' }}>
              Discover All-Night <br /> <span style={{ color: '#A3B18A' }}>Wellness & Balance</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.8, marginBottom: '40px', fontWeight: 300 }}>
              Grounding isn't just about sleep—it's about resetting your body's electrical state to its natural baseline. By neutralizing positive charge buildup, you unlock a cascade of biological benefits that resonate long after you wake up.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
               <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ backgroundColor: '#EEF2ED', padding: '12px', borderRadius: '12px', color: '#3B5233' }}><Heart size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '5px' }}>Pain Relief</h4>
                    <p style={{ fontSize: '0.85rem', color: '#666' }}>Systemic inflammation reduction.</p>
                  </div>
               </div>
               <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ backgroundColor: '#EEF2ED', padding: '12px', borderRadius: '12px', color: '#3B5233' }}><Shield size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '5px' }}>EMF Shield</h4>
                    <p style={{ fontSize: '0.85rem', color: '#666' }}>Protects from ambient radiation.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', inset: '-20px', backgroundColor: '#F6F6F6', borderRadius: '40px', zIndex: 0 }} />
            <img 
              src="https://m.media-amazon.com/images/I/81VoSX8A3FL._AC_SX679_.jpg" 
              alt="Wellness Benefits" 
              style={{ width: '100%', borderRadius: '30px', position: 'relative', zIndex: 1, boxShadow: '0 40px 100px rgba(0,0,0,0.1)' }} 
            />
            
            {/* Floating Achievement Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', bottom: '40px', left: '-30px', backgroundColor: 'white', padding: '20px 30px', borderRadius: '20px', zIndex: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '15px' }}
            >
               <div style={{ backgroundColor: '#3B5233', padding: '10px', borderRadius: '50%', color: 'white' }}><Sparkles size={18} /></div>
               <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#3B5233', textTransform: 'uppercase', display: 'block' }}>Verified Benefit</span>
                  <span style={{ fontSize: '1rem', fontWeight: 900 }}>Enhanced Circulation</span>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WellnessShowcase;
