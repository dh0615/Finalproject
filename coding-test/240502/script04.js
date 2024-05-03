// const a = Number(prompt("숫자를 입력하세요"));

// const solution = (n) => {
//   for (let i = 0; i >= 100; i++) {
//     sum += i;
//   }
// };
// console.log(solution);
const a = Number(prompt("숫자 입력"));
const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
};
console.log(solution(a));
