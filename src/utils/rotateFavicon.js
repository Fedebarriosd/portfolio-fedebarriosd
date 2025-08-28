// src/utils/rotateFavicon.js
(() => {
    // --------------- opciones ---------------
    const SIZE = 64;          // tamaño del canvas que generamos
    const FPS = 20;           // frames por segundo
    const REV_PER_SEC = 0.05;  // vueltas por segundo (0.8 = 48 rpm)
    // ----------------------------------------

    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Busca el <link rel="icon">, o crea uno si no existe
    const link =
        document.querySelector("link[rel~='icon']") ||
        (() => { const l = document.createElement('link'); l.rel = 'icon'; document.head.appendChild(l); return l; })();

    const originalHref = link.getAttribute('href') || '/favicon.svg';
    if (prefersReduce) { link.href = originalHref; return; }

    const img = new Image();
    img.src = originalHref;
    img.crossOrigin = 'anonymous'; // por si fuese .png/svg servido por tu dominio

    // Canvas HiDPI
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

        // Escalamos la imagen para que entre con un poco de padding
        const PAD = 2;
        const maxW = SIZE - PAD * 2;
        const maxH = SIZE - PAD * 2;
        const s = Math.min(maxW / img.width, maxH / img.height);

        ctx.drawImage(
            img,
            - (img.width * s) / 2,
            - (img.height * s) / 2,
            img.width * s,
            img.height * s
        );
        ctx.restore();

        link.href = canvas.toDataURL('image/png');
    }

    let timer = null;
    function start() {
        if (timer || !img.complete) return;
        const t0 = performance.now();
        draw(0);
        timer = setInterval(() => draw(performance.now() - t0), 1000 / FPS);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    img.onload = start;
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop(); else start();
    });
})();
