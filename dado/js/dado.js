// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// let numero = parseInt(prompt("Inserisci un numero da 1 a 6"));
const button = document.getElementById('myButton');

button.addEventListener('click' , 
function () {

    let numero = Math.floor((Math.random() * 6) + 1);
    
    let userNumero = "L'user sceglie il numero:" + numero;


    document.getElementById("user").innerHTML = userNumero;








    let n = Math.floor((Math.random() * 6) + 1);

let computerN = "Il computer sceglie il numero:"  + n;

document.getElementById("pc").innerHTML = computerN;





if (n > numero) {

    document.getElementById("win").innerHTML = "Il pc ha vinto la sfida!";
}

else {
    document.getElementById("win").innerHTML = "L'user ha vinto la sfida!";
}
})












