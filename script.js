'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎊 CORRECT NUMBER';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
