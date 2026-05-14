import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Twitter, Linkedin, Send, ArrowLeft, MapPin, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import FAQ from './FAQ';

const contactFAQs = [
  {
    question: "What is the standard shipping timeframe?",
    answer: "Standard order processing occurs within 24 hours. Domestic shipping within the continental US typically requires 3-5 business days. International shipping timelines vary by region but generally range from 7 to 14 days."
  },
  {
    question: "What is the return policy?",
    answer: "A standard 30-night evaluation period is provided. If physiological benefits (such as improved sleep quality or reduced inflammation) are not observed within this timeframe, items may be returned for a complete refund."
  },
  {
    question: "What is the recommended maintenance protocol for conductive materials?",
    answer: "Conductive fabrics should be washed in warm water using a mild liquid detergent. Bleach, fabric softeners, and whitening agents must be avoided, as these chemicals oxidize or coat the silver fibers, degrading their electrical conductivity over time."
  },
  {
    question: "How can I verify my grounding connection?",
    answer: "The electrical continuity of grounding equipment can be verified using a standard multimeter or a specialized continuity tester. By placing one node on the fabric matrix and the other on the grounding pin, a closed circuit should be confirmed."
  },
  {
    question: "Do you provide technical support for setup?",
    answer: "Yes, our support team is available to assist with any technical inquiries regarding outlet testing, conductivity verification, or optimal setup configurations for your specific living environment."
  }
];

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inputStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    padding: '20px 0',
    fontSize: '1rem',
    color: '#1A1A1A',
    outline: 'none',
    transition: 'all 0.4s ease',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '40px',
    color: '#3B5233',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{ backgroundColor: '#FDFDFD', minHeight: '100vh', color: '#1A1A1A' }}>

      {/* Cinematic Header */}
      <header style={{ height: '50vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <img src="/assets/banner-5.jpg" alt="Contact EarthSync" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), #FDFDFD)' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, letterSpacing: '-0.02em', color: 'white', textShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
          >
            LET'S SYNC.
          </motion.h1>
        </div>
      </header>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(50px, 5vw, 70px) 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 5vw, 60px)' }}>

          {/* Info Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', display: 'block', marginBottom: '30px' }}>Contact Details</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: 'clamp(25px, 3vw, 40px)', lineHeight: 1.1 }}>Reach out to our <br /> rest experts.</h2>

            <a href="mailto:service@earthsyncessential.com" style={contactItemStyle} className="contact-hover">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#E9EDE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={24} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase', fontWeight: 700 }}>Email us</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>service@earthsyncessential.com</span>
              </div>
            </a>

            <a href="tel:+19085732722" style={contactItemStyle} className="contact-hover">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#E9EDE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={24} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase', fontWeight: 700 }}>Call us</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>+1 9085732722</span>
              </div>
            </a>

            <div style={contactItemStyle} className="contact-hover">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#E9EDE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={24} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase', fontWeight: 700 }}>Visit us</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>2360 Lakewood Road, Toms River, NJ 08755</span>
              </div>
            </div>

            <div style={{ marginTop: '80px' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase', fontWeight: 700, marginBottom: '20px' }}>Follow our journey</span>
              <div style={{ display: 'flex', gap: '20px' }}>
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, color: '#3B5233' }}
                    style={{ color: '#1A1A1A', transition: 'color 0.3s ease' }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              backgroundColor: 'white', 
              padding: '60px', 
              borderRadius: '40px', 
              boxShadow: '0 40px 80px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <div style={{ width: '100px', height: '100px', backgroundColor: '#E9EDE7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 40px' }}>
                    <CheckCircle2 size={50} color="#3B5233" />
                  </div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '20px' }}>Message Received.</h3>
                  <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '40px' }}>
                    Our rest experts have been notified. <br /> Expect a synchronization within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    style={{ 
                      backgroundColor: '#3B5233', 
                      color: 'white', 
                      border: 'none', 
                      padding: '18px 40px', 
                      borderRadius: '100px', 
                      fontWeight: 700, 
                      cursor: 'pointer' 
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  action="https://formspree.io/service@earthsyncessential.com"
                  method="POST"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
                >
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Full Name" 
                      required
                      style={inputStyle} 
                    />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email Address" 
                      required
                      style={inputStyle} 
                    />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <select 
                      name="type"
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    >
                      <option>Product Question</option>
                      <option>Order Status</option>
                      <option>Partnership</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <textarea 
                      name="message"
                      placeholder="How can we help?" 
                      rows="4" 
                      required
                      style={{ ...inputStyle, resize: 'none' }}
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      backgroundColor: '#3B5233',
                      color: 'white',
                      border: 'none',
                      padding: '24px',
                      borderRadius: '100px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '15px',
                      cursor: 'pointer',
                      marginTop: '20px',
                      boxShadow: '0 20px 40px rgba(59, 82, 51, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <>Send Message <Send size={18} /></>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <FAQ items={contactFAQs} title="Support FAQ" />

      {/* Footer Copy */}
      <footer style={{ padding: 'clamp(40px, 4vw, 60px) 24px', borderTop: '1px solid #eee', textAlign: 'center' }}>
        <img src="/assets/logo-1.png" alt="EarthSync" style={{ height: '40px', marginBottom: '20px', opacity: 0.5 }} />
        <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>© 2026 EarthSync Essentials. All rights reserved.</p>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-hover:hover div {
          background-color: #3B5233 !important;
          color: white !important;
          transform: scale(1.1);
        }
        input:focus, textarea:focus {
          border-bottom-color: #3B5233 !important;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default Contact;
