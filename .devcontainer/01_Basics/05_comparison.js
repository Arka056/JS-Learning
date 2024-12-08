// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1);  // false


console.log("2" < 1); // returns false : String 2 is coerced to number 2 and since 2 < 1 => false
console.log("02" > 1); // returns true : String 02 is coerced to number 2 and since 2 > 1 => true
console.log(null > 0); // returns false : null is coerced to number 0 and since 0 > 0 => false
console.log(null == 0); // returns false : == operator performs a loose equality check and does not coerce null to a number => false
console.log(null >= 0); // returns true : null is coerced to number 0 and since 0 >= 0 => true
console.log(null == undefined); // returns true : null is only loosely equal to undefined => true

// Strict check
console.log("2" === 2); // not only checks the value but also checks its datatype too
