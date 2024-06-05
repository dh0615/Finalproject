const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
console.log(aside);
const close = aside.querySelector("span");

for (let item of items) {
  item.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector("video").play();
    /* console.log(e.currentTarget.querySelector("video").play()); */
  });
  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
    /* console.log(e.currentTarget.querySelector("video").pause()); */
  });

  item.addEventListener("click", (e) => {
    const tit = e.currentTarget.querySelector("h2").innerText;
    /* target은 실제로 클릭한 p나 영상을 찾아오는데 어디를 클릭하더라도 h2를 찾아오고 싶었기 때문에 currentTarget을 쓴 것 (버블링 > 형제요소 찾아옴) */
    const txt = e.currentTarget.querySelector("p").innerText;
    const vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);
    // video의 src속성에 vidSrc 함수를 주겠다는 뜻
    aside.querySelector("video").play();
    aside.classList.add("on");

    close.addEventListener("click", () => {
      aside.classList.remove("on");
      aside.querySelector("video").pause();
    });
  });
}
