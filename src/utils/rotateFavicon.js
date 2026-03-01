// src/utils/rotateFavicon.js
(() => {
  const SIZE = 32;          // 16 o 32 para tabs; 32 suele verse mejor
  const FPS = 12;           // no hace falta más (menos glitch / menos CPU)
  const REV_PER_SEC = 0.08; // vueltas por segundo
  const PAD = 2;            // padding interno

  const prefersReduce =
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  // Si el usuario pidió reducir movimiento, no animar
  if (prefersReduce) return;

  // Buscar o crear <link rel="icon">
  let link =
    document.getElementById('app-favicon') ||
    document.querySelector("link[rel~='icon']");

  if (!link) {
    link = document.createElement('link');
    link.id = 'app-favicon';
    link.rel = 'icon';
    document.head.appendChild(link);
  } else if (!link.id) {
    link.id = 'app-favicon';
  }

  // Favicons candidatos (priorizar PNG)
  const candidates = [
    '/favicon.png',
    link.getAttribute('href'),
    '/favicon.ico',
    '/favicon.svg',
  ].filter(Boolean);

  // Cargar imagen con fallback
  function loadIcon(urls, onDone) {
    if (!urls.length) return onDone(null, null);
    const src = urls[0];
    const img = new Image();
    img.crossOrigin = 'anonymous'; // mismo origen ok
    img.onload = () => onDone(img, src);
    img.onerror = () => loadIcon(urls.slice(1), onDone);
    img.src = src;
  }

  // Manejo de Blob URL para favicon
  let lastObjectUrl = null;
  function applyFaviconBlob(blob) {
    // Revocar el anterior (para no filtrar memoria)
    if (lastObjectUrl) URL.revokeObjectURL(lastObjectUrl);
    lastObjectUrl = URL.createObjectURL(blob);

    // Importante: setear type/sizes para que el browser lo interprete bien
    link.type = 'image/png';
    link.sizes = `${SIZE}x${SIZE}`;
    link.href = lastObjectUrl;
  }

  loadIcon(candidates, (img, usedSrc) => {
    if (!img) {
      console.warn('rotateFavicon: no pude cargar ningún favicon.');
      return;
    }

    // Dimensiones seguras
    const iw = img.naturalWidth || img.width || SIZE;
    const ih = img.naturalHeight || img.height || SIZE;

    // Canvas offscreen
    const canvas = document.createElement('canvas');
    canvas.width = SIZE;
    canvas.height = SIZE;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;

    // Evitar carreras async de toBlob
    let pendingBlob = false;
    let frameId = 0;
    let lastApplied = 0;

    // Loop
    let running = false;
    let lastFrameTime = 0;

    function drawAndQueue(nowMs) {
      const id = ++frameId;
      const angle = (nowMs / 1000) * (2 * Math.PI) * REV_PER_SEC;

      ctx.clearRect(0, 0, SIZE, SIZE);

      ctx.save();
      ctx.translate(SIZE / 2, SIZE / 2);
      ctx.rotate(angle);

      const s = Math.min(
        (SIZE - PAD * 2) / iw,
        (SIZE - PAD * 2) / ih
      );

      ctx.drawImage(
        img,
        -(iw * s) / 2,
        -(ih * s) / 2,
        iw * s,
        ih * s
      );

      ctx.restore();

      // Solo 1 toBlob en vuelo
      if (pendingBlob) return;
      pendingBlob = true;

      canvas.toBlob(
        (blob) => {
          pendingBlob = false;
          if (!blob) return;

          // Descartar callbacks viejos si el browser reordenó
          if (id < lastApplied) return;
          lastApplied = id;

          applyFaviconBlob(blob);
        },
        'image/png',
        0.92
      );
    }

    function loop(now) {
      if (!running) return;

      const interval = 1000 / FPS;
      if (now - lastFrameTime >= interval) {
        lastFrameTime = now;
        drawAndQueue(now);
      }
      requestAnimationFrame(loop);
    }

    function start() {
      if (running) return;
      running = true;
      lastFrameTime = 0;
      requestAnimationFrame(loop);
    }

    function stop() {
      running = false;

      // Volver al favicon estático (y limpiar blob URL)
      if (usedSrc) link.href = usedSrc;

      if (lastObjectUrl) {
        URL.revokeObjectURL(lastObjectUrl);
        lastObjectUrl = null;
      }
      pendingBlob = false;
    }

    // Pausar cuando la pestaña no está visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });

    // Iniciar si está visible
    if (document.visibilityState !== 'hidden') start();
  });
})();