const slide = document.querySelector(".slide");
const pager = document.querySelector(".slide-pager");
const pagers = document.querySelectorAll(".pagination");
const pausePlayButton = document.querySelector(".pagination-control i");
const slideInfoText = document.getElementById("slide-info-text");

const pics = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];
const infoTexts = [
  "1 지금 스트리밍 중",
  "2 지금 스트리밍 중",
  "3 지금 스트리밍 중",
  "4 지금 스트리밍 중",
  "5 지금 스트리밍 중",
  "6 지금 스트리밍 중."
];

const pic = document.createElement("img");
/* pic.style.width = "100%";
pic.style.height = "100%";
pic.style.minHeight = "76vh";
pic.style.objectFit = "cover";
pic.style.objectPosition = "center"; */

// 초기 이미지 설정
let i = 0;
pic.src = `./slide/${pics[i]}`;
slide.appendChild(pic);

// 슬라이드 정보 초기 설정
slideInfoText.textContent = infoTexts[i];

let isPlaying = true;
let slideInterval = setInterval(changeImg, 3000); // 자동 슬라이드 간격

// 이미지 변경 함수
function changeImg() {
  i++;
  if (i >= pics.length) {
    i = 0;
  }
  updateSlide();
}

// 슬라이드를 업데이트하는 함수
function updateSlide() {
  // 이미지 변경
  pic.src = `./slide/${pics[i]}`;

  // 페이지네이션 업데이트
  pagers.forEach((pager, idx) => {
    if (idx !== i) {
      pager.classList.remove("active");
    }
  });
  pagers[i].classList.add("active");

  // 슬라이드 정보 업데이트
  slideInfoText.textContent = infoTexts[i];
}

// 페이지네이션 클릭 이벤트
pagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    i = index;
    updateSlide();
    if (isPlaying) {
      clearInterval(slideInterval);
      slideInterval = setInterval(changeImg, 3000);
    }
  });
});

// 일시정지/재생 버튼 클릭 이벤트
pausePlayButton.addEventListener("click", () => {
  if (isPlaying) {
    clearInterval(slideInterval);
    pausePlayButton.classList.remove("fa-pause");
    pausePlayButton.classList.add("fa-play");
  } else {
    slideInterval = setInterval(changeImg, 3000);
    pausePlayButton.classList.remove("fa-play");
    pausePlayButton.classList.add("fa-pause");
  }
  isPlaying = !isPlaying;
});

// popular
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.popular');
  const slides = document.querySelectorAll('.popular-item');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let currentIndex = 0;
  const visibleSlides = 4; // 한 화면에 보여질 슬라이드 개수
  let slideWidth;
  const gap = 10; // 이미지 사이의 간격

  function updateSliderDimensions() {
    const containerWidth = slider.parentElement.offsetWidth; // 부모 요소의 너비
    slideWidth = (containerWidth - (visibleSlides - 1) * gap) / visibleSlides; // 각 슬라이드의 너비 계산

    slider.style.width = `${(slideWidth + gap) * slides.length - gap}px`; // 슬라이드 컨테이너의 너비 설정

    slides.forEach(slide => {
      slide.style.width = `${slideWidth}px`; // 각 슬라이드의 너비 설정
    });

    moveToSlide(currentIndex);
  }

  function moveToSlide(index) {
    if (index < 0) index = 0;
    if (index > slides.length - visibleSlides) index = slides.length - visibleSlides;
    slider.style.transform = `translateX(-${index * (slideWidth + gap)}px)`; // 슬라이드 이동
    updateButtonsVisibility();
  }

  function updateButtonsVisibility() {
    if (currentIndex <= 0) {
      prevBtn.classList.remove('show'); // 첫 슬라이드에서는 prev 버튼 숨김
    } else {
      prevBtn.classList.add('show');
    }

    if (currentIndex >= slides.length - visibleSlides) {
      nextBtn.classList.remove('show'); // 마지막 슬라이드에서는 next 버튼 숨김
    } else {
      nextBtn.classList.add('show');
    }
  }

  prevBtn.addEventListener('click', () => {
    currentIndex -= visibleSlides;
    if (currentIndex < 0) currentIndex = 0;
    moveToSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex += visibleSlides;
    if (currentIndex > slides.length - visibleSlides) currentIndex = slides.length - visibleSlides;
    moveToSlide(currentIndex);
  });

  window.addEventListener('resize', updateSliderDimensions);

  updateSliderDimensions(); // 초기 설정
});


// Q&A
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", function () {
    // Toggle the active class on the button
    this.classList.toggle("active");
    
    // Get the content section next to the button
    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // If already open, close it
      content.style.maxHeight = null;
    } else {
      // Close all other accordion sections
      document.querySelectorAll(".accordion-content").forEach((otherContent) => {
        otherContent.style.maxHeight = null;
      });
      // Open the selected section
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});



