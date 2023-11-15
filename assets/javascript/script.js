// nav-tab slider
const navTab = new Swiper(".navTabSwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        }
    },
    navigation: {
        nextEl: ".nav-tab-next",
        prevEl: ".nav-tab-prev",
    },
});


// Banner slider
const bannerSwiper = new Swiper(".bannerSwiper", {
    autoplay: {
        delay: 3500,
    },
    speed: 600,
    pagination: {
        el: ".swiper-pagination",
    },
});