import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={false}
      animate={{ backgroundColor: isOpen ? 'rgba(59, 82, 51, 0.03)' : (isHovered ? 'rgba(0,0,0,0.01)' : 'transparent') }}
      style={{ 
        marginBottom: '15px', 
        borderRadius: '20px', 
        border: '1px solid',
        borderColor: isOpen ? 'rgba(59, 82, 51, 0.2)' : 'rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '25px 30px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '1.15rem', fontWeight: 700, color: isOpen ? '#3B5233' : '#1A1A1A', transition: 'color 0.3s ease' }}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? '#3B5233' : '#F3F6F2', color: isOpen ? 'white' : '#3B5233' }}
          transition={{ duration: 0.3 }}
          style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div style={{ padding: '0 30px 30px', color: '#555', lineHeight: 1.8, fontSize: '1rem', maxWidth: '800px' }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = ({ items, title = "Frequently Asked Questions" }) => {
  return (
    <section style={{ padding: '120px 24px', backgroundColor: '#FDFDFD' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', display: 'block', marginBottom: '20px' }}>Common Queries</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#1A1A1A' }}>{title}</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {items.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
