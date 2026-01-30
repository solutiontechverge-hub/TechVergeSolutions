import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onContactClick }) => {
  return (
    <section id="home" className="hero-section" style={styles.hero}>
      <div className="container" style={styles.flex}>
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          style={styles.textSide}
        >
          <motion.span 
            initial={{ letterSpacing: "10px", opacity: 0 }}
            animate={{ letterSpacing: "2px", opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={styles.overline}
          >
            FUTURE-READY DIGITAL AGENCY
          </motion.span>
          
          <h1 style={styles.title}>
            Smart Digital <br/> 
            <span className="gradient-text">Solutions</span>
          </h1>
          
          <p style={styles.subtitle}>
            We build high-performing websites and mobile apps that help your business scale faster in the digital world.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(46, 204, 113, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick} /* This triggers the Contact Modal */
            className="btn"
            style={styles.heroBtn}
          >
            Start Your Journey
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={styles.imageSide}
        >
          <div className="floating-blob"></div>
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span style={{ fontSize: '180px', display: 'block' }}>💻</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  hero: { 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    background: '#0a0a0a', 
    color: '#fff', 
    overflow: 'hidden',
    paddingTop: '80px' 
  },
  flex: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
  textSide: { flex: 1.5 },
  overline: { color: '#2ecc71', fontWeight: 'bold', fontSize: '0.8rem', display: 'block', marginBottom: '20px' },
  title: { fontSize: '5rem', lineHeight: '1', fontWeight: '900', marginBottom: '30px' },
  subtitle: { fontSize: '1.2rem', color: '#aaa', maxWidth: '500px', marginBottom: '40px' },
  heroBtn: { 
    background: '#2ecc71', 
    color: '#000', 
    padding: '18px 45px', 
    border: 'none', 
    borderRadius: '50px', 
    fontSize: '1.1rem', 
    fontWeight: 'bold', 
    cursor: 'pointer' 
  },
  imageSide: { flex: 1, position: 'relative', textAlign: 'center' }
};

export default Hero;