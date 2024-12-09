const score = 200
const balance = new Number(111)
console.log(score); // returns the score
console.log(balance); // Returns with object Number
console.log(balance.toString().length); // returns 1 since 111 is a single number
console.log(balance.toString.length); // returns 3 change 111 to '111' and returns 3
console.log(balance.toFixed(2));
const num = 2121.636
console.log(num.toPrecision(5)); // precise the number wrt the point 
// If we use .toPrecision() method for any value less than point then it will show in exponential format
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // returns 10,00,000
