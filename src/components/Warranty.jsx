import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Info, Search, CheckCircle2, AlertCircle, Loader2, ArrowRight, Smartphone, Calendar, Hash } from 'lucide-react';
import FAQ from './FAQ';

// REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXQnwY_7trJBtA--x6ElszYcDaFIVX9fzCEkOKfr2DZApCQus29gZBjMGVDc_yccIX/exec';

const Warranty = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serialNumber: '',
    purchaseDate: '',
    productName: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE') {
      setStatus('error');
      setErrorMessage('System configuration incomplete. Please contact support.');
      return;
    }

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        // We stringify the payload to send it to Apps Script doPost(e)
        body: JSON.stringify({
          action: 'activate',
          ...formData
        })
      });

      const data = await response.json();

      if (data.status === 'success') {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Activation failed. Please check your serial number.');
      }
    } catch (error) {
      console.error('Error submitting warranty:', error);
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: '#F9F9F9',
    border: '1px solid #E9EEE8',
    padding: '18px 24px',
    borderRadius: '16px',
    fontSize: '1rem',
    color: '#1A1A1A',
    outline: 'none',
    transition: 'all 0.3s ease',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 800,
    color: '#1A1A1A',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  return (
    <div style={{ backgroundColor: '#FDFDFD', minHeight: '100vh', color: '#1A1A1A' }}>

      {/* Spacer for fixed navbar */}
      <div style={{ height: '90px' }} />

      {/* Hero Section */}
      <header style={{ backgroundColor: '#1A1A1A', color: 'white', padding: 'clamp(60px, 10vw, 120px) 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '120%', height: '200%', background: 'radial-gradient(circle at center, rgba(59, 82, 51, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '100px', marginBottom: '30px' }}>
            <ShieldCheck size={20} color="#A3B18A" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', color: '#A3B18A' }}>Official Guarantee</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Activate Your <br /> Warranty
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', opacity: 0.7, fontWeight: 300, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Secure your investment. Register your EarthSync product today to activate your 1-year clinical performance guarantee.
          </p>
        </motion.div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(40px, 8vw, 80px) 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1.2fr 1fr', gap: 'clamp(40px, 8vw, 80px)' }}>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ backgroundColor: 'white', padding: 'clamp(30px, 5vw, 50px)', borderRadius: '32px', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', border: '1px solid #F0F4EF' }}>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '40px 0' }}
                  >
                    <div style={{ width: '80px', height: '80px', backgroundColor: '#EEF4EC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>
                      <CheckCircle2 size={40} color="#3B5233" />
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>Warranty Activated</h3>
                    <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '30px' }}>
                      Thank you, {formData.name}. Your product serial number <strong>{formData.serialNumber}</strong> has been successfully registered in our secure database.
                    </p>
                    <button
                      onClick={() => { setStatus('idle'); setFormData({ name: '', phone: '', email: '', serialNumber: '', purchaseDate: '', productName: '' }); }}
                      style={{ backgroundColor: '#1A1A1A', color: 'white', border: 'none', padding: '16px 32px', borderRadius: '100px', fontWeight: 800, cursor: 'pointer', fontSize: '0.9rem' }}
                    >
                      Register Another Product
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
                  >
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '10px' }}>Registration Details</h2>

                    {status === 'error' && (
                      <div style={{ backgroundColor: '#FFF5F5', color: '#E53E3E', padding: '16px 20px', borderRadius: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.9rem', fontWeight: 500 }}>
                        <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          style={inputStyle}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          style={inputStyle}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Email Address (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div style={{ height: '1px', backgroundColor: '#eee', margin: '10px 0' }} />

                    <div>
                      <label style={labelStyle}>Product Serial Number *</label>
                      <div style={{ position: 'relative' }}>
                        <Hash size={20} color="#999" style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                          type="text"
                          name="serialNumber"
                          required
                          value={formData.serialNumber}
                          onChange={handleChange}
                          style={{ ...inputStyle, paddingLeft: '55px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em' }}
                          placeholder="ES-XXXX-XXXX"
                        />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#888', marginTop: '8px', display: 'block' }}>Found on the product tag or box barcode.</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={labelStyle}>Purchase Date *</label>
                        <input
                          type="date"
                          name="purchaseDate"
                          required
                          value={formData.purchaseDate}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Product Name (Optional)</label>
                        <input
                          type="text"
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          style={inputStyle}
                          placeholder="e.g. Queen Sheet"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        backgroundColor: '#3B5233',
                        color: 'white',
                        border: 'none',
                        padding: '20px',
                        borderRadius: '16px',
                        fontSize: '1rem',
                        fontWeight: 800,
                        cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        marginTop: '10px',
                        boxShadow: '0 10px 30px rgba(59, 82, 51, 0.2)',
                        transition: 'all 0.3s ease',
                        opacity: status === 'submitting' ? 0.7 : 1
                      }}
                    >
                      {status === 'submitting' ? (
                        <><Loader2 size={20} className="animate-spin" /> Verifying Serial...</>
                      ) : (
                        <>Activate Warranty <ArrowRight size={20} /></>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            <div style={{ backgroundColor: '#F0F4EF', padding: '30px', borderRadius: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Search size={24} color="#3B5233" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1A1A1A' }}>Where is my Serial Number?</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, marginBottom: '20px' }}>
                Your unique product serial number (starting with ES-) can be found in two locations:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#444' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#3B5233', borderRadius: '50%', marginTop: '8px' }} />
                  Printed on the care label attached to your grounding sheet.
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#3B5233', borderRadius: '50%', marginTop: '8px' }} />
                  On the barcode sticker located on the bottom of the packaging box.
                </li>
              </ul>
            </div>

            <div style={{ border: '1px solid #eee', padding: '30px', borderRadius: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <ShieldCheck size={24} color="#1A1A1A" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1A1A1A' }}>How Activation Works</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
                Every EarthSync Essentials product is rigorously tested for continuity and conductivity before shipping. By activating your warranty, you log your product into our clinical registry.
              </p>
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', fontWeight: 700, color: '#1A1A1A' }}>
                  <CheckCircle2 size={16} color="#3B5233" /> Database Verification
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', fontWeight: 700, color: '#1A1A1A' }}>
                  <CheckCircle2 size={16} color="#3B5233" /> 1-Year Conductive Guarantee
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', fontWeight: 700, color: '#1A1A1A' }}>
                  <CheckCircle2 size={16} color="#3B5233" /> Premium Customer Support Access
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        input:focus {
          border-color: #3B5233 !important;
          box-shadow: 0 0 0 4px rgba(59, 82, 51, 0.1);
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

export default Warranty;
