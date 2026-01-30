import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Section Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ContactModal from './components/ContactModal';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    document.body.style.overflow = !isContactOpen ? 'hidden' : 'unset';
  };

  return (
    <div className="App" style={{ background: '#0a0a0a', color: '#fff' }}>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && <ContactModal isOpen={isContactOpen} onClose={toggleContact} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar onContactClick={toggleContact} />
          <main>
            <Hero onContactClick={toggleContact} />
            <About />
            <Services />
            <Projects />
            <Stats />
            <Testimonials />
          </main>
          <Footer onContactClick={toggleContact} />
        </>
      )}
    </div>
  );
}

export default App;