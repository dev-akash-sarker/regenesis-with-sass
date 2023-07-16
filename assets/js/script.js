window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 0";
    document.getElementById("fixed").style.backgroundColor = "rgba(0, 0, 0, 1)";
    document.getElementById("fixed").style.transition = "all linear .3s";
  } else {
    document.getElementById("navbar").style.padding = "35px 0";
    document.getElementById("fixed").style.backgroundColor =
      "rgba(0, 0, 0, 0.31)";
    document.getElementById("fixed").style.transition = "all linear .3s";
  }
}
