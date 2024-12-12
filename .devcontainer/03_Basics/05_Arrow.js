const user = {
    username: "Arka",
    price: 199,
    welcomeMessege: function() {
        console.log(`${this.username}! Welcome to our website`); 
        console.log(this);
        
    }
}
user.welcomeMessege(); //Arka! Welcome to our website
user.username = "Rahul"
user.welcomeMessege() // Rahul! Welcome to our website

console.log(this); // returns empty object {}

function hello() {
    console.log(this);  // returns all global, fetch, clearImmediate...etc
    console.log(this.username) 
}
hello() // returns undefined

const hi = () =>{
    let username = "Miss. Mondal"
    console.log(this.username); // returns undefined
    
}
hi()

// ********* ARROW FUNCTION *********
const addTwo = (n1, n2) => {
    return n1+n2   // explicit return
}
console.log(addTwo(12, 12)); // returns 24

// Implicit return
const mulTwo = (n1, n2) => (n1*n2)
console.log(mulTwo(12, 12)); // returns 144
