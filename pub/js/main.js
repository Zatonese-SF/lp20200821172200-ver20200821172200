'use strict';

{

    // ▼ swiper ▼

        let mySwiper = new Swiper ('.swiper-container', {

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

            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        });

    // ▲ swiper ▲




    
    const tagName = [

        'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
    ];

    function shuffle(arr) {
        
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    const shuffledChoices = shuffle([...tagName]);

    // console.log(shuffledChoices);

    for(let i = 0; i <= 20; i++) {
        const tagItem = document.createElement('li');
        tagItem.textContent = shuffledChoices[i];

        if(i >= 0 && i <= 6) {
            const tagList02 = document.getElementById('tagList01');
            tagList02.appendChild(tagItem);
        }

        if(i >= 7 && i <= 13) {
            const tagList02 = document.getElementById('tagList02');
            tagList02.appendChild(tagItem);
        }

        if(i >= 14 && i <= 20) {
            const tagList02 = document.getElementById('tagList03');
            tagList02.appendChild(tagItem);
        }
    }





        

}