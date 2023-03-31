window.addEventListener("scroll", (e) => {
    const nav = document.querySelector('header');
    if (window.pageYOffset > 0) {
        nav.classList.add('boxshadow');
    } else {
        nav.classList.remove('boxshadow');
    }
});
// menually without bootstrap

// window.scroll(function () {
//     if ($(window).scrollTop() > 100) {
//         $('header').css({
//             'position': 'fixed',
//             'box-shadow': ' 0 0 5px #000',
//         });
//     } else {
//         $('header').css({
//             'positon': 'relative',
//         });
//     }
// });