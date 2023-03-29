import diamond6 from "./img-cart/cart/6 бубны.png";
import clubs6 from "./img-cart/cart/6 крести.png";
import spades6 from "./img-cart/cart/6 пики.png";
import hearts6 from "./img-cart/cart/6 черви.png";

import diamond7 from "./img-cart/cart/7 бубны.png";
import clubs7 from "./img-cart/cart/7 крести.png";
import spades7 from "./img-cart/cart/7 пики.png";
import hearts7 from "./img-cart/cart/7 черви.png";

import diamond8 from "./img-cart/cart/8 бубны.png";
import clubs8 from "./img-cart/cart/8 крести.png";
import spades8 from "./img-cart/cart/8 пики.png";
import hearts8 from "./img-cart/cart/8 черви.png";

import diamond9 from "./img-cart/cart/9 бубны.png";
import clubs9 from "./img-cart/cart/9 крести.png";
import spades9 from "./img-cart/cart/9 пики.png";
import hearts9 from "./img-cart/cart/9 черви.png";

import diamond10 from "./img-cart/cart/10 бубны.png";
import clubs10 from "./img-cart/cart/10 крести.png";
import spades10 from "./img-cart/cart/10 пики.png";
import hearts10 from "./img-cart/cart/10 черви.png";

import diamondV from "./img-cart/cart/валет бубны.png";
import clubsV from "./img-cart/cart/валет крести.png";
import spadesV from "./img-cart/cart/валет пики.png";
import heartsV from "./img-cart/cart/валет черви.png";

import diamondD from "./img-cart/cart/дама бубны.png";
import clubsD from "./img-cart/cart/дама крести.png";
import spadesD from "./img-cart/cart/дама пики.png";
import heartsD from "./img-cart/cart/дама черви.png";

import diamondK from "./img-cart/cart/король бубны.png";
import clubsK from "./img-cart/cart/король крести.png";
import spadesK from "./img-cart/cart/король пики.png";
import heartsK from "./img-cart/cart/король черви.png";

import diamondT from "./img-cart/cart/туз бубны.png";
import clubsT from "./img-cart/cart/туз крести.png";
import spadesT from "./img-cart/cart/туз пики.png";
import heartsT from "./img-cart/cart/туз черви.png";

import shirt from "./img-cart/рубашка.png";


    const gameField = document.querySelector('.game-field');
    const selectedLevel = Number(localStorage.getItem('level'));
    const buttonStartAgain = document.querySelector('.header2__button')
    const arrCardTest = [    
        diamond6,
        clubs6,
        spades6,
        hearts6,
        diamond7,
        clubs7,
        spades7,
        hearts7,
        diamond8,
        clubs8,
        spades8,
        hearts8,
        diamond9,
        clubs9,
        spades9,
        hearts9,
        diamond10,
        clubs10,
        spades10,
        hearts10,
        diamondV,
        clubsV,
        spadesV,
        heartsV,
        diamondD,
        clubsD,
        spadesD,
        heartsD,
        diamondK,
        clubsK,
        spadesK,
        heartsK,
        diamondT,
        clubsT,
        spadesT,
        heartsT,
    ];
    const randomArrCardTest = arrCardTest.sort(()=>Math.random()-0.5);

    creationOfGameCards();
    // stopWatch();
    game();

    // buttonStartAgain.addEventListener('click', () => {
    //     window.location.href = 'index.html';
    // })

    function creationOfGameCards() {
        

        if(selectedLevel === 1) {
            for (let i = 0; i < 3; i++) {
                const img = document.createElement('img');
                img.classList.add('cards')
                img.setAttribute('id', randomArrCardTest[i]);
                img.src = randomArrCardTest[i];
                gameField.appendChild(img);

                const img2 = document.createElement('img');
                img2.classList.add('cards')
                img2.setAttribute('id', randomArrCardTest[i]);
                img2.src = randomArrCardTest[i];
                gameField.appendChild(img2);               
            }  
        } else if (selectedLevel === 2) {
            for (let i = 0; i < 6; i++) {
                const img = document.createElement('img');
                img.classList.add('cards')
                img.setAttribute('id', randomArrCardTest[i]);
                img.src = randomArrCardTest[i];
                gameField.appendChild(img);

                const img2 = document.createElement('img');
                img2.classList.add('cards')
                img2.setAttribute('id', randomArrCardTest[i]);
                img2.src = randomArrCardTest[i];
                gameField.appendChild(img2);
            }
        } else if (selectedLevel === 3) {
            for (let i = 0; i < 9; i++) {
                const img = document.createElement('img');
                img.classList.add('cards')
                img.setAttribute('id', randomArrCardTest[i]);
                img.src = randomArrCardTest[i];
                gameField.appendChild(img);

                const img2 = document.createElement('img');
                img2.classList.add('cards')
                img2.setAttribute('id', randomArrCardTest[i]);
                img2.src = randomArrCardTest[i];
                gameField.appendChild(img2);
            };      
        }
    }

    const selectedCards = [];

    function game() {
        const card = document.querySelectorAll('.cards').forEach(element => {
            setTimeout(() => {
                element.src = shirt;
            }, 5000);

            element.addEventListener('click', () => {
                const cardId = element.id;
                selectedCards.push(cardId)
                console.log(cardId);
                element.src = cardId; 
                if(selectedCards.length === 2) {
                    setTimeout(() => {
                        gameOver();
                    }, 500);
                   
                }             
            })
        });        
    }

    function gameOver() {
        if(selectedCards[0] === selectedCards[1]) {
            // clearInterval(stopWatchTimer);
            alert('Вы победили');
        } else {
            alert('Вы проиграли');
            // clearInterval(stopWatchTimer);
        }
    }

    // function stopWatch() {
    //     const stopWatch = document.querySelector('.header2__stopwatch_content');
    //     const stopWatchValue = document.querySelector('.header2__stopwatch_content');
    //     let sec = 0;
    //     let min = 0;

    //     const stopWatchTimer = setInterval(() => {
    //         sec++;
    //         if(sec <= 9) {
    //             stopWatch.textContent = '0' + min + '.' + '0' + sec;
    //         }
    //         if(sec >= 10) {
    //             stopWatch.textContent = '0' + min + '.' + sec;
    //         }

    //         if(sec === 59) {
    //             sec = 00;
    //             min++;
    //         }
    //         if(min >=10) {
    //             stopWatch.textContent = min + '.' + sec;
    //             if(sec <= 9) {
    //                 stopWatch.textContent = min + '.' + '0' + sec;
    //             }
    //         }
    //     }, 1000);
    //     stopWatchValue.setAttribute('value', min + '.' + sec)
    // }
