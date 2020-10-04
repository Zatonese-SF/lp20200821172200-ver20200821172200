'use strict';

{

    const getD = (i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return `${d.getMonth() + 1}月${d.getDate()}日`;
    };





    class Review {

        constructor({user, date, rate, detail}) {

            // this.id = id;
            this.user = user;
            this.date = date;
            this.rate = rate;
            this.detail = detail;
            
            const reviewListElem = document.getElementById('reviewList');

            const reviewItemElem = document.createElement('li');
            reviewItemElem.classList.add('reviewItem-and');
            reviewItemElem.classList.add('swiper-slide');
            reviewListElem.appendChild(reviewItemElem);

            const reviewUserElem = document.createElement('p');
            reviewUserElem.classList.add('reviewItem-and__user');
            reviewUserElem.textContent = this.user;
            reviewItemElem.appendChild(reviewUserElem);

            const reviewRateElem = document.createElement('p');
            reviewRateElem.classList.add('reviewItem-and__rate');
            reviewItemElem.appendChild(reviewRateElem);

            if(this.rate === 4) {
                reviewRateElem.classList.add('reviewItem-and__rate--4');
            } else if(this.rate === 4.5) {
                reviewRateElem.classList.add('reviewItem-and__rate--4_5');
            } else if(this.rate === 5) {
                reviewRateElem.classList.add('reviewItem-and__rate--5');
            }

            const reviewDateElem = document.createElement('p');
            reviewDateElem.classList.add('reviewItem-and__date');
            reviewDateElem.textContent = this.date;
            reviewItemElem.appendChild(reviewDateElem);

            const reviewDescElem = document.createElement('p');
            reviewDescElem.classList.add('reviewItem-and__detail');
            reviewDescElem.textContent = this.detail;
            reviewItemElem.appendChild(reviewDescElem);
        }
    }



    const reviews = [

        new Review({
            user: 'pooiu',
            date: '20',
            rate: 5,
            detail: 'このアプリ最高すぎ！神アプリや〜',
        }),

        new Review({
            user: 'pooiu',
            date: '2020年9月17日',
            rate: 4,
            detail: 'このアプリ最高すぎ！神アプリや〜',
        }),

        new Review({
            user: 'pooiu',
            date: '2020年9月17日',
            rate: 4.5,
            detail: 'このアプリ最高すぎ！神アプリや〜',
        }),
    ]

}