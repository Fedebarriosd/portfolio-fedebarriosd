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
    tech: 'React · Bootstrap · Instagram API',
    span: 'sm:col-span-2 lg:col-span-2',
  },
  {
    title: 'Portfolio Personal',
    desc: 'Mi portfolio con proyectos, habilidades y contacto.',
    img: '/Banner.png',
    href: 'https://www.fedebarrios.com/',
    cta: 'Ya estás aquí',
    tech: 'React · Vite · Tailwind',
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
  {
    title: 'Automatools',
    desc: 'Herramientas para trabajar con autómatas finitos deterministas y no deterministas.',
    img: '/Automatas.jpg',
    href: 'https://github.com/Fedebarriosd/Automatools',
    cta: 'Ver en GitHub',
    tech: 'C · Graphviz',
    span: '',
  },
  {
    title: 'QR Generator',
    desc: 'Generador de QR offline desde el navegador. Soporta URLs, texto, contactos vCard y WhatsApp.',
    img: '/QR.webp',
    href: 'https://github.com/Fedebarriosd/qr-generator',
    cta: 'Ver en GitHub',
    tech: 'HTML · JavaScript · QRious',
    span: '',
  },
  {
    title: 'face',
    desc: 'Utilidades Bash: copia emoticones ASCII al portapapeles y gestiona el clipboard en Wayland, X11 y macOS.',
    img: '/Face.webp',
    href: 'https://github.com/Fedebarriosd/face',
    cta: 'Ver en GitHub',
    tech: 'Bash',
    span: '',
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
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">03</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Proyectos</h1>
        </div>
      </Reveal>

      {/* Bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {items.map((p, i) => (
          <motion.article
            key={p.title}
            className={`${p.span} bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col
              hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-lg transition-all duration-200`}
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
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
              />
            </button>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex-1">
                <h2 className="font-bold text-zinc-900 dark:text-stone-50 leading-tight">{p.title}</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.split(' · ').map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md bg-stone-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-stone-200 dark:border-zinc-700"
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
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                {p.cta} <ExternalLink size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <ImageModal
        src={modalSrc}
        alt={modalAlt}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
