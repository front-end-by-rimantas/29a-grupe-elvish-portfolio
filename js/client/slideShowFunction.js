
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


  dots[0].addEventListener("click", function() {
      slides[0].style.display = 'block';
      slides[1].style.display = 'none';
      slides[2].style.display = 'none';
      dots[1].className = dots[1].className.replace(" active", "");
      dots[2].className = dots[2].className.replace(" active", "");
      dots[0].className += " active";   
})
  dots[1].addEventListener("click", function() {
      slides[1].style.display = 'block';
      slides[0].style.display = 'none';
      slides[2].style.display = 'none';
      dots[0].className = dots[1].className.replace(" active", "");
      dots[2].className = dots[2].className.replace(" active", "");
      dots[1].className += " active";   
        
})
  dots[2].addEventListener("click", function() {
      slides[2].style.display = 'block';
      slides[0].style.display = 'none';
      slides[1].style.display = 'none';
      dots[0].className = dots[1].className.replace(" active", "");
      dots[1].className = dots[2].className.replace(" active", "");
      dots[2].className += " active";   
        
      
})
}


export {showSlides}