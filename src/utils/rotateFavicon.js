// src/utils/rotateFavicon.js
(() => {
  const SIZE = 64;           // canvas
  const FPS = 20;
  const REV_PER_SEC = 0.08;  // velocidad
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Usa nuestro <link> si existe, si no crea uno
  const link =
    document.getElementById('app-favicon') ||
    document.querySelector("link[rel~='icon']") ||
    (() => { const l = document.createElement('link'); l.id = 'app-favicon'; l.rel = 'icon'; document.head.appendChild(l); return l; })();

  // Candidatos de icono (actual, svg, ico)
  const candidates = [
    link.getAttribute('href'),
    '/favicon.svg',
    '/favicon.ico',
  ].filter(Boolean);

  // Si el usuario pidió reducir movimiento, dejá el favicon estático
  if (prefersReduce) { link.href = candidates[0]; return; }

  // Carga con fallback
  function loadIcon(urls, onDone) {
    if (!urls.length) return onDone(null);
    const src = urls[0];
    const img = new Image();
    img.crossOrigin = 'anonymous'; // mismo origen ok
    img.onload = () => onDone(img);
    img.onerror = () => loadIcon(urls.slice(1), onDone);
    img.src = src;
  }

  loadIcon(candidates, (img) => {
    if (!img) {
      console.warn('rotateFavicon: no pude cargar ningún favicon.');
      return;
    }

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const canvas = document.createElement('canvas');
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    function draw(tMs) {
      const angle = (tMs / 1000) * (2 * Math.PI) * REV_PER_SEC;
      ctx.clearRect(0, 0, SIZE, SIZE);
      ctx.save();
      ctx.translate(SIZE / 2, SIZE / 2);
      ctx.rotate(angle);

      const PAD = 2;
      const s = Math.min(
        (SIZE - PAD * 2) / img.width,
        (SIZE - PAD * 2) / img.height
      );

      ctx.drawImage(
        img,
        -(img.width * s) / 2,
        -(img.height * s) / 2,
        img.width * s,
        img.height * s
      );
      ctx.restore();

      try {
        link.href = canvas.toDataURL('image/png');
      } catch (e) {
        console.warn('rotateFavicon: canvas tainted, dejo estático.', e);
        link.href = candidates[0];
        stop();
      }
    }

    let timer = null, t0 = 0;
    function start() {
      if (timer) return;
      t0 = performance.now();
      draw(0);
      timer = setInterval(() => draw(performance.now() - t0), 1000 / FPS);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    // Pausar cuando la pestaña no está visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { stop(); link.href = candidates[0]; }
      else { start(); }
    });

    // iniciar
    if (document.visibilityState !== 'hidden') start();
  });
})();
