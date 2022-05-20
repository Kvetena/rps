function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice
}

const computerSelection = computerPlay();



function promptPlayer(){
    let playerSelection = prompt("Rock, Paper or Scissors?").toString().toUpperCase();
    return playerSelection;
}


