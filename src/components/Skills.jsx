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
    SiNodedotjs,     // ✅ este nombre es correcto (no SiNodeDotJs)
    SiBootstrap,
    SiReactrouter,   // ✅ React Router
} from 'react-icons/si';
import { FaGithub, FaUserGraduate } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";
import { PiFlowArrowBold } from 'react-icons/pi'; // PseInt
import ReactCountryFlag from 'react-country-flag';
import { Reveal, HoverLift } from './Reveal';

/** Tarjeta de skill (con fallback si el icono no existe) */
function SkillItem({ Icon, label, imgSrc, Custom }) {
    const isValidIcon = typeof Icon === 'function';

    if (Icon && !isValidIcon) {
        // Aviso útil en dev si algún import está mal escrito
        // (no afecta producción)
        // eslint-disable-next-line no-console
        console.warn(`Icono inválido para "${label}". ¿Está bien el import?`);
    }

    return (
        <HoverLift className="w-44 sm:w-48 text-center flex flex-col items-center gap-2
                    rounded-xl px-3 py-4 bg-white/10 border border-white/20
                    hover:bg-white/15 transition">
            {isValidIcon ? (
                <Icon className="h-10 w-10" aria-hidden="true" />
            ) : Custom ? (
                Custom
            ) : imgSrc ? (
                <img src={imgSrc} alt={label} className="h-10 w-10 object-contain" />
            ) : (
                // Fallback súper simple si algo vino undefined
                <div className="h-10 w-10 rounded-md bg-white/10 grid place-items-center text-xs">
                    {label?.[0] ?? '?'}
                </div>
            )}
            <p className="text-sm text-white/90">{label}</p>
        </HoverLift>
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
        { Icon: TbBrandCSharp, label: 'C#' },
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
        {
            Custom: (
                <ReactCountryFlag
                    countryCode="GB"
                    svg
                    style={{ width: '2.5rem', height: '2.5rem', borderRadius: '6px' }}
                    title="Bilingüe Inglés"
                />
            ),
            label: 'Bilingüe Inglés',
        },
    ];

    return (
        <Reveal className="glass rounded-2xl p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Habilidades Técnicas</h2>

            <h3 className="text-lg font-semibold mb-3 text-center">Lenguajes de Programación</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {lenguajes.map((it) => <SkillItem key={it.label} {...it} />)}
            </div>

            <h3 className="text-lg font-semibold mb-3 text-center">Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {frameworks.map((it) => <SkillItem key={it.label} {...it} />)}
            </div>

            <h3 className="text-lg font-semibold mb-3 text-center">Bases de Datos</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {bases.map((it) => <SkillItem key={it.label} {...it} />)}
            </div>

            <h3 className="text-lg font-semibold mb-3 text-center">Herramientas</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {herramientas.map((it) => <SkillItem key={it.label} {...it} />)}
            </div>

            <h3 className="text-lg font-semibold mb-3 text-center">Otros Conocimientos</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {otros.map((it) => <SkillItem key={it.label} {...it} />)}
            </div>
        </Reveal>
    );
}
