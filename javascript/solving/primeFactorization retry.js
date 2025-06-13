//소인수분해 재시도

//set 사용법
//선언
//const mySet = new Set();
//추가
//mySet.add('a');

let sam = 12;

function getDivisor(n) {
  let divisor = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisor.push(i);
  }
  divisor.length === 2
    ? console.log("소수입니다.")
    : console.log("소수가 아닙니다.");
  return divisor;
}

let res = getDivisor(12);
console.log(res);
let res2 = getDivisor(17);
console.log(res2);

function solution(n) {}

// let res3 = solution(sam);
// console.log(res3);
