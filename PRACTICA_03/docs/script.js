const hoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)');

document.querySelectorAll('.canvas-card').forEach((card) => {
  const summary = card.querySelector('summary');
  let closeTimer;

  card.addEventListener('mouseenter', () => {
    if (!hoverPointer.matches) return;
    window.clearTimeout(closeTimer);
    card.classList.remove('is-closing');
    card.open = true;
  });

  card.addEventListener('mouseleave', () => {
    if (!hoverPointer.matches || !card.open) return;
    card.classList.add('is-closing');
    closeTimer = window.setTimeout(() => {
      card.open = false;
      card.classList.remove('is-closing');
    }, 330);
  });

  // Mouse hover is the desktop interaction; keyboard and touch use the native disclosure.
  summary.addEventListener('click', (event) => {
    if (hoverPointer.matches && event.detail > 0) event.preventDefault();
  });

  card.addEventListener('toggle', () => {
    card.setAttribute('aria-expanded', String(card.open));
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && card.open) {
      card.open = false;
      summary.focus();
    }
  });
});
