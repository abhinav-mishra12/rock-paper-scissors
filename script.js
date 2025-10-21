let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const generateComputerChoice = () =>{
    //rock,paper,scissors
    const options = ["rock", "paper", "scissors"];
    

    const randomIndx = Math.floor(Math.random()*3);
    return options[randomIndx];
};

const showWinner = (userWin)=>{
    if(userWin){
        console.log("User Wins");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        
    }
    else{
        console.log("You Lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
}

const drawGame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Game is Draw!";
    msg.style.backgroundColor = "black";
}
const playGame = (userChoice) => {
    console.log("User choice: ", userChoice);
    const computerChoice = generateComputerChoice();
    console.log("Computer choice: ", computerChoice);

    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //Scissors, paper
            userWin = computerChoice==="paper" ? false : true
        }
        else if(userChoice==="scissors"){
            //rock, paper
            userWin = computerChoice==="rock" ? false : true;
        }
        else{
            //rock, scissors
            userWin = computerChoice==="rock" ? true : false;
        }
        showWinner(userWin);
    }


};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

