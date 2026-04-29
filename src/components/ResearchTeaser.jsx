import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const ResearchTeaser = () => {
  return (
    <section style={{ padding: '100px 24px', backgroundColor: '#F6F6F6', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Element */}
      <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', backgroundColor: '#EEF2ED', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.5 }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: 'white', padding: '12px 25px', borderRadius: '100px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '40px' }}
        >
           <BookOpen size={20} color="#3B5233" />
           <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#3B5233' }}>THE ARCHIVE</span>
        </motion.div>

        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '25px', letterSpacing: '-0.03em' }}>
          Grounding Is Built <br /> On <span style={{ color: '#3B5233' }}>Decades Of Discovery</span>
        </h2>
        
        <p style={{ fontSize: '1.2rem', color: '#666', fontWeight: 300, maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Explore the origins of earthing technology, from Clinton Ober’s 1998 discovery to the latest clinical evolutions in bio-electrical wellness.
        </p>

        <Link 
          to="/research" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '15px', 
            backgroundColor: '#1A1A1A', 
            color: 'white', 
            padding: '20px 50px', 
            borderRadius: '100px', 
            textDecoration: 'none', 
            fontWeight: 800, 
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          EXPLORE THE RESEARCH <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default ResearchTeaser;
