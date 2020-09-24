'use strict';

{

    function shuffle(arr) {
        
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }





    // ▼
    
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

        const tagNameShuffledChoices = shuffle([...tagName]);

        for(let i = 0; i <= 20; i++) {
            const tagItem = document.createElement('li');
            tagItem.textContent = tagNameShuffledChoices[i];

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

    // ▲


    

    
    // ▼

        const label = {

            live: 'LIVE',
            limit: '限定',
            tits: 'オッパイ',
            mark: 'ま●こ',
        };


        
        class Post {

            constructor({id, user, title, splashCount, likeCount, label, thumbnailImg}) {

                this.id = id;
                this.user = user;
                this.title = title;
                this.splashCount = splashCount;
                this.likeCount = likeCount;
                this.label = label;
                this.thumbnailImg = thumbnailImg;
            }
            
            
            
            thumbnail() {

                const thumbnailId = 'thumbnailId' + this.id;
                
                const thumbnailList = document.getElementById('thumbnailList');
                const thumbnailItemElem = document.createElement('li');
                thumbnailItemElem.id = thumbnailId;
                thumbnailItemElem.classList.add('thumbnail__item');
                thumbnailList.appendChild(thumbnailItemElem);

                if(this.thumbnailImg.match(/\.(jpg|png|gif)$/)) {
                    const thumbnailImgElem = document.createElement('img');
                    thumbnailImgElem.classList.add('thumbnail__img');
                    thumbnailImgElem.src = this.thumbnailImg;
                    thumbnailItemElem.appendChild(thumbnailImgElem);
                } else if(this.thumbnailImg.match(/\.(mp4)$/)) {
                    const thumbnailImgElem = document.createElement('video');
                    thumbnailImgElem.classList.add('thumbnail__img');
                    thumbnailImgElem.src = this.thumbnailImg;
                    thumbnailImgElem.setAttribute('playsinline', '');
                    thumbnailImgElem.setAttribute('muted', '');
                    thumbnailImgElem.autoplay = true;
                    thumbnailImgElem.loop = true;
                    thumbnailItemElem.appendChild(thumbnailImgElem);
                }

                const thumbnailInfoElem = document.createElement('div');
                thumbnailInfoElem.classList.add('thumbnail__info');
                thumbnailItemElem.appendChild(thumbnailInfoElem);
        
                const thumbnailTitleElem = document.createElement('div');
                thumbnailTitleElem.classList.add('thumbnail__title');
                thumbnailTitleElem.textContent = this.title;
                thumbnailInfoElem.appendChild(thumbnailTitleElem);

                const thumbnailuserElem = document.createElement('div');
                thumbnailuserElem.classList.add('thumbnail__user');
                thumbnailuserElem.textContent = this.user;
                thumbnailInfoElem.appendChild(thumbnailuserElem);

                const thumbnailReactionElem = document.createElement('div');
                thumbnailReactionElem.classList.add('thumbnail__reaction');
                thumbnailInfoElem.appendChild(thumbnailReactionElem);
                
                const thumbnailSplashCountElem = document.createElement('div');
                thumbnailSplashCountElem.classList.add('thumbnail__splash');
                thumbnailSplashCountElem.textContent = this.splashCount;
                thumbnailReactionElem.appendChild(thumbnailSplashCountElem);
        
                const thumbnailLikeCountElem = document.createElement('div');
                thumbnailLikeCountElem.classList.add('thumbnail__like');
                thumbnailLikeCountElem.textContent = this.likeCount;
                thumbnailReactionElem.appendChild(thumbnailLikeCountElem);

                const thumbnailLabelElem = document.createElement('ul');
                thumbnailLabelElem.classList.add('thumbnail__label');
                thumbnailItemElem.appendChild(thumbnailLabelElem);
        
                if(this.label.includes(label.live) === true) {
                    const thumbnailLiveLabelElem = document.createElement('li');
                    thumbnailLiveLabelElem.classList.add('thumbnail__label-live');
                    thumbnailLiveLabelElem.textContent = label.live;
                    thumbnailLabelElem.appendChild(thumbnailLiveLabelElem);
                }
                
                if(this.label.includes(label.limit) === true) {
                    const thumbnaiLimitLabelElem = document.createElement('li');
                    thumbnaiLimitLabelElem.classList.add('thumbnail__label-limit');
                    thumbnaiLimitLabelElem.textContent = label.limit;
                    thumbnailLabelElem.appendChild(thumbnaiLimitLabelElem);
                }
                
                if(this.label.includes(label.tits) === true) {
                    const thumbnailTitsLabelElem = document.createElement('li');
                    thumbnailTitsLabelElem.classList.add('thumbnail__label-tits');
                    thumbnailTitsLabelElem.textContent = label.tits;
                    thumbnailLabelElem.appendChild(thumbnailTitsLabelElem);
                }

                if(this.label.includes(label.mark) === true) {
                    const thumbnailMarkLabelElem = document.createElement('li');
                    thumbnailMarkLabelElem.classList.add('thumbnail__label-mark');
                    thumbnailMarkLabelElem.textContent = label.mark;
                    thumbnailLabelElem.appendChild(thumbnailMarkLabelElem);
                }

                if(thumbnailLabelElem.children.length === 0) {
                    thumbnailLabelElem.remove();
                }
            }        
        }



        const posts = [

            new Post({
                id: '01',
                user: 'pooiu',
                title: 'はじめるよ',
                splashCount: 100,
                likeCount: 10000,
                label: [],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '02',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: 'https://pocketmonster-gogo.com/video/letsoffpaco/video01.mp4',
            }),

            new Post({
                id: '03',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '04',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '05',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '06',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '07',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '08',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '09',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '10',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '11',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '12',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '13',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: 'https://pocketmonster-gogo.com/video/letsoffpaco/video01.mp4',
            }),

            new Post({
                id: '14',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '15',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '16',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '17',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '18',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '19',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.tits, label.live, label.limit],
                thumbnailImg: '../img/r18.png',
            }),

            new Post({
                id: '20',
                user: 'tete',
                title: 'かかこあお',
                splashCount: 100,
                likeCount: 10000,
                label: [label.mark],
                thumbnailImg: '../img/r18.png',
            }),
        ];



        const postsShuffle = shuffle([...posts]);
        console.log(postsShuffle);



        for(let i = 0; i <= 9; i++) {
            
            postsShuffle[i].thumbnail();
        }

    // ▲





    // ▼

        const modal = document.getElementById('modal');
        const modalClose = document.getElementById('modalClose');
        const mask = document.getElementById('mask');

        // ▼ 背景固定&解除用宣言 ▼

            let scrollPosition;
            //iOS（iPadOSを含む）かどうかのUA判定
            const ua = window.navigator.userAgent.toLowerCase();
            const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
        
        // ▲ 背景固定&解除用宣言 ▲



        const modalOpenProc = () => {
            
            const modalVisuals = [
                '../img/r18.png',
                'https://pocketmonster-gogo.com/video/peacepaco/01/video03.mp4',
                '../img/btn-and.png',
                '../img/r18.png',
                '../img/r18.png',
            ]

            const n = Math.floor(Math.random() * 3);
            const modalVisualSrc = modalVisuals[n];

            const elemCreate = (elem) => {
                const modalVisualElem = document.getElementById('modalVisual');
                elem.classList.add('modal__visualImg');
                elem.src = modalVisualSrc;
                modalVisualElem.appendChild(elem);

            };
            
            if(modalVisualSrc.match(/\.(jpg|png|gif)$/)) {
                const modalVisualImgElem = document.createElement('img');
                elemCreate(modalVisualImgElem);
            } else if(modalVisualSrc.match(/\.(mp4)$/)) {
                const modalVisualImgElem = document.createElement('video');
                elemCreate(modalVisualImgElem);
                modalVisualImgElem.setAttribute('playsinline', '');
                modalVisualImgElem.setAttribute('muted', '');
                modalVisualImgElem.autoplay = true;
                modalVisualImgElem.loop = true;
            }
            
            $('#modal').show('fade', 200);
            $('#mask').show('fade', 200);



            // ▼ 背景固定 ▼

                // bodyのスクロール固定
                function bodyFixedOn() {
                    if(isiOS){
                        // iOSの場合
                        scrollPosition = $(window).scrollTop();
                        $('body').css('position', 'fixed');
                        $('body').css('top', '-' + scrollPosition + 'px');
                    } else {
                        // それ以外
                        $('body').css('overflow', 'hidden');
                    }
                }

                bodyFixedOn();

            // ▲ 背景固定 ▲
        };
        
        const modalCloseProc = () => {
            document.querySelector('.modal__visualImg').remove();

            modal.style.display = 'none';
            mask.style.display = 'none';



            // ▼ 背景固定解除 ▼

                function bodyFixedOff() {
                    if(isiOS){
                        // iOSの場合
                        $('body').css('position', '');
                        $('body').css('top', '');
                        $(window).scrollTop(scrollPosition);
                    }else {
                        // それ以外
                        $('body').css('overflow', '');
                    }
                }

                bodyFixedOff();

            // ▲ 背景固定解除 ▲
        };



        const mainVisualItem = document.querySelectorAll('#mainVisual li');
        const tagItem = document.querySelectorAll('.tag__list li');
        const thumbnailItem = document.querySelectorAll('#thumbnailList li');

        mainVisualItem.forEach((item) => {

            item.addEventListener('click', modalOpenProc);
        });

        tagItem.forEach((item) => {

            item.addEventListener('click', modalOpenProc);
        });

        thumbnailItem.forEach((item) => {

            item.addEventListener('click', modalOpenProc);
        });

        modalClose.addEventListener('click', modalCloseProc);

        mask.addEventListener('click', modalCloseProc);

    // ▲

}