//query selectors
var startGameBtn = document.querySelector("#start-game")
var hiscoreDisplayBtn = document.querySelector("#hiscores")
var displayHiScores = document.querySelector("#hiscores-board")
var startDisplay = document.querySelector("#start")
var gameDisplay = document.querySelector("#game")
var answersDisplay = document.querySelector("#answers")
var questionDisplay = document.querySelector("#question")
var answerListItem = document.querySelector(".answer-key")

//arrays
var questions = [
    {
        question: "How many eggs go into your hollandaise?  Answer: it doesn't matter.  Why?",
        answers: ["Lecithin","Mucilage","Sodium Caseinate","Diglycerides"],
        correctAnswer: "Lecithin",
    },
    {
        question: "Speaking of hollandaise, what is it?",
        answers: ["Mother Sauce","Delicious","Daughter Sauce","A rap lyric about long distance trucking."],
        correctAnswer: "Mother Sauce",
    },
    {
        question: "This questions a freebie chef.",
        answers: ["Butter","Butter","Olive Oil","Butter"],
        correctAnswer: "Butter",
    },
    {
        question: "Break a sauce in a French kitchen and verbal abuse will be the least of your concerns.  What's the scary temperature for butter mounted emulsions?",
        answers: ["160F","170F","180","190"],
        correctAnswer: "180",
    },
    {
        question: "This lady doesn't eat quadrapeds.  Do you have that out of place?",
        answers: ["Oui Chef!","Oui Chef!","Oui Chef!","Oui Chef!"],
        correctAnswer: "Oui Chef!",
    },
]
var highScores = [
    {
        initials:"",
        score:0,
    }
]

var currentQuestion = ""
var currentQuestionId = 0
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

questionDisplay.textContent = questions[currentQuestionId].question
questions[currentQuestionId].answers.forEach(answer =>{
    var listItem = document.createElement('li')
    listItem.className = 'answer-key'
    console.log(listItem)
    listItem.innerText = answer
    answersDisplay.appendChild(listItem);
})

answerListItem.addEventListener("click", function(){

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
