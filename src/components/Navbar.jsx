import React, { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { href: '#about', label: 'Sobre mí' },
        { href: '#projects', label: 'Proyectos' },
        { href: '#skills', label: 'Skills' },
        { href: '#progheads', label: 'Progheads_PY' },
        { href: '#contact', label: 'Contacto' },
    ];

    const closeMenu = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 mx-4 my-4">
            <nav className="glass rounded-2xl" aria-label="Main">
                <div className="container mx-auto flex items-center justify-between px-4 py-3">
                    {/* Brand */}
                    <a href="#home" className="font-semibold tracking-wide">
                        Federico Barrios
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden sm:flex items-center gap-6 text-sm">
                        {navItems.slice(0, 4).map((item) => (
                            <a key={item.href} href={item.href} className="hover:opacity-90">
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <motion.a
                        href="#contact"
                        className="hidden sm:inline-flex btn-ghost gap-2"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                    >
                        <Mail size={22} />Hablemos
                    </motion.a>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        className="sm:hidden inline-flex items-center justify-center rounded-xl p-2 bg-white/10 border border-white/20 hover:bg-white/15 transition"
                        aria-label="Abrir menú"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile panel */}
                {open && (
                    <div className="sm:hidden border-t border-white/15 px-4 pb-4">
                        <div className="pt-3 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="rounded-lg px-3 py-2 hover:bg-white/10"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="mt-1 inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-white/10 border border-white/20 hover:bg-white/15"
                            >
                                <Mail size={18} /> Hablemos
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
