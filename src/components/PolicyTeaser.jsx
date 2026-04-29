import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Truck, RotateCcw, Award, Lock } from 'lucide-react';

const PolicyTeaser = () => {
  const quickLinks = [
    { name: "Shipping", icon: <Truck size={16} /> },
    { name: "Returns", icon: <RotateCcw size={16} /> },
    { name: "Warranty", icon: <ShieldCheck size={16} /> },
    { name: "Patents", icon: <Award size={16} /> },
    { name: "Privacy", icon: <Lock size={16} /> }
  ];

  return (
    <section style={{ padding: '100px 24px', backgroundColor: '#F9F9F9', borderTop: '1px solid #eee' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3B5233', marginBottom: '20px' }}>
            <ShieldCheck size={24} />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em' }}>Trust & Transparency</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '25px', color: '#1A1A1A' }}>Our Commitment to You.</h2>
          <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '40px' }}>
            We believe that a restorative experience starts with total peace of mind. From Amazon-backed global logistics to our proprietary Silver-Matrix™ warranty, every aspect of your EarthSync journey is protected by clear, fair, and transparent policies.
          </p>
          <Link 
            to="/policy" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              backgroundColor: '#1A1A1A', 
              color: 'white', 
              padding: '18px 36px', 
              borderRadius: '100px', 
              textDecoration: 'none', 
              fontWeight: 800, 
              fontSize: '0.9rem',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            View Full Policies <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ backgroundColor: 'white', padding: '50px', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.05)', border: '1px solid #eee' }}
        >
          <h4 style={{ fontWeight: 900, marginBottom: '30px', fontSize: '1.2rem', color: '#1A1A1A' }}>Quick Access</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {quickLinks.map((link, i) => (
              <Link 
                key={link.name} 
                to="/policy" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '15px 20px', 
                  borderRadius: '16px', 
                  backgroundColor: '#F8F8F8', 
                  color: '#444', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem', 
                  fontWeight: 600,
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.backgroundColor = '#3B5233';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.backgroundColor = '#F8F8F8';
                  e.currentTarget.style.color = '#444';
                }}
              >
                <span style={{ opacity: 0.6 }}>{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#F0F4EF', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3B5233' }} />
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3B5233', margin: 0 }}>Amazon A-to-z Guarantee Applied</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PolicyTeaser;
