(() => {
  const english = document.documentElement.lang === 'en';
  document.querySelectorAll('.gallery').forEach((gallery) => {
    const slides = [...gallery.querySelectorAll('.gallery-slide')];
    const dots = [...gallery.querySelectorAll('[data-slide]')];
    const stage = gallery.querySelector('.gallery-stage');
    const label = gallery.querySelector('.gallery-label');
    const count = gallery.querySelector('.gallery-count');
    const status = gallery.querySelector('.gallery-status');
    let current = 0;
    let gesture;
    let swiped = false;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.hidden = i !== current;
        if (i === current) {
          const img = slide.querySelector('img');
          if (img.dataset.src) {
            img.src = img.dataset.src;
            delete img.dataset.src;
          }
          img.loading = 'eager';
        }
      });
      dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
      label.textContent = slides[current].dataset.label;
      count.textContent = `${current + 1} / ${slides.length}`;
      status.textContent = english
        ? `Screenshot ${current + 1} of ${slides.length}: ${label.textContent}`
        : `第 ${current + 1} 張，共 ${slides.length} 張：${label.textContent}`;
    }

    gallery.querySelector('.gallery-prev').addEventListener('click', () => show(current - 1));
    gallery.querySelector('.gallery-next').addEventListener('click', () => show(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    gallery.addEventListener('keydown', (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const target = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: slides.length - 1 }[e.key];
      if (target === undefined) return;
      e.preventDefault();
      // Keep focus visible when changing the slide from its source link.
      const fromSlide = e.target.closest('.gallery-slide');
      show(target);
      if (fromSlide) slides[current].focus({ preventScroll: true });
    });
    stage.addEventListener('touchstart', (e) => {
      swiped = false;
      gesture = e.touches.length === 1 && !e.target.closest('button')
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
    }, { passive: true });
    stage.addEventListener('touchend', (e) => {
      if (!gesture || e.touches.length) return;
      const dx = e.changedTouches[0].clientX - gesture.x;
      const dy = e.changedTouches[0].clientY - gesture.y;
      gesture = null;
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.3) return;
      swiped = true;
      show(current + (dx < 0 ? 1 : -1));
    }, { passive: true });
    stage.addEventListener('touchcancel', () => { gesture = null; }, { passive: true });
    stage.addEventListener('click', (e) => {
      if (swiped && e.target.closest('.gallery-slide')) {
        e.preventDefault();
        swiped = false;
      }
    }, true);
    gallery.querySelector('.gallery-controls').hidden = false;
  });
})();
