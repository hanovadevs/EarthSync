import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, ExternalLink, Info, Check, ArrowLeft, Search, RefreshCw, Package } from 'lucide-react';
import { productsData } from '../data/products';

const Products = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = productsData
    .filter(p => filter === 'All' || p.category === filter)
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#FDFDFD', minHeight: '100vh', color: '#1A1A1A', paddingBottom: '100px' }}>
      
      {/* Cinematic Header with Background Video */}
      <div style={{ height: '50vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        
        {/* Video Background */}
        <video 
          src="/assets/Grounding Sheet Both Colors.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        
        {/* Cinematic Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3) 60%, #FDFDFD)', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 10, padding: '0 24px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none', marginBottom: '25px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8 }}>
            <ArrowLeft size={12} /> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'white', marginBottom: '15px', letterSpacing: '-0.04em', textShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
          >
            THE COLLECTION
          </motion.h1>
          <p style={{ color: 'white', opacity: 0.9, fontSize: '1rem', fontWeight: 300, maxWidth: '500px', margin: '0 auto 30px', lineHeight: 1.5 }}>
            Precision-engineered grounding tools designed in the USA.
          </p>
          
          {/* Controls Bar Inside Header Overlay */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Search */}
            <div style={{ position: 'relative', width: '260px' }}>
              <Search size={16} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="text" 
                placeholder="Search collection..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '12px 15px 12px 40px', borderRadius: '100px', border: 'none', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', fontSize: '0.85rem', outline: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '6px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '5px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)' }}>
              {['All', 'Sheets', 'Mats', 'Accessories'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '8px 22px',
                    borderRadius: '100px',
                    border: 'none',
                    backgroundColor: filter === cat ? 'white' : 'transparent',
                    color: filter === cat ? '#1A1A1A' : 'white',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section style={{ padding: 'clamp(40px, 8vw, 80px) clamp(15px, 3vw, 24px)', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="responsive-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'clamp(20px, 3vw, 30px)' }}>
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                onMouseEnter={() => setIsHovered(product.id)}
                onMouseLeave={() => setIsHovered(null)}
                className="card-hover"
                style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: isHovered === product.id ? '0 40px 80px rgba(0,0,0,0.08)' : '0 10px 30px rgba(0,0,0,0.02)',
                  border: '1px solid #f2f2f2',
                  position: 'relative',
                  transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Visual Badge */}
                <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', color: '#3B5233', padding: '8px 16px', borderRadius: '100px', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.1em', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2D8A2D' }} />
                  IN STOCK
                </div>

                <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#F9F9F9' }}>
                  <motion.img 
                    animate={{ scale: isHovered === product.id ? 1.1 : 1 }}
                    transition={{ duration: 0.8 }}
                    src={product.mainImage} 
                    alt={product.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                <div style={{ padding: '25px' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#A3B18A', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>{product.category}</span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: '0 0 10px', lineHeight: 1.2, color: '#1A1A1A' }}>{product.title}</h3>
                    <span style={{ fontWeight: 900, color: '#3B5233', fontSize: '1.4rem' }}>{product.price}</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
                    {product.features.slice(0, 2).map(f => (
                      <span key={f} style={{ fontSize: '0.6rem', backgroundColor: '#F3F6F2', color: '#3B5233', padding: '6px 12px', borderRadius: '8px', fontWeight: 700, border: '1px solid #E9EEE8' }}>
                        {f.split(' ')[0]} {f.split(' ')[1]}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Link 
                      to={`/product/${product.id}`}
                      className="btn"
                      style={{ 
                        flex: 1,
                        padding: '12px 0',
                        fontSize: '0.75rem',
                        backgroundColor: '#1A1A1A',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '12px'
                      }}
                    >
                      DETAILS
                    </Link>
                    <a 
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{ 
                        flex: 1,
                        padding: '12px 0',
                        fontSize: '0.75rem',
                        backgroundColor: '#3B5233',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      SHOP <ShoppingCart size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
};

export default Products;
