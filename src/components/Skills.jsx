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
  SiNodeDotJs,
  SiBootstrap,
  SiReactrouter
} from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { FaGithub, FaUserGraduate } from 'react-icons/fa';
import { PiFlowArrowBold } from 'react-icons/pi'; // Ícono para PseInt
import '../styles/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-5">Habilidades Técnicas</h2>

        {/* Lenguajes de Programación */}
        <h4 className="mb-4">Lenguajes de Programación</h4>
        <div className="row justify-content-center mb-5">
          <div className="col-4 col-md-2 skill-item">
            <SiPython size={40} />
            <p>Python</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <SiJavascript size={40} />
            <p>JavaScript</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <SiHtml5 size={40} />
            <p>HTML</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <SiCss3 size={40} />
            <p>CSS</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <SiC size={40} />
            <p>C</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <SiCplusplus size={40} />
            <p>C++</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <img src="/icons/csharp.png" alt="C#" style={{ width: '40px' }} />
             <p>C#</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <PiFlowArrowBold size={40} />
            <p>PseInt</p>
          </div>
        </div>

        {/* Frameworks */}
        <h4 className="mb-4">Frameworks</h4>
        <div className="row justify-content-center mb-5">
          <div className="col-4 col-md-2 skill-item">
            <SiReact size={40} />
            <p>React</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <SiVite size={40} />
            <p>Vite</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <DiNodejs size={40} />
            <p>Node.js</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <SiBootstrap size={40} />
            <p>Bootstrap</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <SiReactrouter size={40} />
            <p>React Router</p>
          </div>
        </div>

        {/* Bases de Datos */}
        <h4 className="mb-4">Bases de Datos</h4>
        <div className="row justify-content-center mb-5">
          <div className="col-4 col-md-2 skill-item">
            <SiPostgresql size={40} />
            <p>PostgreSQL</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <SiSqlite size={40} />
            <p>SQLite</p>
          </div>
        </div>

        {/* Herramientas */}
        <h4 className="mb-4">Herramientas</h4>
        <div className="row justify-content-center mb-5">
          <div className="col-4 col-md-2 skill-item">
            <SiGit size={40} />
            <p>Git</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <FaGithub size={40} />
            <p>GitHub</p>
          </div>
        </div>

        {/* Formación y Otros */}
        <h4 className="mb-4">Otros Conocimientos</h4>
        <div className="row justify-content-center">
          <div className="col-4 col-md-2 skill-item">
            <FaUserGraduate size={40} />
            <p>Técnico Informático</p>
          </div>
          <div className="col-4 col-md-2 skill-item">
            <img
              src="/icons/uk-flag.png"
              alt="Bilingüe Inglés"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />
            <p>Bilingüe Inglés</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
