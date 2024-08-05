const submitbutton = document.getElementById("submitbtn");
const restartbutton = document.getElementById("restartbtn");
const resultStatement = document.getElementById("results");
const userInput = document.getElementById("guess");
let randomNumber = Math.floor(Math.random() * 100 )+1;
let guessCount = 0;



function checkGuess(){
    let userGuess = Number(userInput.value);
    guessCount++;

    

    if(!userGuess||userGuess<1||userGuess>100){
        resultStatement.textContent =`Please Enter a value between 1 and 100.`
    }else if(randomNumber === userGuess){
        resultStatement.textContent = `Congrats! You guessed it correct in ${guessCount} attempt.`;
        resultStatement.style.color = green;
        disableGame();
    }else if(randomNumber > userGuess){
        resultStatement.textContent = `${userGuess} is Too Low!`;
    }else if(randomNumber < userGuess){
        resultStatement.textContent = `${userGuess} is Too High!`;
    }
}
function disableGame(){
    userInput.disabled = true;
    submitbutton.disabled = true;
}
function resetGame(){
    userInput.disabled = false;
    submitbutton.disabled = false;
    userInput.value = "";
    let randomNumber = Math.floor(Math.random()*100)+1;
    resultStatement.textContent = "";
    guessCount = 0;
}



submitbutton.addEventListener("click",checkGuess);
restartbutton.addEventListener("click",resetGame);
