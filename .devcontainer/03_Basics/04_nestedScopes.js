
function one() {
    const username = "Arka"
    function two() {
        const website = "LinekedIn"
        console.log(username);
    }
    two()
//console.log(website); // ReferenceError: website is not defined

}
one() // returns Arka

function addOne(num){
    return num+1
}
console.log(addOne(6)); // returns 7

let two = function(num){
    return num+2
}
console.log(two(6)); // returns 8
