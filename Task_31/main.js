"use strict";
/**No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */
let userNames = ["admin", "deputy manager", "assistant manager", "guest", "organizer"];
// Check if the list is empty, and print an appropriate message
if (userNames.length == 0) {
    console.log("We need to find some users!");
}
else {
    console.log("We have some users!");
}
userNames.length = 0; // removing all of the user names
// Check if the list is empty, and print an appropriate message
if (userNames.length == 0) {
    console.log("We need to find some users!");
}
else {
    console.log("We have some users!");
}
