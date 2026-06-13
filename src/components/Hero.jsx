import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profilePic from '../assets/images/Hero.png';

export default function Hero() {
    
    const currentYear = new Date().getFullYear();

    return (
        <section className="min-h-[calc(100vh-65px)] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
                <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">

                    {/* Left: Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-5">
                            Portfolio — {currentYear}
                        </p>

                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-zinc-900 dark:text-stone-50">
                            Federico<br />
                            <span className="text-orange-500">Barrios</span>
                        </h1>

                        <p className="mt-7 text-lg text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
                            Estudiante de Ingeniería Informática y defensor del software libre. Construyo cosas que funcionan bien y se ven mejor.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link to="/projects" className="btn-primary gap-2">
                                Ver proyectos <ArrowRight size={17} />
                            </Link>
                            <Link to="/contact" className="btn-ghost gap-2">
                                <Mail size={17} /> Hablemos
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Photo */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
                    >
                        <div className="relative">
                            {/* Orange decorative rings */}
                            <div className="absolute -inset-4 rounded-full border-2 border-orange-500/25" />
                            <div className="absolute -inset-8 rounded-full border border-orange-500/12" />

                            <img
                                src={profilePic}
                                alt="Federico Barrios"
                                className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white dark:border-zinc-800 shadow-2xl"
                            />

                            {/* Orange accent dot */}
                            <div className="absolute top-2 right-2 z-20 w-5 h-5 rounded-full bg-orange-500 border-2 border-white shadow-md" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
