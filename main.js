//play for 5 times and count wins

// Function to generate computer's choice -> returns rock papper or sciscors

let array = ["rock", "papper", "scissors"];
function generateComputerGuess (){
    // console.log(array[randomNumber])
    randomNumber = Math.floor(Math.random() * 3);
    
    return (array[randomNumber]);
    
}

// let computerGuess = generateComputerGuess(array);
// console.log(`pc chose ${computerGuess}`);


//function to prompt user for choice - tolowercase

function playerPrompt (){
    let guess = prompt("Choose Rock Paper or Scissors")
    
    //turn guess in lowerCase
    let finalGuess = guess.toLowerCase();
    return finalGuess;
}

// let playerChoice = playerPrompt();
// console.log(`player chose ${playerChoice}`);

// function to check for legit input

function checkUseriInput(playerChoice){
    let check = false

    while (check === false){
        if (playerChoice === "papper" || playerChoice === "rock" || playerChoice === "scissors"){
            check = true;
            return playerChoice
        }
        else {
            playerChoice = prompt("Please enter a correct answer");
            playerChoice = playerChoice.toLowerCase();
            
        }
        
    }
}

// let finalAnswer = checkUseriInput(playerChoice);
// console.log(finalAnswer);



//function to compare user input with pc choice and return winner

function play(pc, player){
        
        let winner;
        let pcWIns = 0
        let playerWins = 0
        if(pc === player){
            console.log("You have a draw")
            winner = "draw"
        }
        else if(pc === "paper" && player === "scissors"){
            console.log("You won")
            winner = "player"
            playerWins++
        }
        else if(pc === "scissors" && player === "rock"){
            console.log("You won")
            winner = "player"
            playerWins++
        }
        else if(pc === "rock" && player === "paper"){
            console.log("You won")
            winner = "player"
            playerWins++
        }
        else{
            console.log("You lost")
            winner = "pc"
            pcWIns++
        }
    console.log(`winner is ${winner}`)
    return pcWIns;
}

let i = 0 

let wins;
while(i<2){
    let computerGuess = generateComputerGuess(array);
    console.log(`computer is ${computerGuess}`)
    let playerChoice = playerPrompt();
    let finalAnswer = checkUseriInput(playerChoice);
    let wins = play(computerGuess, finalAnswer)
    i++
}

console.log(`Pc won ${wins}`)
//-------------------working above------------------------------------------------

