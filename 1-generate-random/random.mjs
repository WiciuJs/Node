function randomTableNumber(min, max, length) {
  var tablica = [];
  for (var i = 0; i < length; i++) {
    var liczba = Math.floor(Math.random() * (max - min + 1) + min);
    tablica.push(liczba);
  }
  return tablica;
}

function randomString(string_length) { 
let randomString = "";  
let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; 
for (var i = 0; i < string_length; i++) {
    randomString += char.charAt(Math.floor(Math.random() * char.length));
  }
  return randomString; 
  };    


 
  export  {randomTableNumber, randomString};