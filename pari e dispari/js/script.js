/* DICHIARAIONE VARIABILI */
let tipoNumero;
let numero = 0;
let i = 0;
let sum = 0;
let risultato;

/* L’utente sceglie pari o dispari */

tipoNumero = prompt ('Pari o dispari?');


/* while (i < 1) {
    if (tipoNumero = 'pari') {
        tipoNumero = prompt('Pari o dispari?');
    } else if (tipoNumero = 'dispari') {
        tipoNumero = prompt('Pari o dispari?');
    } else {
        i=2;
    }
} */


/* Utente inserisce un numero da 1 a 5. */

while (i < 1) {   /* DEVO CAMBIARE LA VARIABILE i? */
    
   numero = parseInt(prompt('Inserisci un numero tra 1 e 5'));
   console.log('Il numero inserito è ' + numero);

   if (numero > 0 && numero < 6){
       i=2;
   } else if (numero < 1 && numero > 5) {
       numero = parseInt(prompt('Inserisci un numero tra 1 e 5'));
   }

}

/* Sommiamo i due numeri */
sum = numeroGenerato () + numero;
console.log('Il numero inserito è ' + sum);

/* Stabiliamo se la somma dei due numeri è pari o dispari  */


pariDispari();

/* Dichiariamo chi ha vinto */
alert('il vincitore ' + risultato + ' ' + sum);


/* FUNZIONI */

function numeroGenerato () {
    
    const numeroRandom = Math.floor(Math.random() * 6);
    console.log('Il numero generato è ' +numeroRandom);
    return numeroRandom;

}

function pariDispari(){
    
    if (sum % 2 === 0) {
        risultato = 'è pari';
    } else if (sum % 2 !== 0)
        risultato = 'è dispari';
}