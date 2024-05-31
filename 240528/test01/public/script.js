const dropArea = document.querySelector("#dropArea");
const dropImage = document.querySelector("#dropImage");

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image")) {
    displayImage(file);
  }
});

function displayImage(file) {
  const reader = new FileReader();
  reader.onload = () => {
    dropImage.src = reader.result;
    dropImage.style.display = "block";
  };
  reader.readAsDataURL(file);
}
