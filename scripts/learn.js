'use strict';

studySetData = [["Aa", "Bb", 0, 2], ["Cc", "Dd", 2, 1], ["Ee", "Ff", 0, 0]];
currentStudyItemIndex = null
currentStudyItem = null

let questionHeader = document.getElementById("question");
let answerBox = document.getElementById("answer");
answerBox.onkeydown = function(event) {
    if (event.key == "Enter") {
        checkAnswer();
    }
};

let checkButton = document.getElementById("check");
checkButton.onclick = () => {
    checkAnswer();
};

function checkAnswer() {
    if (answerBox.value == currentStudyItem[1]) {
        studySetData[currentStudyItemIndex][2] += 1; 
        alert("correct" + "\n" + currentStudyItem[2] + " correct, " + currentStudyItem[3] + " incorrect");
    } else {
        studySetData[currentStudyItemIndex][3] += 1;
        alert("incorrect: "  + currentStudyItem[1] + "\n" + currentStudyItem[2] + " correct, " + currentStudyItem[3] + " incorrect");
    }
    choose_study_item();
}

function choose_study_item() {
    currentStudyItemIndex = Math.floor(Math.random() * studySetData.length);
    currentStudyItem = studySetData[currentStudyItemIndex];
    questionHeader.textContent = currentStudyItem[0];
    answerBox.value = "";
}

choose_study_item();