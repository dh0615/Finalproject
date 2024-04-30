const slide = document.querySelector(".slide");
const pager = document.querySelector(".slide-pager");
const pagers = document.querySelectorAll(".pagination");

const pics = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];
const pic = document.createElement("img");
pic.style.width = "100%";

const src = document.createAttribute("src");
const picSrc = `./slide/${pics[0]}`;
src.value = picSrc;
pic.setAttributeNode(src);
slide.appendChild(pic);

let i = 0;
const changeImg = () => {
  i++;
  if (i >= pics.length) {
    i = 0;
  }
  pagers.forEach((pager, idx) => {
    if (idx !== i) {
      pagers[idx].classList.remove("active");
    }
  });
  pagers[i].classList.add("active");
  src.value = `./slide/${pics[i]}`;
};

setInterval(() => {
  changeImg();
}, 3000);
