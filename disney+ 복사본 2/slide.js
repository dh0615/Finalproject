const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const slidesToShow = 4; // 화살표 클릭 시 한 번에 이동할 슬라이드 수
const totalSlides = slides.length;
let slideWidth; // 슬라이드 너비를 변수로 선언

// Initialize slider width and update on window resize
function updateSliderDimensions() {
  const containerWidth = window.innerWidth;
  slideWidth = containerWidth / slidesToShow;

  slider.style.width = `${slideWidth * totalSlides}px`;
  slides.forEach(slide => {
    slide.style.width = `${slideWidth}px`;
    slide.style.height = '100vh'; // 전체 높이를 사용
  });

  moveToSlide(currentIndex); // 슬라이더 위치 재설정
}

// Update slider dimensions on window resize
window.addEventListener('resize', updateSliderDimensions);

// Move to specific slide
function moveToSlide(index) {
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Move next (multiple slides)
nextBtn.addEventListener('click', () => {
  let newIndex = currentIndex + slidesToShow;
  if (newIndex >= totalSlides) newIndex = totalSlides - slidesToShow;
  moveToSlide(newIndex);
  currentIndex = newIndex;
});

// Move previous (multiple slides)
prevBtn.addEventListener('click', () => {
  let newIndex = currentIndex - slidesToShow;
  if (newIndex < 0) newIndex = 0;
  moveToSlide(newIndex);
  currentIndex = newIndex;
});

// Handle mouse wheel event for smooth scrolling
let isScrolling = false; // To prevent multiple scroll events

slider.addEventListener('wheel', (e) => {
  if (isScrolling) return; // Prevent multiple scroll events

  isScrolling = true;
  e.preventDefault(); // Prevent default scroll behavior

  const scrollAmount = e.deltaY; // Determine scroll amount
  const scrollStep = slideWidth; // Scroll step size

  // Calculate new index based on scroll amount
  let newIndex = currentIndex + Math.round(scrollAmount / scrollStep);
  
  // Ensure new index is within bounds
  if (newIndex < 0) newIndex = 0;
  if (newIndex > totalSlides - slidesToShow) newIndex = totalSlides - slidesToShow;

  if (currentIndex !== newIndex) {
    currentIndex = newIndex;
    moveToSlide(currentIndex);
  }

  // Reset scrolling flag after transition
  setTimeout(() => {
    isScrolling = false;
  }, 500); // Match the duration of the CSS transition
});

// Initialize dimensions on load
updateSliderDimensions();
