window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.getElementById("btn-arrow").style.maxWidth = "720px") {
    document.getElementById("btn-arrow").style.display = "none";
    if (document.body.scrollTop >= 20) {
      document.getElementById("btn-arrow").style.display = "block";
      document.getElementById("botom").style.display = "block";
      document.getElementById("side").style.display = "none";
    }
    else {
      document.getElementById("botom").style.display = "none";
      document.getElementById("side").style.display = "block";
    }
  }

}


function togle() {
  var element = document.getElementById("side");
  var element2 = document.getElementById("botom");

  if (element.style.display == "none") {
    element.style.display = "block";
    element2.style.display = "none";
  }
  else {
    element.style.display = "none";
    element2.style.display = "block";
  }
}