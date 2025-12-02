// grupp 71 - labb 2 Mobben och Karim 


// Hämtar checkboxen genom dess ID. Den ska ändra 
// divens färg när användaren klickar i/ur checkboxen.
let checkbox_holder = document.getElementById('divStyle');
// Hämtar alla textfält med klassen "textfield". 
// Detta blir en HTMLCollection med båda input-fälten.
let textfield = document.getElementsByClassName("textfield");


// Hämtar knappen genom dess ID. Den ska ta bort div-elementet när den klickas.
let button = document.getElementById('button');

// Hämtar div-elementet genom dess ID. Detta är elementet som ska ändras.

let divelement = document.getElementById('div');



// Funktion som ändrar div:ens innehåll baserat på textfältets värde.
function ändraStil(e) {

    console.log('target', e.target);

    const name = e.target.name;
    console.log("name", name);

    if (name === 'content') {

        divelement.innerHTML = e.target.value;
    }
}


// Lägger till en eventlyssnare på varje textfält som lyssnar på 'input'-händelsen.

for (let i = 0; i < textfield.length; i++) {
    textfield[i].addEventListener('input', ändraStil);
}

// Lägger till en eventlyssnare på checkboxen som lyssnar på 'change'-händelsen.
checkbox_holder.addEventListener('change', function() {
    // Konverterar HTMLCollection till en array för enklare hantering.
    const arrayfiled = Array.from(textfield);
    const colorfiled = arrayfiled.find(field => field.name === 'color');
    const colorvalue = colorfiled ? colorfiled.value : '';


    // Ändrar div:ens bakgrundsfärg baserat på textfältets värde.
    divelement.style.backgroundColor = colorvalue;
    console.log('färg ändrad', colorvalue);

});

// Lägger till en eventlyssnare på knappen som lyssnar på 'click'-händelsen.
button.addEventListener('click', function() {
    divelement.remove();
    console.log('div borttagen');
});