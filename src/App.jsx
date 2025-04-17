import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/colors.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Gracias from './components/Gracias';
import Progheads from './components/Progheads';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Progheads />
            <Contact />
          </>
        } />
      <Route path="/gracias" element={<Gracias />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;