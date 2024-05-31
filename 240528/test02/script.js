const spinner = document.querySelector("#spinner");
const checkbox = document.querySelector("#animationiteration");
const result = document.querySelector("#result");

checkbox.addEventListener("click", function () {
  if (this.checked) {
    result.innerText = `${this.id} 발생 : ${new Date().toLocaleTimeString()}`;
    spinner.style.animationPlayState = "paused";
  } else {
    result.innerText = "";
    spinner.style.animationPlayState = "running";
  }
});
