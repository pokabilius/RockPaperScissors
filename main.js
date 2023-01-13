function generateComputerGuess (){
    let array = ["rock", "papper", "scissors"];
    randomNumber = Math.floor(Math.random() * 3)
    // console.log(array[randomNumber])
    return (array[randomNumber])
    
    
}

let computerGuess = generateComputerGuess();
console.log(`pc chose ${computerGuess}`)


function playerGuess (){
    let guess = prompt("Choose Rock Paper or Scissors")

    //turn guess in lower
    let finalGuess = guess.toLowerCase();
    // console.log(finalGuess)
    return guess; 
}

let playerChoice = playerGuess();
console.log(`player chose ${playerChoice}`);


function play(pc, player){
    if(pc === player){
        console.log("You have a draw")
    }
    else if(pc === "paper" && player === "scissors"){
        console.log("You won")
    }
    else if(pc === "scissors" && player === "rock"){
        console.log("You won")
    }
    else if(pc === "rock" && player === "paper"){
        console.log("You won")
    }
    else{
        console.log("You lost")
    }
}

play(computerGuess, playerChoice);
