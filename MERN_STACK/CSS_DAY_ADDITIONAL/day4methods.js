// reverse() method reverses the order of the elements in an array.
// join() method joins all elements of an array into a string.

let array = ["prem", "nath", "u"];
array.reverse();
console.log("Reversed array:", array); // Output: ["u", "nath", "prem"]

array.join(" ");
console.log("Joined string:", array.join(" ")); // Output: "u nath prem"

var str = "Hello World";
var arr = str.split(" ");
console.log("Split array:", arr); // Output: ["Hello", "World"]

var splitstring = "repus";
var elementarray = splitstring.split("");
var reversedarray = elementarray.reverse();
var joinedstring = reversedarray.join("");
console.log("Reversed string:", joinedstring); // Output: "super"


var str1 = "Today Work Great";
var result = str1.split(" ").reverse().join(" ");
console.log("Reversed sentence:", result); // Output: "Great Work Today"



