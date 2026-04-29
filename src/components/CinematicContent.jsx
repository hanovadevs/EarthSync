import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

const CinematicContent = () => {
  return (
    <div style={{ backgroundColor: '#FDFDFD' }}>
      
      {/* 1. The Silver Matrix Section */}
      <section style={{ padding: '120px 24px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', display: 'block', marginBottom: '20px' }}>Technical Mastery</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>THE SILVER <br /> MATRIX™ WEAVE</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444', marginBottom: '30px' }}>
              Unlike products that use silver coatings which wash away, EarthSync Essentials uses a proprietary weave of solid, pure silver fiber. Over 4 miles of conductive thread is integrated into every Queen-size sheet, creating a seamless high-fidelity connection to the Earth.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <Zap size={24} color="#3B5233" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontWeight: 800 }}>Indestructible</h4>
                <p style={{ fontSize: '0.85rem', color: '#888' }}>Maintains 100% conductivity even after 100+ washes.</p>
              </div>
              <div>
                <ShieldCheck size={24} color="#3B5233" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontWeight: 800 }}>Pure Contact</h4>
                <p style={{ fontSize: '0.85rem', color: '#888' }}>99.9% antibacterial and high-conductivity silver.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.1)' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1470" 
              alt="Silver Matrix Detail" 
              style={{ width: '100%', height: '600px', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
          </motion.div>
        </div>
      </section>

      {/* 2. Nature vs. Modernity Split Section */}
      <section style={{ padding: '0', backgroundColor: '#1A1A1A', color: 'white', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ padding: '100px 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '30px' }}>The Invisible Gap</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.7, marginBottom: '30px' }}>
              For millennia, we lived in direct contact with the Earth. Today, we live in high-rises, wear rubber soles, and sleep in insulated beds. We have lost our ground.
            </p>
            <div style={{ borderLeft: '3px solid #3B5233', paddingLeft: '30px' }}>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', opacity: 0.9 }}>
                "We are bio-electrical beings. Without a connection to the Earth's electrical field, our bodies accumulate oxidative stress that should naturally be neutralized."
              </p>
            </div>
          </motion.div>
          <div style={{ height: '700px', position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1470" 
              alt="Modern Concrete City" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #1A1A1A, transparent)' }} />
          </div>
        </div>
      </section>

      {/* 3. Global Movement / Wellness Lifestyle */}
      <section style={{ padding: '120px 24px', textAlign: 'center', backgroundColor: '#F0F4EF' }}>
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
      <section style={{ padding: '150px 24px', position: 'relative', overflow: 'hidden' }}>
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
