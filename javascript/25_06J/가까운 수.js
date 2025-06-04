//가까운 수

//샘플 배열
let samArr = [3, 10, 28];
let n1 = 20;
let samArr2 = [10, 11, 12];
let n2 = 13;
let samArr3 = [2, 25, 23, 100];
let n3 = 24;

//array의 원소와 n의 차이를 비교한다.
//차이가 제일 작은 원소의 인덱스 i를 구한다음
//array[i]를 반환한다.

//가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
//가령 n이 24고, 배열에 23과 25가 있다고 하자.
//그럼 23을 반환한다.
//주의해야 할 점은,
//배열이 숫자 크기 순서대로 배열되어 있는 게 아니라는 점이다.
function solution(array, n) {
  //순서는 그대로 유지
  let diff = array.map((el) => {
    return Math.abs(el - n); //n과 원소의 차이를 구한다. 그리고 배열로 반환한다.
  });
  let minIdx = diff.indexOf(Math.min(...diff)); //제일 작은 수의 인덱스 번호
  console.log(minIdx);
  return array[minIdx]; //해당 인덱스 자리에 있는 원소를 가져온다.
}

let result = solution(samArr, n1);
let result2 = solution(samArr2, n2);
let result3 = solution(samArr3, n3);
console.log("결과1: ", result);
console.log("결과2: ", result2);
console.log("결과3: ", result3);

//테스트
let testArr = [1, 1, 2, 3, 4, 5];
let mini = testArr.indexOf(Math.min(...testArr)); //1개만 나온다
let minimum = Math.min(...testArr);
let allIdx = testArr.map((el, idx) => {
  if (el === minimum) return idx;
  else return "";
  //인덱스 번호를 전부 반환할 수는 있지만
  //불필요한 ''가 생긴다.
});
console.log("테스트용: ", mini);
console.log("테스트용: ", allIdx);

//필터?

//두 번째
function solution2(array, n) {
  //순서는 그대로 유지
  let diff = array.map((el) => {
    return Math.abs(el - n); //n과 원소의 차이를 구한다. 그리고 배열로 반환한다.
  });
  let mins = [];
  let minimum = Math.min(...diff);
  diff.map((el, idx) => {
    if (el === minimum) mins.push(array[idx]); //push? return?
  });

  console.log(mins);

  return Math.min(...mins); //해당 인덱스 자리에 있는 원소를 가져온다.
}

let result4 = solution2(samArr, n1);
console.log("2번째 시도1: ", result4);
let result5 = solution2(samArr3, n3);
console.log("2번째 시도1: ", result5);

console.log(samArr.sort((a, b) => a - b));

//다른 사람의 풀이
//1.

function solution3(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  //sort((a,b)=>a-b)는 오름차순으로 정렬하는 공식이다
  return array[0];
}
