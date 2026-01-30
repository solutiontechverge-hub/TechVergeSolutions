import React from 'react';
import { motion } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.overlay}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        style={styles.modal}
      >
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        
        <div style={styles.header}>
          <h2 style={styles.title}>Let's Build Something <span style={{color: '#2ecc71'}}>Great</span></h2>
          <p style={styles.subtitle}>Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>

        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input type="text" placeholder="John Doe" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input type="email" placeholder="john@company.com" style={styles.input} />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Project Type</label>
            <select style={styles.input}>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
              <option>Custom Software</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Message</label>
            <textarea placeholder="Tell us more about your vision..." style={{...styles.input, height: '120px'}}></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={styles.submitBtn}
          >
            Send Inquiry
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(10px)',
    zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'
  },
  modal: {
    background: '#111', width: '100%', maxWidth: '700px', borderRadius: '30px',
    padding: '60px', position: 'relative', border: '1px solid #222'
  },
  closeBtn: {
    position: 'absolute', top: '20px', right: '30px', background: 'none',
    border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer'
  },
  header: { textAlign: 'center', marginBottom: '40px' },
  title: { fontSize: '2.5rem', color: '#fff', marginBottom: '10px' },
  subtitle: { color: '#888' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  row: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  inputGroup: { flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '250px' },
  label: { color: '#2ecc71', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' },
  input: {
    background: '#0a0a0a', border: '1px solid #333', padding: '15px',
    borderRadius: '10px', color: '#fff', outline: 'none', transition: '0.3s'
  },
  submitBtn: {
    background: '#2ecc71', color: '#000', border: 'none', padding: '18px',
    borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '10px'
  }
};

export default ContactModal;