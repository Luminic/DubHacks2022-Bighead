'use strict';

let fileUploadButton = document.getElementById("fileupload");
fileUploadButton.onclick = () => {
  alert("This should be a file dialog");
};

let txtBox = document.getElementById("txtinput");

let txtInpContButton = document.getElementById("txtinpcont");
txtInpContButton.onclick = () => {
  sessionStorage.setItem("studySetData", txtBox.value);
  window.location.href = "overview.html";
};