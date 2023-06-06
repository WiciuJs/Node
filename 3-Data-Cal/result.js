const dateCalculator = require('./date-calculator');

const date1 = '2023-05-22';
const daysToAdd = 5;
const newDate = dateCalculator.addDays(date1, daysToAdd);
console.log(newDate); 


const date2 = '2023-06-10';
const diff = dateCalculator.daysDiff(date1, date2);
console.log(diff); 
