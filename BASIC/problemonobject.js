//basic problem on object
let student = {
    name: "John",
    age: 20,
    grade: "A"
};
console.log(student);

//accessing properties
console.log(student.name);
console.log(student.age);
console.log(student.grade);

//updating properties
student.age = 21;
console.log(student);

//adding properties
student.city = "New York";
console.log(student);

//deleting properties
delete student.grade;
console.log(student);
    