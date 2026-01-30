import React, { useEffect, useRef } from 'react'; // Removed unused useState
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]); // Added 'spring' as a dependency

  return <motion.span ref={ref}>{display}</motion.span>;
}

const Stats = () => {
  return (
    <section style={{ textAlign: 'center', background: '#0a0a0a' }}>
      <div className="container">
        <span className="section-subtitle">Company Statistics</span>
        <h2 style={{ fontSize: '3rem', margin: '20px 0 60px', fontWeight: '900' }}>
          Why People say us best <br/> framing company in the worlds
        </h2>
        
        <div className="stats-flex">
          <div className="stat-item">
            <h3><Counter value={150} />+</h3>
            <p>Projects Successfully Delivered</p>
          </div>
          <div className="stat-item">
            <h3><Counter value={1235} />+</h3>
            <p>We have more then 1235+ Global Partners</p>
          </div>
          <div className="stat-item">
            <h3><Counter value={85} />+</h3>
            <p>Skilled Developers & Designers</p>
          </div>
          <div className="stat-item">
            <h3><Counter value={10} />+</h3>
            <p>Years of Technical Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;