const checkbox = document.getElementById('randomDiv');
console.log(checkbox);

const textFields = document.getElementsByClassName('textField'); 
console.log(textFields);

const button = document.getElementById('knapp')[0];
console.log(button);

const divElement = document.getElementById('randomDiv');
console.log(divElement);


function eventHanterare (event) {
    console.log("Target element:", event.target);

   
}



document.getElementById("knapp").addEventListener ("click" , eventHanterare);
document.getElementById("color").addEventListener ("input" , eventHanterare);
document.getElementById("content").addEventListener ("input" , eventHanterare);
document.getElementById("divstyle").addEventListener ("click" , eventHanterare);
