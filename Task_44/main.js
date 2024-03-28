"use strict";
/**Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 * The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
 * Call the function three times, using a different number of arguments each time. */
// takes varaible arguments and stores them as an array of type string
function sandwich_items(...items_array) {
    console.log("\nSandwich Items:");
    for (let index = 0; index < items_array.length; index++) {
        console.log("-" + items_array[index]);
    }
}
//calling sandwich_items() with different arguments
sandwich_items("lettuce", "tomato", "cheese");
sandwich_items("Peanut Butter", "Jelly", "Banana", "Honey");
sandwich_items("fried egg", "cheese");
