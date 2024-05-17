// 중복되어지는 문자열 제거
//https://blacklobster.tistory.com/14
const userInput = prompt("문자입력");

const solution = (userInput) => {
  let answer = "";
  for (let i = 0; i < userInput.length; i++) {
    if (userInput.indexOf(userInput[i]) === i) answer += userInput[i];
  }
  return answer;
};

console.log(solution(userInput));
