function solution(n, slicer, num_list) {
  var answer = [];
  let [a, b, c] = slicer;

  if (n === 1) {
    answer = num_list.slice(0, b + 1);
  } else if (n === 2) {
    answer = num_list.slice(a);
  } else if (n === 3) {
    answer = num_list.slice(a, b + 1);
  } else if (n === 4) {
    for (let i = a; i <= b + 1; i += c) {
      answer.push(num_list[i]);
    }
  }

  return answer;
}

//0 <= a <= b <= num_list.length-1
//c = 1,2,3

let testArr = [1, 2, 3, 4, 5, 6];
let testSlicer = [1, 1, 1];

console.log(solution(4, testSlicer, testArr));
