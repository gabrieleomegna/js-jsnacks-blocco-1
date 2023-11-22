// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre): 
// moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

const userFirstNumber = parseInt(prompt ('Write first number (2 digits)'));
const userSecondNumber = parseInt(prompt ('Write second number (min 4 digits)'));
let newSecondNumber;
for (let i = userFirstNumber; i <= userSecondNumber; i = i * 2) {
    if (i >= userSecondNumber / 2) {
        newSecondNumber = i;
    }
    console.log (i);
}
console.log ('Il secondo numero finale è:', newSecondNumber*2)