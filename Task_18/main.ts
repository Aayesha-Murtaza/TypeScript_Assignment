/**Seeing the World: Think of at least five places in the world you’d like to visit. */

let places: string[] = ["Makkah", "Madina", "London", "California", "Denmark"];

// Log the original array to the console
console.log("Original array:");
console.log(places);

/* nonMutatingSort function takes an array of strings as an argument and returns
a new sorted array without modifying the original array. */ 
function nonMutatingSort(arr: string[]) {
  return arr.slice().sort();
}

//  Call the nonMutatingSort function with the 'places' array, log the result to the console.
console.log("\nArray in alphabetical order without modifying the original array:")
console.log(nonMutatingSort(places));

// Log the original array to the console
console.log("\nOriginal array:");
console.log(places);

/* nonMutatingReverseSort function: A function that takes an array of strings as an argument,
returns a new sorted array (in reverse order) without modifying the original array.
*/
function nonMutatingReverseSort(arr: string[]) {
  return arr.slice().sort().reverse();
}

// Call the nonMutatingReverseSort function with the 'places' array, log the result to the console
console.log("\nArray in reverse alphabetical order without modifying the original array:")
console.log(nonMutatingReverseSort(places));

// log the original array
console.log("\nOriginal array:");
console.log(places);

// Reverse the order of your array. Log the array
console.log("\nReversed array: ")
places.reverse();
console.log(places);

//  Reverse the order of your list again. Log the array
console.log("\nArray reversed back to it's original order: ");
places.reverse();
console.log(places);

//Sort your array so it’s stored in alphabetical order. Log the array 
console.log("\nArray in alphabatical order: ")
places.sort();
console.log(places);

//Sort to change your array so it’s stored in reverse alphabetical order. Log the array
console.log("\nArray in reverse alphabetical order: ");
places.sort().reverse();
console.log(places);
