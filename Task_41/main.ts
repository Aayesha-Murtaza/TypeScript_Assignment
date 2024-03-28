/**Magicians: Make a array of magician’s names. 
 * Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

function show_magicians(arr : Array<string>): void {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);        
    }
}

let magician_arr = ["Doug Henning","Max Maven","David Copperfield"];

console.log("Names of magicians: "); 
show_magicians(magician_arr); //call function show_magicians()