import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, Play, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('earthsync_has_loaded');
  });
  const [showVideo, setShowVideo] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('earthsync_has_loaded', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Navbar transitions based on scroll
  const navBg = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 0.9)"]);
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);
  const navTextColor = useTransform(scrollY, [0, 100], ["#FFFFFF", "#1A1A1A"]);
  const logoFilter = useTransform(scrollY, [0, 100], ["brightness(0) invert(1)", "brightness(1) invert(0)"]);
  
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 1.2, ease: [0.83, 0, 0.17, 1] }
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              backgroundColor: '#1A1A1A',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
            >
              <motion.img 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/Logo (1).png" 
                alt="Logo" 
                style={{ height: '80px', filter: 'brightness(0) invert(1)' }} 
              />
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.2em', display: 'block' }}>EARTHSYNC</span>
                <span style={{ fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.5em', opacity: 0.6 }}>ESSENTIALS</span>
              </div>
            </motion.div>
            
            <motion.div 
              style={{ 
                position: 'absolute', 
                bottom: '10%', 
                width: '100px', 
                height: '1px', 
                backgroundColor: 'rgba(255,255,255,0.2)',
                overflow: 'hidden'
              }}
            >
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ width: '40px', height: '100%', backgroundColor: 'white' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero-section" style={{ background: '#000' }}>
        {/* Background Image with Reveal Animation */}
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={!isLoading ? { scale: 1, opacity: 1 } : {}}
          style={{ scale: bgScale }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hero-bg"
        >
          <img
            src="/assets/DSC09998.JPG"
            alt="EarthSync Grounding"
          />
          <div className="hero-overlay" />
        </motion.div>

        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={!isLoading ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          style={{ 
            backgroundColor: navBg, 
            backdropFilter: navBlur, 
            color: navTextColor,
            padding: '20px 60px'
          }}
          className="navbar"
        >
          <a href="/" className="nav-logo" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <motion.img 
              style={{ filter: logoFilter, height: '60px', width: 'auto' }}
              src="/assets/Logo (1).png" 
              alt="Logo" 
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
              <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '0.1em' }}>EARTHSYNC</span>
              <span style={{ fontWeight: 400, fontSize: '0.6rem', letterSpacing: '0.4em', opacity: 0.8, marginTop: '4px' }}>ESSENTIALS</span>
            </div>
          </a>
          <div className="nav-links">
            <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Products</Link>
            <Link to="/science" style={{ color: 'inherit', textDecoration: 'none' }}>Science</Link>
            <Link to="/research" style={{ color: 'inherit', textDecoration: 'none' }}>Research</Link>
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
          </div>
          <Link to="/products" className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '0.75rem', textDecoration: 'none', display: 'inline-block' }}>
            Shop
          </Link>
        </motion.nav>

        {/* Hero Content with Staggered Entrance */}
        <div className="hero-content" style={{ paddingTop: '100px' }}>
          <div style={{ overflow: 'hidden', marginBottom: '15px' }}>
            <motion.span 
              initial={{ y: '100%' }}
              animate={!isLoading ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="label"
              style={{ 
                marginBottom: 0, 
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                fontSize: '0.75rem'
              }}
            >
              The Science of Better Sleep
            </motion.span>
          </div>
          
          <div style={{ overflow: 'hidden', marginBottom: '30px' }}>
            <motion.h1 
              initial={{ y: '100%' }}
              animate={!isLoading ? { y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
              className="hero-title"
              style={{ 
                marginBottom: 0,
                textShadow: '0 10px 30px rgba(0,0,0,0.4)',
                fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                lineHeight: '1.1'
              }}
            >
              RECONNECT <br />
              <span style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontStyle: 'italic', 
                fontWeight: 300,
                letterSpacing: '0.1em'
              }}>WITH NATURE</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
            className="hero-subtitle"
            style={{ 
              maxWidth: '600px', 
              margin: '0 auto 50px',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              fontSize: '1.2rem',
              lineHeight: '1.6',
              fontWeight: 300,
              opacity: 0.9
            }}
          >
            Clinical-grade grounding systems woven with 10% pure silver to synchronize your body with the Earth's natural restorative field.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
          >
            <Link to="/products" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              <Link2 size={18} style={{ marginRight: '8px' }} /> EXPLORE COLLECTION
            </Link>
            <button 
              className="btn btn-outline" 
              onClick={() => setShowVideo(true)}
            >
              <Play size={18} style={{ marginRight: '8px' }} /> WATCH FILM
            </button>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={!isLoading ? { opacity: 1 } : {}}
            transition={{ delay: 3, duration: 1 }}
            style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
          >
            <span style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.3em', opacity: 0.5, textTransform: 'uppercase' }}>Scroll</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, white, transparent)' }}
            />
          </motion.div>
        </div>

        {/* Video Modal Overlay */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 2000,
                backgroundColor: 'rgba(0,0,0,0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1000px',
                  aspectRatio: '16/9',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <button 
                  onClick={() => setShowVideo(false)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 10,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <X size={20} />
                </button>
                <video 
                  src="/assets/Grounding Sheet Both Colors.mp4" 
                  controls 
                  autoPlay 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>
              
              {/* Background click to close */}
              <div 
                style={{ position: 'absolute', inset: 0, zIndex: -1 }} 
                onClick={() => setShowVideo(false)} 
              />
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </>
  );
};

export default Hero;
