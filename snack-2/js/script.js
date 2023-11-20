// ? Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli
const wrapper = document.querySelector ('div.wrapper');
let wrapperChild = document.createElement ('div');
wrapper.appendChild(wrapperChild);
for (let i = 0; i<=6; i++) {
wrapperChild.innerHTML += `${i}`;
};