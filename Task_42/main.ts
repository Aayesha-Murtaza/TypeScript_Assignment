/**Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by 
adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

function show_magicians1(arr: Array<string>): void {
    for (let index = 0; index < arr.length; index++) {
      console.log(arr[index]);
    }
  }
  
  function make_great1(arr: Array<string>): void {
    for (let index = 0; index < arr.length; index++) {
      arr[index] = "the great " + arr[index];
    }
  }
  
  let magicianArr = ["Doug Henning", "Max Maven", "David Copperfield"];
  make_great1(magicianArr); // call make_great() to modify the array
  
  console.log("Names of magicians: "); 
  show_magicians1(magicianArr); // Print the modified array
  