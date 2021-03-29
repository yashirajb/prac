//Part 1: Get the user's choice

const getUserChoice = userInput => {
    //edge case: user could type rock with a capital "r"
    userInput = userInput.toLowerCase() 
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
        return userInput
    } else { 
        console.log('There\'s been an error')
    }
};

console.log(getUserChoice('Paper'));
console.log(getUserChoice('Socks'))

//Part 2: Get the computer's choice

const getComputerChoice = () => {
//assign variable to hold numbers 0-2
const randomNumber = Math.floor(Math.random() * 3)

    switch(randomNumber){
        case 0: 
            return 'rock';
        case 1: 
            return 'paper';
        case 2: 
            return 'scissors';

    }
}

console.log(getComputerChoice())
//Part 3: Compare the two choices and determine the winner

const determineWinner = (userChoice, computerChoice) => {
    // if(userChoice === computerChoice){
    //     return"It's a tie!"
    // } 
    if(userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'The computer wins!'
        } else {
            return 'You win!';
        }
    }
    if(userChoice === 'paper'){
         if(computerChoice === 'scissors'){
            return 'The computer wins!';
        } else {
            return 'You won!';
        }
    }
    if(userChoice === 'scissors'){
        if(computerChoice === 'paper'){
            return 'You win!'
        } else {
            return 'The computer wins!'
        }
    }
}

console.log(determineWinner())
//Part 4: Start the program and display the results