import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Cursor from './Cursor.jsx';

const setVars = (el, { tx = 0, ty = 0, scale = 1, rot = '0deg' }) => {
    if (!el) return;
    el.style.setProperty('--tx', `${tx}px`);
    el.style.setProperty('--ty', `${ty}px`);
    el.style.setProperty('--scale', `${scale}`);
    el.style.setProperty('--rot', rot);
};

export default function NotFound() {
    const blobA = useRef(null), blobB = useRef(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setVars(blobA.current, { tx: x * 42, ty: y * 42, scale: hovered ? 1.1 : 1, rot: hovered ? '6deg' : '0deg' });
        setVars(blobB.current, { tx: x * -72, ty: y * -72, scale: hovered ? 1.1 : 1, rot: hovered ? '-6deg' : '0deg' });
    };

    return (
        <div
            className="min-h-dvh text-white relative overflow-hidden flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                setVars(blobA.current, { tx: 0, ty: 0, scale: 1, rot: '0deg' });
                setVars(blobB.current, { tx: 0, ty: 0, scale: 1, rot: '0deg' });
            }}
        >
            {/* Fondo */}
            <div className="absolute inset-0 -z-20 theme-bg" />
            <div ref={blobA} className="absolute -top-24 -left-16 h-80 w-80 rounded-full blob blob-a float-slow" />
            <div ref={blobB} className="absolute bottom-0 right-0 h-96 w-96 rounded-full blob blob-b float-slow" />

            <Cursor />

            <motion.div
                className="relative text-center px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {/* Card glass */}
                <div className="glass rounded-3xl p-10 sm:p-16 max-w-lg mx-auto">
                    {/* Blobs internos sutiles */}
                    <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

                    <motion.p
                        className="text-8xl sm:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 to-violet-300 bg-clip-text text-transparent select-none"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                    >
                        404
                    </motion.p>

                    <motion.h1
                        className="mt-4 text-2xl sm:text-3xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                    >
                        Página no encontrada
                    </motion.h1>

                    <motion.p
                        className="mt-3 text-white/60 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                    >
                        La ruta que buscás no existe o fue movida.
                    </motion.p>

                    <motion.div
                        className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                    >
                        <Link to="/" className="btn-primary gap-2">
                            <Home size={16} />
                            Ir al inicio
                        </Link>
                        <button onClick={() => window.history.back()} className="btn-ghost gap-2">
                            <ArrowLeft size={16} />
                            Volver
                        </button>
                    </motion.div>
                </div>

                <p className="mt-6 text-xs text-white/30 uppercase tracking-widest">@fedebarriosd</p>
            </motion.div>
        </div>
    );
}
