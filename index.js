
let inputBox = document.getElementById("userInput"); //create a inputBox var to get the input id 
let submitButton = document.getElementById("play"); // create a submitButton va to get the button id
let resulth1 = document.getElementById("result"); // create a scored var to get the h1 id
let score = 0 // create a score var which score is 0
let options = ["rock", "paper", "scissor"]; //options var game element
let userScore = 0 //user score
let computerScore = 0 // computer score
let result = "" //result var


function play() { //create a play function
  let computerChoiceIndex = Math.floor(Math.random() * 3) // computerChoiceIndex var who pick a random index between 1-2
  let computerChoice = options[computerChoiceIndex]; //
  let userInput = inputBox.value;

  if (computerChoice == userInput) { // if computerChoice and userInput are equal the tie the game
    result = "tie" // show the result tie

  }

  if (computerChoice == "rock" && userInput == "paper") { //if computer choice is rock and userInput is paper then show the result user won
    result = "user Won"
    userScore++; //add score in userScore

   }

  if (computerChoice == "paper" && userInput == "rock") { //if computer choice is paper and userInput is rock then show the result computer won
    result = "computer won"
    computerScore++;//add score in userScore
  }

  
  if (computerChoice == "scissor" && userInput == "rock") { //if computer choice is scissor and userInput is rockr then show the result user won
    result = "user won"
    userScore++;//add score in userScore
  }

  if (computerChoice == "rock" && userInput == "scissor") {//if computer choice is rock and userInput is scissor then show the result computer won
    result = "computer won"
    computerScore++;//add score in userScore
  }

  if (computerChoice == "scissor" && userInput == "paper") {//if computer choice is scissor and userInput is paper then show the result computer won
    result = "computer won"
    computerScore++;//add score in userScore
  }

  if (computerChoice == "paper" && userInput == "scissor") {//if computer choice is paper and userInput is scissor then show the result user won
    result = "user won"
    userScore++;//add score in userScore
  }
  resulth1.innerHTML = `Result: ${result} | Score: User - ${userScore} | Computer - ${computerScore}`; // screening the result 


  // resulth1.innerHTML = result + score

  // console.log(result)
  // console.log(computerChoice, userInput)
} // end function


