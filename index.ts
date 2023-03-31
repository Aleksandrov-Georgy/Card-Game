import './style.css';
import * as _ from "lodash";

document.addEventListener('DOMContentLoaded', () => {

    localStorage.removeItem('level');

    const formLevel = document.querySelector('.header__form__submit');
    const buttonLevel = document.querySelectorAll('.button');
    
    
    buttonLevel.forEach(element => {
        element.addEventListener('click', (event) => {
            event.stopPropagation();
            //@ts-ignore
            localStorage.setItem('level', element.value);
        })        
    });
    //@ts-ignore    
    formLevel.addEventListener('click', () => {
        if(localStorage.getItem('level')) {
            window.location.href = '2.html';
        } else {
            buttonLevel.forEach(element => {
                element.classList.add('error')
            });
        }
    })
})

