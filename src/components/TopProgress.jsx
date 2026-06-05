import { motion, useScroll, useSpring } from 'framer-motion';

export default function TopProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-orange-500 pointer-events-none"
    />
  );
}
