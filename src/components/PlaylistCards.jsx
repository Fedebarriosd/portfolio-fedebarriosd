import React from 'react';
import '../styles/progheads.css';

const playlists = [
  {
    id: 1,
    title: 'Esenciales Prog Rock',
    embedUrl: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/19U1kI7h1DrtXIgoMIrI8O?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: 2,
    title: 'Esenciales Prog Metal',
    embedUrl: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4IVt1rwTIvJ63PHPD3Sm1q?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: 3,
    title: 'Gemas Ocultas Prog Rock',
    embedUrl: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6FKuiIF9pYWcOCM7QRrJHN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
  },
  {
    id: 4,
    title: 'Gemas Ocultas Prog Metal',
    embedUrl: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3PuQ0wXNOML7M7AFIaXu39?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
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
                <h5 className="playlist-title mb-3">{pl.title}</h5>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={pl.embedUrl}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={pl.title}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistCards;
