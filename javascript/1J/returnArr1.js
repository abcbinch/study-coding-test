//나
function solution(arr) {
  let answer = [];
  arr.map((comp) => {
    if (comp >= 50 && comp % 2 === 0) {
      answer.push(comp / 2);
    } else if (comp < 50 && comp % 2 === 1) {
      answer.push(comp * 2);
    } else {
      answer.push(comp);
    }
  });

  return answer;
}

//다른 사람
function solution2(arr) {
  return arr.map((num) => {
    if (num >= 50 && !(num % 2)) return num / 2;
    if (num < 50 && num % 2) return num * 2;
    return num;
  });
}
//조건문을 쓸 때마다 return을 해 주고 있다.
