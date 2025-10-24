let employee = {
    name: "prem",
    age: 26,

    job: function() {
        console.log("Software Engineer");
    }
}
console.log(employee.name); // Accessing property
console.log(employee.age);  // Accessing property
employee.job();            // Calling method

// Function with parameters and arguments

function full_name(first_name, last_name) { //parameters
    console.log("Full Name: " + first_name + " " + last_name);
}
full_name("premnath", "u"); // arguments

// Another example

function full_name1(first_name, last_name) { // parameters
    //return "Full Name: " + first_name + " " + last_name;
    console.log("Full Name: " + first_name + " " + last_name);
}
var f1 = "premnath"; // arguments
var l1 = "u"; // arguments
full_name1(f1, l1);

// split method example for separator and limit

let poem = "Money makes many things happen";
console.log(poem.split(" "),3); // Using space as separator and limit 3
console.log(poem.split(" ")); // Using as separator

// Another split method example
let name = "premnath _ u";
console.log("First name is", name.split(" "), 0); // Using _ as separator
console.log("Last name is", name.split(" "),2); // Using _ as separator
console.log(name.split("")); // Using as separator for seperate characters

let name1 = "premnath _ u";
let parts = name1.split("_"); // split by underscore

let firstName = parts[0].trim(); // "premnath" using trim to remove extra spaces
let lastName = parts[1].trim();  // "u" using trim to remove extra spaces

console.log("First name is", firstName);
console.log("Last name is", lastName);

//examples for split using string

let str = "this is string"
console.log(str.split("s")); // Using space as separator

//one more example for split method

let str1 = "this is string"
console.log(str1.split("s"), 2); // Using space as separator with limit 2
console.log(str1.split("s")); // Using space as separator