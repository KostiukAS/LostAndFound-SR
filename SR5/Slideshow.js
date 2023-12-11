let slideIndex = 0;
var slider = document.getElementById("myRange");
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, slider.value);
}

function changeSize(value) {
  let container = document.getElementsByClassName("slideshow-container");

  switch(value) 
  {
    case 1:
      container[0].style.width = "500px";
      break;
    case 2:
      container[0].style.width = "750px";
      break;
    case 3:
      container[0].style.width = "1000px";
      break;
    default:
      break;
  }
}