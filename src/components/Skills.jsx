import React from 'react';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiBootstrap,
  SiReactrouter
} from 'react-icons/si';
import { FaGithub, FaUserGraduate } from 'react-icons/fa';
import { PiFlowArrowBold } from 'react-icons/pi'; // PseInt

// Item genérico
function SkillItem({ Icon, label, imgSrc }) {
  return (
      <div className="flex flex-col items-center gap-2 rounded-xl px-3 py-4 bg-white/10 border border-white/20 hover:bg-white/15 transition">
        {imgSrc ? (
            <img src={imgSrc} alt={label} className="h-10 w-10 object-contain" />
        ) : (
            <Icon className="h-10 w-10" aria-hidden="true" />
        )}
        <p className="text-sm text-white/90">{label}</p>
      </div>
  );
}

export default function Skills() {
  const lenguajes = [
    { Icon: SiPython, label: 'Python' },
    { Icon: SiJavascript, label: 'JavaScript' },
    { Icon: SiHtml5, label: 'HTML' },
    { Icon: SiCss3, label: 'CSS' },
    { Icon: SiC, label: 'C' },
    { Icon: SiCplusplus, label: 'C++' },
    { imgSrc: '/icons/csharp.png', label: 'C#' }, // poné el archivo en /public/icons/csharp.png
    { Icon: PiFlowArrowBold, label: 'PseInt' },
  ];

  const frameworks = [
    { Icon: SiReact, label: 'React' },
    { Icon: SiVite, label: 'Vite' },
    { Icon: SiNodedotjs, label: 'Node.js' },
    { Icon: SiBootstrap, label: 'Bootstrap' },
    { Icon: SiReactrouter, label: 'React Router' },
  ];

  const bases = [
    { Icon: SiPostgresql, label: 'PostgreSQL' },
    { Icon: SiSqlite, label: 'SQLite' },
  ];

  const herramientas = [
    { Icon: SiGit, label: 'Git' },
    { Icon: FaGithub, label: 'GitHub' },
  ];

  const otros = [
    { Icon: FaUserGraduate, label: 'Técnico Informático' },
    { imgSrc: '/icons/uk-flag.png', label: 'Bilingüe Inglés' }, // /public/icons/uk-flag.png
  ];

  return (
      <div className="glass rounded-2xl p-6 lg:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Habilidades Técnicas</h2>

        {/* Lenguajes */}
        <h3 className="text-lg font-semibold mb-3 text-center">Lenguajes de Programación</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
          {lenguajes.map((it) => (
              <SkillItem key={it.label} {...it} />
          ))}
        </div>

        {/* Frameworks */}
        <h3 className="text-lg font-semibold mb-3 text-center">Frameworks</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
          {frameworks.map((it) => (
              <SkillItem key={it.label} {...it} />
          ))}
        </div>

        {/* Bases de datos */}
        <h3 className="text-lg font-semibold mb-3 text-center">Bases de Datos</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
          {bases.map((it) => (
              <SkillItem key={it.label} {...it} />
          ))}
        </div>

        {/* Herramientas */}
        <h3 className="text-lg font-semibold mb-3 text-center">Herramientas</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
          {herramientas.map((it) => (
              <SkillItem key={it.label} {...it} />
          ))}
        </div>

        {/* Otros */}
        <h3 className="text-lg font-semibold mb-3 text-center">Otros Conocimientos</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {otros.map((it) => (
              <SkillItem key={it.label} {...it} />
          ))}
        </div>
      </div>
  );
}
