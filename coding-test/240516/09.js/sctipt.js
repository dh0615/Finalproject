// const userWord = prompt("단어를 입력하세요");
// const aWord = userWord.replace("a", "#") && userWord.replace("A", "#");
// console.log(aWord);

// ======
const userAnswer = prompt("A가 포함된 단어 입력");
const solution = (word) => {
  let answer = word;
  answer = answer.replace(/A/gi, "#");
  // /A/gi A를 대소문자 가리지 않고 찾으라는 뜻
  // g = global(전역)
  // i : ignore case(제외 혹은 열외를 허용하지 않음)
  return answer;
};
console.log(solution(userAnswer));
