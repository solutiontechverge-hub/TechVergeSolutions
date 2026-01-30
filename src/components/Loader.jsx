import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      style={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={styles.spinner}
      />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ color: '#fff', marginTop: '20px' }}
      >
        TechVerge Solutions
      </motion.h2>
    </motion.div>
  );
};

const styles = {
  loaderContainer: {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    background: '#2c3e50', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', zIndex: 9999
  },
  spinner: {
    width: '50px', height: '50px', border: '5px solid #2ecc71',
    borderRadius: '10px'
  }
};

export default Loader;    