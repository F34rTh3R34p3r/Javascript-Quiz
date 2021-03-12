
startButton = document.querySelector("#start-Button")

scoresButton = document.querySelector("#high-scores")

startButton.addEventListener("click", function() {
    return window.location.assign('../index.html')
})

scoresButton.addEventListener("click", function() {
    return window.location.assign('../scores/scores.html')
})



