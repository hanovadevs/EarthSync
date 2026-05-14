import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { productsData } from '../data/products';

const HomeProducts = () => {
  const [isHovered, setIsHovered] = useState(null);

  // We'll just show the first 3 or 4 products on the homepage, or maybe all of them since there are only 4.
  const featuredProducts = productsData.slice(0, 4);

  return (
    <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', backgroundColor: '#FDFDFD' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 4vw, 50px)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5em', color: '#3B5233', display: 'block', marginBottom: '20px' }}>Our Collection</span>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '20px' }}>Products</h2>
          <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Precision-engineered grounding tools designed to restore your biological connection to the Earth.
          </p>
        </div>

        <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'clamp(20px, 3vw, 30px)' }}>
          <AnimatePresence mode="popLayout">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
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
                        borderRadius: '12px',
                        textAlign: 'center'
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
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/products" style={{
             padding: '18px 40px',
             backgroundColor: 'transparent',
             border: '1px solid #3B5233',
             color: '#3B5233',
             borderRadius: '100px',
             fontWeight: 700,
             fontSize: '0.9rem',
             textTransform: 'uppercase',
             letterSpacing: '0.2em',
             cursor: 'pointer',
             textDecoration: 'none',
             display: 'inline-block'
          }}>
             VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
