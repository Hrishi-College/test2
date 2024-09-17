let message = document.querySelector("#msg");
let userBoard = document.querySelector("#user-score");
let compBoard = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock", "paper", "Sissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawGame = (userChoice, compChoice) => {
    console.log("The Game was Draw.")
    message.innerText = `${userChoice} and ${compChoice} is Draw!`;
    message.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("you win");
        message.innerText = `Your ${userChoice} beats ${compChoice} You Win!`;
        message.style.backgroundColor = "green";
        userBoard.innerText = ++userScore;
    } else {
        console.log("comp win");
        message.innerText = `${compChoice} beats Your ${userChoice} Computer Win!`;
        message.style.backgroundColor = "red";
        compBoard.innerText = ++compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    let userWin = true;
    console.log(`user : ${userChoice}`);
    console.log(`comp : ${compChoice}`);
    if(userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    } else {

        if (userChoice === "rock") {
            userWin = (compChoice === "paper") ? false : true;
        } else if (userChoice === "paper") {
            userWin = (compChoice === "scissors") ? false : true;
        } else {
            userWin = (compChoice === "rock") ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

