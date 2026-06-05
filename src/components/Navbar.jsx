import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { to: '/about', label: 'Sobre mí' },
        { to: '/projects', label: 'Proyectos' },
        { to: '/contact', label: 'Contacto' },
    ];

    const desktopLinkClass = ({ isActive }) =>
        `text-sm font-medium transition-colors pb-0.5 ${
            isActive
                ? 'text-zinc-900 border-b-2 border-orange-500'
                : 'text-zinc-500 hover:text-zinc-900'
        }`;

    const closeMenu = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                {/* Brand */}
                <Link
                    to="/"
                    className="font-bold tracking-tight text-zinc-900 hover:text-orange-500 transition-colors"
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

                {/* Mobile toggle */}
                <button
                    type="button"
                    className="sm:hidden p-2 rounded-xl border border-stone-200 hover:bg-stone-100 transition-colors"
                    aria-label="Abrir menú"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile panel */}
            {open && (
                <div className="sm:hidden border-t border-stone-200 px-4 pb-4 bg-stone-50">
                    <div className="pt-3 flex flex-col gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-orange-50 text-orange-600'
                                            : 'text-zinc-600 hover:bg-stone-100'
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
