import React from 'react';
import '../styles/progheads.css';

const playlists = [
  {
    id: 1,
    title: 'Esenciales Prog Rock',
    cover: '/Esenciales-progrock.png',
    url: 'https://open.spotify.com/playlist/19U1kI7h1DrtXIgoMIrI8O?si=377e2ca7125945b7',
    description: 'Las piezas fundamentales del prog clásico: épica, poesía británica y teclados interminables.'
  },
  {
    id: 2,
    title: 'Esenciales Prog Metal',
    cover: '/Esenciales-progmetal.png',
    url: 'https://open.spotify.com/playlist/4IVt1rwTIvJ63PHPD3Sm1q?si=a15d0ef1be29428b',
    description: 'Lo más fino del metal progresivo: técnica brutal, riffs laberínticos y sensibilidad melódica.'
  },
  {
    id: 3,
    title: 'Gemas Ocultas Prog Rock',
    cover: '/Joyas-progrock.png',
    url: 'https://open.spotify.com/playlist/6FKuiIF9pYWcOCM7QRrJHN?si=3eb0267b7baf4e69',
    description: 'Bandas olvidadas, discos raros, joyas que nunca llegaron al mainstream… hasta ahora.'
  },
  {
    id: 4,
    title: 'Gemas Ocultas Prog Metal',
    cover: '/Joyas-progmetal.png',
    url: 'https://open.spotify.com/playlist/3PuQ0wXNOML7M7AFIaXu39?si=f42ef1ff9a8e44a2',
    description: 'Metal progresivo subterráneo y experimental para almas que buscan complejidad sin concesiones.'
  }
];

const PlaylistCards = () => {
  return (
    <section className="progheads-section py-5">
      <div className="container">
        <h2 className="mb-4">🎧 Playlists destacadas</h2>
        <div className="row gy-4">
          {playlists.map((pl) => (
            <div className="col-12 col-md-6" key={pl.id}>
              <div className="playlist-card p-3 h-100">
                <h5 className="playlist-title mb-2">{pl.title}</h5>
                {pl.description && (
                  <p className="playlist-description">{pl.description}</p>
                )}
                <a href={pl.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={pl.cover}
                    alt={pl.title}
                    className="img-fluid playlist-cover"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistCards;
