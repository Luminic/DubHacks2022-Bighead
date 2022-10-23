<<<<<<< HEAD
'use strict';

let fileUploadButton = document.getElementById("fileupload");
fileUploadButton.onclick = () => {
  alert("This should be a file dialog");
};
=======
>>>>>>> 7cf7e5ac154bdf73f291ad754e553ee114309b85

let txtBox = document.getElementById("txtinput");

let txtInpContButton = document.getElementById("txtinpcont");
txtInpContButton.onclick = () => {
  sessionStorage.setItem("studySetData", txtBox.value);
  window.location.href = "overview.html";
};

let file = document.getElementById("myfile");
var reader = new FileReader();
reader.onload = function (evt) {
  alert(evt.target.result);
}
reader.onerror = function (evt) {
  alert("error reading file");
}