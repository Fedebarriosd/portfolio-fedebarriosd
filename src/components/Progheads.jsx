import React from 'react';
import { FaInstagram, FaSpotify } from 'react-icons/fa';

const Progheads = () => {
  return (
    <section id="progheads" className="p-5 bg-verde-claro texto-oscuro">
      <div className="container text-center">
        <h2 className="mb-4">🎸 Progheads_PY</h2>
        <p className="lead">
          También tengo un proyecto aparte dedicado al rock y metal progresivo: <strong>@progheads_py</strong>. Ahí comparto recomendaciones, rarezas y playlists dedicadas a este hermoso género.
        </p>

        <div className="d-flex justify-content-center gap-4 mt-4">
          <a
            href="https://www.instagram.com/progheads_py"
            className="text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} className="skill-icon"/>
          </a>
          <a
            href="https://open.spotify.com/user/31f7zmmq4iior2j6e7jioawqeidq"
            className="text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify size={40} className="skill-icon"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Progheads;
