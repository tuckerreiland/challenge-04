//query selectors
var startGameBtn = document.querySelector("#start-game")
var hiscoreDisplayBtn = document.querySelector("#hiscores")
var displayHiScores = document.querySelector("#hiscores-board")
var startDisplay = document.querySelector("#start")
var gameDisplay = document.querySelector("#game")
var answersDisplay = document.querySelector("#answers")
var questionDisplay = document.querySelector("#question")
var userScoreSubmitDisplay = document.querySelector("#user-score-submit")
var answerListItem = document.querySelector(".answer-key")
var initialsInput = document.querySelector("#initials-entry")
var initialsLabel = document.querySelector("#initials-label")
var scoreSubmitBtn = document.querySelector("#submit-btn")
var highScoresList = document.querySelector("#highscores-list")

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
        answers: ["160F","170F","180F","190F"],
        correctAnswer: "180F",
    },
    {
        question: "This lady doesn't eat quadrapeds.  Do you have that out of place?",
        answers: ["Oui Chef!","Oui Chef!","Oui Chef!","Oui Chef!"],
        correctAnswer: "Oui Chef!",
    },
]


var currentQuestion = ""
var currentQuestionId = 0
var timeLeft = 90;
var score = 0;
var userAnswers = [];

startDisplay.style.display = "flex"
gameDisplay.style.display = "none"
displayHiScores.style.display = "none"
userScoreSubmitDisplay.style.display = "none"

startGameBtn.addEventListener("click", loadGameSection);
hiscoreDisplayBtn.addEventListener("click", loadHighScoreSection);

loadQuestion(currentQuestionId);
//start button
   
function loadGameSection(){
    startDisplay.style.display = "none"
    gameDisplay.style.display = "flex"
    displayHiScores.style.display = "none"
    userScoreSubmitDisplay.style.display = "none"
//start&score button disappear  
}

function loadUserScoreInputSection(userAnswers){
    startDisplay.style.display = "none";
    gameDisplay.style.display = "none";
    userScoreSubmitDisplay.style.display = "flex";
    displayHiScores.style.display = "none"

    var userScore = getUserScore(userAnswers);
    initialsLabel.innerText = "Your score was " + userScore + ". Enter your initials for the high score board"

    scoreSubmitBtn.addEventListener("click", function(){
        userScoreSubmitClickHandler(userAnswers);
    })
}

//hi score button
function loadHighScoreSection(){
//display hi scores 
    startDisplay.style.display = "none";
    gameDisplay.style.display = "none";
    userScoreSubmitDisplay.style.display = "none";
    displayHiScores.style.display = "flex"
       
    // clear old high scores if there are any
    highScoresList.innerHTML = '';

    var highScores = JSON.parse(window.localStorage.getItem("highScores"))
    highScores.sort(function (a, b) {
        return b.score - a.score;
    })
    // Iterate and create li's for answers
    highScores.forEach(highScore =>{
        var listItem = document.createElement('li')
        listItem.className = 'high-score'
        listItem.innerText = highScore.initials + ": " + highScore.score;
        highScoresList.appendChild(listItem);
        listItem.addEventListener("click", answerClickHandler);
        
})}

function loadQuestion(questionId){
    // First clear the old stuff
    answersDisplay.innerHTML = '';

    // Set the question
    questionDisplay.textContent = questions[questionId].question

    // Iterate and create li's for answers
    questions[questionId].answers.forEach(answer =>{
        var listItem = document.createElement('li')
        listItem.className = 'answer-key'
        listItem.innerText = answer;
        answersDisplay.appendChild(listItem);
        listItem.addEventListener("click", answerClickHandler);
    })
}

function userScoreSubmitClickHandler(userAnswers){
    var userInitials = initialsInput.value;
    var userScore = getUserScore(userAnswers);
    var userInitials = initialsInput.value;
    initialsLabel.innerText = "Your score was " + userScore + ". Enter your initials for the high score board"
    var highScores = []
    if(window.localStorage.getItem("highScores")){
        var highScores = JSON.parse(window.localStorage.getItem("highScores"))
    }
    highScores.push({initials: userInitials, score: userScore})
    window.localStorage.setItem("highScores", JSON.stringify(highScores))
    loadHighScoreSection();
}

function answerClickHandler(){
    userAnswers[currentQuestionId]=this.innerText;
    console.log(this)
    // increment the question id
    currentQuestionId++;

    // If the there are still questions to go, load the next one.
    // Else if we're done, load the user score submit
    if(currentQuestionId < questions.length){
        loadQuestion(currentQuestionId);
    } else {
        loadUserScoreInputSection(userAnswers);
    } 
}

function getUserScore(userAnswers){
    userScore = 0;
    // Iterates the userScores and checks the corresponding index in the questions array for a match
    // Increments userScore if correct
    userAnswers.forEach(function(answer, index){
        console.log(questions[index].correctAnswer)
        console.log(answer)
        if(answer === questions[index].correctAnswer){
            userScore++;
        }
    });
    return userScore;
}
 //display play game button 
    //displays question
        //creates li.answer-key*4 
        //event listener for .answer
        //append DOM
    //User chooses answer event listener
        //compare to correctAnswer
        //add to score
        //move through array currentQuestion++
    //End of question array
        //enter initials
        //submit button
            //save to local storage
            //disdplay hi score button

