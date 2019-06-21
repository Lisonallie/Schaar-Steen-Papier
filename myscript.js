const result = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");

function convertToWord(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    result.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
// THE ES6 WAY
//result.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
    result.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + "... You lose.";
}

function tie(userChoice, computerChoice) {
    result.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". It's a draw.";
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
            tie(userChoice, computerChoice);
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

    reset.addEventListener("click", function () {
        window.location.reload();
    })
}

main();