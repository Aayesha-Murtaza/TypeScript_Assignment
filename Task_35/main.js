"use strict";
/**Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
Modify your program to print a statement about each animal, such as A dog would make a great pet.
Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet! */
let animal_arr = ["Cat", "Dog", "Horse"];
for (let index = 0; index < animal_arr.length; index++) {
    console.log(`A ${animal_arr[index]} would make a great pet!`);
}
console.log("All three animals, cats, dogs, and horses, can be kept as pets and form strong bonds with humans." +
    "They require care, attention, and proper training to thrive in a domestic environment, contributing to companionship, help their owners stay active, and emotional support for their owners.");
