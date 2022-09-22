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
let tally = 0; 
let compTally = 0;
let gameNum = 0;
function singleGame() {
    console.log('*** NEW GAME ***')
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

// Compare choices, select winner, update tally
    if (userChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            comparison = {message:'Tie!', counter: 0, compCounter: 0};
        } else if (computerChoice === 'Scissors') {
            comparison = {message:'You win!', counter: 1, compCounter: 0};
        } else {
            comparison = {message:'You lose :(', counter: 0, compCounter: 1};
        }
    }  else if (userChoice === 'Paper') {
        if (computerChoice === 'Paper') {
            comparison = {message:'Tie!', counter: 0, compCounter: 0};
        } else if (computerChoice === 'Rock') {
            comparison = {message:'You win!', counter: 1, compCounter: 0};
        } else {
            comparison = {message:'You lose :(', counter: 0, compCounter: 1};
        }
     } else {
        if (computerChoice === 'Scissors') {
            comparison = {message:'Tie!', counter: 0, compCounter: 0}; 
        } else if (computerChoice === 'Paper') {
            comparison = {message:'You win!', counter: 1, compCounter: 0}
        } else {
            comparison = {message:'You lose :(', counter: 0, compCounter: 1}
        }
    };
    return comparison;
};

// Game function
    const container = document.querySelector('.container') // allows us to append results
// ROCK button choice    
    const rockBtn = document.querySelector('.rock');
        rockBtn.addEventListener('click', function (e) {
            userChoice = 'Rock';
            comparison = singleGame(userChoice);
            console.log(`User Choice: ${userChoice}`);
            tally += comparison.counter; 
            compTally += comparison.compCounter;
            const div = document.createElement('div');
            gameNum += 1;
            div.textContent = `Game ${gameNum}: Your Score: ${tally} vs. Computer Score: ${compTally}`;
            container.appendChild(div);
            if (tally === 5) {
                const announceWin = document.createElement('div');
                announceWin.textContent = 'You are a WIENER!!!!'
                container.appendChild(announceWin)
            } else if (compTally === 5) {
                const announceLose = document.createElement('div');
                announceLose.textContent = 'You are a LUKESER!!!!'
                container.appendChild(announceLose)
            } else {
            };
            return tally
        });
// PAPER button choice
    const paperBtn = document.querySelector('.paper');
        paperBtn.addEventListener('click', function (e) {
            userChoice = 'Paper';
            comparison = singleGame(userChoice);
            console.log(`User Choice: ${userChoice}`);
            tally += comparison.counter;
            compTally += comparison.compCounter;
            const div = document.createElement('div');
            gameNum += 1;
            div.textContent = `Game ${gameNum}: Your Score: ${tally} vs. Computer Score: ${compTally}`;
            container.appendChild(div);
            if (tally === 5) {
                const announceWin = document.createElement('div');
                announceWin.textContent = 'You are a WIENER!!!!'
                container.appendChild(announceWin)
            } else if (compTally === 5) {
                const announceLose = document.createElement('div');
                announceLose.textContent = 'You are a LUKESER!!!!'
                container.appendChild(announceLose)
            } else {
            };
            return tally
        });
// Scissors button choice
    const scissorsBtn = document.querySelector('.scissors');
        scissorsBtn.addEventListener('click', function (e) {
            userChoice = 'Scissors';
            comparison = singleGame(userChoice);
            console.log(`User Choice: ${userChoice}`);
            tally += comparison.counter;
            compTally += comparison.compCounter;
            const div = document.createElement('div');
            gameNum += 1;
            div.textContent = `Game ${gameNum}: Your Score: ${tally} vs. Computer Score: ${compTally}`;
            container.appendChild(div);
            if (tally === 5) {
                const announceWin = document.createElement('div');
                announceWin.textContent = 'You are a WIENER!!!!'
                container.appendChild(announceWin)
            } else if (compTally === 5) {
                const announceLose = document.createElement('div');
                announceLose.textContent = 'You are a LUKESER!!!!'
                container.appendChild(announceLose)
            } else {
            };
            return tally
        });

