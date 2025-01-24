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


function animateWrong() {
  document.body.classList.add('wrong');

  setTimeout(function () {
    document.body.classList.remove('wrong');
  }, 100);
}


// Event listener for the "Check" button
check.addEventListener('click', function () {
  const inputNum = Number(document.querySelector('.guess').value);

  if (!inputNum) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    return;
  }

  if (inputNum === randNum) {
    // Correct Guess
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = randNum;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    //  Wrong Guess
    animateWrong();
    document.querySelector('.message').textContent =
      inputNum < randNum ? '📉 Too Low' : '📈 Too High';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score <= 0) {
    document.querySelector('.message').textContent = '💥 You Lost the Game!';
    document.body.style.backgroundColor = '#f22e3e';
  }
});


// Event listener for the "Again" button
againBtn.addEventListener('click', function () {
  score = defaultScore;
  randNum = Math.floor(Math.random() * 20) + 1;

  // Reset the game state
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = defaultNumber;
  document.querySelector('.message').textContent = defaultMessage;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = defaultGuess;

  document.body.classList.remove('wrong');
});
