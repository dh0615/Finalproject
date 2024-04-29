const imgs = ["slide-01.jpg", "slide-02.jpg", "slide-03.jpg"];

const container = document.querySelector("#container");
const pagers = document.querySelector(".pagers");
const pager = document.querySelectorAll(".pagers li");

const img = document.createElement("img");
const src = document.createAttribute("src");
const imgSrc = `./images/${imgs[0]}`;
src.value = imgSrc;
img.setAttributeNode(src);
container.appendChild(img);

let i = 0;
const changeImg = (direction) => {
  if (direction === "next") {
    i++;
    if (i >= imgs.length) {
      i = 0;
    }
    reset();
    pager[i].classList.add("active");
  } else if (direction === "prev") {
    i--;
    if (i < 0) {
      i = imgs.length - 1;
    }
    reset();
    pager[i].classList.add("active");
  }
  src.value = `./images/${imgs[i]}`;
};

const autoSlide = () => {
  timer = setInterval(() => {
    changeImg("next");
  }, 3000);
};
autoSlide();

const pageChange = (e) => {
  const target = e.target.dataset.index;
  reset();
  for (let i = 0; i < pager.length; i++) {
    if (target === i) {
      pager[i].classList.add("active");
      src.value = `./images/${imgs[i]}`;
    }
  }
};
pager.forEach((pagerItem) => {
  pagerItem.addEventListener("click", pageChange);
});
