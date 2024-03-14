/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/* DICHIARAZIONE VARIABILI */
let parola= '';
let parolaContrario= "";
let risultato = '';
let lunghezza = 0;

/* FUNZIONE RICHIAMATA */
palidroma ();

/* FUNZIONE */
function palidroma (){  
    
    /* INPUT PAROLA */
    parola = prompt('inserisci una parola');

    /* CHECK LUNGHEZZA PAROLA */
    lunghezza = parola.length;

    /* CARICA PAROLA AL CONTRARIO */
    for (let i = lunghezza - 1; i >= 0; i--){
        parolaContrario += parola[i];
    }

    /* Check per vedere se la parola è polindroma */
    if (parolaContrario === parola){
        risultato = `${parola} è palindroma!`
    } else {
        risultato = `${parola} non è palindroma!`
    }
    
    /* MOSTRA RISULTATO */
     alert(risultato); 

return risultato;

}

/* MOSTRA RISULTATO */
/* alert(risultato); */