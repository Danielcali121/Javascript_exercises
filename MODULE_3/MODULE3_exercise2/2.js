
       'use strict';


let parent = document.getElementById('target');


let header1 = document.createElement('h1');
header1.textContent = "This is an example"; // Corrected Syntax
parent.appendChild(header1);

let items = ['first item', 'second item', 'third item'];
let Html = '<ol>';
items.forEach(a => {
    Html += `<li>${a}</li>`;
});
Html += '</ol>';

parent.innerHTML += Html;
let secondlistitem = parent.querySelector('ol li:nth-child(2)')
       if (secondlistitem){
         secondlistitem.classList.add('highlights');
       }

