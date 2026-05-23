import React from 'react';
import { motion } from 'framer-motion';
import { Plug, Bed, Moon, Sparkles, ShieldCheck } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Connect',
    icon: Plug,
    description:
      "Plug the grounding cord into your wall outlet's dedicated ground port. Our cord uses only the ground pin — no electricity is involved.",
  },
  {
    num: '02',
    title: 'Lay',
    icon: Bed,
    description:
      'Spread your EarthSync sheet over your mattress. The 10% pure silver fiber matrix creates a conductive surface across the entire sleeping area.',
  },
  {
    num: '03',
    title: 'Sleep',
    icon: Moon,
    description:
      "When your bare skin contacts the silver fibers, a direct conductive pathway is established between your body and the Earth's electron field.",
  },
  {
    num: '04',
    title: 'Restore',
    icon: Sparkles,
    description:
      'Throughout the night, free electrons flow into your body, neutralizing free radicals, reducing inflammation, and resynchronizing your circadian rhythm.',
  },
];

const GroundingProcess = () => {
  return (
    <section
      style={{
        padding: 'clamp(80px, 8vw, 140px) 24px',
        backgroundColor: '#FDFDFD',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
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
              color: '#3B5233',
              display: 'inline-block',
              marginBottom: '20px',
              backgroundColor: 'rgba(59, 82, 51, 0.08)',
              padding: '10px 28px',
              borderRadius: '100px',
            }}
          >
            How It Works
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 900,
              color: '#1A1A1A',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            Your Nightly Grounding Ritual
          </h2>
        </motion.div>

        {/* Main Content Grid — Image + Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(40px, 5vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Left — Image + Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0 40px 100px rgba(59, 82, 51, 0.12)',
                position: 'relative',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200"
                alt="Peaceful bedroom with grounding sheet"
                style={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '500px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(26, 26, 26, 0.4) 0%, transparent 50%)',
                }}
              />
            </div>

            {/* Floating Safety Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-20px',
                backgroundColor: '#1A1A1A',
                color: 'white',
                padding: '24px 30px',
                borderRadius: '24px',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)',
                maxWidth: '300px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(163, 177, 138, 0.15)',
                  borderRadius: '16px',
                  padding: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={28} color="#A3B18A" />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#A3B18A',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  Safety First
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.4 }}>
                  100kΩ Safety Resistor Built Into Every Cord
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Steps */}
          <div style={{ position: 'relative' }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  style={{
                    display: 'flex',
                    gap: 'clamp(20px, 3vw, 32px)',
                    marginBottom: i < steps.length - 1 ? 'clamp(30px, 4vw, 48px)' : 0,
                    position: 'relative',
                  }}
                >
                  {/* Step Number Column + Connector Line */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '20px',
                        backgroundColor: i === 0 ? '#3B5233' : '#F6F6F6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '1.3rem',
                          fontWeight: 900,
                          color: i === 0 ? 'white' : '#3B5233',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {step.num}
                      </span>
                    </div>
                    {/* Connector Line */}
                    {i < steps.length - 1 && (
                      <div
                        style={{
                          width: '2px',
                          flex: 1,
                          minHeight: '30px',
                          background:
                            'linear-gradient(to bottom, #A3B18A 0%, rgba(163, 177, 138, 0.15) 100%)',
                          marginTop: '8px',
                        }}
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <div style={{ paddingTop: '6px', paddingBottom: '8px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '10px',
                      }}
                    >
                      <Icon
                        size={20}
                        color="#3B5233"
                        strokeWidth={2.2}
                      />
                      <h3
                        style={{
                          fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                          fontWeight: 800,
                          color: '#1A1A1A',
                          margin: 0,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                        lineHeight: 1.8,
                        color: '#555',
                        fontWeight: 300,
                        margin: 0,
                        maxWidth: '460px',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundingProcess;
