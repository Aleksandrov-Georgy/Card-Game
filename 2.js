document.addEventListener('DOMContentLoaded', () => {

    const gameField = document.querySelector('.game-field');
    const selectedLevel = Number(localStorage.getItem('level'));
    const buttonStartAgain = document.querySelector('.header2__button')
    const arrCardTest = {    
        diamond6: './img-cart/cart/6 бубны.png',
        clubs6: './img-cart/cart/6 крести.png',
        spades6: './img-cart/cart/6 пики.png',
        hearts6: './img-cart/cart/6 черви.png',
        diamond7: './img-cart/cart/7 бубны.png',
        clubs7: './img-cart/cart/7 крести.png',
        spades7: './img-cart/cart/7 пики.png',
        hearts7: './img-cart/cart/7 черви.png',
        diamond8: './img-cart/cart/8 бубны.png',
        clubs8: './img-cart/cart/8 крести.png',
        spades8: './img-cart/cart/8 пики.png',
        hearts8: './img-cart/cart/8 черви.png',
        diamond9: './img-cart/cart/9 бубны.png',
        clubs9: './img-cart/cart/9 крести.png',
        spades9: './img-cart/cart/9 пики.png',
        hearts9: './img-cart/cart/9 черви.png',
        diamond10: './img-cart/cart/10 бубны.png',
        clubs10: './img-cart/cart/10 крести.png',
        spades10: './img-cart/cart/10 пики.png',
        hearts10: './img-cart/cart/10 черви.png',
        diamondV: './img-cart/cart/валет бубны.png',
        clubsV: './img-cart/cart/валет крести.png',
        spadesV:'./img-cart/cart/валет пики.png',
        heartsV:'./img-cart/cart/валет черви.png',
        diamondD:'./img-cart/cart/дама бубны.png',
        clubsD: './img-cart/cart/дама крести.png',
        spadesD:'./img-cart/cart/дама пики.png',
        heartsD:'./img-cart/cart/дама черви.png',
        diamondK:'./img-cart/cart/король бубны.png',
        clubsK: './img-cart/cart/король крести.png',
        spadesK:'./img-cart/cart/король пики.png',
        heartsK:'./img-cart/cart/король черви.png',
        diamondT: './img-cart/cart/туз бубны.png',
        clubsT: './img-cart/cart/туз крести.png',
        spadesT:'./img-cart/cart/туз пики.png',
        heartsT:'./img-cart/cart/туз черви.png',
    };

    creationOfGameCards();
    stopWatch();
    game();

    buttonStartAgain.addEventListener('click', () => {
        window.location.href = 'index.html';
    })

    function creationOfGameCards() {
        let countCart = 0
    
        switch (selectedLevel){
            case 1:
                countCart = 6
            case 2:
                countCart = 12
            case 3:
                countCart = 18
        };
        const sources = Object.entries(values)

        const nameCards = [...sources, ...sources].sort(
        () => Math.random() - 0.5
        )

        // после уже делаешь по одному разу


        for (let i = 0; i < countCart; i++) {
        const img = document.createElement("img");
        img.classList.add("cards");
        img.setAttribute("id", nameCards[i][0]);
        img.src = nameCards[0][1];
        gameField.appendChild(img);

        }









    //     if(selectedLevel === 1) {
    //         const nameCard = Object.entries(arrCardTest).sort(()=>Math.random()-0.5);

    //         for (let i = 0; i < 3; i++) {
    //             const img = document.createElement('img');
    //             img.classList.add('cards')
    //             img.setAttribute('id', nameCard[i][0])
    //             img.src = nameCard[i][1];
    //             gameField.appendChild(img);
                
    //             const img2 = document.createElement('img');
    //             img2.classList.add('cards')
    //             img2.setAttribute('id', nameCard[i][0])
    //             img2.src = nameCard[i][1];
    //             gameField.appendChild(img2);
    //         }            
    //     } else if (selectedLevel === 2) {
    //         const nameCard = Object.entries(arrCardTest).sort(()=>Math.random()-0.5);

    //         for (let i = 0; i < 6; i++) {
    //             const img = document.createElement('img');
    //             img.classList.add('cards')
    //             img.setAttribute('id', nameCard[i][0])
    //             img.src = nameCard[i][1];
    //             gameField.appendChild(img);
                
    //             const img2 = document.createElement('img');
    //             img2.classList.add('cards')
    //             img2.setAttribute('id', nameCard[i][0])
    //             img2.src = nameCard[i][1];
    //             gameField.appendChild(img2);
    //         }
    //     } else if (selectedLevel === 3) {
    //         const nameCard = Object.entries(arrCardTest).sort(()=>Math.random()-0.5);
    //         console.log(nameCard);

    //         for (let i = 0; i < 9; i++) {
    //             const img = document.createElement('img');
    //             img.classList.add('cards')
    //             img.setAttribute('id', nameCard[i][0])
    //             img.src = nameCard[i][1];
    //             gameField.appendChild(img);
                
    //             const img2 = document.createElement('img');
    //             img2.classList.add('cards')
    //             img2.setAttribute('id', nameCard[i][0])
    //             img2.src = nameCard[i][1];
    //             gameField.appendChild(img2);
    //     };

      
    // }

    const selectedCards = [];

    function game() {
        const card = document.querySelectorAll('.cards').forEach(element => {
            setTimeout(() => {
                element.src = './img-cart/рубашка.png';
            }, 5000);

            element.addEventListener('click', () => {
                const cardKey = element.id;
                selectedCards.push(cardKey)
                element.src = arrCardTest[cardKey]; 
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
            alert('Вы победили');
        } else {
            alert('Вы проиграли');
        }
    }

    function stopWatch() {
        const stopWatch = document.querySelector('.header2__stopwatch_content');
        const stopWatchValue = document.querySelector('.header2__stopwatch_content');
        let sec = 0;
        let min = 0;

        setInterval(() => {
            sec++;
            if(sec <= 9) {
                stopWatch.textContent = '0' + min + '.' + '0' + sec;
            }
            if(sec >= 10) {
                stopWatch.textContent = '0' + min + '.' + sec;
            }

            if(sec === 59) {
                sec = 00;
                min++;
            }
            if(min >=10) {
                stopWatch.textContent = min + '.' + sec;
                if(sec <= 9) {
                    stopWatch.textContent = min + '.' + '0' + sec;
                }
            }
        }, 1000);
        stopWatchValue.setAttribute('value', min + '.' + sec)
    }
}})