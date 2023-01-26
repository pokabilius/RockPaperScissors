
const imagePaper = document.querySelector(".paper");
const imageRock = document.querySelector(".rock");
const imageScissors = document.querySelector(".scissors");


// Function to generate computer's choice -> returns rock papper or sciscors

let array = ["rock", "papper", "scissors"];
function generateComputerGuess (){

    randomNumber = Math.floor(Math.random() * 3);
    
    return (array[randomNumber]);
    
}


//function to prompt user for choice - tolowercase

function playerPrompt (){
    let guess = prompt("Choose Rock Paper or Scissors")
    
    //turn player choise in lowerCase
    let finalGuess = guess.toLowerCase();
    return finalGuess;
}


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


//function to compare user input with pc choice and return winner

function play(pc, player){
        
        let winner;
        
        if(pc === player){
            console.log("You have a draw")
            winner = "draw"
        }
        else if(pc === "paper" && player === "scissors"){
            console.log("You won")
            winner = "player"
            
        }
        else if(pc === "scissors" && player === "rock"){
            console.log("You won")
            winner = "player"
            
        }
        else if(pc === "rock" && player === "paper"){
            console.log("You won")
            winner = "player"
            
        }
        else{
            console.log("You lost")
            winner = "pc"
            
        }
    
    
    return winner;
}

//play for 5 times and count wins
function main (){
    playerWins = 0 
    pcWins = 0
    let i = 0 
    while(i<5){
        let computerGuess = generateComputerGuess(array);
        console.log(`computer is ${computerGuess}`)
        let playerChoice = playerPrompt();
        let finalAnswer = checkUseriInput(playerChoice);
        let winner = play(computerGuess, finalAnswer)
        console.log(`winner is ${winner}`)
        if (winner === "player"){
            
            playerWins++
            
        }
        else if(winner === "pc"){
            
            pcWins++
            
        }
        i++
    }
}

main();
console.log(`Pc won ${pcWins} times`)
console.log(`Player won ${playerWins} times`)


