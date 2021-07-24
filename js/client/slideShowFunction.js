
var slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("client-slide");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
// console.log(slides);
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6500); // Change image every 2 seconds
}

export {showSlides}