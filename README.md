# Homework Assignment #5 - Javascript Quiz

## Overview

This document describes the workings of a 10-question quiz - of Javascript questions - powered by Javascript, HTML, and CSS.

This project is meant to demonstrate knowledge and competency in the following:

- Event listeners,
- DOM traversal,
- JS Objects,
- Localstorage
- Conditional logic
- Conditional CSS formatting
- Multiple HTML and JS pages
- Bootstrap

# File Architecture

File name | Function
------------ | -------------
./start.html | Main page HTML
./start.js | Main page Javascript
**game (folder)**
index.html | Quiz HTML
style.css | CSS stylesheet
script.js| Quiz logic Javascript
**endPage (folder)** |
./end.html | "Enter score" HTML
./end.js | "Enter score" Javascript
**scores (folder)** |
./scores.html | "High scores" HTML
./end.js | "High scores" Javascript

# Features
The following are the specific components of this Javascript Quiz:

**start.html/js**
- This webpage has two buttons; the first (blue) starts the game, while the other (yellow) allows you to view the high scores. 

**index.html/script.js**
- The `gameStart()` function starts the in-game timer, set at 3 minutes, and executes the `getQuestionFromArray()` function, which queries the first question of the quiz. 
- The quiz material itself is an array of 10 objects. Each object has a `question:` key,  four answer keys (`answerA`, `answerB`, `answerC`, and `answerD`), and a `correctAnswer` key. The `correctAnswer` key is a string of the corresponding answer key. For example, if the correct answer is contained within answer B, the `correctAnswer` key will contain `"answerB"`.
- The HTML contains a div to display the question's innerText, as well as four `choice-container` divs in which the `choice-text` innerText displays the potential answers. These are clickable divs which submit the answer when clicked. See: the `forEach()` code on line 130.
- Each `choice-container` div has a `data-letter` value - A, B, C, and D - which correspond with the answer keys from the quiz' array objects. 
- Through the use of indexing, we can query the first question in the array and access its potential answers, posting them to the respective divs in the HTML. 
- The `data-letter` value and the `answer[X]`'s letter are matched (A for A, B for B, etc.). 
- Clicking one of the four answer divs executes the `event Listener` and assign the `data-letter` value as the `providedAnswer` variable's value. It will be compared to the `correctAnswer` value; if a selected answer's data-letter value matches the `correctAnswer` value, then the quiz registers a correct answer, awarding a point.
- Upon answering, the bottom of the page appends a "Correct Answer" or a "Incorrect Answer" blurb; its background color is also modified; green for correct and red for incorrect. The `resetResultDisplay()` function resets the CSS after 1.5 seconds.
- A correct answer executes the `incrementScore()` function, incrementing the score by the `SCORE_INCREMENT` variable, itself set as a value of `1`.
- The progress bar fills through a line of Javascript which adjusts the CSS; its width is determined by (pseudocode): (questionNumber / totalQuestions) * 100. Therefore, if we are on the 4th question of 10, the progress bar is filled 40 percent. 

**end.html/js**
- Upon completing the quiz, you are taken to an end-game page in which your final score is displayed.
- There is an input prompt to type in your initials, with a submit button.
- There is another button to skip this prompt and go directly to the high score.

**scores.html/js**
- The quiz's score calculated in `index.js` has been committed to LocalStorage through a number of steps. First, the key `"mostrecentscore"` is coupled with this score. Then, in `end.js`, the initials provided are used to build an object, including i) the initials and ii) the score (retrieved through LocalStorage). Game after game, objects are added together into an array. This array - once spliced to five values - is placed back into LocalStorage, its key set as `highScores`. The `mostrecentscore` value is then eliminated to avoid clutter.
- High scores are displayed here.

## Challenges
- The only challenge for the code  is to properly order the leaderboard. Using the `sort()` and `reverse()` functions, and even with extensive experimentation, I was unable to create a consistent method that would consistently display the top 5 scores in reverse order. 
- Also having trouble deleting obsolete Github commits. This appears to cause clutter in the repo but not in the code itself.


This website is available at the following URL:   https://f34rth3r34p3r.github.io/Javascript-Quiz/
Git: https://github.com/F34rTh3R34p3r/Javascript-Quiz.git

# Contributor(s)
Daniel Pisani (F34rTh3R34p3r)

# MIT License

Copyright (c) 2021 Daniel Pisani (F34rTh3R34p3r) 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
