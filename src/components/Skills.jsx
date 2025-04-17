import React from 'react';
import { FaReact, FaGithub } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import { SiJavascript, SiCsharp, SiSqlite } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="p-5 bg-crema texto-oscuro">
      <div className="container">
        <h2 className="mb-4">Skills</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 text-center">

          <div>
            <FaReact className='skill-icon' size={50} color="#61DBFB" />
            <p>React</p>
          </div>

          <div>
            <BsBootstrap className='skill-icon' size={50} color="#7952B3" />
            <p>Bootstrap</p>
          </div>

          <div>
            <SiJavascript className='skill-icon' size={50} color="#F7DF1E" />
            <p>JavaScript</p>
          </div>

          <div>
          <img
            src="/Csharp_Logo.png"
            alt="C#"
            style={{ width: '50px', height: '50px', transition: 'transform 0.3s ease', verticalAlign: 'middle'}}
            className="skill-icon"
          />
            <p>C#</p>
          </div>

          <div>
            <SiSqlite className='skill-icon' size={50} color="#003B57" />
            <p>SQLite</p>
          </div>

          <div>
            <FaGithub className='skill-icon' size={50} color="#000000" />
            <p>GitHub</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
