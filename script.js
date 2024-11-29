const checkbox = document.getElementById('randomDiv');
console.log(checkbox);

const textFields = document.getElementsByClassName('textField'); 
console.log(textFields);

const button = document.getElementById('knapp')[0];
console.log(button);

const divElement = document.getElementById('randomDiv');
console.log(divElement);



function handleClick(){
    console.log("knapp");
}

document.getElementById("knapp").addEventListener ("click" , handleClick); 

knapp.addEventListener("knapp",  (e) => console.log (e.taget.buttonId)); 