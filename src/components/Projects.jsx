import React, { useState } from 'react';
import ImageModal from './ImageModal';


const Projects = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <section id="projects" className="p-5 bg-verde-medio texto-oscuro">
      <div className="container">
        <h2 className="mb-4">Proyectos</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="card h-100 shadow-sm">
              <img
                src="/ChinoPelado.png"
                className="card-img-top img-fluid"
                alt="Sistema El Chino Pelado"
               style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
               onClick={() => setModalAbierto(true)}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">El Chino Pelado</h5>
                <p className="card-text flex-grow-1">
                  Sistema de gestión para una pizzería: manejo de pedidos, usuarios y stock. Desarrollado con interfaz de escritorio.
                </p>
                <p><strong>Tecnologías:</strong> C#, SQLite, Windows Forms</p>
                <a
                  href="https://github.com/Fedebarriosd/ChinoPelado"
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
      <ImageModal
       src="/ChinoPelado.png"
        alt="Sistema El Chino Pelado"
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
      />
    </section>
  );
};

export default Projects;