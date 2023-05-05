const items = document.querySelectorAll('.catalog__item');

items.forEach(item => {
  const likeIcon = item.querySelector('.catalog__like-icon');

  let likeActive = false;

  item.addEventListener('dblclick', event => {
    if (likeActive) {
      likeIcon.classList.remove('like-active');
      likeActive = false;
    } else {
      likeIcon.classList.add('like-active');
      likeActive = true;
    }
  });
});
