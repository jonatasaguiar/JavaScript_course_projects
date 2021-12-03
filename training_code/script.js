'use strict';
// let rep = 1;
// while (rep <= 10) {
//   console.log(`${rep}`);
//   rep++;
// }

const diceGen = function () {
  return Math.trunc(Math.random() * 6) + 1;
};
let dice = diceGen();
console.log(dice);
while (dice !== 6) {
  dice = diceGen();
  console.log(`New number rolled: ${dice}`);
  if (dice === 6) console.log('Loop is about to end');
}
