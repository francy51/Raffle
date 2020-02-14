


function getMax() {
  var num;
  var max = prompt("Massimo numero", "300");
  if (max == null || max == "") {
    txt = "User cancelled the prompt.";
  } else {
    num = Number(max);
    $("#numWrapper").removeClass("invis")
    $("#startButton").addClass("invis")
    raffle(num);
  }
}

function raffle(max) {
  var element =  document.getElementById('num')
  var i = 0;
  var chosen = getRandomIntInclusive(1, max)

  var inv = setInterval(count, 3000 / 100)

  console.log(chosen);

  function count() {
    if (i < chosen)
      element.innerHTML = ++i;
    else
      clearInterval(inv);
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
