let txtBox = document.getElementById("txtinput");

let studySetData = sessionStorage.getItem("studySetData");
if (studySetData != null) {
  txtBox.value = studySetData
}

let continueButton = document.getElementById("continue");
continueButton.onclick = () => {
  sessionStorage.setItem("studySetData", txtBox.value);
  window.location.href = "overview.html";
};

let file = document.getElementById("uploadedfile");
file.value = ""
file.addEventListener("change", (event) => {
  console.log(event.target);
  if (event.target.files.length >= 1) {
    let reader = new FileReader();
    reader.addEventListener('load', (event) => {
      txtBox.value = event.target.result
    });
    reader.readAsText(event.target.files[0]);
  }
})
