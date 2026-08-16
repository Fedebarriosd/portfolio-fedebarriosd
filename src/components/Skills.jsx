import React from 'react';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiBootstrap,
  SiReactrouter,
  SiTailwindcss,
  SiCmake,
  SiLinux,
  SiArchlinux,
  SiGnubash,
  SiVim,
} from 'react-icons/si';
import { FaGithub, FaUserGraduate } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { PiFlowArrowBold } from 'react-icons/pi';
import ReactCountryFlag from 'react-country-flag';
import { Reveal, HoverLift } from './Reveal';

const ACCENT_CLASSES = {
  orange: 'hover:border-orange-400 hover:shadow-[3px_3px_0_0_theme(colors.orange.500)]',
  amber: 'hover:border-amber-400 hover:shadow-[3px_3px_0_0_theme(colors.amber.500)]',
  periwinkle: 'hover:border-periwinkle-400 hover:shadow-[3px_3px_0_0_theme(colors.periwinkle.500)]',
  navy: 'hover:border-navy-400 hover:shadow-[3px_3px_0_0_theme(colors.navy.500)]',
};

function SkillChip({ Icon, label, Custom, accent = 'orange' }) {
  const isValidIcon = typeof Icon === 'function';
  return (
    <HoverLift>
      <div className={`flex flex-col items-center gap-1.5 rounded-none px-3 py-3 bg-white dark:bg-zinc-900 border-2 border-stone-200 dark:border-zinc-700
                      ${ACCENT_CLASSES[accent]} transition-all w-20 cursor-default`}>
        {isValidIcon ? (
          <Icon className="h-7 w-7 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
        ) : Custom ? (
          Custom
        ) : (
          <div className="h-7 w-7 rounded-none grid place-items-center text-xs bg-stone-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
            {label?.[0] ?? '?'}
          </div>
        )}
        <p className="text-xs text-zinc-600 dark:text-zinc-300 text-center leading-tight">{label}</p>
      </div>
    </HoverLift>
  );
}

function SkillGroup({ category, items, accent }) {
  return (
    <Reveal>
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 py-6 border-b border-stone-200 dark:border-zinc-800 last:border-0">
        <span className="eyebrow-bracket text-xs font-bold uppercase tracking-widest text-periwinkle-600 dark:text-periwinkle-400 sm:w-40 flex-shrink-0 pt-2">
          {category}
        </span>
        <div className="flex flex-wrap gap-3">
          {items.map((it) => (
            <SkillChip key={it.label} accent={accent} {...it} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  const groups = [
    {
      category: 'Lenguajes',
      items: [
        { Icon: SiC, label: 'C' },
        { Icon: SiCplusplus, label: 'C++' },
        { Icon: TbBrandCSharp, label: 'C#' },
        { Icon: SiJavascript, label: 'JavaScript' },
        { Icon: SiHtml5, label: 'HTML' },
        { Icon: SiCss, label: 'CSS' },
        { Icon: PiFlowArrowBold, label: 'PseInt' },
      ],
    },
    {
      category: 'Frameworks',
      items: [
        { Icon: SiCmake, label: 'CMake' },
        { Icon: SiReact, label: 'React' },
        { Icon: SiVite, label: 'Vite' },
        { Icon: SiNodedotjs, label: 'Node.js' },
        { Icon: SiBootstrap, label: 'Bootstrap' },
        { Icon: SiReactrouter, label: 'React Router' },
        { Icon: SiTailwindcss, label: 'Tailwind' },
      ],
    },
    {
      category: 'Bases de Datos',
      items: [
        { Icon: SiPostgresql, label: 'PostgreSQL' },
        { Icon: SiSqlite, label: 'SQLite' },
      ],
    },
    {
      category: 'GNU / Linux',
      items: [
        { Icon: SiLinux, label: 'GNU/Linux' },
        { Icon: SiArchlinux, label: 'Arch' },
        { Icon: SiGnubash, label: 'Bash' },
      ],
    },
    {
      category: 'Herramientas',
      items: [
        { Icon: SiGit, label: 'Git' },
        { Icon: FaGithub, label: 'GitHub' },
        { Icon: SiVim, label: 'Vim' },
      ],
    },
    {
      category: 'Otros',
      items: [
        { Icon: FaUserGraduate, label: 'Téc. Informático' },
        {
          Custom: (
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{ width: '1.75rem', height: '1.75rem', borderRadius: '0' }}
              title="Bilingüe Inglés"
            />
          ),
          label: 'Bilingüe Inglés',
        },
      ],
    },
  ];

  const accents = ['orange', 'amber', 'periwinkle', 'navy'];

  return (
    <div>
      {groups.map((g, i) => (
        <SkillGroup key={g.category} category={g.category} items={g.items} accent={accents[i % accents.length]} />
      ))}
    </div>
  );
}
