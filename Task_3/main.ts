/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase. */

let personName: string = "Albert EinSTein";
let titleCase = '';

console.log(personName.toLowerCase()); 
console.log(personName.toUpperCase());


// print the personName in title case

for (let index = 0; index < personName.length; index++) {
    // line 15-18: if the character in personName is ' '(space) add a space to title case and make the next letter capital, then increment index by 1.
    if (personName[index] == ' ' ) {
        titleCase += ' ';
        titleCase += personName[index+1].toUpperCase();   
        index++;   
    } else if(index == 0){ //make the character on first index capital
        titleCase += personName[0].toUpperCase(); 
    } else{ // make all other characters small.
        titleCase += personName[index].toLowerCase(); 
    }  
}

console.log(titleCase);