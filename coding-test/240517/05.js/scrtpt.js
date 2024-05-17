// const word = prompt("문장을 입력하세요");

// const solution = (word) => {
//   let answer = "";
//   let mid = Math.floor(word.length / 2);

//   if (word.length % 2 === 1) {
//     answer = word.substring(mid);
//   } else {
//   }
//   return answer;
// };

// console.log(solution(word));

const userInput = prompt("단어를 입력하세요..");

const solution = (userInput) => {
  let answer = "";
  let middle = Math.floor(userInput.length / 2);
  // 사용자가 입력한 문자열의 정가운데를 정의하는 기준값

  if (userInput.length % 2 === 1) {
    answer = userInput.substring(middle, middle + 1);
    // substring(a,b) : 문자열 객체의 시작 인덱스 (a)부터 종료 인덱스 (b) 직전까지의 문자열을 반환
  } else {
    answer = userInput.substring(middle - 1, middle + 1);
  }
  return answer;
};
console.log(solution(userInput));
