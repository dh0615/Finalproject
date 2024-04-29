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
const changeImg = () => {
  i++;
  if (i >= imgs.length) {
    i = 0;
  }
  pager.forEach((otherpagers, idx) => {
    if (idx !== i) {
      pager[idx].classList.remove("active");
    }
  });
  pager[i].classList.add("active");
  src.value = `./images/${imgs[i]}`;
};

setInterval(() => {
  changeImg();
}, 3000);

const pageChange = (e) => {
  const target = e.target.dataset.index;
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
