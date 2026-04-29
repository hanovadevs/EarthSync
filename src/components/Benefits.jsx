import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Moon } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Moon size={32} />,
      title: "Better Sleep",
      description: "Synchronize your circadian rhythm for deeper, more restorative sleep cycles."
    },
    {
      icon: <Zap size={32} />,
      title: "Reduced Inflammation",
      description: "Neutralize free radicals and reduce cortisol levels through direct earth connection."
    },
    {
      icon: <Shield size={32} />,
      title: "Natural Protection",
      description: "Shield your body from ambient EMFs while replenishing your body's electrical balance."
    }
  ];

  return (
    <section style={{ padding: '120px 24px', backgroundColor: '#F8F9F8' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', fontWeight: 700 }}>Why Grounding?</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '20px', color: '#1A1A1A' }}>Science Meets Serenity</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              style={{ 
                padding: '60px 40px', 
                backgroundColor: 'white', 
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ color: '#3B5233', marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                {benefit.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>{benefit.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontWeight: 300 }}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
