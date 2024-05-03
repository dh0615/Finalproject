// const result = document.querySelector("#result");
// const a = Number(prompt("숫자를 입력하세요"));
// const b = Number(prompt("숫자를 입력하세요"));
// const c = Number(prompt("숫자를 입력하세요"));
// const d = Number(prompt("숫자를 입력하세요"));
// const e = Number(prompt("숫자를 입력하세요"));
// const f = Number(prompt("숫자를 입력하세요"));
// const g = Number(prompt("숫자를 입력하세요"));

// const solution = (a, b, c, d, e, f, g) => {
//   const minNum = Math.min(a, b, c, d, e, f, g);
// };

// console.log(solution);
// const solution = (a, b, c, d, e, f, g) => {
//   let min;
//   if (a < b) {
//     min = a;
//   } else {
//     min = b;
//   }
//   if
// };

// result.innerHTML = "최소값은" + Math.min(a, b, c, d, e, f, g);

// console.log(Math.min(a, b, c, d, e, f, g));

const arr = [5, 3, 7, 11, 2, 15, 17];
const solution = (arr) => {
  // 변수 :  어떠한 값을 담을 수 있는 그릇
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  answer = min;
  return answer;
};
console.log(solution());
