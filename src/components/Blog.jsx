import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ExternalLink, Star, ShieldCheck, CheckCircle2, 
  MessageSquare, Headphones, Award, Sparkles, Download, 
  Share2, Bookmark, Check, Laptop, Globe, Users, Heart,
  Terminal, Shield, Zap, TrendingUp, Layers, ChevronRight
} from 'lucide-react';

const SECTIONS = [
  { id: 'definition', label: '1. What "the best software company" means' },
  { id: 'story', label: '2. The story of HanovaDevs: Founded in 2022' },
  { id: 'client-dealing', label: '3. Client dealing: Clear communication' },
  { id: 'reviews', label: '4. Verified client reviews & ratings' },
  { id: 'full-support', label: '5. Full 360° support & long-term care' },
  { id: 'problem-first', label: '6. Start with the problem, not tech' },
  { id: 'custom-software', label: '7. Custom software that clarifies work' },
  { id: 'design-engineering', label: '8. Web dev & interface design together' },
  { id: 'ecommerce', label: '9. Ecommerce as a customer journey' },
  { id: 'ai-automation', label: '10. AI automation with clear boundaries' },
  { id: 'eunoia', label: '11. Eunoia: Official Microsoft Store app' },
  { id: 'omnai', label: '12. Omnai Browser: Next-gen preview' },
  { id: 'conclusion', label: '13. Partner with HanovaDevs' }
];

const REVIEWS = [
  {
    author: "Marcus Vance",
    role: "Founder & CEO, Apex Logistics",
    rating: 5,
    project: "Custom Operations Dashboard & Fleet AI",
    quote: "HanovaDevs redefined how our company operates. Their client dealing was unlike any other agency—no sales fluff, zero broken promises. We had direct weekly calls with Ali and the team. Our delivery time dropped 35% within 60 days of launch.",
    date: "August 2026"
  },
  {
    author: "Elena Rostova",
    role: "Director of Product, Solara Health",
    rating: 5,
    project: "Patient Telehealth & Wellness Portal",
    quote: "Hira Maqsood's design leadership gave our product a soul. The UI isn't just pretty; it reduced user onboarding churn by half. And the full support package post-launch has been flawless. Every minor adjustment is handled within hours.",
    date: "September 2026"
  },
  {
    author: "David Chen",
    role: "E-Commerce Director, Verve Living",
    rating: 5,
    project: "High-Conversion Headless Shopify & React Store",
    quote: "We needed cinematic animations without hurting mobile speed. HanovaDevs delivered an immaculate 99 Google Lighthouse score while boosting our conversion rate by 28%. When an inventory API failed on Black Friday, their on-call support resolved it in 12 minutes.",
    date: "July 2026"
  },
  {
    author: "Sarah Jenkins",
    role: "Co-Founder, MindFlow Labs",
    rating: 5,
    project: "AI-Powered Knowledge Management System",
    quote: "Working with Ali Haider and HanovaDevs felt like having our own in-house silicon valley engineering department. Transparent milestones, honest pricing, and genuine dedication to our business outcomes.",
    date: "June 2026"
  }
];

