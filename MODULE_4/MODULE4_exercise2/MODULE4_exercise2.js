 'use strict';


    const form = document.querySelector('form');


    form.addEventListener("submit", async (event) => {

      event.preventDefault();


      const queryValue = document.getElementById('query').value;


      const baseurl = form.action;
      const url = baseurl + `?q=${queryValue}`;

      try {

        const response = await fetch(url);


        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }


        const searchResult = await response.json();


        console.log('--- TVMaze Search Result ---');
        console.log(searchResult);
        console.log('----------------------------');

      } catch (error) {
        console.error('Fetch failed:', error);
      }
    });