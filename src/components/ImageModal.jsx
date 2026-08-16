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
                className="relative max-w-4xl w-full rounded-none bg-white dark:bg-zinc-900 border-2 border-stone-200 dark:border-zinc-700 p-2 shadow-[8px_8px_0_0_theme(colors.orange.500)] outline-none"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    ref={closeBtnRef}
                    type="button"
                    aria-label="Cerrar"
                    onClick={onClose}
                    className="absolute -top-3 -right-3 h-10 w-10 rounded-none bg-white dark:bg-zinc-900 border-2 border-stone-200 dark:border-zinc-700 shadow-[3px_3px_0_0_theme(colors.zinc.900)] dark:shadow-[3px_3px_0_0_theme(colors.zinc.700)]
                     hover:border-orange-400 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400/40
                     text-zinc-600 dark:text-zinc-300 text-xl leading-none flex items-center justify-center transition-colors"
                >
                    ×
                </button>

                {/* Imagen */}
                <img
                    src={src}
                    alt={alt}
                    className="block max-h-[82vh] w-auto mx-auto rounded-none"
                />
            </div>
        </div>
    );
}
