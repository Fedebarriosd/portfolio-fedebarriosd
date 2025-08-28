// src/components/About.jsx
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import profilePic from '../assets/images/Hero.png';
import { motion } from 'framer-motion';
import { Reveal, HoverLift } from './Reveal.jsx';

export default function About() {
    return (
        <Reveal className="glass rounded-2xl p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[180px_1fr] items-center">
                {/* Foto */}
                <HoverLift className="justify-self-center lg:justify-self-start">
                  <motion.img
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                    src={profilePic} alt="Foto de Federico Barrios"
                    className="h-40 w-40 rounded-full object-cover border border-white/20 shadow-xl"
                  />
                </HoverLift>

                {/* Texto */}
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold">Sobre mí</h2>
                    <p className="mt-3 text-white/80 leading-relaxed max-w-prose">
                        Hola, soy <span className="font-semibold">Fede Barrios</span>, estudiante de Ingeniería Informática en la Universidad Americana de Asunción.
                        Me apasiona la tecnología, desde el hardware hasta el software, y disfruto creando soluciones innovadoras.
                        Cuando no estoy estudiando me gusta tocar la guitarra, escuchar música, leer libros o jugar videojuegos.
                    </p>

                    {/* Chips */}
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {['React', 'Vite', 'Tailwind', 'Bootstrap', 'Node.js', 'Git', 'Vercel'].map((t) => (
                            <li
                                key={t}
                                className="text-xs px-3 py-1.5 rounded-xl bg-violet-300/10 border border-violet-200/20"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-xl px-4 py-2
                         bg-indigo-600 hover:bg-indigo-700 text-white transition"
                        >
                            Ver proyectos <ArrowRight size={18} className="ml-2" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-xl px-4 py-2
                         bg-white/10 border border-white/20 hover:bg-white/15 transition"
                        >
                            <Mail size={18} className="mr-2" /> Contacto
                        </a>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
