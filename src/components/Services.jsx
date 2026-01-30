import React, { useState, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const services = [
  { title: "Web Development", icon: "</>", desc: "Custom, responsive websites built with the latest technologies." },
  { title: "App Development", icon: "📱", desc: "High-performance mobile apps for iOS and Android devices." },
  { title: "UI/UX Design", icon: "🎨", desc: "User-centric design focusing on conversion and aesthetics." },
  { title: "Product Strategy", icon: "📈", desc: "Data-driven roadmaps to take your idea to market success." },
  { title: "Custom Software", icon: "⚙️", desc: "Bespoke internal tools designed for your unique workflow." },
  { title: "Post-Launch Support", icon: "🛠️", desc: "Continuous maintenance and updates to keep you running." }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenForm = (serviceTitle) => {
    setSelectedService(serviceTitle);
    document.body.style.overflow = 'hidden'; 
  };

  const handleCloseForm = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset'; 
  };

  return (
    <section id="services" style={{ background: '#0a0a0a', position: 'relative', padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3.5rem', color: '#fff', fontWeight: '900' }}>Our Services</h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '20px auto' }}>
            We provide specialized digital solutions to help your business scale.
          </p>
        </div>
        
        <div style={styles.grid}>
          {services.map((s, i) => (
            <Tilt key={i} perspective={1000}>
              <motion.div 
                onClick={() => handleOpenForm(s.title)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ borderColor: '#2ecc71', cursor: 'pointer', scale: 1.02 }}
                transition={{ delay: i * 0.1 }}
                style={styles.card}
              >
                <div style={styles.icon}>{s.icon}</div>
                <h3 style={styles.cardTitle}>{s.title}</h3>
                <p style={styles.cardDesc}>{s.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={handleCloseForm} />
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceModal = ({ service, onClose }) => {
  const form = useRef();
  const [status, setStatus] = useState("Send Inquiry");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Matches your Template ID from the screenshot
    emailjs.sendForm("service_dr7gwfd", "template_hcurjmb", form.current, "ckvfCOskvrB9_LAtF")
      .then(() => {
        setStatus("Inquiry Sent!");
        setTimeout(() => onClose(), 2000);
      }, (error) => {
        console.error("EmailJS Error:", error);
        setStatus("Error! Try Again");
      });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.modalOverlay} onClick={onClose}>
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        <h2 style={{ color: '#fff' }}>Inquire: <span style={{ color: '#2ecc71' }}>{service}</span></h2>
        
        <form ref={form} onSubmit={sendEmail} style={styles.form}>
          {/* capture title to match {{from_title}} in your dashboard */}
          <input type="hidden" name="from_title" value={service} />
          <input name="from_name" type="text" placeholder="Your Name" required style={styles.input} />
          <input name="from_email" type="email" placeholder="Your Email" required style={styles.input} />
          <textarea name="message" rows="4" placeholder="Tell us about your needs..." required style={styles.input}></textarea>
          <button type="submit" style={styles.submitBtn}>{status}</button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const styles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  card: { background: '#111', padding: '50px 30px', borderRadius: '24px', border: '1px solid #222', textAlign: 'center', transition: 'border-color 0.3s' },
  icon: { fontSize: '3rem', color: '#2ecc71', marginBottom: '25px' },
  cardTitle: { color: '#fff', fontSize: '1.5rem', marginBottom: '15px' },
  cardDesc: { color: '#777', fontSize: '1rem', lineHeight: '1.6' },
  modalOverlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' },
  modalContent: { background: '#0f0f0f', padding: '40px', borderRadius: '30px', border: '1px solid #222', maxWidth: '500px', width: '100%', position: 'relative' },
  closeBtn: { position: 'absolute', top: '15px', right: '20px', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' },
  input: { background: '#1a1a1a', border: '1px solid #333', padding: '15px', borderRadius: '10px', color: '#fff', outline: 'none' },
  submitBtn: { background: '#2ecc71', color: '#000', padding: '15px', borderRadius: '10px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }
};

export default Services;