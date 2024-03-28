/**More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. */

//Tests for equality and inequality with strings
let country = "China";
console.log('country == "china"?');
console.log(country == "china");

console.log('country == "China"');
console.log(country == "China");

// Tests using the lower case function
let originalString = "Hello, Programmer!";
console.log("originalString == ", originalString.toLowerCase(), "? ");
console.log(originalString == originalString.toLowerCase());

console.log("originalString != ", originalString.toLowerCase(), "? ");
console.log(originalString != originalString.toLowerCase());

// Numerical tests involving equality and inequality
console.log("4 == 46 ?");
console.log(4 == 6);

console.log("6 != 8 ?");
console.log(6 != 8);

// Numerical tests involving greater than or equal to, and less than or equal to
console.log("5 >= 4 ?");
console.log(5 >= 4);

console.log("6 <= 9 ?");
console.log(6 <= 9);

// Numerical tests involving greater than and less than
console.log("10 > 5 ?");
console.log(10 > 5);

console.log("7 < 9 ?");
console.log(7 < 9);

//Tests using "and" and "or" operators
console.log("true && true");
console.log(true && true);

console.log("true || false");
console.log(true || false);

//Test whether an item is in an array
let arr = ["mango", "orange", "banana"];

console.log("\nDoes \"mango\" exists in array ?")
let index = arr.indexOf("mango");
if (index != -1) {
  console.log("\"",arr[index], "\" exists at index " + index);
} else {
  console.log("The item you are looking for doesn't exist in the array!");
}

//  Test whether an item is not in an array
console.log("\nDoes \"strawberry\" exists in array ?")
let index1 = arr.indexOf("strawberry");
if (index1 != -1) {
  console.log("\"",arr[index1], "\" exists at index " + index1);
} else {
  console.log("The item you are looking for doesn't exist in the array!");
}
