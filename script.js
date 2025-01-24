'use strict';

let defaultMessage = document.querySelector('.message').textContent;
let defaultNumber = document.querySelector('.number').textContent;
let defaultScore = 20;
let defaultGuess = document.querySelector('.guess').value;


const check = document.querySelector('.check');
let score = defaultScore;

let highscore = 0;

let randNum = Math.floor(Math.random() * 20) + 1;

check.addEventListener('click', function () {
  const inputNum = document.querySelector('.guess').value;

  if (!inputNum) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    return;
  }

  if (inputNum == randNum) {
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = randNum;
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (inputNum < randNum) {
    document.querySelector('.message').textContent = '📉 Too Low';
    score = Number(document.querySelector('.score').textContent) - 1;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '📈 Too High';
    score = Number(document.querySelector('.score').textContent) - 1;
    document.querySelector('.score').textContent = score;
  }
});

const againBtn = document.querySelector('.again');

againBtn.addEventListener('click', function () {
  score = defaultScore;
  randNum = Math.floor(Math.random() * 20) + 1;

  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = defaultNumber;
  document.querySelector('.message').textContent = defaultMessage;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = defaultGuess;
});
