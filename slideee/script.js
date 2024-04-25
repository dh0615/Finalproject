const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth; // slide 전체 크기 구하기

const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

let slideItems = document.querySelectorAll(".slide_item");
const maxSlide = slideItems.length; // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수

let currSlide = 1; // 버튼을 클릭할 때마다 현재 슬라이드가 어디인지 알려주기위한 함수

const pagination = document.querySelector(".slide-pagination");

// 페이지네이션 생성
for (let i = 0; i < maxSlide; i++) {
  if (i === 0) {
    pagination.innerHTML += `<li class="active">o</li>`;
  } else pagination.innerHTML += `<li>o</li>`;
}

const paginationItems = document.querySelectorAll(".slide-pagination > li");

// 무한슬라이드를 위해 start, end 슬라이드 복사하기
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 각 복제한 엘리먼트 추가하기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
slideItem = document.querySelectorAll(".slide_item");

let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.style.left = `${-offset}px`;
  // i.setAttribute("style", `left: ${-offset}px`)
});

function nextMove() {
  currSlide++;
  if (currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.style.left = `${-offset}px`;
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      (i.style.transition = `${0}s`), (i.style.left = `${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        (i.style.transition = `${0}s`), (i.style.left = `${-offset}px`);
      }, 0);
    });
  }
}
