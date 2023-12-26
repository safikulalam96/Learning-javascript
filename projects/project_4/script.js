const random_number=parseInt((Math.random())*100+1);

const submit=document.querySelector('#subt')
const startover=document.querySelector('.resultParars')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')

const p= document.createElement('p')
let prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if(guess >100 || guess <1 || isNaN(guess)){
        alert("Enter a valid number")
    }
    else{
        prevGuess.push(guess);
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`game over. Random number was ${random_number}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess){
    if(guess===random_number){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < random_number){
        displayMessage(`Number is tooo low`)
    }
    else if(guess > random_number){
        displayMessage(`Number is tooo High`)
    }
}


function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}, `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(guess){
    lowOrHi.innerHTML=`<h2>${guess}</h2>`;
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">Start new Game<h2>`
    startover.appendChild(p)
    playGame=false;
    newGame();
}
function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        random_number=parseInt(Math.random()*100+1);
        prevGuess=[];
        newGuess=1;
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);

        playGame=true;

    })
}


