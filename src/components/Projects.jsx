import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  { id: 1, title: "Modern E-Commerce", category: "Web Development" },
  { id: 2, title: "SaaS Dashboard", category: "UI/UX Design" },
  { id: 3, title: "Fintech Mobile App", category: "App Development" }
];

// 1. Animation Variants for the staggered grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each card's animation
    }
  }
};

// 2. Variants for individual project cards
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "circOut" } 
  }
};

const Projects = () => {
  return (
    <section id="projects" style={pStyles.section}>
      <div className="container">
        {/* Animated Heading Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '60px' }}
        >
          <span className="section-subtitle">Portfolio</span>
          <h2 style={pStyles.heading}>Our Recent Work</h2>
        </motion.div>

        {/* Animated Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={pStyles.grid}
        >
          {projectData.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              style={pStyles.projectCard}
            >
              <div style={pStyles.imageSpace}>
                {/* Overlay with text fade-in */}
                <motion.div 
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  style={pStyles.overlay}
                >
                  <p style={{ color: '#2ecc71', fontWeight: 'bold', margin: 0 }}>
                    {project.category}
                  </p>
                  <h3 style={{ color: '#fff', margin: '5px 0 0 0' }}>
                    {project.title}
                  </h3>
                  
                  {/* Decorative growing line on hover */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileHover={{ width: '40px' }}
                    style={{ 
                      height: '2px', 
                      background: '#2ecc71', 
                      marginTop: '10px',
                      borderRadius: '2px'
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const pStyles = {
  section: { background: '#0a0a0a', padding: '100px 0' },
  heading: { fontSize: '3.5rem', color: '#fff', marginTop: '10px', fontWeight: '900' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' },
  projectCard: { borderRadius: '24px', overflow: 'hidden', cursor: 'pointer' },
  imageSpace: { 
    height: '400px', 
    background: 'linear-gradient(145deg, #1a1a1a, #111)', // Slight gradient for depth
    border: '1px solid #222', 
    borderRadius: '24px', 
    position: 'relative',
    transition: 'border-color 0.3s ease'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '30px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.95))',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
};

export default Projects;