const checkbox = document.getElementById('divstyle');
const textFields = document.getElementsByClassName('textfield'); 
const button = document.getElementById('knapp')[0];
const divElement = document.getElementById('randomdiv');


function eventHanterare (e) {
    console.log("Target element:", e.target);
   
}


knapp.addEventListener ("click" , eventHanterare);
document.getElementById("color").addEventListener ("input" , eventHanterare);
divstyle.addEventListener ("click" , eventHanterare);


document.getElementById("content").addEventListener("blur", handleBlur);
function handleBlur(e){
    const name = e.target.name;
    const value = e.target.value;
    divElement.innerHTML = `<p>Fältet ${name} har värdet ${value}</p>`;
} 



