'use strict';

{

    const tagName = [

        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        // '08',
        // '09',
        // '10',
        // '11',
        // '12',
        // '13',
        // '14',
        // '15',
        // '16',
        // '17',
        // '18',
        // '19',
        // '20',
        // '21',
    ];

    function shuffle(arr) {
        
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    const shuffledChoices = shuffle([...tagName]);
    
    const tagList = document.querySelectorAll('.tagList');
    console.log(tagList);

    for(let i = 0; i <= 6; i++) {
        const tagUl = document.querySelectorAll('.tagList > ul');
        console.log(tagUl);
        const tagItem = document.createElement('li');

        tagUl.appendChild(tagItem);
        tagUl.textContent = shuffledChoices[i];
    }


    
    // tagList.forEach(() => {


        

    
        

        
        

    // });

    




    

    // const br = document.createElement('br');
    // const tagLi08 = document.querySelector('#tag li:nth-child(8)');

    // console.log(tagLi08);

    // tagUl.insertBefore(br, tagLi08);

}