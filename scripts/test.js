window.addEventListener("load", () => {
    const banner = new Swiper(".secSwiper", {
        speed: 500,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        mousewheel: true,
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
        },
        loop: true
    });
    var s = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
})