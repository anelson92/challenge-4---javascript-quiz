var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startQuiz = document.getElementById('start')
var timerEl = document.getElementById('timer')


var quizQuestions = [
    {   
        id: "0",
        question: "Commonly used data types do NOT include:",
        answers: {
            1.: 'strings',
            2.: 'booleans',
            3.: 'numbers',
            4.: 'alerts',
       
        },
        correctAnswer: '4.'
    },
    {
        id: "1",
        question: "The condition in an if / else statement is enclosed with ___________.",
        answers: {
            1.: 'quotes',
            2.: 'curly brackets',
            3.: 'parenthesis',
            4.: 'square brackets',
        },
        correctAnswer: "3."
    },
    {
        id: "2",
        question: "Arrays in JavaScript can be used to store ___________.",
        answers: {
            1.: 'numbers and strings',
            2.: 'other Arrays',
            3.: 'booleans',
            4.: 'all of the above',
        },
        correctAnswer: "4."
    },
    {
        id: "3",
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: {
            1.: 'commas',
            2.: 'curly brackets',
            3.: 'quotes',
            4.: 'parenthesis',
        },
        correctAnswer: "3."
    },
    {
        id: "4",
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: {
            1.: 'JavaScript',
            2.: 'terminal/bash',
            3.: 'for loops',
            4.: 'console.log',
        },
        correctAnswer: "4."
    }
]

function setTime(){


    var secondsLeft = 75;
    var timerInterval = setInterval(fuction () {

        if (timeLeft > 1) {

        secondsLeft--;
        timerEl.textContent = "Time left " + secondsLeft; 

        } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
        } else {
        timerEl.textContent = '';
  
        clearInterval(timerInterval);
        showResults();
    
    }, 1000),
}


startQuiz.addEventListener('click', generateQuiz(), setTime());

function generateQuiz (){

    function showQuestions (){

        var output = [];
        var answers; 

        for(var i=0; i<questions.length; i++){

            answers=[];

            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );

        }

        quizContainer.innerHTML = output.join('');

    }
}

    function showResults(){
        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
    }

            else{}
    showQuestions(quizQuestions, quizContainer);

    submitButton.onclick = function (){

        showResults();
    }
}
    }



