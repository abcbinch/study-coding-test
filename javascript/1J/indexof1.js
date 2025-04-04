//나
function solution(arr, idx) {
  arr.splice(0, idx);
  let answer = arr.indexOf(1) > -1 ? arr.indexOf(1) + idx : -1;

  return answer;
}

//해답1
const solution2 = (a, i) => a.indexOf(1, i);
//indexOf(찾을 요소, 시작점의 인덱스)

//해답2
function solution3(arr, idx) {
  return arr.findIndex((v, i) => idx <= i && v === 1);
}
