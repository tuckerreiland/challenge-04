//query selectors
var startGameBtn = document.querySelector("#start-game")
var hiscoreDisplayBtn = document.querySelector("#hiscores")
var displayHiScores = document.querySelector("#hiscores-board")
var startDisplay = document.querySelector("#start")
var gameDisplay = document.querySelector("#game")
var answersDisplay = document.querySelector("#answers")
var questionDisplay = document.querySelector("#question")

//arrays
var questions = [
    {
        question: "2+2?",
        answers: [3,4,5,6],
        correctAnswer: "4",
    },
    {
        question: "2+3?",
        answers: [3,4,5,6],
        correctAnswer: "5",
    },
    {
        question: "2+1?",
        answers: [3,4,5,6],
        correctAnswer: "3",
    },
    {
        question: "4-1?",
        answers: [3,4,5,6],
        correctAnswer: "3",
    },
    {
        question: "(4*2)-2?",
        answers: [3,4,5,6],
        correctAnswer: "6",
    },
]
var highScores = [
    {
        initials:"",
        score:0,
    }
]

var currentQuestion = "";
var timeLeft = 90;
var score = 0;

//start game
    //triggered event listenere on start game button
    //start timer
    //setup 1st question
startGameBtn.addEventListener("click", function(){
    startDisplay.style.display = "none"
    gameDisplay.style.display = "flex"
    if (displayHiScores.style.display = "flex"){
        displayHiScores.style.display = "none"
    }

    
})

hiscoreDisplayBtn.addEventListener("click", function(){
    displayHiScores.style.display = "flex"

})

//question carousel

//make button variables so that we can update text rather than add/delete buttons

//timer
    //setInterval()
    //render to page

//loadQuestion
    //render question and multiple choices to page

//checkAnswer
    //check user input
    //compare choice with correect answer
    //act on right/wrong 
        //add to score or deduct time
    //loadQuestion()


//endGame
    //called at end of timer or last question done
    //cancels timer
    //user enters initials
    //local storage
        //read ls and store in js variable
        //check if null
        //update js variable with our new score
        //render to page
        //save updated js variable to ls
    //make highscores visible
    //prompt to play again

//highscores (reference todo webAPI thing)
    //create list itmes
    //sort the highScores display by score property
    //clear hiscores
