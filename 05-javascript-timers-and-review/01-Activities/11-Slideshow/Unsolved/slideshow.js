var images = ["bootstrap.png", "github-logo.jpg", "logo_JavaScript.png"];
var showImage;
var count = 0;
let html = `<img src="./images/${images[count]}"></img>`;
$("#start").click(startSlideshow());

function displayImage() {
  $("#image-holder").html(html)
};

function nextImage() {
  count++
  if (count === images.length) count = 0;
  $("#image-holder").html(html);
}

function startSlideshow() {
 setTimeout(() => nextImage(), 1000);
}

function stopSlideshow() {
  clearInterval();
}

displayImage();