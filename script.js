let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)]; // random index is returning from here
};

const drawGame = () => {
//   console.log("Game Draw");
  msg.innerText = "Game Draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    // console.log("You Win!");
    msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "blueviolet";
    userScorePara.innerText = userScore;
  } else {
    compScore++;
    // console.log("You lose. Computer Wins!");
    msg.innerText = `You lose. Computer Wins! ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScorePara.innerText = compScore; 
  }
};

const playGame = (userChoice) => {
//   console.log("User Choice is :", userChoice);

  //Generate computer choice
  const computerChoice = genComputerChoice();
//   console.log("Computer Choice is :", computerChoice);

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = computerChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = computerChoice === "Scissors" ? false : true;
    } else {
      userWin = computerChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});
