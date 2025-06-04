//컨트롤 제트

//숫자와 z가 섞인 문자열.
//공백으로 구분.
//z가 나오면 이전에 더했던 숫자를 도로 뺀다는 뜻.

let sam = "1 2 Z 3";
let sam2 = "10 20 30 40";
let sam3 = "10 Z 20 Z 1";
let sam4 = "10 Z 20 Z";
let sam5 = "-1 -2 -3 Z";

//z를 기준으로 왼쪽의 문자를 빼 버릴 수 있을까?
//정규식?

function solution(s) {
  let samArr = s.split(" ");
  let sum = 0;

  for (let i = 0; i < samArr.length; i++) {
    samArr[i] === "Z"
      ? (sum -= Number(samArr[i - 1]))
      : (sum += Number(samArr[i]));
  }

  return sum;
}

let result = solution(sam);
console.log(result);
let result2 = solution(sam2);
console.log(result2);
let result3 = solution(sam3);
console.log(result3);
