'use strict'
let numbers =[];
let answer = prompt('what number you want?:  ');
let answer1 = prompt('what number you want?:  ');
let answer2 = prompt('what number you want?:  ');
let answer3 = prompt('what number you want?:  ');
let answer4 = prompt('what number you want?:  ');
let ins = numbers.push(answer);
let ins1 = numbers.push(answer1);
let ins2 = numbers.push(answer2);
let ins3 = numbers.push(answer3);
let ins4 = numbers.push(answer4);
for (let i = 4;i>=0;i--){
    console.log(numbers[i]);
}