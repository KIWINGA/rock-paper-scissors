function getComputerChoice(){
    var moves = ['rock', 'paper', 'scissors']
        response = Math.floor(Math.random() * moves.length);
    const computerSelection = moves[response];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'rock':
            if(computerSelection.toLowerCase === 'rock') {
                return 'draw';
            } else if(computerSelection === 'paper') {
                computerScore++;
                return 'You lose :( Paper beats Rock.';
            } else {
                userScore++;
                return 'You win :) Rock beats Scissors';
            }
        break;

        case 'paper':
            if(computerSelection === 'paper') {
                return 'Draw';
            } else if(computerSelection === 'scissors') {
                computerScore++;
                return 'You lose :( Scissors beats Paper.';
            } else {
                userScore++;
                return 'You win :) Paper beats Rock.';
            }
        break;

        case 'scissors':
            if(computerSelection === 'scissors') {
                return 'draw';
            } else if(computerSelection === 'rock') {
                computerScore++;
                return 'You Lose :( Rock beats Scissors.';
            } else {
                userScore++;
                return 'You Win :) Scissors beats Paper.'
            }
        break;
    }
}
const playerSelection = prompt('Enter rock, paper or scissors.').toLowerCase();
const computerSelection = getComputerChoice();
var userScore = 0;
var computerScore = 0;

function game() {
    for(i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);

        if(userScore > computerScore) {
            return 'You win!';
        } else if(userScore === computerScore) {
            return 'You tied.';
        } else {
            return 'You lost.';
        }
    }
    }

console.log(game());
