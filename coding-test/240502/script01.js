// const userA = prompt("값을 입력하세요");
// const userB = prompt("값을 입력하세요");
// const userC = prompt("값을 입력하세요");
// const result = document.querySelector(".result");

// const userMin = Math.min(userA, userB, userC);

// console.log(userMin);

// document.write("가장 작은 수는" + `${userMin}` + "입니다");

const a = Number(prompt("첫번째 숫자"));
const b = Number(prompt("두번째 숫자"));
const c = Number(prompt("세번째 숫자"));

const solution = (a, b, c) => {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) answer = c;

  return answer;
};
console.log(solution(a, b, c));
