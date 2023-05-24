function RandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }
  return randomString;
}

function randomArray(min, max, length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(RandomInteger(min, max));
  }
  return randomArray;
}

module.exports = {
  RandomInteger,
  randomString,
  randomArray
};
