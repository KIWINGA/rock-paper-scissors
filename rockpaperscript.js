function getComputerChoice(){
    var moves = ['rock', 'paper', 'scissors']
        response = Math.floor(Math.random() * moves.length);
    const computerSelection = moves[response];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'rock':
            if(computerSelection === 'rock') {
                return 'draw';
            } else if(computerSelection === 'paper') {
                return 'You lose :( Paper beats Rock.';
            } else {
                return 'You win :) Rock beats Scissors';
            }
        break;

        case 'paper':
            if(computerSelection === 'paper') {
                return 'Draw';
            } else if(computerSelection === 'scissors') {
                return 'You lose :( Scissors beats Paper.';
            } else {
                return 'Ypu win :) Paper beats Rock.';
            }
        break;

        case 'scissors':
            if(computerSelection === 'scissors') {
                return 'draw';
            } else if(computerSelection === 'rock') {
                return 'You Lose :( Rock beats Scissors.';
            } else {
                return 'You Win :) Scissors beats Paper.'
            }
        break;
    }
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));