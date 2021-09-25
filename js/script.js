// to go sign up  user modal
function createAccountuserFunction() {
    document.getElementById("login").style.display = "none";
    document.getElementById("Sign-up-company").style.display = "none";
    document.getElementById("Sign-up-user").style.display = "block";
}
 // to go sign up  user company
function createAccountcompanyFunction() {
  document.getElementById("login").style.display = "none";
  document.getElementById("Sign-up-company").style.display = "block";
  document.getElementById("Sign-up-user").style.display = "none";
}
// to go login   modal
function loginFunction() {
  document.getElementById("login").style.display = "block";
  document.getElementById("Sign-up-company").style.display = "none";
  document.getElementById("Sign-up-user").style.display = "none";
}

// image gallery

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}