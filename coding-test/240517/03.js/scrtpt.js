// const word = prompt("문장을 입력하세요");

// const solution = (userAnswer) => {
//   let answer = "";

//   for (let word of userAnswer) {
//     if (word === word.toLowercase()) {
//       answer += word.toUpperCase();
//     } else {
//       answer += word.toLowerCase();
//     }
//   }
//   return answer;
// };
// console.log(solution(userAnswer));

const userInput = prompt("영단어 입력");

const solution = (userInput) => {
  let answer = "";

  for (let k of userInput) {
    if (k === k.toUpperCase()) {
      answer += k.toLowerCase();
    } else {
      answer += k.toUpperCase();
    }
  }
  return answer;
};
console.log(solution(userInput));
