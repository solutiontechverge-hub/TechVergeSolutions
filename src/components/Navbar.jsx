import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      style={{
        ...styles.nav,
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid #222' : 'none',
      }}
    >
      <div className="container" style={styles.container}>
        <h2 style={styles.logo}>Techverge Solution<span style={{color: '#2ecc71'}}>.</span></h2>
        
        <ul style={styles.links}>
          {['Home', 'AboutUs', 'Services', 'Projects', 'Testimonials'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={styles.link}>{item}</a>
            </li>
          ))}
          <li>
            <button onClick={onContactClick} style={styles.btn}>Contact us</button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

const styles = {
  nav: { position: 'fixed', top: 0, width: '100%', zIndex: 1000, transition: '0.3s ease', padding: '20px 0' },
  container: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { color: '#fff', fontWeight: '800', fontSize: '1.6rem', cursor: 'pointer' },
  links: { display: 'flex', listStyle: 'none', gap: '30px', alignItems: 'center' },
  link: { textDecoration: 'none', color: '#fff', fontSize: '0.9rem', fontWeight: '500', opacity: 0.8 },
  btn: { 
    background: '#2ecc71', border: 'none', padding: '10px 22px', 
    borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', color: '#000' 
  }
};

export default Navbar;