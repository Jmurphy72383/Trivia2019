var rightAnswers = 0;
var wrongAnswers = 0;

var questions = [
    "What Year Was The Original Halloween Released?",
    "The Only Halloween Movie To Not Feature Michael Myers Was...",
    "What Is The Name Of Michaels Psychiatrist?",
    "Where Does The Final Confrontation Take Place In The Original Halloween II?",
    "What Is The Name Of The Character Played By Jamie Lee Curtis?",
    "What Is The Name Of The Curse That Drives Michael Myers?",
    "Which Halloween Movie Featured The Rapper Busta Rhymes?",
    "How Many Halloween Movies Did Rob Zombie Release?",
    "What Happens To Michael At The End Of Halloween 5?",
    "What Is The Name Of The Asylum That Michael Escapes From?"
]

var correctAnswers = [
    "1978",
    "Halloween III: Season of the Witch",
    "Dr. Sam Loomis",
    "Hospital",
    "Laurie Strode",
    "Curse of Thorn",
    "Halloween: Resurrection",
    "2",
    "He is Busted out of Jail by a Man in Black",
    "Smiths Grove"
]

var answerArray = [
    ["1975", correctAnswers[0], "1981", "1985"],
    ["Halloween II", correctAnswers[1], "Halloween V", "He Appears In Every Halloween Movie"],
    ["Dr. Van-Nostren", "Dr. Moreu", correctAnswers[2], "Dr. Frank Costanza"],
    ["Police Station", "Elementary School", "Grave Yard", correctAnswers[3]],
    [correctAnswers[4], "Jamie Lloyd", "Judith Myers", "Debra Hill"],
    ["Curse of Zues", "Curse of Orion", "Curse of Halloween Night", correctAnswers[5]],
    ["Halloween by Rob Zombie", "Halloween: H20", correctAnswers[6], "Halloween 6"],
    ["1", correctAnswers[7], "3", "0"],
    ["He Is Burried Alive", "He Escapes Into The Night", correctAnswers[8], "He Falls Down a Mine Shaft"],
    [correctAnswers[9], "Haddonfield Insane Asylum", "Indiana State Penetentiary", "Oak Island Asylum"]
]

var headline = document.querySelector(".start_div");
var startBtn = document.querySelector("#start_btn");
var main = document.querySelector("#main_content");
var quiz = document.querySelector("#question_content");
var music = document.querySelector("#theme");

startBtn.addEventListener("click", function() {
    headline.remove();
    music.play();
    beginGame();
});

function beginGame() {
    var timerH2 = document.createElement("h2");
    timerH2.classList.add("timer_h2");
    var timerH2t = document.createTextNode("Time Remaining :");
    timerH2.appendChild(timerH2t);
    var countSpan = document.createElement("span");
    timerH2.appendChild(countSpan);
    main.appendChild(timerH2);
    //Starts the timer after the page is rendered
    startTimer();
    questionOne();

}

//Timer that counts down from 60
function startTimer(){
    var seconds = 60;
    var timer = setInterval(function(){
        document.querySelector("span").innerHTML= seconds;
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

//Question function
function questionOne() {
    //Clears the div
    quiz.innerHTML = "";
    if(questions[0] === undefined) {
        endGame();
    }else {
        var questionH1 = document.createElement("h1");
        var questionH1t = document.createTextNode(questions[0]);
        questionH1.appendChild(questionH1t);
        quiz.appendChild(questionH1);
        //Loops through the first array in the answerArray and creates buttons with the answer options
        for(var i = 0; i < answerArray[0].length; i++) {
            var answerBtn = document.createElement("button");
            answerBtn.classList.add("choice_btn");
            //Assigns a value attribute of the button to the corresponding answer choice
            answerBtn.setAttribute("value", answerArray[0][i]);
            answerBtn.addEventListener("click", function() {
                //Checks if the value of the button clicked is also in the correct answers array
                if(correctAnswers.indexOf(this.value) >= 0) {
                    console.log("correct!");
                    rightAnswers++
                    rightAnswer();
                }else {
                    console.log("incorrect");
                    wrongAnswers++
                    wrongAnswer();
                }
            })
            var answerBtnt = document.createTextNode(answerArray[0][i]);
            answerBtn.appendChild(answerBtnt);
            quiz.appendChild(answerBtn);
        }
    }
}

function rightAnswer() {
    //Clears the div
    quiz.innerHTML = "";
    //Removes the first questions from the questions array
    questions.shift();
    //Removes the first array from the answerArray
    answerArray.shift();
    var messageH1 = document.createElement("h1");
    var messageH1t = document.createTextNode("That is Correct!");
    messageH1.appendChild(messageH1t);
    quiz.appendChild(messageH1);
    var nextBtn = document.createElement("button");
    nextBtn.classList.add("choice_btn");
    nextBtn.addEventListener("click", questionOne);
    var nextBtnt = document.createTextNode("Next");
    nextBtn.appendChild(nextBtnt);
    quiz.appendChild(nextBtn);
}

function wrongAnswer() {
    quiz.innerHTML = "";
    questions.shift();
    answerArray.shift();
    var messageH1 = document.createElement("h1");
    var messageH1t = document.createTextNode("That is Incorrect");
    messageH1.appendChild(messageH1t);
    quiz.appendChild(messageH1);
    var nextBtn = document.createElement("button");
    nextBtn.classList.add("choice_btn");
    nextBtn.addEventListener("click", questionOne);
    var nextBtnt = document.createTextNode("Next");
    nextBtn.appendChild(nextBtnt);
    quiz.appendChild(nextBtn);
}

function endGame() {
    main.innerHTML = "";
    quiz.innerHTML = "";
    var messageH1 = document.createElement("h1");
    var messageH1t = document.createTextNode("Thats it! Lets See How You Did...");
    messageH1.appendChild(messageH1t);
    quiz.appendChild(messageH1);
    var scoreRight = document.createElement("h2");
    scoreRight.classList.add("score_h2");
    var scoreRightt = document.createTextNode("Correct Answers: " + rightAnswers);
    scoreRight.appendChild(scoreRightt);
    quiz.appendChild(scoreRight);
    var scoreWrong = document.createElement("h2");
    scoreWrong.classList.add("score_h2");
    var scoreWrongt = document.createTextNode("Incorrect Answers: " + wrongAnswers);
    scoreWrong.appendChild(scoreWrongt);
    quiz.appendChild(scoreWrong);
    //Creates a button that refreshes the page when clicked
    var restartBtn = document.createElement("button");
    restartBtn.classList.add("choice_btn");
    restartBtn.addEventListener("click", function() {
        location.reload(true);
    })
    var restartBtnt = document.createTextNode("Try Again?");
    restartBtn.appendChild(restartBtnt);
    quiz.appendChild(restartBtn);
}