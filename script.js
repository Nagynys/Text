const heading = document.getElementById("text");
const speedOr = document.getElementById("speed");
const text = "Kuba vypisuje text";
let idletter = 1;
let delay = 500 / speedOr.value;

function printText(){
    heading.innerText = text.slice(0, idletter);

    // zvýší idletter vždy o 1
    idletter++;

    // vyresetuje idletter zpět na 1 a text se začne vypisovat znovu
    if(idletter > text.length){
       idletter = 1;
    }

    // spustí funkci printText se zpožděním speed
    setTimeout(printText, delay);
}

printText();


speedOr.addEventListener("input", function(e){
delay = 500/ e.target.value;
})