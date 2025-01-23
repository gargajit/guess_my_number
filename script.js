'use strict';

const check = document.querySelector('.check');
let score = Number(document.querySelector('.score').innerHTML);

let highscore = 0;

const randNum = Math.floor(Math.random() * 20) + 1;
console.log(randNum);

check.addEventListener('click', function (event) {
  const inputNum = document.querySelector('.guess').value;
  console.log(inputNum);

  if (inputNum == randNum) {
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.right > .message').innerHTML =
      '🎉 Correct Number!';
    document.querySelector('.number').innerHTML = randNum;
    // document.querySelector('.highscore').innerHTML = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').innerHTML = highscore;
    }
  } else if (inputNum < randNum) {
    document.querySelector('.right > .message').innerHTML = '📉 Too Low';
    score = Number(document.querySelector('.score').innerHTML) - 1;
    document.querySelector('.score').innerHTML = score;
  } else {
    document.querySelector('.right > .message').innerHTML = '📈 Too High';
    score = Number(document.querySelector('.score').innerHTML) - 1;
    document.querySelector('.score').innerHTML = score;
  }
});
