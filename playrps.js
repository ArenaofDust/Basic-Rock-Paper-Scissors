function getComputerChoice() {
    const weapons = ["rock", "paper", "scissor"];
    let weaponChoice = Math.floor(Math.random() * weapons.length);

    return weapons[weaponChoice];

}

function getHumanChoice() {
    let humanChoice = prompt("Enter your weapon (Rock, Paper, Scissors): ").toLowerCase();
    if(!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Please enter a valid weapon!");
    }
    return humanChoice;
}

const gameRuleMap = {
    "rock" : "paper",
    "paper" : "scissors",
    "scissors" : "rock",
}
function playGame() {
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(gameRuleMap[humanChoice] === computerChoice) {
            computerScore++;
            console.log(`Computer Wins! You chose ${humanChoice} and the computer chose ${computerChoice}`);
        }
        else if(gameRuleMap[computerChoice] === humanChoice) {
            humanScore++;
            console.log(`Human Wins! You chose ${humanChoice} and the computer chose ${computerChoice}`);
        }
        else {
            console.log(`TIE! You chose ${humanChoice} and the computer chose ${computerChoice}`);
        }
    }
    
    let i = 0;
    while(i < 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore === 3) {
        console.log("Human wins the game!");
    }
    else if (computerScore === 3){
        console.log("Computer wins the game!");
    }
    else {
        console.log("It was a tie!");
    }

}
playGame();