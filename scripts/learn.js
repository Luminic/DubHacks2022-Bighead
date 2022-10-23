// studySetData = [["Aa", "Bb", 0, 2], ["Cc", "Dd", 2, 1], ["Ee", "Ff", 0, 0]];

function convertData(data) {
  parsedData = new Array();
  for (const line of data.split("\n")) {
    let parsedLine = line.split("\t");
    if (parsedLine.length == 2) {
      parsedLine.push(0);
      parsedLine.push(0);
    } else if (parsedLine.length == 4) {
      parsedLine[2] = parseInt(parsedLine[2]);
      parsedLine[3] = parseInt(parsedLine[3]);
    }
    parsedData.push(parsedLine);
  }
  return parsedData;
}

function unConvertData(parsedData) {
  let unparsedLines = new Array();
  for (let parsedLine of parsedData) {
    unparsedLines.push(parsedLine.map(String).join("\t"));
  }
  return unparsedLines.join("\n");
}

studySetData = convertData(sessionStorage.getItem("studySetData"));


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
  sessionStorage.setItem("studySetData", unConvertData(studySetData));
  choose_study_item();
}

function choose_study_item() {
  currentStudyItemIndex = Math.floor(Math.random() * studySetData.length);
  currentStudyItem = studySetData[currentStudyItemIndex];
  questionHeader.textContent = currentStudyItem[0];
  answerBox.value = "";
}

choose_study_item();

let backButton = document.getElementById("back");
backButton.onclick = () => {
  window.location.href = "overview.html";
};