document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // 이미 열려 있는 경우, 높이를 0으로 설정하여 닫습니다.
      content.style.maxHeight = null;
    } else {
      // 다른 모든 아코디언 섹션을 닫습니다.
      document
        .querySelectorAll(".accordion-content")
        .forEach((otherContent) => {
          otherContent.style.maxHeight = null;
        });
      // 선택된 섹션의 높이를 열어 실제 내용 높이에 맞춥니다.
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
