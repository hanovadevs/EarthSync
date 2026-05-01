import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/science', label: 'Science' },
  { to: '/research', label: 'Research' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Track scroll position for styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll-based transforms for all pages
  const navBg = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 0.95)"]);
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);
  const textColor = useTransform(scrollY, [0, 100], ["#FFFFFF", "#1A1A1A"]);
  const logoFilter = useTransform(scrollY, [0, 100], ["brightness(0) invert(1)", "brightness(1) invert(0)"]);

  return (
    <>
      <motion.nav
        initial={isHome ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: isHome ? 1.2 : 0 }}
        style={{
          backgroundColor: navBg,
          backdropFilter: navBlur,
          color: textColor,
          padding: 'clamp(10px, 2vw, 20px) clamp(20px, 5vw, 60px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
          transition: 'border-bottom 0.5s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.03)' : 'none',
        }}
        className="navbar"
      >
        {/* Dark gradient for visibility on light images before scroll */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
          opacity: scrolled ? 0 : 1,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
          zIndex: -1
        }} />
        <Link to="/" className="nav-logo" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: 'clamp(10px, 2vw, 20px)', textDecoration: 'none' }}>
          <motion.img
            style={{ filter: logoFilter, height: 'clamp(35px, 5vw, 60px)', width: 'auto' }}
            src="/assets/logo-1.png"
            alt="EarthSync Essentials Logo"
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
            <span style={{ fontWeight: 800, fontSize: 'clamp(0.7rem, 1.5vw, 1rem)', letterSpacing: '0.1em' }}>EARTHSYNC</span>
            <span style={{ fontWeight: 400, fontSize: 'clamp(0.4rem, 1vw, 0.6rem)', letterSpacing: '0.4em', opacity: 0.8, marginTop: '4px' }}>ESSENTIALS</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: 'inherit',
                textDecoration: 'none',
                opacity: location.pathname === link.to ? 1 : undefined,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Shop Button (Desktop) */}
        <Link
          to="/products"
          className="btn btn-primary nav-shop-btn"
          style={{
            padding: 'clamp(8px, 1.5vw, 12px) clamp(15px, 3vw, 32px)',
            fontSize: '0.7rem',
            textDecoration: 'none',
          }}
        >
          SHOP
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 1001,
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
                backdropFilter: 'blur(4px)',
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '280px',
                backgroundColor: 'white',
                zIndex: 1000,
                padding: '100px 40px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '-10px 0 40px rgba(0,0,0,0.1)',
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#1A1A1A',
                  padding: '8px',
                }}
              >
                <X size={24} />
              </button>

              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '16px 0',
                      color: location.pathname === link.to ? '#3B5233' : '#1A1A1A',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: location.pathname === link.to ? 800 : 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #f0f0f0',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: '30px' }}
              >
                <Link
                  to="/products"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                    backgroundColor: '#3B5233',
                    color: 'white',
                    borderRadius: '14px',
                  }}
                >
                  SHOP COLLECTION
                </Link>
              </motion.div>

              {/* Logo at bottom */}
              <div style={{ marginTop: 'auto', textAlign: 'center', opacity: 0.3 }}>
                <img src="/assets/logo-1.png" alt="" style={{ height: '30px' }} />
                <p style={{ fontSize: '0.6rem', marginTop: '8px', letterSpacing: '0.2em' }}>EARTHSYNC ESSENTIALS</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Inline styles for responsive behavior */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .nav-shop-btn {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
        }
      `}} />
    </>
  );
};

export default Navbar;
