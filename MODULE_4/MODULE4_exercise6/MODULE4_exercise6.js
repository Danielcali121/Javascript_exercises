'use strict';

        const form = document.querySelector('form');
        const resultsContainer = document.getElementById('results-container');

        form.addEventListener("submit", async(event) => {
          event.preventDefault();


          const value = document.getElementById('query').value;


          const baseurl = form.action;
          const url = baseurl + `?query=${value}`;


          resultsContainer.innerHTML = '';

          try {
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }


            const jsonResponse = await response.json();


            const jokesArray = jsonResponse.result;

            if (jokesArray.length === 0) {
                resultsContainer.innerHTML = '<p>No jokes found for that term.</p>';
                return;
            }


            jokesArray.forEach(joke => {

                const article = document.createElement('article');


                const p = document.createElement('p');


                p.textContent = joke.value;

                article.appendChild(p);


                resultsContainer.appendChild(article);


                resultsContainer.appendChild(document.createElement('hr'));
            });


          } catch(error) {
            console.error('Fetch failed:', error);
            resultsContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;

          }

        });