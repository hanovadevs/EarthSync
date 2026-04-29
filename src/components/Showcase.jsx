import React from 'react';
import { motion } from 'framer-motion';

const Showcase = () => {
  return (
    <section style={{ padding: '120px 24px', backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
          <div style={{ flex: '1 1 450px' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', fontWeight: 700, display: 'block', marginBottom: '20px' }}>
                The Presentation
              </span>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '30px', color: '#1A1A1A', lineHeight: 1.1 }}>
                Uncompromising Quality. <br />
                Beautifully Delivered.
              </h2>
              <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px', fontWeight: 300 }}>
                Every EarthSync Grounding sheet is an investment in your well-being. 
                Our premium packaging reflects the precision and care we put into 
                every silver-infused fiber.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "99.9% Pure Silver Fiber",
                  "High-Conductivity Connection Cord",
                  "Sustainable Organic Cotton",
                  "Cinematic Sleep Guarantee"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', fontWeight: 600, color: '#333' }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3B5233' }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div style={{ flex: '1 1 450px', position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}
            >
              <img 
                src="/assets/DSC09971.JPG" 
                alt="EarthSync Essentials Packaging" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>
            
            {/* Decorative circle */}
            <div style={{ 
              position: 'absolute', 
              top: '-40px', 
              right: '-40px', 
              width: '160px', 
              height: '160px', 
              border: '1px solid rgba(59, 82, 51, 0.1)', 
              borderRadius: '50%', 
              zIndex: -1 
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
