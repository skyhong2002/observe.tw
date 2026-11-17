(() => {
  const english = document.documentElement.lang === 'en';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const loaded = new WeakMap();

  function prepare(slide) {
    const img = slide.querySelector('img');
    if (!loaded.has(img)) {
      const ready = (async () => {
        img.loading = 'eager';
        if (img.dataset.src) {
          img.src = img.dataset.src;
          delete img.dataset.src;
        } else if (img.complete && !img.naturalWidth) {
          // A failed request can be retried without discarding the visible slide.
          img.src = img.getAttribute('src');
        }
        await img.decode();
      })();
      loaded.set(img, ready);
      // Share in-flight work, but decode again on a later visit in case the
      // browser has evicted a hidden image's decoded bitmap from memory.
      ready.then(() => loaded.delete(img), () => loaded.delete(img));
    }
    return loaded.get(img);
  }

  const preload = (gallery) => gallery.querySelectorAll('.gallery-slide').forEach((slide) => {
    prepare(slide).catch(() => {});
  });
  const nearby = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
      preload(entry.target);
      nearby.unobserve(entry.target);
    });
  }, { rootMargin: '800px 0px' }) : null;

  document.querySelectorAll('.gallery').forEach((gallery) => {
    const slides = [...gallery.querySelectorAll('.gallery-slide')];
    const dots = [...gallery.querySelectorAll('[data-slide]')];
    const stage = gallery.querySelector('.gallery-stage');
    const label = gallery.querySelector('.gallery-label');
    const count = gallery.querySelector('.gallery-count');
    const status = gallery.querySelector('.gallery-status');
    let current = 0;
    let requested = 0;
    let request = 0;
    let finishTransition;
    let gesture;
    let swiped = false;

    async function show(index, focusSlide = false) {
      requested = (index + slides.length) % slides.length;
      const target = requested;
      const ticket = ++request;
      stage.setAttribute('aria-busy', 'true');
      try {
        await prepare(slides[target]);
      } catch {
        if (ticket === request) {
          requested = current;
          stage.removeAttribute('aria-busy');
          status.textContent = english ? 'Screenshot unavailable. Please try again.' : '圖片暫時無法載入，請再試一次。';
        }
        return;
      }
      if (ticket !== request) return;
      finishTransition?.();
      const previous = slides[current];
      const next = slides[target];
      next.hidden = false;
      if (target !== current && !reducedMotion.matches && next.animate) {
        // Keep the decoded old image underneath until the new image is opaque.
        previous.inert = true;
        previous.style.zIndex = '0';
        next.style.zIndex = '1';
        const animation = next.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, easing: 'ease-out' });
        const cleanup = () => {
          previous.hidden = true;
          previous.inert = false;
          previous.style.zIndex = '';
          next.style.zIndex = '';
          animation.cancel();
          finishTransition = null;
        };
        finishTransition = cleanup;
        animation.finished.then(cleanup, () => {});
      } else {
        slides.forEach((slide, i) => { slide.hidden = i !== target; });
      }
      current = target;
      stage.removeAttribute('aria-busy');
      dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
      label.textContent = slides[current].dataset.label;
      count.textContent = `${current + 1} / ${slides.length}`;
      status.textContent = english
        ? `Screenshot ${current + 1} of ${slides.length}: ${label.textContent}`
        : `第 ${current + 1} 張，共 ${slides.length} 張：${label.textContent}`;
      if (focusSlide) next.focus({ preventScroll: true });
    }

    gallery.querySelector('.gallery-prev').addEventListener('click', () => show(requested - 1));
    gallery.querySelector('.gallery-next').addEventListener('click', () => show(requested + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    gallery.addEventListener('keydown', (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const target = { ArrowLeft: requested - 1, ArrowRight: requested + 1, Home: 0, End: slides.length - 1 }[e.key];
      if (target === undefined) return;
      e.preventDefault();
      // Keep focus visible when changing the slide from its source link.
      const fromSlide = e.target.closest('.gallery-slide');
      show(target, Boolean(fromSlide));
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
      show(requested + (dx < 0 ? 1 : -1));
    }, { passive: true });
    stage.addEventListener('touchcancel', () => { gesture = null; }, { passive: true });
    stage.addEventListener('click', (e) => {
      if (swiped && e.target.closest('.gallery-slide')) {
        e.preventDefault();
        swiped = false;
      }
    }, true);
    gallery.querySelector('.gallery-controls').hidden = false;
    if (nearby) nearby.observe(gallery);
    else preload(gallery);
  });
})();
