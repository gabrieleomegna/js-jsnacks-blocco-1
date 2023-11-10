//? chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande
const firstUserAge = parseInt (prompt('Write first user age'));
const secondUserAge = parseInt (prompt('Write second user age'));

if (firstUserAge > secondUserAge) {
    console.log ('First user is older and he is:', firstUserAge)
} else if (firstUserAge < secondUserAge) {
    console.log ('Second user is older and he is:', secondUserAge)
} else {
    console.log ('Both users have the same age:', firstUserAge )
}