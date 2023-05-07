const closeBtns = document.querySelectorAll('.btn-close');
        const openBtns = document.querySelectorAll('.btn-open');
        const saleInfoTexts = document.querySelectorAll('.sale__info-text');

        // Приховуємо тексти та кнопки "Close"
        closeBtns.forEach((closeBtn, index) => {
            closeBtn.addEventListener('click', () => {
                if (!saleInfoTexts[index].classList.contains('hidden')) {
                    saleInfoTexts[index].classList.add('hidden');
                }
                if (!closeBtn.classList.contains('hidden')) {
                    closeBtn.classList.add('hidden');
                }
                if (openBtns[index].classList.contains('hidden')) {
                    openBtns[index].classList.remove('hidden');
                }
            });
        });

        // Показуємо тексти та кнопки "Close"
        openBtns.forEach((openBtn, index) => {
            openBtn.addEventListener('click', () => {
                if (saleInfoTexts[index].classList.contains('hidden')) {
                    saleInfoTexts[index].classList.remove('hidden');
                }
                if (closeBtns[index].classList.contains('hidden')) {
                    closeBtns[index].classList.remove('hidden');
                }
                if (!openBtn.classList.contains('hidden')) {
                    openBtn.classList.add('hidden');
                }
            });
        });