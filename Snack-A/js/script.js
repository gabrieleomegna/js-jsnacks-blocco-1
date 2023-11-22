// Crea un array vuoto. 
const oddNumber = [];

// Chiedi per 6 volte all'utente di inserire un numero, 
let userNumbers;
for (let i = 0; i < 6; i++) {
    userNumbers = parseInt(prompt ('Write a number'));
    // se è dispari inseriscilo nell'array.
    if (userNumbers % 2 === 1) {
        oddNumber.push(userNumbers);
    } 
}
console.log (oddNumber);
