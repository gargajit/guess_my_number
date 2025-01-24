'use strict';

let defaultMessage = document.querySelector('.message').textContent;
let defaultNumber = document.querySelector('.number').textContent;
let defaultScore = document.querySelector('.score').textContent;
let defaultGuess = document.querySelector('.guess').value;

// console.log(typeof defaultGuess);

const check = document.querySelector('.check');
let score = Number(document.querySelector('.score').innerHTML);

let highscore = 0;

const randNum = Math.floor(Math.random() * 20) + 1;
console.log(randNum);

check.addEventListener('click', function () {
  const inputNum = document.querySelector('.guess').value;

  if (inputNum == randNum) {
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.message').innerHTML = '🎉 Correct Number!';
    document.querySelector('.number').innerHTML = randNum;
    // document.querySelector('.highscore').innerHTML = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').innerHTML = highscore;
    }
  } else if (inputNum < randNum) {
    document.querySelector('.message').innerHTML = '📉 Too Low';
    score = Number(document.querySelector('.score').innerHTML) - 1;
    document.querySelector('.score').innerHTML = score;
  } else {
    document.querySelector('.message').innerHTML = '📈 Too High';
    score = Number(document.querySelector('.score').innerHTML) - 1;
    document.querySelector('.score').innerHTML = score;
  }
});

const againBtn = document.querySelector('.again');

againBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = defaultNumber;
  document.querySelector('.message').textContent = defaultMessage;
  document.querySelector('.score').textContent = defaultScore;
  document.querySelector('.guess').value = defaultGuess;
});
