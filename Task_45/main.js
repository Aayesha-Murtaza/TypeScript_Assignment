"use strict";
/**Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
 * Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 * Print the Object that’s returned to make sure all the information was stored correctly. */
function createCar(manufacturer, modelName, ...args) {
    const car = {
        manufacturer,
        modelName,
    };
    // assign additional properties to the car object
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// calling method createCar
const mycar1 = createCar("Ford", "Mustang", ["year", 2018]);
const myCar2 = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2023]);
console.log(mycar1);
console.log(myCar2);
