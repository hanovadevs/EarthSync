import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const WarrantyTeaser = () => {
  return (
    <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', backgroundColor: '#3B5233', color: 'white', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '120%', height: '200%', background: 'radial-gradient(circle at right, rgba(255, 255, 255, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', gap: '40px', position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ flex: 1 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '100px', marginBottom: '20px' }}>
            <ShieldCheck size={18} color="#A3B18A" />
            <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', color: '#A3B18A', textTransform: 'uppercase' }}>Secure Your Purchase</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '15px' }}>
            Activate Your Warranty
          </h2>
          <p style={{ fontSize: '1.05rem', opacity: 0.8, lineHeight: 1.6, maxWidth: '500px', fontWeight: 300 }}>
            Every EarthSync product comes with a comprehensive 1-year clinical performance guarantee. Register your unique serial number today to ensure continuous support.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/warranty" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              backgroundColor: 'white', 
              color: '#3B5233', 
              padding: '18px 36px', 
              borderRadius: '100px', 
              textDecoration: 'none', 
              fontWeight: 800, 
              fontSize: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Activate Now <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WarrantyTeaser;
