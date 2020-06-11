'use strict';

const navMenu = document.querySelector('.navbar-menu');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-text__close');
const modalLinks = document.querySelector('.modal-links');

const sliderArrow = document.querySelector('.slider-arrow');
const slide1 =  document.querySelector('.item-1');
const slide2 =  document.querySelector('.item-2');
const slide3 =  document.querySelector('.item-3');
let mass = [slide1, slide2, slide3];
let act = 0;

sliderArrow.addEventListener('click', function() {
    mass[act].classList.add('disable');
    act++;
    if (act == 3) act = 0;
    mass[act].classList.remove('disable');
});

navMenu.addEventListener('click', function() {
    modal.classList.remove('disable');
});

closeModal.addEventListener('click', function() {
    modal.classList.add('disable');
});

modalLinks.addEventListener('click', function() {
    modal.classList.add('disable');
});

