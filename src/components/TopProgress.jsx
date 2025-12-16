import { motion, useScroll, useSpring } from 'framer-motion';

export default function TopProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gradient-to-r from-emerald-400/80 via-sky-400/80 to-violet-400/80 pointer-events-none"
    />
  );
}
