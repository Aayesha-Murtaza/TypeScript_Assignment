/**Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */

let user_names = ["admin","deputy manager","assistant manager","guest","organizer"];

for (let index = 0; index < user_names.length; index++) {
    // If the user is 'admin' print a special greeting.
    if (user_names[index] == "admin") {
        console.log("Hello "+ user_names[index]+ ", would you like to see a status report?");
        // for everyone else, print a generic meeting.
    }else{
        console.log("Hello "+ user_names[index]+", thank you for logging in again.");
    }      
}