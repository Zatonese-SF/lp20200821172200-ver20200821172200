'use strict';

{

    const getD = (i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return `${d.getMonth() + 1}月${d.getDate()}日`;
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
            reviewItemElem.classList.add('reviewItem--ios');
            reviewItemElem.classList.add('swiper-slide');
            reviewListElem.appendChild(reviewItemElem);

            const reviewTitleRateElem = document.createElement('div');
            reviewItemElem.appendChild(reviewTitleRateElem);

            const reviewDateUserElem = document.createElement('div');
            reviewItemElem.appendChild(reviewDateUserElem);
            
            const reviewTitleElem = document.createElement('h3');
            reviewTitleElem.classList.add('reviewItem__title');
            reviewTitleElem.textContent = this.title;
            reviewTitleRateElem.appendChild(reviewTitleElem);

            const reviewRateElem = document.createElement('p');
            reviewRateElem.textContent = '☆☆☆☆☆';
            reviewTitleRateElem.appendChild(reviewRateElem);

            if(this.rate === 4) {
                reviewRateElem.classList.add('reviewItem__rate4--ios');
            } else if(this.rate === 4.5) {
                reviewRateElem.classList.add('reviewItem__rate4_5--ios');
            } else if(this.rate === 5) {
                reviewRateElem.classList.add('reviewItem__rate5--ios');
            }

            const reviewDateElem = document.createElement('p');
            reviewDateElem.classList.add('reviewItem__date--ios');
            reviewDateElem.textContent = this.date;
            reviewDateUserElem.appendChild(reviewDateElem);
            
            const reviewUserElem = document.createElement('p');
            reviewUserElem.classList.add('reviewItem__user--ios');
            reviewUserElem.textContent = this.user;
            reviewDateUserElem.appendChild(reviewUserElem);

            const reviewDescElem = document.createElement('p');
            reviewDescElem.classList.add('reviewItem__detail--ios');
            reviewDescElem.textContent = this.detail;
            reviewItemElem.appendChild(reviewDescElem);
        }
    }



    const reviews = [

        new Review({
            user: '変態紳士',
            title: '神すぎる！',
            date: getD(1),
            rate: 4.5,
            detail: 'おい、これマジでスゴイぞ！',
        }),

        new Review({
            user: 'かんた',
            title: '想像以上',
            date: getD(1),
            rate: 5,
            detail: 'オフパコまでのスピード感ハンパない',
        }),

        new Review({
            user: '珍太郎',
            title: 'サイコー',
            date: getD(2),
            rate: 4,
            detail: `コロナ禍に俺は${an}に救われた`,
        }),

        new Review({
            user: 'ジェファーソン',
            title: 'まぁコレが確実',
            date: getD(3),
            rate: 5,
            detail: `ん…確かに今ところ${an}一択かな`,
        }),

        new Review({
            user: 'シコシコ番長',
            title: '期待通り',
            date: getD(4),
            rate: 4.5,
            detail: 'コレ絶対いれとけ！損はない！',
        }),

        new Review({
            user: 'きよはら',
            title: 'オススメ！',
            date: getD(4),
            rate: 5,
            detail: 'ホンマにオフパコできる',
        }),
    ]

}