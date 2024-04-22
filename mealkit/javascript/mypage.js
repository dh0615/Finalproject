const titles = document.querySelectorAll(".title");
const details = document.querySelectorAll(".detail");

const firstDetail = titles[0].nextElementSibling;
firstDetail.style.display = "block";

titles.forEach((title) => {
  title.addEventListener("click", function () {
    title.classList.remove("active");
  });
  this.classList.toggle("active");
  const detail = this.nextElementSibling;
  detail.style.display = "block";
  details.forEach((d) => {
    if (d !== detail) {
      d.style.display = "none";
    }
  });
});
