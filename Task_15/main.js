"use strict";
/**Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */
var myArray2 = ["Grandfather", "Mother", "Father"];
// Loop through the array and print a message to each person
for (let index = 0; index < myArray2.length; index++) {
    console.log("Hello, " + myArray2[index] + "! you are invited to a family dinner on friday.");
}
console.log(`\n${myArray2[2]} can cannot come to dinner due to some business.\n`);
//replacing te existing guest with a new guest.
myArray2[2] = "Aunt Shazia";
// Loop through the modified array and print a message to each person
for (let index = 0; index < myArray2.length; index++) {
    console.log("Hello, " + myArray2[index] + "! you are invited to a family dinner on friday.");
}
