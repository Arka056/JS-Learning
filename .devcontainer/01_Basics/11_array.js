const arr = [1, 2, 3, 4, 5] // 0 based indexing 
console.log("Old Array : "+arr); // returns arr

const arr1 = new Array(10,12,31,44)
console.log(arr1[3]); // returns 44

// Array methods
arr.push(8) 
console.log("New Array: "+arr); // returns New Array: 1,2,3,4,5,8
console.log(typeof arr);
arr.pop()
console.log("New Array: "+arr); // returns New Array: 1,2,3,4,5
arr.unshift(9) // 
console.log("New Array: "+arr); // returns New Array: 9,1,2,3,4,5
arr.shift() //removes the shifted element
console.log("New Array: "+arr); // returns New Array: 1,2,3,4,5

console.log("New Array: "+arr.includes(12)); // returns false
console.log("New Array: "+arr.indexOf(1)); // returns 0

// const newArr = arr.join()
// console.log(typeof newArr +"->"+ newArr); // Now array becomes string type from array

const a = arr.slice(1,3)
console.log(a);
console.log("A: " + arr);
const b = arr.splice(1,3)
console.log(b);
console.log("B: " + arr);

const marvel_heros = ["Thor", "Iron Man", "Spider Man"]
const dc = ["Super Man", "Flash", "Bat Man"]
//marvel_heros.push(dc)                                                                                             
//console.log(marvel_heros); // returns marvel_heros and dc as array of array
//console.log(marvel_heros[3] [2]); // returns Bat Man 3 for 3rd index of marvel_heros which is dc array

// concate two arrays
const allHeros = marvel_heros.concat(dc) // it concats two arrays together
console.log(allHeros); // returns [ 'Thor', 'Iron Man', 'Spider Man', 'Super Man', 'Flash', 'Bat Man' ]

const newHeros = [...marvel_heros, ...dc] // Spreading 
console.log(newHeros) // [ 'Thor', 'Iron Man', 'Spider Man', 'Super Man', 'Flash', 'Bat Man' ]

const panda = [1,2,3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const myPanda = panda.flat(Infinity) // It makes all depth elements into single array 
console.log(myPanda);

console.log(Array.isArray("Arka")); // returns false
// To convert it into array
console.log(Array.from("Arka")); // returns [ 'A', 'r', 'k', 'a' ]
console.log(Array.from({name : "Arka"})); // it returns [] blank array because we didn't mentu

let sc1 = 10
let sc2 = 20
let sc3 = 67
console.log(Array.of(sc1,sc2,sc3)); // returns [ 10, 20, 67 ]
console.log(Array.isArray([1, 2]));

console.log(Array.from(Object.values({ name: "Arka" })));  // returns ["Arka"]
console.log(Array.from(Object.keys({ name: "Arka" })));  // returns ["name"]