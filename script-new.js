// Generate a computer choice for Rock, Paper, or Scissors
function singleGame() {
function getComputerChoice(randomNumber) {
    randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerChoice = 'Rock';
    } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors'
    }
    return computerChoice
}
getComputerChoice();
console.log(`Computer choice: ${computerChoice}`)

// Ask the user for their choice
function askUser() {
    playerOutput = prompt('Play three games of rock, paper, scissors with the computer! Please enter your selection below:')
    return playerOutput
}
let playerChoice = askUser();

// Standardize the user selection
function capitalizeChoice() {
    let firstLetter = playerChoice.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    let restString = playerChoice.slice(1);
    restString = restString.toLowerCase();
    correctedChoice = firstLetter + restString;
    return correctedChoice
}
capitalizeChoice(playerChoice);

// Check to see if the user entered a valid response
while (correctedChoice != "Rock" && correctedChoice != 'Scissors' && correctedChoice != 'Paper') {
    alert('You must input either Rock, Paper, or Scissors');
    playerChoice = askUser();
    correctedChoice = capitalizeChoice(playerChoice);
}
console.log(`Player choice: ${correctedChoice}`);

// Compare Choices
function compareChoice() {
    if (correctedChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            result = {message:'Tie!', counter: 0};
        } else if (computerChoice === 'Scissors') {
            result = {message:'You win!', counter: 1};
        } else {
            result = {message:'You lose :(', counter: -1};
        }
    }  else if (correctedChoice === 'Paper') {
        if (computerChoice === 'Paper') {
            result = {message:'Tie!', counter: 0};
        } else if (computerChoice === 'Rock') {
            result = {message:'You win!', counter: 1};
        } else {
            result = {message:'You lose :(', counter: -1};
        }
    } else {
        if (computerChoice === 'Scissors') {
            result = {message:'Tie!', counter: 0}; 
        } else if (computerChoice === 'Paper') {
            result = {message:'You win!', counter: 1}
        } else {
            result = {message:'You lose :(', counter: -1}
        }
    }
    return result;
};
compareChoice(correctedChoice, computerChoice);
};
// singleGame();
// console.log(result);

// Play a 5 round game
// Create the game function
// Call the single game function five times
// Tally results
// Output results

function game() {
    let tally = 0;
    for (let i = 0; i < 3; i++) {
        singleGame();
        tally = tally + result.counter;
    }
    total = tally;
    return total
};
game();

if (total > 0) {
    alert('!!! YOU WIN !!!');
} else if (total = 0) {
    alert('You tied with the computer');
} else {
    alert(':( YOU LOST :(');
};
