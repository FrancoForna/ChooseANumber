'use strict';

// Setting values //////////////////////////////////////////////////////////////////
let score = 20;
let highScore = 0;

//Function for indicator message//
const displayMessage = function (message) {
  document.querySelector('.textStartBoxOne').textContent = message;
};
//Function for score changing //////////////////////////////////////////////////////////////////
const settingScore = function (value) {
  document.querySelector('.score').textContent = value;
};
//Function for high score changing //////////////////////////////////////////////////////////////////
const settingHighScore = function (value) {
  document.querySelector('.highScore').textContent = value;
};
settingScore(score);
settingHighScore(highScore);

//Random Numnber /////
let secretNumber = Math.trunc(Math.random() * 20) + 1;

/// Check boton //////////////////////////////////
document.querySelector('.buttonCheck').addEventListener('click', function () {
  const guess = Number(document.querySelector('.numberBox').value);

  if (!guess) {
    displayMessage('🛑 No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Thats the correct number!');
    const showSecretNumber = (document.querySelector('.signal').textContent =
      secretNumber);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.signal').style.padding = '40px 60px';
    settingScore(score);
    if (score > highScore) {
      highScore = score;
      settingHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🤔 Try lower!' : '🙄 Try bigger!');
      score--;
      settingScore(score);
    } else {
      displayMessage('You loose 😢');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/// Boton reseat //////////////////////////////////
document.querySelector('.restartButton').addEventListener('click', function () {
  const clear = (document.querySelector('body').style.backgroundColor =
    'black');
  document.querySelector('.signal').textContent = '?';
  document.querySelector('.signal').style.padding = '20px 50px';
  displayMessage('Start guessing...');
  document.querySelector('.numberBox').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});

console.log(secretNumber);
