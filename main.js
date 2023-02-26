//----------------- Variables-----------------------------------------

const buttons = document.querySelectorAll('.image');
let finalguess = "";
let pcChoice = ""
let string = ""
// let counter = 0
let pcWins = 0
let playerWins = 0
let winner = ""
let para = document.querySelector(".playerchoice")
let pcpara = document.querySelector(".pcchoice")
let resultPara = document.querySelector(".result")
const pcButtons = document.querySelectorAll('button');
const playerLives = document.querySelector('.playerwins');
const pcLives = document.querySelector('.pcrwins');



buttons.forEach((button) => button.addEventListener('click', () => button.classList.add('effect')));
buttons.forEach((button) => button.addEventListener('click', turnChoiceToText))

function turnChoiceToText (e) {
    string = e.target.getAttribute('data-key')   
    para.textContent = `You chose ${string}`
}

function removeTransition (e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('effect');
    console.log("enter remove transiotion");
}

buttons.forEach((button) => button.addEventListener('transitionend',removeTransition));

// Function to generate computer's choice -> returns rock papper or sciscors

console.log(pcButtons);

let array = ["rock", "paper", "scissors"];
function generateComputerGuess (){
    randomNumber = Math.floor(Math.random() * 3);
    console.log(array[randomNumber])
    pcButtons.forEach((button) => {
        console.log(button)
        if( button.getAttribute('id') !== array[randomNumber]) return;
        if (button.getAttribute('id') === array[randomNumber] ){
            button.classList.add('effect')
            pcpara.textContent = `Pc chose ${button.getAttribute('id')}`
            pcChoice = button.getAttribute('id')
            console.log(button.getAttribute('id'))
        }
       
    })

    return (array[randomNumber]);
}

// generateComputerGuess()
//function to prompt user for choice - tolowercase


    

//function to compare user input with pc choice and return winner

function play(pc, player){
        if(pc === player){
            console.log("You have a draw")
            resultPara.textContent = "We have draw"
            winner = "draw"
        }
        else if(pc === "paper" && player === "scissors"){
            console.log("You won")
            resultPara.textContent = "You won"
            winner = "player"
            
        }
        else if(pc === "scissors" && player === "rock"){
            console.log("You won")
            winner = "player"
            resultPara.textContent = "You won"
            
        }
        else if(pc === "rock" && player === "paper"){
            console.log("You won")
            resultPara.textContent = "You won"
            winner = "player"
            
        }
        else{
            console.log("You lost")
            winner = "pc"
            resultPara.textContent = "Pc won"
            
        }
    
    
    return winner;
}


function runGame(){
    play(pcChoice,finalguess)
    console.log(`player choice is ${finalguess} and pc choice is ${pcChoice}, ${resultPara}`)
}

function countWins (){
    if (winner === "pc"){
        pcWins++
        pcLives.textContent = ""
        pcLives.textContent = pcLives.textContent + pcWins
    }else if (winner === "player"){
        playerWins++
        playerLives.textContent = ""
        playerLives.textContent = playerLives.textContent + playerWins
    }
}



    buttons.forEach((button) => button.addEventListener('click', (e) => {
        finalguess = e.target.getAttribute('data-key')
        console.log(finalguess)
            countWins()
            generateComputerGuess()
        
            runGame()
        }))


f


// //play for 5 times and count wins
// function main (){
//     playerWins = 0 
//     pcWins = 0
//     let i = 0 
//     // while(i<5){
//         let computerGuess = generateComputerGuess(array);
//         console.log(`computer is ${computerGuess}`)
//         playerPrompt();
        
//         console.log(finalguess);
//         // let finalAnswer = checkUseriInput(playerChoice);
//         let winner = play(computerGuess, finalguess)
//         console.log(`winner is ${winner}`)
//         if (winner === "player"){
            
//             playerWins++
            
//         }
//         else if(winner === "pc"){    
            
//             pcWins++
            
//         }
//         i++
//     // }
// }

// main();
// console.log(`Pc won ${pcWins} times`)
// console.log(`Player won ${playerWins} times`)


