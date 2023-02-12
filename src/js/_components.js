'use strict';
// console.log('components');

let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');
let closeModalWindow = document.querySelector('.close-modal-window');
let showModalWindow = document.querySelectorAll('.show-modal-window');
for (let i = 0; i < showModalWindow.length; i++) {
  showModalWindow[i].addEventListener('click', function() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
  closeModalWindow.addEventListener('click', function() {
    modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
  })
  });
}
