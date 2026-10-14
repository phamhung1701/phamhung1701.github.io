(() => {
  const button = document.querySelector('.menu');
  const nav = document.querySelector('.nav-links');
  const closeMenu = () => { nav?.classList.remove('open'); button?.setAttribute('aria-expanded', 'false'); if (button) button.textContent = 'Menu'; };
  button?.addEventListener('click', () => { const open = nav.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); button.textContent = open ? 'Close' : 'Menu'; });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav?.classList.contains('open')) { closeMenu(); button.focus(); } });
  document.querySelectorAll('[data-year]').forEach(item => { item.textContent = new Date().getFullYear(); });
})();
