new Swiper('.slider-portfolio', {

    navigation: {
        nextEl: '.swiper-button_next',
        prevEl: '.swiper-button_prev',
    },

    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'bullet-active',
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});