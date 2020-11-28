let userScore = 0; 
let computerScore = 0; 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "rock";
    if (letter == "p") return "paper";
    if (letter == "s") return "scissors";
}

function win(userChoice, computerChoice) {
    userScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "user".fontsize(3).sub(); 
    const smallComputerWord = "computer".fontsize(3).sub(); 
    const userChoice_div = document.getElementById(userChoice).classList;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. you win!`;
    userChoice_div.add('green-glow');
    setTimeout(() => userChoice_div.remove('green-glow'), 300)
}


function lose(userChoice, computerChoice) {
    computerScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "user".fontsize(3).sub(); 
    const smallComputerWord = "computer".fontsize(3).sub(); 
    const userChoice_div = document.getElementById(userChoice).classList;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. you lost!`;
    userChoice_div.add('red-glow');
    setTimeout(() => userChoice_div.remove('red-glow'), 300)
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub(); 
    const smallComputerWord = "computer".fontsize(3).sub(); 
    const userChoice_div = document.getElementById(userChoice).classList;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. it's a draw!`;
    userChoice_div.add('gray-glow');
    setTimeout(() => userChoice_div.remove('gray-glow'), 300)
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); 
    switch(userChoice + computerChoice) {
        case "rs": 
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        break; 

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        break;
    }
}

function main() {
    rock_div.addEventListener('click', () =>  game("r"));
    paper_div.addEventListener('click', () =>  game("p"));
    scissors_div.addEventListener('click', () =>  game("s"));
}

main(); 