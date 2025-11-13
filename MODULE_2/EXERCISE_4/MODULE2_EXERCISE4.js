'use strict'

let numbers = [];

while (true) {
  let num = Number(prompt("What number?: "));

  if (num === 0) {
    break;
  } else {
    numbers.push(num);
  }
}
let y = numbers.reverse(numbers.sort());

console.log(y);
