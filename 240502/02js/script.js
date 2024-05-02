const titles = document.querySelectorAll(".accordian-item .title");
titles.forEach((title) => {
  title.addEventListener("click", function () {
    const content = this.nextElementSibling;
    // content.style.transitionProperty = "all";
    // content.style.transitionDuration = "0.3s";
    // content.style.transitionTimingFunction = "linear";
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    this.classList.toggle("active");
  });
});
