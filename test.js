const buttons = document.querySelectorAll('.image');
const btn = Array.from(buttons);

buttons.forEach((button) => button.addEventListener('click', () => button.classList.add('effect')));

function removeTransition (e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('effect');
    console.log("enter remove transiotion");
}

buttons.forEach((button) => button.addEventListener('transitionend',removeTransition));


// Function to generate computer's choice -> returns rock papper or sciscors
const pcButtons = document.querySelectorAll('button');
// let pcBtn = Array.from(pcButtons)
console.log(pcButtons);

let array = ["rock", "paper", "scissors"];
function generateComputerGuess (){
    randomNumber = Math.floor(Math.random() * 3);
    console.log(array[randomNumber])
    pcButtons.forEach((button) => {
        console.log(button)
        if( button.className != array[randomNumber]) return;
        if (button.className === array[randomNumber] ){
            button.classList.add('effect')
        }
    })
    pcButtons.forEach((button) => button.addEventListener('transitionend', removeTransition));

    return (array[randomNumber]);
    
}

generateComputerGuess();
