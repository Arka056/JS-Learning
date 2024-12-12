
//const tinderUser = new Object() // This is singleton object
const tinderUser = {} // This is non-singleton object

console.log(tinderUser); // returns {}

tinderUser.id = "123abc"
tinderUser.name = "Arka"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "arka@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Arka",
            lastname: "Kundu"
        }
    }
}
console.log(regularUser.fullName.userfullname); //{ firstname: 'Arka', lastname: 'Kundu' }

const obj1  = {1: "a", 2: "b"}
const obj2  = {3: "a", 2: "b"}
//const obj = {obj1, obj2}  // 2 objects is merged to single object
const obj = Object.assign({}, obj1, obj2)
console.log(obj); // returns { '1': 'a', '2': 'b', '3': 'a' }
const obj3 = {...obj1, ...obj2}
console.log(obj3); // returns { '1': 'a', '2': 'b', '3': 'a' }

const users = [
    {
        id: 1,
        email: "hello1@gmail.com"
    },
    {
        id: 2,
        email: "hello2@gmail.com"
    }
]
console.log(users[1].email) // returns hello2@gmail.com

console.log(tinderUser); //{ id: '123abc', name: 'Arka', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Arka', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Arka' ], [ 'isLoggedIn', false ] ]
