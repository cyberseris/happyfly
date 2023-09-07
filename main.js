import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        990: {
            slidesPerView: 3
        },
        1: {
            slidesPerView: 2
        },
    }
});

    AOS.init();