import React from 'react';
import { motion } from 'framer-motion';
import { Cross, Zap, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

const precautionSections = [
  {
    icon: Cross,
    title: 'Medical Precautions',
    accent: '#C0392B',
    accentBg: '#FDEAEA',
    items: [
      'If you are taking blood-thinning medication (e.g., Warfarin, Coumadin), consult your physician before starting grounding. Grounding naturally reduces blood viscosity, which may require dosage adjustments.',
      'If you have a pacemaker or implanted electronic medical device, consult your cardiologist before use.',
      'Pregnant women should consult their healthcare provider, though no adverse effects have been reported.',
      'Grounding is NOT a replacement for medical treatment. Always follow your physician\'s guidance.',
    ],
  },
  {
    icon: Zap,
    title: 'Electrical Safety',
    accent: '#D4A017',
    accentBg: '#FFF8E1',
    items: [
      'Always use the included outlet tester to verify your outlet is properly grounded before connecting.',
      'During electrical storms or lightning, disconnect your grounding cord as a precaution.',
      'Every EarthSync cord includes a built-in 100kΩ safety resistor that prevents any dangerous current from reaching you.',
      'Never modify, cut, or splice the grounding cord.',
    ],
  },
  {
    icon: Sparkles,
    title: 'Product Care',
    accent: '#3B5233',
    accentBg: '#EEF2ED',
    items: [
      'Wash your grounding sheet in cold or warm water with a gentle detergent. Never use bleach or fabric softener — they coat the silver fibers and reduce conductivity.',
      'Air dry preferred. Low-heat tumble dry is acceptable.',
      'Test conductivity periodically with the included pen tester.',
      'Silver fibers may darken over time due to natural oxidation — this does NOT affect conductivity.',
    ],
  },
];

const SafetyPrecautions = () => {
  return (
    <section style={{
      padding: 'clamp(80px, 8vw, 140px) 24px',
      backgroundColor: '#FFFAF5',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(50px, 6vw, 80px)' }}
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
            Your Safety Matters
          </span>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: '#1A1A1A',
          }}>
            Essential Safety <br />
            <span style={{ color: '#A3B18A' }}>Information</span>
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            lineHeight: 1.8,
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: 300,
          }}>
            Your well-being is our highest priority. Please review the following guidelines to ensure a safe and effective grounding experience.
          </p>
        </motion.div>

        {/* Precaution Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(24px, 3vw, 36px)',
          marginBottom: 'clamp(50px, 6vw, 80px)',
        }}>
          {precautionSections.map((section, sectionIndex) => {
            const SectionIcon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: sectionIndex * 0.15 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '28px',
                  padding: 'clamp(28px, 3vw, 40px)',
                  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Card Header */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: section.accentBg,
                  padding: '10px 20px 10px 12px',
                  borderRadius: '100px',
                  marginBottom: '28px',
                  alignSelf: 'flex-start',
                }}>
                  <div style={{
                    backgroundColor: section.accent,
                    padding: '8px',
                    borderRadius: '50%',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <SectionIcon size={16} />
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: section.accent,
                  }}>
                    {section.title}
                  </span>
                </div>

                {/* Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.1 + itemIndex * 0.08 }}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div style={{
                        minWidth: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                      }}>
                        <CheckCircle2 size={18} color={section.accent} strokeWidth={2.2} />
                      </div>
                      <p style={{
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        color: '#555',
                        fontWeight: 400,
                        margin: 0,
                      }}>
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassuring Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: '#3B5233',
            borderRadius: '24px',
            padding: 'clamp(30px, 4vw, 50px) clamp(24px, 4vw, 50px)',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(16px, 2vw, 28px)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            padding: '14px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <ShieldCheck size={28} color="white" />
          </div>
          <p style={{
            fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 400,
            margin: 0,
            maxWidth: '700px',
          }}>
            <strong style={{ fontWeight: 800, color: 'white' }}>EarthSync products are designed with your safety as the top priority.</strong>{' '}
            Every component is rigorously tested to meet international safety standards.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default SafetyPrecautions;
