'use strict';

const navMenu = document.querySelector('.navbar-menu');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-text__close');
const modalLinks = document.querySelector('.modal-links');

navMenu.addEventListener('click', function() {
    modal.classList.remove('disable');
});

closeModal.addEventListener('click', function() {
    modal.classList.add('disable');
});

modalLinks.addEventListener('click', function() {
    modal.classList.add('disable');
});