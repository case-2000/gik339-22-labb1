const checkbox = document.getElementById('divstyle');
const textFields = document.getElementsByClassName('textfield'); 
const button = document.getElementById('knapp');
const divElement = document.getElementById('randomdiv');


function eventHanterare (e) {
    console.log("Target element:", e.target);
   
}


button.addEventListener ("click" , eventHanterare);
document.getElementById("color").addEventListener ("input" , eventHanterare);
divstyle.addEventListener ("click" , eventHanterare);


document.getElementById("content").addEventListener("blur", handleBlur);
function handleBlur(e){
    const name = e.target.name;
    const value = e.target.value;
    divElement.innerHTML = `<p>Fältet ${name} har värdet ${value}</p>`;
} 

const color =document.getElementById("color");

checkbox.addEventListener("change", () =>{
    divElement.style.backgroundColor = color.value;
});

button.addEventListener ("click", () =>{
    divElement.remove();

});

