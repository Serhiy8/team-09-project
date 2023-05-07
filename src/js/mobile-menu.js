(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    links: document.querySelectorAll('.mobile-menu-item')
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.links.forEach(link => {
    link.addEventListener('click', () => {
      refs.menu.classList.remove('is-open');
      document.body.classList.remove('is-open');
    });

    link.addEventListener('touchend', () => {
      refs.menu.classList.remove('is-open');
      document.body.classList.remove('is-open');
    });
  });
  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
  }
})();

