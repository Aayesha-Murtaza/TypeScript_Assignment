"use strict";
/**Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. */
let nameArr = ["Saima", "Aatikah", "Usman"];
console.log("My friends names: \n");
//Iterate through the nameArr and print a greeting message to each element in the array using for loop 
for (let i = 0; i < nameArr.length; i++) {
    console.log("Hello, " + nameArr[i] + "! how is everything going? :)");
}
