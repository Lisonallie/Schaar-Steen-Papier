const result = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computer = document.getElementById("computer");
const reset = document.getElementById("reset");


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
}

function game(userChoice) {
    
}

function main() {
    rock.addEventListener("click", function () {
        game("rock");
    })

    paper.addEventListener("click", function () {
        game("paper");
    })

    scissors.addEventListener("click", function () {
        game("scissors");
    })
}

main();