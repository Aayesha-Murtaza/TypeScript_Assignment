/**Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

// version 1
let Alien_Color = "green";

if ( Alien_Color  == "green") {
  console.log("You just earned 5 points for shooting the alien.");
} else if (Alien_Color == "yellow") {
  console.log("You just earned 10 points for shooting the alien.");
} else if (Alien_Color == "red") {
  console.log("You just earned 15 points for shooting the alien.");
}

// version 2
let  Alien_Color2  = "yellow";

if (Alien_Color2 == "green") {
  console.log("You just earned 5 points for shooting the alien.");
} else if (Alien_Color2  == "yellow") {
  console.log("You just earned 10 points for shooting the alien.");
} else if (Alien_Color2  == "red") {
  console.log("You just earned 15 points for shooting the alien.");
}

// version 3
let Alien_Color3 = "red";

if (Alien_Color3 == "green") {
  console.log("You just earned 5 points for shooting the alien.");
} else if (Alien_Color3 == "yellow") {
  console.log("You just earned 10 points for shooting the alien.");
} else if (Alien_Color3 == "red") {
  console.log("You just earned 15 points for shooting the alien.");
}
