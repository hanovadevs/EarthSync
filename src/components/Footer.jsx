import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Send, MapPin, Mail, Phone, ExternalLink, ShoppingBag } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkStyle = {
    color: '#666',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    display: 'inline-block',
    position: 'relative'
  };

  const columnTitleStyle = {
    fontSize: '0.7rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: '#1A1A1A',
    marginBottom: '25px',
    display: 'block'
  };

  return (
    <footer style={{ backgroundColor: '#FDFDFD', borderTop: '1px solid #eee', padding: '80px 24px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img src="/assets/Logo (1).png" alt="EarthSync Logo" style={{ height: '35px', width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                <span style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.1em', color: '#3B5233' }}>EARTHSYNC</span>
                <span style={{ fontWeight: 400, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#3B5233', opacity: 0.8, marginTop: '3px' }}>ESSENTIALS</span>
              </div>
            </div>
            <p style={{ color: '#888', lineHeight: '1.6', fontSize: '0.9rem', maxWidth: '300px', marginBottom: '25px' }}>
              Redefining recovery through the Earth's natural electrical field. Woven with pure silver.
            </p>
            
            {/* Amazon Store Button */}
            <motion.a
              href="https://www.amazon.com/stores/EarthSyncEssentials/page/17EE8D57-DF6C-413E-AB1A-617D1EEBB305?lp_asin=B0GFBCKYCQ&ref_=ast_bln"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, backgroundColor: '#3B5233', color: 'white' }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                padding: '12px 24px', 
                backgroundColor: '#1A1A1A', 
                color: 'white', 
                borderRadius: '12px', 
                textDecoration: 'none', 
                fontSize: '0.85rem', 
                fontWeight: 700,
                marginBottom: '25px',
                transition: 'background-color 0.3s ease'
              }}
            >
              <ShoppingBag size={18} /> Visit Amazon Store <ExternalLink size={14} />
            </motion.a>

            <div style={{ display: 'flex', gap: '15px' }}>
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: '#3B5233' }}
                  style={{ color: '#CCC', transition: 'color 0.3s' }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <span style={columnTitleStyle}>The Collection</span>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Grounding Sheets', 'Recovery Mats', 'Pillow Cases', 'Accessories'].map(item => (
                <li key={item}>
                  <Link to="/products" className="footer-link" style={linkStyle}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <span style={columnTitleStyle}>Deep Dive</span>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'The Science', path: '/science' },
                { name: 'Research Archive', path: '/research' },
                { name: 'About Us', path: '/about' },
                { name: 'Policies', path: '/policy' },
                { name: 'Contact Hub', path: '/contact' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="footer-link" style={linkStyle}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <span style={columnTitleStyle}>Connect</span>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '0.85rem' }}>
                <Mail size={14} color="#3B5233" /> service@earthsyncessentials.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '0.85rem' }}>
                <Phone size={14} color="#3B5233" /> +1 9085732722
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '0.85rem', lineHeight: '1.4' }}>
                <MapPin size={14} color="#3B5233" /> 2360 lakewood right, Tom's river nj 08755
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #f5f5f5', paddingTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '30px', fontSize: '0.75rem', fontWeight: 600, color: '#999' }}>
            <span style={{ color: '#1A1A1A', fontWeight: 800 }}>© {currentYear} EARTHSYNC</span>
            <Link to="/policy" style={{ color: 'inherit', textDecoration: 'none' }}>PRIVACY</Link>
            <Link to="/policy" style={{ color: 'inherit', textDecoration: 'none' }}>TERMS</Link>
          </div>

          {/* Mini Newsletter */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="email" 
              placeholder="Newsletter" 
              style={{ width: '100%', padding: '12px 20px', borderRadius: '100px', border: '1px solid #eee', backgroundColor: '#F9F9F9', fontSize: '0.85rem', outline: 'none' }}
            />
            <button style={{ position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#3B5233', color: 'white', border: 'none', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Send size={14} />
            </button>
          </div>
        </div>

        {/* Certification Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px', opacity: 0.25 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" style={{ height: '15px', filter: 'grayscale(100%)' }} />
          <span style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em' }}>AUTHORIZED DISTRIBUTOR</span>
          <span style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em' }}>99.9% PURE SILVER</span>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link:hover {
          color: #3B5233 !important;
          transform: translateX(4px);
        }
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -1px;
          left: 0;
          background-color: #3B5233;
          transition: width 0.3s ease;
        }
        .footer-link:hover::after {
          width: 100%;
        }
      `}} />
    </footer>
  );
};

export default Footer;
