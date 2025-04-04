function solution(arr) {
  let idxArr = [];

  arr.map((comp, idx) => (comp === 2 ? idxArr.push(idx) : ""));

  let answer = arr.slice(idxArr[0], idxArr[idxArr.length - 1] + 1);

  return answer;
}

let testArr = [1, 2, 1, 2, 1, 10, 2, 1];

console.log(solution(testArr));

//다른 사람의 풀이
//lastIndexOfs
function solution2(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}
