
var num;
var min = 1;
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
  var chosen = Math.floor(Math.random() * (max - min + 1) ) + min;

  var inv = setInterval(count, 3000 / 100)

  console.log(chosen);

  function count() {
    if (i < chosen)
      element.innerHTML = ++i;
    else
      clearInterval(inv);
  }
}
