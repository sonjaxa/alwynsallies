var clownList = ["theBros/oneJoe.jpg", "theBros/twoJoe.jpg", "theBros/threeJoe.jpg", "theBros/fourJoe.jpg", "theBros/fiveJoe.jpg", "theBros/sixJoe.jpg"];
var currentClown = 0;

function youAlreadyKnowWhatsUp() {
  document.getElementById("thingToWatch").innerHTML = "Paragraph changed.";
}

function clownSwitch() {
  currentClown = currentClown + 1;
  if (currentClown == 3) {
    currentClown = 0;
  }
  document.getElementById("firstClown").src = clownList[currentClown];
}

function setupStart() {
  setInterval(clownSwitch, 3000);
}
