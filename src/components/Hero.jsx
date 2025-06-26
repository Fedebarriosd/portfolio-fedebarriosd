import React from 'react';
import profilePic from '../assets/images/Hero.png';

const Hero = () => {
    return (
        <section
            id="hero"
            className="d-flex align-items-center justify-content-center vh-100 texto-claro bg-verde-oscuro"
        >
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center">
                {/* Foto de perfil */}
                <div className="me-md-4 mb-4 mb-md-0 text-center">
                    <img
                        src={profilePic}
                        alt="Foto de Federico Barrios"
                        className="rounded-circle img-fluid"
                        style={{ maxWidth: '180px' }}
                    />
                </div>
                {/* Texto de presentación */}
                <div className="text-center text-md-start">
                    <h1>Federico Barrios</h1>
                    <h4>@fedebarriosd</h4>
                    <p className="lead">
                        Estudiante de Ingeniería Informática · Apasionado por la programación
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
