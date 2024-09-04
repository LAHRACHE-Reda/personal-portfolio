import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('skills');
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main style={{ paddingTop: `${headerHeight + 20}px` }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8"
        >
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'experience' && <Experiences />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'certifications' && <Certifications />}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default App;