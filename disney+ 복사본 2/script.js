const slide = document.querySelector(".slide");
const pager = document.querySelector(".slide-pager");
const pagers = document.querySelectorAll(".pagination");
const pausePlayButton = document.querySelector(".pagination-control i");
const slideInfoText = document.getElementById("slide-info-text");

const pics = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];
const infoTexts = [
  "슬라이드 1: 여기는 첫 번째 슬라이드입니다.",
  "슬라이드 2: 두 번째 슬라이드의 내용입니다.",
  "슬라이드 3: 여기서는 세 번째 슬라이드를 볼 수 있습니다.",
  "슬라이드 4: 네 번째 슬라이드에 오신 것을 환영합니다.",
  "슬라이드 5: 다섯 번째 슬라이드의 내용입니다.",
  "슬라이드 6: 마지막 슬라이드입니다."
];

const pic = document.createElement("img");
pic.style.width = "100%";
pic.style.height = "100%";
pic.style.minHeight = "76vh";
pic.style.objectFit = "cover";
pic.style.objectPosition = "center";

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



