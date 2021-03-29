
//set username to empty string
let userName = '';

//create ternary expression for name--whether there is one or not
userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");

let userQuestion = "Will I eat pizza today?";
console.log(`The user asked: ${userQuestion}`);

//Generate a random number between 0 and 7, create randomnumber variable
let randomNumber = Math.floor(Math.random() * 8);

// set eightball variable to empty string, the value of eightball variable will depend on the 
// value of randomnumber
let eightBall = '';

//Control Flow: take in randomnumber and assign eightball a reply. Need if/else or switch statement

switch(randomNumber) {
    case 0:
        eightBall = "It is possible";
        break;
    case 1: 
        eightBall = "It is decidedly so";
        break;
    case 2:
        eightBall = "Reply hazy try again";
        break;
    case 3: 
        eightBall = "Cannot predict now";
        break;
    case 4:
        eightBall = "My sources say no";
        break;
    case 5: 
        eightBall = "Outlook not so good";
        break;
    case 6: 
        eightBall = "Signs point to yes";
        break;
}

console.log(eightBall);