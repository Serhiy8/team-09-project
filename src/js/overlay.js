const items = document.querySelectorAll('.catalog__item');

items.forEach(item => {
  const info = item.querySelector('.catalog__item-info');
  let infoVisible = false;

  item.addEventListener('click', event => {
    if (infoVisible) {
      info.classList.remove('visible');
      infoVisible = false;
    } else {
      info.classList.add('visible');
      infoVisible = true;
    }
  });

  item.addEventListener('touchend', event => {
    if (event.detail === 1) {
      if (infoVisible) {
        info.classList.remove('visible');
        infoVisible = false;
      } else {
        info.classList.add('visible');
        infoVisible = true;
      }
    }
  });
});
