
const highScoresList = document.querySelector("#highScoresList")
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

console.log(highScores)

// highScoresReverse = highScores.sort().slice().reverse()
// console.log(highScoresReverse)

const exitButton = document.querySelector("#exit-button")
const scoresButton = document.querySelector("#again-button")

highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.username} - ${score.userScore}</li>`
}).join('')

exitButton.addEventListener("click", function() {
    return window.location.assign('../start.html');
})

scoresButton.addEventListener("click", function() {
    return window.location.assign('../game/index.html');
})