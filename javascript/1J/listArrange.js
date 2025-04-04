//나
function solution(arr, query) {
  var answer = [];
  let slicer;

  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      slicer = query[i];
      arr = arr.slice(0, slicer + 1);
    } else {
      slicer = query[i];
      arr = arr.slice(slicer);
    }
  }

  return arr;
}

//다른 사람
//짝수일 때 splice(0,v), 홀수일 때 splice(v+1)
function solution2(arr, query) {
  query.map((v, i) => (i % 2 ? arr.splice(0, v) : arr.splice(v + 1)));
  return arr;
}

//인덱스가 짝수라면 뒤를 잘라내고
//홀수라면 앞을 잘라낸다.

let testArr = [0, 1, 2, 3, 4, 5];
let testQuery = [4, 1, 2];

console.log(solution2(testArr, testQuery));

let testArr2 = [0, 1, 2, 3, 4, 5];

console.log(testArr2.splice(0, 4));
