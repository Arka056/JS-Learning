const course = {
    courseName : "BTech",
    college: "KIIT"
}
const {college : university} = course
// console.log(college);
console.log(university); // KIIT

//De-structuring
const navbar = ({company}) =>{
console.log("Hii");

}
navbar(company = "Arka")

