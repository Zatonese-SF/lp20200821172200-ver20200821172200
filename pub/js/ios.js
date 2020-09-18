'use strict';

{

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
            reviewItemElem.classList.add('review__item');
            reviewItemElem.classList.add('swiper-slide');
            reviewListElem.appendChild(reviewItemElem);

            const reviewTitleRateElem = document.createElement('div');
            reviewItemElem.appendChild(reviewTitleRateElem);

            const reviewDateUserElem = document.createElement('div');
            reviewItemElem.appendChild(reviewDateUserElem);
            
            const reviewTitleElem = document.createElement('h3');
            reviewTitleElem.classList.add('review__title');
            reviewTitleElem.textContent = this.title;
            reviewTitleRateElem.appendChild(reviewTitleElem);

            const reviewRateElem = document.createElement('p');
            reviewRateElem.classList.add('review__rate');
            reviewRateElem.textContent = this.rate;
            reviewTitleRateElem.appendChild(reviewRateElem);

            const reviewDateElem = document.createElement('p');
            reviewDateElem.classList.add('review__date');
            reviewDateElem.textContent = this.date;
            reviewDateUserElem.appendChild(reviewDateElem);
            
            const reviewUserElem = document.createElement('p');
            reviewUserElem.classList.add('review__user');
            reviewUserElem.textContent = this.user;
            reviewDateUserElem.appendChild(reviewUserElem);

            const reviewDescElem = document.createElement('p');
            reviewDescElem.classList.add('review__detail');
            reviewDescElem.textContent = this.detail;
            reviewItemElem.appendChild(reviewDescElem);
            
        }
    }

    new Review({
        user: 'pooiu',
        title: 'はじめるよ',
        date: '20',
        rate: 3,
        detail: 'このアプリ最高すぎ！神アプリや〜',
    });

    new Review({
        user: 'pooiu',
        title: 'はじめるよ',
        date: '2020年9月17日',
        rate: 3,
        detail: 'このアプリ最高すぎ！神アプリや〜',
    });

    new Review({
        user: 'pooiu',
        title: 'はじめるよ',
        date: '2020年9月17日',
        rate: 3,
        detail: 'このアプリ最高すぎ！神アプリや〜',
    });

}