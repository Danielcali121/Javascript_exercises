'use strict'

let x = [6,7,4,7,3,8,5,3,46,57,84,32,57,54,74];
let y = [];
function even(x){

    for (let i of x){

        if (i%2 ===0){
            y.push(i);

    }
    }
}
even(x);
console.log('old list:');
console.log(x);
console.log('list of even numbers:');
console.log(y);