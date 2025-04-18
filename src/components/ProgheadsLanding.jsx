import React from 'react';
import './progheads.css';
import { FaInstagram, FaSpotify } from 'react-icons/fa';

const ProgheadsLanding = () => {
  return (
    <div className="progheads-bg text-light">
      <section className="progheads-hero text-center py-5">
        <div className="container">
          <h1 className="display-3 progheads-title">🎭 Progheads_PY</h1>
          <p className="lead progheads-subtitle">
            Explorando los rincones más teatrales y exuberantes del progresivo
          </p>
          <div className="d-flex justify-content-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/progheads_py"
              className="icon-hover text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://open.spotify.com/user/31f7zmmq4iior2j6e7jioawqeidq"
              className="icon-hover text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify size={40} />
            </a>
          </div>
        </div>
      </section>

      <section className="progheads-section py-5">
        <div className="container">
          <h2 className="mb-4">📜 Sobre el proyecto</h2>
          <p>
            Progheads_PY nace de la necesidad de tener una comunidad de jóvenes que amen el progresivo dentro del Paraguay.
          </p>
        </div>
      </section>

      <section className="progheads-section py-5 bg-dark-subtle text-light">
        <div className="container">
          <h2 className="mb-4">🎧 Playlists destacadas</h2>
          <p>
            Próximamente: links a playlists esenciales, gemas ocultas y recorridos temáticos por el universo del prog.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProgheadsLanding;
