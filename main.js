var clownList = ["theBros/oneJoe.jpg", "theBros/twoJoe.jpg", "theBros/threeJoe.jpg", "theBros/fourJoe.jpg", "theBros/fiveJoe.jpg", "theBros/sixJoe.jpg"];
var currentClown = 0;

function youAlreadyKnowWhatsUp() {
  document.getElementById("thingToWatch").innerHTML = "um he'll choose stuff to watch eventually i guess";
}

function clownSwitch() {
  currentClown = currentClown + 1;
  if (currentClown == len.list(clownList)) {
    currentClown = 0;
  }
  document.getElementById("theJoes").src = clownList[currentClown];
}

function setupStart() {
  setInterval(clownSwitch, 1000);
}
