let rollno= 23
const name= "Allu Arjun"
var course_name= "BCA" 

console.log("Before any change");
console.table([rollno,name,course_name])

console.log("After the change");
// let rollno=1                  cannot reassign let variable again because of its block scoped
// const name="Sagar"            cannot reassign let variable again because of its block scoped
var course_name="Btech"
console.table([rollno,name,course_name])
