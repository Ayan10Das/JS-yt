let ranNumber=Math.floor(Math.random()*100+1);
// console.log(ranNumber)

let userInput=document.querySelector(".guessField");
let submitBtn=document.querySelector("#subt");
let guesses=document.querySelector(".guesses");
let guessCount=document.querySelector(".remainingGuesses");
let lowOrHigh=document.querySelector(".lowOrHi");

let guessArray=[];
let userEligible=true;
let numGuess=1;

if(userEligible){
    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        let guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
    lowOrHigh.innerHTML=`Please Enter a Number!😑`;
    }else if(guess<1){
    lowOrHigh.innerHTML=`Please Enter a Number Greater than 1 😁`;
    }else if(guess>100){
    lowOrHigh.innerHTML=`Please Enter a Number Less than 100 😁`;
    }else{
        guessArray.push(guess);
        if(numGuess>=10){
            displayGuess(guess);
            guessCount.innerHTML=`0`
            lowOrHigh.innerHTML=`<p>Game Over!😵 <div> Random Number is ${ranNumber} 🫠</div></p>`;
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // console.log(numGuess);
    if(guess===ranNumber){
        lowOrHigh.innerHTML=`<h3>YOOHOOOO!🎉 You guessed it Right!😎</h3>`;
         numGuess++;
        guessCount.innerHTML=`${11-numGuess}`;
        endGame();
    }else if(guess>ranNumber){
        lowOrHigh.innerHTML=`<h3>It's too Big🫡</h3>`;
        numGuess++;
        guessCount.innerHTML=`${11-numGuess}`;
        userInput.value="";
    }
    else{
        lowOrHigh.innerHTML=`<h3>It's too Low🤏</h3>`;
        numGuess++;
        guessCount.innerHTML=`${11-numGuess}`;
        userInput.value="";
    }
}

function displayGuess(guess){
    guesses.innerHTML+=`${guess} `;
}

function endGame(){
    userInput.value="";
    userInput.setAttribute("disabled","");
    let div=document.createElement('button');
    div.classList.add('newGame');
    div.innerHTML=`<p>Start a New Game!</p>`;
    let resultParas=document.querySelector(".resultParas");
    resultParas.appendChild(div);
    userEligible=false;
    // submitBtn.remove();
    newGame();
}
function newGame(){
    let newGameBtn=document.querySelector(".newGame");
    newGameBtn.addEventListener('click',(e)=>{
    userEligible=true;
    userInput.removeAttribute('disabled')
    guesses.innerHTML="";
    lowOrHigh.innerHTML="";
    numGuess=1;
    newGameBtn.remove();
    guessCount.innerHTML=`${11-numGuess}`;
    guessArray=[];        
});
}