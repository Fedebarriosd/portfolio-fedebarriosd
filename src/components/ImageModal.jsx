import React, { useEffect, useRef } from 'react';

export default function ImageModal({ src, alt = '', isOpen, onClose }) {
    const closeBtnRef = useRef(null);

    // Cerrar con ESC + bloquear scroll al abrir
    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e) => {
            if (e.key === 'Escape') onClose?.();
        };
        document.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        // focus inicial en el botón de cerrar
        closeBtnRef.current?.focus();

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de imagen"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full rounded-2xl glass p-2 outline-none"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    ref={closeBtnRef}
                    type="button"
                    aria-label="Cerrar"
                    onClick={onClose}
                    className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-white/20 border border-white/30
                     hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/50
                     text-white text-xl leading-none flex items-center justify-center"
                >
                    ×
                </button>

                {/* Imagen */}
                <img
                    src={src}
                    alt={alt}
                    className="block max-h-[82vh] w-auto mx-auto rounded-xl shadow-2xl"
                />
            </div>
        </div>
    );
}
