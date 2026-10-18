// Counts each .count-number from 0 up to its data-count-to value
// once it scrolls into view, then shows the exact number.
document.querySelectorAll(".count-number").forEach(el => {
  const target = parseInt(el.dataset.countTo, 10) || 0;
  const duration = 2000;

  function run() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = target.toLocaleString();
      return;
    }
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased).toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString();
      }
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      observer.disconnect();
      run();
    }
  }, { threshold: 0.5 });
  observer.observe(el);
});
