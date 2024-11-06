const titleTwo = document.querySelector('.titleTwo');
const titleThree = document.querySelector('.titleThree');



function changeTitleTwo() {
    titleTwo.style.fontFamily  = 'Libre Caslon Text';
    titleTwo.style.fontSize  = '6rem';
    titleTwo.style.lineHeight = '2.5rem';
}

changeTitleTwo();

function changeTitleThree() {
    titleThree.classList.add('titleThreeSettings');
}

changeTitleThree();


