/**More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
 * Add one new guest to the beginning of your array.
 * Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
 * Print a new set of invitation messages, one for each person in your list. */


let myArray2: string[] = ["Grandfather", "Mother", "Father"];

// Loop through the array and print a message to each person
for (let index = 0; index < myArray2.length; index++) {
    console.log(`Hello, ${myArray2[index]}! you are invited to a family dinner on friday.`);
}

console.log(`\n${myArray2[2]} can cannot come to dinner due to some business.\n`)

//replacing te existing guest with a new guest.
myArray2[2] = "Aunt Shazia";

// Loop through the modified array and print a message to each person
for (let index = 0; index < myArray2.length; index++) {
    console.log(`Hello, ${myArray2[index]}! you are invited to a family dinner on friday.`);
}

console.log("\nI have found a bigger dinner table! \n");

// Add an element to the start, middle, and end of the array
myArray2.unshift("Brother"); 
myArray2.splice(2,0,"Sister");
myArray2.push("Uncle Majid");  

// Loop through the modified array and print a message to each person
for (let index = 0; index < myArray2.length; index++) {
    console.log(`Hello, ${myArray2[index]}! you are invited to a family dinner on friday.`);
}