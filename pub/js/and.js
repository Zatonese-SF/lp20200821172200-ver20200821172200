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
            reviewItemElem.classList.add('reviewItem--and');
            reviewItemElem.classList.add('swiper-slide');
            reviewListElem.appendChild(reviewItemElem);

            const reviewUserElem = document.createElement('p');
            reviewUserElem.classList.add('reviewItem__user--and');
            reviewUserElem.textContent = this.user;
            reviewItemElem.appendChild(reviewUserElem);

            const reviewRateElem = document.createElement('p');
            reviewRateElem.textContent = '☆☆☆☆☆';
            reviewItemElem.appendChild(reviewRateElem);

            if(this.rate === 4) {
                reviewRateElem.classList.add('reviewItem__rate4--and');
            } else if(this.rate === 4.5) {
                reviewRateElem.classList.add('reviewItem__rate4_5--and');
            } else if(this.rate === 5) {
                reviewRateElem.classList.add('reviewItem__rate5--and');
            }

            const reviewDateElem = document.createElement('p');
            reviewDateElem.classList.add('reviewItem__date--and');
            reviewDateElem.textContent = this.date;
            reviewItemElem.appendChild(reviewDateElem);

            const reviewDescElem = document.createElement('p');
            reviewDescElem.classList.add('reviewItem__detail--and');
            reviewDescElem.textContent = this.detail;
            reviewItemElem.appendChild(reviewDescElem);
        }
    }



    const reviews = [

        new Review({
            user: '変態紳士',
            date: getD(1),
            rate: 4.5,
            detail: 'おい、これマジでスゴイぞ！',
        }),

        new Review({
            user: 'かんた',
            date: getD(1),
            rate: 5,
            detail: 'オフパコまでのスピード感ハンパない',
        }),

        new Review({
            user: '珍太郎',
            date: getD(2),
            rate: 4,
            detail: `コロナ禍に俺は${an}に救われた`,
        }),

        new Review({
            user: 'ジェファーソン',
            date: getD(3),
            rate: 5,
            detail: `ん…確かに今ところ${an}一択かな`,
        }),

        new Review({
            user: 'シコシコ番長',
            date: getD(4),
            rate: 4.5,
            detail: 'こコレ絶対いれとけ！損はない！',
        }),

        new Review({
            user: 'きよはら',
            date: getD(4),
            rate: 5,
            detail: 'ホンマにオフパコできる',
        }),

    ]

}