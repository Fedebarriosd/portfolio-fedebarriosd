import { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const selectorsInteractive =
  'a, button, [role="button"], input, textarea, select, .cursor-interactive';

export default function Cursor() {
  // no cursor en mobile/táctil o si el usuario pide menos animación
  const isTouch = typeof window !== 'undefined' && matchMedia('(pointer:coarse)').matches;
  const reduce = typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || reduce) return null;

  // posición
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // springs (anillo: más suave, punto: más rápido)
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.3 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.3 });
  const dotX  = useSpring(x, { stiffness: 420, damping: 28, mass: 0.18 });
  const dotY  = useSpring(y, { stiffness: 420, damping: 28, mass: 0.18 });

  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => setActive(!!e.target.closest(selectorsInteractive));
    const leave = () => setActive(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', leave);
    };
  }, [x, y]);

  // tamaños (más exagerado en hover)
  const ringSize = useMemo(() => (active ? 42 : 22), [active]);
  const dotSize  = useMemo(() => (active ? 8  : 4 ), [active]);

  return (
    <div className="fixed inset-0 z-[70] pointer-events-none hidden lg:block">
      {/* anillo */}
      <motion.div
        style={{ left: ringX, top: ringY }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full
                   border border-white/70 mix-blend-difference"
        animate={{ width: ringSize, height: ringSize, opacity: 0.9 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
      {/* punto */}
      <motion.div
        style={{ left: dotX, top: dotY }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full
                   bg-white mix-blend-difference"
        animate={{ width: dotSize, height: dotSize, opacity: 0.95 }}
        transition={{ type: 'spring', stiffness: 480, damping: 28 }}
      />
    </div>
  );
}
