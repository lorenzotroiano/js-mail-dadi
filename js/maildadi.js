let messaggio = "Ciao User, non sei registrato, ti invitiamo a farlo!";

// Chiedi all’utente la sua email, 
const emailPresente = ["qwerty@libero.it" , "ytrewq@hotmail.it" , "sium@gmail.com" , "giusepperossi@gmail.com"];

// emailPresente.push('giorgiorossi@libero.it');

let container = document.getElementById('container');

const button = document.getElementById('myButton');



button.addEventListener('click',
function() {

    const emailInserita = document.querySelector('input').value;

    for ( let i = 0; i < emailPresente.length; i++) {

        const valore = emailPresente[i];

        // controlla che sia nella lista di chi può accedere
        if ( valore === emailInserita) {

            messaggio = "Ciao, bentornato tra noi!"

        }

    }

    //  stampa un messaggio appropriato sull’esito del controllo.
    const benvenutoMessaggio = document.createElement('h1');
    benvenutoMessaggio.append(messaggio);
    container.append(benvenutoMessaggio);
})













