'use strict';
        document.getElementById('start').addEventListener("click", function() {

         const number2 = parseFloat(document.getElementById('num2').value);

         const num1 = parseFloat(document.getElementById('num1').value);

         const operation = document.getElementById('operation').value;

         const result = document.getElementById('result');

         if (!operation) {
           result.textContent = 'choose and operation';
         } else {
           if (isNaN(num1) || isNaN(number2)) {
             alert("write values")
           } else {
             if (operation === "add") {
               let result1 = num1 + number2;
               result.textContent = `sum is ${result1}`;
             } else if (operation === "sub") {
               let result2 = num1 - number2;
               result.textContent = `result is ${result2}`;
             } else if (operation === "multi") {
               let result3 = num1 * number2;
               result.textContent = `result is ${result3}`;
             } else {
               if (operation === "div") {
                 let result4 = num1 / number2;
                 result.textContent = `result is ${result4}`;
               }
             }
           }
         }
       })
