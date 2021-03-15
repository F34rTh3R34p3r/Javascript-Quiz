
const submitButton = document.querySelector("#submit-Button")
const highScoresButton = document.querySelector("#high-scores")
const initialsInput = document.querySelector("#initialsInput")
const mostRecentScore = document.querySelector(".mostRecentScore")

const highScoresList = document.querySelector("scores")
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const TOTAL_HIGH_SCORES_DISPLAY = 5;

var thisQuizScore = JSON.parse(localStorage.getItem("mostRecentScore"))
mostRecentScore.innerText = thisQuizScore;

submitButton.addEventListener("click", function() {
    var initials = initialsInput.value

    if (thisQuizScore === null) {
        thisQuizScore = 0;
    }
    
    score = {
        userScore: thisQuizScore,
        username: initials
    }
    console.log(score)

    highScores.push(score)
    console.log(highScores)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    function compare(a,b) {
        if (a.date < b.date )
          return -1;
        if (a.date  > b.date )
         return 1;
        return 0;
     }

    highScores.sort(compare)
    highScores.splice(5)

    console.log(highScores)

    localStorage.setItem('highScores', JSON.stringify(highScores))

    return window.location.assign('../scores/scores.html')
    localStorage.removeItem("mostRecentScore")
})

highScoresButton.addEventListener("click", function() {
    return window.location.assign('../scores/scores.html')
})