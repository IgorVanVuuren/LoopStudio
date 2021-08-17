let hamburger = document.querySelector('.hamburger');
let hiddenNav = document.querySelector('.hidden-nav');
let navLinks = document.querySelector('.nav-links');
let cross = document.querySelector('.cross');
let nav = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    cross.classList.toggle('hide');
    navLinks.classList.toggle('hide');
    hiddenNav.classList.toggle('hide');
});

cross.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    cross.classList.toggle('hide');
    navLinks.classList.toggle('hide');
    hiddenNav.classList.toggle('hide');
});