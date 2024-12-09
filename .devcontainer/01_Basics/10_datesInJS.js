let myDate = new Date()

console.log(myDate); // returns the date but not in human readable format i.e 2024-12-09T15:42:31.321Z
console.log(myDate.toString()); // returns Mon Dec 09 2024 15:42:31 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //  returns Mon Dec 09 2024
console.log(myDate.toLocaleString()); // returns 12/9/2024, 3:42:31 PM
console.log(typeof myDate); // returns object
// IN JS, Jan Started with 0 and so on
let hisDate = new Date(2024, 1, 27) // Feb 27, 2024 
console.log(hisDate.toDateString()); // returns Tue Feb 27 2024

let herDate = new Date("01-14-2024") 
console.log(herDate.toDateString());  // Sun Jan 14, 2024 

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(herDate.getTime()/1000));

console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());

herDate.toLocaleString('default', {
    weekday: "long"
})
