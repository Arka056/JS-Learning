const userEmail = "hi@gmail.com"

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Didn't get user email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// true, "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");   
}

const emptyObj = {}
if (Object.keys(emptyObj).length ===0) {
    console.log("Object is empty");  // Object is empty
    
}

let val1 
val1 = 5 ?? 10
console.log(val1); // 5

val2 = null ?? 10
console.log(val2); // 10

val3 = null ?? undefined ?? 10
console.log(val3); // 10

val4 = undefined ?? null
console.log(val4); // null

5 > 4 ? console.log(true): console.log(false);
