import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    tag: "Verified Amazon Purchase",
    rating: 5,
    text: "I've suffered from chronic inflammation for years. After just three nights on the EarthSync sheet, I woke up without that familiar stiffness. It's like my body finally remembered how to rest.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "David Chen",
    tag: "Verified Buyer",
    rating: 5,
    text: "The quality of the silver weave is exceptional. I tested it with a multimeter and the conductivity is perfect. My sleep tracking app shows 20% more deep sleep since I started grounding.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    tag: "Verified Amazon Purchase",
    rating: 5,
    text: "As a fitness coach, recovery is everything. These sheets have become my secret weapon. Muscle soreness is significantly reduced, and I feel much more balanced throughout the day.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    name: "James Thompson",
    tag: "Verified Buyer",
    rating: 5,
    text: "Finally, a grounding product that feels like premium bedding. Most sheets are scratchy, but EarthSync is incredibly soft. It’s a luxury experience with clinical-grade results.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 5,
    name: "Dr. Michael Kareem",
    tag: "Scientific Advisor",
    rating: 5,
    text: "The data doesn't lie. I've recommended EarthSync to several clients looking to normalize their cortisol levels naturally. The safety resistor in the cord is a crucial touch.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 6,
    name: "Linda Wu",
    tag: "Verified Amazon Purchase",
    rating: 4,
    text: "I was a skeptic at first, but the 'tingle' you feel when you first touch the sheet is real. My anxiety has definitely leveled off. Best investment I've made for my health this year.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  }
];

const Reviews = () => {
  return (
    <section style={{ padding: '120px 24px', backgroundColor: '#FDFDFD', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#3B5233', display: 'block', marginBottom: '20px' }}
          >
            Community Feedback
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900 }}
          >
            RESTORED BY NATURE, <br /> CONFIRMED BY YOU.
          </motion.h2>
        </div>

        {/* Marquee Container */}
        <div style={{ position: 'relative', width: '100%' }}>
          <motion.div 
            style={{ 
              display: 'flex', 
              gap: '30px', 
              width: 'max-content' 
            }}
            animate={{ x: [0, -1800] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div 
                key={`${review.id}-${i}`}
                style={{ 
                  width: '400px', 
                  backgroundColor: 'white', 
                  padding: '40px', 
                  borderRadius: '32px', 
                  border: '1px solid #eee',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#3B5233" color="#3B5233" />
                    ))}
                  </div>
                  <Quote size={32} color="#3B5233" style={{ opacity: 0.1, marginBottom: '-10px' }} />
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#444', marginBottom: '30px', fontStyle: 'italic' }}>
                    "{review.text}"
                  </p>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderTop: '1px solid #f5f5f5', paddingTop: '25px' }}>
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1rem', color: '#1A1A1A' }}>{review.name}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#3B5233', fontWeight: 700 }}>
                      <CheckCircle size={12} /> {review.tag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradients to hide edges */}
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, #FDFDFD, transparent)', zIndex: 2 }} />
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, #FDFDFD, transparent)', zIndex: 2 }} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
