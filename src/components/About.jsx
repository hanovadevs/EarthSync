import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Award, Globe, Heart, ShieldCheck, ArrowLeft, Beaker, Zap } from 'lucide-react';
import FAQ from './FAQ';
import Reviews from './Reviews';
import PolicyTeaser from './PolicyTeaser';

const aboutFAQs = [
  {
    question: "Is this the official EarthSync Essentials store?",
    answer: "Yes, this is our official digital presence. For security and logistics, all our transactions are handled through our Amazon Brand Store."
  },
  {
    question: "Do you ship worldwide?",
    answer: "Yes, through Amazon Global Shipping, our products can reach over 100 countries."
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#FDFDFD', minHeight: '100vh', color: '#1A1A1A' }}>
      
      {/* Cinematic Hero */}
      <header style={{ height: '70vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <img src="/assets/Banner 5.jpg" alt="About EarthSync" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 10, padding: '0 8%', maxWidth: '800px', color: 'white' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#A3B18A', textDecoration: 'none', marginBottom: '30px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            <ArrowLeft size={16} /> Return Home
          </Link>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#A3B18A', display: 'block', marginBottom: '20px' }}
          >
            Our Mission
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '30px' }}
          >
            RESTORE THE <br /> CONNECTION.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{ fontSize: '1.2rem', opacity: 0.8, fontWeight: 300, lineHeight: 1.6 }}
          >
            EarthSync Essentials was born from a simple realization: modern life has disconnected us from our most vital nutrient—the Earth's natural energy.
          </motion.p>
        </div>
      </header>

      {/* Story Section */}
      <section style={{ padding: '120px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px' }}>The EarthSync Story</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '30px' }}>
              We started in a small workshop with a single goal: to create a bridge between the clinical benefits of Earthing and the comfort of a premium home. 
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
              Today, EarthSync Essentials is the leading provider of high-conductivity sleep systems. We don't just sell sheets; we provide a biological reset button. Every thread of silver is tested for maximum electron flow, ensuring your body recharges just as nature intended.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '60px' }}>
              <div>
                <Award size={32} color="#3B5233" style={{ marginBottom: '15px' }} />
                <h4 style={{ fontWeight: 800, marginBottom: '10px' }}>Premium Quality</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>99.9% Pure Silver Fibers</p>
              </div>
              <div>
                <Globe size={32} color="#3B5233" style={{ marginBottom: '15px' }} />
                <h4 style={{ fontWeight: 800, marginBottom: '10px' }}>Eco-Conscious</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Ethically sourced organic cotton</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}
          >
            <img src="/assets/Image 1.jpg" alt="Nature Connection" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '120px 24px', backgroundColor: '#F9F9F9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', display: 'block', marginBottom: '20px' }}
            >
              The Foundation
            </motion.span>
            <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>What Drives Us</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { title: "Scientific Rigor", desc: "Every product is tested for maximum conductivity. We don't guess; we measure.", icon: <Beaker size={24} /> },
              { title: "Ethical Sourcing", desc: "Our organic cotton is sourced from growers who prioritize the planet as much as we do.", icon: <Heart size={24} /> },
              { title: "Universal Access", desc: "We believe grounding shouldn't be a luxury. We strive for accessibility without compromise.", icon: <Globe size={24} /> },
              { title: "Safety First", desc: "Our built-in 100kΩ resistors ensure that you stay connected to Earth, not electrical surges.", icon: <ShieldCheck size={24} /> }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ backgroundColor: 'white', padding: '50px', borderRadius: '32px', border: '1px solid #eee' }}
              >
                <div style={{ color: '#3B5233', marginBottom: '25px' }}>{value.icon}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '15px' }}>{value.title}</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#666' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section style={{ padding: '120px 24px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '100px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/assets/DSC09998.JPG" alt="Craftsmanship" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '30px' }}>Woven with Purpose</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '30px' }}>
              Our sheets aren't just fabric—they are precision instruments. We use a proprietary <strong>Silver-Matrix™</strong> weave that incorporates over 4 miles of pure silver fiber into every Queen-size sheet. 
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '40px' }}>
              Unlike cheap alternatives that use silver coatings, our silver is part of the fiber itself. This means the conductivity lasts through hundreds of washes, providing a lifetime of restorative connection.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ textAlign: 'center', flex: 1, backgroundColor: '#F0F4EF', padding: '20px', borderRadius: '20px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#3B5233', display: 'block' }}>99.9%</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.5, textTransform: 'uppercase' }}>Pure Silver</span>
              </div>
              <div style={{ textAlign: 'center', flex: 1, backgroundColor: '#F0F4EF', padding: '20px', borderRadius: '20px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#3B5233', display: 'block' }}>100%</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.5, textTransform: 'uppercase' }}>Conductivity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The "Why" Section */}
      <section style={{ padding: '120px 24px', backgroundColor: '#3B5233', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Zap size={48} color="#A3B18A" style={{ marginBottom: '30px' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '30px' }}>The Modern Disconnect</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9, marginBottom: '40px' }}>
            For millions of years, humans walked, slept, and lived in direct contact with the Earth. Today, we live in high-rises, wear rubber-soled shoes, and sleep in insulated beds. We have lost our ground.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9 }}>
            EarthSync Essentials is here to close that gap. By bringing the Earth's natural electrical field into your bedroom, we help you return to your baseline. <strong>No batteries, no apps, just nature.</strong>
          </p>
        </div>
      </section>

      <Reviews />
      <PolicyTeaser />
      <FAQ items={aboutFAQs} title="Store FAQ" />

      <style dangerouslySetInnerHTML={{ __html: `
        .shop-btn:hover {
          background-color: #1A1A1A !important;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
      `}} />
    </div>
  );
};

export default About;
