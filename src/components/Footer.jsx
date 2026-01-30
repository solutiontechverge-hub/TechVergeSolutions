import React from 'react';

const Footer = () => {
  return (
    <footer style={fStyles.footer}>
      <div className="container" style={fStyles.grid}>
        {/* Column 1: Brand */}
        <div style={fStyles.col}>
          <h2 style={{ color: '#2ecc71', marginBottom: '20px' }}>Techverge Solution.</h2>
          <p style={fStyles.text}>
            Building high-performing websites and mobile apps that help your business scale faster.
          </p>
        </div>

        {/* Column 2: Links */}
        <div style={fStyles.col}>
          <h4 style={fStyles.title}>Navigation</h4>
          <ul style={fStyles.list}>
            <li><a href="#home" style={fStyles.link}>Home</a></li>
            <li><a href="#about" style={fStyles.link}>About Us</a></li>
            <li><a href="#services" style={fStyles.link}>Services</a></li>
            <li><a href="#projects" style={fStyles.link}>Projects</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div style={fStyles.col} id="contact">
          <h4 style={fStyles.title}>Contact Us</h4>
          <p style={fStyles.text}>📍 123 Digital Way, Tech Plaza</p>
          <p style={fStyles.text}>📧 contact@techverge.com</p>
          <p style={fStyles.text}>📞 +1 (555) 000-TECH</p>
          <div style={{ marginTop: '20px' }}>
             <button className="btn" style={{ padding: '10px 20px', background: '#2ecc71', color: '#000' }}>Schedule a Call</button>
          </div>
        </div>
      </div>
      
      <div style={fStyles.bottom}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.5, fontSize: '0.8rem' }}>
          <p>&copy; 2026 Techverge Solutions. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

const fStyles = {
  footer: { background: '#050505', color: '#fff', paddingTop: '100px', borderTop: '1px solid #111' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '80px' },
  col: { display: 'flex', flexDirection: 'column' },
  title: { fontSize: '1.2rem', marginBottom: '25px', color: '#fff' },
  text: { color: '#888', marginBottom: '10px', fontSize: '0.95rem', lineHeight: '1.6' },
  list: { listStyle: 'none', padding: 0 },
  link: { color: '#888', textDecoration: 'none', marginBottom: '12px', display: 'block', transition: '0.3s' },
  bottom: { borderTop: '1px solid #111', padding: '30px 0' }
};

export default Footer;