// const arr = [5, "teacher", "time", "student", "beautiful", "good"];

// const solution = (arr) => {
//   let answer;
//   let max = Number.MAX_SAFE_INTEGER;
//   for (let word of arr) {
//     if (word.length > max) {
//       max = word.length;
//     }
//   }
//   return answer;
// };
// console.log(solution(arr));

const arr = [5, "teacher", "time", "student", "beautiful", "good"];

const solution = (arr) => {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  // JS에서 사용 가능한 가장 작은 정수값을 의미

  for (let text of arr) {
    if (text.length > max) {
      max = text.length;
      answer = text;
    }
  }
  return answer;
};
console.log(solution(arr));
