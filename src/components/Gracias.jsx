// src/components/Gracias.jsx
import React from 'react';

export default function Gracias() {
    return (
        <div className="text-center py-16">
            <h2 className="text-3xl font-bold">¡Gracias por tu mensaje!</h2>
            <p className="mt-3 text-white/80">
                Te responderé lo antes posible. Mientras tanto, ¡seguí explorando mi portfolio!
            </p>

            <a
                href="/#home"
                className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2
                   bg-indigo-600 hover:bg-indigo-700 text-white transition"
            >
                Volver al inicio
            </a>
        </div>
    );
}
