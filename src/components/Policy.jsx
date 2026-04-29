import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Truck, RotateCcw, FileText, Lock, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolicySection = ({ title, icon: Icon, children, bgColor, textColor = 'white', index }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 10%',
        backgroundColor: bgColor,
        color: textColor,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ maxWidth: '800px', zIndex: 2 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
            <Icon size={32} />
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', opacity: 0.6 }}>
            Section 0{index + 1}
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '40px', lineHeight: 1.1 }}>{title}</h2>
        <div style={{ fontSize: '1.15rem', lineHeight: 1.8, opacity: 0.8 }}>
          {children}
        </div>
      </motion.div>

      {/* Abstract Background Element */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ 
          position: 'absolute', 
          top: '-10%', 
          right: '-10%', 
          width: '600px', 
          height: '600px', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          zIndex: 1
        }}
      />
    </motion.section>
  );
};

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#1A1A1A' }}>
      
      {/* Header / Back Link */}
      <div style={{ position: 'fixed', top: '40px', left: '40px', zIndex: 100 }}>
        <Link to="/" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
          color: 'white', 
          textDecoration: 'none', 
          fontWeight: 700, 
          fontSize: '0.8rem', 
          backgroundColor: 'rgba(0,0,0,0.3)', 
          padding: '12px 24px', 
          borderRadius: '100px', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <ArrowLeft size={16} /> RETURN HOME
        </Link>
      </div>

      {/* 1. Shipping Policy */}
      <PolicySection 
        index={0}
        title="Shipping & Global Logistics" 
        icon={Truck} 
        bgColor="#1A1A1A"
      >
        <p style={{ marginBottom: '25px' }}>
          EarthSync Essentials leverages the world-class logistics network of Amazon to ensure rapid, secure delivery. Every order is processed with Amazon Prime-standard speed, including real-time tracking and localized fulfillment.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px' }}>• <strong>Domestic (US):</strong> 2-4 business days via Amazon Fulfillment.</li>
          <li style={{ marginBottom: '15px' }}>• <strong>International:</strong> Available in over 100 countries through Amazon Global Shipping.</li>
          <li>• <strong>Tracking:</strong> Real-time updates provided via the Amazon Dashboard and EarthSync confirmation.</li>
        </ul>
      </PolicySection>

      {/* 2. Return Policy */}
      <PolicySection 
        index={1}
        title="Hassle-Free Returns" 
        icon={RotateCcw} 
        bgColor="#3B5233"
      >
        <p style={{ marginBottom: '25px' }}>
          We stand by the transformative power of grounding. If you are not fully satisfied, our return process is handled through the official Amazon A-to-z Guarantee.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px' }}>• <strong>30-Day Window:</strong> Full refund eligibility within 30 days of receipt.</li>
          <li style={{ marginBottom: '15px' }}>• <strong>Seamless Process:</strong> Initiation occurs directly through your Amazon 'Orders' portal.</li>
          <li>• <strong>Quality Guarantee:</strong> Defective items are replaced immediately at zero cost to the customer.</li>
        </ul>
      </PolicySection>

      {/* 3. Warranty */}
      <PolicySection 
        index={2}
        title="Conductivity Warranty" 
        icon={ShieldCheck} 
        bgColor="#2D3E27"
      >
        <p style={{ marginBottom: '25px' }}>
          Our Silver-Matrix™ technology is designed for longevity. Unlike silver-coated sheets that lose potency, EarthSync provides a 2-year performance warranty on conductivity.
        </p>
        <p>
          We guarantee that your product will maintain a resistance of less than 100kΩ when used and cared for according to our official care instructions. Should the silver weave fail to conduct, we will provide a complete replacement.
        </p>
      </PolicySection>

      {/* 4. Patents & IP */}
      <PolicySection 
        index={3}
        title="Patents & Intellectual Property" 
        icon={Award} 
        bgColor="#1A1A1A"
      >
        <p style={{ marginBottom: '25px' }}>
          EarthSync Essentials is the sole owner of the Silver-Matrix™ weaving methodology. Our integration of pure silver thread into organic long-staple cotton is protected by multiple utility and design patents.
        </p>
        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
          Any unauthorized reproduction of our conductive grid patterns or safety resistor cable designs will be subject to legal action. EarthSync Essentials™ and Silver-Matrix™ are registered trademarks.
        </p>
      </PolicySection>

      {/* 5. Privacy & Terms */}
      <PolicySection 
        index={4}
        title="Privacy & Digital Safety" 
        icon={Lock} 
        bgColor="#FDFDFD"
        textColor="#1A1A1A"
      >
        <p style={{ marginBottom: '25px' }}>
          Your digital data is as important as your biological rest. EarthSync does not sell customer data. All transactional information is handled via Amazon's secure, PCI-compliant checkout system.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', fontSize: '0.95rem' }}>
          <div>
            <h4 style={{ fontWeight: 900, marginBottom: '15px' }}>Data Protection</h4>
            <p>We use SSL encryption and zero-knowledge storage for all direct correspondence.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 900, marginBottom: '15px' }}>Cookie Policy</h4>
            <p>Minimal cookies are used solely to improve the cinematic experience of this site.</p>
          </div>
        </div>
      </PolicySection>

      {/* Final CTA Footer Link */}
      <section style={{ padding: '100px 24px', textAlign: 'center', backgroundColor: '#FDFDFD', color: '#1A1A1A', borderTop: '1px solid #eee' }}>
        <img src="/assets/Logo (1).png" alt="EarthSync" style={{ height: '40px', marginBottom: '30px', opacity: 0.5 }} />
        <p style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.4em', color: '#3B5233' }}>STAY GROUNDED.</p>
      </section>

    </div>
  );
};

export default Policy;
