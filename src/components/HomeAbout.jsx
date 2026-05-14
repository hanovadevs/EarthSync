import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Heart, ShieldCheck } from 'lucide-react';

const HomeAbout = () => {
  return (
    <section style={{ backgroundColor: '#F9F9F9', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Story Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', display: 'block', marginBottom: '20px' }}>
              Our Story
            </span>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '40px', lineHeight: 1.1 }}>
              Restore The <br /> Connection.
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '30px' }}>
              EarthSync Essentials was born from a simple realization: modern life has disconnected us from our most vital nutrient—the Earth's natural energy. 
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
              We started with a single goal: to create a bridge between the clinical benefits of Earthing and the comfort of a premium home. Today, we provide a biological reset button woven with pure silver fibers for maximum electron flow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}
          >
            <img src="/assets/image-1.jpg" alt="Nature Connection" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </motion.div>
        </div>

        {/* Values Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>What Drives Us</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {[
            { title: "Premium Quality", desc: "99.9% Pure Silver Fibers built for longevity.", icon: <Award size={28} /> },
            { title: "Ethical Sourcing", desc: "Organic cotton sourced from conscious growers.", icon: <Heart size={28} /> },
            { title: "Universal Access", desc: "Bringing grounding to everyone, without compromise.", icon: <Globe size={28} /> },
            { title: "Safety First", desc: "100kΩ resistors ensure no electrical surges.", icon: <ShieldCheck size={28} /> }
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ backgroundColor: 'white', padding: '40px', borderRadius: '32px', border: '1px solid #eee' }}
            >
              <div style={{ color: '#3B5233', marginBottom: '20px' }}>{value.icon}</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '15px' }}>{value.title}</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#666' }}>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
