const result = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computer = document.getElementById("computer");
const reset = document.getElementById("reset");


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {

}

function lose() {

}

function tie() {

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie();
            break;
    }
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