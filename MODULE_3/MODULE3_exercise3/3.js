'use strict';

    const container = document.getElementById('target');
    const names = ['John', 'Paul', 'Jones'];
    let listHtml = '';


    for (let i = 0; i < names.length; i++) {

        listHtml += `<li>${names[i]}</li>`;
    }


    container.innerHTML = listHtml;


