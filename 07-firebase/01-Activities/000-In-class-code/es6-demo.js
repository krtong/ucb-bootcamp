//example of object literal

//es6 Object Literal
const personObj_ES6 = {
    name,
    age,
    gender,
    comment
}

//This is the same as this approach in es5 and below:
var personObj_ES5 = {
    "name": name,
    "age": age,
    "gender": gender,
    "comment": comment
}

//Example of ES6 Object Destructuring
//ES6 Object Destructuring
const { name, age, comment, email } = personObj;

//ES5 and below version of same code
var name = personObj.name;
var age = personObj.age;
var comment = personObj.comment;
var email = personObj.email;
