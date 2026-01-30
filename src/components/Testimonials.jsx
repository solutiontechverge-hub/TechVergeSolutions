import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    initials: "SR",
    name: "Samantha Reeves",
    role: "Operations Manager, Nexora",
    text: "Techverge Digital transformed our outdated system into a sleek, scalable web platform. Their team was proactive, detail-oriented. We've seen a",
    stat: "40% increase",
    subtext: "in operational efficiency."
  },
  {
    id: 2,
    initials: "JD",
    name: "John Doe",
    role: "CTO, AlphaTech",
    text: "The mobile app they developed exceeded our expectations. The UI is intuitive and the backend is rock solid. Our user engagement is up",
    stat: "65% higher",
    subtext: "than our previous version."
  },
  {
    id: 3,
    initials: "MK",
    name: "Michael Khan",
    role: "Founder, StartUpX",
    text: "Working with this team was a game changer. They delivered a high-quality product in record time, resulting in a",
    stat: "2x faster",
    subtext: "market entry for our brand."
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" style={tStyles.section}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span className="section-subtitle">CLIENT SUCCESS</span>
          <h2 style={tStyles.heading}>What our clients say</h2>
        </motion.div>

        <div style={tStyles.sliderWrapper}>
          {/* Left Arrow */}
          <button onClick={prevSlide} style={tStyles.arrowBtn}>❮</button>

          <motion.div style={tStyles.card}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                <div style={tStyles.stars}>★★★★★</div>
                
                <p style={tStyles.quoteText}>
                  {testimonials[index].text} <span style={{color: '#2ecc71'}}>{testimonials[index].stat}</span> {testimonials[index].subtext}
                </p>

                <div style={tStyles.clientInfo}>
                  <div style={tStyles.avatar}>{testimonials[index].initials}</div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: 0, color: '#fff' }}>{testimonials[index].name}</h4>
                    <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{testimonials[index].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div style={tStyles.quoteIcon}>"</div>
          </motion.div>

          {/* Right Arrow */}
          <button onClick={nextSlide} style={tStyles.arrowBtn}>❯</button>
        </div>

        {/* Dots for navigation */}
        <div style={tStyles.dotsContainer}>
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              style={{
                ...tStyles.dot, 
                background: i === index ? '#2ecc71' : '#333'
              }}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const tStyles = {
  section: { background: '#0a0a0a', padding: '120px 0', borderTop: '1px solid #111' },
  heading: { color: '#fff', fontSize: '3.5rem', marginTop: '10px', fontWeight: '900' },
  sliderWrapper: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '30px',
    position: 'relative'
  },
  card: { 
    maxWidth: '850px', width: '100%', background: 'linear-gradient(145deg, #111, #080808)',
    padding: '80px 60px', borderRadius: '40px', border: '1px solid #222', position: 'relative',
    textAlign: 'center', overflow: 'hidden', minHeight: '450px'
  },
  arrowBtn: {
    background: '#1a1a1a', border: '1px solid #333', color: '#fff', fontSize: '1.5rem',
    width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer', transition: '0.3s',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  quoteIcon: { 
    position: 'absolute', top: '-10px', left: '40px', fontSize: '12rem', 
    color: 'rgba(46, 204, 113, 0.05)', fontFamily: 'serif', lineHeight: '1', pointerEvents: 'none'
  },
  stars: { color: '#f1c40f', letterSpacing: '5px', marginBottom: '30px', fontSize: '1.2rem' },
  quoteText: { color: '#eee', fontSize: '1.8rem', lineHeight: '1.4', marginBottom: '40px', fontWeight: '500' },
  clientInfo: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' },
  avatar: { 
    width: '60px', height: '60px', borderRadius: '50%', background: '#2ecc71', 
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000' 
  },
  dotsContainer: { display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' },
  dot: { width: '10px', height: '10px', borderRadius: '50%', cursor: 'pointer', transition: '0.3s' }
};

export default Testimonials;