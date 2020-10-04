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
                title: '限界に挑戦してみます&#x1f60a;&#x1f60a;',
                thumbnailImg: '../img/r18.png',
                label: [label.live, label.limited, label.tits, label.mark],
                likeCount: 10000,
                splashCount: 100,
            }),
    
            new Post({
                id: '02',
                user: 'AINA',
                title: '思いっきり挿れてみたい',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '03',
                user: 'アサリ',
                title: '溜まってます…オフパコしないなぁ…',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '04',
                user: '明日香',
                title: '潮吹き見てください',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),


            new Post({
                id: '05',
                user: '伊代',
                title: '一緒に気持ち良くなりたいです',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '06',
                user: 'カンナ',
                title: '誰かちょっとだけ見てくれませんか?',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '07',
                user: '小梅',
                title: '乳首イジってください',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '08',
                user: 'JULIA',
                title: 'とにかく会ってエッチなことしたですー',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '09',
                user: 'とこも',
                title: 'セフレ探してます',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '10',
                user: 'ナミ',
                title: '潮吹いたことないです…吹かせて下さい。',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '11',
                user: 'ふーちん',
                title: 'オフパコ希望',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '12',
                user: 'フミ',
                title: 'フェラさせてー',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '13',
                user: 'MARI',
                title: '初心者です。ヨロシクです',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '14',
                user: 'ミッキー',
                title: 'オマ●コおっぴろげまーす',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '15',
                user: '萌',
                title: 'エッチ教えて下さい',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '16',
                user: 'ももか',
                title: 'オフパコやりましょー',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '17',
                user: '弥生',
                title: 'ア〜ン…イク〜',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '18',
                user: '優梨',
                title: '即オフパコヤりたいです…',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '19',
                user: 'らら',
                title: 'わたしのオッパイすっごいですよ(笑)',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '20',
                user: 'リリ',
                title: '舐めたいなぁ…',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
            }),

            new Post({
                id: '21',
                user: '和香',
                title: 'オフパコ オフパコ オフパコ',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
                status: 'pickup',
            }),

            new Post({
                id: '22',
                user: 'カレン',
                title: 'お相手してくださーい',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
                status: 'pickup',
            }),

            new Post({
                id: '23',
                user: 'NANA',
                title: 'おまんこ見てください',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
                status: 'pickup',
            }),

            new Post({
                id: '24',
                user: 'はな',
                title: 'チンポ大好き',
                thumbnailImg: '../img/r18.png',
                label: [],
                likeCount: 10000,
                splashCount: 100,
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
        };
        
        const modalCloseProc = () => {
            document.querySelector('.modal__visualImg').remove();

            modal.style.display = 'none';
            mask.style.display = 'none';
        };



        const mainVisual = document.getElementById('mainVisual');
        const tagItem = document.querySelectorAll('.tag__list li');
        const thumbnailItem = document.querySelectorAll('.thumbnailList > li');

        mainVisual.addEventListener('click', modalOpenProc);

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