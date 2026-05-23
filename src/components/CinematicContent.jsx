import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

const CinematicContent = () => {
  return (
    <div style={{ backgroundColor: '#FDFDFD' }}>
      
      {/* Removed: 'THE SILVER MATRIX™ WEAVE' and 'The Invisible Gap' sections per request */}

      {/* 3. Global Movement / Wellness Lifestyle */}
      <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', textAlign: 'center', backgroundColor: '#F0F4EF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe size={48} color="#3B5233" style={{ marginBottom: '30px', display: 'inline-block' }} />
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px' }}>WORLD-CLASS RECOVERY</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#444', marginBottom: '50px' }}>
              From elite athletes to health-conscious families, EarthSync is the gold standard for restorative sleep. By normalizing cortisol levels and neutralizing free radicals, we help you wake up as your optimal self.
            </p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { label: "Cortisol Balance", val: "Verified" },
              { label: "REM Sleep", val: "+20%" },
              { label: "Inflammation", val: "Reduced" },
              { label: "Deep Rest", val: "Guaranteed" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 20px rgba(0,0,0,0.03)' }}
              >
                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#3B5233', display: 'block' }}>{stat.val}</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.4 }}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Collection Hub (Link Section) */}
      <section style={{ padding: 'clamp(80px, 6vw, 100px) 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img 
            src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1460" 
            alt="Relaxing Sleep" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }} 
          />
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px' }}>THE SHOP HUB</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 50px', fontSize: '1.1rem', lineHeight: 1.6, color: '#666' }}>
              Explore our full collection of high-conductivity bedding, mats, and lifestyle accessories. Every product is live-synced with our Amazon storefront for seamless procurement.
            </p>
            <Link 
              to="/products" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '15px', 
                backgroundColor: '#1A1A1A', 
                color: 'white', 
                padding: '24px 60px', 
                borderRadius: '100px', 
                textDecoration: 'none', 
                fontWeight: 800, 
                fontSize: '1.1rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Explore Collection <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CinematicContent;
