// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt('Type your first word');
const secondWord = prompt('Type your second word');

if (firstWord.length > secondWord.length) {
    console.log (`The longest word is:${firstWord}`);
} else if (firstWord.length < secondWord.length) {
    console.log (`The longest word is:${secondWord}`);
}