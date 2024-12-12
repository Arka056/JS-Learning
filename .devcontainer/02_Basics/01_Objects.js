

const mySym = Symbol("key1")
// Object Literals
const JsUser = {
    "full name" : "Arka",
    age : 21,
    [mySym] : "Badhan",
    location : "Kolkata",
    email : "rivu421@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(JsUser.email);  // returns rivu421@gmail.com
console.log(JsUser["email"]);  // returns rivu421@gmail.com
console.log(JsUser["full name"]);  // returns Arka
console.log(JsUser[mySym]);  // returns Badhan
console.log(typeof mySym); // used as a symbol

JsUser.age = 23
console.log(JsUser.age); // age is modified to 23 from 21

//Object.freeze(JsUser) // Now JsUser is freezed so further changes to any of its keys and values, no change in the object 
JsUser.age = 24
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user1");   
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this["full name"]}`);   
}
console.log(JsUser.greeting);  // returns [Function (anonymous)]
console.log(JsUser.greeting()); // returns Hello JS user1 undefined
console.log(JsUser.greeting2());  // Hello JS user, Arka