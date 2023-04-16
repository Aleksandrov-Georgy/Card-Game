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
import winImage from "./img-cart/Image.png";
import losingImg from "./img-cart/losing.png";

const gameField = document.querySelector(".game-field") as HTMLElement;
const head = document.querySelector(".header2") as HTMLElement;
const selectedLevel = Number(localStorage.getItem("level"));
const buttonStartAgain = document.querySelector(".header2__button");
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
const randomArrCardTest = arrCardTest.sort(() => Math.random() - 0.5);

buttonStartAgain?.addEventListener("click", () => {
  window.location.href = "./index.html";
});

creationOfGameCards();
stopWatch();
game();

function creationOfGameCards() {
  if (selectedLevel === 1) {
    for (let i = 0; i < 3; i++) {
      const img: HTMLImageElement = document.createElement("img");
      img.classList.add("cards");
      img.setAttribute("id", randomArrCardTest[i]);
      img.src = randomArrCardTest[i];
      gameField.appendChild(img);

      const img2: HTMLImageElement = document.createElement("img");
      img2.classList.add("cards");
      img2.setAttribute("id", randomArrCardTest[i]);
      img2.src = randomArrCardTest[i];
      gameField.appendChild(img2);

      shuffleChildren(gameField);
    }
  } else if (selectedLevel === 2) {
    for (let i = 0; i < 6; i++) {
      const img: HTMLImageElement = document.createElement("img");
      img.classList.add("cards");
      img.setAttribute("id", randomArrCardTest[i]);
      img.src = randomArrCardTest[i];
      gameField.appendChild(img);

      const img2: HTMLImageElement = document.createElement("img");
      img2.classList.add("cards");
      img2.setAttribute("id", randomArrCardTest[i]);
      img2.src = randomArrCardTest[i];
      gameField.appendChild(img2);

      shuffleChildren(gameField);
    }
  } else if (selectedLevel === 3) {
    for (let i = 0; i < 9; i++) {
      const img: HTMLImageElement = document.createElement("img");
      img.classList.add("cards");
      img.setAttribute("id", randomArrCardTest[i]);
      img.src = randomArrCardTest[i];
      gameField.appendChild(img);

      const img2: HTMLImageElement = document.createElement("img");
      img2.classList.add("cards");
      img2.setAttribute("id", randomArrCardTest[i]);
      img2.src = randomArrCardTest[i];
      gameField.appendChild(img2);

      shuffleChildren(gameField);
    }
  }

  function shuffleChildren(parent: HTMLElement) {
    const children = Array.from(parent.children);

    for (let i = children.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [children[i], children[j]] = [children[j], children[i]];
    }
    children.forEach((child) => parent.appendChild(child));
  }
}

const selectedCards: string[] = [];

function game() {
  const cards = document.documentElement.querySelectorAll(
    ".cards"
  ) as NodeListOf<HTMLImageElement>;

  cards.forEach((element) => {
    setTimeout(() => {
      element.src = shirt;
      clickCards();
    }, 5000);

    function clickCards() {
      element.addEventListener("click", () => {
        const cardId = element.id;
        selectedCards.push(cardId);
        element.src = cardId;

        if (selectedCards.length % 2 === 0) {
          setTimeout(() => {
            if (
              selectedCards[0] === selectedCards[1] &&
              selectedCards[2] === selectedCards[3] &&
              selectedCards[4] === selectedCards[5] &&
              selectedCards[6] === selectedCards[7] &&
              selectedCards[8] === selectedCards[9] &&
              selectedCards[10] === selectedCards[11] &&
              selectedCards[12] === selectedCards[13] &&
              selectedCards[14] === selectedCards[15] &&
              selectedCards[16] === selectedCards[17]
            ) {
              if (selectedCards[cards.length - 1]) {
                clearInterval(window.timer);
                victory();
              }
            } else {
              clearInterval(window.timer);
              losing();
            }
          }, 200);
        }
      });
    }
  });
}

const time: HTMLElement | null = document.querySelector(
  ".header2__stopwatch_content"
);

// function stopWatch() {
//   let min: number = 0;
//   let sec: number = 0;

//   window.timer = setInterval(() => {
//     if (time) {
//       sec++;
//       if (sec === 59) {
//         min++;
//         sec = 0;
//       }

//       let timer: string = String(`0${min}: ${sec}`);

//       time.textContent = timer;
//       time.setAttribute("value", timer);
//     }
//   }, 1000);
// }

function stopWatch(): void {
  let min = 0;
  let sec = 0;

  window.timer = setInterval(() => {
    if (time) {
      sec++;
      if (sec === 59) {
        min++;
        sec = 0;
      }

      const timer = `0${min}:${sec < 10 ? 0 : ""}${sec}`;

      time.textContent = timer;
      time.setAttribute("value", timer);
    }
  }, 1000);
}

function victory() {
  const win = document.createElement("div");
  win.classList.add("win");
  head.appendChild(win);

  const winContent = document.createElement("div");
  winContent.classList.add("win__content");
  head.appendChild(winContent);

  const img = document.createElement("img");
  img.src = winImage;
  img.classList.add("win__image");
  winContent.appendChild(img);

  const winText = document.createElement("h1");
  winText.textContent = "Вы выиграли!";
  winText.classList.add("win__text");
  winContent.appendChild(winText);

  const winTextTime = document.createElement("p");
  winTextTime.textContent = "Затраченное время:";
  winTextTime.classList.add("win__text-time");
  winContent.appendChild(winTextTime);

  const timeSpent: HTMLElement = document.createElement("h3");

  timeSpent.textContent = time?.attributes[1].value ?? null;
  timeSpent.classList.add("win__time-spent");
  winContent.appendChild(timeSpent);

  const winButton = document.createElement("button");
  winButton.textContent = "Играть снова";
  winButton.classList.add("win__button");
  winContent.appendChild(winButton);

  winButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

function losing() {
  const win = document.createElement("div");
  win.classList.add("win");
  head.appendChild(win);

  const winContent = document.createElement("div");
  winContent.classList.add("win__content");
  head.appendChild(winContent);

  const img = document.createElement("img");
  img.src = losingImg;
  img.classList.add("win__image");
  winContent.appendChild(img);

  const winText = document.createElement("h1");
  winText.textContent = "Вы проиграли!";
  winText.classList.add("win__text");
  winContent.appendChild(winText);

  const winTextTime = document.createElement("p");
  winTextTime.textContent = "Затраченное время:";
  winTextTime.classList.add("win__text-time");
  winContent.appendChild(winTextTime);

  const timeSpent: HTMLHeadElement = document.createElement("h3");

  timeSpent.textContent = time?.attributes[1].value ?? null;
  timeSpent.classList.add("win__time-spent");
  winContent.appendChild(timeSpent);

  const winButton = document.createElement("button");
  winButton.textContent = "Играть снова";
  winButton.classList.add("win__button");
  winContent.appendChild(winButton);

  winButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
