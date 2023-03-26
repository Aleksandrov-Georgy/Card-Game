document.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('level');

    const formLevel = document.querySelector('.header__form');
    const buttonLevel = document.querySelectorAll('.button');
    
    
    buttonLevel.forEach(element => {
        element.addEventListener('click', (event) => {
            event.stopPropagation();
            localStorage.setItem('level', element.value);
        })
        
    });
    
    formLevel.addEventListener('click', (event) => {
        console.log('Уровень: ' + localStorage.getItem('level'));
        if(localStorage.getItem('level')) {
            window.location.href = '2.html';
        } else {
            buttonLevel.forEach(element => {
                element.classList.add('error')
            });
            console.log('error');
        }
    
    })
})

