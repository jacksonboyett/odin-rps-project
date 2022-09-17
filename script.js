// Generate a computer choice for Rock, Paper, or Scissors
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
/////////////////////////////////////
// Ask user to input their choice
// Standardize answers to filter capitalization errors
// Check to see if one of the inputs is rock, paper, or scissors
// If not one, alert the user that they chose an invalid choice
// Return the user's choice

// Ask user to input their choice //
function askUser(playerSelction) {


// Standardizes the inputs to have an inital capital letter
    function capitalizeSelection(playerSelection) {
        playerSelection = prompt('Please enter your selection');
        let firstLetter = playerSelection.slice(0,1);
        firstLetter = firstLetter.toUpperCase();
        let restString = playerSelection.slice(1);
        restString = restString.toLowerCase();
        let capitalSelection = firstLetter + restString;
        return capitalSelection;
}
capitalizeSelection(playerSelection);
 let capitalSelection = capitalizeSelection(playerSelection);
 console.log(`After capitalization function: ${capitalSelection}`);

// Asks the user for a different input if they did not enter Rock, Paper, or Scissors
if (capitalSelection != "Rock" && capitalSelection != "Scissors" && capitalSelection != "Paper") {
    alert('You need to input on of the following: Rock, Paper, or Scissors');
    return 0;
} else {
    return capitalSelection;
}
}
askUser();

///////////////////////////////////////////

// Display choices

console.log(`Player choice: ${capitalSelection}`);
console.log(`Computer choice: ${computerChoice}`);

// Compare choices and show results of the game
function compareChoice(capitalSelection, computerChoice) {
    if (capitalSelection === 'Rock') {
        if (computerChoice === 'Rock') {
            result = 'Tie!'
        } else if (computerChoice === 'Scissors') {
            result = 'You win!'
        } else {
            result = 'You lose :('
        }
    }  else if (capitalSelection === 'Paper') {
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
compareChoice(capitalSelection, computerChoice);
console.log(result)

// function double(input) {
//     output = input * 2;
//     return output;
// }

// double(2)
// console.log(output)