import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Christine",
    tag: "Verified Amazon Purchase",
    rating: 5,
    text: "This sheet is great! I have been dealing with sleeping issues for a few years, this sheet really helps me fall asleep.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Teresa Monzon",
    tag: "Verified Amazon Purchase",
    rating: 5,
    text: "My sleep quality improve and my body feels better when it touches my skin.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Becky",
    tag: "Verified Amazon Purchase",
    rating: 4,
    text: "May take awhile before I can say that I have any results! The sheet was longer than my queen size mattress, but I still made it work.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    name: "alyce Head",
    tag: "Verified Amazon Purchase",
    rating: 3,
    text: "Be careful of using it if you have ANY kind of a heart problem. I found out I can’t use it!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 5,
    name: "Rose Annabelli",
    tag: "Verified Amazon Purchase",
    rating: 1,
    text: "Horrible. It makes my hair dry, frizzy. I was told by seller to return this for refund but that is not an option here supplier said to return for refund but I cannot get label through Amazon because it’s past the window of return. Seller has to send a return label.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

const Reviews = () => {
  return (
    <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', backgroundColor: '#FDFDFD', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 4vw, 50px)' }}>
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
