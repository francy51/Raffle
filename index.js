
var num;
var max = prompt("Massimo numero", "300");
if (max == null || max == "") {
  txt = "User cancelled the prompt.";
} else {
  num = Number(max);
}

function getMax() {

}

function raffle() {
  var element =  document.getElementById('num')
  var i = 0;
  var chosen = Math.random(1, max)

  var inv = setInterval(count, 3000 / 100)

  console.log(chosen);

  function count() {
    if (i < chosen)
      element.innerHTML = ++i;
    else
      clearInterval(inv);
  }
}
