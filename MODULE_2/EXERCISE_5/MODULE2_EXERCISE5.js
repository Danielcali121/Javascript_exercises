'use strict'
let numbers = [];


while (true) {
  let number = Number(prompt("What number?: "));
    let y = numbers.includes(number)

  if (y === true) {
      console.log('number has already been given');
      break;
  } else {
    numbers.push(number);
  }
}
let y = numbers.sort();

console.log(y);