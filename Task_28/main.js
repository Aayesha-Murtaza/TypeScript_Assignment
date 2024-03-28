"use strict";
/**Stages of Life: Write an if-else chain that determines a person’s stage of life.  */
let person_age = 19;
if (person_age == 2) {
    // If the person is less than 2 years old, print a message that the person is a baby.
    console.log("The person is a baby.");
}
else if (person_age >= 2 && person_age < 4) {
    // If the person is at least 2 years old but less than 4, print that the person is a toddler.
    console.log("The person is a toddler.");
}
else if (person_age >= 4 && person_age < 13) {
    // If the person is at least 4 years old but less than 13, print that the person is a kid.
    console.log("The person is a kid.");
}
else if (person_age >= 13 && person_age < 20) {
    // If the person is at least 13 years old but less than 20, print that the person is a teenager.
    console.log("The person is a teenager.");
}
else if (person_age >= 20 && person_age < 65) {
    // If the person is at least 20 years old but less than 65, print that the person is an adult.
    console.log("The person is an adult..");
}
else if (person_age >= 65) {
    // If the person is age 65 or older, print a message that the person is an elder.
    console.log("The person is an elder.");
}
