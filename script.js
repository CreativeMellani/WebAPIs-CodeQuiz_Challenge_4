

// GIVEN I am taking a code quiz
//WHEN I click the start button
const startButton= document.getElementById("start-btn")
const questionElement = document.getElementById("questions")
const currentQuestionIndex = 

startButton.addEventListener("click", startGame)

function startGame(){
    console.log("Started")
    startButton.classList.add("hide") //hide button once the start button is clicked
    questionElement.classList.remove("hide")
    currentQuestionIndex = 0
    setNextQuestion()
}


//THEN a timer starts and I am presented with a question
//WHEN I answer a question
function setNextQuestion() {

}

// declaring the Q&As and setting up the functions
const questions=[   
{ 
    // 
    question:"Commonly used data types Do Not include:",
    answers:{
        a:"strings",
        b:"booleans",
        c:"alerts",
        d:"number",
        },
    correct: "b"
},
{
    question:"The condition in an if/ else statement is enclosed with_____.",
    answers:{
        a:"quotes",
        b:"curly brackets",
        c:"parenthesis",
        d:"square brackets",
        },
    correct: "c"
},
{
    question:"Arrays in JavaScript can be used to store______.", 
    
    answers:{
        a:"numbers and strings",
        b:"other arrays",
        c:"booleans",
        d:"all of the above",
        },
    correct: "d"
},
{
    question:"Strings values must be enclosed within____ when being assigned variables.", 
    answers:{
        a:"commas",
        b:"curly brackets",
        c:"quotes",
        d:"parenthsis",
        },
    correct: "b"
},
{
    question:"A very useful tool used during development and debugging for printing content to the debugger is:", 
        answers:{
        a:"JavaScript",
        b:"ternimal/bash",
        c:"for loops",
        d:"console.log",
        },
    correct: "c"
},
];

function setNextQuestion(){
    
}

function selectAnswer(){

}




//THEN I am presented with another question
//WHEN I answer a question incorrectly

//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0

//THEN the game is over

//WHEN the game is over
//THEN I can save my initials and my score