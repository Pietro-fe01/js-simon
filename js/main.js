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
// Funzione che genera un numero random compreso tra min e max (inclusi)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione genera n numeri random e li inserisce in un array
function numberGenerator(toGenerate){
    let numberArray = [];
    while(numberArray.length < toGenerate){
        let generator = getRndInteger(1, 100);
        if(!numberArray.includes(generator)){
            numberArray.push(generator);
        }
    }
    return numberArray;
}

/*--------------
    MAIN   
---------------*/

const playGame = document.getElementById("play-game");

playGame.addEventListener("click", function(){
    const userNumbers = [];
    const foundNumbers = [];
    const toRemember = document.getElementById("to-remember");
    const secondDelay = 4000;

    toRemember.innerHTML = "";
    document.getElementById("user-input").innerHTML = ``;
    document.getElementById("found-numbers").innerHTML = ``;

    // Il computer genera 5 numeri random e li inserisce in un array
    const cpuNumbers = numberGenerator(5);
    for (let i=0; i<cpuNumbers.length; i++){
        let rememberItem = document.createElement("div");
        rememberItem.classList.add("remember-square");
        rememberItem.innerHTML = cpuNumbers[i];
        toRemember.append(rememberItem);
    }

    setTimeout(function(){
        toRemember.classList.add("d-none");
    }, secondDelay)

    // Questa funzione comincia con un delay di 30 secondi
    setTimeout(function(){
        // L'user deve inserire i 5 numeri che ricorda
        for (let i = 1; i <= 5; i++) {
            let userInput = Number(prompt("Inserisci un numero"));
            userNumbers.push(userInput);
        }
        console.log(`Numeri inseriti: ${userNumbers}`);
        document.getElementById("user-input").innerHTML = `Numeri inseriti: ${userNumbers}`;

        // Qua faccio il check per vedere se i numeri che ho inserito sono contenuti nell'array della cpu
        for (let i = 0; i < 5; i++) {
            if(cpuNumbers.includes(userNumbers[i])){
                foundNumbers.push(userNumbers[i]);
            }
        }

        // Controllo di aver indovinato almeno un numero, altrimenti stampo nessun numero
        if(foundNumbers.length === 0){
            console.log("Nessun numero indovinato, ritenta!")
            document.getElementById("found-numbers").innerHTML = `Nessun numero indovinato, ritenta!`;

        } else {
            console.log(`Numeri indovinati: ${foundNumbers}`);
            document.getElementById("found-numbers").innerHTML = `Numeri indovinati: ${foundNumbers}`;
        }

        toRemember.classList.remove("d-none");
    }, secondDelay + 100);
});





