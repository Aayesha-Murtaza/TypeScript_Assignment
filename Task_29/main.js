"use strict";
/**Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
 Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
let favorite_fruits = ["apple", "banana", "orange", "watermelon", "carrot"];
for (let index = 0; index < favorite_fruits.length; index++) {
    if (favorite_fruits[index] == "apple") {
        console.log("You really like " + favorite_fruits[index] + "!");
    }
    if (favorite_fruits[index] == "banana") {
        console.log("You really like " + favorite_fruits[index] + "!");
    }
    if (favorite_fruits[index] == "orange") {
        console.log("You really like " + favorite_fruits[index] + "!");
    }
    if (favorite_fruits[index] == "watermelon") {
        console.log("You really like " + favorite_fruits[index] + "!");
    }
    if (favorite_fruits[index] == "carrot") {
        console.log("You really like " + favorite_fruits[index] + "!");
    }
}
