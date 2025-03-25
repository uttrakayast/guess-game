
let inputBox = document.getElementById("userInput"); //create a inputBox var to get the input id 
let submitButton = document.getElementById("play"); // create a submitButton va to get the button id
let scored = document.getElementById("score"); // create a scored var to get the h1 id
let score = 0 // create a score var which score is 0

function play(){ //create a play function
  let computerChoice = Math.floor(Math.random()*10) // computerChoice var who pick a random index between 1-10
  let userChoice = parseInt(inputBox.value) // user choice who convert string to int

  if(computerChoice==userChoice){ // if comouterChoice nad userChoice is same 
    score = score+1 // the increase the score
  }
  else{ //else
    score = score //not increase the score
  }
  scored.innerHTML="score: " + score+" computer chose: " + computerChoice //screening the both score
} // end function


