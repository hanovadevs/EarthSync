import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingCart, ShieldCheck, Zap, Package, Info, CheckCircle2, AlertCircle, RefreshCw, ChevronRight, Play } from 'lucide-react';
import { productsData } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);
  const [activeMedia, setActiveMedia] = useState(0); // 0 is video if exists, then images
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleMouseMove = (e) => {
    if (!imgRef.current || activeMedia === 0 && product.video) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y });
  };

  if (!product) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Product not found.</h2>
      </div>
    );
  }

  const hasVideo = !!product.video;
  const mediaList = hasVideo ? [{ type: 'video', url: product.video }, ...product.images.map(img => ({ type: 'image', url: img }))] : product.images.map(img => ({ type: 'image', url: img }));

  return (
    <div style={{ backgroundColor: '#FDFDFD', minHeight: '100vh', color: '#1A1A1A' }}>

      {/* Spacer for fixed navbar */}
      <div style={{ height: '90px' }} />


      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(20px, 5vw, 40px) 24px' }}>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1fr 1fr', 
          gap: 'clamp(30px, 6vw, 60px)', 
          marginBottom: 'clamp(40px, 8vw, 80px)' 
        }}>
          
          {/* Gallery */}
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '15px' }}>
            <div style={{ display: 'flex', flexDirection: window.innerWidth < 640 ? 'row' : 'column', gap: '10px', flexWrap: 'wrap' }}>
              {mediaList.map((item, i) => (
                <motion.div 
                  key={i}
                  onClick={() => setActiveMedia(i)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    width: 'clamp(50px, 10vw, 65px)', 
                    height: 'clamp(50px, 10vw, 65px)', 
                    borderRadius: '12px', 
                    overflow: 'hidden', 
                    cursor: 'pointer',
                    border: activeMedia === i ? '2px solid #3B5233' : '1px solid #eee',
                    position: 'relative',
                    transition: 'border 0.3s ease',
                    boxShadow: activeMedia === i ? '0 5px 15px rgba(59, 82, 51, 0.1)' : 'none'
                  }}
                >
                  {item.type === 'video' ? (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <Play size={20} color="white" fill="white" />
                    </div>
                  ) : (
                    <img src={item.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </motion.div>
              ))}
            </div>

            <div 
              ref={imgRef}
              onMouseEnter={() => !mediaList[activeMedia].type === 'video' && setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
              style={{ 
                flex: 1, 
                height: 'clamp(300px, 40vh, 500px)', 
                borderRadius: '24px', 
                overflow: 'hidden', 
                backgroundColor: '#F9F9F9', 
                border: '1px solid #eee',
                position: 'relative',
                cursor: mediaList[activeMedia].type === 'video' ? 'default' : 'crosshair'
              }}
            >
              <AnimatePresence mode="wait">
                {mediaList[activeMedia].type === 'video' ? (
                  <motion.div
                    key="video-player"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <video 
                      src={mediaList[activeMedia].url} 
                      controls 
                      autoPlay 
                      muted
                      loop
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </motion.div>
                ) : (
                  <motion.img 
                    key={mediaList[activeMedia].url}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      scale: isZooming ? 2.2 : 1,
                      transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      scale: { type: 'tween', duration: 0.2 },
                      opacity: { duration: 0.4 }
                    }}
                    src={mediaList[activeMedia].url} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                )}
              </AnimatePresence>
              {!isZooming && mediaList[activeMedia].type === 'image' && window.innerWidth > 768 && (
                <div style={{ position: 'absolute', bottom: '20px', right: '20px', backgroundColor: 'rgba(255,255,255,0.8)', padding: '8px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, pointerEvents: 'none', border: '1px solid #eee' }}>
                   HOVER TO ZOOM
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ paddingTop: '10px' }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#A3B18A', textTransform: 'uppercase', letterSpacing: '0.3em', display: 'block', marginBottom: '15px' }}>
              Clinical Grade Earthing
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '15px', letterSpacing: '-0.02em', color: '#1A1A1A' }}>
              {product.title}
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#666', fontWeight: 300, marginBottom: '25px', lineHeight: 1.6 }}>
              {product.subtitle}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
              <div style={{ backgroundColor: '#F0F4EF', padding: '8px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', color: '#3B5233', fontWeight: 800, fontSize: '0.7rem', border: '1px solid #E9EEE8' }}>
                <ShieldCheck size={18} /> 1-YEAR WARRANTY
              </div>
            </div>

            <motion.a 
              href={product.amazonLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                width: '100%', 
                padding: 'clamp(16px, 3vw, 24px)', 
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
                borderRadius: '20px',
                backgroundColor: '#3B5233',
                color: 'white'
              }}
            >
              PURCHASE ON AMAZON <ShoppingCart size={22} style={{ marginLeft: '12px' }} />
            </motion.a>

            <div style={{ marginTop: 'clamp(30px, 6vw, 50px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(15px, 4vw, 30px)' }}>
               <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F0F4EF', padding: '10px', borderRadius: '10px' }}>
                    <Zap size={18} color="#3B5233" />
                  </div>
                  <div>
                    <span style={{ fontWeight: 800, fontSize: '0.75rem', display: 'block', color: '#1A1A1A' }}>Conductivity</span>
                    <span style={{ fontSize: '0.7rem', color: '#888' }}>10% Silver Matrix</span>
                  </div>
               </div>
               <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F0F4EF', padding: '10px', borderRadius: '10px' }}>
                    <RefreshCw size={18} color="#3B5233" />
                  </div>
                  <div>
                    <span style={{ fontWeight: 800, fontSize: '0.75rem', display: 'block', color: '#1A1A1A' }}>Material</span>
                    <span style={{ fontSize: '0.7rem', color: '#888' }}>Cotton Blend</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1.8fr 1fr', 
          gap: 'clamp(40px, 10vw, 80px)', 
          borderTop: '1px solid #eee', 
          paddingTop: 'clamp(40px, 8vw, 60px)' 
        }}>
          <div>
            <section style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px' }}>Product Overview</h2>
              <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.7, marginBottom: '30px' }}>
                {product.description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {product.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="#3B5233" style={{ marginTop: '3px' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#333' }}>{f}</span>
                  </div>
                ))}
              </div>
            </section>
            <section style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px' }}>Setup Instructions</h2>
              <div style={{ display: 'grid', gap: '15px' }}>
                {product.setup.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px', padding: '20px', backgroundColor: '#F9F9F9', borderRadius: '18px' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#A3B18A', opacity: 0.5 }}>{s.step}</span>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '5px' }}>{s.title}</h4>
                      <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.5 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside>
            <div style={{ backgroundColor: '#1A1A1A', padding: '30px', borderRadius: '24px', color: 'white', marginBottom: '30px' }}>
               <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '20px', color: '#A3B18A' }}>Specifications</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {Object.entries(product.details).map(([key, val]) => (
                    <div key={key} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                      <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#A3B18A', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>{key}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{val}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div style={{ padding: '30px', borderRadius: '24px', border: '1px solid #eee' }}>
               <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '20px' }}>Included in Kit</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.kit.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', fontWeight: 600 }}>
                      <Package size={14} color="#3B5233" /> {item}
                    </div>
                  ))}
               </div>
            </div>
          </aside>
        </div>
      </main>

      <footer style={{ padding: '80px 24px', backgroundColor: '#F9F9F9', textAlign: 'center' }}>
          <img src="/assets/logo-1.png" alt="Logo" style={{ height: '35px', marginBottom: '25px' }} />
          <p style={{ color: '#999', fontSize: '0.7rem', letterSpacing: '0.2em' }}>EARTHSYNC ESSENTIALS — DESIGNED IN THE USA</p>
      </footer>
    </div>
  );
};

export default ProductDetail;
