'use strict';

       async function get_joke (){
         try{
           const response = await fetch('https://api.chucknorris.io/jokes/random');
           const jsondata = await response.json()
           console.log(jsondata.value);
         } catch (error) {
           console.log(error.message);
         } finally {
           console.log('everything done');
         }
       }
       get_joke();
