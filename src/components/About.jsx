import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import profilePic from '../assets/images/Hero.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal.jsx';
import Skills from './Skills.jsx';

const socials = [
  { href: 'mailto:fedebarriosd@gmail.com', Icon: Mail, label: 'Email' },
  { href: 'https://github.com/Fedebarriosd', Icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/federico-barrios-b29620321', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://wa.me/595981598367', Icon: MessageCircle, label: 'WhatsApp' },
  { href: 'https://www.instagram.com/fedebarriosd', Icon: Instagram, label: 'Instagram' },
];

export default function About() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            {/* Page header */}
            <Reveal>
                <div className="flex items-baseline gap-4 mb-12">
                    <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">02</span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Sobre mí</h1>
                </div>
            </Reveal>

            <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-16 lg:items-start">
                {/* Sticky sidebar */}
                <Reveal>
                    <div className="lg:sticky lg:top-24 mb-10 lg:mb-0">
                        <motion.img
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                            src={profilePic}
                            alt="Federico Barrios"
                            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-stone-200"
                        />

                        <h2 className="mt-5 font-bold text-xl text-zinc-900">Federico Barrios</h2>
                        <p className="text-zinc-500 text-sm mt-1">Ing. Informática · UA</p>
                        <p className="text-zinc-400 text-xs mt-0.5">@fedebarriosd</p>

                        {/* Social icons */}
                        <div className="mt-5 flex gap-2">
                            {socials.map(({ href, Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="p-2 rounded-lg border border-stone-200 text-zinc-500
                                               hover:border-orange-400 hover:text-orange-500 transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* CTA buttons */}
                        <div className="mt-6 flex flex-col gap-2.5">
                            <Link to="/projects" className="btn-primary gap-2 text-sm justify-center">
                                Ver proyectos <ArrowRight size={15} />
                            </Link>
                            <Link to="/contact" className="btn-ghost gap-2 text-sm justify-center">
                                <Mail size={15} /> Hablemos
                            </Link>
                        </div>
                    </div>
                </Reveal>

                {/* Scrollable content */}
                <div>
                    <Reveal delay={0.1}>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Hola, soy <span className="font-semibold text-zinc-900">Fede Barrios</span>, estudiante de Ingeniería Informática en la Universidad Americana de Asunción.
                            Me apasiona la tecnología desde el hardware hasta el software, y disfruto creando soluciones que combinan funcionalidad con buen diseño.
                        </p>
                        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                            Soy un ferviente defensor del <span className="font-semibold text-zinc-900">software libre</span> — creo en las libertades digitales y en los sistemas auditables.
                            Integro el Centro de Estudiantes de Ingeniería Informática de la Universidad Americana <span className="font-semibold text-zinc-900">(CEINFUA)</span>, donde participo activamente en la vida estudiantil.
                        </p>
                        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                            Mis principales intereses se centran en la informática, la música y la filosofía.
                        </p>
                    </Reveal>

                    {/* Skills section */}
                    <div className="mt-12">
                        <Reveal delay={0.15}>
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Skills</span>
                                <div className="flex-1 h-px bg-stone-200" />
                            </div>
                        </Reveal>
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}
