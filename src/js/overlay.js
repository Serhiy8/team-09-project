<<<<<<< Updated upstream
const items = document.querySelectorAll('.catalog__item');
items.forEach(open => {
    const infoCh = open.querySelector('.catalog__item-info');
    const infoIcon = open.querySelector('.catalog__info-icon');

    let infoVisible = false;
    let infoActive = false;

    infoIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // зупинити подальше вспливання подій
        if (event.detail <= 1) {
            if (infoVisible) {
=======
const items = document.querySelector('.catalog__item:nth-child(1)');
const infoCh = document.querySelector('.catalog__item:nth-child(1) .catalog__item-info');
const infoIcon = document.querySelector('.catalog__item:nth-child(1) .catalog__info-icon');

let infoVisible = false;
let infoActive = false;

infoIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // зупинити подальше вспливання подій
    if (event.detail <= 1) {
        if (infoVisible) {
>>>>>>> Stashed changes
            infoCh.classList.remove('visible');
            infoVisible = false;
            infoIcon.classList.remove('info-active');
            infoActive = false;
<<<<<<< Updated upstream
            } else {
=======
        } else {
>>>>>>> Stashed changes
            infoCh.classList.add('visible');
            infoVisible = true;
            infoIcon.classList.add('info-active');
            infoActive = true;
<<<<<<< Updated upstream
            }
        }
    });

    open.addEventListener('click', (event) => {
        if (event.target === infoCh && infoVisible) {
=======
        }
    }
});

infoCh.addEventListener('click', (event) => {
    if (event.target === infoCh && infoVisible) {
        infoCh.classList.remove('visible');
        infoVisible = false;
        infoIcon.classList.remove('info-active');
        infoActive = false;
    }
});

infoIcon.addEventListener('touchend', (event) => {
    if (event.detail <= 1) {
        if (infoVisible) {
>>>>>>> Stashed changes
            infoCh.classList.remove('visible');
            infoVisible = false;
            infoIcon.classList.remove('info-active');
            infoActive = false;
<<<<<<< Updated upstream
        }
    });

    infoIcon.addEventListener('touchend', (event) => {
        if (event.detail <= 1) {
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

    // open.addEventListener('touchstart', (event) => {
    //         if (infoVisible) {
    //             event.preventDefault(); // запобігти подальшому вспливанню подій
    //         }
    // });
})
=======
        } else {
            infoCh.classList.add('visible');
            infoVisible = true;
            infoIcon.classList.add('info-active');
            infoActive = true;
        }
    }
});

items.addEventListener('touchstart', (event) => {
    if (infoVisible) {
        event.preventDefault(); // запобігти подальшому вспливанню подій
    }
});
>>>>>>> Stashed changes
