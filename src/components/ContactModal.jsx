import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [status, setStatus] = useState("Send Inquiry");

  if (!isOpen) return null;

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Unified Service and Template IDs
    emailjs.sendForm("service_dr7gwfd", "template_hcurjmb", form.current, "ckvfCOskvrB9_LAtF")
      .then(() => {
        setStatus("Message Sent!");
        setTimeout(() => {
          setStatus("Send Inquiry");
          onClose();
        }, 2000);
      }, (error) => {
        console.error("EmailJS Error:", error);
        setStatus("Error: Check Console");
      });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.overlay} onClick={onClose}>
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.9 }} animate={{ y: 0, opacity: 1, scale: 1 }}
        style={styles.modal} onClick={(e) => e.stopPropagation()} 
      >
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        <div style={styles.header}>
          <h2 style={styles.title}>Contact <span style={{color: '#2ecc71'}}>Us</span></h2>
          <p style={styles.subtitle}>Our team will get back to you within 24 hours.</p>
        </div>

        <form ref={form} style={styles.form} onSubmit={handleContactSubmit}>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input name="from_name" type="text" placeholder="Your Name" style={styles.input} required />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input name="from_email" type="email" placeholder="email@example.com" style={styles.input} required />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Project Type</label>
            {/* Matches {{from_title}} in your dashboard */}
            <select name="from_title" style={styles.input}>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Message</label>
            <textarea name="message" placeholder="Tell us more about your vision..." style={{...styles.input, height: '120px'}} required />
          </div>

          <motion.button type="submit" whileHover={{ scale: 1.02 }} style={styles.submitBtn}>
            {status}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0, 0, 0, 0.9)', zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' },
  modal: { background: '#111', width: '100%', maxWidth: '700px', borderRadius: '30px', padding: '60px', position: 'relative', border: '1px solid #222' },
  closeBtn: { position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer' },
  header: { textAlign: 'center', marginBottom: '40px' },
  title: { fontSize: '2.5rem', color: '#fff' },
  subtitle: { color: '#888' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  row: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  inputGroup: { flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' },
  label: { color: '#2ecc71', fontSize: '0.8rem', fontWeight: 'bold' },
  input: { background: '#0a0a0a', border: '1px solid #333', padding: '15px', borderRadius: '10px', color: '#fff', outline: 'none' },
  submitBtn: { background: '#2ecc71', color: '#000', border: 'none', padding: '18px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }
};

export default ContactModal;