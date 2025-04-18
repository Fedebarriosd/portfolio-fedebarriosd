import React from 'react';
import { FaInstagram, FaSpotify } from 'react-icons/fa';

const ProgheadsLanding = () => {
  return (
    <section className="p-5 bg-dark text-light min-vh-100 text-center">
      <div className="container">
        <h2 className="mb-4">🎧 Progheads_PY</h2>
        <p className="lead">
          Bienvenido a la sección dedicada a mi proyecto sobre rock progresivo. Acá comparto rarezas, recomendaciones y playlists desde mi cuenta <strong>@progheads_py</strong>.
        </p>

        <div className="d-flex justify-content-center gap-4 mt-4">
          <a
            href="https://www.instagram.com/progheads_py"
            className="text-light icon-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} />
          </a>

          <a
            href="https://open.spotify.com/user/31jsybgwbjjso7p46apwyod2vy5m"
            className="text-light icon-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgheadsLanding;
