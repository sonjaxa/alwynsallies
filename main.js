var clownList = ["theBros/oneJoe.jpg", "theBros/twoJoe.jpg", "theBros/threeJoe.jpg", "theBros/fourJoe.jpg", "theBros/fiveJoe.jpg", "theBros/sixJoe.jpg"];
var currentClown = 0;
clickyClick = false;

// LIST OPTIONS:
var badTvList =
["worth it rewatch",
"CURSED ANSWER: MEATFRUIT",
"princess movie (i can make this map to a separate list of BPCU movies later)",
"little women ft willa fitz",
"reputation reputation lets talk about taylor swifts reputation stadium tour",
"safiya videos? (i might be able to make something that randomly selects a video out of her uploads. updates to come in later patch updates)",
"twin peaks",
"ansel deep divery",
"the double",
"whms"]

function youAlreadyKnowWhatsUp() {
  document.getElementById("thingToWatch").innerHTML = "um he'll choose stuff to watch eventually i guess";
}

// MEDIA SELECTOR
function theJellicleChoice() {
  var garbageVar = Math.floor((Math.random()));
  document.getElementById("enterMovieHere").innerHTML = badTvList[garbageVar];
}

// THIS DOES THE JOE CYCLE
function clownSwitch() {
  currentClown = currentClown + 1;
  if (currentClown == clownList.length) {
    currentClown = 0;
  }
  document.getElementById("theJoes").src = clownList[currentClown];
}

yesClicked() {
  clickyClick = true;
}

checkyCheck() {
  if (clickyClick == true) {
    theJellicleChoice();
    clickyClick = false;
  }
}

function setupStart() {
  setInterval(clownSwitch, 1000);
  while (true) {
    checkyCheck();
  }
}
