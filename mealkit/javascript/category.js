const titles = document.querySelectorAll(".category-accordion .title");
const details = document.querySelectorAll(".category-accordion .detail");

const firstDetail = titles[0].nextElementSibling;
firstDetail.style.display = "block";

// titles.addEventListener("click", () => {
//   titles.classList.add("active");
//   details.style.display = "block";
// });

// 유사배열 반복,, foreach
titles.forEach((title) => {
  title.addEventListener("click", function () {
    titles.forEach((title) => {
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
});
