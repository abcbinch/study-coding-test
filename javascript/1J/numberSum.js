//나
function solution(numbers, n) {
  let sum = 0;
  numbers.forEach((comp) => (sum > n ? (sum += 0) : (sum += comp)));
  return sum;
}

//다른 사람
function solution2(numbers, n) {
  return numbers.reduce((a, c, i, t) => (a <= n ? a + c : a));
}
