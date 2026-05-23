import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Shield, Activity } from 'lucide-react';

const systems = [
  {
    icon: Brain,
    title: 'Nervous System',
    description:
      'Grounding shifts the autonomic nervous system from sympathetic (fight-or-flight) to parasympathetic (rest-and-digest) dominance, measurably reducing cortisol and promoting deep delta-wave sleep.',
    gradient: 'linear-gradient(135deg, #3B5233 0%, #5A7D50 100%)',
  },
  {
    icon: Heart,
    title: 'Circulatory System',
    description:
      "Earth's electrons increase the zeta potential of red blood cells, reducing blood viscosity by up to 270%. This improves oxygen delivery, lowers blood pressure, and supports cardiovascular health.",
    gradient: 'linear-gradient(135deg, #4A6741 0%, #A3B18A 100%)',
  },
  {
    icon: Shield,
    title: 'Immune System',
    description:
      'Free electrons from the Earth act as natural antioxidants, neutralizing reactive oxygen species (free radicals) that drive chronic inflammation — the root cause of most modern diseases.',
    gradient: 'linear-gradient(135deg, #5A7D50 0%, #3B5233 100%)',
  },
  {
    icon: Activity,
    title: 'Musculoskeletal System',
    description:
      'Clinical studies show grounded subjects experience significantly faster recovery from delayed-onset muscle soreness (DOMS), with reduced white blood cell counts and lower pain markers.',
    gradient: 'linear-gradient(135deg, #A3B18A 0%, #3B5233 100%)',
  },
];

const NaturalDefense = () => {
  return (
    <section
      style={{
        padding: 'clamp(80px, 8vw, 140px) 24px',
        backgroundColor: '#1A1A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Nature Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(59, 82, 51, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(163, 177, 138, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(50px, 6vw, 80px)' }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              color: '#A3B18A',
              display: 'inline-block',
              marginBottom: '20px',
              backgroundColor: 'rgba(163, 177, 138, 0.1)',
              padding: '10px 28px',
              borderRadius: '100px',
            }}
          >
            Biological Impact
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            Your Body's Natural
            <br />
            Defense System
          </h2>
        </motion.div>

        {/* 2×2 Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(20px, 3vw, 32px)',
            marginBottom: 'clamp(60px, 7vw, 100px)',
          }}
        >
          {systems.map((system, i) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                style={{
                  position: 'relative',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '28px',
                  padding: 'clamp(30px, 4vw, 44px)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.35s ease, border-color 0.35s ease',
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.35 },
                }}
              >
                {/* Gradient Top Border */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: system.gradient,
                    borderRadius: '28px 28px 0 0',
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '18px',
                    background: system.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 8px 30px rgba(59, 82, 51, 0.3)',
                  }}
                >
                  <Icon size={28} color="white" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)',
                    fontWeight: 800,
                    color: 'white',
                    margin: '0 0 14px 0',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {system.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {system.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            padding: 'clamp(40px, 5vw, 64px)',
            borderRadius: '32px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(163, 177, 138, 0.12)',
          }}
        >
          {/* Decorative Quote Mark */}
          <span
            style={{
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '6rem',
              fontWeight: 900,
              color: 'rgba(163, 177, 138, 0.12)',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            "
          </span>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 300,
              fontStyle: 'italic',
              margin: 0,
              position: 'relative',
              zIndex: 1,
            }}
          >
            "The human body is not just a biochemical machine — it is a bio-electrical one.
            And like any electrical system, it needs to be grounded to function optimally."
          </p>

          {/* Subtle decorative line under quote */}
          <div
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #A3B18A, transparent)',
              margin: '28px auto 0',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default NaturalDefense;
