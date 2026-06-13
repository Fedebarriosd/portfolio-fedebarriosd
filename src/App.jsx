import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TopProgress from './components/TopProgress.jsx';
import Cursor from './components/Cursor.jsx';

export default function Layout() {
    return (
        <div className="min-h-dvh bg-stone-50 dark:bg-zinc-950 text-zinc-900 dark:text-stone-50 transition-colors duration-200">
            <TopProgress />
            <Navbar />
            <Cursor />
            <main>
                <Outlet />
            </main>
            <footer className="border-t border-stone-200 dark:border-zinc-800 mt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} Fede Barrios</p>
                    <p className="text-zinc-400 dark:text-zinc-500">Todos los derechos reservados</p>
                </div>
            </footer>
        </div>
    );
}
