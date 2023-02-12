'use strict';

let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');
let closeModalWindow = document.querySelector('.close-modal-window');
let showModalWindow = document.querySelectorAll('.show-modal-window');
let removeHiddenClass = function() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');}
let addHiddenClass = function() {
modalWindow.classList.add('hidden');
overlay.classList.add('hidden');}
for (let i = 0; i < showModalWindow.length; i++) {
  showModalWindow[i].addEventListener('click', removeHiddenClass);
}
closeModalWindow.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

document.addEventListener('keydown', function(e){
  // console.log(e.key);
  if(e.key == 'Escape') {
    if(!modalWindow.classList.contains('hidden')){
      addHiddenClass();
      console.log(addHiddenClass());
    }}});
