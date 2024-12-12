function calculateCartPrice(...num1) { // This ins REST Operator
    return num1
}
console.log(calculateCartPrice(12, 23, 45)); // returns[ 12, 23, 45 ]


function calculateCartPrice2(a, b,...num1) { // This ins REST Operator
    return num1
}
console.log(calculateCartPrice2(12, 23, 45, 24, 11)); // returns[ 45, 24, 11 ]

const user = {
    username: "Arka",
    price: 189
}
function handleObject(anyObject) {
    console.log(`Username is: ${anyObject.username} and price is: ${anyObject.price}`);
}
handleObject(user) // Username is: Arka and price is: 189

handleObject({
    username: "Badhan",
    price: undefined
})

const myArr = [10, 20, 30]
function getArray(arr) {
    return arr[2]
}
console.log(getArray(myArr)); // 30
