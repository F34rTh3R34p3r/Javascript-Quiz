var question = document.querySelector("#question")
var choices = document.querySelectorAll(".choice-text")
var progressText = document.querySelector(".hud-prefix")
var scoreText = document.querySelector("#score")
var progressBarFull = document.querySelector("#progressBarFull")
var timerDisplay = document.querySelector("#timerDisplay")
var resultDisplay = document.querySelector("#result-display")
var choiceContainer = document.querySelector(".choice-container");

let score = 0
let acceptingAnswers = true
let currentQuestion = {}
let questionIndex = 0
let questionPrinted = 1
let deadlineSeconds = 180;

const SCORE_INCREMENT = 1;

quizQuestions = [
    {question: "______ JavaScript is also called client-side JavaScript.",
    answerA: "Microsoft",
    answerB: "Navigator",
    answerC: "LiveWire",
    answerD: "Native",
    // correctAnswer: this.answerB
    correctAnswer: "B"
},
    {question: "__________ JavaScript is also called server-side JavaScript.",
    answerA: "Microsoft",
    answerB: "Navigator",
    answerC: "LiveWire",
    answerD: "Native",
    // correctAnswer: this.answerC}
    correctAnswer: "C"
},
    {question: "What are variables used for in JavaScript Programs?",
    answerA: "Storing numbers, dates, or other values",
    answerB: "Varying randomly",
    answerC: "Causing high-school algebra flashbacks",
    answerD: "None of the above",
    // correctAnswer: this.answerA
    correctAnswer: "A"
},
    {question: "What should appear at the very end of your JavaScript? The <script LANGUAGE='JavaScript'>tag.",
    answerA: "The </script>",
    answerB: "The <script>",
    answerC: "The END statement",
    answerD: "None of the above",
    // correctAnswer: this.answerA
    correctAnswer: "A"
},
    {question: "Which of the following is not a valid JavaScript variable name?",
    answerA: "2names",
    answerB: "_first_and_last_names",
    answerC: "FirstAndLast",
    answerD: "None of the above",
    // correctAnswer: this.answerA
    correctAnswer: "A"
},
    {question: "How does JavaScript store dates in a date object?",
    answerA: "The number of days since January 1st, 1900",
    answerB: "The number of milliseconds since January 1st, 1970",
    answerC: "The number of seconds since Netscape's public stock offering.",
    answerD: "None of the above",
    // correctAnswer: this.answerB
    correctAnswer: "B"
},
    {question: "What is the correct JavaScript syntax to write 'Hello World'?",
    answerA: "System.out.println('Hello World')",
    answerB: 'println ("Hello World")',
    answerC: 'document.write("Hello World")',
    answerD: 'response.write("Hello World")',
    // correctAnswer: this.answerC
    correctAnswer: 'C'
},
    {question: "Inside which HTML element do we put the JavaScript?",
    answerA: "<js>",
    answerB: '<scripting>',
    answerC: '<script>',
    answerD: '<javascript>',
    // correctAnswer: this.answerC
    correctAnswer: 'C'
},
    {question: "Which is the correct way to write a JavaScript array?",
    answerA: 'var txt = new Array(1:"tim",2:"kim",3:"jim")',
    answerB: 'var txt = new Array("tim","kim","jim")',
    answerC: 'var txt = new Array:1=("tim")2=("kim")3=("jim")',
    answerD: 'var txt = new Array="tim","kim","jim"',
    // correctAnswer: this.answerB
    correctAnswer: 'B'
},
    {question: "JavaScript entities start with _______ and end with _________",
    answerA: 'Semicolon, colon',
    answerB: 'Semicolon, Ampersand',
    answerC: 'Ampersand, colon',
    answerD: 'Ampersand, semicolon',
    // correctAnswer: this.answerD
    correctAnswer: 'D'
}
]

const TOTAL_QUESTIONS = quizQuestions.length;
const TOTAL_QUESTIONS_LENGTH = TOTAL_QUESTIONS - 1

function gameStart() {
    countdownTimerStart()
    getQuestionFromArray()
}

gameStart()

function getQuestionFromArray() {
    
    console.log(questionIndex, TOTAL_QUESTIONS)
    
    // Styling: Lists the question/total; also styles a progress bar.
    progressText.textContent = "Question " + questionPrinted + "/" + TOTAL_QUESTIONS
    progressBarFull.style.width = (questionPrinted / TOTAL_QUESTIONS) * 100 + "%"

    //console.log(progBarFill)

    // Finds and lists the question text in the HTML.
    console.log("question Index = ", questionIndex)
    currentQuestion = quizQuestions[questionIndex]
    console.log("current Question" , currentQuestion)
    question.innerText = currentQuestion.question

    // Finds the data-letter for each choice; formats in a gettable string for the Quiz' object.
    choices.forEach(function(choice) {
        const letter = choice.dataset['letter']     
        choice.innerText = currentQuestion['answer' + letter]
    })

    acceptingAnswers = true

    // Increments
    console.log("i =", questionIndex)
    questionIndex++  // 0 to 1
    console.log("incremented Index", questionIndex)
    questionPrinted++  // 1 to 2

}

// EventListener for click; compares answer chosen to correct answer; if/else statement to award score or pass.
// 

choices.forEach((choice) => {
    choice.addEventListener('click', event => {
    
        //if(!acceptingAnswers) return
        var correctAnswer = currentQuestion.correctAnswer
        console.log("Correct Answer: " + correctAnswer)
        var providedAnswer = event.target.dataset.letter
        console.log("Provided Answer: " + providedAnswer)

        if (correctAnswer === providedAnswer) {
            console.log("THAT'S A CORRECT ANSWER")
            incrementScore(SCORE_INCREMENT)
            acceptingAnswers = false
            resultDisplay.textContent = "Correct Answer!"
            resultDisplay.style.backgroundColor = "rgba(52, 204, 25, 0.4)"
            resetResultDisplay()
            if (questionIndex > TOTAL_QUESTIONS_LENGTH) {
                localStorage.setItem('mostRecentScore', score)
                return window.location.assign('../endPage/end.html')
            }
            getQuestionFromArray()
            
        } else {
            console.log("THAT'S AN INCORRECT ANSWER")
            resultDisplay.textContent = "Incorrect Answer!"
            resultDisplay.style.backgroundColor = "rgba(239, 26, 26, 0.4)"
            resultDisplay.style.opacity = "0.9"
            acceptingAnswers = false
            deadlineSeconds = deadlineSeconds - 15
            resetResultDisplay()   
            if (questionIndex > TOTAL_QUESTIONS_LENGTH) {
                localStorage.setItem('mostRecentScore', score)

                return window.location.assign('../endPage/end.html')
            }
            getQuestionFromArray() 
        }
            console.log("===========")
    })

})

function resetResultDisplay() {
    setTimeout(function() {
        resultDisplay.textContent = ""
        resultDisplay.style.backgroundColor = "transparent"
    }, 1500)
}

function incrementScore(number) {
    score += number
    scoreText.innerText = score;
}

function countdownTimerStart(){
    var countdown = setInterval(function() {
        
        var secondsLeft = Math.floor(deadlineSeconds % 60);
        var minutesLeft = Math.floor(deadlineSeconds / 60);
        timerDisplay.innerText = ("Timer: " + minutesLeft + ":" + secondsLeft)
        if(deadlineSeconds === 0) { 
            clearInterval(countdown);
            timerDisplay.innerText = "TIMER EXPIRED"
            localStorage.setItem('mostRecentScore', score)

            return window.location.assign('../endPage/end.html')
          }
        deadlineSeconds--
        
    }, 1000)
}
