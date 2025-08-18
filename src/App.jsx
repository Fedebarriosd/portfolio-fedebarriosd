import React, { useRef, useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import MiniProgheads from './components/MiniProgheads.jsx';
import Contact from './components/Contact.jsx';
import Gracias from './components/Gracias.jsx';

// clase utilitaria definida en src/index.css (@layer utilities)
const glass = 'glass';

// Wrapper de sección con container + padding horizontal
const Section = ({ id, className = '', children }) => (
    <section id={id} className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </section>
);

export default function App() {
    // Refs para los blobs y estado de hover
    const blobA = useRef(null);
    const blobB = useRef(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;  // -0.5 .. 0.5
        const y = (e.clientY - r.top) / r.height - 0.5;

        // amplitudes (ajustables)
        const ax = x * 24, ay = y * 24;     // blob A
        const bx = x * -36, by = y * -36;   // blob B (contramov)

        const aExtra = hovered ? ' scale(1.1) rotate(6deg)' : '';
        const bExtra = hovered ? ' scale(1.1) rotate(-6deg)' : '';

        if (blobA.current) blobA.current.style.transform = `translate3d(${ax}px, ${ay}px, 0)${aExtra}`;
        if (blobB.current) blobB.current.style.transform = `translate3d(${bx}px, ${by}px, 0)${bExtra}`;
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (blobA.current) blobA.current.style.transform = '';
        if (blobB.current) blobB.current.style.transform = '';
    };

    return (
        <div
            className="min-h-dvh text-white relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Fondo degradado */}
            <div className="absolute inset-0 -z-20 theme-bg" />

            {/* Blobs (parallax + hover) */}
            <div
                ref={blobA}
                className="absolute -top-24 -left-16 h-80 w-80 rounded-full blob blob-a float-slow"
                aria-hidden="true"
            />
            <div
                ref={blobB}
                className="absolute bottom-0 right-0 h-96 w-96 rounded-full blob blob-b float-slow"
                aria-hidden="true"
            />

            {/* Navbar */}
            <Navbar />

            <main>
                {/* Hero */}
                <Section id="home" className="pt-10 sm:pt-16 lg:pt-24">
                    <Hero />
                </Section>

                {/* Sobre mí */}
                <Section id="about" className="mt-14 lg:mt-20">
                    <About />
                </Section>

                {/* Proyectos */}
                <Section id="projects" className="mt-14 lg:mt-20">
                    <Projects />
                </Section>

                {/* Skills */}
                <Section id="skills" className="mt-14 lg:mt-20">
                    <Skills />
                </Section>

                {/* Mini Progheads */}
                <Section id="progheads" className="mt-14 lg:mt-20">
                    <MiniProgheads />
                </Section>

                {/* Contacto */}
                <Section id="contact" className="mt-14 lg:mt-20 mb-16 lg:mb-24">
                    <div className={`rounded-2xl p-6 ${glass}`}>
                        <Contact />
                    </div>
                </Section>

                {/* Gracias */}
                <Section id="gracias" className="mt-10 mb-20">
                    <div className={`rounded-2xl p-6 ${glass}`}>
                        <Gracias />
                    </div>
                </Section>
            </main>

            {/* Footer */}
            <footer className={`mx-4 mb-6 ${glass} rounded-2xl`}>
                <div className="container mx-auto px-4 py-4 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-white/80">© {new Date().getFullYear()} Fede Barrios</p>
                    <p className="text-white/70">Todos los derechos reservados</p>
                </div>
            </footer>
        </div>
    );
}
