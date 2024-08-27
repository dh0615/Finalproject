const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const slidesToShow = 4; // 화살표 클릭 시 한 번에 이동할 슬라이드 수
const totalSlides = slides.length;
const slideWidth = window.innerWidth / slidesToShow; // 전체 화면 너비로 슬라이드 너비 설정

// Initialize slider width and update on window resize
function updateSliderDimensions() {
  const slideWidth = window.innerWidth / slidesToShow;
  const slideHeight = window.innerHeight;
  slider.style.width = `${slideWidth * totalSlides}px`;
  slides.forEach(slide => {
      slide.style.width = `${slideWidth}px`;
      slide.style.height = `${slideHeight}px`;
  });
}

// Update slider width on window resize
window.addEventListener('resize', () => {
    const newSlideWidth = window.innerWidth;
    slides.forEach(slide => {
        slide.style.width = `${newSlideWidth}px`;
    });
    moveToSlide(currentIndex);
});

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

// Handle mouse wheel event for slide control (one slide at a time)
let isScrolling = false; // To prevent multiple scroll events

slider.addEventListener('wheel', (e) => {
    if (isScrolling) return; // Prevent multiple scroll events

    isScrolling = true;
    e.preventDefault(); // Prevent default scroll behavior

    const scrollAmount = Math.sign(e.deltaY); // Determine scroll direction

    // Calculate new index
    let newIndex = currentIndex + scrollAmount;

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
