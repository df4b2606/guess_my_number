'use strict';
console.log(document.querySelectorAll);
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const value = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!value) {
    document.querySelector('.message').textContent = 'No Number!';
    //when player wins
  } else if (value === number) {
    displayMessage('You win!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (highscore < score) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
  //too high
  else if (value != number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        value > number ? 'Too high!!!!' : 'Too low!!!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose!!!!';
    }
  }
});
//   } else if (value > number) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!!!!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lose!!!!';
//     }
//   } else if (value < number) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!!!!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lose!!!!';
//     }
//   }
// });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
