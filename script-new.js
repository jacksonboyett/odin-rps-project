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
    playerOutput = prompt('Please enter your selection')
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
            result = 'Tie!'
        } else if (computerChoice === 'Scissors') {
            result = 'You win!'
        } else {
            result = 'You lose :('
        }
    }  else if (correctedChoice === 'Paper') {
        if (computerChoice === 'Paper') {
            result = 'Tie!'
        } else if (computerChoice === 'Rock') {
            result = 'You win!'
        } else {
            result = 'You lose :('
        }
    } else {
        if (computerChoice === 'Scissors') {
            result = 'Tie!'
        } else if (computerChoice === 'Paper') {
            result = 'You win!'
        } else {
            result = 'You lose :('
        }
    }
    return result;
};
compareChoice(correctedChoice, computerChoice);
};
// console.log(result);

// Play a 5 round game
// Create the game function
// Call the single game function five times
// Tally results
// Output results

function game() {
    for (let i = 0; i < 5; i++) {
        game
    }
}