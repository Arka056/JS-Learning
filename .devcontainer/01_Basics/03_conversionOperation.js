// For String
let score = "14arka"
console.log(typeof score); // returns string
console.log(typeof score); //returns string
let valueInNumber = Number(score) // Number is a class and it is type-casted from string to number
console.log(typeof valueInNumber);
console.log("14arka is now: "+valueInNumber);

// For null
let sc = null
console.log(typeof sc); 
let valInNum = Number(sc) // Number is a class and it is type-casted from string to number
console.log(typeof valInNum);
console.log("null is now: "+valInNum);

// For Undefined
let sc1;
console.log(typeof sc1); 
let valInNum1 = Number(sc1) // Number is a class and it is type-casted from string to number
console.log(typeof valInNum1);
console.log("undefined is now: "+valInNum1);

// For boolean
let sc2 = true
console.log(typeof sc2); 
let valInNum2 = Number(sc2) // Number is a class and it is type-casted from boolean to number
console.log(typeof valInNum2);
console.log("boolean is now: "+valInNum2);

// Now for boolean input as 1 or 0
let bol = 1
let bol2 = Boolean(bol)
console.log(bol2) // returns true for 1 and if it is "0" then returns false

// 1 -> true; 0 -> false
// "" -> false
// "arka" -> true