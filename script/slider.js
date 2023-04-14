
let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();
function currentSlide(index) {
     slideIndex = index;
     showSlides();
}
function plusSlides(step) {
  
  if(step < 0) {
      slideIndex -= 2;
      
      if(slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  }
  
  showSlides();
}
async function showSlides() {
  
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
   
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
 
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.add('active');
   
   if(timeoutId) {
      clearTimeout(timeoutId);
   }
  
  timeoutId = setTimeout(showSlides,1000); // Change image every 5 seconds
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
