// Primitive datatypes use Stack memory; i.e. a copy of original data is created and stored at stack
// Non-primitive datatypes use Heap memoru; i.e. a reference is used to access and modify that old data

// PRIMITIVE DATATYPES USE STACK MEMORY
let name1 = "Arka"
let name2 = name1
name2 = "Rohit"

console.log("Name 1: "+name1); // prints the original data
console.log("Name 2: "+name2); // Only name2 is changed but not the name1

// NON-PRIMITIVE DATATYPES USE HEAP MEMORY

let user1 ={
    email: "hello@gmail.com",
    phone: 8933738211
}
let user2 = user1

user2.email = "hi@gmail.com" // Now user1 email is also changed
console.log("user1.email: "+ user1.email); // Prints the new email
console.log("user2.email: "+ user2.email); // prints the new email
