"use strict";
/**More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. */
var myArray2 = ["Grandfather", "Mother", "Father"];
// Loop through the array and print a message to each person
for (let index = 0; index < myArray2.length; index++) {
    console.log("Hello, " + myArray2[index] + "! you are invited to a family dinner on friday.");
}
console.log("\nI have found a bigger dinner table! \n");
myArray2.push("Brother"); // Add an element to the end of the array
myArray2.push("Sister");
myArray2.push("Uncle Majid");
// Loop through the modified array and print a message to each person
for (let index = 0; index < myArray2.length; index++) {
    console.log("Hello, " + myArray2[index] + "! you are invited to a family dinner on friday.");
}
