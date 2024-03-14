/* L’utente sceglie pari o dispari */
let tipoNumero = prompt('Pari o dispari?');

/* Utente inserisce un numero da 1 a 5. */

let numero = parseInt(prompt('Inserisci un numero tra 1 e 5'));
console.log(numero);


// let numero = 0;
//let i = 0;

//while (i = 1) {
    
//    numero = parseInt(prompt('Inserisci un numero tra 1 e 5'));
//    console.log(numero);

//    if (numero => 1 && numero <= 5){
//        i++;
//    } else if (numero < 1 && numero > 6) {
//        numero = parseInt(prompt('Inserisci un numero tra 1 e 5'));
//    }

//} 

/* Generiamo un numero random (sempre da 1 a 5) 
per il computer (usando una funzione) */
function numeroGenerato () {
    
    const numeroRandom = Math.floor(Math.random() * 6);
    console.log(numeroRandom);
    return numeroRandom;

}

/* Sommiamo i due numeri */
let sum = numeroGenerato () + numero;
console.log (sum);

/* Stabiliamo se la somma dei due numeri è pari o dispari  */
let risultato;

function pariDispari(){
    
    if (sum % 2 === 0) {
        risultato = 'è pari';
    } else if (sum % 2 !== 0)
        risultato = 'è dispari';
}

pariDispari();

/* Dichiariamo chi ha vinto */
alert('il vincitore ' + risultato + ' ' + sum);
