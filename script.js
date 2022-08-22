// const group6 = document.querySelector('.group6');
// const smallPizza = document.querySelector('.group6 .pizza .little-pizza');

// let scrollCurrent;
// let leftCurrent = 100;
// let bottomCurrent = 190;
// window.onscroll = () => {
//     if (window.scrollY >= group6.offsetTop && window.scrollY < (group6.offsetTop + group6.offsetHeight)) {
//         if (window.scrollY < scrollCurrent) {
//             // alert('Verev')
//             if (leftCurrent < 100 && bottomCurrent < 190) {
//                 leftCurrent += 2;
//                 bottomCurrent += 2;
//             }
//         } else if (window.scrollY > scrollCurrent) {
//             // alert('Nerqev');
//             if (leftCurrent > -100 && bottomCurrent > -10) {
//                 leftCurrent -= 2;
//                 bottomCurrent -= 2;
//             }
//         }
//         smallPizza.style.left = leftCurrent + 'px';
//         smallPizza.style.bottom = bottomCurrent + 'px';
//     }
//     scrollCurrent = window.scrollY;
//     if (window.scrollY < group6.offsetTop - 1000) {
//         leftCurrent = 100;
//         bottomCurrent = 190;
//     }
// }

const burgerMenu = document.querySelector('.group1 .container header nav .burger-menu');
const ul = document.querySelector('.group1 .container header nav ul');
// console.log(burgerMenu.children[0])

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    if (burgerMenu.classList.contains('active')) {
        ul.style.height = '200px';
    } else {
        ul.style.height = '0';
    }
});



