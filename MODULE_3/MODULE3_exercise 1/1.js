'use strict'
       const container = document.getElementById('target');
       let items = ['first item', 'second item','third item'];
       let listHtml = '<ol>';
       items.forEach(itemText => {
                // Add the <li> element with the text content inside
                listHtml += `<li>${itemText}</li>`;
            });
       listHtml += '</ol>';
       container.innerHTML = listHtml;

       if (container){
         container.classList.add("my-list");
       }