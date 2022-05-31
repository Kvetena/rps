function computerPlay() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice
}
function promptPlayer(){
    let playerChoice = prompt("Rock, Paper or Scissors?").toString().toUpperCase();
    return playerChoice;
}
let plScore = 0;
let cpuScore = 0;

let plText = document.querySelector('.plScore');
let cpuText = document.querySelector('.cpuScore');

function playRound(plChoice){
    const computerSelection = computerPlay();
    const playerSelection = plChoice;
    

    if (computerSelection === "ROCK" & playerSelection === "ROCK") {
        text.textContent = "You both chose Rock! It's a draw!, Play Again."
    } else if (computerSelection === "PAPER" & playerSelection === "PAPER") {
        text.textContent = "You both chose Paper! It's a draw!, Play Again."
    } else if (computerSelection === "SCISSORS" & playerSelection === "SCISSORS") {
        text.textContent = "You both chose Scissors! It's a draw!, Play Again."
    } else if (computerSelection === "ROCK" & playerSelection === "PAPER") {
        text.textContent = "Computer chose Rock, You chose Paper. You Won!, Play Again.";
        ++plScore;
        console.log("PL Score is " + plScore);
    } else if (computerSelection === "ROCK" & playerSelection === "SCISSORS") {
        text.textContent = "Computer chose Rock, You chose Scissors. You Lost :/, Play Again.";
        ++cpuScore;
        console.log("CPU Score is " + cpuScore);
    } else if (computerSelection === "PAPER" & playerSelection === "SCISSORS") {
        text.textContent = "Computer chose Paper, You chose Scissors. You Won!, Play Again."
        ++plScore;
        console.log("PL Score is " + plScore);
    } else if (computerSelection === "PAPER" & playerSelection === "ROCK") {
        text.textContent = "Computer chose Paper, You chose Rock. You Lost :/, Play Again."
        ++cpuScore;
        console.log("CPU Score is " + cpuScore);
    } else if (computerSelection === "SCISSORS" & playerSelection === "ROCK") {
        text.textContent = "Computer chose Scissors, You chose Rock. You Won!, Play Again."
        ++plScore;
        console.log("PL Score is " + plScore);
    } else if (computerSelection === "SCISSORS" & playerSelection === "PAPER") {
        text.textContent = "Computer chose Scissors, You chose Paper. You Lost :/, Play Again."
        ++cpuScore;
        console.log("CPU Score is " + cpuScore);
    } else {
        text.textContent = "You have not chosen, choose to play!"
    }

    if (plScore < 5 & cpuScore < 5){
        plText.textContent = plScore.toString();
        cpuText.textContent = cpuScore.toString();
    }else if (plScore >= 5) {
        plText.textContent = plScore.toString();
        cpuText.textContent = cpuScore.toString();
        plScore = 0;
        cpuScore = 0;
        text.textContent = "You won best in 5! Play Again!"
    }else if (cpuScore >= 5){
        plText.textContent = plScore.toString();
        cpuText.textContent = cpuScore.toString();
        plScore = 0;
        cpuScore = 0;
        text.textContent = "You Lost :/ CPU won best in 5! Play Again!"
    }
    
}

var text = document.querySelector('.resultText');

let buttonChoices = document.querySelectorAll('#btnChoice');

Array.from(buttonChoices).forEach(button => {
    button.addEventListener("click", function() {
      let plChoice = button.className.toString().toUpperCase();
      playRound(plChoice);
    });
  });









