const checkbox = document.getElementById('divstyle');
const textFields = document.getElementsByClassName('textfield');
const button = document.getElementById('knapp');
const divElement = document.getElementById('randomdiv');
const colorInput = document.getElementById("color");

function eventHanterare(e) {
    console.log("Target element:", e.target);
}

for (let i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener("input", eventHanterare);
    textFields[i].addEventListener("blur", handleBlur);
}

function handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    divElement.innerHTML = `<p>Fältet ${name} har värdet ${value}</p>`;
}

checkbox.addEventListener("change", () => {
    const color = colorInput.value;
    divElement.style.backgroundColor = color || "#FFFFFF";
});

button.addEventListener("click", () => {
    divElement.remove(); 
});

button.addEventListener("click", eventHanterare);
colorInput.addEventListener("input", eventHanterare);
checkbox.addEventListener("click", eventHanterare);



/*const checkbox = document.getElementById('divstyle');
const textFields = document.getElementsByClassName('textfield'); 
const button = document.getElementById('knapp');
const divElement = document.getElementById('randomdiv');

/* TESTAR KOD */

/*function handleInput(e) {
    console.log('Avsändare (target):', e.target); 

    const inputName = e.target.name; 
    console.log('Name-attribut:', inputName);

    divElement.innerHTML = e.target.value;
}

Checkbox.addEventListener("change", ()) => {
    if (checkbox.checked) 
             const color = colorInput.value;
             output.style.backgroundcolor = color; 
             }
else {
     output.style.backgroundColor = ' ' ; 
}

/*checkbox.addEventListener("change", () =>{
    divElement.style.backgroundColor = color.value;
});*/

/*textfields.forEach(textfield => {
    textfield.addEventListener('input', handleInput); 
});

button.addEventListener('click', function() {
    divElement.remove();
});


/* GAMMAL KOD

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

});*\



