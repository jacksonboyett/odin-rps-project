// Generate a computer choice for Rock, Paper, or Scissors
// function singleGame() {
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

// };
let tally = 0;

const container = document.querySelector('.container');
const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', function (e) {
    correctedChoice = 'Rock';
    compareChoice(correctedChoice, computerChoice);
    tally = tally + result.counter;
    const resultDiv = document.createElement('div')
    resultDiv.textContent = result.message;
    container.appendChild(resultDiv)
})
const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', function (e) {
    correctedChoice = 'Paper';
    compareChoice(correctedChoice, computerChoice);
    tally = tally + result.counter;
    const resultDiv = document.createElement('div')
    resultDiv.textContent = result.message
    container.appendChild(resultDiv)
})
const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', function (e) {
    correctedChoice = 'Scissors';
    compareChoice(correctedChoice, computerChoice);
    tally = tally + result.counter;
    const resultDiv = document.createElement('div')
    resultDiv.textContent = result.message;
    container.appendChild(resultDiv)
})
return tally
};


function game() {
    let tally = 0;
    for (let i = 0; i < 3; i++) {
        singleGame();
    }
    total = tally;
    return total
};
game();