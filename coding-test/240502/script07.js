// 25 23 11 47 53 17 33
// 오늘 날짜 받기
// 제공된 자동차 번호들의 숫자와 비교하기
// 일치하는 번호의 개수 세기

// const arr = [25, 23, 11, 47, 53, 17, 33];
// const today = new Date();
// const todayDate = today.getDate();

// const solution = (arr) => {
//   let answer = [];
//   for(let number of arr) {
//     if(num % 10 === todayDate()) {

//     }
//   }
// };

// console.log(solution());
const arr = [25, 23, 11, 47, 53, 17, 33];
const day = Number(prompt("오늘 날짜 일의 자리 수 입력"));

const solution = () => {
  let answer = 0;
  for (let car of arr) {
    if (car % 10 === day) answer++;
  }

  return answer;
};

console.log(solution(day, arr));
