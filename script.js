window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 20 ) {
    document.getElementById("botom").style.display = "block";
    document.getElementById("side").style.display = "none";
  } else {
    document.getElementById("botom").style.display = "none";
    document.getElementById("side").style.display = "block";
  }
}
