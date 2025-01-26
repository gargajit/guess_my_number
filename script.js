'use strict';

let defaultMessage = document.querySelector('.message').textContent;
let defaultNumber = document.querySelector('.number').textContent;
let defaultScore = 20;
let defaultGuess = document.querySelector('.guess').value;

const check = document.querySelector('.check');
const againBtn = document.querySelector('.again');
let score = defaultScore;
let highscore = 0;
let randNum = Math.floor(Math.random() * 20) + 1;

// modal constants
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelector('.show-modal');

function animateWrong() {
  document.body.classList.add('wrong');

  setTimeout(function () {
    document.body.classList.remove('wrong');
  }, 100);
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Event listener for the "Check" button
check.addEventListener('click', function () {
  const inputNum = Number(document.querySelector('.guess').value);

  if (!inputNum) {
    displayMessage('⛔ No Number!');
    return;
  }

  if (inputNum === randNum) {
    // Correct Guess
    document.body.style.backgroundColor = '#60b347';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = randNum;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    showModal.classList.add('hidden');
    againBtn.classList.remove('hidden');
  } else {
    //  Wrong Guess
    animateWrong();
    // document.querySelector('.message').textContent =
    //   inputNum < randNum ? '📉 Too Low' : '📈 Too High';
    displayMessage(inputNum < randNum ? '📉 Too Low' : '📈 Too High');
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score <= 0) {
    displayMessage('💥 You Lost the Game!');
    document.body.style.backgroundColor = '#f22e3e';
  }
});

// Event listener for the "Again" button
againBtn.addEventListener('click', function () {
  score = defaultScore;
  randNum = Math.floor(Math.random() * 20) + 1;

  // Reset the game state
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = defaultNumber;
  displayMessage(defaultMessage);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = defaultGuess;

  document.body.classList.remove('wrong');
  showModal.classList.remove('hidden');
  againBtn.classList.add('hidden');
});

// Modal event handler

showModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) closeModal();
  }
});
