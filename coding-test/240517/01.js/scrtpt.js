// const userWord = Number(prompt("문장을 입력하세요"));

// const UpperCaseWord = () => {
//   userWord.toUpperCase();
// };

// console.log(UpperCaseWord);

const word = prompt("문장을 입력하세요");

const solution = () => {
  let answer = 0;

  for (let b of word) {
    if (b === b.toUpperCase()) answer++;
  }
  return answer;
};

console.log(solution(word));
