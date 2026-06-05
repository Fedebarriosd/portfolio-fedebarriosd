import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Cursor from './Cursor.jsx';

export default function NotFound() {
    return (
        <div className="min-h-dvh bg-stone-50 text-zinc-900 flex items-center justify-center px-4">
            <Cursor />
            <motion.div
                className="text-center max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <motion.p
                    className="text-[10rem] sm:text-[12rem] font-black leading-none tracking-tighter text-orange-500 select-none"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
                >
                    404
                </motion.p>

                <h1 className="text-2xl sm:text-3xl font-bold -mt-4">
                    Página no encontrada
                </h1>

                <p className="mt-3 text-zinc-500">
                    La ruta que buscás no existe o fue movida.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/" className="btn-primary gap-2">
                        <Home size={16} /> Ir al inicio
                    </Link>
                    <button onClick={() => window.history.back()} className="btn-ghost gap-2">
                        <ArrowLeft size={16} /> Volver
                    </button>
                </div>

                <p className="mt-8 text-xs text-zinc-400 uppercase tracking-widest">@fedebarriosd</p>
            </motion.div>
        </div>
    );
}
