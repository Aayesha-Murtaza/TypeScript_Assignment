/** Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/ 


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

console.log("\nUnfortunately, I can invite only two people to dinner.\n")
 
// Remove guests from the list, starting from the end, until only two remain
for (let index = myArray2.length -1 ; index > 1; index--) {
   console.log(`I apologize, I can't invite you to dinner, ${myArray2[index]}`);
   myArray2.pop();
   
}

// Notify the remaining guests that they're still invited, and then remove them from the list
for (let index = myArray2.length -1 ; index >= 0; index--) {
   console.log(`${myArray2[index]}, you are still invited to dinner.`);
   myArray2.pop();
}

// Print the final, empty list
console.log(myArray2);