window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var btn = document.getElementById("botom");
  if (document.body.scrollTop >= 20) {
    btn.style.display = "block";
  }
  else {
    btn.style.display = "none";
  }
}