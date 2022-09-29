function hello() {
  if (window.outerWidth && window.outerWidth > 480) {
    document.getElementById("giftImage1").style.backgroundImage =
      "url(./assets/salma.jpg)";

    document.getElementById("giftImage1").style.backgroundSize = "cover";

    document.getElementById("giftImage1").style.backgroundPosition = "center";
  }
}
