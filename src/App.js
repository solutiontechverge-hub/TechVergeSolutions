import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ContactModal from './components/ContactModal';

// Styles
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // 1. Handle Initial Loading Screen
  useEffect(() => {
    // Simulate high-end asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // 2. Modal Toggle Function
  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    // Prevent background scrolling when modal is open
    if (!isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <div className="App">
      {/* 3. Global Contact Modal - Triggered from Nav or Footer */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactModal 
            key="contact-modal" 
            isOpen={isContactOpen} 
            onClose={toggleContact} 
          />
        )}
      </AnimatePresence>

      {/* 4. Page Content with Entrance Animation */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div key="main-content">
            <Navbar onContactClick={toggleContact} />
            
            <main>
              {/* Sections with unique IDs for Navigation */}
              <section id="home">
                <Hero onContactClick={toggleContact} />
              </section>

              <section id="aboutus">
                <About />
              </section>

              <section id="services">
                <Services />
              </section>

              <Stats />

              <section id="projects">
                <Testimonials />
              </section>
            </main>

            <Footer onContactClick={toggleContact} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;