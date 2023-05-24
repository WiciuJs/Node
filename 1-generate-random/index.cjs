const {RandomInteger, randomString, randomArray } = require('./randomUtils.cjs');

const losowaLiczba = RandomInteger(1, 10);
console.log('Losowa Liczba to:', losowaLiczba);

const losowyNapis = randomString(8);
console.log('Losowy Napis to:', losowyNapis);

const losowaTablica = randomArray(1, 100, 5);
console.log('Losowe liczby w Tablicy to:', losowaTablica);
