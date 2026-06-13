import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext.jsx';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { dark, toggle } = useDarkMode();

    const navItems = [
        { to: '/about', label: 'Sobre mí' },
        { to: '/projects', label: 'Proyectos' },
        { to: '/contact', label: 'Contacto' },
    ];

    const desktopLinkClass = ({ isActive }) =>
        `text-sm font-medium transition-colors pb-0.5 ${
            isActive
                ? 'text-zinc-900 dark:text-stone-50 border-b-2 border-orange-500'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-stone-50'
        }`;

    const closeMenu = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-stone-50/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-stone-200 dark:border-zinc-800">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                {/* Brand */}
                <Link
                    to="/"
                    className="font-bold tracking-tight text-zinc-900 dark:text-stone-50 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                    Federico Barrios
                </Link>

                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-8" aria-label="Main">
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} className={desktopLinkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                    className="hidden sm:block"
                >
                    <Link to="/contact" className="btn-primary gap-2 !py-2 !px-4 text-sm">
                        <Mail size={15} /> Hablemos
                    </Link>
                </motion.div>

                {/* Dark mode toggle */}
                <button
                    type="button"
                    onClick={toggle}
                    aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
                    className="p-2 rounded-xl border border-stone-200 dark:border-zinc-700 hover:bg-stone-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-stone-50 transition-colors"
                >
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    className="sm:hidden p-2 rounded-xl border border-stone-200 dark:border-zinc-700 hover:bg-stone-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
                    aria-label="Abrir menú"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile panel */}
            {open && (
                <div className="sm:hidden border-t border-stone-200 dark:border-zinc-800 px-4 pb-4 bg-stone-50 dark:bg-zinc-950">
                    <div className="pt-3 flex flex-col gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400'
                                            : 'text-zinc-600 dark:text-zinc-300 hover:bg-stone-100 dark:hover:bg-zinc-800'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="mt-2 btn-primary gap-2 text-sm justify-center"
                        >
                            <Mail size={15} /> Hablemos
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
