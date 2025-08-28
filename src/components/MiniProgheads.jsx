// src/components/MiniProgheads.jsx
import React from 'react';
import { Reveal } from './Reveal';

export default function MiniProgheads() {
  return (
      <section id="progheads" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="glass rounded-2xl p-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Mi proyecto paralelo: Progheads_PY</h2>
          <p className="text-white/80 leading-relaxed max-w-3xl mx-auto mb-5">
            Además de programar, también soy creador de <strong className="font-semibold">Progheads_PY</strong>, un espacio dedicado al rock progresivo en todas sus formas.
            Si te interesa conocer esta música, acá vas a encontrar desde lo esencial hasta las joyas ocultas del género.
          </p>
          <a
              href="https://www.progheads.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2
                     bg-indigo-600 hover:bg-indigo-700 text-white transition"
          >
            Explorar Progheads
          </a>
        </Reveal>
      </section>
  );
}
