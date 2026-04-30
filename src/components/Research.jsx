import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, History, Zap, ShieldAlert, FlaskConical, ArrowRight, ArrowLeft, HeartPulse, CloudLightning, Activity, Beaker, ShieldCheck, Microscope } from 'lucide-react';

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div style={{ backgroundColor: '#FDFDFD', minHeight: '100vh', color: '#1A1A1A', paddingBottom: '150px' }}>
      
      {/* Hero Header */}
      <header style={{ height: '70vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
           <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2000" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Forest Canopy" />
           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), #FDFDFD)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, padding: '0 24px', maxWidth: '1000px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '30px' }}
          >
            THE ARCHIVE OF <br /> <span style={{ color: '#A3B18A' }}>CONNECTION</span>
          </motion.h1>
          <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            A comprehensive clinical repository exploring the bio-electrical synchronization between the Earth and the Human Body.
          </p>
        </div>
      </header>

      {/* Chapter 1: The Bio-Electrical Baseline */}
      <section style={{ padding: '120px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B5233', textTransform: 'uppercase', letterSpacing: '0.3em', display: 'block', marginBottom: '20px' }}>Biological Foundation</span>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>The Earth as an <br /><span style={{ color: '#A3B18A' }}>Electron Reservoir</span></h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '25px' }}>
                The Earth's surface possesses a limitless and continuously renewed supply of free or mobile electrons. The Earth's negative potential can create a stable internal bio-electrical environment for the normal functioning of all body systems.
              </p>
              <div style={{ padding: '25px', backgroundColor: '#F9F9F9', borderRadius: '24px', borderLeft: '4px solid #3B5233' }}>
                <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#1A1A1A', margin: 0 }}>
                  "When you maintain direct contact with the ground, this negative potential neutralizes the positive oxidative stress (free radicals) that builds up within our bodies from modern lifestyle stressors."
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1440" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 100px rgba(0,0,0,0.1)' }} alt="Grounding Practice" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Journal Section */}
      <section style={{ padding: 'clamp(60px, 12vw, 120px) 24px', backgroundColor: '#F6F6F6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
            <Microscope size={40} color="#3B5233" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>Clinical Study Matrix</h2>
            <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: '#666', fontWeight: 300 }}>Peer-reviewed observations on human physiological shifts.</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 350px), 1fr))', 
            gap: 'clamp(20px, 4vw, 40px)' 
          }}>
            {/* Study 1: Cortisol */}
            <motion.div {...fadeIn} style={{ backgroundColor: 'white', padding: 'clamp(25px, 5vw, 45px)', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ backgroundColor: '#EEF2ED', padding: '12px', borderRadius: '15px', color: '#3B5233' }}><Activity size={24} /></div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#A3B18A', letterSpacing: '0.1em' }}>HORMONE REGULATION</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 800, marginBottom: '20px' }}>Circadian Cortisol Alignment</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7, marginBottom: '25px' }}>
                Subjects who slept grounded over an 8-week period showed a significant normalization of their diurnal cortisol secretion patterns. Baseline profiles that were previously erratic became synchronized with the 24-hour natural cycle.
              </p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1A1A1A', display: 'block' }}>PRIMARY OUTCOME:</span>
                <span style={{ fontSize: '0.9rem', color: '#3B5233', fontWeight: 600 }}>Deep sleep onset and morning alertness optimization.</span>
              </div>
            </motion.div>

            {/* Study 2: Zeta Potential */}
            <motion.div {...fadeIn} style={{ backgroundColor: 'white', padding: 'clamp(25px, 5vw, 45px)', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ backgroundColor: '#EEF2ED', padding: '12px', borderRadius: '15px', color: '#3B5233' }}><Zap size={24} /></div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#A3B18A', letterSpacing: '0.1em' }}>ELECTRODYNAMICS</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 800, marginBottom: '20px' }}>Red Blood Cell Viscosity</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7, marginBottom: '25px' }}>
                Grounding increases the surface charge on RBCs (Zeta Potential), which increases the spacing between cells. This natural "thinning" of the blood significantly improves cardiovascular efficiency and systemic oxygenation.
              </p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1A1A1A', display: 'block' }}>PRIMARY OUTCOME:</span>
                <span style={{ fontSize: '0.9rem', color: '#3B5233', fontWeight: 600 }}>Reduction in systemic blood viscosity by up to 270%.</span>
              </div>
            </motion.div>

            {/* Study 3: DOMS */}
            <motion.div {...fadeIn} style={{ backgroundColor: 'white', padding: 'clamp(25px, 5vw, 45px)', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ backgroundColor: '#EEF2ED', padding: '12px', borderRadius: '15px', color: '#3B5233' }}><Beaker size={24} /></div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#A3B18A', letterSpacing: '0.1em' }}>RECOVERY SCIENCE</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 800, marginBottom: '20px' }}>Muscle Inflammation (DOMS)</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7, marginBottom: '25px' }}>
                In studies involving eccentric exercise, grounded subjects showed significantly lower white blood cell counts and reduced pain levels. Grounding prevents the 'collateral damage' caused by the immune system during repair.
              </p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1A1A1A', display: 'block' }}>PRIMARY OUTCOME:</span>
                <span style={{ fontSize: '0.9rem', color: '#3B5233', fontWeight: 600 }}>Accelerated muscle tissue repair and pain reduction.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Deficiency Section */}
      <section style={{ padding: '120px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '40px' }}>The Electron Deficiency Crisis</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '60px' }}>
             {[
               { title: "Insulated Footwear", desc: "Rubber and plastic soles act as electrical insulators, blocking the Earth's natural flow." },
               { title: "Elevated Living", desc: "Modern homes disconnect us from the Earth's surface charge, leaving us 'electron-starved'." },
               { title: "EMF Saturation", desc: "Ambient electromagnetic fields create additional electrical stress that needs neutralizing." }
             ].map((item, i) => (
               <div key={i} style={{ padding: '30px', border: '1px solid #eee', borderRadius: '24px' }}>
                  <h4 style={{ fontWeight: 800, marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>{item.desc}</p>
               </div>
             ))}
          </div>
          <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            This lifestyle-induced disconnection is hypothesized to be a major contributor to chronic inflammation—the "silent killer" behind most modern lifestyle diseases. Earthing technology is the missing link to restoring this vital biological baseline.
          </p>
        </div>
      </section>

      {/* Chapter: The Pioneer */}
      <section style={{ padding: '120px 24px', backgroundColor: '#F9F9F9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                 <History size={24} color="#3B5233" />
                 <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#3B5233' }}>The Origins</span>
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>How Grounding Started</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '25px' }}>
                In 1998, Clint Ober applied his expertise in cable television grounding to the human body. He realized that while we ground our houses and cables to stabilize electrical signals, we had completely neglected the grounding of the human machine.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                His early research, conducted alongside specialists at the University of California and the University of Oregon, formed the bedrock of what we now call 'Earthing Science.'
              </p>
            </motion.div>
            <div style={{ position: 'relative' }}>
               <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1440" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 100px rgba(0,0,0,0.1)' }} alt="Sleep Science" />
               <div style={{ position: 'absolute', bottom: '-40px', right: '-20px', backgroundColor: '#3B5233', color: 'white', padding: '30px', borderRadius: '30px', maxWidth: '250px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, display: 'block', lineHeight: 1 }}>1998</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 500, opacity: 0.8 }}>The year the Earthing movement officially began.</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Human Archive: Real-World Evidence */}
      <section style={{ padding: '120px 24px', backgroundColor: '#F9F9F9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B5233', textTransform: 'uppercase', letterSpacing: '0.4em', display: 'block', marginBottom: '15px' }}>Field Observations</span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>The Human Archive</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 300 }}>Synthesizing real-world outcomes from thousands of active grounding practitioners.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { 
                category: "Arthritis & Mobility", 
                title: "Morning Fluidity", 
                desc: "Users suffering from chronic joint stiffness frequently report a '90% reduction' in morning pain. By neutralising inflammatory buildup overnight, joints remain lubricated and mobile upon waking." 
              },
              { 
                category: "Travel & Circadian", 
                title: "Jet Lag Neutralization", 
                desc: "Frequent flyers use grounding to 're-sync' their internal clock after trans-continental travel. Connecting to the Earth's local frequency drastically shortens recovery time from time-zone shifts." 
              },
              { 
                category: "Wellness & Mood", 
                title: "The Calm Effect", 
                desc: "Many users report a 'profound sense of stillness' within 20 minutes of contact. This is clinically linked to the shift from Sympathetic (Fight or Flight) to Parasympathetic (Rest & Digest) nervous system dominance." 
              },
              { 
                category: "Menstrual Health", 
                title: "PMS Inflammation Relief", 
                desc: "Women report significantly lower intensity of menstrual cramps and associated back pain. Grounding's anti-inflammatory properties act as a non-pharmacological support during the cycle." 
              },
              { 
                category: "Respiratory Support", 
                title: "Snoring & Deep Breathing", 
                desc: "Anecdotal reports suggest a reduction in snoring intensity. Proponents link this to reduced inflammation in the airways, allowing for more efficient nocturnal respiration." 
              },
              { 
                category: "The Travel Test", 
                title: "Skepticism to Belief", 
                desc: "A common user narrative involves initial skepticism, followed by a 'rebound of symptoms' when traveling without their grounding sheets, confirming the impact through controlled absence." 
              }
            ].map((entry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-hover"
                style={{ backgroundColor: 'white', padding: '35px', borderRadius: '24px', border: '1px solid #eee' }}
              >
                <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#A3B18A', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '10px' }}>{entry.category}</span>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '15px' }}>{entry.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, margin: 0 }}>{entry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Precautions */}
      <section style={{ padding: '120px 24px', backgroundColor: '#FFF9F9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <div style={{ backgroundColor: '#D64545', color: 'white', display: 'inline-flex', padding: '12px 24px', borderRadius: '100px', gap: '10px', alignItems: 'center', marginBottom: '30px' }}>
                 <ShieldAlert size={20} />
                 <span style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.1em' }}>SAFETY PROTOCOLS</span>
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px' }}>Scientific Guardrails</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.7 }}>
                Safety is built into every EarthSync component. While grounding is a natural state, modern environments require precise engineering to ensure security.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                { icon: <Zap size={24} />, title: "Built-in Current Limiting", desc: "EarthSync cords feature a 100kΩ resistor, preventing any surge from traveling into the sheet while allowing free electron flow." },
                { icon: <CloudLightning size={24} />, title: "Storm Awareness", desc: "During electrical storms, we recommend unplugging grounding products to prevent any chance of surge through the ground path." },
                { icon: <HeartPulse size={24} />, title: "Pharmacological Interaction", desc: "Grounding naturally lowers blood viscosity. If you are on blood thinners (e.g., Warfarin), consult your physician for dosage monitoring." }
              ].map((p, i) => (
                <div key={i} style={{ padding: '30px', backgroundColor: 'white', borderRadius: '24px', border: '1px solid #FFEBEB', display: 'flex', gap: '25px', alignItems: 'center' }}>
                  <div style={{ color: '#D64545' }}>{p.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '5px' }}>{p.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ padding: '120px 24px', textAlign: 'center', backgroundColor: '#1A1A1A', color: 'white' }}>
         <FlaskConical size={50} color="#A3B18A" style={{ marginBottom: '30px' }} />
         <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px' }}>Ready to Apply the Research?</h2>
         <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', backgroundColor: '#3B5233', color: 'white', padding: '22px 50px', borderRadius: '100px', textDecoration: 'none', fontWeight: 900, fontSize: '1.1rem' }}>
            SHOP THE CLINICAL RANGE <ArrowRight size={20} />
         </Link>
      </section>

    </div>
  );
};

export default Research;
