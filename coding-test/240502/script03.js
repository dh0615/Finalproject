// const student = Number(prompt("학생 수를 입력하세요"));
// console.log(student);

// const solution = () => {
//   Math.ceil(student / 12);
// };
// console.log(solution);

const a = Number(prompt("사람 수"));

const solution = (n) => {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
};
console.log(solution(a));
