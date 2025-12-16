import { forwardRef, useRef, useEffect } from 'react';

// clamp helper
const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

const MagneticButton = forwardRef(
  (
    {
      children,
      className = '',     
      href,               
      as,                 
      strength = 0.6,     
      maxTranslate = 28,  
      scale = 1.06,       
      ...props
    },
    ref,
  ) => {
    const btnRef = useRef(null);
    const innerRef = useRef(null);
    const raf = useRef(0);

    // merge refs
    const setRef = (node) => {
      btnRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    };

    useEffect(() => () => cancelAnimationFrame(raf.current), []);

    const onMove = (e) => {
      const el = btnRef.current;
      const inner = innerRef.current || el;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);

      const tx = clamp(x * strength, -maxTranslate, maxTranslate);
      const ty = clamp(y * strength, -maxTranslate, maxTranslate);

      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
        if (inner && inner !== el) {
          inner.style.transform = `translate(${tx * 0.3}px, ${ty * 0.3}px)`; // parallax leve
        }
      });
    };

    const reset = () => {
      const el = btnRef.current;
      const inner = innerRef.current || el;
      cancelAnimationFrame(raf.current);
      if (el) el.style.transform = 'translate(0,0) scale(1)';
      if (inner && inner !== el) inner.style.transform = 'translate(0,0)';
    };

    const Comp = as || (href ? 'a' : 'button');

    return (
      <Comp
        ref={setRef}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onBlur={reset}
        className={`inline-flex items-center justify-center rounded-xl px-4 py-2 transition-transform will-change-transform ${className}`}
        {...props}
      >
        {/* Contenido separado para parallax sutil */}
        <span ref={innerRef} className="inline-flex items-center">
          {children}
        </span>
      </Comp>
    );
  },
);

export default MagneticButton;
