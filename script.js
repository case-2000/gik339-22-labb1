const checkbox = document.getElementById('divStyle');
const button = document.getElementById('knapp');
const divElement = document.getElementById('randomdiv');

function eventHanterare(e) {
    if (e.target.id === "content") {
        const name = e.target.name;
        const value = e.target.value;
        divElement.innerHTML = `<p>Fältet ${name} har värdet ${value}</p>`;
    } else {
        console.log("Target element:", e.target);
    }
}

button.addEventListener("click", eventHanterare);
checkbox.addEventListener("click", eventHanterare);

const textFields = document.querySelectorAll('.textfield');
textFields.forEach(field => {
    field.addEventListener("blur", eventHanterare);
});

const color = document.getElementById("color");

checkbox.addEventListener("change", () => {
    divElement.style.backgroundColor = color.value;
});

button.addEventListener("click", () => {
    divElement.remove();
});


