'use strict';

{

    function shuffle(arr) {
        
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    



    const imgSrcJudge = (src, classN, parentElem) => {

        if(src.match(/\.(jpg|png|gif)$/)) {
            const imgElem = document.createElement('img');
            imgElem.classList.add(classN);
            imgElem.src = src;
            parentElem.appendChild(imgElem);
        } else if(src.match(/\.(mp4)$/)) {
            const imgElem = document.createElement('video');
            imgElem.classList.add(classN);
            imgElem.src = src;
            imgElem.setAttribute('playsinline', '');
            imgElem.setAttribute('muted', '');
            imgElem.autoplay = true;
            imgElem.loop = true;
            parentElem.appendChild(imgElem);
        }
    };

    

    

    // ▼

        const appInfoSubHeight = document.getElementById('appInfoSub').clientHeight;

        document.getElementById('siteHeader').style.marginTop = appInfoSubHeight + 'px';

    // ▲





    // ▼
    
        const tagNames = [

            'アナル',
            'アブノーマル',
            '今スグ',
            'SNS',
            'オッパイ',
            'オナニー',
            'おふざけ',
            'オフパコ',
            '学生',
            'ガチ',
            'ギャル',
            '巨乳',
            '激カワ',
            '激シコ',
            '限定',
            'コスプレ',
            '潮吹き',
            'シコネタ',
            '10代',
            '素人',
            '即パコ',
            '痴女',
            'デカ尻',
            '生中出し',
            'ハイクオリティ',
            'パイパン',
            'ハメ撮り',
            '平成女子',
            'マ●コ',
            '無修正',
            'ライブ',
            '流出',
            
        ];

        const tagNamesShuffledChoices = shuffle([...tagNames]);

        for(let i = 0; i <= 20; i++) {
            const tagItem = document.createElement('li');
            tagItem.textContent = tagNamesShuffledChoices[i];

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
            limited: '限定',
            tits: 'オッパイ',
            mark: 'ま●こ',
        };


        
        class Post {

            constructor({id, user, title, thumbnailImg, label, status, likeCount, splashCount}) {

                this.id = id;
                this.user = user;
                this.title = title;
                this.thumbnailImg = thumbnailImg;
                this.label = label;
                this.status = status;
                this.likeCount = likeCount;
                this.splashCount = splashCount;
            }
            
            
            
            thumbnail() {

                const thumbnailId = 'thumbnailId' + this.id;
                const thumbnailItemElem = document.createElement('li');
                thumbnailItemElem.id = thumbnailId;

                if(this.status === 'pickup') {
                    const thumbnailList = document.getElementById('pickupThumbnailList');
                    thumbnailItemElem.classList.add('thumbnail__pickupItem');
                    thumbnailList.appendChild(thumbnailItemElem);
                } else {
                    const thumbnailList = document.getElementById('mainThumbnailList');
                    thumbnailItemElem.classList.add('thumbnail__mainItem');
                    thumbnailList.appendChild(thumbnailItemElem);
                }

                imgSrcJudge(this.thumbnailImg, 'thumbnail__img', thumbnailItemElem);

                const thumbnailInfoElem = document.createElement('div');
                thumbnailInfoElem.classList.add('thumbnail__info');
                thumbnailItemElem.appendChild(thumbnailInfoElem);
        
                const thumbnailTitleElem = document.createElement('div');
                thumbnailTitleElem.classList.add('thumbnail__title');
                thumbnailTitleElem.innerHTML = this.title;
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
                    const thumbnailLiveLabelImgElem = document.createElement('img');
                    thumbnailLiveLabelImgElem.src = '../img/live.svg';
                    thumbnailLiveLabelImgElem.alt = label.live;
                    thumbnailLiveLabelElem.appendChild(thumbnailLiveLabelImgElem);
                    thumbnailLabelElem.appendChild(thumbnailLiveLabelElem);
                }
                
                if(this.label.includes(label.limited) === true) {
                    const thumbnaiLimitedLabelElem = document.createElement('li');
                    thumbnaiLimitedLabelElem.classList.add('thumbnail__label-limited');
                    const thumbnailLimitedLabelImgElem = document.createElement('img');
                    thumbnailLimitedLabelImgElem.src = '../img/limited.svg';
                    thumbnailLimitedLabelImgElem.alt = label.limited;
                    thumbnaiLimitedLabelElem.appendChild(thumbnailLimitedLabelImgElem);
                    thumbnailLabelElem.appendChild(thumbnaiLimitedLabelElem);
                }
                
                if(this.label.includes(label.tits) === true) {
                    const thumbnailTitsLabelElem = document.createElement('li');
                    thumbnailTitsLabelElem.classList.add('thumbnail__label-tits');
                    const thumbnailTitsLabelImgElem = document.createElement('img');
                    thumbnailTitsLabelImgElem.src = '../img/tits.png';
                    thumbnailTitsLabelImgElem.alt = label.tits;
                    thumbnailTitsLabelElem.appendChild(thumbnailTitsLabelImgElem);
                    thumbnailLabelElem.appendChild(thumbnailTitsLabelElem);
                }

                if(this.label.includes(label.mark) === true) {
                    const thumbnailMarkLabelElem = document.createElement('li');
                    thumbnailMarkLabelElem.classList.add('thumbnail__label-mark');
                    const thumbnailMarkLabelImgElem = document.createElement('img');
                    thumbnailMarkLabelImgElem.src = '../img/mark.png';
                    thumbnailMarkLabelImgElem.alt = label.mark;
                    thumbnailMarkLabelElem.appendChild(thumbnailMarkLabelImgElem);
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
                user: '愛香',
                title: '限界に挑戦してみます&#x1f618;',
                thumbnailImg: '../img/thumbnail_img-01.jpg',
                label: [label.live, label.tits, label.mark],
                likeCount: 23342,
                splashCount: 336,
            }),
    
            new Post({
                id: '02',
                user: 'AINA',
                title: '思いっきり挿れてみたい&#x1f446;',
                thumbnailImg: '../img/thumbnail_img-02.jpg',
                label: [label.live, label.mark],
                likeCount: 19842,
                splashCount: 571,
            }),

            new Post({
                id: '03',
                user: 'アサリ',
                title: '溜まってます…オフパコしないなぁ…',
                thumbnailImg: '../img/thumbnail_img-03.jpg',
                label: [label.live, label.limited],
                likeCount: 74568,
                splashCount: 6871,
            }),

            new Post({
                id: '04',
                user: '明日香',
                title: '潮吹き見てください&#x1f4a6;&#x1f4a6;',
                thumbnailImg: '../img/thumbnail_img-04.jpg',
                label: [label.live, label.mask],
                likeCount: 35722,
                splashCount: 2550,
            }),

            new Post({
                id: '05',
                user: '伊代',
                title: '一緒に気持ち良くなりたいです',
                thumbnailImg: '../img/thumbnail_img-05.jpg',
                label: [label.tits],
                likeCount: 55278,
                splashCount: 3542,
            }),

            new Post({
                id: '06',
                user: 'カンナ',
                title: '誰か見てくれませんか&#x2753;',
                thumbnailImg: '../img/thumbnail_img-06.jpg',
                label: [label.live, label.tits],
                likeCount: 35579,
                splashCount: 487,
            }),

            new Post({
                id: '07',
                user: '小梅',
                title: '乳首イジってください&#x1f495;',
                thumbnailImg: '../img/thumbnail_img-07.jpg',
                label: [label.limited, label.tits],
                likeCount: 42883,
                splashCount: 3522,
            }),

            new Post({
                id: '08',
                user: 'JULIA',
                title: 'とにかく会ってエッチなことしたですー',
                thumbnailImg: '../img/thumbnail_img-08.jpg',
                label: [label.tits, label.mark],
                likeCount: 45822,
                splashCount: 2885,
            }),

            new Post({
                id: '09',
                user: 'とこも',
                title: 'セフレ探してます&#x1f48c;&#x1f48b;',
                thumbnailImg: '../img/thumbnail_img-09.jpg',
                label: [label.limited, label.tits, label.mark],
                likeCount: 41178,
                splashCount: 4210,
            }),

            new Post({
                id: '10',
                user: 'ナミ',
                title: '潮吹いたことないです…吹かせて下さい。',
                thumbnailImg: '../img/thumbnail_img-10.jpg',
                label: [label.live, label.limited],
                likeCount: 67651,
                splashCount: 37801,
            }),

            new Post({
                id: '11',
                user: 'ふーちん',
                title: 'オフパコ希望&#x1f493;&#x1f493;&#x1f493;',
                thumbnailImg: '../img/thumbnail_img-11.jpg',
                label: [label.limited, label.tits, label.mark],
                likeCount: 47881,
                splashCount: 585,
            }),

            new Post({
                id: '12',
                user: 'フミ',
                title: 'フェラさせてー&#x1f445;&#x1f445;&#x1f445;',
                thumbnailImg: '../img/thumbnail_img-12.jpg',
                label: [label.limited],
                likeCount: 18753,
                splashCount: 325,
            }),

            new Post({
                id: '13',
                user: 'MARI',
                title: '初心者です&#x2757;ヨロシクです',
                thumbnailImg: '../img/thumbnail_img-13.jpg',
                label: [label.live, label.limited],
                likeCount: 68244,
                splashCount: 5256,
            }),

            new Post({
                id: '14',
                user: 'ミッキー',
                title: 'オマ●コおっぴろげまーす',
                thumbnailImg: '../img/thumbnail_img-14.jpg',
                label: [label.live, label.mark],
                likeCount: 27541,
                splashCount: 287,
            }),

            new Post({
                id: '15',
                user: '萌&蘭',
                title: 'エッチ教えて下さい&#x1f60a;&#x1f497;',
                thumbnailImg: '../img/thumbnail_img-15.jpg',
                label: [label.live, label.limited, label.tits],
                likeCount: 52055,
                splashCount: 3507,
            }),

            new Post({
                id: '16',
                user: 'ももか',
                title: 'オフパコやりましょー&#x2757;&#x2757;',
                thumbnailImg: '../img/thumbnail_img-16.jpg',
                label: [label.limited, label.tits, label.mark],
                likeCount: 42171,
                splashCount: 1875,
            }),

            new Post({
                id: '17',
                user: '弥生',
                title: 'ア〜ン…イク〜&#x1f92a;&#x1f496;&#x1f4a6;',
                thumbnailImg: '../img/thumbnail_img-17.jpg',
                label: [label.live, label.mark],
                likeCount: 22405,
                splashCount: 748,
            }),

            new Post({
                id: '18',
                user: '優梨',
                title: '即オフパコヤりたいです&#x1f496;',
                thumbnailImg: '../img/thumbnail_img-18.jpg',
                label: [label.live, label.limited, label.tits, label.mark],
                likeCount: 86643,
                splashCount: 11788,
            }),

            new Post({
                id: '19',
                user: 'らら',
                title: 'お・ケ・ツ&#x1f496;',
                thumbnailImg: '../img/thumbnail_img-19.jpg',
                label: [label.limited],
                likeCount: 18564,
                splashCount: 682,
            }),

            new Post({
                id: '20',
                user: 'リリ',
                title: 'エッチしないなぁ…&#x1f445;&#x1f48b;',
                thumbnailImg: '../img/thumbnail_img-20.jpg',
                label: [label.live, label.limited],
                likeCount: 51177,
                splashCount: 7187,
            }),

            new Post({
                id: '21',
                user: '和香',
                title: 'オフパコ&#x1f493;オフパコ&#x1f493;',
                thumbnailImg: 'https://pocketmonster-gogo.com/video/osn/thumbnail_img-21.mp4',
                label: [label.live, label.limited, label.tits],
                likeCount: 48251,
                splashCount: 926,
                status: 'pickup',
            }),

            new Post({
                id: '22',
                user: 'カレン',
                title: 'お相手してくださーい&#x1f63a;',
                thumbnailImg: 'https://pocketmonster-gogo.com/video/osn/thumbnail_img-22.mp4',
                label: [label.live, label.limited, label.tits],
                likeCount: 29453,
                splashCount: 784,
                status: 'pickup',
            }),

            new Post({
                id: '23',
                user: 'NANA',
                title: 'おまんこ見てください&#x2757;&#x2757;',
                thumbnailImg: 'https://pocketmonster-gogo.com/video/osn/thumbnail_img-23.mp4',
                label: [label.live, label.tits, label.mark],
                likeCount: 31579,
                splashCount: 1038,
                status: 'pickup',
            }),

            new Post({
                id: '24',
                user: 'はな',
                title: 'オナニー大好き&#x1f493;&#x1f44d;&#x1f61c;',
                thumbnailImg: 'https://pocketmonster-gogo.com/video/osn/thumbnail_img-24.mp4',
                label: [label.live, label.limited, label.tits, label.mark],
                likeCount: 35841,
                splashCount: 2426,
                status: 'pickup',
            }),
        ];

        const mainThumbnails = [];
        const pickupThumbnails = [];



        posts.forEach((item) => {
            
            if(item.status === 'pickup') {
                pickupThumbnails.push(item);
            } else {
                mainThumbnails.push(item);
            }
        });
        


        const mainThumbnailsShuffle = shuffle([...mainThumbnails]);
        const pickupThumbnailsShuffle = shuffle([...pickupThumbnails]);

        

        for(let i = 0; i <= 9; i++) {
            
            mainThumbnailsShuffle[i].thumbnail();
        }
        
        for(let i = 0; i <= 1; i++) {
            
            pickupThumbnailsShuffle[i].thumbnail();
        }

    // ▲





    // ▼

        const modal = document.getElementById('modal');
        const modalClose = document.getElementById('modalClose');
        const mask = document.getElementById('mask');
        
        const modalCopys = {

            modalCopy01: 'インストール後、<br>即えちえち体験できます!!<br>※ガチ素人のエッチな画像・動画有',
        };

       

        function modalOpenProc(e) {

            const modalCopyElem = document.createElement('p');
            modalCopyElem.classList.add('modal__copy02');
            const modalAppInfo = document.querySelector('.modalAppInfo .appInfo');
            const modalAppInfoIcon = document.querySelector('.modalAppInfo .appInfoIcon');
            modalAppInfo.insertBefore(modalCopyElem, modalAppInfoIcon);

            modalCopyElem.innerHTML = this.name;
            
            $('#modal').show('fade', 200);
            $('#mask').show('fade', 200);
        };

        const modalCloseProc = () => {
            document.querySelector('.modal__copy02').remove();

            modal.style.display = 'none';
            mask.style.display = 'none';
        };

        

        const mainVisual = document.getElementById('mainVisual');
        const tagItem = document.querySelectorAll('.tag__list li');
        const mainThumbnailList = document.querySelectorAll('#mainThumbnailList > li');
        const pickupThumbnailList = document.querySelectorAll('#pickupThumbnailList > li');

        mainVisual.addEventListener('click', {name: modalCopys.modalCopy01, handleEvent: modalOpenProc});

        tagItem.forEach((item) => {

            item.addEventListener('click', {name: modalCopys.modalCopy01, handleEvent: modalOpenProc});
        });

        mainThumbnailList.forEach((item) => {

            item.addEventListener('click', {name: modalCopys.modalCopy01, handleEvent: modalOpenProc});
        });

        pickupThumbnailList.forEach((item) => {

            item.addEventListener('click', {name: modalCopys.modalCopy01, handleEvent: modalOpenProc});
        });

        modalClose.addEventListener('click', modalCloseProc);

        mask.addEventListener('click', modalCloseProc);

    // ▲

}