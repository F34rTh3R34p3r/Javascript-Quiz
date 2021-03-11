// Borrowed from Brian Design
var question = document.querySelector("#question")
var choices = document.querySelectorAll(".choice-text")
var progressText = document.querySelectorAll("#progressText")
var scoreText = document.querySelector("#score")
var progressBarFull = document.querySelector("#progressBarFull")

let score = 0
let acceptingAnswers = true
let currentQuestion = {}
//let questionIndex = 0
let availableQuestions = []

const SCORE_INCREMENT = 1;
const TOTAL_QUESTIONS = 10;

// Borrowed from Brian Design

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

function gameStart() {
    var questionIndex = 0
    var score = 0
    availableQuestions = [...quizQuestions]
    getQuestionFromArray()
}

function getQuestionFromArray() {
    let questionIndex = 0
    if(availableQuestions.length === 0 || questionIndex > TOTAL_QUESTIONS) {
        return
    }

    console.log(availableQuestions)
    questionIndex++
    progressText.innerText = "Question " + questionIndex + " of " + TOTAL_QUESTIONS + "." 
    //progressBarFull.style.width = ((questionIndex/TOTAL_QUESTIONS) * 100) + "%"
    //const questionsIndex = Math.floor(Math.random() * availableQuestions.length) // returns random index for array, also is too random
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(function(choice) { //review this and convert to my own style
        const letter = choice.dataset['letter']     
        choice.innerText = currentQuestion['answer' + letter]
    })

    console.log(availableQuestions.length)
    console.log("Question index: " + questionIndex)
    availableQuestions.splice(questionIndex, 1)
    console.log(availableQuestions.length)
    var acceptingAnswers = true

    choices.forEach(function(choice) {
        choice.addEventListener('click', function(event) {
            if(!acceptingAnswers) return
            //console.log(event)
    
            var correctAnswer = currentQuestion.correctAnswer   // isolates the data-letter from the HTML div selected with the correctAnswer for the Object
            console.log("Correct Answer: " + correctAnswer)
            var providedAnswer = event.target.dataset.letter
            console.log("Provided Answer: " + providedAnswer)

    if (correctAnswer === providedAnswer) {   // cross-references the provided answer with the correct answer
        console.log("THAT'S A CORRECT ANSWER")
        const acceptingAnswers = false
        incrementScore(1)             // see line #163
        getQuestionFromArray()
    } else {
        console.log("THAT'S AN INCORRECT ANSWER")
        //getQuestionFromArray()
    }
    
    console.log("===========")


        })
    })
}


function incrementScore(number) {
    score += number;
    scoreText.innerText = score;
}

gameStart()

// console.log(quizQuestions[2])
// console.log(quizQuestions[2].question)
// console.log(quizQuestions[2].answerB)
// console.log(quizQuestions[2].answerA)
// console.log(quizQuestions[2].correctAnswer)

// if (quizQuestions[2].answerB === quizQuestions[2].correctAnswer) {
//     console.log("CORRECT ANSWER")
// } else {
//     console.log("WRONG ANSWER")
// }

