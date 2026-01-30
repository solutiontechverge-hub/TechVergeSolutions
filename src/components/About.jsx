import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="aboutus" style={styles.section}>
      <div className="container" style={styles.grid}>
        {/* Left Side: Visual Element */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          style={styles.imageSide}
        >
          <div style={styles.visualCard}>
            <div style={styles.blob}></div>
            <span style={{ fontSize: '100px' }}>🎯</span>
            <div style={styles.experienceBadge}>
              <h4 style={{ margin: 0, color: '#2ecc71' }}>10+</h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#fff' }}>Years Exp.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          style={styles.textSide}
        >
          <span style={styles.overline}>WHO WE ARE</span>
          <h2 style={styles.title}>A Software Development <span style={{color: '#2ecc71'}}>Powerhouse</span></h2>
          <p style={styles.description}>
            At Techverge Solutions, we craft powerful digital experiences. We specialize in custom websites, 
            mobile apps, and scalable platforms. With a focus on clean design and smart development, 
            our team turns complex ideas into seamless solutions.
          </p>
          <div style={styles.featureList}>
            <div style={styles.featureItem}>✔ Global Strategy</div>
            <div style={styles.featureItem}>✔ Clean Architecture</div>
            <div style={styles.featureItem}>✔ Impactful Results</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: { background: '#0a0a0a', padding: '120px 0', color: '#fff' },
  grid: { display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' },
  imageSide: { flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' },
  textSide: { flex: 1.2, minWidth: '300px' },
  visualCard: { width: '350px', height: '400px', background: '#111', borderRadius: '30px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #222' },
  blob: { position: 'absolute', width: '200px', height: '200px', background: 'rgba(46, 204, 113, 0.15)', filter: 'blur(40px)', borderRadius: '50%' },
  experienceBadge: { position: 'absolute', bottom: '30px', right: '-20px', background: '#1a1a1a', padding: '20px', borderRadius: '15px', border: '1px solid #333', textAlign: 'center' },
  overline: { color: '#2ecc71', fontWeight: 'bold', letterSpacing: '2px' },
  title: { fontSize: '3rem', margin: '20px 0', lineHeight: '1.2' },
  description: { color: '#aaa', fontSize: '1.1rem', marginBottom: '30px' },
  featureList: { display: 'flex', gap: '20px' },
  featureItem: { color: '#2ecc71', fontWeight: '500', fontSize: '0.9rem' }
};

export default About;