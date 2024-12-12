function sayMyName() {
    console.log("Hi");
    console.log("Arka");
}
//sayMyName()
function addTwoNumber(num1, num2) {
    console.log(num1+num2)
}
addTwoNumber(12, 34) //46

function subTwoNumber(num1, num2) {
    let result = (num2-num1)
    return result
}
 let ans = subTwoNumber(12, 34)
 console.log("Answer is: "+ans); //Answer is: 22

 function loginUserMessage(username = "Arka") {
    if (username === undefined) {
        console.log("Please enter a username: ");
        return;
    }
    return `${username} just logged in.`
 }

 console.log(loginUserMessage("Rahul")); // Rahul just logged in. Here Rahul is overrided by Arka
 console.log(loginUserMessage()); // No undefined statement -> Arka just logged in.