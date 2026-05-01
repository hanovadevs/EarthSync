import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Explanation = () => {
  return (
    <section style={{ padding: '120px 24px', backgroundColor: 'white', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
          
          {/* Image Side */}
          <div style={{ flex: '1 1 clamp(280px, 100%, 500px)', position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
              style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.1)' }}
            >
              <img 
                src="/assets/image-5.jpg" 
                alt="The Science of Grounding" 
                style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.1)' }}
              />
            </motion.div>
            
            {/* Floating Detail Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ 
                position: 'absolute', 
                bottom: 'clamp(-10px, -2vw, -30px)', 
                right: 'clamp(10px, 2vw, -30px)', 
                backgroundColor: '#3B5233', 
                color: 'white', 
                padding: 'clamp(20px, 4vw, 40px)', 
                borderRadius: '30px',
                maxWidth: 'clamp(200px, 60vw, 280px)',
                boxShadow: '0 30px 60px rgba(59, 82, 51, 0.3)'
              }}
            >
              <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Bio-Electrical Balance</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.6 }}>
                Your body is electrical. Grounding allows a transfer of electrons from the Earth to you.
              </p>
            </motion.div>
          </div>

          {/* Text Side */}
          <div style={{ flex: '1 1 clamp(280px, 100%, 400px)' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ 
                fontSize: '10px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.4em', 
                color: '#3B5233', 
                fontWeight: 700, 
                display: 'block', 
                marginBottom: '20px' 
              }}>
                The Foundation
              </span>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontWeight: 900, 
                marginBottom: '30px', 
                color: '#1A1A1A', 
                lineHeight: 1.1 
              }}>
                What is <br />
                <span style={{ color: '#A3B18A' }}>Grounding?</span>
              </h2>
              
              <div style={{ width: '60px', height: '4px', backgroundColor: '#3B5233', marginBottom: '40px' }} />
              
              <p style={{ 
                color: '#444', 
                fontSize: '1.2rem', 
                lineHeight: 1.8, 
                marginBottom: '30px', 
                fontWeight: 300 
              }}>
                Grounding (or earthing) is the simple practice of connecting your body to the Earth's natural surface charge. 
              </p>
              
              <p style={{ 
                color: '#666', 
                fontSize: '1rem', 
                lineHeight: 1.8, 
                fontWeight: 300 
              }}>
                Modern life isolates us from this vital energy. By using conductive silver-infused sheets, we create a bridge that allows the Earth's free electrons to flow into your body, neutralizing stress and restoring your natural biological state while you sleep.
              </p>

              <Link to="/science" style={{ textDecoration: 'none' }}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    marginTop: '50px',
                    padding: '18px 40px',
                    backgroundColor: 'transparent',
                    border: '1px solid #3B5233',
                    color: '#3B5233',
                    borderRadius: '100px',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    cursor: 'pointer'
                  }}
                >
                  Learn the Science
                </motion.button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Explanation;
