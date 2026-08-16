import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import Layout from './App.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import CSLUA from './components/CSLUA.jsx'
import Contact from './components/Contact.jsx'
import Gracias from './components/Gracias.jsx'
import NotFound from './components/NotFound.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/cslua" element={<CSLUA />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/gracias" element={<Gracias />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>
  </React.StrictMode>
)
