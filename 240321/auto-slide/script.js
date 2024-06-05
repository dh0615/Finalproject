const imgs = ["01.jpg", "02.jpg", "03.jpg"];

const container = document.querySelector("#container");
const pager = document.querySelectorAll(".pagers li");

const img = document.createElement("img");
img.src = `./img/${imgs[0]}`;
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
  img.src = `./img/${imgs[i]}`;
};

setInterval(() => {
  changeImg();
}, 3000);

const pageChange = (e) => {
  const target = parseInt(e.target.dataset.index, 10);
  pager.forEach((pagerItem, idx) => {
    if (idx === target) {
      pagerItem.classList.add("active");
      img.src = `./img/${imgs[idx]}`;
    } else {
      pagerItem.classList.remove("active");
    }
  });
  i = target;
};

pager.forEach((pagerItem, index) => {
  pagerItem.dataset.index = index;
  pagerItem.addEventListener("click", pageChange);
});
