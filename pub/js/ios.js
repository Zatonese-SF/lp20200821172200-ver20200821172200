'use strict';

{

    const getD = (i) => {
        const d = new Date();
        return `${d.getMonth() + 1}月${d.getDate() - i}日`;
    };

    



    class Review {

        constructor({user, title, date, rate, detail}) {

            // this.id = id;
            this.user = user;
            this.title = title;
            this.date = date;
            this.rate = rate;
            this.detail = detail;
            

            const reviewListElem = document.getElementById('reviewList');

            const reviewItemElem = document.createElement('li');
            reviewItemElem.classList.add('reviewItem-ios');
            reviewItemElem.classList.add('swiper-slide');
            reviewListElem.appendChild(reviewItemElem);

            const reviewTitleRateElem = document.createElement('div');
            reviewItemElem.appendChild(reviewTitleRateElem);

            const reviewDateUserElem = document.createElement('div');
            reviewItemElem.appendChild(reviewDateUserElem);
            
            const reviewTitleElem = document.createElement('h3');
            reviewTitleElem.classList.add('reviewItem-ios__title');
            reviewTitleElem.textContent = this.title;
            reviewTitleRateElem.appendChild(reviewTitleElem);

            const reviewRateElem = document.createElement('p');
            reviewRateElem.classList.add('reviewItem-ios__rate');
            reviewTitleRateElem.appendChild(reviewRateElem);

            if(this.rate === 4) {
                reviewRateElem.classList.add('reviewItem-ios__rate--4');
            } else if(this.rate === 4.5) {
                reviewRateElem.classList.add('reviewItem-ios__rate--4_5');
            } else if(this.rate === 5) {
                reviewRateElem.classList.add('reviewItem-ios__rate--5');
            }

            const reviewDateElem = document.createElement('p');
            reviewDateElem.classList.add('reviewItem-ios__date');
            reviewDateElem.textContent = this.date;
            reviewDateUserElem.appendChild(reviewDateElem);
            
            const reviewUserElem = document.createElement('p');
            reviewUserElem.classList.add('reviewItem-ios__user');
            reviewUserElem.textContent = this.user;
            reviewDateUserElem.appendChild(reviewUserElem);

            const reviewDescElem = document.createElement('p');
            reviewDescElem.classList.add('reviewItem-ios__detail');
            reviewDescElem.textContent = this.detail;
            reviewItemElem.appendChild(reviewDescElem);
        }
    }



    const reviews = [

        new Review({
            user: 'pooiu',
            title: 'はじめるよ',
            date: getD(1),
            rate: 4.5,
            detail: 'このアプリ最高すぎ！神アプリや〜',
        }),

        new Review({
            user: 'pooiu',
            title: 'はじめるよ',
            date: getD(1),
            rate: 4,
            detail: 'このアプリ最高すぎ！神アプリや〜',
        }),

        new Review({
            user: 'pooiu',
            title: 'はじめるよ',
            date: getD(2),
            rate: 3,
            detail: 'このアプリ最高すぎ！神アプリや〜',
        }),

        new Review({
            user: 'pooiu',
            title: 'はじめるよ',
            date: getD(3),
            rate: 3,
            detail: 'このアプリ最高すぎ！神アプリや〜',
        }),
    ]

}