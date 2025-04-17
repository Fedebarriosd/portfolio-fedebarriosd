import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="p-5 bg-verde-oscuro texto-claro">
      <div className="container">
        <h2 className="text-center mb-4">Contacto</h2>

        {/* FORMULARIO */}
        <form
          action="https://formspree.io/f/mdkerabp"
          method="POST"
          className="mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <input type="hidden" name="_redirect" value="https://tusitio.vercel.app/gracias" />

          <div className="mb-3">
            <label className="form-label">Tu nombre</label>
            <input type="text" name="name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Tu correo</label>
            <input type="email" name="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea name="message" className="form-control" rows="4" required></textarea>
          </div>

          <button type="submit" className="btn btn-verde w-100">Enviar</button>
        </form>

        {/* REDES */}
        <div className="text-center mt-5">
          <p>También podés encontrarme en:</p>
          <div className="d-flex justify-content-center gap-4">
            <a href="mailto:fedebarriosd@gmail.com" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} className="skill-icon"/>
            </a>
            <a href="https://github.com/Fedebarriosd" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="skill-icon"/>
            </a>
            <a
              href="https://www.linkedin.com/in/federico-barrios-b29620321"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="skill-icon"/>
            </a>

            <a href="https://www.instagram.com/fedebarriosd" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="skill-icon"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
