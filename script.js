let menuBtn = document.querySelector('.header__burger');
let burgerLine = document.querySelector('.burger__line');
let body = document.querySelector('body');
let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let extraMenu = document.querySelector('.header__extra_menu');
menuBtn.addEventListener('click', function(){
    burgerLine.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('active');
	menu.classList.toggle('active');
    extraMenu.classList.toggle('active');
})