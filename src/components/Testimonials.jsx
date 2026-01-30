import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="projects" style={tStyles.section}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>CLIENT SUCCESS</span>
          <h2 style={tStyles.heading}>What our clients say about us</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ boxShadow: "0 0 50px rgba(46, 204, 113, 0.1)" }}
          style={tStyles.card}
        >
          <motion.div 
            animate={{ rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            style={tStyles.quoteIcon}
          >
            "
          </motion.div>
          
          <div style={tStyles.stars}>★★★★★</div>
          
          <p style={tStyles.quoteText}>
            Techverge Digital transformed our outdated system into a sleek, 
            scalable web platform. Their team was proactive, detail-oriented, 
            and always responsive. We've seen a <span style={{color: '#2ecc71'}}>40% increase</span> in operational efficiency.
          </p>

          <div style={tStyles.clientInfo}>
            <div style={tStyles.avatar}>SR</div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: 0, color: '#fff' }}>Samantha Reeves</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Operations Manager, Nexora</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const tStyles = {
  section: { background: '#0a0a0a', padding: '120px 0', borderTop: '1px solid #111' },
  heading: { color: '#fff', fontSize: '3rem', marginTop: '10px' },
  card: { 
    maxWidth: '900px', margin: '0 auto', background: 'linear-gradient(145deg, #111, #080808)',
    padding: '80px 60px', borderRadius: '40px', border: '1px solid #222', position: 'relative',
    textAlign: 'center', overflow: 'hidden'
  },
  quoteIcon: { 
    position: 'absolute', top: '-10px', left: '40px', fontSize: '12rem', 
    color: 'rgba(46, 204, 113, 0.1)', fontFamily: 'serif', lineHeight: '1' 
  },
  stars: { color: '#f1c40f', letterSpacing: '5px', marginBottom: '30px', fontSize: '1.2rem' },
  quoteText: { color: '#eee', fontSize: '1.8rem', lineHeight: '1.4', marginBottom: '40px', fontWeight: '500' },
  clientInfo: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' },
  avatar: { 
    width: '60px', height: '60px', borderRadius: '50%', background: '#2ecc71', 
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000' 
  }
};

export default Testimonials;