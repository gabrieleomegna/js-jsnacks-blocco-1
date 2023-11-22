// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.
const userNumber = prompt('Write a number of 7 digit'); 
let userNumberArray = userNumber.split ('');
console.log (userNumberArray);
let somma = 0;
for (let i = 0; i < userNumberArray.length; i++) {
    somma = somma + parseInt(userNumberArray[i]);
}
console.log (somma);