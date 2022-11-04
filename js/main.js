"use strict";

/* Descrizione:
Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno 
alla volta, i numeri che ha visto precedentemente, tramite il 
prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
e quali dei numeri da indovinare sono stati individuati. */

/*--------------
    FUNCTIONS   
---------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*--------------
    MAIN   
---------------*/
const cpuNumbers = [];
const container = document.getElementById("container");
const userNumbers = [];
const foundNumbers = [];

while(cpuNumbers.length < 5){
    let generator = getRndInteger(1, 100);
    if(!cpuNumbers.includes(generator)){
        cpuNumbers.push(generator);
    }
}
console.log(`Stringa da ricordare: ${cpuNumbers}`);
document.getElementById("to-remember").innerHTML = `Stringa da ricordare: ${cpuNumbers}`

for (let i = 1; i <= 5; i++) {
    let userInput = Number(prompt("Inserisci un numero"));
    userNumbers.push(userInput);
}
console.log(`Numeri inseriti: ${userNumbers}`);
document.getElementById("user-input").innerHTML = `Numeri inseriti: ${userNumbers}`

for (let i = 0; i < 5; i++) {
    if(cpuNumbers.includes(userNumbers[i])){
        foundNumbers.push(userNumbers[i]);
    }
}

if(foundNumbers.length === 0){
    console.log("Nessun numero indovinato, ritenta!")
    document.getElementById("found-numbers").innerHTML = `Nessun numero indovinato, ritenta!`;

} else {
    console.log(`Numeri indovinati: ${foundNumbers}`);
    document.getElementById("found-numbers").innerHTML = `Numeri indovinati: ${foundNumbers}`;
}

