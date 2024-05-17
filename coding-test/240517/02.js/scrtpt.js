// const word = prompt("문장을 입력하세요");

// const solution = () => {
//   let answer = "";

//   for (let b of word) {
//     answer += b.toUpperCase();
//   }
//   return answer;
// };
// console.log(solution(word));

const userAnswer = prompt("영단어 입력");

const solution = (userAnswer) => {
  let answer = "";

  for (let word of userAnswer) {
    if (word === word.toLowerCase()) {
      answer += word.toUpperCase();
    } else {
      answer += word;
    }
  }
  return answer;
};

console.log(solution(userAnswer));
