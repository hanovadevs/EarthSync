import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Twitter, Linkedin, Send, ArrowLeft, MapPin } from 'lucide-react';
import FAQ from './FAQ';

const contactFAQs = [
  {
    question: "How long does shipping take?",
    answer: "Most orders are processed within 24 hours. Standard shipping typically takes 3-5 business days within the continental US. International shipping varies by location but generally takes 7-14 days."
  },
  {
    question: "Do you offer a trial period?",
    answer: "Yes! We offer a 30-night 'Sync Guarantee'. If you don't feel a measurable difference in your sleep quality, you can return your sheets for a full refund."
  },
  {
    question: "How do I wash my grounding sheets?",
    answer: "Wash in warm water with a mild liquid detergent. Avoid using bleach, fabric softeners, or whitening detergents, as these can coat the silver fibers and reduce their conductivity over time."
  }
];

const Contact = () => {
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
          <img src="/assets/Banner 5.jpg" alt="Contact EarthSync" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), #FDFDFD)' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none', marginBottom: '30px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            <ArrowLeft size={16} /> Return Home
          </Link>
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

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '100px' }}>

          {/* Info Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', display: 'block', marginBottom: '30px' }}>Contact Details</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', lineHeight: 1.1 }}>Reach out to our <br /> rest experts.</h2>

            <a href="mailto:service@earthsyncessentials.com" style={contactItemStyle} className="contact-hover">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#E9EDE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={24} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase', fontWeight: 700 }}>Email us</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>service@earthsyncessentials.com</span>
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
                <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>2360 lakewood right, Tom's river nj 08755</span>
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
            style={{ backgroundColor: 'white', padding: '60px', borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.05)' }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ position: 'relative' }}>
                <input type="text" placeholder="Full Name" style={inputStyle} />
              </div>
              <div style={{ position: 'relative' }}>
                <input type="email" placeholder="Email Address" style={inputStyle} />
              </div>
              <div style={{ position: 'relative' }}>
                <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                  <option>Inquiry Type</option>
                  <option>Product Question</option>
                  <option>Order Status</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div style={{ position: 'relative' }}>
                <textarea placeholder="How can we help?" rows="4" style={{ ...inputStyle, resize: 'none' }}></textarea>
              </div>

              <motion.button
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
                  boxShadow: '0 20px 40px rgba(59, 82, 51, 0.2)'
                }}
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

      <FAQ items={contactFAQs} title="Support FAQ" />

      {/* Footer Copy */}
      <footer style={{ padding: '80px 24px', borderTop: '1px solid #eee', textAlign: 'center' }}>
        <img src="/assets/Logo (1).png" alt="EarthSync" style={{ height: '40px', marginBottom: '20px', opacity: 0.5 }} />
        <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>© 2026 EarthSync Essentials. All rights reserved.</p>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-hover:hover div {
          background-color: #3B5233 !important;
          color: white !important;
          transform: scale(1.1);
        }
        input:focus {
          border-bottom-color: #3B5233 !important;
        }
      `}} />
    </div>
  );
};

export default Contact;
