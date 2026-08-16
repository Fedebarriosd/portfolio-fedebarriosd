import React, { useState } from 'react';
import ImageModal from './ImageModal';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { ExternalLink } from 'lucide-react';

const items = [
  {
    title: 'Progheads_PY',
    desc: 'Página de rock progresivo con posts, reviews y noticias.',
    img: '/Progheads.png',
    href: 'https://www.progheads.org/',
    cta: 'Ver en vivo',
    tech: 'React · Vite · Bootstrap',
    span: '',
  },
  {
    title: 'Teresa Galeano — Psicóloga',
    desc: 'Página web profesional de la psicóloga Teresa Galeano.',
    img: '/Teresa-logo.svg',
    href: 'https://teresagaleano.net/',
    cta: 'Ver sitio',
    tech: 'React · Vite · Bootstrap',
    span: '',
  },
  {
    title: 'Ajedrez en C',
    desc: 'Juego de ajedrez completo programado en C usando Raylib.',
    img: '/Chess.png',
    href: 'https://github.com/Fedebarriosd/chess-c',
    cta: 'Ver en GitHub',
    tech: 'C · Raylib · CMake',
    span: '',
  },
];

const more = [
  {
    title: 'Portfolio Personal',
    desc: 'Mi portfolio con proyectos, habilidades y contacto.',
    href: 'https://www.fedebarriosd.com/',
    tech: 'React · Vite · Tailwind',
  },
  {
    title: 'Automatools',
    desc: 'Herramientas para trabajar con autómatas finitos deterministas y no deterministas.',
    href: 'https://github.com/Fedebarriosd/Automatools',
    tech: 'C · Graphviz',
  },
  {
    title: 'QR Generator',
    desc: 'Generador de QR offline desde el navegador. Soporta URLs, texto, contactos vCard y WhatsApp.',
    href: 'https://github.com/Fedebarriosd/qr-generator',
    tech: 'HTML · JavaScript · QRious',
  },
  {
    title: 'face',
    desc: 'Utilidades Bash: copia emoticones ASCII al portapapeles y gestiona el clipboard en Wayland, X11 y macOS.',
    href: 'https://github.com/Fedebarriosd/face',
    tech: 'Bash',
  },
  {
    title: 'ASCII Cam',
    desc: 'Filtro de webcam de ASCII art en tiempo real para OBS Studio en Windows.',
    href: 'https://github.com/Fedebarriosd/ASCII-cam',
    tech: 'Python · OBS Studio',
  },
  {
    title: 'Full Page Screenshot',
    desc: 'Captura fotografías de páginas web enteras. Nadie necesita saber.',
    href: 'https://github.com/Fedebarriosd/Full-Page-Screenshot',
    tech: 'JavaScript · Chrome Extension',
  },
];

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

      {/* Bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {items.map((p, i) => (
          <motion.article
            key={p.title}
            className={`${p.span} bg-white dark:bg-zinc-900 card-retro-amber overflow-hidden flex flex-col
              hover:border-amber-400 dark:hover:border-amber-500 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_theme(colors.amber.500)] transition-all duration-200`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Image */}
            <button
              type="button"
              onClick={() => abrirModal(p.img, p.title)}
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

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 texture-grid">
              <div className="flex-1">
                <h2 className="font-bold text-zinc-900 dark:text-stone-50 leading-tight">{p.title}</h2>
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
        ))}
      </div>

      {/* More projects — compact list */}
      <Reveal>
        <div className="mt-14">
          <h2 className="eyebrow-bracket text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
            Otros proyectos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {more.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 py-2 border-b border-stone-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-amber-500 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{p.desc}</p>
                </div>
                <ExternalLink size={14} className="shrink-0 mt-1 text-zinc-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <ImageModal
        src={modalSrc}
        alt={modalAlt}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
