const temp = 41
if (temp < 50) {
    console.log("Temperature is less than 50.");
} else {
    console.log("Temperature is greater than 50.");
}

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard && 3 >2) {
    console.log("Allow to the main course");
}
else{
    console.log("Error");
}
const day = 5
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday"); //Prints
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invaild");
        break;
}
