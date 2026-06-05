import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';
import Cursor from './Cursor.jsx';

export default function Gracias() {
    return (
        <div className="min-h-dvh bg-stone-50 text-zinc-900 flex items-center justify-center px-4">
            <Cursor />
            <motion.div
                className="text-center max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-4">
                    Mensaje enviado
                </p>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                    ¡Gracias!
                </h1>
                <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
                    Recibí tu mensaje y te respondo lo antes posible.
                </p>
                <Link to="/" className="mt-8 btn-primary gap-2 inline-flex">
                    <Home size={17} /> Volver al inicio
                </Link>
            </motion.div>
        </div>
    );
}
