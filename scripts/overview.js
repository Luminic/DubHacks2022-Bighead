studySetData = sessionStorage.getItem("studySetData");

let learnButton = document.getElementById("learn");
learnButton.onclick = () => {
  alert("learn");
};

let optionsButton = document.getElementById("options");
optionsButton.onclick = () => {
  alert(studySetData);
};

termColumn = document.getElementById("termcolumn")
