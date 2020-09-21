'use strict'

{

    let slider1 = new Swiper ('.slider1', {

        spaceBetween: 8,
        loop: true,  //ループ可能（ループモードを有効に）

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });



    let slider2 = new Swiper ('.slider2', {

        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 1.1,
        spaceBetween: 8,
    });

}