const swiper = new Swiper('.swiper', {
    slidesPerView: 1,

    spaceBetween: 20,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    }, navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1078: {
            spaceBetween: 20,
            slidesPerView: 1,
            centeredSlides: false,

        }
    }
});
const swiperr = new Swiper('.sw2', {
    slidesPerView: 1,

    spaceBetween: 20,
    centeredSlides: false,

    breakpoints: {
        768: {
            spaceBetween: 20,
            slidesPerView: 3,
            centeredSlides: false,

        }
    }
});