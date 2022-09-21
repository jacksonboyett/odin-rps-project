// With three buttons (rock, paper, and scissors), have a user click on a button
// to choose a selection for the game. The result of the game must be displayed 
// using a new div, and the running score must also be displayed. At the end of 
// five games, the winner must be displayed. 

/// --Beginning of game function--
// 1. Get computer choice
// 2. Get user choice
// 3. Compare results <--- callback function?, return as object
// 4. Determine winner of game
// 5. Display results
/// --End of game function--
// 6. Repeat five times
// 7. Determine and display winner of match
/// Return object for single game return to reference for match
/// Object should have: winner of that game current tally

// Single game function 
function singleGame() {
    let tally = 0;
// Generate a computer choice
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

// Game function
    const container = document.querySelector('.container') // allows us to append results
// ROCK button choice    
    const rockBtn = document.querySelector('.rock');
        rockBtn.addEventListener('click', function (e) {
            userChoice = 'Rock';
            result = compareChoices(userChoice, computerChoice);
            tally += comparison.counter; console.log(tally);
            return tally
        });
// PAPER button choice
    const paperBtn = document.querySelector('.paper');
        paperBtn.addEventListener('click', function (e) {
            userChoice = 'Paper';
            result = compareChoices(userChoice, computerChoice);
            tally += comparison.counter; console.log(tally);
            return tally
        });
// Scissors button choice
    const scissorsBtn = document.querySelector('.scissors');
        scissorsBtn.addEventListener('click', function (e) {
            userChoice = 'Paper';
            result = compareChoices(userChoice, computerChoice);
            tally += comparison.counter; console.log(tally);
            return tally
        });
}

singleGame();

// Comparison function
function compareChoices() {
    if (userChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            comparison = {message:'Tie!', counter: 0};
        } else if (computerChoice === 'Scissors') {
            comparison = {message:'You win!', counter: 1};
        } else {
            comparison = {message:'You lose :(', counter: -1};
        }
    }  else if (userChoice === 'Paper') {
        if (computerChoice === 'Paper') {
            comparison = {message:'Tie!', counter: 0};
        } else if (computerChoice === 'Rock') {
            comparison = {message:'You win!', counter: 1};
        } else {
            comparison = {message:'You lose :(', counter: -1};
        }
    } else {
        if (userChoice === 'Scissors') {
            comparison = {message:'Tie!', counter: 0}; 
        } else if (computerChoice === 'Paper') {
            comparison = {message:'You win!', counter: 1}
        } else {
            comparison = {message:'You lose :(', counter: -1}
        }
    }
    return comparison;
};