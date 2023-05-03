let messaggio;

// Chiedi all’utente la sua email, 
const emailPresente = ["qwerty@libero.it" , "ytrewq@hotmail.it" , "sium@gmail.com" , "giusepperossi@gmail.com"];

emailPresente.push('giorgiorossi@libero.it');

let container = document.getElementById('container');


const button = document.getElementById('myButton');

button.addEventListener('click',
function() {
    
    const emailInserita = document.querySelector('input').value;

  
// controlla che sia nella lista di chi può accedere
        if (emailPresente.includes(emailInserita)) {

            messaggio = "Ciao, bentornato tra noi!"
            
        }
        else {

            messaggio = "Ciao User, non sei registrato, ti invitiamo a farlo!"
           
        }


        //  stampa un messaggio appropriato sull’esito del controllo.
        const benvenutoMessaggio = document.createElement('h1');
        benvenutoMessaggio.append(messaggio);
        container.append(benvenutoMessaggio);


    
})













