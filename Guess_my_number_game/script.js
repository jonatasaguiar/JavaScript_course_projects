'use strict';

function createNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function printGuess() {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number';
    displayMessage('🎉 Correct number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  }
}

function resetGame() {
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  secretNumber = createNumber();
  console.log(`Secret number ${secretNumber}`);
}

let secretNumber = createNumber();
console.log(`Secret number ${secretNumber}`);

let highScore = Number(document.querySelector('.highscore').textContent);
console.log(`highScore ${highScore}`);

let score = 20;

let gameStatus = true;

document.querySelector('.check').addEventListener('click', printGuess);
document.querySelector('.again').addEventListener('click', resetGame);
