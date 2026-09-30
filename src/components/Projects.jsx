import React, { useState } from 'react';
import ImageModal from './ImageModal';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { ExternalLink } from 'lucide-react';

const categories = [
  {
    name: 'Sitios web',
    projects: [
      {
        title: 'Progheads_PY',
        desc: 'Página de rock progresivo con posts, reviews y noticias.',
        img: '/Progheads.png',
        href: 'https://www.progheads.org/',
        cta: 'Ver en vivo',
        tech: 'React · Vite · Bootstrap',
      },
      {
        title: 'Teresa Galeano — Psicóloga',
        desc: 'Página web profesional de la psicóloga Teresa Galeano.',
        img: '/Teresa-logo.svg',
        href: 'https://teresagaleano.net/',
        cta: 'Ver sitio',
        tech: 'React · Vite · Bootstrap',
      },
      {
        title: 'Novacare',
        desc: 'Plataforma que conecta pacientes, profesionales e instituciones médicas con soluciones de financiamiento.',
        img: '/Novacare-logo.png',
        href: 'https://novacare.com.py/',
        cta: 'Ver sitio',
        tech: 'React · Vite · Tailwind',
      },
      {
        title: 'Portfolio Personal',
        desc: 'Mi portfolio con proyectos, habilidades y contacto.',
        img: '/Portfolio.png',
        href: 'https://www.fedebarriosd.com/',
        cta: 'Ver sitio',
        tech: 'React · Vite · Tailwind',
      },
    ],
  },
  {
    name: 'Entretenimiento & Juegos',
    projects: [
      {
        title: 'Ajedrez en C',
        desc: 'Juego de ajedrez completo programado en C usando Raylib.',
        img: '/Chess.png',
        href: 'https://github.com/Fedebarriosd/chess-c',
        cta: 'Ver en GitHub',
        tech: 'C · Raylib · CMake',
      },
      {
        title: 'ASCII Cam',
        desc: 'Filtro de webcam de ASCII art en tiempo real para OBS Studio en Windows.',
        img: '/AsciiCam.png',
        href: 'https://github.com/Fedebarriosd/ASCII-cam',
        cta: 'Ver en GitHub',
        tech: 'Python · OBS Studio',
      },
      {
        title: 'WT Rangefinder',
        desc: 'Herramienta para estimar distancias en el minimapa de War Thunder a mano.',
        img: '/wt-rangefinder.png',
        href: 'https://github.com/Fedebarriosd/wt-rangefinder',
        cta: 'Ver en GitHub',
        tech: 'C++ · SDL2 · Dear ImGui · CMake',
      },
    ],
  },
  {
    name: 'Herramientas',
    projects: [
      {
        title: 'QR Generator',
        desc: 'Generador de QR offline desde el navegador. Soporta URLs, texto, contactos vCard y WhatsApp.',
        href: 'https://github.com/Fedebarriosd/qr-generator',
        tech: 'HTML · JavaScript · QRious',
      },
      {
        title: 'Automatools',
        desc: 'Herramientas para trabajar con autómatas finitos deterministas y no deterministas.',
        href: 'https://github.com/Fedebarriosd/Automatools',
        tech: 'C · Graphviz',
      },
      {
        title: 'face',
        desc: 'Utilidades Bash: copia emoticones ASCII al portapapeles y gestiona el clipboard en Wayland, X11 y macOS.',
        href: 'https://github.com/Fedebarriosd/face',
        tech: 'Bash',
      },
      {
        title: 'Full Page Screenshot',
        desc: 'Captura fotografías de páginas web enteras. Nadie necesita saber.',
        href: 'https://github.com/Fedebarriosd/Full-Page-Screenshot',
        tech: 'JavaScript · Chrome Extension',
      },
    ],
  },
];

function ProjectCard({ p, i, onOpenImage }) {
  if (p.img) {
    return (
      <motion.article
        className="bg-white dark:bg-zinc-900 card-retro-amber overflow-hidden flex flex-col
          hover:border-amber-400 dark:hover:border-amber-500 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_theme(colors.amber.500)] transition-all duration-200"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <button
          type="button"
          onClick={() => onOpenImage(p.img, p.title)}
          className="w-full overflow-hidden bg-stone-100 dark:bg-zinc-800 group flex-shrink-0"
          aria-label={`Ampliar imagen de ${p.title}`}
        >
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            className={`w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in ${p.title === 'Full Page Screenshot' ? 'image-rendering-[pixelated]' : ''}`}
          />
        </button>

        <div className="p-5 flex flex-col flex-1 texture-grid">
          <div className="flex-1">
            <h3 className="font-bold text-zinc-900 dark:text-stone-50 leading-tight">{p.title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.split(' · ').map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-none bg-stone-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-stone-200 dark:border-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
          >
            {p.cta} <ExternalLink size={14} />
          </a>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className="group bg-white dark:bg-zinc-900 card-retro-amber p-5 flex flex-col justify-between
        hover:border-amber-400 dark:hover:border-amber-500 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_theme(colors.amber.500)] transition-all duration-200"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-zinc-900 dark:text-stone-50 leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {p.title}
          </h3>
          <ExternalLink size={14} className="shrink-0 mt-1 text-zinc-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">{p.desc}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.tech.split(' · ').map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-none bg-stone-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-stone-200 dark:border-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const abrirModal = (src, alt) => {
    setModalSrc(src);
    setModalAlt(alt || 'Imagen de proyecto');
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Page header */}
      <Reveal>
        <div className="flex items-baseline gap-4 mb-10">
          <span className="eyebrow-bracket text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-widest">04</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Proyectos</h1>
        </div>
      </Reveal>

      {categories.map((cat, ci) => (
        <Reveal key={cat.name}>
          <div className={ci === 0 ? '' : 'mt-14'}>
            <h2 className="eyebrow-bracket text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {cat.projects.map((p, i) => (
                <ProjectCard key={p.title} p={p} i={i} onOpenImage={abrirModal} />
              ))}
            </div>
          </div>
        </Reveal>
      ))}

      <ImageModal
        src={modalSrc}
        alt={modalAlt}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
