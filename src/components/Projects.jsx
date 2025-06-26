import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Projects = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalSrc, setModalSrc] = useState('');

  const abrirModal = (src) => {
    setModalSrc(src);
    setModalAbierto(true);
  };

  return (
      <section id="projects" className="p-5 bg-verde-medio texto-oscuro">
        <div className="container">
          <h2 className="mb-4 texto-claro">Proyectos</h2>
          <div className="row g-4">
            {/* Proyecto: El Chino Pelado */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card h-100 shadow-sm">
                <img
                    src="/ChinoPelado.png"
                    className="card-img-top img-fluid"
                    alt="Sistema El Chino Pelado"
                    style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => abrirModal('/ChinoPelado.png')}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">El Chino Pelado</h5>
                  <p className="card-text flex-grow-1">
                    Sistema de gestión para una pizzería: manejo de pedidos, usuarios y stock. Desarrollado con tecnologías modernas.
                  </p>
                  <p><strong>Tecnologías:</strong> Node.js, React, Vite, Bootstrap, CSS</p>
                  <a
                      href="https://github.com/Fedebarriosd/chino-pelado-web"
                      className="btn btn-verde mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Ver en GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto: Progheads_PY */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card h-100 shadow-sm">
                <img
                    src="/Progheads.png"
                    className="card-img-top img-fluid"
                    alt="Página de Progheads_PY"
                    style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => abrirModal('/Progheads.png')}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Progheads_PY</h5>
                  <p className="card-text flex-grow-1">
                    Mi página de rock progresivo con posts, reviews y widgets de Instagram.
                  </p>
                  <p><strong>Tecnologías:</strong> React, Bootstrap, CSS Animations, Instagram API</p>
                  <a
                      href="https://progheads-py.vercel.app"
                      className="btn btn-verde mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Ver en Vivo
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto: Portfolio Personal */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card h-100 shadow-sm">
                <img
                    src="/PFP.png"
                    className="card-img-top img-fluid"
                    alt="Portfolio de Federico Barrios"
                    style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => abrirModal('/PFP.png')}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Portfolio Personal</h5>
                  <p className="card-text flex-grow-1">
                    Mi portfolio personal, donde muestro proyectos, habilidades y contacto.
                  </p>
                  <p><strong>Tecnologías:</strong> React, React Router, Bootstrap, AOS</p>
                  <a
                      href="https://github.com/Fedebarriosd/portfolio-fedebarriosd"
                      className="btn btn-verde mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Ver en GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal para imágenes */}
        <ImageModal
            src={modalSrc}
            alt="Imagen de proyecto"
            isOpen={modalAbierto}
            onClose={() => setModalAbierto(false)}
        />
      </section>
  );
};

export default Projects;
