const buttons = document.querySelectorAll("button");
const tabs = document.querySelector(".tabs .items");
const h1 = document.querySelectorAll(".title");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabs.style.left = `-${index * 100}%`;

    buttons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
  });
});
