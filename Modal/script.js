'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

function buttonClicked() {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let button of btnOpenModal) {
  button.addEventListener('click', buttonClicked);
  // console.log(button.textContent);
}
