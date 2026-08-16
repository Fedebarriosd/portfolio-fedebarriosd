import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import TopProgress from './components/TopProgress.jsx';
import Cursor from './components/Cursor.jsx';
import { getPageTheme } from './pageTheme.js';

export default function Layout() {
    const { pathname } = useLocation();

    return (
        <div className="relative min-h-dvh bg-stone-50 dark:bg-zinc-950 text-zinc-900 dark:text-stone-50 transition-colors duration-200">
            <TopProgress />
            <Navbar />
            <Cursor />
            <main className={getPageTheme(pathname).bgClass ?? ''}>
                <Outlet />
            </main>
            <footer className="border-t border-stone-200 dark:border-zinc-800 mt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} Fede Barrios</p>
                    <a
                        href="https://github.com/Fedebarriosd/portfolio-fedebarriosd"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                        <Github size={15} /> Código fuente
                    </a>
                </div>
            </footer>
        </div>
    );
}
