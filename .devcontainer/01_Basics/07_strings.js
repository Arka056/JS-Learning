const name = "Arka"
const roll = 20
// console.log(name+rCount); // Returns Arka20
console.log(`Hello my name is ${name} and my roll is ${roll}.`); // String interpolation
const gameName = new String("Arka"); 
console.log(gameName[0]); // returns A
console.log("String length: " + gameName.length); // returns 4
console.log(gameName.__proto__); // returns object i.e {}
console.log(gameName.charAt(2)); // retunrs k
console.log(gameName.indexOf('r')); // returns 1
const newString = gameName.substring(0, 3)
console.log("New Substring: "+newString)
const newStr = gameName.slice(-2, -4) // indexing started from the end
console.log(newStr); //returns space since no characters are in newStr
const arr = "   Arka   "
console.log(arr); //prints Arka with space
console.log(arr.trim()); // Removes all spaces from arr


