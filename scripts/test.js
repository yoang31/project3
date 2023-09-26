window.addEventListener("load", () => {
    const banner = new Swiper(".secSwiper", {
        grabCursor: true,
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
    const input = new Swiper(".inputSwiper", {
        direction: "vertical",
        // on: {
        //     click: function () {
        //         input.autoplay.stop();
        //         console.log("sdsd");
            
        //     }}, on은 한번 돌아가면 실행된다...
        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
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
        grabCursor: true,
      });

      //스와퍼 input 클릭시 애니메이션 멈춤
      let input_swiper = document.querySelector(".inputSwiper");
      input_swiper.addEventListener('click',()=>{
        input.autoplay.stop();
      });
});