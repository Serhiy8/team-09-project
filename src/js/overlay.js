const items = document.querySelectorAll('.catalog__item');

items.forEach(open => {
    const infoCh = open.querySelector('.catalog__item-info');
    const infoIcon = open.querySelector('.catalog__info-icon');

    let infoVisible = false;
    let infoActive = false;

    infoIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // зупинити подальше вспливання подій
        if (event.detail === 1) {
            if (infoVisible) {
            infoCh.classList.remove('visible');
            infoVisible = false;
            infoIcon.classList.remove('info-active');
            infoActive = false;
            } else {
            infoCh.classList.add('visible');
            infoVisible = true;
            infoIcon.classList.add('info-active');
            infoActive = true;
            }
        }
    });

    open.addEventListener('click', (event) => {
        if (event.target === infoCh && infoVisible) {
            infoCh.classList.remove('visible');
            infoVisible = false;
            infoIcon.classList.remove('info-active');
            infoActive = false;
        }
    });

    infoIcon.addEventListener('touchend', (event) => {
        if (event.detail === 1) {
            if (infoVisible) {
                infoCh.classList.remove('visible');
                infoVisible = false;
                infoIcon.classList.remove('info-active');
                infoActive = false;
            } else {
                infoCh.classList.add('visible');
                infoVisible = true;
                infoIcon.classList.add('info-active');
                infoActive = true;
            }
        }
    });

    open.addEventListener('touchend', (event) => {
    if (event.target === infoCh && infoVisible) {
      infoCh.classList.remove('visible');
      infoVisible = false;
      infoIcon.classList.remove('info-active');
      infoActive = false;
    }
  });
})
