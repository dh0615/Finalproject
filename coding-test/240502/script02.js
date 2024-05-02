// 삼각형이 완성되기 위한 전제조건
// 3개의 변 중 가장 긴 변의 길이가 나머지 2개의 변의 길이의 합과 같거나 크면 삼각형이 될 수 없음!!

// const a = Number(prompt("값을 입력하세요"));
// const b = Number(prompt("값을 입력하세요"));
// const c = Number(prompt("값을 입력하세요"));

// const solution = (a, b, c) => {
//   const maxLine = Math.max(a, b, c);
//   if ((maxLine = a || maxLine > b)) {
//     alert("no");
//   } else {
//     alert("yes");
//   }
// };

const a = Number(prompt("첫번째 숫자"));
const b = Number(prompt("두번째 숫자"));
const c = Number(prompt("세번째 숫자"));

const solution = (a, b, c) => {
  let answer = "YES...";
  let max;
  let tot = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) max = c;

  if (tot - max <= max) answer = "NO...";

  return answer;
};
console.log(solution(a, b, c));
