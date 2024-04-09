const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0); // toFixed = 소수점 자르기
};

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = percent(scrollNum, documentHeight) + "%";

  h1.innerText = per;
  progressBar.style.width = per;
});
