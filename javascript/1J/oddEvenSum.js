//나
function solution(num_list) {
  let oddArr = num_list.filter((_, idx) => idx % 2 === 1);
  let oddSum = oddArr.reduce((acc, cur) => (acc += cur));

  let evenArr = num_list.filter((_, idx) => idx % 2 === 0);
  let evenSum = evenArr.reduce((acc, cur) => (acc += cur));

  return oddSum > evenSum ? oddSum : evenSum;
}

//다른 사람
function solution2(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !(idx % 2) ? (even += v) : (odd += v);
  });

  return odd > even ? odd : even;
}
//인덱스가 홀수면 odd에, 짝수면 even에 합한다.
