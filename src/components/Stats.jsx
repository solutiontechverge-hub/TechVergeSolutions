import React, { useEffect, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Stats = () => {
  const statData = [
    { label: "Projects Delivered", value: 150 },
    { label: "Expert Staff", value: 85 },
    { label: "Global Partners", value: 1235 },
    { label: "Years Excellence", value: 10 }
  ];

  return (
    <section style={{ background: '#0a0a0a', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div className="container" style={statStyles.grid}>
        {statData.map((item, idx) => (
          <div key={idx} style={statStyles.item}>
            <h2 style={statStyles.number}>
              <AnimatedNumber value={item.value} />+
            </h2>
            <p style={statStyles.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const statStyles = {
  grid: { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px' },
  item: { textAlign: 'center', minWidth: '150px' },
  number: { color: '#2ecc71', fontSize: '4rem', fontWeight: '900', margin: 0 },
  label: { color: '#888', fontSize: '1rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1px' }
};

export default Stats;