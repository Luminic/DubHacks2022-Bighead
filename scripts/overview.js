studySetData = sessionStorage.getItem("studySetData");

function convertData(data) {
  parsedData = new Array();
  for (const line of data.split("\n")) {
    let parsedLine = line.split("\t");
    if (parsedLine.length == 2) {
      parsedLine.push(0);
      parsedLine.push(0);
    }
    parsedData.push(parsedLine);
  }
  return parsedData;
}

console.log(convertData(studySetData));

let learnButton = document.getElementById("learn");
learnButton.onclick = () => {
  window.location.href = "learn.html";
};

let optionsButton = document.getElementById("options");
optionsButton.onclick = () => {
  alert(studySetData);
};

let infoTable = document.getElementById("infotable");

function fillTable() {
  let parsedData = convertData(studySetData);
  for (const studyItem of parsedData) {
    tr = infoTable.insertRow();
    for (const element of studyItem) {
      tr.insertCell().appendChild(document.createTextNode(element));
    }
  }
}
console.log(infoTable);
fillTable();

let backButton = document.getElementById("back");
backButton.onclick = () => {
  window.location.href = "index.html";
};

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

let saveButton = document.getElementById("save");
saveButton.onclick = () => {
  download("learn.txt", studySetData);
};