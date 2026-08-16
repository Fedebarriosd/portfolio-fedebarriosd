import React from 'react';
import { Users, Terminal, BookOpen, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal.jsx';

const pilares = [
  {
    Icon: Terminal,
    title: 'Software libre en la práctica',
    desc: 'Talleres y encuentros sobre Linux, herramientas libres y desarrollo colaborativo.',
    color: 'text-navy-600 dark:text-periwinkle-400',
  },
  {
    Icon: BookOpen,
    title: 'Cultura y filosofía',
    desc: 'Difundimos las cuatro libertades del software libre y por qué importan para la comunidad universitaria.',
    color: 'text-periwinkle-600 dark:text-periwinkle-300',
  },
  {
    Icon: Users,
    title: 'Comunidad',
    desc: 'Un espacio abierto para estudiantes de la UA interesados en tecnología, sin importar la carrera.',
    color: 'text-navy-400 dark:text-periwinkle-500',
  },
];

export default function CSLUA() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Page header */}
      <Reveal>
        <div className="flex items-baseline gap-4 mb-6">
          <span className="eyebrow-bracket text-navy-600 dark:text-periwinkle-400 font-bold text-sm uppercase tracking-widest">03</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">CSLUA</h1>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-none border-2 border-navy-500 dark:border-periwinkle-400 bg-navy-50 dark:bg-navy-950">
          <span className="w-1.5 h-1.5 rounded-full bg-navy-500 dark:bg-periwinkle-400" />
          <span className="text-sm font-semibold uppercase tracking-wider text-navy-600 dark:text-periwinkle-400">Coordinador General</span>
        </div>
      </Reveal>

      <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-16">
        <div>
          <Reveal delay={0.1}>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              El <span className="font-semibold text-zinc-900 dark:text-stone-50">Club de Software Libre de la Universidad Americana (CSLUA)</span> es
              un espacio dedicado a promover el uso, estudio y desarrollo de software libre dentro de la comunidad universitaria, reconocido dentro
              de la institución y en diálogo directo con la carrera.
            </p>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Formé parte de su formación desde los inicios, y hoy ocupo el rol de Coordinador General, liderando la organización de actividades,
              talleres y espacios de discusión en torno a las libertades digitales y las herramientas que las hacen posibles.
            </p>
          </Reveal>

          {/* Pillars */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {pilares.map(({ Icon, title, desc, color }, i) => (
              <Reveal key={title} delay={0.15 + i * 0.05}>
                <div className="h-full bg-white dark:bg-zinc-900 texture-grid card-retro-navy p-5">
                  <Icon className={color} size={22} />
                  <h3 className="mt-3 font-bold text-sm text-zinc-900 dark:text-stone-50">{title}</h3>
                  <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Contact card */}
        <Reveal delay={0.1}>
          <div className="mt-12 lg:mt-0 bg-white dark:bg-zinc-900 texture-grid card-retro-navy p-6">
            <h2 className="font-bold text-zinc-900 dark:text-stone-50">¿Te interesa el club?</h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Si sos estudiante de la UA y querés sumarte o saber más sobre el CSLUA, escribime directamente.
            </p>
            <Link to="/contact" className="mt-5 btn-navy gap-2 text-sm justify-center w-full">
              <Mail size={15} /> Contactar
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
