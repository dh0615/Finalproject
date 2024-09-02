const slider = document.querySelector('.popular');
const slides = document.querySelectorAll('.popular-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const totalSlides = slides.length;
let slideWidth;


function updateSliderDimensions() {
  const containerWidth = window.innerWidth;
  slideWidth = containerWidth / 4; 
  slider.style.width = `${slideWidth * totalSlides}px`;

  slides.forEach(slide => {
    slide.style.width = `${slideWidth}px`;
    slide.style.height = '100vh';
  });

  moveToSlide(currentIndex);
}


function moveToSlide(index) {
  if (index < 0) index = 0;
  if (index > totalSlides - 1) index = totalSlides - 1;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}


prevBtn.addEventListener('click', () => {
  currentIndex -= 4;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  moveToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex += 4; 
  if (currentIndex > totalSlides - 1) {
    currentIndex = totalSlides - 1; 
  }
  moveToSlide(currentIndex);
});


window.addEventListener('resize', updateSliderDimensions);

updateSliderDimensions();
