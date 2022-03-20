
var QuestionElement = document.getElementById('question');
var answerAElement = document.getElementById('answerA');
var answerBElement = document.getElementById('answerB');
var answerCElement = document.getElementById('answerC');
var answerDElement = document.getElementById('answerD');
var correctAnswer;

var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answerA: '<scripting>',
        answerB: '<script>',
        answerC: '<javascript>',
        answerD: '<js>',
        correctAnswer: 'B'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answerA: '<script src="xxx.js">',
        answerB: '<script href="xxx.js">',
        answerC: '<script name="xxx.js">',
        answerD: '<a href="xx.js">',
        correctAnswer: 'A'
    },
    {
        question: 'How do you create a function in JavaScript?',
        answerA: 'function myFunction()',
        answerB: 'function = myFunction()',
        answerC: 'function:myFunction()',
        answerD: 'function != myFunction()',
        correctAnswer: 'A'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        answerA: 'if i == 5 then',
        answerB: 'if (i == 5)',
        answerC: 'if i = 5',
        answerD: 'if i = 5 then',
        correctAnswer: 'B'
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answerA: 'if i =! 5 then',
        answerB: 'if (i <> 5)',
        answerC: 'if (i != 5)',
        answerD: 'if i <> 5',
        correctAnswer: 'C'
    },

];

var questionIndex = 0;

function endGame() {
    alert('Game is over!');
}

function askNextQuestion() {
   
    if (questionIndex >= questions.length) {
        endGame();
        document.getElementById('wrapper').classList.toggle('hide');
        document.getElementById('gameContainer').classList.toggle('hide');

    } else {
        QuestionElement.textContent = questions[questionIndex].question
        answerAElement.textContent = questions[questionIndex].answerA
        answerBElement.textContent = questions[questionIndex].answerB
        answerCElement.textContent = questions[questionIndex].answerC
        answerDElement.textContent = questions[questionIndex].answerD
        
    }
}

var timeRemaining = 60;

var score=0;

  answerAElement.addEventListener('click', function (event) {
    event.preventDefault();
    if (questions[questionIndex].correctAnswer === 'A') {
        alert('correct!')
        score+=10
    } else {
        alert('Incorrect')
        timeRemaining -= 10;
    }
    questionIndex++;
    askNextQuestion();
});

answerBElement.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Answer B has been clicked');

    if (questions[questionIndex].correctAnswer === 'B') {
        alert('correct!')
        score+=10

    } else {
        alert('Incorrect')
        timeRemaining -= 10;
    }
    questionIndex++;
    askNextQuestion();
});

answerCElement.addEventListener('click', function (event) {
    event.preventDefault();
    if (questions[questionIndex].correctAnswer === 'C') {
        alert('correct!')
        score+=10

    } else {
        alert('Incorrect')
        timeRemaining -= 10;
    }
    questionIndex++;
    askNextQuestion();
});

answerDElement.addEventListener('click', function (event) {
    event.preventDefault();
    if (questions[questionIndex].correctAnswer === 'D') {
        alert('correct!')
        score+=10

    } else {
        alert('Incorrect')
        timeRemaining -= 10;
    }
    questionIndex++;
    askNextQuestion();
});

var answerBtnEl = $('#save');
var answerInputEl=$('#fname');
questionsDiv.innerHTML = "";
var userAnswer = answerInputEl.val();

  answerBtnEl.on('click', function (event) {
    event.preventDefault();
    console.log('Button clicked');

    console.log('User answered', userAnswer);

        var createP2 = document.createElement("p");
        var createP1 = document.createElement("p");

        createP1.textContent = userAnswer + "Your score is: " + score;
        questionsDiv.appendChild(createP2);

  });

 function startTimer() {
    var timerInerval = setInterval(function () {
        timeRemaining--;

        if (timeRemaining === 0) {
            clearInterval(timerInerval);
            endGame();
            document.getElementById('wrapper').classList.toggle('hide');
            document.getElementById('gameContainer').classList.toggle('hide');
        }

        document.getElementById('timer').textContent = timeRemaining;
        console.log('internal running', timeRemaining);
    }, 1000);


 }


 
 function startGame() {
      document.getElementById('start').classList.toggle('hide');
      document.getElementById('gameContainer').classList.toggle('hide');
      askNextQuestion();
      startTimer();
 }
