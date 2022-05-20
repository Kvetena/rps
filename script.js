function computerPlay() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice
}
function promptPlayer(){
    let playerChoice = prompt("Rock, Paper or Scissors?").toString().toUpperCase();
    return playerChoice;
}

function playRound(){
    const computerSelection = computerPlay();
    const playerSelection = promptPlayer();

    if (computerSelection === "ROCK" & playerSelection === "ROCK") {
        text.innerHTML = "You both chose Rock! It's a draw!, Play Again."
    } else if (computerSelection === "PAPER" & playerSelection === "PAPER") {
        text.innerHTML = "You both chose Paper! It's a draw!, Play Again."
    } else if (computerSelection === "SCISSORS" & playerSelection === "SCISSORS") {
        text.innerHTML = "You both chose Scissors! It's a draw!, Play Again."
    } else if (computerSelection === "ROCK" & playerSelection === "PAPER") {
        text.innerHTML = "Computer chose Rock, You chose Paper. You Won!, Play Again."
    } else if (computerSelection === "ROCK" & playerSelection === "SCISSORS") {
        text.innerHTML = "Computer chose Rock, You chose Scissors. You Lost :/, Play Again."
    } else if (computerSelection === "PAPER" & playerSelection === "SCISSORS") {
        text.innerHTML = "Computer chose Paper, You chose Scissors. You Won!, Play Again."
    } else if (computerSelection === "PAPER" & playerSelection === "ROCK") {
        text.innerHTML = "Computer chose Paper, You chose Rock. You Lost :/, Play Again."
    } else if (computerSelection === "SCISSORS" & playerSelection === "ROCK") {
        text.innerHTML = "Computer chose Scissors, You chose Rock. You Won!, Play Again."
    } else if (computerSelection === "SCISSORS" & playerSelection === "PAPER") {
        text.innerHTML = "Computer chose Scissors, You chose Paper. You Lost :/, Play Again."
    } else {
        text.innerHTML = "You have not chosen, choose to play!"
    }
    
}

var text = document.querySelector('.resultText');

var button = document.querySelector('.wanna');
button.addEventListener('click', playRound);












