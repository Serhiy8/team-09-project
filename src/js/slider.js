
// -- -- Initialize Swiper --  --

const swiper = new Swiper('.mySwiper', {
slidesPerView: 1,
spaceBetween: 10,
loop: true,
keyboard: {
  enabled: true,
},

navigation: {
  nextEl: '.next-button',
  prevEl: '.previous-button',
},

 pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
return '0<span class="' + currentClass + '"></span>' + '<div class="swiper-dash"></div>' 
+ '0<span class="' + totalClass + '"></span>';
    },
    
  },

});
