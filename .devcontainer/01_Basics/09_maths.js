console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // returns 4
console.log(Math.round(4.6)); // returns 5
console.log(Math.ceil(4.2)); // returns 5
console.log(Math.floor(4.9)); // returns 4
console.log(Math.min(4,1,12,10)); // returns 1
console.log(Math.max(4,3,12,10)); // returns 12
console.log(Math.random()); // returns random value => 0.18206505907663995
console.log(Math.random()*10); // returns random value * 10 => 1.8766661361184833
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

