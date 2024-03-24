let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText="Game was Draw.Play Again ";
    msg.style.backgroundColor= "rgb(180, 84, 100)";
}

const genCompChoice = () =>{
    const options = ["rock","paper","Scissor"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("Congratualtions! You Win ");
        msg.innerText=`Congratualtions! You Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loss!");
        msg.innerText=`You Loss! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice",compChoice);

    if (userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            //Scissors,paper
            userWin = compChoice ==="paper"? false: true;
        } else if(userChoice==="paper"){
            //Scissors,rock
            userWin = compChoice ==="Scissors"? false: true;
        } else {
            //rock,paper
            userWin = compChoice ==="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})