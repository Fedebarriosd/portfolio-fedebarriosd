// src/components/Reveal.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({ children, delay = 0, y = 16, className = '' }) {
    const reduce = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={reduce ? false : { opacity: 0, y }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}

export function HoverLift({ children, className = '' }) {
    return (
        <motion.div
            className={className}
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
}
