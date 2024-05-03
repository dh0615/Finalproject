// const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

// const solution = () => {
//   let answer = [];
//   // for (let num of arr) {
//   //   if ((sum += num = 100)) {
//   //     return answer;
//   //   }
//   // }
//   for (let i = 0; i <= arr.length; i++) {
//     if ((sum += i = 100)) {
//       return answer;
//     }
//   }
//   console.log(solution());
// };

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

const solution = (arr) => {
  const answer = arr;
  const sum = answer.reduce((a, b) => a + b, 0);
  let flag = false;

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return answer;
};

console.log(solution(arr));
