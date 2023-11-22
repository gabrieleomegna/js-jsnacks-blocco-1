
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi), 
const listaInvitatiGatsby = [
    'Mario Gomegna',
    'Gabriele Ciccino',
    'Gino Gianfranco',
    'Jhonny Ginetti',
    'Ermenegildo Poretti'
];
// chiedi all'utente il suo nome 
const userName = prompt('Write your name');


// e comunicagli se può partecipare o no alla festa.
  // ! controllo se il suo nome appartiene ai nomi nella lista degli invitati
  let isNameFound = false;
  for (let i = 0; i < listaInvitatiGatsby.length; i++) {
    if (userName == listaInvitatiGatsby[i]) {
        isNameFound = true;
    }
  }
  // ! comunico se può partecipare o no
if (isNameFound) {
    console.log (`Benvenuto ${userName} alla festa del Grande Gatsby!!`);
} else {
    console.log (`Sbattete fuori questo ${userName}, non è nella lista!`)
}