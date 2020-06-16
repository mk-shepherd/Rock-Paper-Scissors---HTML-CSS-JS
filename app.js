let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const status_div = document.querySelector(".status p");

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML=userScore;
    status_div.innerHTML= `${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}. You win !`;
    document.getElementById(userChoice).classList.add('green-glow');
    document.querySelector(".badge1").classList.add('g-b');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow');}, 500);
    setTimeout(function() {document.querySelector(".badge1").classList.remove('g-b');}, 500);
}
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    status_div.innerHTML= `${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}. You lose !`;
    document.getElementById(userChoice).classList.add('red-glow');
    document.querySelector(".badge2").classList.add('r-b');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow');}, 500);
    setTimeout(function() {document.querySelector(".badge2").classList.remove('r-b');}, 500);
}
function draw(userChoice, computerChoice) {
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    status_div.innerHTML= `${userChoice.toUpperCase()} equals ${computerChoice.toUpperCase()}. Its a Draw!`;
    document.getElementById(userChoice).classList.add('blue-glow');
    document.querySelector(".badge1").classList.add('b-b');
    document.querySelector(".badge2").classList.add('b-b');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('blue-glow');}, 500);
    setTimeout(function() {document.querySelector(".badge1").classList.remove('b-b');}, 500);
    setTimeout(function() {document.querySelector(".badge2").classList.remove('b-b');}, 500);
}

function getComputerChoice() {
  const userSelection = ["rock", "paper", "scissors"];
    const randomr = Math.floor(Math.random() * 3);
   return userSelection[randomr];
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
       case "rockscissors":
       case "paperrock":
       case "scissorspaper": 
       win(userChoice, computerChoice);   
       break;
       case "rockpaper":
       case "paperscissors":
       case "scissorsrock":
        lose(userChoice, computerChoice);  
       break;
       case "rockrock":
       case "paperpaper":
       case "scissorsscissors":
        draw(userChoice, computerChoice);    
       break;                
        }
    }
    
    

function main() {
rock_div.addEventListener("click", () => game("rock"));

paper_div.addEventListener("click", ()=> game("paper"));

scissors_div.addEventListener("click", ()=> game("scissors"));
}
main()

