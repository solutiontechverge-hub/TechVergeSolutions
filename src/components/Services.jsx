import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const services = [
  { title: "Web Development", icon: "🌐", desc: "High-performance architectures for the modern web." },
  { title: "App Development", icon: "📱", desc: "Native experiences that engage users globally." },
  { title: "UI/UX Design", icon: "🎨", desc: "Visual storytelling through seamless user interfaces." },
  { title: "Product Strategy", icon: "📈", desc: "Data-driven roadmaps for scalable growth." }
];

const Services = () => {
  return (
    <section id="services" style={{ background: '#0f0f0f', padding: '100px 0' }}>
      <div className="container">
        <h2 style={{ color: '#fff', textAlign: 'center', fontSize: '3rem', marginBottom: '60px' }}>Our Services</h2>
        <div style={styles.grid}>
          {services.map((s, i) => (
            <Tilt 
              key={i}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
              gyroscope={true}
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
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
    </section>
  );
};

const styles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' },
  card: { 
    background: 'rgba(255, 255, 255, 0.05)', 
    padding: '50px 30px', 
    borderRadius: '24px', 
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    textAlign: 'center',
    height: '100%'
  },
  icon: { fontSize: '3rem', marginBottom: '20px' },
  cardTitle: { color: '#fff', fontSize: '1.5rem', marginBottom: '15px' },
  cardDesc: { color: '#888', lineHeight: '1.6' }
};

export default Services;