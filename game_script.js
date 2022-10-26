const choiceArray = ['rock','paper','scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomIndex];
}

function playRound(computerChoice, playerChoice) {
    
    playerChoice = playerChoice.toLowerCase();

    if (!playerChoice) { 
        return console.log("No choices were entered");
    }

    if (!choiceArray.includes(playerChoice)){
        return console.log("Enter correct choices")
    }

    if (playerChoice === computerChoice) {
        return console.log("Game tie !!!!");
    }

    return computerResult(computerChoice, playerChoice);
}


function computerResult(computer, player) {

    if (player === "rock"){
        if (computer === "scissors") { return "wins" }
        else if (computer === "paper") { return "lose" };
    } else if (player === "paper") {
        if (computer == "rock") { return "wins" }
        else if (computer == "scissors") { return "lose" };
    } else if (player == "scissors") {
        if (computer == "paper") { return "wins" }
        else if(computer == "rock") { return "lose" };
    }
}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function game(computerSelected) {

    let computers_score = 0
    let player_score = 0

    for(i=0; i < 5; i++) {
        
        const playerSelected = prompt("Enter your Choice below");
        result = playRound(computerSelected, playerSelected);
        
        if(result == "wins"){
            console.log(`You Win! ${capitalize(playerSelected)} beats ${capitalize(computerSelected)} `);
            player_score++;
        } else if (result == "lose") {
            console.log(`You Lose! ${capitalize(computerSelected)} beats ${capitalize(playerSelected)}`);
            computers_score++;
        }
    }

    return console.log(`Score: Player-${player_score} | Computer-${computers_score}`);
}


const computerSelection = getComputerChoice();
game(computerSelection);