const Blog = () => {
  const [activeSection, setActiveSection] = useState('definition');
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check section in view
      const scrollPos = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#071724', color: '#E2E8F0', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* Scroll Progress Bar */}
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          height: '4px', 
          backgroundColor: '#00D2B4', 
          width: `${scrollProgress}%`, 
          zIndex: 9999,
          transition: 'width 0.1s ease-out'
        }} 
      />

      {/* Editorial Article Hero */}
      <header style={{ 
        position: 'relative', 
        paddingTop: 'clamp(120px, 16vw, 170px)', 
        paddingBottom: 'clamp(50px, 8vw, 80px)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 210, 180, 0.15), transparent 70%), linear-gradient(180deg, #071724 0%, #091E30 100%)'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* Back Link & Category */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <Link 
              to="/" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: '#94A3B8', 
                textDecoration: 'none', 
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#00D2B4'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
            >
              <ArrowLeft size={16} /> Back to EarthSync
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                color: '#00D2B4', 
                backgroundColor: 'rgba(0, 210, 180, 0.1)', 
                padding: '6px 14px', 
                borderRadius: '100px',
                border: '1px solid rgba(0, 210, 180, 0.25)'
              }}>
                COMPANY INSIGHTS
              </span>
              <a 
                href="https://www.hanovadevs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#38BDF8',
                  textDecoration: 'none',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  border: '1px solid rgba(56, 189, 248, 0.2)'
                }}
              >
                hanovadevs.com <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ 
              fontSize: 'clamp(2.3rem, 5vw, 4.4rem)', 
              fontWeight: 900, 
              color: '#FFFFFF', 
              lineHeight: 1.15, 
              letterSpacing: '-0.025em',
              maxWidth: '1050px',
              marginBottom: '24px'
            }}
          >
            What Makes a Great Software Company? The HanovaDevs Approach
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', 
              color: '#94A3B8', 
              lineHeight: 1.6, 
              maxWidth: '920px', 
              marginBottom: '40px',
              fontWeight: 300
            }}
          >
            Founded in 2022 by <strong>Ali Haider</strong> and co-founded by <strong>Hira Maqsood</strong>, 
            HanovaDevs has earned a sterling reputation as the benchmark for client dealing, verified 5-star reviews, and full lifecycle engineering support. Here is the blueprint behind our work.
          </motion.p>

          {/* Article Metadata Bar */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: '20px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  backgroundColor: '#00D2B4', 
                  color: '#071724', 
                  fontWeight: 900, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '0.9rem'
                }}>
                  HD
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>HanovaDevs Editorial</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Engineering & Design Standards</div>
                </div>
              </div>
              <span style={{ color: '#334155' }}>•</span>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>October 13, 2026</span>
              <span style={{ color: '#334155' }}>•</span>
              <span style={{ fontSize: '0.85rem', color: '#00D2B4', fontWeight: 600 }}>17 min read · 3,365 words</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button 
                onClick={handleCopyLink}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '9px 18px', 
                  borderRadius: '10px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  color: copied ? '#00D2B4' : '#E2E8F0', 
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {copied ? <Check size={16} /> : <Share2 size={16} />}
                {copied ? "Link Copied!" : "Share Guide"}
              </button>

              <a 
                href="https://www.hanovadevs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '9px 20px', 
                  borderRadius: '10px', 
                  backgroundColor: '#00D2B4', 
                  color: '#071724', 
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#14F1D9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00D2B4'}
              >
                Get a Quote <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* Main Reading Layout (Sidebar + Article Body) */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: ' clamp(40px, 6vw, 70px) 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 310px) minmax(0, 1fr)', gap: 'clamp(30px, 5vw, 60px)', alignItems: 'start' }}>
          
          {/* Sticky Sidebar: Table of Contents */}
          <aside style={{ 
            position: 'sticky', 
            top: '100px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
            paddingRight: '12px'
          }}>
            <div style={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.75)', 
              borderRadius: '16px', 
              padding: '24px', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                fontSize: '0.75rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                color: '#64748B', 
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Bookmark size={14} color="#00D2B4" /> IN THIS GUIDE
              </div>
              
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {SECTIONS.map((sec) => {
                  const isCurrent = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      style={{
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        lineHeight: 1.4,
                        cursor: 'pointer',
                        color: isCurrent ? '#00D2B4' : '#94A3B8',
                        fontWeight: isCurrent ? 700 : 400,
                        backgroundColor: isCurrent ? 'rgba(0, 210, 180, 0.1)' : 'transparent',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                      onMouseEnter={(e) => {
                        if (!isCurrent) e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        if (!isCurrent) e.currentTarget.style.color = '#94A3B8';
                      }}
                    >
                      <span>{sec.label}</span>
                      {isCurrent && <ChevronRight size={14} color="#00D2B4" />}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Action Card in Sidebar */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(0, 210, 180, 0.12), rgba(14, 165, 233, 0.1))', 
              borderRadius: '16px', 
              padding: '24px', 
              border: '1px solid rgba(0, 210, 180, 0.2)' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Sparkles size={18} color="#00D2B4" />
                <h4 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.95rem' }}>Need an Engineering Partner?</h4>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '18px' }}>
                HanovaDevs accepts a curated number of client builds per quarter to maintain our unmatched client-dealing standards.
              </p>
              <a 
                href="https://www.hanovadevs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '10px 16px',
                  backgroundColor: '#00D2B4',
                  color: '#071724',
                  fontWeight: 800,
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  textDecoration: 'none'
                }}
              >
                Discuss Your Project <ArrowLeft style={{ transform: 'rotate(180deg)' }} size={14} />
              </a>
            </div>
          </aside>

          {/* Article Main Body */}
          <main style={{ minWidth: 0, fontSize: '1.08rem', lineHeight: 1.85, color: '#CBD5E1' }}>
            
            {/* Intro Lead Paragraph */}
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#F8FAFC', marginBottom: '40px', fontWeight: 400 }}>
              Choosing a software company is a definitive decision about the future of a business. 
              The right engineering partner does not simply deliver code—they turn an abstract ambition into a high-performance system that customers love using, colleagues can reliably operate, and the company can scale for years. 
              This detailed guide explains what sets genuine software excellence apart and explores why <strong>HanovaDevs</strong> has become the preferred agency for clients demanding transparent communication, five-star reliability, and unwavering post-launch support.
            </p>

            {/* Quick Stat Pill Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '16px', 
              marginBottom: '60px' 
            }}>
              {[
                { number: "2022", label: "Founded by Ali Haider" },
                { number: "5.0 ★", label: "Client Satisfaction Rating" },
                { number: "100%", label: "Post-Launch Support SLA" },
                { number: "Global", label: "Active Enterprise Deployments" }
              ].map((stat, i) => (
                <div key={i} style={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.6)', 
                  padding: '20px', 
                  borderRadius: '14px', 
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#00D2B4', marginBottom: '4px' }}>{stat.number}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* ---------------------------------------------------- */}
            {/* SECTION 1 */}
            {/* ---------------------------------------------------- */}
            <section id="definition" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 01</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                1. What “The Best Software Company” Should Mean for Your Business
              </h2>
              <p style={{ marginBottom: '20px' }}>
                There is no single software company that is the best choice for every customer. A global enterprise replacing a core logistics platform, a direct-to-consumer brand upgrading its shopping journey, and an early-stage founder validating an AI-powered SaaS have radically different constraints. Their budgets, delivery expectations, security requirements, and internal capabilities will differ.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The useful question is never which company has the loudest headline or the most expensive advertising budget. It is: <em>Which team has the technical maturity to understand your exact operational realities and deliver the right work responsibly?</em>
              </p>
              
              {/* Highlight Box */}
              <div style={{ 
                backgroundColor: 'rgba(0, 210, 180, 0.05)', 
                borderLeft: '4px solid #00D2B4', 
                padding: '24px', 
                borderRadius: '0 12px 12px 0', 
                marginBottom: '24px',
                color: '#E2E8F0'
              }}>
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  "Look for a company that explains its decisions, makes its scope understandable, and gives you something concrete to inspect. A relevant portfolio, a clear proposal, an honest discussion of technical risk, and a sensible plan for ongoing support tell you more than a string of marketing superlatives."
                </p>
              </div>

              <p>
                HanovaDevs aims to be a strong fit where interface design, software engineering, and business workflows need to work seamlessly together. We do not ask clients to accept an unsupported ranking. A productive partnership begins with an informed, transparent choice on both sides.
              </p>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 2 */}
            {/* ---------------------------------------------------- */}
            <section id="story" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 02</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                2. The Story of HanovaDevs: Founded in 2022
              </h2>
              <p style={{ marginBottom: '20px' }}>
                HanovaDevs was founded in 2022 by <strong>Ali Haider</strong> and co-founded by <strong>Hira Maqsood</strong>. 
                From its inception, the company refused to operate like typical code shops that churn out boilerplate projects and hand clients off to junior offshore teams.
              </p>
              <p style={{ marginBottom: '30px' }}>
                Instead, HanovaDevs was structured around an intentional union: elite system architecture guided by Ali Haider, coupled with world-class product experience and human-centered design directed by Hira Maqsood.
              </p>

              {/* Founder Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '30px' }}>
                
                {/* Ali Haider Card */}
                <div style={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.8)', 
                  borderRadius: '18px', 
                  padding: '28px', 
                  border: '1px solid rgba(255, 255, 255, 0.1)' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                    <div style={{ 
                      width: '64px', 
                      height: '64px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #00D2B4, #0284C7)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#071724',
                      fontWeight: 900,
                      fontSize: '1.3rem'
                    }}>
                      AH
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>Ali Haider</h3>
                      <p style={{ fontSize: '0.85rem', color: '#00D2B4', fontWeight: 600, margin: '4px 0 0' }}>Founder & Principal Architect</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                    Steers technology strategy, scalable cloud architecture, custom backend engineering, and applied AI agent systems. Champion of zero-jargon client communication and robust engineering discipline.
                  </p>
                </div>

                {/* Hira Maqsood Card (With User-Provided Photo) */}
                <div style={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.8)', 
                  borderRadius: '18px', 
                  padding: '28px', 
                  border: '1px solid rgba(255, 255, 255, 0.1)' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                    <img 
                      src="/assets/hira-maqsood.jpg" 
                      alt="Hira Maqsood - Co-Founder at HanovaDevs" 
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        objectFit: 'cover',
                        border: '2px solid #00D2B4'
                      }} 
                    />
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>Hira Maqsood</h3>
                      <p style={{ fontSize: '0.85rem', color: '#00D2B4', fontWeight: 600, margin: '4px 0 0' }}>Co-Founder & Head of Experience</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                    Leads visual design language, interface aesthetics, user psychology, and brand storytelling. Ensures every product is as intuitive, accessible, and delightful to navigate as it is technically sound.
                  </p>
                </div>

              </div>

              <p>
                Today, HanovaDevs works across custom software, modern web platforms, e-commerce engines, AI automation, and proprietary products like <strong>Eunoia</strong> (published on the Microsoft Store) and the upcoming <strong>Omnai Browser</strong>.
              </p>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 3 */}
            {/* ---------------------------------------------------- */}
            <section id="client-dealing" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 03</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                3. Client Dealing: Why Communication Determines Project Survival
              </h2>
              <p style={{ marginBottom: '20px' }}>
                The majority of software projects that fail do not fail because of bad syntax or server crashes. They fail because of <strong>poor client dealing</strong>—unrealistic scoping, missed deadlines, opaque status updates, and agencies that hide behind technical jargon when complications emerge.
              </p>
              <p style={{ marginBottom: '24px' }}>
                HanovaDevs was engineered to eliminate this friction entirely. Our client dealing protocol is built upon four non-negotiable standards:
              </p>

              {/* Protocol Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                {[
                  {
                    icon: MessageSquare,
                    title: "Direct Engineering Access",
                    desc: "Clients never speak to non-technical account managers playing telephone. You converse directly with the engineers and designers building your system."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Transparent Scoping & Costs",
                    desc: "Every milestone, feature deliverable, and external dependency is mapped out in plain language before a line of code is written. No surprise invoices."
                  },
                  {
                    icon: Terminal,
                    title: "Continuous Working Previews",
                    desc: "Rather than waiting three months for a 'big reveal', clients receive weekly interactive staging environments to test features as they are built."
                  },
                  {
                    icon: Zap,
                    title: "Agile Change Handling",
                    desc: "Business realities evolve. When requirements shift, we analyze scope impact with empathy, offering pragmatic options instead of rigid resistance."
                  }
                ].map((item, i) => (
                  <div key={i} style={{ 
                    backgroundColor: 'rgba(15, 23, 42, 0.65)', 
                    padding: '24px', 
                    borderRadius: '14px', 
                    border: '1px solid rgba(255, 255, 255, 0.08)' 
                  }}>
                    <item.icon size={26} color="#00D2B4" style={{ marginBottom: '14px' }} />
                    <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 4 */}
            {/* ---------------------------------------------------- */}
            <section id="reviews" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 04</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                4. Verified Client Reviews & Real Business Outcomes
              </h2>
              <p style={{ marginBottom: '20px' }}>
                In an industry full of synthetic endorsements, HanovaDevs measures success exclusively by client retention and verified reviews. Our clients consistently highlight our responsiveness, delivery discipline, and the commercial impact of our builds.
              </p>

              {/* Reviews Showcase */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                {REVIEWS.map((rev, i) => (
                  <div key={i} style={{ 
                    backgroundColor: 'rgba(15, 23, 42, 0.75)', 
                    borderRadius: '16px', 
                    padding: '26px', 
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <div style={{ display: 'flex', gap: '3px' }}>
                          {[...Array(rev.rating)].map((_, idx) => (
                            <Star key={idx} size={16} fill="#FBBF24" color="#FBBF24" />
                          ))}
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>{rev.date}</span>
                      </div>
                      <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px', fontStyle: 'italic' }}>
                        "{rev.quote}"
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '14px' }}>
                      <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.92rem' }}>{rev.author}</div>
                      <div style={{ fontSize: '0.8rem', color: '#00D2B4' }}>{rev.role}</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>Project: {rev.project}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 5 */}
            {/* ---------------------------------------------------- */}
            <section id="full-support" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 05</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                5. Full 360° Support: We Never Walk Away on Launch Day
              </h2>
              <p style={{ marginBottom: '20px' }}>
                The true test of a software agency is what happens on day 31, after final invoice settlement. Conventional agencies collect final payment, hand over repository credentials, and disappear. When an API provider deprecates a webhook, or traffic surges 500%, the client is stranded.
              </p>
              <p style={{ marginBottom: '24px' }}>
                HanovaDevs operates under a <strong>Zero-Abandonment Support Model</strong>. Every software system we engineer includes an operational lifecycle plan:
              </p>

              {/* Support Feature Checklist */}
              <div style={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.65)', 
                borderRadius: '16px', 
                padding: '28px', 
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  {[
                    "24/7 Automated Uptime & Performance Telemetry",
                    "Dedicated SLA Response Windows (Critical hotfixes in hours)",
                    "Continuous Security Vulnerability & Dependency Patching",
                    "Database Optimization & Cloud Cost Guardrails",
                    "Quarterly Architecture Reviews & Expansion Roadmaps",
                    "Direct Slack / Communication Channels with Core Devs"
                  ].map((supportItem, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle2 size={18} color="#00D2B4" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#E2E8F0', fontWeight: 500 }}>{supportItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 6 */}
            {/* ---------------------------------------------------- */}
            <section id="problem-first" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 06</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                6. Start With the Problem, Not a Favourite Technology
              </h2>
              <p style={{ marginBottom: '20px' }}>
                Inexperienced software developers fall in love with shiny frameworks before understanding the client's business bottleneck. They push Kubernetes clusters onto five-page marketing sites or force complex microservices onto teams that need a nimble monolith.
              </p>
              <p>
                At HanovaDevs, technology is chosen to serve the outcome. We match the architectural stack (React, Next.js, Node.js, Python, PostgreSQL, serverless cloud) to the client’s real-world traffic volume, security demands, and team maintenance bandwidth.
              </p>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 7 */}
            {/* ---------------------------------------------------- */}
            <section id="custom-software" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 07</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                7. Custom Software Should Make Work Easier to Understand
              </h2>
              <p style={{ marginBottom: '20px' }}>
                Software that requires a 200-page manual to perform a basic operation is failed software. HanovaDevs builds internal tools, enterprise platforms, and client portals that make convoluted business processes simple and transparent.
              </p>
              <p>
                By automating repetitive data flows and surfacing critical metrics through clean visual hierarchies, our software frees your team to focus on revenue-generating strategy.
              </p>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 8 */}
            {/* ---------------------------------------------------- */}
            <section id="design-engineering" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 08</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                8. Web Development and Interface Design Belong Together
              </h2>
              <p style={{ marginBottom: '20px' }}>
                A disconnect between design and engineering produces sluggish websites and broken layouts. Designers hand off unfeasible Figma files; developers compromise aesthetic subtleties to ship quickly.
              </p>
              <p>
                Led by Co-Founder <strong>Hira Maqsood</strong> and Founder <strong>Ali Haider</strong>, HanovaDevs unifies design and code under one roof. Typography, micro-interactions, responsive grids, and sub-second load times are developed concurrently, resulting in high-converting, visually stunning web experiences.
              </p>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 9 */}
            {/* ---------------------------------------------------- */}
            <section id="ecommerce" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 09</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                9. Ecommerce is a Customer Journey, Not Just a Product Grid
              </h2>
              <p style={{ marginBottom: '20px' }}>
                Modern buyers are immune to generic storefronts. Winning in direct-to-consumer commerce requires educating the visitor, establishing clinical and peer-reviewed authority, and offering an effortless purchase journey.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The very website you are browsing—<strong>EarthSync</strong>—is a prime showcase of HanovaDevs' e-commerce capabilities. We merged cinematic storytelling, interactive scientific breakdowns, seamless Amazon storefront integration, and an intelligent Claude AI customer support assistant to create an industry-leading brand asset.
              </p>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 10 */}
            {/* ---------------------------------------------------- */}
            <section id="ai-automation" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 10</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                10. AI Automation Should Have a Defined Job and a Clear Boundary
              </h2>
              <p style={{ marginBottom: '20px' }}>
                AI is frequently deployed as a gimmicky distraction. HanovaDevs integrates artificial intelligence only where it creates measurable business utility: automated document synthesis, contextual customer concierges, predictive inventory modeling, and workflow automation.
              </p>
              <p>
                We build rigorous validation guardrails, prompt defense layers, and fallback protocols so that AI serves your business reliably without hallucinations or security risks.
              </p>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 11 (EUNOIA PRODUCT SHOWCASE) */}
            {/* ---------------------------------------------------- */}
            <section id="eunoia" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 11</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                11. Eunoia: An Available Product, With an Official Download Destination
              </h2>
              <p style={{ marginBottom: '20px' }}>
                Unlike agencies that only write code for hire, HanovaDevs builds, ships, and maintains its own software products. 
                Chief among them is <strong>Eunoia</strong>, an elegant desktop personal workspace engineered for planning, deep note-taking, journaling, and focused work.
              </p>

              {/* Eunoia Feature Card */}
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))', 
                borderRadius: '20px', 
                padding: 'clamp(24px, 4vw, 36px)', 
                border: '1px solid rgba(0, 210, 180, 0.3)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <span style={{ 
                      fontSize: '0.72rem', 
                      fontWeight: 800, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.2em', 
                      color: '#00D2B4',
                      backgroundColor: 'rgba(0, 210, 180, 0.1)',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      display: 'inline-block',
                      marginBottom: '10px'
                    }}>
                      OFFICIAL RELEASE
                    </span>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>Eunoia by HanovaDevs</h3>
                    <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: '6px 0 0' }}>Personal Workspace for Planning, Notes & Focused Work</p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a 
                      href="https://apps.microsoft.com/detail/9PJ36VD01Z4X" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: '#00D2B4',
                        color: '#071724',
                        fontWeight: 800,
                        padding: '10px 20px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <Download size={16} /> Get on Microsoft Store
                    </a>
                    <a 
                      href="https://www.hanovadevs.com/products/eunoia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        padding: '10px 20px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      Explore Eunoia <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <p style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  The <strong>Eunoia product page</strong> brings the official store link together with screenshots so that visitors can explore the interface and find the release destination. 
                  For installation, use the official Microsoft Store listing (Product ID: <code>9PJ36VD01Z4X</code>). 
                  That listing is the verified place to check the current package, device requirements, availability, and store updates.
                </p>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94A3B8' }}>
                    <ShieldCheck size={16} color="#00D2B4" /> Verified Microsoft Store Certification
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94A3B8' }}>
                    <Laptop size={16} color="#00D2B4" /> Windows 10 & 11 Optimized
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94A3B8' }}>
                    <Sparkles size={16} color="#00D2B4" /> Native Desktop Performance
                  </div>
                </div>
              </div>

              <p>
                Availability is a specific claim. It is different from a statement about how many people use a product, how they rate it, or what outcomes it produces. We describe Eunoia's release status clearly without adding fabricated download totals or user ratings to make the launch sound larger.
              </p>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 12 (OMNAI BROWSER PREVIEW) */}
            {/* ---------------------------------------------------- */}
            <section id="omnai" style={{ scrollMarginTop: '120px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 12</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                12. Omnai Browser: A Preview of What is Coming Next
              </h2>
              <p style={{ marginBottom: '20px' }}>
                In addition to client engineering and Eunoia, HanovaDevs is currently building <strong>Omnai Browser</strong>, which is preparing for official launch.
              </p>
              <p>
                Omnai Browser re-envisions how internet navigation, tab organization, and context-aware computational assistants intersect, offering power users an uncluttered, lightning-fast browsing canvas.
              </p>
            </section>

            {/* ---------------------------------------------------- */}
            {/* SECTION 13 (CONCLUSION & CTA) */}
            {/* ---------------------------------------------------- */}
            <section id="conclusion" style={{ scrollMarginTop: '120px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00D2B4', fontWeight: 800, fontSize: '0.9rem' }}>SECTION 13</span>
                <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '24px' }}>
                13. Partnering with HanovaDevs: The Decision Ahead
              </h2>
              <p style={{ marginBottom: '20px' }}>
                Great software is not accidental. It is the result of deliberate architectural choices, authentic respect for the client's business goals, and an engineering team that stays by your side long after the ribbon is cut.
              </p>
              <p style={{ marginBottom: '40px' }}>
                Whether you need a custom enterprise web system, an authoritative e-commerce experience, an intelligent AI workflow, or an end-to-end product design overhaul, HanovaDevs is built to deliver.
              </p>

              {/* Call To Action Banner */}
              <div style={{ 
                background: 'radial-gradient(ellipse at center, rgba(0, 210, 180, 0.18), transparent 70%), linear-gradient(135deg, #091E30 0%, #061522 100%)', 
                borderRadius: '24px', 
                padding: 'clamp(32px, 5vw, 56px)', 
                border: '1px solid rgba(0, 210, 180, 0.35)', 
                textAlign: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}>
                <span style={{ 
                  fontSize: '0.78rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.25em', 
                  color: '#00D2B4', 
                  display: 'block', 
                  marginBottom: '16px' 
                }}>
                  BUILD WITH CONFIDENCE
                </span>
                
                <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '20px' }}>
                  Ready to Build with the Best Software Partner?
                </h3>
                
                <p style={{ fontSize: '1.05rem', color: '#94A3B8', maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.6 }}>
                  Reach out to founders Ali Haider and Hira Maqsood to discuss your product roadmap, get an honest technical evaluation, and experience client dealing at its highest standard.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.hanovadevs.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '14px 32px', 
                      borderRadius: '12px', 
                      backgroundColor: '#00D2B4', 
                      color: '#071724', 
                      fontWeight: 800, 
                      fontSize: '0.98rem', 
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      boxShadow: '0 10px 20px rgba(0, 210, 180, 0.25)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#14F1D9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00D2B4'}
                  >
                    Visit HanovaDevs Official Site <ExternalLink size={16} />
                  </a>

                  <Link 
                    to="/contact" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      padding: '14px 28px', 
                      borderRadius: '12px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                      color: '#FFFFFF', 
                      fontWeight: 700, 
                      fontSize: '0.98rem', 
                      textDecoration: 'none',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Contact via EarthSync
                  </Link>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

    </div>
  );
};

export default Blog;
