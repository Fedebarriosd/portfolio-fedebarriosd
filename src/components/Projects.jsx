import React, { useState } from 'react';
import ImageModal from './ImageModal';

const items = [
  {
    title: 'El Chino Pelado',
    desc: 'Sistema de gestión para una pizzería: pedidos, usuarios y stock.',
    img: '/ChinoPelado.png',            // poné la imagen en /public
    href: 'https://github.com/Fedebarriosd/chino-pelado-web',
    cta: 'Ver en GitHub',
    tech: 'Node.js, React, Vite, Bootstrap',
  },
  {
    title: 'Progheads_PY',
    desc: 'Página de rock progresivo con posts, reviews y noticias.',
    img: '/Progheads.png',
    href: 'https://www.progheads.org/',
    cta: 'Ver en Vivo',
    tech: 'React, Bootstrap, Integración Instagram',
  },
  {
    title: 'Portfolio Personal',
    desc: 'Mi portfolio con proyectos, habilidades y contacto.',
    img: '/PFP.png',
    href: 'https://github.com/Fedebarriosd/portfolio-fedebarriosd',
    cta: 'Ver en GitHub',
    tech: 'React, Vite, Tailwind',
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
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Proyectos</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-6 flex flex-col">
                {/* Imagen clickable */}
                <button
                    type="button"
                    onClick={() => abrirModal(p.img, p.title)}
                    className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/15 bg-white/10 group"
                    aria-label={`Abrir imagen de ${p.title}`}
                >
                  <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
                  />
                </button>

                {/* Texto */}
                <div className="mt-4 flex-1">
                  <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{p.desc}</p>
                  <p className="mt-2 text-xs text-white/70">
                    <span className="opacity-80 font-medium">Tecnologías:</span> {p.tech}
                  </p>
                </div>

                {/* CTA */}
                <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2
                         bg-indigo-600 hover:bg-indigo-700 text-white transition"
                >
                  {p.cta}
                </a>
              </div>
          ))}
        </div>

        {/* Modal */}
        <ImageModal
            src={modalSrc}
            alt={modalAlt}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        />
      </div>
  );
}
