// const sentence = prompt("문장을 입력하세요");
// const alphabet = prompt("알파벳을 입력하세요");
// const countAlphabet = sentence.split("alphabet.value").length - 1;
// console.log(countAlphabet);

//======

const str = prompt("단어를 입력하세요,,");
const search = prompt("찾고 싶은 단어를 입력하세요,,");

const solution = (str, search) => {
  let answer = 0;
  for (let word of str) {
    if (word === search) answer++;
  }
  return answer;
};
console.log(solution(str, search));
