import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        ...navStyles.nav,
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      }}
    >
      <div className="container" style={navStyles.container}>
        <motion.h2 
          whileHover={{ scale: 1.05 }}
          style={navStyles.logo}
        >
          Techverge Solution<span style={{ color: '#2ecc71' }}>.</span>
        </motion.h2>

        <ul style={navStyles.links}>
          {['Home', 'About Us', 'Projects', 'Services'].map((item, i) => (
            <motion.li 
              key={item}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={`#${item.toLowerCase().replace(' ', '')}`} style={navStyles.link}>
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" className="btn" style={navStyles.contactBtn}>Contact us</a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

const navStyles = {
  nav: { position: 'fixed', top: 0, width: '100%', zIndex: 1000, transition: '0.4s ease-in-out', padding: '15px 0' },
  container: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: '1.8rem', color: '#fff', cursor: 'pointer', margin: 0, fontWeight: '800' },
  links: { display: 'flex', listStyle: 'none', gap: '35px', alignItems: 'center', margin: 0 },
  link: { textDecoration: 'none', color: '#ccc', fontWeight: '500', fontSize: '0.9rem', transition: '0.3s' },
  contactBtn: { background: '#2ecc71', color: '#000', padding: '10px 25px', borderRadius: '50px', fontWeight: 'bold' }
};

export default Navbar;