import React from 'react';

// Importá SOLO los componentes que realmente tengas creados
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
    return (
        <div className="min-h-dvh text-white relative overflow-hidden">
            {/* Fondo degradado + blobs */}
            <div className="absolute inset-0 -z-20 theme-bg" />
            <div className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full blob-a blur-3xl animate-pulse" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full blob-a blur-3xl animate-pulse" />

            {/* Navbar */}
            <Navbar />

            <main>
                {/* Hero (envuelto en una card glass para que quede frosted) */}
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

                {/* Mini Progheads (si querés mostrar 2–3 posts o un widget) */}
                <Section id="progheads" className="mt-14 lg:mt-20">
                    <MiniProgheads />
                </Section>

                {/* Contacto (en card glass) */}
                <Section id="contact" className="mt-14 lg:mt-20 mb-16 lg:mb-24">
                    <div className={`rounded-2xl p-6 ${glass}`}>
                        <Contact />
                    </div>
                </Section>

                {/* Gracias (si usás una sección de confirmación; si no, podés borrar) */}
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
