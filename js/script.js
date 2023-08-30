'use strict';

// const result = confirm("Красная или Синяя таблетка?");
// if (result == true) {
//   alert('Ты выбрал Красную Таблетку');
// } else {
//   alert('Ты выбрал Синюю Таблетку');
// }

// const answer = +prompt("Вам есть 18?", "18");
// console.log( answer );

// if (answer > 20) {
//   console.log('Ты можешь бухать');
// } else {
//   console.log('Тебе запрешено бухать');
// }

const answers = [];

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is you last name?', '');
answers[2] = prompt('The year of your birth?', '');

document.write(typeof(answers));
document.write(typeof(null));