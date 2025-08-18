import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative overflow-hidden rounded-3xl p-8 lg:p-12
                    bg-gradient-to-br from-white/10 to-white/0 border border-white/15">
            {/* blobs sutiles */}
            <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />


            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-300 to-violet-300 bg-clip-text text-transparent">
                    Federico Barrios
                </span>
            </h1>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/70">@fedebarriosd</p>

            <p className="mt-4 text-white/80 max-w-2xl">
                Estudiante de Ingeniería Informática · Apasionado por la programación
            </p>

        </div>
    );
}
