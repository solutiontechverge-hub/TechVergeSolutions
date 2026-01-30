import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ onContactClick }) => {
  return (
    <footer style={fStyles.footer}>
      <div className="container">
        <div style={fStyles.grid}>
          {/* Column 1: Brand Pitch */}
          <div style={fStyles.col}>
            <h2 style={fStyles.logo}>Techverge<span style={{color: '#2ecc71'}}>.</span></h2>
            <p style={fStyles.description}>
              At Techverge Solutions, we craft powerful digital experiences. 
              Turning complex ideas into seamless, scalable solutions for 
              startups and enterprises worldwide.
            </p>
            <div style={fStyles.socials}>
               {['LN', 'TW', 'IG'].map(soc => (
                 <motion.div key={soc} whileHover={{ y: -5, color: '#2ecc71' }} style={fStyles.socIcon}>{soc}</motion.div>
               ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={fStyles.col}>
            <h4 style={fStyles.title}>Explore</h4>
            <ul style={fStyles.list}>
              <li><a href="#home" style={fStyles.link}>Home</a></li>
              <li><a href="#aboutus" style={fStyles.link}>Who We Are</a></li>
              <li><a href="#services" style={fStyles.link}>Our Services</a></li>
              <li><a href="#projects" style={fStyles.link}>Testimonials</a></li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div style={fStyles.col}>
            <h4 style={fStyles.title}>Get In Touch</h4>
            <p style={fStyles.contactText}>📍 123 Tech Plaza, Digital Valley</p>
            <p style={fStyles.contactText}>📧 hello@techverge.com</p>
            <p style={fStyles.contactText}>📞 +1 (555) 123-4567</p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContactClick}
              style={fStyles.footerBtn}
            >
              Start a Project
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={fStyles.bottomBar}>
          <p>&copy; 2026 Techverge Solutions. Made with Precision.</p>
          <div style={fStyles.legal}>
            <span>Privacy Policy</span>
            <span style={{marginLeft: '20px'}}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const fStyles = {
  footer: { background: '#050505', color: '#fff', paddingTop: '100px', borderTop: '1px solid #111' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '80px' },
  col: { display: 'flex', flexDirection: 'column' },
  logo: { fontSize: '2rem', fontWeight: '800', marginBottom: '25px' },
  description: { color: '#777', lineHeight: '1.8', fontSize: '1rem', marginBottom: '25px' },
  socials: { display: 'flex', gap: '15px' },
  socIcon: { width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', cursor: 'pointer', color: '#888' },
  title: { fontSize: '1.2rem', fontWeight: '700', marginBottom: '30px', position: 'relative' },
  list: { listStyle: 'none', padding: 0 },
  link: { color: '#777', textDecoration: 'none', marginBottom: '15px', display: 'block', transition: '0.3s' },
  contactText: { color: '#777', marginBottom: '12px', fontSize: '0.95rem' },
  footerBtn: { 
    marginTop: '20px', padding: '12px 25px', background: 'transparent', 
    border: '2px solid #2ecc71', color: '#2ecc71', borderRadius: '10px', 
    fontWeight: 'bold', cursor: 'pointer', alignSelf: 'flex-start' 
  },
  bottomBar: { borderTop: '1px solid #111', padding: '40px 0', display: 'flex', justifyContent: 'space-between', color: '#444', fontSize: '0.85rem', flexWrap: 'wrap', gap: '20px' },
  legal: { cursor: 'pointer' }
};

export default Footer;