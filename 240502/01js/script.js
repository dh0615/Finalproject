const titles = document.querySelectorAll(".accordian .title");
const contents = document.querySelectorAll(".accordian .content");

// contents[0].style.display = "block";

titles.forEach((title) => {
  title.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const allTitles = this.parentNode.querySelectorAll(".accordian .title");
    const allContents = this.parentNode.querySelectorAll(".accordian .content");

    /* 선택된 요소만 보이게 */
    allContents.forEach((item) => {
      if (item !== content) {
        item.style.display = "none";
      }
    });
    content.style.display =
      content.style.display === "block" ? "none" : "block";
    this.classList.toggle("active");
    allTitles.forEach((item) => {
      if (item !== title) {
        item.classList.remove("active");
      }
    });
    /* transition: max-height 0.3s ease-out; */
  });
});
