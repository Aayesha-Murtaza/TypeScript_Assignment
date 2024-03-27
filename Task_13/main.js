"use strict";
/**Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
var myArray = ["BMW", "Porsche", "Bugatti"];
// For each item in the array, print a statement mentioning  the brand of the car.
for (let index = 0; index < myArray.length; index++) {
    console.log(`I would like to own a ${myArray[index]}`);
}
