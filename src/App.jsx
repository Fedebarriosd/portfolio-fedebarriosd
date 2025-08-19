import React, { useRef, useState, useEffect } from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import MiniProgheads from './components/MiniProgheads.jsx';
import Contact from './components/Contact.jsx';
import Gracias from './components/Gracias.jsx';

const glass = 'glass';

const Section = ({ id, className = '', children }) => (
    <section id={id} className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </section>
);

export default function App() {
    // blobs (si los tenés con parallax)
    const blobA = useRef(null), blobB = useRef(null);
    const [hovered, setHovered] = useState(false);

    // ✅ mostrar "Gracias" solo si la URL es .../#gracias
    const [showThanks, setShowThanks] = useState(false);
    useEffect(() => {
        const check = () => setShowThanks(window.location.hash === '#gracias');
        check(); // estado inicial (por si la página ya carga con #gracias)
        window.addEventListener('hashchange', check);
        return () => window.removeEventListener('hashchange', check);
    }, []);

    // (tu lógica de parallax si aplica)
    const setVars = (el, { tx = 0, ty = 0, scale = 1, rot = '0deg' }) => {
        if (!el) return;
        el.style.setProperty('--tx', `${tx}px`);
        el.style.setProperty('--ty', `${ty}px`);
        el.style.setProperty('--scale', `${scale}`);
        el.style.setProperty('--rot', rot);
    };
    const handleMouseMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setVars(blobA.current, { tx: x * 42, ty: y * 42, scale: hovered ? 1.1 : 1, rot: hovered ? '6deg' : '0deg' });
        setVars(blobB.current, { tx: x * -72, ty: y * -72, scale: hovered ? 1.1 : 1, rot: hovered ? '-6deg' : '0deg' });
    };

    return (
        <div
            className="min-h-dvh text-white relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setVars(blobA.current,{tx:0,ty:0,scale:1,rot:'0deg'}); setVars(blobB.current,{tx:0,ty:0,scale:1,rot:'0deg'}); }}
        >
            <div className="absolute inset-0 -z-20 theme-bg" />
            <div ref={blobA} className="absolute -top-24 -left-16 h-80 w-80 rounded-full blob blob-a float-slow" />
            <div ref={blobB} className="absolute bottom-0 right-0 h-96 w-96 rounded-full blob blob-b float-slow" />

            <Navbar />

            <main>
                <Section id="home" className="pt-10 sm:pt-16 lg:pt-24"><Hero /></Section>
                <Section id="about" className="mt-14 lg:mt-20"><About /></Section>
                <Section id="projects" className="mt-14 lg:mt-20"><Projects /></Section>
                <Section id="skills" className="mt-14 lg:mt-20"><Skills /></Section>
                <Section id="progheads" className="mt-14 lg:mt-20"><MiniProgheads /></Section>
                <Section id="contact" className="mt-14 lg:mt-20 mb-16 lg:mb-24">
                    <div className={`rounded-2xl p-6 ${glass}`}><Contact /></div>
                </Section>

                {/* ✅ Solo se muestra cuando la URL trae #gracias */}
                {showThanks && (
                    <Section id="gracias" className="mt-10 mb-20">
                        <div className={`rounded-2xl p-6 ${glass}`}><Gracias /></div>
                    </Section>
                )}
            </main>

            <footer className={`mx-4 mb-6 ${glass} rounded-2xl`}>
                <div className="container mx-auto px-4 py-4 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-white/80">© {new Date().getFullYear()} Fede Barrios</p>
                    <p className="text-white/70">Todos los derechos reservados</p>
                </div>
            </footer>
        </div>
    );
}
