//나
function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }
  return answer;
}

//다른 사람
const solution2 = (num_list, n) => num_list.filter((_, i) => !(i % n));
//인덱스(i)가 n의 배수(나머지가 0, 즉 false일 때)인 것만 남기도록 했다.
