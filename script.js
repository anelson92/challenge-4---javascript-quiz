var quizContainer = document.getElementById('quiz');
var startContainer = document.getElementById('start-container');
var resultsContainer = document.getElementById('results');
// var questionsContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var startQuiz = document.getElementById('start');
var timerEl = document.getElementById('countdown');



var questionNumber = 1;

var questionText = document.getElementById('question');
var btnA = document.getElementById('a');
var btnB = document.getElementById('b');
var btnC = document.getElementById('c');
var btnD = document.getElementById('d');


var timeLeft = 75;
var timerInterval;
var score = 0;
var correct;
var questionIndex = 0;
var allQuestionsAnswered;

// questions 
        var questionOne = {
            question: "Commonly used data types do NOT include:",
            answerOneText : 'strings',
            answerTwoText : 'booleans',
            answerThreeText : 'numbers',
            answerFourText : 'alerts',
            answerOne: false,
            answerTwo: false,
            answerThree: false,
            answerFour: true,
       
        }
    
        var questionTwo = {
            question: "The condition in an if / else statement is enclosed with ___________.",
            answerOneText : 'quotes',
            answerTwoText : 'curly brackets',
            answerThreeText : 'parenthesis',
            answerFourText : 'square brackets',
            answerOne: false,
            answerTwo: false,
            answerThree: true, 
            answerFour: false, 
        }
    
        var questionThree ={
            question: "Arrays in JavaScript can be used to store ___________.",
            answerOneText : 'numbers and strings',
            answerTwoText : 'other Arrays',
            answerThreeText : 'booleans',
            answerFourText : 'all of the above',
            answerOne: false, 
            answerTwo: false, 
            answerThree: false, 
            answerFour: true, 
        }
       
        var questionFour = { 
            question: "String values must be enclosed within _______ when being assigned to variables.",
            answerOneText : 'commas',
            answerTwoText : 'curly brackets',
            answerThreeText : 'quotes',
            answerFourText : 'parenthesis',
            answerOne: false,
            answerTwo: false,
            answerThree: true, 
            answerFour: false,
        }
       
        var questionFive = { 
            question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
            answerOneText : 'JavaScript',
            answerTwoText : 'terminal/bash',
            answerThreeText : 'for loops',
            answerFourText : 'console.log',
            answerOne: false, 
            answerTwo: false, 
            answerThree: false, 
            answerFour: true, 
        }


document.getElementById("start-container").onclick = function() {
    document.getElementById("start-container").style.display = "none";
}

startQuiz.addEventListener("click", () => {

    // timerText.textContent = time;

    var timeLeft = 75;
    var timerInterval = setInterval(function() {
        timeLeft--;

        timerEl.textContent = timeLeft + " seconds remaining"
    
    if (timeLeft === 0) {
        timerEl.textContent = '';
        clearInterval(timerInterval);

        // showResults();
     }
    }, 1000)

questionText.textContent = questionOne.question;
btnA.textContent = questionOne.answerOneText;
btnB.textContent = questionOne.answerTwoText;
btnC.textContent = questionOne.answerThreeText;
btnD.textContent = questionOne.answerFourText;

});

btnA.addEventListener("click", () => {
    if(questionNumber === 1) {
        questionNumber++;
        correct++;
        checkQuestionCount();
    } else {
        timeLeft-10;
        questionNumber++;
        checkQuestionCount();
    }
});

btnB.addEventListener("click", () => {
    if(questionNumber === 2) {
        questionNumber++;
        correct++;
        checkQuestionCount();
    } else {
        timeLeft-10;
        questionNumber++;
        checkQuestionCount();
    }
    
});

btnC.addEventListener("click", () => {
    if(questionTwo.answerThree && questionNumber === 2) {
        questionNumber++;
        correct++;
        checkQuestionCount();
    } else if (questionFour.answerThree && questionNumber === 4){
        questionNumber++;
        correct++;
        checkQuestionCount();
    } else {
        timeLeft-10;
        questionNumber++;
        checkQuestionCount();
    }
});

btnD.addEventListener("click", () => {
    if(questionOne.answerFour && questionNumber === 1){
        questionNumber++;
        correct++;
        checkQuestionCount();
    } else if (questionThree.answerFour && questionNumber === 3){
        questionNumber++;
        correct++;
        checkQuestionCount();
    } else if (questionFive.answerFour && questionNumber === 5){
        questionNumber++;
        correct++;
        checkQuestionCount();
    } else {
        timeLeft-10;
        questionNumber++;
        checkQuestionCount();
    }
});

var checkQuestionCount = () => {

    if(questionNumber == 2){
        questionText.textContent = questionTwo.question;
        btnA.textContent = questionTwo.answerOneText;
        btnB.textContent = questionTwo.answerTwoText; 
        btnC.textContent = questionTwo.answerThreeText;
        btnD.textContent = questionTwo.answerFourText;
    }
    if(questionNumber == 3){
        questionText.textContent = questionThree.question;
        btnA.textContent = questionThree.answerOneText;
        btnB.textContent = questionThree.answerTwoText; 
        btnC.textContent = questionThree.answerThreeText;
        btnD.textContent = questionThree.answerFourText;
    }
    if(questionNumber == 4){
        questionText.textContent = questionFour.question;
        btnA.textContent = questionFour.answerOneText;
        btnB.textContent = questionFour.answerTwoText; 
        btnC.textContent = questionFour.answerThreeText;
        btnD.textContent = questionFour.answerFourText;
    }if(questionNumber == 5){
        questionText.textContent = questionFive.question;
        btnA.textContent = questionFive.answerOneText;
        btnB.textContent = questionFive.answerTwoText; 
        btnC.textContent = questionFive.answerThreeText;
        btnD.textContent = questionFive.answerFourText;
    }
};

localStorage.setItem('score', correct);
