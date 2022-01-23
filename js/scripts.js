'use strict';

const btn = document.querySelector('header a');

const h1 = document.querySelector('header h1');

let counter = 0;


btn.addEventListener('click', () => {
    
    counter++;
    // alert('test');

    console.log(counter);

    if(counter % 2 === 0){
        
        h1.innerHTML = 'Tuning samochdów Kraków';
    } else { 
        h1.innerHTML = 'Będzie Pan zadowolony :)';
    }

    
});