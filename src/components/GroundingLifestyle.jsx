import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Dumbbell, Plane, Monitor } from 'lucide-react';

const lifestyleBlocks = [
  {
    icon: Sun,
    label: 'Morning Practice',
    title: 'Morning Ritual',
    text: "Start your day grounded. Walk barefoot on grass, soil, or sand for 15–20 minutes. This morning practice sets your circadian clock and floods your system with Earth's electrons before the day's stress begins.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Barefoot on grass at sunrise',
  },
  {
    icon: Dumbbell,
    label: 'Athletic Recovery',
    title: 'Post-Workout Recovery',
    text: 'Athletes and fitness enthusiasts are using grounding mats during stretching and cool-down. Studies show grounded subjects recover from muscle soreness up to 3× faster than ungrounded controls.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Person stretching after workout',
  },
  {
    icon: Plane,
    label: 'Recovery On The Go',
    title: 'Travel & Jet Lag',
    text: 'Frequent flyers report dramatically shorter jet lag recovery when they ground themselves upon arrival. Connecting to the local Earth frequency helps resynchronize your internal clock with the new time zone.',
    image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Sunset travel scene',
  },
  {
    icon: Monitor,
    label: 'Workplace Wellness',
    title: 'Desk & Office',
    text: 'Our grounding mats can be placed under your desk. Even through socks, proximity grounding can help reduce the ambient EMF exposure from computers, Wi-Fi routers, and office electronics.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Modern workspace with desk',
  },
];

const GroundingLifestyle = () => {
  return (
    <section style={{ padding: 'clamp(80px, 8vw, 140px) 24px', backgroundColor: '#FDFDFD', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(60px, 6vw, 100px)' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '0.7rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            color: '#3B5233',
            backgroundColor: '#EEF2ED',
            padding: '10px 24px',
            borderRadius: '100px',
            marginBottom: '28px',
          }}>
            Lifestyle Integration
          </span>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            color: '#1A1A1A',
          }}>
            Grounding Beyond <br />
            <span style={{ color: '#A3B18A' }}>The Bedroom</span>
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            lineHeight: 1.8,
            color: '#666',
            maxWidth: '640px',
            margin: '0 auto',
            fontWeight: 300,
          }}>
            Grounding isn't limited to sleep. Discover how to integrate Earth's natural healing energy into every part of your day.
          </p>
        </motion.div>

        {/* Alternating Content Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(60px, 8vw, 120px)' }}>
          {lifestyleBlocks.map((block, index) => {
            const isReversed = index % 2 !== 0;
            const Icon = block.icon;

            return (
              <div
                key={block.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 'clamp(30px, 4vw, 60px)',
                  alignItems: 'center',
                }}
              >
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                  style={{ order: isReversed ? 2 : 1, position: 'relative' }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: '-12px',
                    backgroundColor: '#F0F4EF',
                    borderRadius: '48px',
                    zIndex: 0,
                  }} />
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    style={{
                      width: '100%',
                      height: 'clamp(320px, 35vw, 480px)',
                      objectFit: 'cover',
                      borderRadius: '40px',
                      position: 'relative',
                      zIndex: 1,
                      boxShadow: '0 30px 80px rgba(59, 82, 51, 0.12)',
                    }}
                  />

                  {/* Floating Index Badge */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      top: 'clamp(10px, 2vw, 24px)',
                      right: isReversed ? 'auto' : 'clamp(10px, 2vw, 24px)',
                      left: isReversed ? 'clamp(10px, 2vw, 24px)' : 'auto',
                      backgroundColor: '#3B5233',
                      color: 'white',
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                      boxShadow: '0 12px 30px rgba(59, 82, 51, 0.3)',
                      fontSize: '1.1rem',
                      fontWeight: 900,
                    }}
                  >
                    0{index + 1}
                  </motion.div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                  style={{ order: isReversed ? 1 : 2 }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: '#EEF2ED',
                    padding: '8px 18px 8px 10px',
                    borderRadius: '100px',
                    marginBottom: '20px',
                  }}>
                    <div style={{
                      backgroundColor: '#3B5233',
                      padding: '6px',
                      borderRadius: '50%',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Icon size={14} />
                    </div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#3B5233',
                    }}>
                      {block.label}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    marginBottom: '20px',
                    color: '#1A1A1A',
                  }}>
                    {block.title}
                  </h3>

                  <p style={{
                    fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                    lineHeight: 1.85,
                    color: '#555',
                    fontWeight: 300,
                    maxWidth: '480px',
                  }}>
                    {block.text}
                  </p>

                  {/* Subtle accent bar */}
                  <div style={{
                    width: '50px',
                    height: '4px',
                    backgroundColor: '#A3B18A',
                    borderRadius: '100px',
                    marginTop: '28px',
                  }} />
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GroundingLifestyle;
