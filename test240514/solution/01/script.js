const tweetBtn = document.querySelector("#tweetButton");
tweetBtn.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += "#mark";

  // 인코딩 & 디코딩
  // 웹의 개발은 미국 > 한국어 x
  // 인코딩 :  각 국에 사용자가 입력한 텍스트를 웹이 이해할 수 있는 언어구조로 바꿔줌
  const encodedText = encodeURIComponent(tweetText);

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetUrl);
});
